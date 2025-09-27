import React, { useState } from 'react';
import { Trophy, Medal, Star, TrendingUp, Calendar, Users, MessageSquare, Award } from 'lucide-react';

const LeaderboardPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('overall');

  const leaderboardData = [
    {
      rank: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      points: 2847,
      badge: 'Community Champion',
      contributions: {
        events: 12,
        discussions: 34,
        mentoringSessions: 28,
        connections: 156
      },
      growth: '+245',
      department: 'Computer Science',
      graduationYear: 2019
    },
    {
      rank: 2,
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      points: 2634,
      badge: 'Mentor Master',
      contributions: {
        events: 8,
        discussions: 45,
        mentoringSessions: 41,
        connections: 134
      },
      growth: '+198',
      department: 'Business',
      graduationYear: 2020
    },
    {
      rank: 3,
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
      points: 2456,
      badge: 'Event Organizer',
      contributions: {
        events: 15,
        discussions: 28,
        mentoringSessions: 19,
        connections: 145
      },
      growth: '+167',
      department: 'Engineering',
      graduationYear: 2018
    },
    {
      rank: 4,
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      points: 2234,
      badge: 'Network Builder',
      contributions: {
        events: 6,
        discussions: 39,
        mentoringSessions: 23,
        connections: 189
      },
      growth: '+134',
      department: 'Arts',
      graduationYear: 2021
    },
    {
      rank: 5,
      name: 'Jessica Taylor',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      points: 2123,
      badge: 'Knowledge Sharer',
      contributions: {
        events: 9,
        discussions: 52,
        mentoringSessions: 15,
        connections: 98
      },
      growth: '+89',
      department: 'Medicine',
      graduationYear: 2017
    },
    {
      rank: 6,
      name: 'Alex Thompson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      points: 1987,
      badge: 'Rising Star',
      contributions: {
        events: 4,
        discussions: 31,
        mentoringSessions: 18,
        connections: 76
      },
      growth: '+156',
      department: 'Sciences',
      graduationYear: 2022
    }
  ];

  const achievements = [
    { name: 'First Event', description: 'Organized first alumni event', icon: Calendar, color: 'text-blue-600' },
    { name: 'Super Connector', description: 'Connected 100+ alumni', icon: Users, color: 'text-green-600' },
    { name: 'Discussion Leader', description: 'Started 50+ discussions', icon: MessageSquare, color: 'text-purple-600' },
    { name: 'Mentor Gold', description: 'Completed 25+ mentoring sessions', icon: Award, color: 'text-yellow-600' }
  ];

  const categories = [
    { key: 'overall', name: 'Overall Points', icon: Trophy },
    { key: 'events', name: 'Event Participation', icon: Calendar },
    { key: 'discussions', name: 'Discussion Activity', icon: MessageSquare },
    { key: 'mentoring', name: 'Mentoring Sessions', icon: Users }
  ];

  const periods = [
    { key: 'weekly', name: 'This Week' },
    { key: 'monthly', name: 'This Month' },
    { key: 'quarterly', name: 'This Quarter' },
    { key: 'yearly', name: 'This Year' }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full text-sm font-bold text-gray-600">{rank}</div>;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
    if (rank === 2) return 'bg-gradient-to-r from-gray-300 to-gray-500';
    if (rank === 3) return 'bg-gradient-to-r from-amber-400 to-amber-600';
    return 'bg-gradient-to-r from-blue-500 to-blue-600';
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Trophy className="w-8 h-8 text-yellow-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Alumni Leaderboard</h1>
            <p className="text-gray-600">Celebrating our most active and engaged alumni</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Period:</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {periods.map(period => (
                <option key={period.key} value={period.key}>{period.name}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.key} value={category.key}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Contributors</h2>
        <div className="flex justify-center items-end space-x-8 mb-8">
          {/* Second Place */}
          <div className="text-center">
            <div className="relative">
              <img
                src={leaderboardData[1].avatar}
                alt={leaderboardData[1].name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-4 border-gray-300"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900">{leaderboardData[1].name}</h3>
            <p className="text-sm text-gray-600">{leaderboardData[1].points} points</p>
            <div className="w-20 h-16 bg-gray-300 mx-auto mt-2 rounded-t-lg flex items-center justify-center">
              <Medal className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* First Place */}
          <div className="text-center">
            <div className="relative">
              <img
                src={leaderboardData[0].avatar}
                alt={leaderboardData[0].name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-4 border-yellow-400"
              />
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <Trophy className="text-white w-5 h-5" />
              </div>
            </div>
            <h3 className="font-semibold text-gray-900">{leaderboardData[0].name}</h3>
            <p className="text-sm text-gray-600">{leaderboardData[0].points} points</p>
            <div className="w-20 h-20 bg-yellow-500 mx-auto mt-2 rounded-t-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Third Place */}
          <div className="text-center">
            <div className="relative">
              <img
                src={leaderboardData[2].avatar}
                alt={leaderboardData[2].name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-4 border-amber-400"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900">{leaderboardData[2].name}</h3>
            <p className="text-sm text-gray-600">{leaderboardData[2].points} points</p>
            <div className="w-20 h-12 bg-amber-500 mx-auto mt-2 rounded-t-lg flex items-center justify-center">
              <Medal className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Full Leaderboard */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Complete Rankings</h2>
            <div className="space-y-3">
              {leaderboardData.map((alumni, index) => (
                <div key={alumni.name} className={`relative p-4 rounded-lg border ${
                  alumni.rank <= 3 
                    ? 'border-yellow-200 bg-gradient-to-r from-yellow-50 to-white' 
                    : 'border-gray-200 bg-white'
                } hover:shadow-md transition-shadow`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      {getRankIcon(alumni.rank)}
                      <img
                        src={alumni.avatar}
                        alt={alumni.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{alumni.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">{alumni.points}</span>
                          <span className="text-sm text-green-600 font-medium">({alumni.growth})</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-sm text-gray-600">{alumni.department}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-600">Class of {alumni.graduationYear}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800`}>
                          {alumni.badge}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4 text-xs text-gray-600">
                        <div className="text-center">
                          <div className="font-medium text-gray-900">{alumni.contributions.events}</div>
                          <div>Events</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium text-gray-900">{alumni.contributions.discussions}</div>
                          <div>Discussions</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium text-gray-900">{alumni.contributions.mentoringSessions}</div>
                          <div>Mentoring</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium text-gray-900">{alumni.contributions.connections}</div>
                          <div>Connections</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {alumni.rank <= 3 && (
                    <div className={`absolute inset-0 ${getRankColor(alumni.rank)} opacity-10 rounded-lg`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievement Badges */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievement Badges</h3>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                    <Icon className={`w-6 h-6 mx-auto mb-2 ${achievement.color}`} />
                    <h4 className="text-xs font-medium text-gray-900 mb-1">{achievement.name}</h4>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Point System */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Point System</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Event Participation</span>
                <span className="font-medium text-gray-900">+50 pts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discussion Post</span>
                <span className="font-medium text-gray-900">+10 pts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Mentoring Session</span>
                <span className="font-medium text-gray-900">+25 pts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">New Connection</span>
                <span className="font-medium text-gray-900">+5 pts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Event Organization</span>
                <span className="font-medium text-gray-900">+100 pts</span>
              </div>
            </div>
          </div>

          {/* This Month's Stats */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">This Month's Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Events Held</span>
                </div>
                <span className="text-lg font-bold text-gray-900">23</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <MessageSquare className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">New Discussions</span>
                </div>
                <span className="text-lg font-bold text-gray-900">156</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Mentoring Sessions</span>
                </div>
                <span className="text-lg font-bold text-gray-900">89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;