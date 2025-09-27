import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  User, 
  FileText, 
  Image, 
  Save,
  ArrowLeft,
  Plus,
  X
} from 'lucide-react';

const EventCreationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    venue: '',
    address: '',
    guestSpeaker: '',
    speakerBio: '',
    category: '',
    maxAttendees: '',
    registrationDeadline: '',
    tags: [],
    requiresApproval: false,
    isVirtual: false,
    virtualLink: '',
    contactEmail: '',
    eventImage: ''
  });

  const [currentTag, setCurrentTag] = useState('');

  const categories = [
    'networking', 'workshop', 'career', 'gala', 'competition', 
    'summit', 'seminar', 'social', 'fundraising', 'reunion'
  ];

  const handleInputChange = (e: React.TargetEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to backend
    console.log('Event created:', formData);
    navigate('/events');
  };

  const handleSaveDraft = () => {
    // In a real app, this would save draft to backend
    console.log('Draft saved:', formData);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/events')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Events</span>
        </button>
        <div className="flex space-x-3">
          <button
            onClick={handleSaveDraft}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save Draft</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Calendar className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Create New Event</h1>
            <p className="text-gray-600">Fill in the details to create an alumni event</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter event title"
                />
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your event in detail"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="maxAttendees" className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Attendees *
                </label>
                <input
                  type="number"
                  id="maxAttendees"
                  name="maxAttendees"
                  required
                  min="1"
                  value={formData.maxAttendees}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Date and Time
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Start Time *
                </label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  required
                  value={formData.startTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-2">
                  End Time *
                </label>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  required
                  value={formData.endTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="lg:col-span-3">
                <label htmlFor="registrationDeadline" className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Deadline
                </label>
                <input
                  type="date"
                  id="registrationDeadline"
                  name="registrationDeadline"
                  value={formData.registrationDeadline}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Location
            </h2>
            
            <div className="flex items-center space-x-4 mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="isVirtual"
                  checked={formData.isVirtual}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm font-medium text-gray-700">This is a virtual event</span>
              </label>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {!formData.isVirtual && (
                <>
                  <div>
                    <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
                      Venue Name *
                    </label>
                    <input
                      type="text"
                      id="venue"
                      name="venue"
                      required={!formData.isVirtual}
                      value={formData.venue}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Convention Center"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required={!formData.isVirtual}
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="123 Main Street, City, State"
                    />
                  </div>
                </>
              )}

              {formData.isVirtual && (
                <div className="lg:col-span-2">
                  <label htmlFor="virtualLink" className="block text-sm font-medium text-gray-700 mb-2">
                    Virtual Meeting Link *
                  </label>
                  <input
                    type="url"
                    id="virtualLink"
                    name="virtualLink"
                    required={formData.isVirtual}
                    value={formData.virtualLink}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://zoom.us/j/123456789"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Guest Speaker */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Guest Speaker (Optional)
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="guestSpeaker" className="block text-sm font-medium text-gray-700 mb-2">
                  Speaker Name
                </label>
                <input
                  type="text"
                  id="guestSpeaker"
                  name="guestSpeaker"
                  value={formData.guestSpeaker}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe (Company)"
                />
              </div>

              <div>
                <label htmlFor="speakerBio" className="block text-sm font-medium text-gray-700 mb-2">
                  Speaker Bio
                </label>
                <textarea
                  id="speakerBio"
                  name="speakerBio"
                  rows={3}
                  value={formData.speakerBio}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief bio about the speaker"
                />
              </div>
            </div>
          </div>

          {/* Additional Settings */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Additional Settings
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  required
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="contact@alumni.edu"
                />
              </div>

              <div>
                <label htmlFor="eventImage" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Image URL
                </label>
                <input
                  type="url"
                  id="eventImage"
                  name="eventImage"
                  value={formData.eventImage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Add a tag"
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="requiresApproval"
                    checked={formData.requiresApproval}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Require admin approval for registration
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate('/events')}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventCreationPage;