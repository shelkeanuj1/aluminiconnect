import React from 'react';

type Campaign = {
  id: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
};

const mockCampaigns: Campaign[] = [
  {
    id: 1,
    title: 'Scholarship Fund',
    description: 'Help provide scholarships to deserving students.',
    goal: 100000,
    raised: 45000,
  },
  {
    id: 2,
    title: 'Library Renovation',
    description: 'Upgrade the campus library with modern resources.',
    goal: 75000,
    raised: 62000,
  },
];

const FundraisingPage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Fundraising Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockCampaigns.map(campaign => {
          const progress = Math.min((campaign.raised / campaign.goal) * 100, 100);
          return (
            <div key={campaign.id} className="bg-white shadow-md rounded p-6">
              <h2 className="text-xl font-semibold mb-2">{campaign.title}</h2>
              <p className="mb-4 text-gray-700">{campaign.description}</p>
              <div className="mb-2 text-sm text-gray-600">
                Raised ₹{campaign.raised.toLocaleString()} of ₹{campaign.goal.toLocaleString()}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Contribute Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FundraisingPage;