# Physical AI & Humanoid Robotics Course

This repository contains the course materials for "Physical AI & Humanoid Robotics: Bridging Digital Intelligence and Physical Embodiment".

## About

This comprehensive course explores the fascinating intersection of artificial intelligence and robotics, focusing on humanoid robots that bridge digital intelligence and physical embodiment. The course is structured into 4 core modules:

1. **Module 1**: The Robotic Nervous System (ROS 2)
2. **Module 2**: The Digital Twin (Gazebo & Unity)
3. **Module 3**: The AI-Robot Brain (NVIDIA Isaac™)
4. **Module 4**: Vision-Language-Action (VLA)

## Prerequisites

- Basic programming knowledge (Python recommended)
- Understanding of linear algebra and calculus fundamentals
- Familiarity with robotics concepts (helpful but not required)

## Technology Stack

- [Docusaurus v3](https://docusaurus.io/): Static site generator
- [React](https://reactjs.org/): Component-based UI
- [MDX](https://mdxjs.com/): Markdown with JSX support
- [GitHub Pages](https://pages.github.com/): Hosting

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```
   This command starts a local development server and opens the site in your browser at `http://localhost:3000`.

3. **Build for production**:
   ```bash
   npm run build
   ```
   This command generates static content into the `build` directory and can be served using any static hosting service.

4. **Deploy to GitHub Pages**:
   ```bash
   GIT_USER=<Your GitHub username> npm run deploy
   ```
   This command builds the site and pushes the generated static files to the `gh-pages` branch.

## Course Structure

The course content is organized in the `docs/` directory:

- `docs/intro/` - Course introduction
- `docs/module-1-robotic-nervous-system/` - ROS 2 fundamentals
- `docs/module-2-digital-twin/` - Simulation environments
- `docs/module-3-ai-robot-brain/` - AI frameworks and perception
- `docs/module-4-vision-language-action/` - Advanced VLA systems
- `docs/appendices/` - Supplementary materials

## Contributing

This course is maintained by Panaversity. Contributions and feedback are welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/)
- Course content developed for educational purposes
- Sample robot images and diagrams created for demonstration