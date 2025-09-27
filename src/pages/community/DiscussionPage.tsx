import React, { useState } from 'react';
import { MessageSquare, Send, ThumbsUp, Reply, AlertCircle, Users, Clock, Filter, Search } from 'lucide-react';

const DiscussionPage = () => {
  const [newMessage, setNewMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('general');
  const [replyTo, setReplyTo] = useState(null);

  const topics = [
    { id: 'general', name: 'General Discussion', count: 234, color: 'bg-blue-100 text-blue-800' },
    { id: 'career', name: 'Career Advice', count: 187, color: 'bg-green-100 text-green-800' },
    { id: 'networking', name: 'Networking', count: 156, color: 'bg-purple-100 text-purple-800' },
    { id: 'industry', name: 'Industry Insights', count: 98, color: 'bg-orange-100 text-orange-800' },
    { id: 'mentorship', name: 'Mentorship', count: 67, color: 'bg-teal-100 text-teal-800' },
    { id: 'events', name: 'Event Discussions', count: 45, color: 'bg-pink-100 text-pink-800' }
  ];

  const discussions = [
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2 hours ago',
      topic: 'career',
      title: 'Transitioning from Engineering to Product Management',
      content: 'Hi everyone! I\'ve been working as a software engineer for 5 years and I\'m considering a move to product management. Has anyone made this transition? What skills should I focus on developing?',
      likes: 23,
      replies: 8,
      isLiked: false
    },
    {
      id: 2,
      author: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '5 hours ago',
      topic: 'networking',
      title: 'Best practices for LinkedIn networking',
      content: 'I wanted to share some tips that have helped me build meaningful professional relationships on LinkedIn. The key is to personalize your connection requests and engage genuinely with others\' content.',
      likes: 45,
      replies: 12,
      isLiked: true
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '1 day ago',
      topic: 'industry',
      title: 'The Future of Sustainable Technology',
      content: 'Working in the sustainability sector has been incredibly rewarding. I\'d love to discuss emerging trends in clean tech and how our alumni network can contribute to environmental solutions.',
      likes: 34,
      replies: 15,
      isLiked: false
    },
    {
      id: 4,
      author: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2 days ago',
      topic: 'general',
      title: 'Alumni meetup in San Francisco - Who\'s interested?',
      content: 'Planning an informal meetup for alumni in the Bay Area. Thinking of a weekend brunch followed by some networking. Drop a comment if you\'re interested!',
      likes: 67,
      replies: 23,
      isLiked: true
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
      setReplyTo(null);
    }
  };

  const handleLike = (discussionId: number) => {
    // In a real app, this would update the like status in the backend
    console.log('Liking discussion:', discussionId);
  };

  const selectedTopicData = topics.find(t => t.id === selectedTopic);
  const filteredDiscussions = discussions.filter(d => selectedTopic === 'all' || d.topic === selectedTopic);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Discussion Forum</h1>
              <p className="text-gray-600">Connect and share insights with fellow alumni</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search discussions..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Access Level Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Restricted Access</h3>
              <p className="text-sm text-yellow-700 mt-1">
                This is a moderated discussion forum. All posts are reviewed before publication to ensure quality and relevance.
              </p>
            </div>
          </div>
        </div>

        {/* Topic Selection */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedTopic('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedTopic === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Topics ({discussions.length})
          </button>
          {topics.map(topic => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTopic === topic.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {topic.name} ({topic.count})
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Discussion Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* New Post Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Start a Discussion</h3>
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select a topic</option>
                  {topics.map(topic => (
                    <option key={topic.id} value={topic.id}>{topic.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Discussion title..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Share your thoughts..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Posts are moderated and will appear after approval.
                </p>
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Post Discussion</span>
                </button>
              </div>
            </form>
          </div>

          {/* Discussion Posts */}
          <div className="space-y-6">
            {filteredDiscussions.map(discussion => {
              const topicData = topics.find(t => t.id === discussion.topic);
              return (
                <div key={discussion.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={discussion.avatar}
                      alt={discussion.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{discussion.author}</h3>
                          {topicData && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${topicData.color}`}>
                              {topicData.name}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {discussion.time}
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-medium text-gray-900 mb-2">{discussion.title}</h4>
                      <p className="text-gray-700 mb-4">{discussion.content}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => handleLike(discussion.id)}
                            className={`flex items-center space-x-1 transition-colors ${
                              discussion.isLiked
                                ? 'text-blue-600'
                                : 'text-gray-500 hover:text-blue-600'
                            }`}
                          >
                            <ThumbsUp className={`w-4 h-4 ${discussion.isLiked ? 'fill-current' : ''}`} />
                            <span>{discussion.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                            <Reply className="w-4 h-4" />
                            <span>{discussion.replies}</span>
                          </button>
                        </div>
                        <button
                          onClick={() => setReplyTo(discussion.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Reply
                        </button>
                      </div>
                      
                      {replyTo === discussion.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <form onSubmit={handleSendMessage} className="space-y-3">
                            <textarea
                              placeholder="Write a reply..."
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <div className="flex items-center justify-end space-x-2">
                              <button
                                type="button"
                                onClick={() => setReplyTo(null)}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                              >
                                Reply
                              </button>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Active Users */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Active Now</h3>
            </div>
            <div className="space-y-3">
              {['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez', 'David Kim'].map((user, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-700">{user}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Topics */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Topics</h3>
            <div className="space-y-2">
              {topics.slice(0, 4).map(topic => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className="w-full flex items-center justify-between p-3 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-900">{topic.name}</span>
                  <span className="text-xs text-gray-500">{topic.count} posts</span>
                </button>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Guidelines</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Be respectful and professional</li>
              <li>• Stay on topic and provide value</li>
              <li>• No spam or self-promotion</li>
              <li>• Help others and share knowledge</li>
              <li>• Report inappropriate content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;