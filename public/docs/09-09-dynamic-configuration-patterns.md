# Dynamic Configuration Patterns

## Conditional Tool Groups
```yaml
# Different tools based on project type
groups:
  - read
  - edit
  # Add browser for frontend projects
  - browser  # Only if package.json contains React/Vue/Angular
  # Add command for backend projects
  - command  # Only if requirements.txt or Dockerfile exists
```

## Template-Based Modes
```yaml
# Template for creating specialized modes
- slug: template-specialist
  name: 🎯 {SPECIALTY} Specialist
  description: Specialized mode for {DOMAIN} development
  roleDefinition: |
    You are a {SPECIALTY} specialist with deep expertise in:
    - {SKILL_1}
    - {SKILL_2}
    - {SKILL_3}
  groups:
    - read
    - - edit
      - fileRegex: {FILE_PATTERN}
        description: {DESCRIPTION}
```