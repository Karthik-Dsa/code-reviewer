import React from 'react';
import { PerformanceIssue } from '@/types';
import styles from './PerformanceIssuePanel.module.css';

interface PerformanceIssuePanelProps {
  issues: PerformanceIssue[];
}

const PerformanceIssuePanel: React.FC<PerformanceIssuePanelProps> = ({ issues }) => {
  return (
    <div className={styles.panel}>
      <h3 className={styles.title}>
        ⚡ Performance Disturbances Detected
      </h3>
      <div className={styles.issuesList}>
        {issues.map((issue, index) => (
          <div key={index} className={styles.issueCard}>
            <div className={styles.issueHeader}>
              <span className={styles.issueType}>{issue.type}</span>
              <span className={styles.issueLocation}>{issue.location}</span>
            </div>
            <div>
              <span className={styles.impactLabel}>Impact: </span>
              <span className={styles.impactText}>{issue.impact}</span>
            </div>
            <div className={styles.suggestionSection}>
              <span className={styles.suggestionLabel}>Optimization: </span>
              <p className={styles.suggestionText}>{issue.suggestion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceIssuePanel;
