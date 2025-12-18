# Research: Docusaurus Book Layout

## Decision: Docusaurus Version and Setup
**Rationale**: Using Docusaurus v3+ as specified in constraints, with classic preset for documentation site
**Alternatives considered**: Docusaurus v2 (older), custom React site (more complex), other static site generators (less suitable for documentation)

## Decision: Testing Framework
**Rationale**: Using Jest for unit tests and minimal E2E testing since Docusaurus is primarily a static site generator with limited interactive components
**Alternatives considered**: Cypress (overkill for static content), no testing (violates quality standards), React Testing Library (for React components)

## Decision: GitHub Pages Deployment Strategy
**Rationale**: Using GitHub Actions workflow for automated deployment as it's the standard approach for GitHub Pages with repositories
**Alternatives considered**: Manual deployment (not scalable), third-party hosting (violates constraints)

## Decision: Content Format (MDX)
**Rationale**: Using MDX format as specified in constraints, which allows JSX in Markdown for rich content including code blocks, diagrams, and admonitions
**Alternatives considered**: Pure Markdown (less functionality), other formats (not compatible with Docusaurus)

## Decision: Navigation Structure
**Rationale**: Implementing hierarchical sidebar navigation with collapsible categories as specified in requirements (FR-002)
**Alternatives considered**: Flat navigation (less organized), top navigation only (not suitable for documentation structure)

## Decision: Theme and Styling
**Rationale**: Using Docusaurus default theme with custom CSS for branding and implementing dark mode as specified in requirements (FR-005)
**Alternatives considered**: Custom theme from scratch (more complex), third-party themes (less control over branding)