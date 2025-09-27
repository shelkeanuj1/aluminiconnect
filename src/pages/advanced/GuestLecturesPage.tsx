import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Bell, 
  Star,
  Video,
  ExternalLink,
  BookOpen,
  Filter,
  Search
} from 'lucide-react';

const GuestLecturesPage = () => {
  const [filter, setFilter] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  const [muteUntil, setMuteUntil] = useState('');

  const lectures = [
    {
      id: 1,
      title: 'The Future of Artificial Intelligence in Healthcare',
      speaker: {
        name: 'Dr. Sarah Johnson',
        title: 'Chief AI Officer',
        company: 'Google Health',
        bio: 'Leading AI researcher with 15+ years in healthcare technology',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      date: '2025-02-15',
      time: '2:00 PM - 3:30 PM',
      venue: 'Virtual Event',
      type: 'virtual',
      category: 'Technology',
      description: 'Explore how AI is revolutionizing healthcare, from diagnostic imaging to personalized treatment plans. Learn about the latest breakthroughs and future possibilities.',
      attendees: 234,
      maxAttendees: 500,
      status: 'upcoming',
      rating: 4.8,
      topics: ['Artificial Intelligence', 'Healthcare', 'Machine Learning', 'Medical Technology'],
      prerequisites: 'Basic understanding of AI concepts helpful but not required',
      materials: ['Slide deck will be provided', 'Recommended readings list', 'Q&A recording']
    },
    {
      id: 2,
      title: 'Sustainable Business Models for the 21st Century',
      speaker: {
        name: 'Michael Chen',
        title: 'VP of Sustainability',
        company: 'Tesla',
        bio: 'Expert in sustainable business practices and green technology',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      date: '2025-02-22',
      time: '6:00 PM - 7:30 PM',
      venue: 'University Auditorium',
      type: 'in-person',
      category: 'Business',
      description: 'Discover how leading companies are building sustainable business models that balance profit with environmental responsibility.',
      attendees: 156,
      maxAttendees: 200,
      status: 'upcoming',
      rating: 4.9,
      topics: ['Sustainability', 'Business Strategy', 'Environmental Impact', 'Corporate Responsibility'],
      prerequisites: 'None',
      materials: ['Case studies', 'Framework templates', 'Industry reports']
    },
    {
      id: 3,
      title: 'Breakthrough Innovations in Quantum Computing',
      speaker: {
        name: 'Dr. Emily Rodriguez',
        title: 'Quantum Research Scientist',
        company: 'IBM Quantum',
        bio: 'Pioneer in quantum algorithm development and quantum machine learning',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      date: '2025-03-05',
      time: '1:00 PM - 2:30 PM',
      venue: 'Virtual Event',
      type: 'virtual',
      category: 'Technology',
      description: 'Dive into the fascinating world of quantum computing and its potential to solve complex problems in cryptography, optimization, and simulation.',
      attendees: 189,
      maxAttendees: 300,
      status: 'upcoming',
      rating: 4.7,
      topics: ['Quantum Computing', 'Computer Science', 'Physics', 'Cryptography'],
      prerequisites: 'Strong background in mathematics and computer science recommended',
      materials: ['Technical papers', 'Quantum simulator access', 'Code examples']
    },
    {
      id: 4,
      title: 'Leadership in Crisis: Lessons from the Pandemic',
      speaker: {
        name: 'Jessica Taylor',
        title: 'CEO',
        company: 'Global Health Initiative',
        bio: 'Healthcare executive who led pandemic response initiatives',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      date: '2024-12-10',
      time: '4:00 PM - 5:30 PM',
      venue: 'University Auditorium',
      type: 'in-person',
      category: 'Leadership',
      description: 'Learn valuable leadership lessons from navigating one of the most challenging global crises in modern history.',
      attendees: 298,
      maxAttendees: 350,
      status: 'past',
      rating: 4.9,
      topics: ['Leadership', 'Crisis Management', 'Healthcare', 'Decision Making'],
      prerequisites: 'None',
      materials: ['Leadership framework', 'Case studies', 'Action templates']
    }
  ];

  const categories = ['All', 'Technology', 'Business', 'Leadership', 'Healthcare', 'Science'];
  
  const filteredLectures = lectures.filter(lecture => {
    const matchesFilter = filter === 'all' || lecture.status === filter;
    const matchesSearch = lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lecture.speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lecture.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const upcomingCount = lectures.filter(l => l.status === 'upcoming').length;
  const pastCount = lectures.filter(l => l.status === 'past').length;

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    if (!notificationsEnabled) {
      setShowNotificationSettings(true);
    }
  };

  const handleMuteOption = (hours: string) => {
    setMuteUntil(hours);
    setShowNotificationSettings(false);
  };
  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search lectures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div className="flex items-center space-x-3 mb-4 lg:mb-0">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Guest Lectures</h1>
              <p className="text-gray-600">Learn from industry leaders and subject matter experts</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleNotifications}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                notificationsEnabled
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              <Bell className="w-4 h-4" />
              <span>{notificationsEnabled ? 'Notifications On' : 'Get Notified'}</span>
              {notificationsEnabled && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNotificationSettings(!showNotificationSettings);
                  }}
                  className="ml-2 p-1 hover:bg-green-100 rounded"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              )}
            </button>
          </div>
        </div>

        {/* Notification Settings Dropdown */}
        {showNotificationSettings && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Notification Settings</h4>
              <div className="space-y-2">
                <button
                  onClick={() => handleMuteOption('4')}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                >
                  Mute until 4 hours
                </button>
                <button
                  onClick={() => handleMuteOption('8')}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                >
                  Mute until 8 hours
                </button>
                <button
                  onClick={() => handleMuteOption('12')}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                >
                  Mute until 12 hours
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Lectures ({lectures.length})
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'upcoming'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Upcoming ({upcomingCount})
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'past'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Past Lectures ({pastCount})
          </button>
        </div>
      </div>

      {/* Lectures Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredLectures.map((lecture) => (
          <div key={lecture.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lecture.category === 'Technology' ? 'bg-blue-100 text-blue-800' :
                      lecture.category === 'Business' ? 'bg-green-100 text-green-800' :
                      lecture.category === 'Leadership' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {lecture.category}
                    </span>
                    {lecture.type === 'virtual' ? (
                      <Video className="w-4 h-4 text-blue-600" />
                    ) : (
                      <MapPin className="w-4 h-4 text-green-600" />
                    )}
                    {lecture.status === 'past' && (
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">{lecture.rating}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {lecture.title}
                  </h3>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={lecture.speaker.avatar}
                  alt={lecture.speaker.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{lecture.speaker.name}</h4>
                  <p className="text-sm text-gray-600">{lecture.speaker.title}</p>
                  <p className="text-sm text-purple-600">{lecture.speaker.company}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">{lecture.description}</p>

              {/* Event Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(lecture.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {lecture.time}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {lecture.venue}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  {lecture.attendees}/{lecture.maxAttendees} registered
                </div>
              </div>

              {/* Topics */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {lecture.topics.slice(0, 3).map((topic, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {topic}
                    </span>
                  ))}
                  {lecture.topics.length > 3 && (
                    <span className="text-xs text-gray-500">+{lecture.topics.length - 3} more</span>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                  <span>Registration</span>
                  <span>{Math.round((lecture.attendees / lecture.maxAttendees) * 100)}% full</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(lecture.attendees / lecture.maxAttendees) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                {lecture.status === 'upcoming' ? (
                  <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors mr-2">
                    Register Now
                  </button>
                ) : (
                  <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors mr-2">
                    View Recording
                  </button>
                )}
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Expandable Details */}
            <div className="px-6 py-4 border-t border-gray-100">
              <details className="group">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Details
                </summary>
                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">Speaker Bio</h5>
                    <p>{lecture.speaker.bio}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">Prerequisites</h5>
                    <p>{lecture.prerequisites}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">Materials Provided</h5>
                    <ul className="list-disc list-inside space-y-1">
                      {lecture.materials.map((material, index) => (
                        <li key={index}>{material}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            </div>
          </div>
        ))}
      </div>

      {filteredLectures.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <GraduationCap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No lectures found</h3>
          <p className="text-gray-600 mb-4">
            {filter === 'upcoming' 
              ? 'No upcoming lectures match your search criteria.' 
              : 'No lectures match your current filters.'}
          </p>
          <button
            onClick={() => { setFilter('all'); setSearchTerm(''); }}
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            View all lectures
          </button>
        </div>
      )}
    </div>
  );
};

export default GuestLecturesPage;