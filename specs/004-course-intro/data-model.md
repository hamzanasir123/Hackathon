# Data Model: Course Introduction - Why Physical AI Matters

## Entity Definitions

### CourseIntroduction
**Description**: Represents the comprehensive overview of the Physical AI course including motivation, outcomes, and structure

**Attributes**:
- `id`: Unique identifier for the course introduction
- `title`: "Physical AI & Humanoid Robotics Course Introduction"
- `description`: Compelling explanation of Physical AI importance
- `motivationContent`: Content for "Why Physical AI Matters" section
- `learningOutcomes`: Collection of learning outcome entities
- `weeklySchedule`: Collection of weekly schedule entities
- `wordCount`: Current word count (target: 4500-6000)
- `visualTimelineDescription`: Text description of timeline visualization
- `summaryContent`: Summary connecting all elements to transformative potential

**Relationships**:
- Contains multiple `LearningOutcome` entities
- Contains multiple `WeeklySchedule` entities
- Connected to `ModuleConnection` entities

### LearningOutcome
**Description**: Represents a specific skill or knowledge area that students will gain, including associated tools, techniques, and applications

**Attributes**:
- `id`: Unique identifier for the learning outcome
- `outcomeNumber`: Sequential number (1-6) for the 6 specified outcomes
- `title`: Brief title of the learning outcome
- `description`: Detailed 1-2 paragraph explanation
- `skillsGained`: List of specific skills students will acquire
- `toolsUsed`: List of tools and technologies referenced
- `mindsetShifts`: Description of conceptual changes in thinking
- `connectionToModules`: Mapping to relevant course modules
- `assessmentCriteria`: How the outcome will be assessed

**Relationships**:
- Belongs to one `CourseIntroduction` entity
- Connected to multiple `ModuleConnection` entities

### WeeklySchedule
**Description**: Represents the time-bounded educational plan for each week of the 13-week course, including topics, objectives, and assessments

**Attributes**:
- `id`: Unique identifier for the weekly schedule
- `weekNumber`: Sequential number (1-13) for the 13-week course
- `title`: Brief title of the week's focus
- `topics`: List of specific topics covered
- `objectives`: Learning objectives for the week
- `handsOnElements`: Practical activities and exercises
- `moduleConnections`: Mapping to core modules (ROS 2, Simulation, AI-Brain, VLA)
- `capstoneConnections`: How content connects to capstone project
- `assessments`: High-level assessment connections
- `prerequisites`: Required knowledge or skills from previous weeks

**Relationships**:
- Belongs to one `CourseIntroduction` entity
- Connected to multiple `ModuleConnection` entities

### ModuleConnection
**Description**: Represents the relationship between weekly content and the four core modules (ROS 2, Simulation, AI-Brain, VLA) as well as capstone preparation

**Attributes**:
- `id`: Unique identifier for the module connection
- `weekId`: Reference to the connected WeeklySchedule
- `moduleId`: Reference to the connected module (ROS 2, Simulation, AI-Brain, VLA)
- `connectionType`: Type of connection (introduction, deepening, application, integration)
- `depthLevel`: How deeply the module is covered (basic, intermediate, advanced)
- `practicalApplication`: Description of hands-on elements
- `capstoneRelevance`: How the connection supports capstone preparation

**Relationships**:
- Connected to one `WeeklySchedule` entity
- Connected to one `LearningOutcome` entity (when applicable)
- Connected to course modules (ROS 2, Simulation, AI-Brain, VLA)

## Entity Relationships

```
CourseIntroduction (1)
    ├── contains (1-6) LearningOutcome
    ├── contains (1-13) WeeklySchedule
    └── connects to (*) ModuleConnection

LearningOutcome (1-6)
    └── connects to (*) ModuleConnection

WeeklySchedule (1-13)
    └── connects to (*) ModuleConnection
```

## Data Model Constraints

### CourseIntroduction Constraints
- `wordCount` must be between 4500-6000
- `motivationContent` must include current (2025) industry examples
- `visualTimelineDescription` must provide text-based timeline for AI diagram generation
- Content must be organized into exactly 3 main sections

### LearningOutcome Constraints
- Must have exactly 6 instances (outcomeNumber 1-6)
- `description` must be 1-2 paragraphs per outcome
- `skillsGained` must include specific, measurable skills
- `toolsUsed` must reference actual tools and technologies

### WeeklySchedule Constraints
- Must have exactly 13 instances (weekNumber 1-13)
- `topics` must align with the four core modules
- `handsOnElements` must be included for each week
- `capstoneConnections` must show progression toward capstone

### ModuleConnection Constraints
- Each `WeeklySchedule` must connect to at least one module
- Connections must show clear progression from basic to advanced concepts
- `connectionType` must be one of: introduction, deepening, application, integration

## Implementation Notes

### Content Organization
The data model supports organizing content into the three required sections:
1. Why Physical AI Matters (mapped to CourseIntroduction motivationContent)
2. Learning Outcomes (mapped to LearningOutcome entities)
3. Weekly Breakdown (mapped to WeeklySchedule entities)

### Visual Elements
The model includes provisions for:
- Timeline visualization through visualTimelineDescription
- Module connection diagrams through ModuleConnection relationships
- Assessment connections through assessment-related attributes

### Accessibility and Format Requirements
- All content will be formatted in Markdown
- Tables and lists will be used for readability
- Clear headings and subheadings will be maintained
- Word count will be tracked to meet 4500-6000 range

## Validation Criteria

### Completeness Validation
- All 6 learning outcomes must be defined
- All 13 weeks must be scheduled
- All module connections must be established
- Word count must be within specified range

### Quality Validation
- Content must be inspiring yet realistic about challenges
- Industry examples must be current (2025)
- Connections between modules must be clear
- Learning outcomes must be specific and measurable