import React from 'react';
import styles from './RosPackageExample.module.css';

/**
 * RosPackageExample Component
 * Displays ROS 2 package structure and files with download functionality
 */
const RosPackageExample = ({
  packageName = '',
  description = '',
  files = [],
  runInstructions = '',
  expectedOutput = '',
  rosDistribution = 'humble'
}) => {
  // Function to download the package
  const downloadPackage = async () => {
    try {
      // In a real implementation, this would create and download a ZIP file
      // For now, we'll just log the action
      console.log(`Downloading package: ${packageName}`);

      // Create a blob with package information
      const packageInfo = {
        packageName,
        description,
        files,
        runInstructions,
        expectedOutput,
        rosDistribution
      };

      const blob = new Blob([JSON.stringify(packageInfo, null, 2)], {
        type: 'application/json'
      });

      // Create download link
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${packageName}_package.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to download package: ', err);
    }
  };

  // Get run instructions based on ROS distribution
  const getRunInstructions = () => {
    if (runInstructions) return runInstructions;

    // Default instructions based on package type
    return `# To run this package for ${rosDistribution}:\n# ros2 run ${packageName} <executable>`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.packageName}>{packageName}</h3>
        <button className={styles.downloadButton} onClick={downloadPackage}>
          Download Package
        </button>
      </div>

      {description && (
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      )}

      <div className={styles.packageInfo}>
        <h4>ROS Distribution: {rosDistribution}</h4>
      </div>

      {files.length > 0 && (
        <div className={styles.filesSection}>
          <h4>Package Files:</h4>
          <div className={styles.fileList}>
            {files.map((file, index) => (
              <div key={index} className={styles.fileItem}>
                <div className={styles.filePath}>{file.path}</div>
                <div className={styles.fileContent}>
                  <pre>
                    <code>{file.content}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {getRunInstructions() && (
        <div className={styles.instructionsSection}>
          <h4>Run Instructions:</h4>
          <pre className={styles.instructions}>
            {getRunInstructions()}
          </pre>
        </div>
      )}

      {expectedOutput && (
        <div className={styles.outputSection}>
          <h4>Expected Output:</h4>
          <pre className={styles.expectedOutput}>
            {expectedOutput}
          </pre>
        </div>
      )}
    </div>
  );
};

export default RosPackageExample;