import React, { useState } from 'react';
import styles from './CodeExample.module.css';

/**
 * CodeExample Component
 * Displays code with proper syntax highlighting and additional features
 */
const CodeExample = ({
  title = '',
  language = 'python',
  code = '',
  explanation = '',
  showLineNumbers = false,
  highlightLines = [],
  executable = false,
  executionOutput = ''
}) => {
  const [copied, setCopied] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [output, setOutput] = useState(executionOutput);

  // Function to copy code to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  // Function to execute code (simulated)
  const executeCode = async () => {
    if (!executable) return;

    setIsExecuting(true);
    // Simulate execution delay
    setTimeout(() => {
      setIsExecuting(false);
      setOutput(`Code executed successfully!\n${executionOutput || 'Sample output...'}`);
    }, 1000);
  };

  // Enhanced syntax highlighting for Python and XML
  const highlightSyntax = (code, lang) => {
    if (lang === 'python') {
      // Python keywords for highlighting
      const pythonKeywords = [
        'def', 'class', 'import', 'from', 'as', 'if', 'else', 'elif', 'for', 'while',
        'return', 'try', 'except', 'finally', 'with', 'pass', 'break', 'continue',
        'in', 'is', 'not', 'and', 'or', 'True', 'False', 'None', 'self', 'lambda'
      ];

      let highlightedCode = code;
      pythonKeywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        highlightedCode = highlightedCode.replace(regex, `<span class="token keyword">${keyword}</span>`);
      });

      // Highlight strings
      highlightedCode = highlightedCode.replace(/("[^"]*")|('[^']*')/g, '<span class="token string">$1</span>');

      // Highlight numbers
      highlightedCode = highlightedCode.replace(/\b(\d+)\b/g, '<span class="token number">$1</span>');

      // Highlight comments
      highlightedCode = highlightedCode.replace(/(#.*)/g, '<span class="token comment">$1</span>');

      return highlightedCode;
    } else if (lang === 'xml') {
      // Highlight XML tags
      let highlightedCode = code.replace(/(&lt;\/?[^&gt;]+&gt;)/g, '<span class="token tag">$1</span>');

      // Highlight attributes
      highlightedCode = highlightedCode.replace(/(\w+)=/g, '<span class="token attr-name">$1</span>=');

      // Highlight attribute values
      highlightedCode = highlightedCode.replace(/=(".*?"|'.*?')/g, '=<span class="token attr-value">$1</span>');

      return highlightedCode;
    }

    return code;
  };

  // Process code with line numbers and highlights if needed
  const processCode = () => {
    const codeLines = code.split('\n');
    return codeLines.map((line, index) => {
      const lineNumber = index + 1;
      const isHighlighted = highlightLines.includes(lineNumber);
      const lineClass = `${styles.codeLine} ${isHighlighted ? styles.highlightedLine : ''}`;

      // Apply syntax highlighting to the line
      const highlightedLine = highlightSyntax(line, language);

      return (
        <div key={index} className={lineClass} dangerouslySetInnerHTML={{__html:
          `${showLineNumbers ? `<span class="${styles.lineNumber}">${lineNumber}</span>` : ''}
          <span class="${styles.lineContent}">${highlightedLine}</span>`
        }}>
        </div>
      );
    });
  };

  // Determine language class for syntax highlighting
  const languageClass = `language-${language}`;

  return (
    <div className={styles.container}>
      {title && <h3 className={styles.title}>{title}</h3>}

      <div className={styles.codeContainer}>
        <div className={styles.toolbar}>
          <span className={styles.language}>{language}</span>
          <div className={styles.actions}>
            <button
              className={styles.copyButton}
              onClick={copyToClipboard}
              title="Copy to clipboard"
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
            {executable && (
              <button
                className={styles.executeButton}
                onClick={executeCode}
                disabled={isExecuting}
              >
                {isExecuting ? 'Executing...' : 'Execute'}
              </button>
            )}
          </div>
        </div>

        <pre className={`${styles.codeBlock} ${languageClass}`}>
          <code dangerouslySetInnerHTML={{__html:
            showLineNumbers || highlightLines.length > 0
              ? processCode().map(el => el.props.dangerouslySetInnerHTML.__html).join('\n')
              : highlightSyntax(code, language)
          }}>
          </code>
        </pre>
      </div>

      {explanation && (
        <div className={styles.explanation}>
          <h4>Explanation:</h4>
          <p>{explanation}</p>
        </div>
      )}

      {executable && output && (
        <div className={styles.output}>
          <h4>Output:</h4>
          <pre className={styles.outputContent}>{output}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeExample;