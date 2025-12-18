# Data Model: Docusaurus Book Layout

## Course Module
- **name**: string (e.g., "Module 1: The Robotic Nervous System")
- **id**: string (e.g., "module-1-robotic-nervous-system")
- **title**: string (display title)
- **description**: string (brief overview)
- **chapters**: array of Chapter objects
- **order**: integer (sequence in course)

## Chapter
- **name**: string (e.g., "Introduction to ROS 2")
- **id**: string (e.g., "introduction-to-ros-2")
- **title**: string (display title)
- **module_id**: string (reference to parent module)
- **content_path**: string (file path relative to docs/)
- **order**: integer (sequence in module)
- **prerequisites**: array of string (other chapters that should be completed first)

## Appendix
- **name**: string (e.g., "Hardware Specifications")
- **id**: string (e.g., "hardware-specifications")
- **title**: string (display title)
- **content_path**: string (file path relative to docs/appendices/)
- **category**: string (e.g., "resources", "glossary", "specifications")

## Navigation Item
- **type**: string ("category" or "doc")
- **label**: string (display name)
- **link**: object (with "type" and "id" for internal links)
- **items**: array of Navigation Item objects (for nested structure)
- **collapsed**: boolean (whether the category is collapsed by default)

## Site Configuration
- **title**: string ("Physical AI & Humanoid Robotics")
- **tagline**: string ("Bridging Digital Intelligence and Physical Embodiment")
- **url**: string (base URL for deployment)
- **baseUrl**: string (base path for deployment)
- **favicon**: string (path to favicon file)
- **themeConfig**: object (navigation, footer, color mode settings)

## Page Metadata
- **id**: string (unique identifier)
- **title**: string (page title)
- **description**: string (meta description for SEO)
- **sidebar_label**: string (label to show in sidebar)
- **sidebar_position**: integer (position in sidebar ordering)
- **keywords**: array of string (for search optimization)