import React, { useState } from 'react';
import { Heart, Users, Star, MessageCircle, Calendar, Clock, Search, Filter, Plus } from 'lucide-react';

const MentorshipPage = () => {
  const [activeTab, setActiveTab] = useState('find-mentors');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');

  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Software Engineer',
      company: 'Google',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.9,
      sessionCount: 47,
      expertise: ['React', 'Node.js', 'Career Growth', 'Leadership'],
      bio: 'Passionate about helping junior developers grow their careers. Specializing in full-stack development and leadership skills.',
      availability: 'Available',
      sessionTypes: ['1:1 Mentoring', 'Code Review', 'Career Guidance'],
      responseTime: '< 24 hours'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Product Manager',
      company: 'Microsoft',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.8,
      sessionCount: 32,
      expertise: ['Product Strategy', 'User Research', 'Analytics', 'Agile'],
      bio: 'Helping aspiring product managers break into tech and current PMs level up their skills.',
      availability: 'Limited',
      sessionTypes: ['Product Reviews', 'Strategy Sessions', 'Interview Prep'],
      responseTime: '< 48 hours'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Engineering Manager',
      company: 'Tesla',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5.0,
      sessionCount: 28,
      expertise: ['Engineering Management', 'Team Building', 'Technical Leadership', 'Innovation'],
      bio: 'Supporting engineers transitioning into management roles and building high-performing teams.',
      availability: 'Available',
      sessionTypes: ['Leadership Coaching', 'Team Management', '1:1 Sessions'],
      responseTime: '< 12 hours'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'UX Designer',
      company: 'Adobe',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.7,
      sessionCount: 39,
      expertise: ['UI/UX Design', 'Figma', 'User Research', 'Design Systems'],
      bio: 'Helping designers create meaningful user experiences and build strong design portfolios.',
      availability: 'Available',
      sessionTypes: ['Portfolio Reviews', 'Design Critique', 'Career Guidance'],
      responseTime: '< 24 hours'
    }
  ];

  const mentorshipRequests = [
    {
      id: 1,
      mentee: 'John Smith',
      topic: 'Career transition to Product Management',
      date: '2025-02-15',
      status: 'pending',
      message: 'Looking for guidance on transitioning from engineering to PM role.'
    },
    {
      id: 2,
      mentee: 'Lisa Wang',
      topic: 'Technical Interview Preparation',
      date: '2025-02-20',
      status: 'accepted',
      message: 'Need help preparing for senior engineer interviews at FAANG companies.'
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      mentor: 'Sarah Johnson',
      date: '2025-02-10',
      time: '2:00 PM',
      topic: 'React Best Practices',
      type: '1:1 Session'
    },
    {
      id: 2,
      mentor: 'Michael Chen',
      date: '2025-02-12',
      time: '10:00 AM',
      topic: 'Product Strategy Review',
      type: 'Strategy Session'
    }
  ];

  const skills = ['React', 'Node.js', 'Python', 'Product Management', 'UI/UX Design', 'Data Science', 'Leadership', 'Career Growth'];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSkill = !selectedSkill || mentor.expertise.includes(selectedSkill);
    return matchesSearch && matchesSkill;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Heart className="w-8 h-8 text-red-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mentorship Program</h1>
            <p className="text-gray-600">Connect with experienced alumni for guidance and growth</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { key: 'find-mentors', label: 'Find Mentors', count: mentors.length },
            { key: 'my-sessions', label: 'My Sessions', count: upcomingSessions.length },
            { key: 'become-mentor', label: 'Become a Mentor', count: null },
            { key: 'requests', label: 'Requests', count: mentorshipRequests.length }
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label} {count !== null && `(${count})`}
            </button>
          ))}
        </div>
      </div>

      {/* Find Mentors Tab */}
      {activeTab === 'find-mentors' && (
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search mentors by name or expertise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Skills</option>
                  {skills.map(skill => (
                    <option key={skill} value={skill}>{skill}</option>
                  ))}
                </select>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>More Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMentors.map(mentor => (
              <div key={mentor.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.title}</p>
                    <p className="text-blue-600 font-medium">{mentor.company}</p>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {mentor.rating} • {mentor.sessionCount} sessions
                      </span>
                      <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                        mentor.availability === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {mentor.availability}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4">{mentor.bio}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.map(skill => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Session Types</h4>
                  <div className="text-sm text-gray-600">
                    {mentor.sessionTypes.join(' • ')}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Responds {mentor.responseTime}
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                      View Profile
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Request Session
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* My Sessions Tab */}
      {activeTab === 'my-sessions' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Mentorship Sessions</h2>
          <div className="space-y-4">
            {upcomingSessions.map(session => (
              <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{session.topic}</h3>
                    <p className="text-sm text-gray-600">with {session.mentor}</p>
                    <p className="text-sm text-gray-500">
                      {session.date} at {session.time} • {session.type}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                    Reschedule
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Join Session
                  </button>
                </div>
              </div>
            ))}
          </div>
          {upcomingSessions.length === 0 && (
            <div className="text-center py-8">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming sessions</h3>
              <p className="text-gray-600 mb-4">Schedule your first mentorship session to get started!</p>
              <button
                onClick={() => setActiveTab('find-mentors')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Find a Mentor
              </button>
            </div>
          )}
        </div>
      )}

      {/* Become a Mentor Tab */}
      {activeTab === 'become-mentor' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Become a Mentor</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Share your knowledge and experience with fellow alumni. Help shape the next generation of professionals in your field.
            </p>
          </div>

          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>3-5 years</option>
                  <option>5-10 years</option>
                  <option>10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Industry
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Technology</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Areas of Expertise
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {skills.map(skill => (
                  <label key={skill} className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <span className="text-sm text-gray-700">{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mentor Bio
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell potential mentees about your background, experience, and how you can help them..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Session Types
              </label>
              <div className="space-y-2">
                {['1:1 Mentoring', 'Group Sessions', 'Code Review', 'Career Guidance', 'Interview Prep'].map(type => (
                  <label key={type} className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Very Active (5+ hours/week)</option>
                <option>Active (2-5 hours/week)</option>
                <option>Limited (1-2 hours/week)</option>
              </select>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Apply to Become a Mentor
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Requests Tab */}
      {activeTab === 'requests' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Mentorship Requests</h2>
          <div className="space-y-4">
            {mentorshipRequests.map(request => (
              <div key={request.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{request.topic}</h3>
                    <p className="text-sm text-gray-600">from {request.mentee}</p>
                    <p className="text-sm text-gray-500">Requested for {request.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    request.status === 'pending' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {request.status}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{request.message}</p>
                {request.status === 'pending' && (
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      Accept
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Decline
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <MessageCircle className="w-4 h-4 inline mr-1" />
                      Message
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorshipPage;