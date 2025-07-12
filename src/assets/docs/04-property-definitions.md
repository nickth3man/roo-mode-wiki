# Property Definitions

Detailed reference for each configuration property with examples and best practices:

## `slug` (Required)

**Purpose**: Unique identifier for the mode used internally and in file/directory names.

**Format**: 
- Use lowercase letters, numbers, and hyphens only
- Keep short and descriptive
- Must be unique across all modes

**Usage**: Used for mode-specific rules (e.g., `.roo/rules-{slug}/`) and internal references.

```yaml
# Good examples
slug: docs-writer
slug: security-audit
slug: test-engineer

# Bad examples
slug: "Docs Writer"  # No spaces or special characters
slug: docs_writer    # Use hyphens, not underscores
slug: documentation-writer-for-technical-content  # Too long
```

## `name` (Required)

**Purpose**: Display name shown in the Roo Code UI mode selector.

**Format**: 
- Can include spaces, emojis, and proper capitalization
- Should be descriptive and user-friendly
- Typically 2-4 words

```yaml
# Examples
name: 📝 Documentation Writer
name: 🔒 Security Reviewer
name: 🧪 Test Engineer
name: 🏗️ API Architect
```

## `description` (Optional)

**Purpose**: Short, user-friendly summary displayed in the mode selector UI.

**Format**: 
- Keep concise (1-2 sentences)
- Focus on what the mode does for the user
- Appears below the mode name in the UI

```yaml
description: A specialized mode for writing and editing technical documentation.
description: Reviews code for security vulnerabilities and best practices.
description: Creates comprehensive test suites with TDD methodology.
```

## `roleDefinition` (Required)

**Purpose**: Detailed description of the mode's role, expertise, and personality.

**Placement**: Added at the beginning of the system prompt when the mode is active.

**Best Practices**:
- Define the AI's expertise and specialization
- Include relevant background knowledge
- Specify the AI's approach and methodology
- Use multi-line YAML for complex definitions

```yaml
# Single-line example
roleDefinition: You are a technical writer specializing in clear documentation.

# Multi-line example (recommended)
roleDefinition: >-
  You are a test engineer with expertise in:
  - Writing comprehensive test suites
  - Test-driven development (TDD)
  - Integration and unit testing
  - Performance testing and optimization
  - Testing best practices and patterns

# Literal block example
roleDefinition: |
  You are a security specialist focused on:
  
  ## Core Expertise
  - Vulnerability assessment
  - Secure coding practices
  - Threat modeling
  - Security architecture review
```

## `whenToUse` (Optional)

**Purpose**: Provides guidance for Roo's automated decision-making and mode selection.

**Usage**: 
- Used by Roo for automated decisions and orchestration
- NOT displayed in the mode selector UI (that's handled by `description`)
- If not provided, first sentence of `roleDefinition` is used

```yaml
whenToUse: Use for creating, editing, and improving documentation files and guides.
whenToUse: Best for security reviews, vulnerability assessments, and secure code analysis.
whenToUse: Ideal for writing tests, implementing TDD, and ensuring code quality.
```

## `customInstructions` (Optional)

**Purpose**: Additional behavioral guidelines and specific instructions for the mode.

**Placement**: Added near the end of the system prompt.

**Can be supplemented by**: Mode-specific instruction files (`.roo/rules-{slug}/` or `.roorules-{slug}`).

```yaml
# Single-line example
customInstructions: Focus on explaining concepts clearly and providing examples.

# Multi-line example (recommended)
customInstructions: |-
  When writing tests:
  - Use describe/it blocks for structure
  - Include meaningful test descriptions
  - Test both happy path and edge cases
  - Ensure proper test coverage
  - Follow project testing conventions

# Literal block with formatting
customInstructions: |
  ## Documentation Standards
  
  ### Writing Style
  - Use clear, concise language
  - Write in active voice
  - Include practical examples
  
  ### Formatting
  - Use proper markdown syntax
  - Include code blocks with syntax highlighting
  - Add table of contents for long documents
```

## `groups` (Required)

**Purpose**: Defines which tool groups the mode can access and any restrictions.

**Available Tool Groups**: `"read"`, `"edit"`, `"browser"`, `"command"`, `"mcp"`

**Format**: Array of strings or arrays (for restrictions)

See [Tool Groups and Permissions](./05-tool-groups-permissions.md) for detailed information.

## Next Steps

- **Tool Access**: Learn about [Tool Groups and Permissions](./05-tool-groups-permissions.md)
- **File Control**: Configure [File Restrictions](./06-file-restrictions.md)
- **Custom Instructions**: Set up [Mode-Specific Instructions](./07-mode-instructions.md)