import React from 'react';
import { Shield, Users, Calendar, MessageSquare, Settings, Eye, Edit, Trash2, UserPlus } from 'lucide-react';

const RoleAccessPage = () => {
  const roles = [
    {
      name: 'Alumni',
      description: 'Graduates who can access alumni-specific features',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      permissions: [
        { icon: Eye, name: 'View Alumni Directory', granted: true },
        { icon: Edit, name: 'Edit Own Profile', granted: true },
        { icon: Calendar, name: 'Join Events', granted: true },
        { icon: MessageSquare, name: 'Participate in Discussions', granted: true },
        { icon: Users, name: 'Access Mentorship Program', granted: true },
        { icon: Settings, name: 'Manage Alumni Records', granted: false },
        { icon: Trash2, name: 'Delete Events', granted: false },
        { icon: UserPlus, name: 'Add New Users', granted: false },
      ]
    },
    {
      name: 'Admin',
      description: 'Full system access with management capabilities',
      color: 'bg-red-50 border-red-200',
      iconColor: 'text-red-600',
      permissions: [
        { icon: Eye, name: 'View Alumni Directory', granted: true },
        { icon: Edit, name: 'Edit All Profiles', granted: true },
        { icon: Calendar, name: 'Manage Events', granted: true },
        { icon: MessageSquare, name: 'Moderate Discussions', granted: true },
        { icon: Users, name: 'Manage Mentorship', granted: true },
        { icon: Settings, name: 'Manage Alumni Records', granted: true },
        { icon: Trash2, name: 'Delete Content', granted: true },
        { icon: UserPlus, name: 'Add New Users', granted: true },
      ]
    },
    {
      name: 'Student',
      description: 'Current students with limited access',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      permissions: [
        { icon: Eye, name: 'View Alumni Directory', granted: true },
        { icon: Edit, name: 'Edit Own Profile', granted: true },
        { icon: Calendar, name: 'View Events', granted: true },
        { icon: MessageSquare, name: 'Limited Discussion Access', granted: true },
        { icon: Users, name: 'Request Mentorship', granted: true },
        { icon: Settings, name: 'Manage Alumni Records', granted: false },
        { icon: Trash2, name: 'Delete Content', granted: false },
        { icon: UserPlus, name: 'Add New Users', granted: false },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Role-Based Access Control</h1>
            <p className="text-gray-600">Manage permissions and access levels for different user roles</p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex">
            <Shield className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Security Notice</h3>
              <p className="text-sm text-yellow-700 mt-1">
                Role permissions are enforced at the application level. Changes may take effect after the next login.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {roles.map((role, index) => (
          <div key={index} className={`bg-white rounded-lg border-2 ${role.color} p-6`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${role.color}`}>
                  <Shield className={`w-6 h-6 ${role.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{role.name}</h3>
                  <p className="text-sm text-gray-600">{role.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Permissions:</h4>
              {role.permissions.map((permission, permIndex) => {
                const Icon = permission.icon;
                return (
                  <div key={permIndex} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-700">{permission.name}</span>
                    </div>
                    <div className="flex items-center">
                      {permission.granted ? (
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          Granted
                        </div>
                      ) : (
                        <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                          Denied
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <button className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                role.name === 'Admin' 
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : role.name === 'Alumni'
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}>
                Manage {role.name} Role
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Permission Matrix</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Alumni
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Admin
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                'View Alumni Directory',
                'Edit Profiles',
                'Manage Events',
                'Moderate Discussions',
                'Access Mentorship',
                'System Administration'
              ].map((feature, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {feature}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      ['View Alumni Directory', 'Access Mentorship'].includes(feature)
                        ? 'bg-green-100 text-green-800'
                        : feature === 'Edit Profiles'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {['View Alumni Directory', 'Access Mentorship'].includes(feature) ? 'Full' :
                       feature === 'Edit Profiles' ? 'Own Only' : 'None'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Full
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      ['View Alumni Directory', 'Access Mentorship'].includes(feature)
                        ? 'bg-yellow-100 text-yellow-800'
                        : feature === 'Edit Profiles'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {['View Alumni Directory', 'Access Mentorship'].includes(feature) ? 'Limited' :
                       feature === 'Edit Profiles' ? 'Own Only' : 'None'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoleAccessPage;