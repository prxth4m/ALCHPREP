"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BellIcon, Globe, BarChart2, Award, Trophy, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Header } from '@/components/header';

// --- Mock Data ---

const dummyExams = [
  { exam: "SAT", score: "1480", percentile: "95th", status: "Completed" },
  { exam: "GRE", score: "325", percentile: "90th", status: "In Progress" },
  { exam: "IELTS", score: "8.0", percentile: "99th", status: "Completed" },
];

const mockRecentActivity = [
  { exam: "SAT", type: "Mock Test", score: "740/800", date: "2025-08-10" },
  { exam: "GRE", type: "Quant Quiz", score: "85%", date: "2025-08-14" },
  { exam: "IELTS", type: "Speaking Practice", score: "Band 8.5", date: "2025-08-13" },
];

const StudyHoursGoal = 200;
const CurrentStudyHours = 145;
const progressValue = (CurrentStudyHours / StudyHoursGoal) * 100;

// Mock data for the rating graph
const mockRatingData = [
  { name: 'Week 1', rating: 1200 },
  { name: 'Week 2', rating: 1250 },
  { name: 'Week 3', rating: 1230 },
  { name: 'Week 4', rating: 1300 },
  { name: 'Week 5', rating: 1350 },
  { name: 'Week 6', rating: 1320 },
  { name: 'Week 7', rating: 1400 },
];

// Mock data for the leaderboard
const mockLeaderboardData = [
  { rank: 1, user: "AlphaTester", rating: 1850 },
  { rank: 2, user: "BetaPro", rating: 1780 },
  { rank: 3, user: "GammaMaster", rating: 1750 },
  { rank: 4, user: "Hello", rating: 1400 },
  { rank: 5, user: "CodeChamp", rating: 1390 },
];

// --- Components ---

/**
 * Generates mock activity data for a heatmap visualization.
 * @param {number} days The number of days to generate data for.
 * @returns {Object} An object mapping date strings to activity counts (0-4).
 */
const generateMockActivityData = (days) => {
  const data = {};
  const today = new Date();
  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateString = date.toISOString().split('T')[0];
    data[dateString] = Math.floor(Math.random() * 5);
  }
  return data;
};

/**
 * A heatmap component to visualize study activity over time.
 */
const ActivityHeatmap = () => {
  const daysInYear = 365;
  const mockActivityData = generateMockActivityData(daysInYear);

  const today = new Date();
  const days = [];
  for (let i = 0; i < daysInYear; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    days.unshift(date);
  }

  const getHeatmapColor = (count) => {
    switch (count) {
      case 0: return 'bg-zinc-800';
      case 1: return 'bg-green-700';
      case 2: return 'bg-green-600';
      case 3: return 'bg-green-500';
      case 4: return 'bg-green-400';
      default: return 'bg-zinc-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2 text-zinc-400">
        <span className="text-sm">Past Year</span>
        <div className="flex items-center text-sm">
          Less
          <div className="flex mx-2">
            <div className="w-3 h-3 rounded-sm bg-zinc-800 mx-0.5 border border-zinc-700"></div>
            <div className="w-3 h-3 rounded-sm bg-green-700 mx-0.5 border border-zinc-700"></div>
            <div className="w-3 h-3 rounded-sm bg-green-600 mx-0.5 border border-zinc-700"></div>
            <div className="w-3 h-3 rounded-sm bg-green-500 mx-0.5 border border-zinc-700"></div>
            <div className="w-3 h-3 rounded-sm bg-green-400 mx-0.5 border border-zinc-700"></div>
          </div>
          More
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-7 gap-0.5 overflow-x-auto p-1">
        {days.map((date, index) => {
          const dateString = date.toISOString().split('T')[0];
          const activityCount = mockActivityData[dateString] || 0;
          return (
            <div 
              key={index} 
              className={`w-3.5 h-3.5 rounded-sm transition-colors duration-200 ${getHeatmapColor(activityCount)}`} 
              title={`${dateString}: ${activityCount} activities`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * A line chart component to display a user's rating progress over time.
 */
const RatingGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={mockRatingData}
        margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#52525B" />
        <XAxis dataKey="name" stroke="#A1A1AA" tickLine={false} axisLine={false} />
        <YAxis stroke="#A1A1AA" tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{ backgroundColor: '#27272A', border: '1px solid #3F3F46', borderRadius: '8px' }}
          labelStyle={{ color: '#E4E4E7' }}
          itemStyle={{ color: '#E4E4E7' }}
        />
        <Line type="monotone" dataKey="rating" stroke="#60A5FA" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

/**
 * The main dashboard component.
 */
export default function ExamAnalyticsDashboard() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    // Check local storage for the user's email
    const storedEmail = localStorage.getItem('email');
    setEmail(storedEmail);
  }, []);

  if (!email) {
    // Render a message or login prompt if no email is found
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-8 bg-zinc-950 text-white rounded-lg shadow-xl">
        <BellIcon className="w-16 h-16 text-zinc-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
        <p className="text-zinc-400">Please log in to view your personalized exam analytics.</p>
      </div>
    );
  }

  // Safely extract the username
  const username = email?.split('@')[0] || 'User';

  return (
    <div className="bg-zinc-950 text-white min-h-screen p-8 font-sans">
        <Header/>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-300">
          Hello, <span className="font-semibold">{username}</span> 👋
        </h1>
        <p className="text-xl text-zinc-400 font-light mb-10">
          Here is your personalized exam preparation dashboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* User's Rating Card */}
          <Card className="bg-zinc-800/50 backdrop-blur-md border border-zinc-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-semibold">Your Rating</CardTitle>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-1">1400</p>
              <p className="text-xs text-zinc-400">+50 from last week</p>
              <div className="mt-4">
                <RatingGraph />
              </div>
            </CardContent>
          </Card>

          {/* Exam Performance Card */}
          <Card className="bg-zinc-800/50 backdrop-blur-md border border-zinc-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-semibold">Your Exam Scores</CardTitle>
              <BarChart2 className="h-5 w-5 text-zinc-400" />
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {dummyExams.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{item.exam}</p>
                      <p className="text-xs text-zinc-400">{item.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">{item.score}</p>
                      <p className="text-xs text-zinc-400">{item.percentile}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="mt-4 w-full text-blue-400 hover:bg-zinc-800">
                View All Results
              </Button>
            </CardContent>
          </Card>

          {/* Study Hours Progress Card */}
          <Card className="bg-zinc-800/50 backdrop-blur-md border border-zinc-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Study Progress</CardTitle>
              <CardDescription className="text-zinc-400">
                You've completed {CurrentStudyHours} of your {StudyHoursGoal} hour goal.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* FIX: Corrected the Progress component prop */}
              <Progress value={progressValue} className="h-2 bg-zinc-800 [&>*]:bg-blue-500" />
              <p className="mt-4 text-sm font-light text-zinc-400">
                Keep up the great work! You are {progressValue.toFixed(0)}% of the way there.
              </p>
            </CardContent>
          </Card>

          {/* Activity Heatmap Card */}
          <Card className="col-span-1 md:col-span-2 bg-zinc-800/50 backdrop-blur-md border border-zinc-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Activity Heatmap</CardTitle>
              <CardDescription className="text-zinc-400">
                A visual representation of your study days over the past year.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ActivityHeatmap />
            </CardContent>
          </Card>

          {/* Leaderboard Card */}
          <Card className="col-span-1 lg:col-span-1 bg-zinc-800/50 backdrop-blur-md border border-zinc-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Leaderboard</CardTitle>
              <CardDescription className="text-zinc-400">
                See how you rank against other users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-zinc-700">
                    <TableHead className="text-zinc-400">Rank</TableHead>
                    <TableHead className="text-zinc-400">User</TableHead>
                    <TableHead className="text-zinc-400">Rating</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockLeaderboardData.map((user, index) => (
                    <TableRow key={index} className="border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/50 transition-colors">
                      <TableCell className="font-semibold text-white">{user.rank}</TableCell>
                      <TableCell className="text-zinc-300">{user.user}</TableCell>
                      <TableCell className="text-zinc-300">{user.rating}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
