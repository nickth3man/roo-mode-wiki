# Roo Custom Modes Wiki

*A comprehensive knowledge base for creating, configuring, and managing custom modes in Roo Code*

**Created:** December 2024  
**Based on:** Roo Modes API Documentation

---

## Table of Contents

### Getting Started
1. [What Are Custom Modes?](#what-are-custom-modes)
2. [Quick Start Guide](#quick-start-guide)
3. [Your First Custom Mode](#your-first-custom-mode)

### How-To Guides
4. [Creating Modes](#creating-modes)
5. [Configuring Permissions](#configuring-permissions)
6. [Managing File Access](#managing-file-access)
7. [Team Collaboration](#team-collaboration)

### Reference
8. [Configuration Properties](#configuration-properties)
9. [Tool Groups Reference](#tool-groups-reference)
10. [File Restriction Patterns](#file-restriction-patterns)
11. [Example Configurations](#example-configurations)

### Troubleshooting
12. [Common Issues](#common-issues)
13. [Migration Guide](#migration-guide)
14. [Best Practices](#best-practices)

---

## What Are Custom Modes?

Custom modes in Roo Code are specialized AI assistants that you can create for specific development tasks. Think of them as different "hats" your AI can wear - a documentation writer, security auditor, test engineer, or API designer.

### Key Benefits
- **Focused Expertise**: Each mode specializes in specific tasks
- **Controlled Access**: Restrict which files and tools each mode can use
- **Team Consistency**: Share modes across your team for standardized workflows
- **Context Switching**: Seamlessly switch between different types of work

### When to Use Custom Modes
- Writing technical documentation
- Conducting security reviews
- Creating comprehensive tests
- Designing APIs
- Code reviews with specific focus areas
- Any specialized development workflow

---

## Quick Start Guide

### Method 1: Ask Roo Directly (Easiest)
Simply ask Roo to create a mode for you:
```
"Create a mode for writing technical documentation that only edits markdown files"
```

### Method 2: Using the UI
1. Click the notebook icon to open the Prompts Tab
2. Click the settings gear icon
3. Choose "Edit Global Modes" or "Edit Project Modes"
4. Add your configuration

### Method 3: Manual Configuration
Edit configuration files directly:
- **Global modes**: `custom_modes.yaml`
- **Project modes**: `.roomodes` file in project root

---

## Your First Custom Mode

Let's create a simple documentation writer mode:

```yaml
customModes:
  - slug: docs-writer
    name: 📝 Documentation Writer
    description: Specialized for writing and editing technical documentation
    roleDefinition: >
      You are a technical writer specializing in clear, comprehensive documentation.
      Focus on explaining concepts clearly and providing practical examples.
    whenToUse: Use for creating, editing, and improving documentation files
    groups:
      - read
      - edit:
          - fileRegex: \.(md|mdx|txt|rst)$
            description: Documentation files only
      - browser
```

### What This Does
- **slug**: Unique identifier (`docs-writer`)
- **name**: Display name with emoji for easy recognition
- **roleDefinition**: Tells the AI how to behave
- **groups**: Allows reading all files, editing only documentation files, and web browsing

---

## Creating Modes

### Essential Properties
Every mode needs these four properties:

```yaml
customModes:
  - slug: unique-identifier        # Required: Must be unique
    name: Display Name             # Required: Shown in UI
    roleDefinition: "AI behavior"  # Required: How AI should act
    groups: ["read", "edit"]       # Required: What AI can do
```

### Optional Enhancements
```yaml
    description: "Brief summary"           # Shown in mode selector
    whenToUse: "Usage guidance"            # Helps with mode selection
    customInstructions: "Detailed rules"   # Additional behavioral guidelines
    iconName: "codicon-globe"              # VS Code icon
```

### Role Definition Best Practices
- Be specific about expertise areas
- Include relevant technologies or domains
- Mention key responsibilities
- Set the tone and approach

**Good Example:**
```yaml
roleDefinition: |
  You are a security specialist with expertise in:
  - OWASP Top 10 vulnerabilities
  - Code security auditing
  - Compliance requirements
  Focus on identifying security risks and providing actionable recommendations.
```

---

## Configuring Permissions

### Available Tool Groups
- **read**: View any file in the project
- **edit**: Modify files (can be restricted)
- **command**: Execute terminal commands
- **browser**: Access web browsing
- **mcp**: Use MCP (Model Context Protocol) tools

### Basic Permission Examples
```yaml
# Read-only mode
groups:
  - read
  - browser

# Full access mode
groups:
  - read
  - edit
  - command
  - browser
  - mcp

# Restricted editing
groups:
  - read
  - edit:
      - fileRegex: \.(js|ts)$
        description: JavaScript/TypeScript only
  - browser
```

---

## Managing File Access

### File Restriction Patterns
Use regex patterns to control which files modes can edit:

```yaml
# Documentation files only
fileRegex: \.(md|mdx|txt|rst)$

# Frontend files
fileRegex: \.(js|jsx|ts|tsx|css|scss|html|vue)$

# Backend files
fileRegex: \.(py|js|ts|go|java|rb|php)$

# Test files only
fileRegex: \.(test|spec)\.(js|ts|py|java|rb)$

# Configuration files
fileRegex: \.(json|yaml|yml|toml|ini|conf)$
```

### Security Considerations
- Always use the most restrictive permissions needed
- Test file patterns to ensure they work as expected
- Consider using read-only modes for sensitive operations
- Document why specific restrictions are in place

---

## Team Collaboration

### Global vs Project Modes
- **Global modes** (`custom_modes.yaml`): Available across all projects
- **Project modes** (`.roomodes`): Specific to individual projects

### Sharing Modes
1. **Export**: Use Roo's import/export functionality
2. **Version Control**: Include `.roomodes` files in your repository
3. **Documentation**: Document mode purposes and usage

### Team Best Practices
- Establish naming conventions for mode slugs
- Document mode purposes and when to use them
- Regular review and cleanup of unused modes
- Share successful mode configurations

---

## Configuration Properties

### Complete Property Reference

| Property | Required | Type | Description |
|----------|----------|------|-------------|
| `slug` | ✅ | string | Unique identifier for the mode |
| `name` | ✅ | string | Display name shown in UI |
| `roleDefinition` | ✅ | string | AI's role and expertise description |
| `groups` | ✅ | array | Tool groups the mode can access |
| `description` | ❌ | string | Brief summary for mode selector |
| `whenToUse` | ❌ | string | Usage guidance for mode selection |
| `customInstructions` | ❌ | string | Additional behavioral guidelines |
| `iconName` | ❌ | string | VS Code icon identifier |
| `source` | ❌ | string | Usually 'project' for project modes |
| `rulesFiles` | ❌ | array | Additional instruction files |

### Advanced Configuration
```yaml
customModes:
  - slug: advanced-mode
    name: 🚀 Advanced Mode
    description: Example of advanced configuration
    roleDefinition: |
      You are a specialist with advanced capabilities.
    whenToUse: |
      Use this mode when you need advanced features.
    customInstructions: |
      ## Workflow
      1. Analyze requirements
      2. Plan implementation
      3. Execute with precision
    groups:
      - read
      - edit:
          - fileRegex: \.(js|ts|json|yaml)$
            description: Config and source files
      - command
      - browser
    source: project
    rulesFiles:
      - relativePath: coding-standards.md
        content: |
          # Coding Standards
          - Use TypeScript
          - Follow ESLint rules
```

---

## Tool Groups Reference

### Read Group
- **Purpose**: View files and project structure
- **Capabilities**: 
  - Browse file contents
  - Search through codebase
  - Analyze project structure
- **Security**: Safe for all modes

### Edit Group
- **Purpose**: Modify files
- **Capabilities**:
  - Create new files
  - Modify existing files
  - Delete files
- **Restrictions**: Can be limited with `fileRegex`
- **Security**: Use with caution, apply file restrictions

### Command Group
- **Purpose**: Execute terminal commands
- **Capabilities**:
  - Run build scripts
  - Execute tests
  - Install dependencies
  - Git operations
- **Security**: High risk, use only when necessary

### Browser Group
- **Purpose**: Web browsing and research
- **Capabilities**:
  - Search documentation
  - Research best practices
  - Access online resources
- **Security**: Generally safe

### MCP Group
- **Purpose**: Model Context Protocol tools
- **Capabilities**: Extended tool access
- **Security**: Depends on specific MCP tools

---

## File Restriction Patterns

### Common Patterns

#### By File Extension
```yaml
# Markdown files
fileRegex: \.md$

# JavaScript/TypeScript
fileRegex: \.(js|ts)x?$

# Python files
fileRegex: \.py$

# Configuration files
fileRegex: \.(json|yaml|yml|toml)$
```

#### By File Type and Location
```yaml
# Test files anywhere
fileRegex: \.(test|spec)\.

# Source files in src directory
fileRegex: ^src/.*\.(js|ts)$

# Documentation in docs directory
fileRegex: ^docs/.*\.md$
```

#### Complex Patterns
```yaml
# Frontend files excluding node_modules
fileRegex: ^(?!.*node_modules).*\.(js|jsx|ts|tsx|css|scss|html|vue)$

# API files in specific directories
fileRegex: ^(api|routes|controllers)/.*\.(js|ts|py)$
```

### Testing Patterns
Always test your regex patterns:
1. Use online regex testers
2. Test with actual file paths from your project
3. Consider edge cases and subdirectories
4. Document complex patterns for team members

---

## Example Configurations

### Documentation Writer
```yaml
customModes:
  - slug: docs-writer
    name: 📝 Documentation Writer
    description: Specialized for technical documentation
    roleDefinition: >
      You are a technical writer specializing in clear, comprehensive documentation.
      Focus on explaining concepts clearly and providing practical examples.
    whenToUse: Use for creating, editing, and improving documentation files
    customInstructions: |-
      When writing documentation:
      - Use clear, concise language
      - Include practical examples
      - Follow project style guidelines
      - Ensure proper formatting
    groups:
      - read
      - edit:
          - fileRegex: \.(md|mdx|txt|rst)$
            description: Documentation files only
      - browser
```

### Security Auditor
```yaml
customModes:
  - slug: security-auditor
    name: 🔒 Security Auditor
    description: Read-only mode for security code reviews
    roleDefinition: |
      You are a cybersecurity specialist conducting code security audits.
      Focus on identifying vulnerabilities, security anti-patterns,
      and compliance issues.
      
      Key areas to examine:
      - Input validation and sanitization
      - Authentication and authorization
      - Data encryption and storage
      - SQL injection and XSS vulnerabilities
      - Dependency security
    groups:
      - read
      - browser
    customInstructions: |
      When reviewing code:
      1. Check for common OWASP Top 10 vulnerabilities
      2. Verify proper input validation
      3. Review authentication mechanisms
      4. Examine data handling practices
      5. Assess third-party dependencies
```

### Test Engineer
```yaml
customModes:
  - slug: test-engineer
    name: 🧪 Test Engineer
    description: Specialized for writing comprehensive tests
    roleDefinition: |
      You are a test engineer specializing in automated testing,
      test-driven development, and quality assurance.
    groups:
      - read
      - edit:
          - fileRegex: \.(test|spec)\.(js|ts|py|java|rb)$
            description: Test files only
      - command
    customInstructions: |
      Testing principles:
      - Write tests before implementation (TDD)
      - Aim for high code coverage (80%+)
      - Include unit, integration, and e2e tests
      - Use descriptive test names
      - Test both happy path and edge cases
```

### API Designer
```yaml
customModes:
  - slug: api-designer
    name: 🌐 API Designer
    description: API design specialist for RESTful services
    roleDefinition: >
      You are an API design specialist with expertise in:
      - RESTful API design principles
      - OpenAPI/Swagger documentation
      - API versioning strategies
      - Performance optimization
      - Security best practices
    whenToUse: Use this mode for API design, documentation, and architecture decisions
    customInstructions: |-
      ## API Design Workflow
      ### 1. Planning Phase
      - Define clear resource models
      - Plan endpoint structure
      - Consider versioning strategy
      
      ### 2. Implementation
      - Follow RESTful conventions
      - Implement proper error handling
      - Add comprehensive documentation
      
      ### 3. Testing
      - Create API tests
      - Validate against OpenAPI spec
      - Performance testing
    groups:
      - read
      - edit:
          - fileRegex: \.(js|ts|json|yaml|md)$
            description: API and documentation files
      - command
      - browser
```

### Frontend Developer
```yaml
customModes:
  - slug: frontend-dev
    name: 🎨 Frontend Developer
    description: Mode for frontend development with modern frameworks
    roleDefinition: |
      You are a frontend developer experienced with modern JavaScript frameworks,
      CSS, and responsive design principles.
    groups:
      - read
      - edit:
          - fileRegex: \.(js|jsx|ts|tsx|css|scss|html|vue)$
            description: Frontend development files
      - browser
      - command
```

---

## Common Issues

### Mode Not Appearing
**Problem**: Custom mode doesn't show up in the selector

**Solutions**:
1. Check YAML syntax with a validator
2. Ensure `slug` is unique
3. Verify file is saved in correct location
4. Restart Roo Code if needed

### File Restrictions Not Working
**Problem**: Mode can edit files it shouldn't

**Solutions**:
1. Test regex pattern with online tools
2. Escape special characters properly
3. Check for typos in `fileRegex`
4. Verify edit group configuration

### Permission Denied Errors
**Problem**: Mode can't access needed files

**Solutions**:
1. Add missing tool groups
2. Adjust file restriction patterns
3. Check if files exist and are accessible
4. Verify group configuration syntax

### YAML Parsing Errors
**Problem**: Configuration file won't load

**Solutions**:
1. Check indentation (use spaces, not tabs)
2. Validate YAML syntax
3. Ensure proper escaping of special characters
4. Check for missing colons or hyphens

---

## Migration Guide

### JSON to YAML Migration

#### Automatic Migration (Global Modes)
Roo Code automatically migrates `custom_modes.json` to `custom_modes.yaml` on startup if:
- `custom_modes.json` exists
- `custom_modes.yaml` doesn't exist
- Roo Code is starting up

#### Manual Migration (Project Modes)
For `.roomodes` files:
1. Convert JSON to YAML format
2. Test the new configuration
3. Replace the old file
4. Backup the original JSON file

#### Example Migration
**Before (JSON):**
```json
{
  "customModes": [{
    "slug": "docs-writer",
    "name": "📝 Documentation Writer",
    "roleDefinition": "You are a technical writer.",
    "groups": ["read", "edit"]
  }]
}
```

**After (YAML):**
```yaml
customModes:
  - slug: docs-writer
    name: 📝 Documentation Writer
    roleDefinition: You are a technical writer.
    groups:
      - read
      - edit
```

### Format Benefits
- **YAML**: More readable, supports comments, better for complex configurations
- **JSON**: Programmatically generated, strict syntax, good for automation

---

## Best Practices

### Mode Design
1. **Start Simple**: Begin with basic configurations and add complexity gradually
2. **Clear Names**: Use descriptive names with emojis for easy identification
3. **Focused Purpose**: Each mode should have a clear, specific purpose
4. **Document Usage**: Include `whenToUse` and `description` properties

### Security
1. **Principle of Least Privilege**: Grant only necessary permissions
2. **File Restrictions**: Always restrict edit access when possible
3. **Command Access**: Use command group sparingly and with caution
4. **Regular Review**: Periodically review and update mode permissions

### Team Collaboration
1. **Naming Conventions**: Establish consistent slug naming patterns
2. **Documentation**: Document mode purposes and usage scenarios
3. **Version Control**: Include mode configurations in your repository
4. **Regular Cleanup**: Remove unused or outdated modes

### Maintenance
1. **Test Regularly**: Verify modes work as expected
2. **Update Documentation**: Keep mode descriptions current
3. **Monitor Usage**: Track which modes are actually being used
4. **Gather Feedback**: Ask team members about mode effectiveness

### Performance
1. **Avoid Overly Complex Regex**: Keep file patterns simple when possible
2. **Limit Tool Groups**: Only include necessary tool groups
3. **Reasonable Scope**: Don't create too many specialized modes
4. **Regular Cleanup**: Remove unused modes to reduce clutter

---

## Advanced Topics

### Sticky Models
Assign specific AI models to modes for consistent behavior:
```yaml
customModes:
  - slug: code-reviewer
    name: Code Reviewer
    # Sticky model configuration would go here
    # (Refer to advanced documentation for details)
```

### Mode Composition
Combine multiple modes or inherit from base configurations:
```yaml
# Base configuration
baseMode: &base
  groups:
    - read
    - browser

# Specific modes inheriting from base
customModes:
  - slug: docs-writer
    <<: *base
    name: Documentation Writer
    # Additional specific configuration
```

### Environment-Specific Modes
Create different modes for different environments:
```yaml
# Development environment
customModes:
  - slug: dev-mode
    name: Development Mode
    groups:
      - read
      - edit
      - command

# Production environment (more restricted)
customModes:
  - slug: prod-mode
    name: Production Mode
    groups:
      - read
      - browser
```

---

## Resources and References

### Official Documentation
- [Roo Code Documentation](https://docs.roo.dev)
- [Custom Modes API Reference](../roo/modes/api/)
- [Community Gallery](https://community.roo.dev)

### Tools and Utilities
- [YAML Validator](https://yamlchecker.com/)
- [Regex Tester](https://regex101.com/)
- [VS Code Icons](https://microsoft.github.io/vscode-codicons/dist/codicon.html)

### Community
- Share your custom modes with the community
- Learn from other developers' configurations
- Contribute to the knowledge base

---

*This wiki is based on the Roo Custom Modes API documentation and follows the principles outlined in "The Complete Guide to Creating and Organizing a Wiki" for effective knowledge management.*