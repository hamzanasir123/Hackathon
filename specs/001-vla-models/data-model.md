# Data Model: Module 4 - Vision-Language-Action (VLA)

## Overview

This document defines the data models for the educational content structure of Module 4, focusing on Vision-Language-Action models, speech recognition, and LLM integration for humanoid robotics education.

## Educational Content Entities

### Module
- **name**: string (e.g., "Module 4: Vision-Language-Action")
- **title**: string (e.g., "Vision-Language-Action (VLA)")
- **description**: string (overview of module focus)
- **target_audience**: string (AI and robotics students with ROS 2/Isaac knowledge)
- **learning_objectives**: array of strings (what students will learn)
- **prerequisites**: array of strings (required prior knowledge)
- **chapters**: array of Chapter references
- **examples**: array of Example references
- **total_word_count**: integer (6500-8500 range)

### Chapter
- **title**: string (e.g., "Voice-to-Action – Speech Recognition and Natural Language Command Processing")
- **slug**: string (URL-friendly identifier)
- **learning_objectives**: array of strings (specific objectives for this chapter)
- **content_sections**: array of ContentSection references
- **code_examples**: array of CodeExample references
- **diagrams**: array of Diagram references
- **word_count**: integer (portion of total module count)
- **position**: integer (chapter order in module)

### ContentSection
- **title**: string (section heading)
- **content_type**: enum ("text", "tutorial", "example", "concept", "comparison", "troubleshooting")
- **content**: string (markdown content)
- **learning_outcome**: string (what student learns from this section)
- **difficulty_level**: enum ("beginner", "intermediate", "advanced")
- **estimated_time**: integer (minutes to complete)

### CodeExample
- **title**: string (descriptive title)
- **description**: string (what the example demonstrates)
- **language**: string (python, yaml, xml, usd, bash, etc.)
- **code**: string (actual code content)
- **file_type**: enum ("launch", "config", "python", "yaml", "xml", "usd", "bash")
- **purpose**: string (what the code accomplishes)
- **related_concepts**: array of strings (concepts demonstrated)
- **execution_notes**: string (how to run/test the example)

### Diagram
- **title**: string (diagram description)
- **type**: enum ("architecture", "workflow", "pipeline", "comparison", "process")
- **description**: string (text description of the diagram)
- **elements**: array of strings (components shown in diagram)
- **relationships**: array of strings (connections between elements)
- **use_case**: string (when/why this diagram is relevant)

### Example
- **title**: string (example name)
- **complexity_level**: enum ("basic", "intermediate", "advanced", "expert")
- **description**: string (what the example demonstrates)
- **files**: array of strings (file paths for the example)
- **dependencies**: array of strings (prerequisites)
- **expected_outcome**: string (what should happen when running)
- **troubleshooting_notes**: string (common issues and solutions)
- **position**: integer (order in progression: 1-4)

## VLA-Specific Entities

### VoiceCommand
- **transcription**: string (text representation of spoken command)
- **confidence**: float (confidence score from speech recognition)
- **timestamp**: string (when command was received)
- **raw_audio**: string (path to audio file if needed for debugging)
- **preprocessing_status**: enum ("success", "failed", "partial")
- **command_type**: enum ("navigation", "manipulation", "perception", "query", "control")

### ActionSequence
- **actions**: array of Action references (ordered list of robot actions)
- **dependencies**: array of ActionDependency references (action execution order)
- **success_criteria**: array of strings (conditions for successful completion)
- **fallback_actions**: array of Action references (actions to try if primary fails)
- **estimated_duration**: integer (expected time to complete sequence in seconds)

### Action
- **action_type**: enum ("move_base", "manipulate", "perceive", "navigate", "gripper_control")
- **parameters**: object (specific parameters for the action)
- **timeout**: integer (seconds before action is considered failed)
- **retry_count**: integer (number of times to retry if failed)
- **success_threshold**: float (confidence required for success)

### ActionDependency
- **action_id**: string (identifier of dependent action)
- **dependency_type**: enum ("sequential", "parallel", "conditional", "alternative")
- **condition**: string (condition that must be met)

### VLAInput
- **image_data**: string (path to image or camera stream)
- **text_command**: string (natural language command)
- **preprocessing_status**: enum ("success", "failed", "partial")
- **modality_confidence**: object (confidence scores for each modality)
- **timestamp**: string (when input was captured)

### RobotControlOutput
- **control_commands**: array of string (low-level control commands)
- **confidence**: float (confidence in the action sequence)
- **execution_plan**: array of string (sequence of planned actions)
- **estimated_time**: integer (time to execute in seconds)
- **safety_checks**: array of string (safety validations performed)

