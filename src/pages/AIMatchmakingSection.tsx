import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const items = [
  {
    title: 'Smart Recommendations',
    content:
      'AI analyzes skills, industry experience, goals, and hobbies to recommend relevant connections.',
  },
  {
    title: 'Mentor Matching',
    content:
      'Matches students with alumni mentors who provide real guidance.',
  },
  {
    title: 'Job Referrals',
    content:
      'Finds job openings that match skills and alumni who can refer you.',
  },
  {
    title: 'Connection Building',
    content:
      'Suggests peers and alumni worth connecting with for projects, collaborations, or opportunities.',
  },
  {
    title: 'Continuous Learning',
    content:
      'The AI improves with every new profile, connection, and success story.',
  },
];

const AIMatchmakingSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          🤖 AI-Powered Matchmaking Explained
        </h2>
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border border-gray-200 rounded-lg bg-white shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-900 font-medium"
                >
                  {item.title}
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-gray-700">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIMatchmakingSection;