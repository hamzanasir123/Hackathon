import React from 'react';
import styles from './ArchitectureDiagram.module.css';

/**
 * ArchitectureDiagram Component
 * Displays architectural diagrams for simulation systems
 */
const ArchitectureDiagram = ({
  title = 'System Architecture',
  variant = 'basic',
  showLegend = true,
  highlightElements = [],
  description = '',
  elements = []
}) => {
  // Different diagram variants
  const renderDiagramVariant = () => {
    switch (variant) {
      case 'basic':
        return renderBasicDiagram();
      case 'advanced':
        return renderAdvancedDiagram();
      case 'communication':
        return renderCommunicationDiagram();
      case 'components':
        return renderComponentsDiagram();
      default:
        return renderBasicDiagram();
    }
  };

  const renderBasicDiagram = () => (
    <div className={styles.diagramContainer}>
      <div className={`${styles.element} ${highlightElements.includes('robot') ? styles.highlighted : ''}`}>
        <div className={styles.elementIcon}>🤖</div>
        <div className={styles.elementLabel}>Robot</div>
      </div>
      <div className={styles.connector}>↔</div>
      <div className={`${styles.element} ${highlightElements.includes('ros') ? styles.highlighted : ''}`}>
        <div className={styles.elementIcon}>🔗</div>
        <div className={styles.elementLabel}>ROS 2</div>
      </div>
      <div className={styles.connector}>↔</div>
      <div className={`${styles.element} ${highlightElements.includes('simulation') ? styles.highlighted : ''}`}>
        <div className={styles.elementIcon}>🎮</div>
        <div className={styles.elementLabel}>Simulation</div>
      </div>
    </div>
  );

  const renderAdvancedDiagram = () => (
    <div className={styles.diagramContainer}>
      <div className={styles.row}>
        <div className={`${styles.element} ${styles.large} ${highlightElements.includes('hardware') ? styles.highlighted : ''}`}>
          <div className={styles.elementIcon}>🔧</div>
          <div className={styles.elementLabel}>Hardware Layer</div>
        </div>
      </div>
      <div className={styles.connector}>↑↓</div>
      <div className={styles.row}>
        <div className={`${styles.element} ${highlightElements.includes('firmware') ? styles.highlighted : ''}`}>
          <div className={styles.elementIcon}>⚙️</div>
          <div className={styles.elementLabel}>Firmware</div>
        </div>
        <div className={`${styles.element} ${highlightElements.includes('drivers') ? styles.highlighted : ''}`}>
          <div className={styles.elementIcon}>🔌</div>
          <div className={styles.elementLabel}>Drivers</div>
        </div>
      </div>
      <div className={styles.connector}>↑↓</div>
      <div className={styles.row}>
        <div className={`${styles.element} ${highlightElements.includes('ros') ? styles.highlighted : ''}`}>
          <div className={styles.elementIcon}>🔗</div>
          <div className={styles.elementLabel}>ROS 2</div>
        </div>
      </div>
      <div className={styles.connector}>↑↓</div>
      <div className={styles.row}>
        <div className={`${styles.element} ${highlightElements.includes('applications') ? styles.highlighted : ''}`}>
          <div className={styles.elementIcon}>📱</div>
          <div className={styles.elementLabel}>Applications</div>
        </div>
      </div>
    </div>
  );

  const renderCommunicationDiagram = () => (
    <div className={styles.diagramContainer}>
      <div className={styles.column}>
        <div className={`${styles.element} ${highlightElements.includes('publisher') ? styles.highlighted : ''}`}>
          <div className={styles.elementIcon}>📤</div>
          <div className={styles.elementLabel}>Publisher</div>
        </div>
        <div className={styles.topic}>Topic</div>
      </div>
      <div className={styles.connector}>→</div>
      <div className={styles.column}>
        <div className={`${styles.element} ${highlightElements.includes('subscriber') ? styles.highlighted : ''}`}>
          <div className={styles.elementIcon}>📥</div>
          <div className={styles.elementLabel}>Subscriber</div>
        </div>
        <div className={styles.message}>Message</div>
      </div>
    </div>
  );

  const renderComponentsDiagram = () => (
    <div className={styles.diagramContainer}>
      <div className={styles.row}>
        <div className={`${styles.element} ${highlightElements.includes('gazebo') ? styles.highlighted : ''}`}>
          <div className={styles.elementIcon}>🏗️</div>
          <div className={styles.elementLabel}>Gazebo</div>
        </div>
        <div className={`${styles.element} ${highlightElements.includes('unity') ? styles.highlighted : ''}`}>
          <div className={styles.elementIcon}>🎬</div>
          <div className={styles.elementLabel}>Unity</div>
        </div>
      </div>
      <div className={styles.connector}>🔄</div>
      <div className={styles.row}>
        <div className={`${styles.element} ${highlightElements.includes('ros_bridge') ? styles.highlighted : ''}`}>
          <div className={styles.elementIcon}>🌉</div>
          <div className={styles.elementLabel}>ROS Bridge</div>
        </div>
      </div>
      <div className={styles.connector}>🔄</div>
      <div className={styles.row}>
        <div className={`${styles.element} ${highlightElements.includes('controllers') ? styles.highlighted : ''}`}>
          <div className={styles.elementIcon}>🎛️</div>
          <div className={styles.elementLabel}>Controllers</div>
        </div>
        <div className={`${styles.element} ${highlightElements.includes('sensors') ? styles.highlighted : ''}`}>
          <div className={styles.elementIcon}>📡</div>
          <div className={styles.elementLabel}>Sensors</div>
        </div>
      </div>
    </div>
  );

  const renderLegend = () => {
    if (!showLegend) return null;

    return (
      <div className={styles.legend}>
        <h4>Legend</h4>
        <div className={styles.legendItems}>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.robotColor}`}></div>
            <span>Robot Systems</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.simulationColor}`}></div>
            <span>Simulation</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.communicationColor}`}></div>
            <span>Communication</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.softwareColor}`}></div>
            <span>Software Layer</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.content}>
        {renderDiagramVariant()}

        {description && (
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        )}

        {renderLegend()}
      </div>
    </div>
  );
};

export default ArchitectureDiagram;