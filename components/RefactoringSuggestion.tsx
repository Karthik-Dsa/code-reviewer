import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { RefactoringSuggestion as RefactoringSuggestionType } from '@/types';
import styles from './RefactoringSuggestion.module.css';

const RefactoringSuggestion: React.FC<RefactoringSuggestionType> = ({
  before,
  after,
  explanation,
  benefit,
}) => {
  return (
    <div className={styles.suggestion}>
      <h3 className={styles.title}>
        🔄 Path to the Light Side
      </h3>
      <div className={styles.explanation}>
        <p>{explanation}</p>
      </div>
      <div className={styles.codeGrid}>
        <div className={styles.codeColumn}>
          <div className={styles.beforeLabel}>
            ❌ Before (Dark Side)
          </div>
          <div className={styles.codeWrapper}>
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
        <div className={styles.codeColumn}>
          <div className={styles.afterLabel}>
            ✅ After (Light Side)
          </div>
          <div className={styles.codeWrapper}>
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
      <div className={styles.benefitBox}>
        <span className={styles.benefitLabel}>Benefit: </span>
        <p className={styles.benefitText}>{benefit}</p>
      </div>
    </div>
  );
};

export default RefactoringSuggestion;
