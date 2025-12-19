import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './ChapterLayout.module.css';

function ChapterHeader({title, description}) {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{description}</p>
      </div>
    </header>
  );
}

function ChapterNavigation({previous, next}) {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.navArrows}>
          {previous && (
            <Link to={previous.path} className={styles.navArrow}>
              ← {previous.title}
            </Link>
          )}
          {next && (
            <Link to={next.path} className={styles.navArrow}>
              {next.title} →
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

function ChapterLayout({children, title, description, previous, next}) {
  return (
    <div className={styles.chapterLayout}>
      <ChapterHeader title={title} description={description} />

      <main className={styles.main}>
        <div className="container">
          {children}
        </div>
      </main>

      <ChapterNavigation previous={previous} next={next} />
    </div>
  );
}

export default ChapterLayout;