import React from 'react';
import styles from './CourseTimeline.module.css';

/**
 * CourseTimeline Component
 * Visual timeline component for 13-week schedule showing module overlaps and week groupings
 */
const CourseTimeline = ({ weeks = [] }) => {
  return (
    <div className={styles.timelineContainer}>
      <h3 className={styles.timelineTitle}>Course Timeline Overview</h3>
      <div className={styles.timelineVisualization}>
        <div className={styles.weeksContainer}>
          {weeks.map((week, index) => (
            <div key={index} className={styles.weekBlock}>
              <div className={styles.weekNumber}>Week {index + 1}</div>
              <div className={styles.weekTitle}>{week.title}</div>
              <div className={styles.weekModules}>
                {week.modules && week.modules.map((module, idx) => (
                  <span key={idx} className={styles.moduleTag}>{module}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Module connections visualization */}
        <div className={styles.moduleConnections}>
          <div className={styles.moduleConnection}>ROS 2 → Simulation → AI-Brain → VLA</div>
          <div className={styles.capstoneConnection}>All modules connect to Capstone Project</div>
        </div>
      </div>

      <div className={styles.timelineLegend}>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.rosModule}`}></span>
          <span>ROS 2 Module</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.simModule}`}></span>
          <span>Simulation Module</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.aiModule}`}></span>
          <span>AI-Brain Module</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.vlaModule}`}></span>
          <span>VLA Module</span>
        </div>
      </div>
    </div>
  );
};

export default CourseTimeline;