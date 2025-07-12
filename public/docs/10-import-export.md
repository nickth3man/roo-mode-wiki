# Import/Export Modes

Roo Code provides built-in functionality to import and export custom modes, making it easy to share configurations between projects, team members, or back up your custom modes.

## Export Functionality

You can export your custom modes through the Roo Code interface:

1. **Open Prompts Tab**: Click the notebook icon
2. **Access Settings**: Click the settings gear icon
3. **Choose Export Option**: Select the appropriate export option for global or project modes
4. **Save Configuration**: Export creates a downloadable file containing your mode configurations

### Export Formats

- **YAML Format**: Preferred format for new exports
- **JSON Format**: Legacy format, still supported
- **Complete Configuration**: Exports include all mode properties and settings

## Import Functionality

Importing modes allows you to:

- **Share Team Configurations**: Distribute standardized modes across team members
- **Backup and Restore**: Save and restore your custom mode configurations
- **Cross-Project Setup**: Apply successful mode configurations to new projects

### Import Process

1. **Access Import Option**: Through the Prompts Tab settings menu
2. **Select Configuration File**: Choose your exported YAML or JSON file
3. **Review and Confirm**: Verify the modes being imported
4. **Apply Changes**: Import process updates your configuration files

## Use Cases

### Team Collaboration
```yaml
# Shared team configuration
customModes:
  - slug: team-code-review
    name: 👥 Team Code Reviewer
    description: Standardized code review process for the team
    roleDefinition: >
      You are a code reviewer following our team's established
      coding standards and review checklist.
    groups:
      - read
      - browser
```

### Project Templates
```yaml
# Project-specific mode template
customModes:
  - slug: project-setup
    name: 🚀 Project Setup
    description: Specialized mode for project initialization
    roleDefinition: >
      You are a project setup specialist who helps initialize
      new projects with proper structure and configuration.
    groups:
      - read
      - edit
      - command
```

### Backup Strategy

- **Regular Exports**: Export configurations periodically
- **Version Control**: Store exported configurations in your repository
- **Documentation**: Include mode descriptions and usage guidelines

## Best Practices

1. **Document Your Modes**: Include clear descriptions and usage instructions
2. **Version Your Exports**: Use meaningful filenames with dates or version numbers
3. **Test Imports**: Verify imported modes work as expected
4. **Team Standards**: Establish team conventions for mode naming and structure
5. **Backup Regularly**: Export important configurations before making changes

## File Management

### Global Mode Files
- **Location**: User configuration directory
- **Filename**: `custom_modes.yaml` (preferred) or `custom_modes.json`
- **Scope**: Available across all projects

### Project Mode Files
- **Location**: Project root directory
- **Filename**: `.roomodes`
- **Scope**: Specific to the current project
- **Format**: YAML or JSON (auto-detected)

## Troubleshooting Import/Export

### Common Issues

- **Format Errors**: Ensure YAML/JSON syntax is valid
- **Duplicate Slugs**: Check for conflicting mode identifiers
- **Permission Issues**: Verify file system permissions
- **Path Problems**: Ensure correct file locations

### Validation

- **Syntax Check**: Validate YAML/JSON before importing
- **Mode Testing**: Test imported modes in a safe environment
- **Backup First**: Always backup existing configurations before importing

Easily share, back up, and template your custom modes. Roo Code lets you export any mode—and its associated rules—into a single, portable YAML file that you can import into any project.

## Key Features
- **Shareable Setups**: Package a mode and its rules into one file to easily share with your team.
- **Easy Backups**: Save your custom mode configurations so you never lose them.
- **Project Templates**: Create standardized mode templates for different types of projects.
- **Simple Migration**: Move modes between your global settings and specific projects effortlessly.

## Use Case

**Before**: Manually recreating custom modes and copying `.roo/rules-{slug}/` folders for each new project or team member. This was tedious and error-prone.

**With this feature**: A single click exports a mode and all its rules to a YAML file. Another click imports it, setting everything up automatically.

## How it Works

The import/export functionality is managed from the **Modes** view in Roo Code.

### Exporting a Mode
1. Navigate to the **Modes** view.
2. Select the mode you wish to export.
3. Click the **Export Mode** button (download icon).
4. Choose a location to save the `.yaml` file.

Roo packages the mode's configuration and any rules found in the project's `.roo/rules-{slug}/` directory into the YAML file.

### Importing a Mode
1. Click the **Import Mode** button (upload icon) in the **Modes** view.
2. Select the mode's YAML file.
3. Choose the import level in the dialog:
    - **Project**: The mode is available only in the current workspace. It's added to the `.roomodes` file, and its rules are saved to the `.roo/rules-{slug}/` directory within the project.
    - **Global**: The mode is available in all your projects. It's added to your global settings, and its rules are stored in your system's global Roo configuration directory (e.g., `~/.roo/rules-{slug}/`).

