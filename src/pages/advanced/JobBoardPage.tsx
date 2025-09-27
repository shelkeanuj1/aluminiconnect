import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Building2, 
  Plus, 
  Search,
  Filter,
  ExternalLink,
  Bookmark,
  Share2,
  Star
} from 'lucide-react';

const JobBoardPage = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const jobPostings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      type: 'Full-time',
      remote: 'Hybrid',
      salary: '$150K - $200K',
      postedBy: 'Sarah Johnson',
      postedDate: '2025-02-08',
      applicants: 23,
      description: 'Join our team building next-generation cloud infrastructure. We\'re looking for an experienced engineer with strong backend development skills.',
      requirements: ['5+ years of experience', 'React & Node.js', 'Cloud platforms (AWS/GCP)', 'System design experience'],
      benefits: ['Competitive salary', 'Stock options', 'Health & dental', 'Remote work options'],
      category: 'Engineering',
      experience: 'Senior',
      featured: true,
      urgent: false
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Microsoft',
      location: 'Seattle, WA',
      type: 'Full-time',
      remote: 'Remote',
      salary: '$130K - $180K',
      postedBy: 'Michael Chen',
      postedDate: '2025-02-07',
      applicants: 18,
      description: 'Lead product strategy for our enterprise software division. Work with cross-functional teams to drive product vision and execution.',
      requirements: ['3+ years PM experience', 'B2B software background', 'Data-driven mindset', 'Strong communication skills'],
      benefits: ['Flexible schedule', 'Learning budget', 'Health coverage', 'Stock purchase plan'],
      category: 'Product',
      experience: 'Mid',
      featured: false,
      urgent: true
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'Adobe',
      location: 'San Francisco, CA',
      type: 'Contract',
      remote: 'On-site',
      salary: '$80 - $120/hour',
      postedBy: 'David Kim',
      postedDate: '2025-02-05',
      applicants: 31,
      description: 'Design innovative user experiences for creative software tools. Collaborate with product teams to create intuitive interfaces.',
      requirements: ['Portfolio required', 'Figma/Sketch expertise', 'User research experience', '3+ years UX design'],
      benefits: ['Flexible contract terms', 'Creative freedom', 'Networking opportunities', 'Portfolio projects'],
      category: 'Design',
      experience: 'Mid',
      featured: false,
      urgent: false
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Tesla',
      location: 'Austin, TX',
      type: 'Full-time',
      remote: 'Hybrid',
      salary: '$120K - $170K',
      postedBy: 'Emily Rodriguez',
      postedDate: '2025-02-04',
      applicants: 45,
      description: 'Apply machine learning to autonomous driving systems. Work with large datasets to improve vehicle safety and performance.',
      requirements: ['PhD in relevant field', 'Python/R expertise', 'Deep learning experience', 'Automotive industry knowledge'],
      benefits: ['Innovation focused', 'Stock options', 'Relocation assistance', 'Cutting-edge projects'],
      category: 'Data Science',
      experience: 'Senior',
      featured: true,
      urgent: false
    },
    {
      id: 5,
      title: 'Marketing Manager',
      company: 'Airbnb',
      location: 'New York, NY',
      type: 'Full-time',
      remote: 'Hybrid',
      salary: '$90K - $130K',
      postedBy: 'Jessica Taylor',
      postedDate: '2025-02-03',
      applicants: 12,
      description: 'Drive marketing campaigns for new market expansion. Lead digital marketing initiatives and brand partnerships.',
      requirements: ['Digital marketing experience', 'Campaign management', 'Analytics tools', 'Creative thinking'],
      benefits: ['Travel perks', 'Marketing budget', 'Team events', 'Growth opportunities'],
      category: 'Marketing',
      experience: 'Mid',
      featured: false,
      urgent: false
    }
  ];

  const internships = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'Meta',
      location: 'Menlo Park, CA',
      duration: '12 weeks',
      stipend: '$8,000/month',
      season: 'Summer 2025',
      description: 'Work on real products used by billions of people. Mentorship from senior engineers.',
      requirements: ['CS student', 'Programming experience', 'Problem-solving skills']
    },
    {
      id: 2,
      title: 'Product Management Intern',
      company: 'Netflix',
      location: 'Los Gatos, CA',
      duration: '10 weeks',
      stipend: '$7,500/month',
      season: 'Summer 2025',
      description: 'Support product teams in feature development and user research initiatives.',
      requirements: ['Business/Engineering student', 'Analytical skills', 'Communication']
    }
  ];

  const referrals = [
    {
      id: 1,
      company: 'Google',
      position: 'Multiple roles',
      referrer: 'Sarah Johnson',
      count: 3,
      note: 'Happy to provide referrals for qualified candidates. Strong engineering culture.'
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Product & Engineering',
      referrer: 'Michael Chen',
      count: 2,
      note: 'Looking for PMs and senior engineers. Great work-life balance.'
    }
  ];

  const categories = ['All', 'Engineering', 'Product', 'Design', 'Data Science', 'Marketing', 'Sales'];
  const experienceLevels = ['All', 'Entry', 'Mid', 'Senior', 'Executive'];
  const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  const filteredJobs = jobPostings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         job.category.toLowerCase() === selectedFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const featuredJobs = jobPostings.filter(job => job.featured);
  const urgentJobs = jobPostings.filter(job => job.urgent);

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search jobs by title, company, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Advanced Filters</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div className="flex items-center space-x-3 mb-4 lg:mb-0">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Jobs & Internships</h1>
              <p className="text-gray-600">Discover opportunities shared by fellow alumni</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Post Job</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { key: 'browse', label: 'Browse Jobs', count: jobPostings.length },
            { key: 'internships', label: 'Internships', count: internships.length },
            { key: 'referrals', label: 'Referrals', count: referrals.length },
            { key: 'my-posts', label: 'My Posts', count: 2 }
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
              {label} ({count})
            </button>
          ))}
        </div>

        {/* Filters for Browse Jobs */}
        {activeTab === 'browse' && (
          <div className="flex flex-wrap gap-3 mb-6">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Select Department</option>
              {categories.slice(1).map(category => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select Level</option>
              {experienceLevels.slice(1).map(level => (
                <option key={level} value={level.toLowerCase()}>
                  {level}
                </option>
              ))}
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select Type</option>
              {jobTypes.slice(1).map(type => (
                <option key={type} value={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Browse Jobs Tab */}
      {activeTab === 'browse' && (
        <div className="space-y-6">
          {/* Featured Jobs */}
          {featuredJobs.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Featured Jobs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredJobs.slice(0, 2).map(job => (
                  <div key={job.id} className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{job.title}</h3>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        Featured
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-1">{job.company}</p>
                    <p className="text-sm text-gray-600 mb-2">{job.location} • {job.remote}</p>
                    <p className="text-sm font-medium text-green-600">{job.salary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map(job => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                      {job.urgent && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                          Urgent
                        </span>
                      )}
                      {job.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-1" />
                        {job.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type} • {job.remote}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{job.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Posted by {job.postedBy} • {job.applicants} applicants</span>
                      <span>{new Date(job.postedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2 ml-4">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Benefits</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      job.category === 'Engineering' ? 'bg-blue-100 text-blue-800' :
                      job.category === 'Product' ? 'bg-green-100 text-green-800' :
                      job.category === 'Design' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {job.category}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                      {job.experience} Level
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                      Contact Poster
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      Apply Now
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Internships Tab */}
      {activeTab === 'internships' && (
        <div className="space-y-4">
          {internships.map(internship => (
            <div key={internship.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{internship.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 mr-1" />
                      {internship.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {internship.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {internship.duration}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {internship.stipend}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{internship.description}</p>
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Requirements</h4>
                    <ul className="text-sm text-gray-600">
                      {internship.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {internship.season}
                </span>
              </div>
              <div className="flex items-center justify-end space-x-2">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Referrals Tab */}
      {activeTab === 'referrals' && (
        <div className="space-y-4">
          {referrals.map(referral => (
            <div key={referral.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{referral.company}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {referral.count} positions
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{referral.position}</p>
                  <p className="text-sm text-gray-700 mb-3">{referral.note}</p>
                  <p className="text-sm text-gray-500">Offered by {referral.referrer}</p>
                </div>
              </div>
              <div className="flex items-center justify-end space-x-2">
                <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Request Referral
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* My Posts Tab */}
      {activeTab === 'my-posts' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-center py-8">
            <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No job posts yet</h3>
            <p className="text-gray-600 mb-4">Start sharing opportunities with your alumni network!</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Post Your First Job
            </button>
          </div>
        </div>
      )}

      {/* Empty State for Filtered Results */}
      {activeTab === 'browse' && filteredJobs.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters.</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedFilter('all'); }}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default JobBoardPage;