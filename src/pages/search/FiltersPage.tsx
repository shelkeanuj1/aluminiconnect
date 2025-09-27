import React, { useState } from 'react';
import { Filter, Search, X, ChevronDown } from 'lucide-react';

const FiltersPage = () => {
  const [filters, setFilters] = useState({
    batch: '',
    department: '',
    city: '',
    company: '',
    industry: '',
    availability: '',
    skills: [],
    experience: '',
    location: ''
  });

  const [isApplied, setIsApplied] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    professional: true,
    location: true,
    availability: true
  });

  const handleFilterChange = (filterType: string, value: string | string[]) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSkillToggle = (skill: string) => {
    const currentSkills = filters.skills as string[];
    if (currentSkills.includes(skill)) {
      handleFilterChange('skills', currentSkills.filter(s => s !== skill));
    } else {
      handleFilterChange('skills', [...currentSkills, skill]);
    }
  };

  const clearFilters = () => {
    setFilters({
      batch: '',
      department: '',
      city: '',
      company: '',
      industry: '',
      availability: '',
      skills: [],
      experience: '',
      location: ''
    });
    setIsApplied(false);
  };

  const applyFilters = () => {
    setIsApplied(true);
    // In a real app, this would trigger a search with the filters
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const batchYears = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'];
  const departments = ['Computer Science', 'Engineering', 'Business', 'Arts', 'Sciences', 'Medicine', 'Law'];
  const cities = ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Boston', 'Seattle', 'Austin', 'Denver'];
  const companies = ['Google', 'Microsoft', 'Apple', 'Meta', 'Amazon', 'Tesla', 'Netflix', 'Airbnb'];
  const industries = ['Technology', 'Finance', 'Healthcare', 'Education', 'Consulting', 'Startup', 'Government'];
  const skillsList = [
    'React', 'Node.js', 'Python', 'Java', 'JavaScript', 'TypeScript', 'AWS', 'Docker',
    'Machine Learning', 'Data Science', 'Product Management', 'UI/UX Design', 'Sales', 'Marketing'
  ];

  const activeFiltersCount = Object.entries(filters).reduce((count, [key, value]) => {
    if (key === 'skills') {
      return count + (value as string[]).length;
    }
    return count + (value ? 1 : 0);
  }, 0);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Filter className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Advanced Filters</h1>
              <p className="text-gray-600">Refine your search with detailed criteria</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {activeFiltersCount > 0 && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''} active
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <button
              onClick={() => toggleSection('basic')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
              <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.basic ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedSections.basic && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                  <select
                    value={filters.batch}
                    onChange={(e) => handleFilterChange('batch', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Years</option>
                    {batchYears.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select
                    value={filters.department}
                    onChange={(e) => handleFilterChange('department', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                  <select
                    value={filters.experience}
                    onChange={(e) => handleFilterChange('experience', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Any Experience</option>
                    <option value="entry">Entry Level (0-2 years)</option>
                    <option value="mid">Mid Level (3-7 years)</option>
                    <option value="senior">Senior Level (8-15 years)</option>
                    <option value="executive">Executive (15+ years)</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <button
              onClick={() => toggleSection('professional')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900">Professional</h3>
              <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.professional ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedSections.professional && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <select
                    value={filters.company}
                    onChange={(e) => handleFilterChange('company', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Companies</option>
                    {companies.map(company => (
                      <option key={company} value={company}>{company}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select
                    value={filters.industry}
                    onChange={(e) => handleFilterChange('industry', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Industries</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                  <div className="max-h-48 overflow-y-auto border border-gray-300 rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-2">
                      {skillsList.map(skill => (
                        <label key={skill} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={(filters.skills as string[]).includes(skill)}
                            onChange={() => handleSkillToggle(skill)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Location & Availability */}
          <div className="space-y-4">
            <button
              onClick={() => toggleSection('location')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900">Location & Availability</h3>
              <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.location ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedSections.location && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <select
                    value={filters.city}
                    onChange={(e) => handleFilterChange('city', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Cities</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Location</label>
                  <select
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Any Location</option>
                    <option value="onsite">On-site</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <select
                    value={filters.availability}
                    onChange={(e) => handleFilterChange('availability', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Any Availability</option>
                    <option value="available">Available for networking</option>
                    <option value="mentoring">Available for mentoring</option>
                    <option value="hiring">Currently hiring</option>
                    <option value="job-seeking">Seeking opportunities</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Active Filters:</h4>
            <div className="flex flex-wrap gap-2">
              {Object.entries(filters).map(([key, value]) => {
                if (!value || (Array.isArray(value) && value.length === 0)) return null;
                
                if (key === 'skills' && Array.isArray(value)) {
                  return value.map(skill => (
                    <span key={`skill-${skill}`} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {skill}
                      <button
                        onClick={() => handleSkillToggle(skill)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ));
                }
                
                return (
                  <span key={key} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {key}: {value as string}
                    <button
                      onClick={() => handleFilterChange(key, '')}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Apply Filters Button */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              {isApplied ? 'Filters applied successfully' : 'Configure your filters and apply to search'}
            </p>
            <button
              onClick={applyFilters}
              disabled={activeFiltersCount === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFiltersCount > 0
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Apply Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Preview */}
      {isApplied && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Results Preview</h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800">
              <strong>127 alumni</strong> match your current filter criteria. 
              <a href="/alumni-database" className="ml-2 text-green-600 hover:text-green-800 underline">
                View full results →
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersPage;