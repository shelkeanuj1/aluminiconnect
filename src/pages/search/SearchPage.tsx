import React, { useState } from 'react';
import { Search, Sparkles, Users, Building2, MapPin, Calendar, TrendingUp, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchResults, setSearchResults] = useState([]);

  const searchSuggestions = [
    {
      icon: <Sparkles className="w-4 h-4" />,
      text: 'Show alumni working at Google',
      category: 'AI Suggestion'
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      text: 'Find Computer Science graduates from 2020',
      category: 'AI Suggestion'
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      text: 'Alumni in San Francisco Bay Area',
      category: 'AI Suggestion'
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      text: 'Software engineers available for mentorship',
      category: 'AI Suggestion'
    }
  ];

  const quickSearches = [
    { icon: Users, text: 'Recent Graduates', count: '234 alumni' },
    { icon: Building2, text: 'Tech Industry', count: '567 alumni' },
    { icon: MapPin, text: 'Local Alumni', count: '123 alumni' },
    { icon: Calendar, text: 'Event Attendees', count: '89 alumni' }
  ];

  const trendingSearches = [
    'Machine Learning Engineers',
    'Product Managers',
    'Startup Founders',
    'Medical Professionals',
    'Data Scientists'
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Mock search results
    if (query.trim()) {
      const mockResults = [
        {
          id: 1,
          type: 'alumni',
          name: 'Sarah Johnson',
          title: 'Senior Software Engineer at Google',
          location: 'Mountain View, CA',
          matchReason: 'Works at Google'
        },
        {
          id: 2,
          type: 'alumni',
          name: 'Michael Chen',
          title: 'Product Manager at Microsoft',
          location: 'Seattle, WA',
          matchReason: 'Tech industry professional'
        }
      ];
      setSearchResults(mockResults);
    } else {
      setSearchResults([]);
    }
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
                placeholder="Search for alumni, companies, skills, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </div>
              <button
                onClick={() => handleSearch(searchQuery)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/filters"
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Advanced Filters</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Search className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Universal Search</h1>
            <p className="text-gray-600">Find alumni, events, discussions, and more</p>
          </div>
        </div>


        {/* Search Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['all', 'alumni', 'events', 'discussions', 'jobs'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Search Results ({searchResults.length})
          </h2>
          <div className="space-y-4">
            {searchResults.map((result: any) => (
              <div key={result.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{result.name}</h3>
                    <p className="text-sm text-gray-600">{result.title}</p>
                    <p className="text-sm text-gray-500">{result.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-blue-600 mb-2">{result.matchReason}</p>
                  <Link
                    to={`/alumni-profile/${result.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI-Powered Suggestions */}
      {searchResults.length === 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">AI-Powered Suggestions</h2>
                <p className="text-sm text-gray-600">Smart search recommendations based on trends</p>
              </div>
            </div>
            <div className="space-y-3">
              {searchSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(suggestion.text)}
                  className="w-full flex items-center space-x-3 p-3 text-left bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <div className="text-purple-600">
                    {suggestion.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{suggestion.text}</p>
                    <p className="text-xs text-purple-600">{suggestion.category}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Quick Search</h2>
                <p className="text-sm text-gray-600">Popular search categories</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {quickSearches.map((search, index) => {
                const Icon = search.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleSearch(search.text)}
                    className="p-4 text-center bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">{search.text}</p>
                    <p className="text-xs text-gray-500">{search.count}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Trending Searches */}
      {searchResults.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="w-6 h-6 text-orange-600" />
            <h2 className="text-lg font-semibold text-gray-900">Trending Searches</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((trend, index) => (
              <button
                key={index}
                onClick={() => handleSearch(trend)}
                className="px-3 py-2 bg-orange-50 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-100 transition-colors"
              >
                #{trend}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;