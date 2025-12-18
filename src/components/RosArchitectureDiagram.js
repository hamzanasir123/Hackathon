import React, { useState } from 'react';
import styles from './RosArchitectureDiagram.module.css';

/**
 * RosArchitectureDiagram Component
 * Renders ROS 2 architecture diagrams based on the specified variant
 */
const RosArchitectureDiagram = ({ variant = 'basic', showLegend = true, highlightedElements = [], onElementClick = null }) => {
  const [hoveredElement, setHoveredElement] = useState(null);

  // Define the different variants of the diagram
  const diagramVariants = {
    basic: {
      title: "Basic ROS 2 Architecture",
      elements: [
        { id: 'node1', type: 'node', label: 'Node 1', x: 100, y: 100 },
        { id: 'node2', type: 'node', label: 'Node 2', x: 300, y: 100 },
        { id: 'topic', type: 'topic', label: 'Topic', x: 200, y: 200 },
        { id: 'message', type: 'message', label: 'Message', x: 200, y: 300 }
      ],
      connections: [
        { from: 'node1', to: 'topic', type: 'publisher' },
        { from: 'topic', to: 'node2', type: 'subscriber' }
      ]
    },
    advanced: {
      title: "Advanced ROS 2 Architecture",
      elements: [
        { id: 'node1', type: 'node', label: 'Publisher Node', x: 50, y: 100 },
        { id: 'node2', type: 'node', label: 'Subscriber Node', x: 350, y: 100 },
        { id: 'node3', type: 'node', label: 'Service Server', x: 50, y: 250 },
        { id: 'node4', type: 'node', label: 'Service Client', x: 350, y: 250 },
        { id: 'topic', type: 'topic', label: 'Topic', x: 200, y: 80 },
        { id: 'service', type: 'service', label: 'Service', x: 200, y: 250 },
        { id: 'rmw', type: 'rmw', label: 'RMW', x: 200, y: 180 },
        { id: 'dds', type: 'dds', label: 'DDS', x: 200, y: 320 }
      ],
      connections: [
        { from: 'node1', to: 'topic', type: 'publisher' },
        { from: 'topic', to: 'node2', type: 'subscriber' },
        { from: 'node3', to: 'service', type: 'server' },
        { from: 'node4', to: 'service', type: 'client' },
        { from: 'rmw', to: 'dds', type: 'implementation' }
      ]
    },
    communication: {
      title: "Communication Patterns",
      elements: [
        { id: 'publisher', type: 'node', label: 'Publisher', x: 100, y: 100 },
        { id: 'subscriber', type: 'node', label: 'Subscriber', x: 300, y: 100 },
        { id: 'service_client', type: 'node', label: 'Service Client', x: 100, y: 250 },
        { id: 'service_server', type: 'node', label: 'Service Server', x: 300, y: 250 },
        { id: 'action_client', type: 'node', label: 'Action Client', x: 100, y: 400 },
        { id: 'action_server', type: 'node', label: 'Action Server', x: 300, y: 400 },
        { id: 'topic', type: 'topic', label: 'Topic', x: 200, y: 80 },
        { id: 'service', type: 'service', label: 'Service', x: 200, y: 250 },
        { id: 'action', type: 'action', label: 'Action', x: 200, y: 400 }
      ],
      connections: [
        { from: 'publisher', to: 'topic', type: 'publishes' },
        { from: 'topic', to: 'subscriber', type: 'subscribes' },
        { from: 'service_client', to: 'service', type: 'requests' },
        { from: 'service', to: 'service_server', type: 'serves' },
        { from: 'action_client', to: 'action', type: 'controls' },
        { from: 'action', to: 'action_server', type: 'executes' }
      ]
    },
    components: {
      title: "ROS 2 Components",
      elements: [
        { id: 'node', type: 'node', label: 'Node', x: 100, y: 100 },
        { id: 'parameter', type: 'parameter', label: 'Parameter', x: 300, y: 100 },
        { id: 'launch', type: 'launch', label: 'Launch File', x: 100, y: 250 },
        { id: 'package', type: 'package', label: 'Package', x: 300, y: 250 },
        { id: 'workspace', type: 'workspace', label: 'Workspace', x: 200, y: 400 }
      ],
      connections: [
        { from: 'node', to: 'parameter', type: 'uses' },
        { from: 'launch', to: 'node', type: 'launches' },
        { from: 'package', to: 'node', type: 'contains' },
        { from: 'workspace', to: 'package', type: 'contains' }
      ]
    }
  };

  const currentVariant = diagramVariants[variant] || diagramVariants.basic;
  const elements = currentVariant.elements;
  const connections = currentVariant.connections;

  // Determine CSS class for elements based on highlight state
  const getElementClass = (elementId) => {
    let classes = [styles.element, styles[element.type]];

    if (highlightedElements.includes(elementId)) {
      classes.push(styles.highlighted);
    }
    if (hoveredElement === elementId) {
      classes.push(styles.hovered);
    }

    return classes.join(' ');
  };

  // Render the diagram
  return (
    <div className={styles.container}>
      <h3>{currentVariant.title}</h3>
      <div className={styles.diagram}>
        {/* Render connections first so they appear behind elements */}
        {connections.map((conn, index) => (
          <div key={`conn-${index}`} className={styles.connection}>
            {/* Simple line representation - in a real implementation, this would be an SVG line */}
            <div className={styles.connectionLine}>
              {conn.type}
            </div>
          </div>
        ))}

        {/* Render elements */}
        {elements.map((element) => (
          <div
            key={element.id}
            className={getElementClass(element.id)}
            style={{ left: element.x, top: element.y }}
            onClick={() => onElementClick && onElementClick(element.id)}
            onMouseEnter={() => setHoveredElement(element.id)}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <div className={styles.elementLabel}>{element.label}</div>
          </div>
        ))}
      </div>

      {/* Legend */}
      {showLegend && (
        <div className={styles.legend}>
          <h4>Legend</h4>
          <div className={styles.legendItem}>
            <div className={`${styles.element} ${styles.node}`}></div>
            <span>Node</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.element} ${styles.topic}`}></div>
            <span>Topic</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.element} ${styles.service}`}></div>
            <span>Service</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.element} ${styles.action}`}></div>
            <span>Action</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RosArchitectureDiagram;