## LLM Integration Entities

### LLMRequest
- **prompt**: string (input prompt to the LLM)
- **model**: string (LLM model identifier)
- **parameters**: object (model-specific parameters like temperature, max_tokens)
- **timestamp**: string (when request was made)

### LLMResponse
- **response**: string (LLM output)
- **confidence**: float (confidence in the response)
- **parsed_actions**: array of Action references (actions extracted from response)
- **execution_context**: object (context for action execution)
- **timestamp**: string (when response was received)

### PromptTemplate
- **name**: string (template identifier)
- **template**: string (template with placeholders)
- **use_case**: enum ("task_decomposition", "command_parsing", "planning", "reasoning")
- **variables**: array of string (template variables)

## Educational Component Entities

### ConceptExplainer
- **concept**: string (name of concept being explained)
- **analogy**: string (real-world comparison)
- **description**: string (detailed explanation)
- **examples**: array of strings (specific examples)
- **related_concepts**: array of strings (connected concepts)
- **visual_representation**: string (text description of diagram)

### ArchitectureDiagram
- **title**: string (diagram title)
- **variant**: enum ("basic", "advanced", "communication", "components")
- **description**: string (what the diagram shows)
- **elements**: array of objects (diagram components with labels and types)
- **connections**: array of objects (relationships between elements)
- **highlighted_elements**: array of strings (elements to highlight)

### SimulationExample
- **title**: string (example title)
- **description**: string (what this simulation demonstrates)
- **code**: string (configuration code)
- **language**: string (xml, python, yaml, etc.)
- **simulation_type**: enum ("gazebo", "isaac_sim", "unity", "ros")
- **controls_enabled**: boolean (whether run/copy buttons shown)
- **preview_enabled**: boolean (whether simulation preview shown)

## ROS 2 Message Entities

### AudioMessage
- **audio_data**: array of integers (raw audio samples)
- **sample_rate**: integer (sampling rate in Hz)
- **channels**: integer (number of audio channels)
- **encoding**: string (audio encoding format)
- **header**: object (ROS message header with timestamp and frame_id)

### VLATask
- **command**: string (natural language command)
- **image**: string (image data reference)
- **task_type**: enum ("navigation", "manipulation", "perception")
- **priority**: integer (execution priority)
- **deadline**: string (when task should be completed)

### VLAActionResult
- **actions**: array of string (generated robot actions)
- **confidence**: float (confidence in action sequence)
- **status**: enum ("success", "partial", "failed")
- **feedback**: string (additional information or error messages)

## Relationships

### Module contains:
- 3 Chapters (Chapter 1, Chapter 2, Chapter 3)
- 4 Examples (progressively complex)

### Chapter contains:
- Multiple ContentSections
- Multiple CodeExamples
- Multiple Diagrams

### ContentSection may reference:
- Multiple CodeExamples
- Multiple Diagrams
- Related ConceptExplainers

### Example contains:
- Multiple VLAInput configurations
- Multiple ActionSequence definitions
- Multiple CodeExamples

## Validation Rules

### Module Validation:
- Must have exactly 3 chapters
- Total word count must be between 6500-8500
- Must include all 4 progressively complex examples
- All learning objectives must be achievable

### Chapter Validation:
- Must have clear learning objectives
- Content sections must align with objectives
- Must include 6+ code examples
- Word count should be balanced across chapters

### Example Validation:
- Must follow progression: voice command echo → LLM task decomposition → perception-integrated planning → VLA inference
- Each example must build on previous ones
- Must be runnable and demonstrate specific concepts
- Must include troubleshooting guidance

### CodeExample Validation:
- Code must be syntactically correct
- Must include proper documentation
- Should demonstrate specific VLA platform features
- Must align with current VLA model standards

### VoiceCommand Validation:
- Must have valid transcription
- Confidence score must be between 0 and 1
- Command type must be recognized
- Must be processable by downstream systems

### ActionSequence Validation:
- Actions must form a valid sequence
- Dependencies must be resolvable
- Estimated duration must be reasonable
- Success criteria must be verifiable

## State Transitions (for implementation tracking)

### Content Creation States:
- "planned" → "drafted" → "reviewed" → "finalized"
- "not_started" → "in_progress" → "completed" → "verified"

### Example Implementation States:
- "conceptualized" → "designed" → "coded" → "tested" → "documented"

### VLA Model Execution States:
- "pending" → "preprocessing" → "inference" → "action_generation" → "execution" → "completed/failed"