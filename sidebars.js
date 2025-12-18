// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Create a sidebar named 'docs'
  docs: [
    'intro/index',
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro/index',
      ],
    },
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      collapsed: false,
      items: [
        'module-1-robotic-nervous-system/index',
        'module-1-robotic-nervous-system/introduction-to-ros2-architecture',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      collapsed: false,
      items: [
        'module-2-digital-twin/index',
        'module-2-digital-twin/gazebo-simulation',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      collapsed: false,
      items: [
        'module-3-ai-robot-brain/index',
        'module-3-ai-robot-brain/perception-systems',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      collapsed: false,
      items: [
        'module-4-vision-language-action/index',
        'module-4-vision-language-action/advanced-vla-applications',
      ],
    },
    {
      type: 'category',
      label: 'Appendices',
      collapsed: true,
      items: [
        'appendices/index',
        'appendices/hardware-specifications',
        'appendices/resources',
        'appendices/glossary',
      ],
    },
  ],
};

module.exports = sidebars;