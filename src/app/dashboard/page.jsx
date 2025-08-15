"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  BellIcon, 
  BarChart2, 
  TrendingUp, 
  LayoutDashboard, 
  Home,
  User, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer
} from 'recharts';

// --- Mock Data ---
const dummyExams = [
  { exam: "SAT", score: "1480", percentile: "95th", status: "Completed" },
  { exam: "GRE", score: "325", percentile: "90th", status: "In Progress" },
  { exam: "IELTS", score: "8.0", percentile: "99th", status: "Completed" },
];
const StudyHoursGoal = 200;
const CurrentStudyHours = 145;
const progressValue = (CurrentStudyHours / StudyHoursGoal) * 100;

const mockRatingData = [
  { name: 'Week 1', rating: 1200 }, { name: 'Week 2', rating: 1250 }, { name: 'Week 3', rating: 1230 },
  { name: 'Week 4', rating: 1300 }, { name: 'Week 5', rating: 1350 }, { name: 'Week 6', rating: 1320 },
  { name: 'Week 7', rating: 1400 },
];

const mockLeaderboardData = [
  { rank: 1, user: "AlphaTester", rating: 1850 }, { rank: 2, user: "BetaPro", rating: 1780 },
  { rank: 3, user: "GammaMaster", rating: 1750 }, { rank: 4, user: "Hello", rating: 1400 },
  { rank: 5, user: "CodeChamp", rating: 1390 },
];

//-- meta data


// --- Sub-components (Heatmap, Graph) ---
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

const ActivityHeatmap = () => {
  const daysInYear = 365;
  const mockActivityData = useMemo(() => generateMockActivityData(daysInYear), []);
  const today = new Date();
  const days = Array.from({ length: daysInYear }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (daysInYear - 1 - i));
    return date;
  });
  const getHeatmapColor = (count) => {
    return ['bg-zinc-800', 'bg-green-700', 'bg-green-600', 'bg-green-500', 'bg-green-400'][count] || 'bg-zinc-800';
  };
  
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-zinc-400">
        <span className="text-sm">Past Year</span>
        <div className="flex items-center text-sm">Less
          <div className="mx-2 flex">{[...Array(5)].map((_, i) => (<div key={i} className={`mx-0.5 h-3 w-3 rounded-sm border border-zinc-700 ${getHeatmapColor(i)}`} />))}</div>More
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-7 gap-0.5 overflow-x-auto p-1">
        {days.map((date) => {
          const dateString = date.toISOString().split('T')[0];
          const activityCount = mockActivityData[dateString] || 0;
          return (
            <div 
              key={dateString} 
              className={`h-3.5 w-3.5 rounded-sm transition-colors duration-200 ${getHeatmapColor(activityCount)}`} 
              title={`${dateString}: ${activityCount} activities`} 
            />
          );
        })}
      </div>
    </div>
  );
};

