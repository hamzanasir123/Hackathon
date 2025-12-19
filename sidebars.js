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
        'module-1-robotic-nervous-system/foundations-of-ros2-architecture',
        'module-1-robotic-nervous-system/building-ros2-nodes-python',
        'module-1-robotic-nervous-system/creating-publishers-subscribers',
        'module-1-robotic-nervous-system/implementing-services-actions',
        'module-1-robotic-nervous-system/package-building-tutorial',
        'module-1-robotic-nervous-system/describing-humanoid-robots-with-urdf',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      collapsed: false,
      items: [
        'module-2-digital-twin/index',
        'module-2-digital-twin/introduction-to-digital-twins',
        'module-2-digital-twin/mastering-gazebo-simulation',
        'module-2-digital-twin/unity-integration',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      collapsed: false,
      items: [
        'module-3-ai-robot-brain/index',
        'module-3-ai-robot-brain/overview-of-nvidia-isaac',
        'module-3-ai-robot-brain/advanced-perception',
        'module-3-ai-robot-brain/navigation-path-planning',
        {
          type: 'category',
          label: 'Isaac Sim Examples',
          items: [
            'module-3-ai-robot-brain/examples/basic-asset-loading',
            'module-3-ai-robot-brain/examples/sensor-equipped-humanoid',
            'module-3-ai-robot-brain/examples/perception-pipeline',
            'module-3-ai-robot-brain/examples/full-navigation-stack',
          ]
        },
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