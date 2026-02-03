import React from 'react';
import { LearningResource } from '@/types';

interface LearningResourcesListProps {
  resources: LearningResource[];
}

const LearningResourcesList: React.FC<LearningResourcesListProps> = ({ resources }) => {
  const typeIcons: { [key: string]: string } = {
    documentation: '📚',
    tutorial: '🎓',
    article: '📝',
    video: '🎥',
    default: '🔗',
  };

  return (
    <div className="p-4 rounded-lg border-2 border-purple-500 bg-purple-900/20 mb-4">
      <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
        📖 Jedi Archives - Learn More
      </h3>
      <div className="space-y-2">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black/40 p-3 rounded border border-purple-500/30 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-200"
          >
            <div className="flex items-start">
              <span className="text-2xl mr-3">
                {typeIcons[resource.type.toLowerCase()] || typeIcons.default}
              </span>
              <div className="flex-1">
                <div className="text-white font-semibold mb-1">{resource.title}</div>
                <div className="text-sm text-gray-400 capitalize">{resource.type}</div>
              </div>
              <span className="text-purple-400">→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LearningResourcesList;
