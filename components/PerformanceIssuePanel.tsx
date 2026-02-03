import React from 'react';
import { PerformanceIssue } from '@/types';

interface PerformanceIssuePanelProps {
  issues: PerformanceIssue[];
}

const PerformanceIssuePanel: React.FC<PerformanceIssuePanelProps> = ({ issues }) => {
  return (
    <div className="p-4 rounded-lg border-2 border-jedi-blue bg-blue-900/20 mb-4">
      <h3 className="text-xl font-bold text-jedi-blue mb-4 flex items-center">
        ⚡ Performance Disturbances Detected
      </h3>
      <div className="space-y-3">
        {issues.map((issue, index) => (
          <div key={index} className="bg-black/40 p-3 rounded border border-blue-500/30">
            <div className="flex items-start justify-between mb-2">
              <span className="text-yellow-400 font-semibold">{issue.type}</span>
              <span className="text-sm text-gray-400">{issue.location}</span>
            </div>
            <div className="mb-2">
              <span className="text-red-400 text-sm">Impact: </span>
              <span className="text-gray-300 text-sm">{issue.impact}</span>
            </div>
            <div className="border-t border-gray-700 pt-2 mt-2">
              <span className="text-jedi-green font-semibold text-sm">Optimization: </span>
              <p className="text-gray-300 text-sm mt-1">{issue.suggestion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceIssuePanel;
