import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './SimulationExample.module.css';

/**
 * SimulationExample Component
 * Displays interactive simulation examples for educational content
 */
const SimulationExample = ({
  title = 'Simulation Example',
  description = '',
  code = '',
  language = 'xml',
  simulationType = 'gazebo', // 'gazebo', 'unity', 'ros'
  showControls = true,
  showPreview = true,
  children
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRunSimulation = () => {
    setIsRunning(true);
    // Simulate running the simulation
    setTimeout(() => {
      setIsRunning(false);
    }, 3000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSimulationIcon = () => {
    switch(simulationType) {
      case 'gazebo':
        return '🏗️';
      case 'unity':
        return '🎬';
      case 'ros':
        return '🔗';
      default:
        return '⚙️';
    }
  };

  return (
    <div className={styles.simulationExample}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <span className={styles.icon}>{getSimulationIcon()}</span>
          <h3 className={styles.title}>{title}</h3>
        </div>

        {showControls && (
          <div className={styles.controls}>
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className={clsx(styles.controlButton, styles.runButton, {
                [styles.running]: isRunning
              })}
            >
              {isRunning ? 'Running...' : '▶ Run'}
            </button>
            {code && (
              <button
                onClick={handleCopyCode}
                className={clsx(styles.controlButton, styles.copyButton)}
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            )}
          </div>
        )}
      </div>

      {description && (
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      )}

      {code && (
        <div className={styles.codeBlock}>
          <div className={styles.toolbar}>
            <span className={styles.language}>{language.toUpperCase()}</span>
            <button
              onClick={handleCopyCode}
              className={styles.copyButton}
              title="Copy code"
            >
              {copied ? '✓' : '⧉'}
            </button>
          </div>
          <pre className={styles.pre}>
            <code className={styles.code}>
              {code}
            </code>
          </pre>
        </div>
      )}

      {showPreview && (
        <div className={styles.preview}>
          <div className={styles.previewHeader}>
            <h4>Simulation Preview</h4>
          </div>
          <div className={styles.previewContent}>
            {children || (
              <div className={styles.defaultPreview}>
                <div className={styles.simulationPlaceholder}>
                  <div className={styles.simulationIcon}>{getSimulationIcon()}</div>
                  <p>Simulation preview would appear here</p>
                  {isRunning && <div className={styles.runningIndicator}>▶ Simulating...</div>}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {simulationType === 'gazebo' && (
        <div className={styles.infoBox}>
          <strong>Tip:</strong> Gazebo simulation requires proper URDF/SDF configuration and physics parameters.
        </div>
      )}

      {simulationType === 'unity' && (
        <div className={styles.infoBox}>
          <strong>Tip:</strong> Unity integration requires ROS TCP Connector for real-time communication.
        </div>
      )}

      {simulationType === 'ros' && (
        <div className={styles.infoBox}>
          <strong>Tip:</strong> ROS nodes should be properly configured for simulation-specific parameters.
        </div>
      )}
    </div>
  );
};

export default SimulationExample;