## Exported YAML File Format

```yaml
customModes:
  - slug: "my-custom-mode"
    name: "My Custom Mode"
    roleDefinition: "You are a helpful assistant."
    groups: ["read", "edit"]
    rulesFiles:
      - relativePath: "rules-my-custom-mode/rules.md"
        content: "These are the rules for my custom mode."
```

### File Structure

- **customModes**: Array containing the mode configuration
- **rulesFiles**: Array of rule files associated with the mode
  - **relativePath**: Path where the rule file should be placed
  - **content**: The actual content of the rule file

## Common Use Cases

### Team Collaboration
```yaml
# Export a team-standard mode
customModes:
  - slug: "team-reviewer"
    name: "🔍 Team Code Reviewer"
    description: "Standard code review mode for our team"
    roleDefinition: |
      You are a code reviewer following our team's standards.
      Focus on code quality, security, and maintainability.
    groups:
      - read
      - browser
    rulesFiles:
      - relativePath: "rules-team-reviewer/coding-standards.md"
        content: |
          # Team Coding Standards
          - Use TypeScript for all new code
          - Follow ESLint configuration
          - Include unit tests for all functions
      - relativePath: "rules-team-reviewer/security-checklist.md"
        content: |
          # Security Review Checklist
          - Check for SQL injection vulnerabilities
          - Validate input sanitization
          - Review authentication logic
```

### Project Templates
```yaml
# React project template mode
customModes:
  - slug: "react-developer"
    name: "⚛️ React Developer"
    description: "Specialized mode for React development"
    roleDefinition: |
      You are a React developer specializing in modern React patterns,
      TypeScript, and component-based architecture.
    groups:
      - read
      - - edit
        - fileRegex: \.(tsx?|jsx?|css|scss|json)$
          description: React project files
      - browser
    rulesFiles:
      - relativePath: "rules-react-developer/component-guidelines.md"
        content: |
          # React Component Guidelines
          - Use functional components with hooks
          - Implement proper TypeScript types
          - Follow component composition patterns
```

### Personal Workflow Backup
```yaml
# Personal productivity mode
customModes:
  - slug: "personal-assistant"
    name: "🤖 Personal Assistant"
    description: "My customized personal productivity mode"
    roleDefinition: |
      You are my personal coding assistant with knowledge of my
      preferred patterns, tools, and workflow.
    groups: ["read", "edit", "browser", "command"]
    rulesFiles:
      - relativePath: "rules-personal-assistant/preferences.md"
        content: |
          # Personal Coding Preferences
          - Prefer functional programming patterns
          - Use descriptive variable names
          - Include comprehensive error handling
```

## Best Practices

### Export Organization
1. **Descriptive Filenames**: Use clear, descriptive names for exported files
   - `team-react-developer-v2.yaml`
   - `security-reviewer-2024.yaml`
   - `documentation-writer-template.yaml`

2. **Version Control**: Track exported mode files in your team's repository
   ```
   project/
   ├── .roo-modes/
   │   ├── team-standards.yaml
   │   ├── project-specific.yaml
   │   └── README.md
   ```

3. **Documentation**: Include README files explaining mode purposes
   ```markdown
   # Team Mode Templates
   
   ## Available Modes
   - `team-standards.yaml`: Standard code review and development mode
   - `project-specific.yaml`: Project-specific configurations
   
   ## Usage
   Import these modes at the project level for consistency.
   ```

### Import Strategies

#### Project-Level Import
- Use for project-specific modes
- Ensures team consistency within the project
- Allows project-specific customizations

#### Global Import
- Use for personal productivity modes
- Import general-purpose modes you use across projects
- Good for personal workflow templates

### Maintenance

1. **Regular Updates**: Keep exported modes up-to-date with team standards
2. **Cleanup**: Remove outdated or unused exported modes
3. **Testing**: Test imported modes in new environments
4. **Documentation**: Maintain clear documentation for shared modes

## Troubleshooting

### Import Failures

**Invalid YAML Format**:
```yaml
# Check for syntax errors
# Validate indentation (use spaces, not tabs)
# Ensure proper quoting of special characters
```

**Conflicting Slugs**:
- Choose "Replace" to override existing mode
- Choose "Skip" to keep existing mode
- Rename the slug in the exported file before importing

**Missing Rule Files**:
- Ensure all referenced rule files are included in the export
- Check that rule file paths are correct

### Export Issues

**Large Rule Files**:
- Consider splitting large rule files into smaller, focused files
- Use external documentation links for extensive guidelines

**Binary Files**:
- Export only includes text-based rule files
- Binary assets need to be shared separately

## Next Steps

- **Examples**: Explore [Example Configurations](./11-examples.md)
- **Troubleshooting**: Review [Common Issues](./12-troubleshooting.md)
- **Best Practices**: Learn [Team Collaboration](./13-team-collaboration.md)