import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Users, MapPin, Building2, Calendar, Mail, Phone, ExternalLink } from 'lucide-react';

const AlumniDatabasePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const alumniData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      graduationYear: 2019,
      department: 'Computer Science',
      currentCompany: 'Google',
      position: 'Senior Software Engineer',
      location: 'Mountain View, CA',
      skills: ['React', 'Node.js', 'Python', 'Machine Learning'],
      profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '+1 (555) 234-5678',
      graduationYear: 2020,
      department: 'Business Administration',
      currentCompany: 'Microsoft',
      position: 'Product Manager',
      location: 'Seattle, WA',
      skills: ['Product Strategy', 'Analytics', 'Leadership', 'Agile'],
      profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '+1 (555) 345-6789',
      graduationYear: 2018,
      department: 'Engineering',
      currentCompany: 'Tesla',
      position: 'Mechanical Engineer',
      location: 'Austin, TX',
      skills: ['CAD Design', 'Project Management', 'Manufacturing', 'Innovation'],
      profileImage: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 4,
      name: 'David Kim',
      email: 'david.kim@email.com',
      phone: '+1 (555) 456-7890',
      graduationYear: 2021,
      department: 'Arts',
      currentCompany: 'Adobe',
      position: 'UX Designer',
      location: 'San Francisco, CA',
      skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
      profileImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 5,
      name: 'Jessica Taylor',
      email: 'jessica.taylor@email.com',
      phone: '+1 (555) 567-8901',
      graduationYear: 2017,
      department: 'Medicine',
      currentCompany: 'Johns Hopkins Hospital',
      position: 'Physician',
      location: 'Baltimore, MD',
      skills: ['Clinical Medicine', 'Research', 'Patient Care', 'Surgery'],
      profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 6,
      name: 'Alex Thompson',
      email: 'alex.thompson@email.com',
      phone: '+1 (555) 678-9012',
      graduationYear: 2022,
      department: 'Sciences',
      currentCompany: 'NASA',
      position: 'Data Scientist',
      location: 'Houston, TX',
      skills: ['Data Analysis', 'Python', 'Statistics', 'Visualization'],
      profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
    
  ];

  const filteredAlumni = alumniData.filter(alumni =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.currentCompany.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search alumni by name, company, department, or location..."
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
            <Link
              to="/dashboard/filters"
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Advanced Filters</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div className="flex items-center space-x-3 mb-4 lg:mb-0">
            <Users className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Alumni Database</h1>
              <p className="text-gray-600">Browse and connect with {alumniData.length} alumni</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">
              Showing {filteredAlumni.length} alumni
            </span>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumni) => (
            <div key={alumni.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={alumni.profileImage}
                    alt={alumni.name}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{alumni.name}</h3>
                    <p className="text-sm text-gray-600">{alumni.position}</p>
                    <div className="flex items-center text-sm text-blue-600 mt-1">
                      <Building2 className="w-4 h-4 mr-1" />
                      {alumni.currentCompany}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    Class of {alumni.graduationYear} • {alumni.department}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {alumni.location}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {alumni.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                  <Link
                    to={`/dashboard/alumni-profile/${alumni.id}`}
                    className="flex items-center space-x-1 text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniDatabasePage;