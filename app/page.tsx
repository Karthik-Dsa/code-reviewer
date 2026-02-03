'use client';

import React, { useState } from 'react';
import { LanguageType, Message, ComponentData } from '@/types';
import SecurityVulnerabilityCard from '@/components/SecurityVulnerabilityCard';
import PerformanceIssuePanel from '@/components/PerformanceIssuePanel';
import CodeSmellAlert from '@/components/CodeSmellAlert';
import RefactoringSuggestion from '@/components/RefactoringSuggestion';
import LearningResourcesList from '@/components/LearningResourcesList';
import CodeQualityScore from '@/components/CodeQualityScore';
import styles from './page.module.css';

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
    <div>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>
            ⚔️ Jedi Code Council ⚔️
          </h1>
          <p className={styles.subtitle}>
            May the Force be with your code
          </p>
        </div>
      </header>

      <div className={styles.mainContainer}>
        {/* Code Input Section */}
        <div className={styles.inputSection}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="language" className={styles.label}>
                Select Language
              </label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageType)}
                className={styles.select}
              >
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="code" className={styles.label}>
                Paste Your Code
              </label>
              <textarea
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="// Paste your code here for review..."
                className={styles.textarea}
                disabled={isLoading}
              />
            </div>

            <div className={styles.buttonGroup}>
              <button
                type="submit"
                disabled={isLoading || !code.trim()}
                className={styles.submitButton}
              >
                {isLoading ? '🔮 Consulting the Jedi Council...' : '⚔️ Review Code'}
              </button>
              
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearConversation}
                  className={styles.clearButton}
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
          <div>
            <h2 className={styles.conversationTitle}>
              📜 Council Proceedings
            </h2>
            {messages.map((message, index) => (
              <div key={index} className={styles.messageContainer}>
                <div className={`${styles.message} ${message.role === 'user' ? styles.userMessage : styles.assistantMessage}`}>
                  <div className={styles.messageHeader}>
                    <span className={styles.messageIcon}>
                      {message.role === 'user' ? '👤' : '🧙‍♂️'}
                    </span>
                    <span className={styles.messageSender}>
                      {message.role === 'user' ? 'You' : 'Jedi Master'}
                    </span>
                  </div>
                  
                  <div className={styles.messageContent}>
                    {message.content}
                  </div>

                  {/* Render Dynamic Components */}
                  {message.components && message.components.length > 0 && (
                    <div className={styles.componentsContainer}>
                      {message.components.map((component, idx) =>
                        renderComponent(component, idx)
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>
              The Force is strong... Analyzing your code...
            </p>
          </div>
        )}

        {/* Empty State */}
        {messages.length === 0 && !isLoading && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🧙‍♂️</div>
            <h3 className={styles.emptyTitle}>
              Welcome, Young Padawan
            </h3>
            <p className={styles.emptySubtitle}>
              Paste your code above and submit it for review by the Jedi Council
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerQuote}>
          &quot;Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. 
          Hate leads to suffering.&quot; - Master Yoda
        </p>
        <p className={styles.footerCredit}>
          Built for The UI Strikes Back Hackathon 🚀
        </p>
      </footer>
    </div>
  );
}
