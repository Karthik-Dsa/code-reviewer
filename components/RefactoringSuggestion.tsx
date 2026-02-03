import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { RefactoringSuggestion as RefactoringSuggestionType } from '@/types';

const RefactoringSuggestion: React.FC<RefactoringSuggestionType> = ({
  before,
  after,
  explanation,
  benefit,
}) => {
  return (
    <div className="p-4 rounded-lg border-2 border-jedi-green bg-green-900/20 mb-4">
      <h3 className="text-xl font-bold text-jedi-green mb-3 flex items-center">
        🔄 Path to the Light Side
      </h3>
      <div className="mb-3">
        <p className="text-gray-300">{explanation}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
        <div>
          <div className="text-red-400 font-semibold mb-2 flex items-center">
            ❌ Before (Dark Side)
          </div>
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
              }}
            >
              {before}
            </SyntaxHighlighter>
          </div>
        </div>
        <div>
          <div className="text-jedi-green font-semibold mb-2 flex items-center">
            ✅ After (Light Side)
          </div>
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
              }}
            >
              {after}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className="bg-black/40 p-3 rounded border border-jedi-green/30">
        <span className="text-jedi-green font-semibold">Benefit: </span>
        <p className="text-gray-300 mt-1">{benefit}</p>
      </div>
    </div>
  );
};

export default RefactoringSuggestion;
