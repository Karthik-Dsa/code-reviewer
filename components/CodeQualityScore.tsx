import React from 'react';
import { CodeQualityScore as CodeQualityScoreType } from '@/types';

const CodeQualityScore: React.FC<CodeQualityScoreType> = ({ score, metrics }) => {
  const getScoreColor = (value: number) => {
    if (value >= 80) return 'text-jedi-green';
    if (value >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) return '🌟 Strong in the Force you are!';
    if (score >= 75) return '✨ The Force is with you!';
    if (score >= 60) return '⚡ More training you need.';
    if (score >= 40) return '⚠️ Disturbances in the Force detected.';
    return '🔴 To the Dark Side you have fallen.';
  };

  const MetricBar = ({ label, value }: { label: string; value: number }) => (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 text-sm">{label}</span>
        <span className={`text-sm font-bold ${getScoreColor(value)}`}>{value}/100</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${
            value >= 80
              ? 'bg-gradient-to-r from-jedi-green to-green-400'
              : value >= 60
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-300'
              : 'bg-gradient-to-r from-red-600 to-red-400'
          }`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="p-6 rounded-lg border-2 border-force-glow bg-blue-900/30 mb-4 animate-glow">
      <h3 className="text-2xl font-bold text-center mb-4 text-force-glow">
        ⭐ Force Sensitivity Analysis ⭐
      </h3>
      
      <div className="text-center mb-6">
        <div className={`text-6xl font-bold mb-2 ${getScoreColor(score)}`}>
          {score}
          <span className="text-3xl">/100</span>
        </div>
        <p className="text-xl text-gray-300">{getScoreMessage(score)}</p>
      </div>

      <div className="border-t border-gray-700 pt-4">
        <h4 className="text-lg font-semibold text-jedi-blue mb-3">Detailed Metrics</h4>
        <MetricBar label="🛡️ Security" value={metrics.security} />
        <MetricBar label="⚡ Performance" value={metrics.performance} />
        <MetricBar label="🔧 Maintainability" value={metrics.maintainability} />
      </div>

      <div className="mt-4 text-center text-sm text-gray-400 italic">
        "Do or do not. There is no try." - Master Yoda
      </div>
    </div>
  );
};

export default CodeQualityScore;
