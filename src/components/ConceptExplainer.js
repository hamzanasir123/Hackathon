import React from 'react';
import styles from './ConceptExplainer.module.css';

/**
 * ConceptExplainer Component
 * Presents concepts with real-world analogies and examples
 */
const ConceptExplainer = ({
  title = '',
  concept = '',
  analogy = '',
  diagramType = '',
  examples = [],
  relatedConcepts = []
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.conceptSection}>
          <h4>Concept:</h4>
          <p>{concept}</p>
        </div>

        {analogy && (
          <div className={styles.analogySection}>
            <h4>Real-World Analogy:</h4>
            <p>{analogy}</p>
          </div>
        )}

        {examples.length > 0 && (
          <div className={styles.examplesSection}>
            <h4>Examples:</h4>
            <ul>
              {examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>
          </div>
        )}

        {relatedConcepts && relatedConcepts.length > 0 && (
          <div className={styles.relatedSection}>
            <h4>Related Concepts:</h4>
            <ul>
              {relatedConcepts.map((related, index) => (
                <li key={index}>{related}</li>
              ))}
            </ul>
          </div>
        )}

        {diagramType && (
          <div className={styles.diagramSection}>
            <h4>Diagram:</h4>
            <div className={styles.diagramPlaceholder}>
              {/* In a real implementation, this would render a diagram based on diagramType */}
              <p>Diagram: {diagramType}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConceptExplainer;