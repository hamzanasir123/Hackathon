import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './ChapterLayout.module.css';

/**
 * ChapterLayout Component
 * Provides a consistent layout for educational chapter pages
 */
const ChapterLayout = ({
  children,
  title,
  description,
  learningObjectives = [],
  relatedConcepts = [],
  nextChapter = null,
  prevChapter = null
}) => {
  return (
    <Layout title={title} description={description}>
      <div className={clsx('container', 'margin-vert--lg')}>
        <div className="row">
          {/* Main content column */}
          <div className="col col--8">
            <header>
              <h1 className={styles.title}>{title}</h1>
              {description && (
                <p className={styles.description}>{description}</p>
              )}
            </header>

            <div className={styles.content}>
              {children}
            </div>

            {/* Navigation between chapters */}
            <div className={styles.navigation}>
              {prevChapter && (
                <a href={prevChapter.url} className={styles.navLink}>
                  ← {prevChapter.title}
                </a>
              )}

              {nextChapter && (
                <a href={nextChapter.url} className={clsx(styles.navLink, styles.navLinkNext)}>
                  {nextChapter.title} →
                </a>
              )}
            </div>
          </div>

          {/* Sidebar with learning objectives and related concepts */}
          <div className="col col--4">
            <div className={styles.sidebar}>
              {learningObjectives && learningObjectives.length > 0 && (
                <div className={styles.sidebarSection}>
                  <h3>Learning Objectives</h3>
                  <ul className={styles.objectivesList}>
                    {learningObjectives.map((objective, index) => (
                      <li key={index} className={styles.objectiveItem}>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedConcepts && relatedConcepts.length > 0 && (
                <div className={styles.sidebarSection}>
                  <h3>Related Concepts</h3>
                  <ul className={styles.relatedList}>
                    {relatedConcepts.map((concept, index) => (
                      <li key={index} className={styles.relatedItem}>
                        {concept}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.sidebarSection}>
                <h3>Chapter Progress</h3>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
                <p>Continue reading to complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChapterLayout;