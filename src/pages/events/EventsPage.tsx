import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Bell, 
  Plus, 
  Filter,
  ExternalLink,
  User,
  CheckCircle,
  Settings
} from 'lucide-react';

const EventsPage = () => {
  const [filter, setFilter] = useState('all');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  const [muteUntil, setMuteUntil] = useState('');

  const events = [
    {
      id: 1,
      title: 'Tech Career Fair 2025',
      description: 'Connect with top tech companies and explore career opportunities. Perfect for recent graduates and experienced professionals looking for their next role.',
      date: '2025-03-15',
      time: '10:00 AM - 4:00 PM',
      venue: 'University Convention Center',
      address: '123 Campus Drive, University City',
      guestSpeaker: 'Sarah Johnson (Google)',
      attendees: 234,
      maxAttendees: 500,
      category: 'career',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Alumni Networking Mixer',
      description: 'Casual networking event for alumni to reconnect, share experiences, and build professional relationships over drinks and appetizers.',
      date: '2025-02-20',
      time: '6:00 PM - 9:00 PM',
      venue: 'Downtown Rooftop Bar',
      address: '456 Main Street, Downtown',
      guestSpeaker: 'Michael Chen (Microsoft)',
      attendees: 89,
      maxAttendees: 150,
      category: 'networking',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Innovation in AI Workshop',
      description: 'Interactive workshop exploring the latest trends in artificial intelligence and machine learning. Hands-on sessions with industry experts.',
      date: '2025-02-10',
      time: '9:00 AM - 5:00 PM',
      venue: 'Tech Innovation Hub',
      address: '789 Innovation Drive, Tech District',
      guestSpeaker: 'Dr. Emily Rodriguez (Tesla)',
      attendees: 67,
      maxAttendees: 100,
      category: 'workshop',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Annual Alumni Gala',
      description: 'Our biggest event of the year! Join us for an elegant evening celebrating achievements, honoring distinguished alumni, and fundraising for scholarships.',
      date: '2024-12-15',
      time: '7:00 PM - 11:00 PM',
      venue: 'Grand Ballroom Hotel',
      address: '321 Luxury Lane, Uptown',
      guestSpeaker: 'Distinguished Alumni Panel',
      attendees: 456,
      maxAttendees: 500,
      category: 'gala',
      status: 'past',
      image: 'https://images.pexels.com/photos/1181540/pexels-photo-1181540.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Startup Pitch Competition',
      description: 'Alumni entrepreneurs pitch their startups to a panel of investors and successful business leaders. Great networking and learning opportunity.',
      date: '2025-04-08',
      time: '2:00 PM - 6:00 PM',
      venue: 'Business Incubator',
      address: '654 Entrepreneur Ave, Business District',
      guestSpeaker: 'David Kim (VC Partner)',
      attendees: 123,
      maxAttendees: 200,
      category: 'competition',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/1181712/pexels-photo-1181712.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Healthcare Innovation Summit',
      description: 'Explore cutting-edge developments in healthcare technology, medical research, and patient care innovations. For medical professionals and health tech enthusiasts.',
      date: '2025-03-22',
      time: '8:00 AM - 6:00 PM',
      venue: 'Medical Center Auditorium',
      address: '987 Health Plaza, Medical District',
      guestSpeaker: 'Dr. Jessica Taylor (Johns Hopkins)',
      attendees: 178,
      maxAttendees: 250,
      category: 'summit',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return event.status === 'upcoming';
    if (filter === 'past') return event.status === 'past';
    return event.category === filter;
  });

  const upcomingEventsCount = events.filter(event => event.status === 'upcoming').length;

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
  const getCategoryColor = (category: string) => {
    const colors = {
      career: 'bg-blue-100 text-blue-800',
      networking: 'bg-green-100 text-green-800',
      workshop: 'bg-purple-100 text-purple-800',
      gala: 'bg-yellow-100 text-yellow-800',
      competition: 'bg-red-100 text-red-800',
      summit: 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
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
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <Calendar className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Alumni Events</h1>
              <p className="text-gray-600">{upcomingEventsCount} upcoming events • {events.length} total events</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleNotifications}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                notificationsEnabled
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              <Bell className={`w-4 h-4 ${notificationsEnabled ? 'fill-current' : ''}`} />
              <span>{notificationsEnabled ? 'Notifications On' : 'Get Notified'}</span>
              {notificationsEnabled && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNotificationSettings(!showNotificationSettings);
                  }}
                  className="ml-2 p-1 hover:bg-green-100 rounded"
                >
                  <Settings className="w-3 h-3" />
                </button>
              )}
            </button>
            <Link
              to="/create-event"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Create Event</span>
            </Link>
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
          {[
            { key: 'all', label: 'All Events', count: events.length },
            { key: 'upcoming', label: 'Upcoming', count: events.filter(e => e.status === 'upcoming').length },
            { key: 'career', label: 'Career', count: events.filter(e => e.category === 'career').length },
            { key: 'networking', label: 'Networking', count: events.filter(e => e.category === 'networking').length },
            { key: 'workshop', label: 'Workshops', count: events.filter(e => e.category === 'workshop').length },
            { key: 'past', label: 'Past Events', count: events.filter(e => e.status === 'past').length }
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                  {event.category}
                </span>
              </div>
              {event.status === 'past' && (
                <div className="absolute top-4 right-4 bg-gray-900 bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                  Past Event
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{event.title}</h3>
                {event.status === 'upcoming' && (
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />
                )}
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.venue}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-2" />
                  {event.guestSpeaker}
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  {event.attendees}/{event.maxAttendees} attending
                </div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                {event.status === 'upcoming' ? (
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mr-2">
                    Register Now
                  </button>
                ) : (
                  <button className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-lg cursor-not-allowed mr-2">
                    Event Ended
                  </button>
                )}
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600 mb-4">There are no events matching your current filter.</p>
          <button
            onClick={() => setFilter('all')}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View all events
          </button>
        </div>
      )}

      {/* Notification Banner */}
      {notificationsEnabled && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
            <div>
              <h4 className="text-sm font-medium text-green-800">Event notifications enabled!</h4>
              <p className="text-sm text-green-700">You'll receive updates about new events and reminders for events you're attending.</p>
            </div>
          </div>
        </div>
      )}
    

    {/* Floating Add Event Button */}
    <Link
      to="/create-event"
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      title="Create Event"
    >
      <Plus className="w-6 h-6" />
    </Link>
    </div>
  );
};

export default EventsPage;