const RatingGraph = () => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={mockRatingData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#52525B" />
      <XAxis dataKey="name" stroke="#A1A1AA" tickLine={false} axisLine={false} />
      <YAxis stroke="#A1A1AA" tickLine={false} axisLine={false} />
      <RechartsTooltip contentStyle={{ backgroundColor: '#27272A', border: '1px solid #3F3F46', borderRadius: '8px' }} labelStyle={{ color: '#E4E4E7' }} itemStyle={{ color: '#E4E4E7' }} />
      <Line type="monotone" dataKey="rating" stroke="#60A5FA" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

// --- Collapsible Sidebar ---
const CollapsibleSidebar = ({ email, username, onLogout }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkScreenSize = () => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        if (mobile) setIsCollapsed(true);
      };
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, []);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: User, label: "Profile", href: "/dashboard/profile" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" }
  ];

  const getInitials = (email) => {
    if (!email) return "U";
    const name = email.split('@')[0];
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <TooltipProvider>
      <div className={`flex flex-col h-screen bg-zinc-900 border-r border-zinc-800 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          {!isCollapsed && <h2 className="text-lg font-semibold tracking-tight text-white">ALCHPREP</h2>}
          <Button variant="ghost" size="sm" onClick={toggleSidebar} className="h-8 w-8 p-0 text-zinc-400 hover:text-white hover:bg-zinc-800">
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 p-2">
          <nav className="space-y-2">
            {menuItems.map((item, index) => {
              const MenuItem = (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 rounded-md hover:text-white hover:bg-zinc-800 transition-colors ${isCollapsed ? 'justify-center' : ''}`}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              );

              return isCollapsed ? (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>{MenuItem}</TooltipTrigger>
                  <TooltipContent side="right"><p>{item.label}</p></TooltipContent>
                </Tooltip>
              ) : MenuItem;
            })}
          </nav>
        </div>

        {/* User Account */}
        <div className="p-4 border-t border-zinc-800">
          <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
            <Avatar className="h-8 w-8">
              <AvatarImage src={`https://avatars.dicebear.com/api/initials/${username}.svg`} />
              <AvatarFallback className="bg-blue-600 text-white text-xs">{getInitials(email)}</AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{username}</p>
                <p className="text-xs text-zinc-400 truncate">{email}</p>
              </div>
            )}
          </div>
          <div className="mt-3">
            {isCollapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" onClick={onLogout} className="h-8 w-8 p-0 text-zinc-400 hover:text-red-400 hover:bg-zinc-800">
                    <LogOut className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right"><p>Logout</p></TooltipContent>
              </Tooltip>
            ) : (
              <Button variant="ghost" size="sm" onClick={onLogout} className="w-full justify-start gap-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-800">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

// --- Main Dashboard Component ---
export default function ExamAnalyticsDashboard() {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);

   useEffect(() => {
    // Ensure this runs only on client
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("email");
      const storedUsername =
        localStorage.getItem("username") ||
        (storedEmail ? storedEmail.split("@")[0] : "User");

      setEmail(storedEmail);
      setUsername(storedUsername);

      // Update title after component mounts
      document.title = "Dashboard | Alchprep";
    }
  }, []);
 

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('email');
      localStorage.removeItem('username');
      window.location.href = '/login';
    }
  };

  if (!email) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center rounded-lg bg-zinc-950 p-8 text-center text-white shadow-xl">
        <BellIcon className="mb-4 h-16 w-16 text-zinc-500" />
        <h2 className="mb-2 text-2xl font-bold">Access Denied</h2>
        <p className="text-zinc-400">Please log in to view your personalized exam analytics.</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-zinc-950 font-sans text-white overflow-hidden">
      <CollapsibleSidebar email={email} username={username} onLogout={handleLogout} />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="p-4 md:p-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-2 bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-2xl md:text-4xl font-extrabold text-transparent">
              Hello, <span className="font-semibold">{username}</span> 👋
            </h1>
            <p className="mb-6 md:mb-10 text-lg md:text-xl font-light text-zinc-400">
              Here is your personalized exam preparation dashboard.
            </p>

            <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* User's Rating Card */}
              <Card className="border border-zinc-700 bg-zinc-800/50 text-white backdrop-blur-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-semibold">Your Rating</CardTitle>
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </CardHeader>
                <CardContent>
                  <p className="mb-1 text-4xl font-bold">1400</p>
                  <p className="text-xs text-zinc-400">+50 from last week</p>
                  <div className="mt-4">
                    <RatingGraph />
                  </div>
                </CardContent>
              </Card>

              {/* Exam Performance Card */}
              <Card className="border border-zinc-700 bg-zinc-800/50 text-white backdrop-blur-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-semibold">Your Exam Scores</CardTitle>
                  <BarChart2 className="h-5 w-5 text-zinc-400" />
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {dummyExams.map((item, index) => (
                      <li key={index} className="flex items-center justify-between">
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
              <Card className="border border-zinc-700 bg-zinc-800/50 text-white backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Study Progress</CardTitle>
                  <CardDescription className="text-zinc-400">
                    You've completed {CurrentStudyHours} of your {StudyHoursGoal} hour goal.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={progressValue} className="h-2 bg-zinc-800 [&>*]:bg-blue-500" />
                  <p className="mt-4 text-sm font-light text-zinc-400">
                    Keep up the great work! You are {progressValue.toFixed(0)}% of the way there.
                  </p>
                </CardContent>
              </Card>

              {/* Activity Heatmap Card */}
              <Card className="border border-zinc-700 bg-zinc-800/50 text-white backdrop-blur-md md:col-span-2">
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
              <Card className="border border-zinc-700 bg-zinc-800/50 text-white backdrop-blur-md lg:col-span-1">
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
                        <TableRow key={index} className="border-b border-zinc-800 last:border-b-0 transition-colors hover:bg-zinc-800/50">
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
      </main>
    </div>
  );
}
