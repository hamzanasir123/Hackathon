import React from 'react';
import styles from './ModuleConnectionDiagram.module.css';

/**
 * ModuleConnectionDiagram Component
 * Component for showing module relationships and connections to capstone
 */
const ModuleConnectionDiagram = ({ connections = [] }) => {
  return (
    <div className={styles.diagramContainer}>
      <h3 className={styles.diagramTitle}>Module Connections & Capstone Integration</h3>

      <div className={styles.modulesFlow}>
        <div className={styles.moduleBox}>
          <h4>ROS 2</h4>
          <p>Communication Foundation</p>
        </div>

        <div className={styles.arrow}>→</div>

        <div className={styles.moduleBox}>
          <h4>Simulation</h4>
          <p>Safe Testing Environment</p>
        </div>

        <div className={styles.arrow}>→</div>

        <div className={styles.moduleBox}>
          <h4>AI-Brain</h4>
          <p>Perception & Planning</p>
        </div>

        <div className={styles.arrow}>→</div>

        <div className={styles.moduleBox}>
          <h4>VLA</h4>
          <p>Human-Robot Interaction</p>
        </div>
      </div>

      <div className={styles.capstoneConnection}>
        <div className={styles.capstoneBox}>
          <h4>Capstone Project</h4>
          <p>Integration of All Modules</p>
        </div>
      </div>

      <div className={styles.connectionDetails}>
        <h4>Connection Types:</h4>
        <ul className={styles.connectionList}>
          <li><strong>Introduction:</strong> Initial exposure to module concepts</li>
          <li><strong>Deepening:</strong> Enhanced understanding and application</li>
          <li><strong>Application:</strong> Practical implementation of concepts</li>
          <li><strong>Integration:</strong> Connecting modules for capstone project</li>
        </ul>
      </div>
    </div>
  );
};

export default ModuleConnectionDiagram;