# Quickstart: Docusaurus Book Layout

## Prerequisites
- Node.js (v18.0 or higher)
- npm or yarn package manager
- Git

## Setup Instructions

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

## Directory Structure
- `docs/` - Place all course content here in the specified module directories
- `src/pages/` - Custom pages like homepage, about, etc.
- `static/` - Static assets like images, PDFs, etc.
- `sidebars.js` - Navigation sidebar configuration
- `docusaurus.config.js` - Site configuration

## Adding New Content
1. Create new MDX files in the appropriate module directory under `docs/`
2. Update `sidebars.js` to include the new content in the navigation
3. Add appropriate frontmatter to the MDX file with metadata

Example MDX file frontmatter:
```md
---
title: Chapter Title
sidebar_label: Chapter Title
sidebar_position: 1
description: Brief description of the chapter
---
```

## Customization
- Site configuration: Edit `docusaurus.config.js`
- Navigation: Edit `sidebars.js`
- Styling: Add custom CSS in `src/css/custom.css`
- Components: Add reusable components in `src/components/`