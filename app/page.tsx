'use client';

import React, { useState } from 'react';
import { LanguageType, Message, ComponentData } from '@/types';
import SecurityVulnerabilityCard from '@/components/SecurityVulnerabilityCard';
import PerformanceIssuePanel from '@/components/PerformanceIssuePanel';
import CodeSmellAlert from '@/components/CodeSmellAlert';
import RefactoringSuggestion from '@/components/RefactoringSuggestion';
import LearningResourcesList from '@/components/LearningResourcesList';
import CodeQualityScore from '@/components/CodeQualityScore';

export default function Home() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState<LanguageType>('javascript');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: `Review my ${language} code:\n\`\`\`${language}\n${code}\n\`\`\``,
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to analyze code');
      }

      const data = await response.json();

      // Add assistant message with components
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message || 'Analysis complete',
        components: data.components || [],
      };
      setMessages(prev => [...prev, assistantMessage]);
      setCode(''); // Clear the code input
    } catch (error: any) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: `⚠️ Error: ${error.message}. Please check your GROQ_API_KEY in the environment variables.`,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearConversation = () => {
    setMessages([]);
    setCode('');
  };

  const renderComponent = (componentData: ComponentData, index: number) => {
    const { type, props } = componentData;
    const key = `${type}-${index}`;

    switch (type) {
      case 'SecurityVulnerabilityCard':
        return <SecurityVulnerabilityCard key={key} {...props} />;
      case 'PerformanceIssuePanel':
        return <PerformanceIssuePanel key={key} {...props} />;
      case 'CodeSmellAlert':
        return <CodeSmellAlert key={key} {...props} />;
      case 'RefactoringSuggestion':
        return <RefactoringSuggestion key={key} {...props} />;
      case 'LearningResourcesList':
        return <LearningResourcesList key={key} {...props} />;
      case 'CodeQualityScore':
        return <CodeQualityScore key={key} {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900/50 to-green-900/50 border-b-2 border-jedi-blue py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center star-wars-text animate-pulse-slow">
            ⚔️ Jedi Code Council ⚔️
          </h1>
          <p className="text-center text-gray-300 mt-2 text-lg">
            May the Force be with your code
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Code Input Section */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-2 border-jedi-blue rounded-lg p-6 mb-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="language" className="block text-jedi-blue font-semibold mb-2">
                Select Language
              </label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageType)}
                className="w-full md:w-64 px-4 py-2 bg-dark-side border border-jedi-blue rounded text-white focus:outline-none focus:ring-2 focus:ring-jedi-blue"
              >
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="code" className="block text-jedi-blue font-semibold mb-2">
                Paste Your Code
              </label>
              <textarea
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="// Paste your code here for review..."
                className="w-full h-64 px-4 py-3 bg-dark-side border border-jedi-blue rounded text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-jedi-blue resize-none"
                disabled={isLoading}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isLoading || !code.trim()}
                className="flex-1 bg-gradient-to-r from-jedi-blue to-jedi-green text-white font-bold py-3 px-6 rounded hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? '🔮 Consulting the Jedi Council...' : '⚔️ Review Code'}
              </button>
              
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearConversation}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-all duration-200"
                  disabled={isLoading}
                >
                  🗑️ Clear
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Conversation History */}
        {messages.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-jedi-blue mb-4">
              📜 Council Proceedings
            </h2>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 ${
                  message.role === 'user'
                    ? 'bg-blue-900/20 border-l-4 border-jedi-blue'
                    : 'bg-green-900/20 border-l-4 border-jedi-green'
                }`}
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">
                    {message.role === 'user' ? '👤' : '🧙‍♂️'}
                  </span>
                  <span className="font-bold text-lg">
                    {message.role === 'user' ? 'You' : 'Jedi Master'}
                  </span>
                </div>
                
                <div className="text-gray-300 mb-4 whitespace-pre-wrap">
                  {message.content}
                </div>

                {/* Render Dynamic Components */}
                {message.components && message.components.length > 0 && (
                  <div className="mt-4 space-y-4">
                    {message.components.map((component, idx) =>
                      renderComponent(component, idx)
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-jedi-blue mb-4"></div>
            <p className="text-xl text-jedi-blue font-semibold animate-pulse">
              The Force is strong... Analyzing your code...
            </p>
          </div>
        )}

        {/* Empty State */}
        {messages.length === 0 && !isLoading && (
          <div className="text-center py-12 bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-lg border border-jedi-blue/30">
            <div className="text-6xl mb-4">🧙‍♂️</div>
            <h3 className="text-2xl font-bold text-jedi-blue mb-2">
              Welcome, Young Padawan
            </h3>
            <p className="text-gray-400">
              Paste your code above and submit it for review by the Jedi Council
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-jedi-blue/30 mt-12 py-6 text-center text-gray-400">
        <p className="italic">
          &quot;Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. 
          Hate leads to suffering.&quot; - Master Yoda
        </p>
        <p className="mt-2 text-sm">
          Built for The UI Strikes Back Hackathon 🚀
        </p>
      </footer>
    </div>
  );
}
