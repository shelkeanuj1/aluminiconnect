import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  Search,
  Filter,
  Calendar,
  MessageSquare,
  Heart,
  Trophy,
  GraduationCap,
  Briefcase,
  Menu,
  X,
  Shield,
  Plus
} from 'lucide-react';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Role Access', href: '/dashboard/role-access', icon: Shield },
  { name: 'Alumni Database', href: '/dashboard/alumni-database', icon: Users },
  { name: 'Search', href: '/dashboard/search', icon: Search },
  { name: 'Filters', href: '/dashboard/filters', icon: Filter },
  { name: 'Events', href: '/dashboard/events', icon: Calendar },
  { name: 'Create Event', href: '/dashboard/create-event', icon: Plus },
  { name: 'Discussion', href: '/dashboard/discussion', icon: MessageSquare },
  { name: 'Mentorship', href: '/dashboard/mentorship', icon: Heart },
  { name: 'Leaderboard', href: '/dashboard/leaderboard', icon: Trophy },
  { name: 'Guest Lectures', href: '/dashboard/guest-lectures', icon: GraduationCap },
  { name: 'Job Board', href: '/dashboard/job-board', icon: Briefcase },
  { name: 'Fundraising', href: '/dashboard/fundraising', icon: Heart },
  { name: 'AI Matchmaking', href: '/dashboard/ai-matchmaking', icon: Shield },
];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-xl">
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">Alumni Connect</h1>
            <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="px-4 py-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center px-4 py-3 mb-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:w-64 lg:flex lg:flex-col">
        <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">Alumni Connect</h1>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="px-4 py-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-3 mb-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex h-16 bg-white border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen(true)}
            className="px-4 text-gray-400 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex justify-between flex-1 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold text-gray-900">
                {navigation.find(item => item.href === location.pathname)?.name || 'Dashboard'}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                title="Logout"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-6">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;