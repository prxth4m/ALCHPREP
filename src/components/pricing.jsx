import React, { useState, useEffect } from 'react';
import { Check, X, Sun, Moon, Target, Users, BarChart3, BookOpen, Trophy, ShieldCheck, MessageCircle, GitFork } from 'lucide-react';

const Pricing = () => {
  const [theme, setTheme] = useState('dark');
  const [selectedPlan, setSelectedPlan] = useState('alchprep');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const plans = [
    {
      id: 'basic',
      name: "Basic Plan",
      company: "Competitor A",
      price: "$29",
      period: "/month",
      isActive: false,
      features: [
        { name: "Mock Tests", value: "5 tests/month", included: true },
        { name: "Interviews", value: "2 interviews/month", included: true },
        { name: "AI Analysis", value: "Basic reports", included: true },
        { name: "Tutorials", value: "Not included", included: false },
        { name: "Leaderboard", value: "Not included", included: false },
        { name: "Personalized Study Plan", value: "Not included", included: false },
        { name: "Community Forums", value: "Not included", included: false },
        { name: "Support", value: "Email only", included: true }
      ]
    },
    {
      id: 'pro',
      name: "Pro Plan",
      company: "Competitor B",
      price: "$59",
      period: "/month",
      isActive: false,
      features: [
        { name: "Mock Tests", value: "20 tests/month", included: true },
        { name: "Interviews", value: "10 interviews/month", included: true },
        { name: "AI Analysis", value: "Detailed reports", included: true },
        { name: "Tutorials", value: "Limited access", included: true },
        { name: "Leaderboard", value: "Basic ranking", included: true },
        { name: "Personalized Study Plan", value: "Not included", included: false },
        { name: "Community Forums", value: "Included", included: true },
        { name: "Support", value: "Priority email", included: true }
      ]
    },
    {
      id: 'alchprep',
      name: "ALCHPREP",
      company: "Complete Solution",
      price: "FREE",
      period: "Forever",
      isActive: true,
      features: [
        { name: "Mock Tests", value: "UNLIMITED", included: true },
        { name: "Interviews", value: "UNLIMITED", included: true },
        { name: "AI Analysis", value: "Advanced AI Analysis", included: true },
        { name: "Tutorials", value: "Full Tutorial Library", included: true },
        { name: "Leaderboard", value: "Global Ranking", included: true },
        { name: "Personalized Study Plan", value: "Dynamic, AI-powered", included: true },
        { name: "Community Forums", value: "Expert-moderated", included: true },
        { name: "Support", value: "24/7 Premium", included: true }
      ]
    }
  ];

  const getCardClasses = (plan) => {
    const isSelected = selectedPlan === plan.id;
    const isDisabled = !plan.isActive;
    const baseClasses = 'relative rounded-3xl backdrop-blur-md border transition-all duration-500';
    const interactivityClasses = isDisabled
      ? 'cursor-not-allowed opacity-70'
      : (isSelected
        ? 'scale-105 shadow-2xl shadow-blue-500/20'
        : 'hover:scale-102 hover:shadow-lg cursor-pointer');

    const themeClasses = isSelected
      ? 'bg-white/80 dark:bg-zinc-800/80 border-blue-500'
      : 'bg-white/60 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 hover:border-blue-500/50';

    return `${baseClasses} ${interactivityClasses} ${themeClasses}`;
  };

  const getButtonClasses = () => {
    const baseClasses = 'px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-md border transition-all duration-300 hover:scale-105';
    const themeClasses = 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 dark:hover:bg-white';
    return `${baseClasses} ${themeClasses}`;
  };

  return (
    <section className={`min-h-screen py-20 px-4 transition-colors duration-500 font-inter bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50`}>
      <div className="mx-auto max-w-7xl">
        {/* Theme Toggle Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg bg-white/70 text-zinc-600 hover:bg-white/90 border border-zinc-200 dark:bg-zinc-800/70 dark:text-zinc-300 dark:hover:bg-zinc-700/70 dark:border-zinc-700`}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 text-zinc-900 dark:text-zinc-100`}>
            Choose Your Path to Success
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto text-zinc-600 dark:text-zinc-400`}>
            Compare our comprehensive, completely free solution against what others charge for limited access.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={getCardClasses(plan)}
              onClick={plan.isActive ? () => setSelectedPlan(plan.id) : null}
            >
              {/* Coming Soon/Recommended Labels */}
              <div className="absolute top-4 right-4">
                {plan.isActive && (
                  <span className="px-4 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white shadow-md">
                    RECOMMENDED
                  </span>
                )}
                {!plan.isActive && (
                  <span className="px-4 py-1 text-xs font-semibold rounded-full bg-zinc-200 text-zinc-600 shadow-md dark:bg-zinc-600/50 dark:text-zinc-300">
                    Coming Soon
                  </span>
                )}
              </div>

              <div className="p-8">
                <div className="flex items-center mb-6">
                  {/* Radio Button Style Indicator */}
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                    selectedPlan === plan.id
                      ? 'border-blue-500'
                      : 'border-zinc-400'
                  }`}>
                    {selectedPlan === plan.id && (
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className={`text-2xl font-bold text-zinc-900 dark:text-zinc-100`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm text-zinc-600 dark:text-zinc-400`}>
                      {plan.company}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className={`text-5xl font-extrabold text-zinc-900 dark:text-zinc-100`}>
                      {plan.price}
                    </span>
                    <span className={`ml-2 text-lg text-zinc-500 dark:text-zinc-400`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check className={`h-5 w-5 ${plan.isActive ? 'text-green-500' : 'text-zinc-500'}`} />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
                        )}
                        <span className={`text-base font-medium text-zinc-700 dark:text-zinc-300`}>
                          {feature.name}
                        </span>
                      </div>
                      <span className={`text-sm ${
                        feature.value.includes('UNLIMITED') || feature.value.includes('AI-powered')
                          ? 'text-green-500 font-bold'
                          : 'text-zinc-600 dark:text-zinc-400'
                      }`}>
                        {feature.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Highlight Section */}
        <div className={`p-10 rounded-3xl backdrop-blur-md border transition-all duration-500 shadow-xl bg-white/60 border-zinc-200 dark:bg-zinc-800/50 dark:border-zinc-700`}>
          <h3 className={`text-3xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-100`}>
            Why Choose ALCHPREP?
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <Target className="h-7 w-7" />, title: "Unlimited Tests" },
              { icon: <Users className="h-7 w-7" />, title: "AI-Powered Interviews" },
              { icon: <BarChart3 className="h-7 w-7" />, title: "Advanced AI Analysis" },
              { icon: <BookOpen className="h-7 w-7" />, title: "Full Tutorial Library" },
              { icon: <Trophy className="h-7 w-7" />, title: "Global Leaderboard" },
              { icon: <ShieldCheck className="h-7 w-7" />, title: "Personalized Plans" },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex p-4 rounded-full mb-3 bg-blue-100/50 text-blue-600 dark:bg-zinc-700/50 dark:text-blue-400`}>
                  {feature.icon}
                </div>
                <h4 className={`font-semibold text-sm text-zinc-700 dark:text-zinc-300`}>
                  {feature.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <button className={getButtonClasses()}>
            Get Started with {plans.find(p => p.id === selectedPlan)?.name}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;