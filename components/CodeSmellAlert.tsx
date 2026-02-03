import React from 'react';
import { CodeSmell } from '@/types';
import styles from './CodeSmellAlert.module.css';

const CodeSmellAlert: React.FC<CodeSmell> = ({ smell, explanation, refactoringPattern }) => {
  return (
    <div className={styles.alert}>
      <h3 className={styles.title}>
        👃 Code Smell Detected in the Force
      </h3>
      <div>
        <span className={styles.smellLabel}>Smell: </span>
        <span className={styles.smellName}>{smell}</span>
      </div>
      <div className={styles.explanation}>
        <p>{explanation}</p>
      </div>
      <div className={styles.patternSection}>
        <span className={styles.patternLabel}>Refactoring Pattern: </span>
        <p className={styles.patternText}>
          {refactoringPattern}
        </p>
      </div>
    </div>
  );
};

export default CodeSmellAlert;
