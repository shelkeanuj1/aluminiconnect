import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, MessageSquare, Briefcase, TrendingUp, Award } from 'lucide-react';

const DashboardPage = () => {
  const stats = [
    { name: 'Total Alumni', value: '2,847', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Upcoming Events', value: '12', icon: Calendar, color: 'text-green-600', bg: 'bg-green-50' },
    { name: 'Active Discussions', value: '35', icon: MessageSquare, color: 'text-purple-600', bg: 'bg-purple-50' },
    { name: 'Job Postings', value: '89', icon: Briefcase, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const recentActivities = [
    { title: 'New alumni registration: Sarah Johnson (Class of 2023)', time: '2 hours ago' },
    { title: 'Event created: Tech Career Fair 2025', time: '4 hours ago' },
    { title: 'Mentorship request from John Smith', time: '1 day ago' },
    { title: 'Job posting: Software Engineer at TechCorp', time: '2 days ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-300 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome to Alumni Connect</h1>
        <p className="text-blue-100">Connect, collaborate, and grow with your alumni network</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className={`${stat.bg} p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            <Award className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/dashboard/alumni-database"
              className="p-4 text-center bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-blue-900">Browse Alumni</p>
            </Link>
            <Link
              to="/dashboard/events"
              className="p-4 text-center bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-green-900">View Events</p>
            </Link>
            <Link
              to="/dashboard/mentorship"
              className="p-4 text-center bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <MessageSquare className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-purple-900">Find Mentor</p>
            </Link>
            <Link
              to="/dashboard/job-board"
              className="p-4 text-center bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <Briefcase className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-orange-900">Job Board</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;