import React from 'react';
import { CodeSmell } from '@/types';

const CodeSmellAlert: React.FC<CodeSmell> = ({ smell, explanation, refactoringPattern }) => {
  return (
    <div className="p-4 rounded-lg border-2 border-yellow-600 bg-yellow-900/20 mb-4">
      <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
        👃 Code Smell Detected in the Force
      </h3>
      <div className="mb-3">
        <span className="text-yellow-300 font-semibold">Smell: </span>
        <span className="text-white font-bold">{smell}</span>
      </div>
      <div className="mb-3 bg-black/40 p-3 rounded">
        <p className="text-gray-300">{explanation}</p>
      </div>
      <div className="border-t border-yellow-700/50 pt-3">
        <span className="text-jedi-green font-semibold">Refactoring Pattern: </span>
        <p className="text-white mt-1 font-mono text-sm bg-black/60 p-2 rounded">
          {refactoringPattern}
        </p>
      </div>
    </div>
  );
};

export default CodeSmellAlert;
