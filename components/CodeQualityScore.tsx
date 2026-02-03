import React from 'react';
import { CodeQualityScore as CodeQualityScoreType } from '@/types';
import styles from './CodeQualityScore.module.css';

const CodeQualityScore: React.FC<CodeQualityScoreType> = ({ score, metrics }) => {
  const getScoreColorClass = (value: number) => {
    if (value >= 80) return styles.colorGreen;
    if (value >= 60) return styles.colorYellow;
    return styles.colorRed;
  };

  const getBarClass = (value: number) => {
    if (value >= 80) return styles.highScore;
    if (value >= 60) return styles.mediumScore;
    return styles.lowScore;
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) return '🌟 Strong in the Force you are!';
    if (score >= 75) return '✨ The Force is with you!';
    if (score >= 60) return '⚡ More training you need.';
    if (score >= 40) return '⚠️ Disturbances in the Force detected.';
    return '🔴 To the Dark Side you have fallen.';
  };

  const MetricBar = ({ label, value }: { label: string; value: number }) => (
    <div className={styles.metricBar}>
      <div className={styles.metricHeader}>
        <span className={styles.metricLabel}>{label}</span>
        <span className={`${styles.metricValue} ${getScoreColorClass(value)}`}>{value}/100</span>
      </div>
      <div className={styles.barContainer}>
        <div
          className={`${styles.barFill} ${getBarClass(value)}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className={styles.scoreCard}>
      <h3 className={styles.title}>
        ⭐ Force Sensitivity Analysis ⭐
      </h3>
      
      <div className={styles.scoreDisplay}>
        <div className={`${styles.scoreValue} ${getScoreColorClass(score)}`}>
          {score}
          <span className={styles.scoreUnit}>/100</span>
        </div>
        <p className={styles.scoreMessage}>{getScoreMessage(score)}</p>
      </div>

      <div className={styles.metricsSection}>
        <h4 className={styles.metricsTitle}>Detailed Metrics</h4>
        <MetricBar label="🛡️ Security" value={metrics.security} />
        <MetricBar label="⚡ Performance" value={metrics.performance} />
        <MetricBar label="🔧 Maintainability" value={metrics.maintainability} />
      </div>

      <div className={styles.quote}>
        &quot;Do or do not. There is no try.&quot; - Master Yoda
      </div>
    </div>
  );
};

export default CodeQualityScore;
