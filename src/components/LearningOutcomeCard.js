import React from 'react';
import styles from './LearningOutcomeCard.module.css';

/**
 * LearningOutcomeCard Component
 * Component for displaying learning outcomes with skills, tools, and connections
 */
const LearningOutcomeCard = ({
  outcomeNumber,
  title,
  description,
  skillsGained = [],
  toolsUsed = [],
  connectionToModules = []
}) => {
  return (
    <div className={styles.outcomeCard}>
      <div className={styles.outcomeHeader}>
        <div className={styles.outcomeNumber}>Outcome {outcomeNumber}</div>
        <h3 className={styles.outcomeTitle}>{title}</h3>
      </div>

      <div className={styles.outcomeDescription}>
        {description}
      </div>

      <div className={styles.outcomeDetails}>
        {skillsGained && skillsGained.length > 0 && (
          <div className={styles.detailSection}>
            <h4 className={styles.detailTitle}>Skills Gained:</h4>
            <ul className={styles.detailList}>
              {skillsGained.map((skill, index) => (
                <li key={index} className={styles.detailItem}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {toolsUsed && toolsUsed.length > 0 && (
          <div className={styles.detailSection}>
            <h4 className={styles.detailTitle}>Tools Used:</h4>
            <ul className={styles.detailList}>
              {toolsUsed.map((tool, index) => (
                <li key={index} className={styles.detailItem}>{tool}</li>
              ))}
            </ul>
          </div>
        )}

        {connectionToModules && connectionToModules.length > 0 && (
          <div className={styles.detailSection}>
            <h4 className={styles.detailTitle}>Module Connections:</h4>
            <div className={styles.moduleTags}>
              {connectionToModules.map((module, index) => (
                <span key={index} className={styles.moduleTag}>{module}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningOutcomeCard;