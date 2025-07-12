# Overview

Custom modes in Roo Code enable you to create specialized AI assistants with tailored capabilities, expertise, and restrictions. They transform the general-purpose AI into domain-specific experts that understand your project's context, follow your team's conventions, and operate within defined boundaries.

## What Are Custom Modes?

Custom modes are configuration profiles that define:

- **Identity & Expertise**: The AI's role, specialization, and knowledge domain through `roleDefinition`
- **Tool Access**: Which operations the mode can perform (read, edit, browse, execute commands, MCP tools)
- **File Restrictions**: Precise control over which files can be accessed or modified using regex patterns
- **Behavioral Guidelines**: Custom instructions for consistent, project-specific behavior
- **Usage Context**: When and how the mode should be applied via `whenToUse` property
- **UI Presentation**: How the mode appears in the selector with `name` and `description`

## How to Create Custom Modes

There are three primary ways to create custom modes:

### 1. Ask Roo Directly
The simplest method - just ask Roo to create a mode for your specific needs:
```
"Create a mode for writing technical documentation that only edits markdown files"
```

### 2. Using the Prompts Tab
- Click the notebook icon to open the Prompts Tab
- Use the settings gear icon to access mode management
- Choose "Edit Global Modes" or "Edit Project Modes"
- Add your mode configuration directly in the UI

### 3. Manual Configuration
Directly edit configuration files:
- **Global modes**: `custom_modes.yaml` (or `custom_modes.json`)
- **Project modes**: `.roomodes` file in your project root

## Key Benefits

- **Specialized Workflows**: Create focused modes for testing, documentation, security audits, code reviews
- **Enhanced Security**: Restrict file access and tool usage to prevent unintended modifications
- **Authoritative Documentation**: Create opinionated documentation that guides users through conceptual understanding
- **Progressive Disclosure**: Gradually reveal complexity through layered documentation structure

:::tip Documentation Authoring Approach
The documentation system follows these core principles:
1. **Concept-First Orientation** - Establish mental models before technical details
2. **Pattern Recognition** - Highlight recurring solutions and anti-patterns
3. **Boundary Definition** - Clarify what falls inside/outside the system's scope
4. **Decision Tracking** - Make intentional omission of features/approaches explicit
:::

- **Consistent Quality**: Ensure AI follows coding standards, style guides, and best practices
- **Team Standardization**: Share modes across teams for consistent development practices
- **Context Switching**: Seamlessly switch between different types of work with appropriate AI assistance
- **Productivity Gains**: Reduce context switching overhead and improve task-specific performance

## Mode Types

- **Global Modes**: Available across all projects, stored in `custom_modes.yaml`
- **Project-Specific Modes**: Tailored to individual projects, stored in `.roomodes` files
- **Override Modes**: Custom versions of built-in modes (Code, Debug, Ask, Architect, Orchestrator)

Custom modes are defined using YAML configuration files that specify the mode's behavior, permissions, and instructions. This documentation provides a complete guide to all available properties and configuration options, including advanced features like **Sticky Models** and best practices for **Team Collaboration**.

## Community Gallery

Ready to explore more? Check out the Custom Modes Gallery section in the main community documentation to discover and share custom modes created by the community!

## Next Steps

- **Ready to Configure?** Review [Configuration Formats](./02-configuration-formats.md)
- **Need Examples?** Check [Example Configurations](./11-examples.md)
- **Working with Teams?** See [Team Collaboration](./13-team-collaboration.md)
- **Import/Export**: Learn about [Import/Export Modes](./10-import-export.md)