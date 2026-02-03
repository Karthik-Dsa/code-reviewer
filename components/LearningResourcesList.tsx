import React from 'react';
import { LearningResource } from '@/types';
import styles from './LearningResourcesList.module.css';

interface LearningResourcesListProps {
  resources: LearningResource[];
}

const LearningResourcesList: React.FC<LearningResourcesListProps> = ({ resources }) => {
  const typeIcons: { [key: string]: string } = {
    documentation: '📚',
    tutorial: '🎓',
    article: '📝',
    video: '🎥',
    default: '🔗',
  };

  return (
    <div className={styles.resourcesList}>
      <h3 className={styles.title}>
        📖 Jedi Archives - Learn More
      </h3>
      <div className={styles.resources}>
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceLink}
          >
            <div className={styles.resourceContent}>
              <span className={styles.resourceIcon}>
                {typeIcons[resource.type.toLowerCase()] || typeIcons.default}
              </span>
              <div className={styles.resourceInfo}>
                <div className={styles.resourceTitle}>{resource.title}</div>
                <div className={styles.resourceType}>{resource.type}</div>
              </div>
              <span className={styles.resourceArrow}>→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LearningResourcesList;
