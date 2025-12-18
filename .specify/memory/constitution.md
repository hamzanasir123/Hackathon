<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.1.0
- Modified principles:
  - PRINCIPLE_1_NAME: Placeholder → Spec-driven development as first-class artifact
  - PRINCIPLE_2_NAME: Placeholder → Strict adherence to Spec-Kit Plus workflow
  - PRINCIPLE_3_NAME: Placeholder → Reproducibility through traceable specifications
  - PRINCIPLE_4_NAME: Placeholder → High-quality, consistent output leveraging AI agent capabilities
  - PRINCIPLE_5_NAME: Placeholder → Clarity and accessibility for technical audience
  - PRINCIPLE_6_NAME: Placeholder → Human-in-the-loop validation and verification
- Added sections: Key Standards, Development Workflow, Success Criteria
- Removed sections: None
- Templates requiring updates:
  - .specify/templates/plan-template.md ✅ updated
  - .specify/templates/spec-template.md ✅ updated
  - .specify/templates/tasks-template.md ✅ updated
  - .specify/templates/phr-template.prompt.md ✅ updated
  - .specify/templates/commands/sp.constitution.md ✅ updated
- Follow-up TODOs: None
-->

# AI/Spec-Driven Book Creation Hackathon Constitution

## Core Principles

### I. Spec-driven development as first-class artifact
Spec-driven development is the foundation of all work. Every feature, change, and addition must begin with a clear, well-defined specification before implementation. Specifications serve as the authoritative source of truth and must be complete, testable, and agreed upon before any code is written.

### II. Strict adherence to Spec-Kit Plus workflow
All development follows the Spec-Kit Plus process: /sp.specify → /sp.plan → /sp.tasks → /sp.implement. This ensures systematic, reproducible development with traceable artifacts at each stage. Deviations from this workflow require explicit justification and approval.

### III. Reproducibility through traceable specifications, plans, tasks, and implementations
Every step of the development process must be traceable and reproducible. Specifications link to plans, plans link to tasks, and tasks link back to implementations. This creates a complete audit trail enabling verification, debugging, and future maintenance.

### IV. High-quality, consistent output leveraging AI agent capabilities
AI agents (primarily Claude Code) are leveraged to produce high-quality, consistent output. The focus is on maximizing the effectiveness of AI assistance while maintaining human oversight and quality control. AI-generated code must meet the same standards as human-written code.

### V. Clarity and accessibility for technical audience
All documentation, code, and deliverables must be clear and accessible to a technical audience interested in AI/agentic systems. This includes proper formatting, clear explanations, code examples, and step-by-step instructions where appropriate.

### VI. Human-in-the-loop validation and verification
Human judgment remains essential in the development process. Critical decisions, quality validation, and creative direction are validated by humans. AI serves as a tool to accelerate development, not replace human oversight and creativity.

## Key Standards

All content generation must follow the Spec-Kit Plus process: /sp.specify → /sp.plan → /sp.tasks → /sp.implement. Use Docusaurus for site structure, markdown for content, and proper configuration for GitHub Pages deployment. Writing style must be clear, professional, technical where appropriate, with code examples, diagrams (via Mermaid), and step-by-step explanations. Maintain uniform voice, formatting, headings, and terminology across all chapters/sections. Primary tool is Claude Code with preference for spec-driven commands. All changes must be committed with meaningful messages and GitHub Pages deployment verified live.

## Development Workflow

Technology stack includes Docusaurus v3+, React/MDX, Spec-Kit Plus templates, and GitHub repository with Pages enabled. Book structure must include minimum outline with introduction, core chapters, conclusion, and optional appendices (e.g., references, glossary). Deployment must be fully functional site live on GitHub Pages with no broken links, proper navigation, and responsive design. No external paid services beyond allowed AI APIs (Claude, Qwen, Gemini via CCR if configured). Prioritize completeness and deployability over exhaustive depth within hackathon timebox.

## Governance

This constitution supersedes all other development practices. Amendments require explicit documentation, approval from project stakeholders, and a migration plan for existing artifacts. All implementations must verify compliance with these principles. All code reviews must check for adherence to spec-driven development practices. Use CLAUDE.md for runtime development guidance and standards.

**Version**: 1.1.0 | **Ratified**: 2025-12-18 | **Last Amended**: 2025-12-18
