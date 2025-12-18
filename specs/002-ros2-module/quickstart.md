# Quickstart Guide: Module 1 - The Robotic Nervous System (ROS 2)

## Overview
This module introduces ROS 2 as the middleware for robot control, covering core components like nodes, topics, services, and actions. You'll learn to bridge Python agents to ROS controllers using rclpy and understand URDF for describing humanoid robots.

## Prerequisites
- ROS 2 Humble Hawksbill (or Iron Irwini) installed
- Python 3.8+ with pip
- Basic Python programming knowledge
- Understanding of basic AI concepts

## Getting Started

### 1. Environment Setup
```bash
# Verify ROS 2 installation
source /opt/ros/humble/setup.bash  # or iron
ros2 --version

# Create a workspace for examples
mkdir -p ~/ros2_examples_ws/src
cd ~/ros2_examples_ws
colcon build
source install/setup.bash
```

### 2. Chapter 1: Foundations of ROS 2
Navigate to the documentation:
- Read about ROS 2 architecture, nodes, topics, and messages
- Understand the publish-subscribe communication pattern
- Learn about parameters and launch files

### 3. Chapter 2: Building ROS 2 Nodes in Python
Try the hands-on examples:
```bash
# Clone the example packages
cd ~/ros2_examples_ws/src
git clone https://github.com/your-repo/ros2_examples.git

# Build the packages
cd ~/ros2_examples_ws
colcon build --packages-select publisher_subscriber_example service_example action_example
source install/setup.bash

# Run a simple publisher-subscriber example
ros2 run publisher_subscriber_example talker
# In another terminal:
ros2 run publisher_subscriber_example listener
```

### 4. Chapter 3: Describing Robots with URDF
- Learn URDF structure, links, and joints
- Examine the provided humanoid robot example
- Practice creating simple URDF files

## Key Concepts You'll Learn
1. **Nodes**: Individual ROS programs that communicate with each other
2. **Topics**: Named buses over which nodes exchange messages
3. **Messages**: Data packets sent between nodes via topics
4. **Services**: Synchronous request/response communication
5. **Actions**: Asynchronous goal/reward/cancel communication
6. **Launch files**: XML files to start multiple nodes at once
7. **URDF**: Unified Robot Description Format for robot modeling

## Example Code Structure
Each example follows this pattern:
```
package_name/
├── package.xml          # Package metadata
├── setup.py             # Python setup
├── setup.cfg            # Installation instructions
├── resource/            # Package resource files
└── ros2_package_name/   # Python module
    ├── __init__.py
    ├── publisher_node.py
    ├── subscriber_node.py
    └── msg/             # Custom message definitions
```

## Testing Your Knowledge
After each chapter, verify your understanding:
- Can you create a simple publisher and subscriber?
- Can you launch multiple nodes with a launch file?
- Can you create a basic URDF file for a simple robot?

## Next Steps
After completing this module, you'll be ready for Module 2: The Digital Twin (Gazebo & Unity) where you'll learn to simulate these ROS 2 systems.