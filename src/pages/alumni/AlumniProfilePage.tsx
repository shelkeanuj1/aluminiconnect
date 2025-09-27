import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Building2, Calendar, Award, ExternalLink, Linkedin as LinkedIn, Globe, Edit, MessageCircle, Users } from 'lucide-react';

const AlumniProfilePage = () => {
  const { id } = useParams();

  // Mock data - in real app, this would be fetched based on ID
  const alumni = {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    bio: 'Passionate software engineer with 5+ years of experience in full-stack development. Love working on innovative projects that solve real-world problems. Always eager to mentor upcoming developers and contribute to the tech community.',
    graduationYear: 2019,
    department: 'Computer Science',
    degree: 'Bachelor of Science',
    currentCompany: 'Google',
    position: 'Senior Software Engineer',
    location: 'Mountain View, CA',
    profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    linkedinUrl: 'https://linkedin.com/in/sarah-johnson',
    websiteUrl: 'https://sarah-johnson.dev',
    skills: [
      'React', 'Node.js', 'Python', 'Machine Learning', 
      'TypeScript', 'AWS', 'Docker', 'Kubernetes',
      'GraphQL', 'PostgreSQL', 'Redis', 'Microservices'
    ],
    careerHistory: [
      {
        company: 'Google',
        position: 'Senior Software Engineer',
        duration: '2022 - Present',
        description: 'Leading development of cloud infrastructure tools and mentoring junior engineers.'
      },
      {
        company: 'Meta',
        position: 'Software Engineer',
        duration: '2020 - 2022',
        description: 'Developed features for Facebook Marketplace using React and GraphQL.'
      },
      {
        company: 'Startup Inc.',
        position: 'Junior Developer',
        duration: '2019 - 2020',
        description: 'Built full-stack web applications using modern JavaScript frameworks.'
      }
    ],
    achievements: [
      {
        title: 'Outstanding Alumni Award',
        year: '2023',
        description: 'Recognized for significant contributions to the tech industry and mentorship program.'
      },
      {
        title: 'Google Cloud Certified',
        year: '2022',
        description: 'Professional Cloud Architect certification.'
      },
      {
        title: 'Tech Conference Speaker',
        year: '2021',
        description: 'Keynote speaker at ReactConf 2021 on "Building Scalable Applications".'
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Back Navigation */}
      <Link
        to="/alumni-database"
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Alumni Database</span>
      </Link>

      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>
        <div className="px-6 pb-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:space-x-6">
            <div className="flex flex-col items-center lg:items-start -mt-16 lg:-mt-12">
              <img
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
                src={alumni.profileImage}
                alt={alumni.name}
              />
              <div className="text-center lg:text-left mt-4">
                <h1 className="text-2xl font-bold text-gray-900">{alumni.name}</h1>
                <p className="text-lg text-gray-600">{alumni.position}</p>
                <div className="flex items-center justify-center lg:justify-start text-blue-600 mt-1">
                  <Building2 className="w-4 h-4 mr-1" />
                  {alumni.currentCompany}
                </div>
              </div>
            </div>

            <div className="flex-1 mt-6 lg:mt-0">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Users className="w-4 h-4" />
                  <span>Connect</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Edit className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">{alumni.bio}</p>
          </div>

          {/* Career History */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Career History</h2>
            <div className="space-y-6">
              {alumni.careerHistory.map((job, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-medium text-gray-900">{job.position}</h3>
                      <span className="text-sm text-gray-500">{job.duration}</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h2>
            <div className="space-y-4">
              {alumni.achievements.map((achievement, index) => (
                <div key={index} className="flex space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-medium text-gray-900">{achievement.title}</h3>
                      <span className="text-sm text-gray-500">{achievement.year}</span>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href={`mailto:${alumni.email}`} className="text-blue-600 hover:text-blue-800">
                  {alumni.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href={`tel:${alumni.phone}`} className="text-blue-600 hover:text-blue-800">
                  {alumni.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{alumni.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <LinkedIn className="w-5 h-5 text-gray-400" />
                <a
                  href={alumni.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  LinkedIn Profile
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gray-400" />
                <a
                  href={alumni.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  Personal Website
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">Class of {alumni.graduationYear}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{alumni.degree}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{alumni.department}</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {alumni.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Request Mentorship
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Invite to Event
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Share Contact
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Report Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfilePage;