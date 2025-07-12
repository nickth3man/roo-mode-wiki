# Core Properties

Every custom mode configuration consists of a `customModes` array containing mode objects with the following structure:

```yaml
customModes:
  - slug: my-mode                    # Required: Unique identifier
    name: My Custom Mode             # Required: Display name
    description: "Brief summary"     # Optional: UI description
    roleDefinition: "..."            # Required: AI role and expertise
    whenToUse: "..."                 # Optional: Usage guidance
    customInstructions: "..."        # Optional: Behavioral guidelines
    groups: ["read", "edit"]         # Required: Available tool groups
```

## Required Properties

- **`slug`**: Unique identifier for the mode
- **`name`**: Display name shown in the UI
- **`roleDefinition`**: Detailed description of the AI's role and expertise
- **`groups`**: Array of tool groups the mode can access

## Optional Properties

- **`description`**: Short summary displayed in the mode selector
- **`whenToUse`**: Guidance for automated mode selection and task orchestration
- **`customInstructions`**: Additional behavioral guidelines and constraints

## Advanced Configuration Example

```yaml
customModes:
  - slug: api-designer              # Required: unique identifier
    name: 🌐 API Designer           # Required: display name
    iconName: codicon-globe         # Optional: VS Code icon
    roleDefinition: |               # Required: persona definition
      You are an API design specialist...
    whenToUse: |                    # Optional: usage scenarios
      Use this mode for API design...
    description: API design specialist # Optional: brief description
    customInstructions: |           # Optional: detailed workflow
      ## API Design Workflow
      ### 1. Planning Phase...
    groups:                         # Required: tool permissions
      - read
      - edit
      - command
      - browser
      - mcp
    source: project                 # Required: usually 'project'
    rulesFiles:                     # Optional: additional rules
      - relativePath: api-standards.md
        content: |
          # API Standards
          - Use RESTful conventions
```

## File Restrictions Configuration

```yaml
groups:
  - read
  - edit:
      - fileRegex: \.(js|ts|json|yaml)$
        description: API and config files only
  - command
```

## Next Steps

- **Detailed Reference**: See [Property Definitions](./04-property-definitions.md)
- **Tool Access**: Learn about [Tool Groups and Permissions](./05-tool-groups-permissions.md)
- **File Control**: Configure [File Restrictions](./06-file-restrictions.md)