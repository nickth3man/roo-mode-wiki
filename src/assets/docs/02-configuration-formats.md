# Configuration Formats

Roo Code supports both YAML and JSON formats for defining custom modes, with YAML being the preferred format for new configurations.

## YAML Format (Recommended)

YAML is the preferred format due to its superior readability and developer-friendly features:

```yaml
customModes:
  - slug: docs-writer
    name: 📝 Documentation Writer
    description: Specialized mode for writing and editing technical documentation
    roleDefinition: >-
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
      - - edit
        - fileRegex: \.(md|mdx|txt|rst)$
          description: Documentation files only
      - browser
```

## JSON Format (Legacy Support)

JSON format is fully supported for backward compatibility:

```json
{
  "customModes": [{
    "slug": "docs-writer",
    "name": "📝 Documentation Writer",
    "description": "Specialized mode for writing and editing technical documentation",
    "roleDefinition": "You are a technical writer specializing in clear, comprehensive documentation.",
    "whenToUse": "Use for creating, editing, and improving documentation files",
    "customInstructions": "Focus on clear language and practical examples.",
    "groups": [
      "read",
      ["edit", { "fileRegex": "\\.(md|mdx|txt|rst)$", "description": "Documentation files only" }],
      "browser"
    ]
  }]
}
```

## Benefits of YAML Format

YAML is now the preferred format for defining custom modes due to several advantages over JSON:

- **Readability**: YAML's indentation-based structure is often easier for humans to read and understand complex configurations
- **Comments Support**: Use `#` for inline documentation and annotations
- **Multi-line Strings**: Clean syntax with `|` (literal) or `>` (folded) blocks for complex instructions
- **Reduced Punctuation**: Less prone to syntax errors with fewer commas and braces
- **Better Readability**: Indentation-based structure
- **Editor Support**: Excellent syntax highlighting and validation in modern editors

### YAML Multi-line String Examples

```yaml
customModes:
  - slug: test-engineer
    name: 🧪 Test Engineer
    roleDefinition: >-
      You are a test engineer with expertise in:
      - Writing comprehensive test suites
      - Test-driven development
      - Integration testing
      - Performance testing
    customInstructions: |-
      When writing tests:
      - Use describe/it blocks
      - Include meaningful descriptions
      - Test edge cases
      - Ensure proper coverage
```

### YAML Comments Example

```yaml
customModes:
  - slug: security-review
    name: 🔒 Security Reviewer
    # This mode is restricted to read-only access
    roleDefinition: You are a security specialist reviewing code for vulnerabilities.
    whenToUse: Use for security reviews and vulnerability assessments.
    # Only allow reading files, no editing permissions
    groups:
      - read
      - browser
```

### Tips for Working with YAML

When editing YAML manually, keep these points in mind:

- **Indentation is Key**: YAML uses indentation (spaces, not tabs) to define structure. Incorrect indentation is the most common source of errors
- **Colons for Key-Value Pairs**: Keys must be followed by a colon and a space (e.g., `slug: my-mode`)
- **Hyphens for List Items**: List items start with a hyphen and a space (e.g., `- read`)
- **Validate Your YAML**: Use an online YAML validator or your editor's built-in validation to check for syntax errors

## Migration to YAML Format

### Global Modes
The migration from `custom_modes.json` to `custom_modes.yaml` happens automatically **for global modes** when Roo Code starts up, under these conditions:

1. Roo Code starts up
2. A `custom_modes.json` file exists
3. No `custom_modes.yaml` file exists yet

The migration process reads the existing JSON file, converts it to YAML format, creates a new `custom_modes.yaml` file, and preserves the original JSON file (e.g., by renaming it) for rollback purposes. If `custom_modes.yaml` already exists, it will be used, and no automatic migration of `custom_modes.json` will occur.

### Project Modes (`.roomodes`)

- **No automatic startup migration**: Unlike global modes, project-specific `.roomodes` files are not automatically converted from JSON to YAML simply when Roo Code starts
- **Format Detection**: Roo Code can read `.roomodes` files in either YAML or JSON format. Roo Code automatically detects the format by attempting to parse them as YAML first
- **Conversion on UI Edit**: If you edit a project-specific mode through the Roo Code UI (e.g., via the Prompts Tab), and the existing `.roomodes` file is in JSON format, Roo Code will save the changes in YAML format. This effectively converts the file to YAML. The original JSON content will be overwritten with YAML
- **Manual Conversion**: If you want to convert an existing `.roomodes` JSON file to YAML without making UI edits, you'll need to do this manually. You can:
  1. Open your existing JSON `.roomodes` file
  2. Convert its content to YAML (you can ask Roo to help with this, or use an online converter)
  3. Replace the content of your `.roomodes` file with the new YAML content, or rename the old file (e.g., `.roomodes.json.bak`) and save the new content into a file named `.roomodes`
  
  Ensure the resulting YAML is valid.

> **Tip**: For manual conversions of `.roomodes` files, you can use online JSON to YAML converters or ask Roo to help reformat a specific mode configuration from JSON to YAML. Always validate your YAML before saving.

## Next Steps

- **Learn the Structure**: Review [Core Properties](./03-core-properties.md)
- **Detailed Reference**: See [Property Definitions](./04-property-definitions.md)
- **See Examples**: Check [Example Configurations](./11-examples.md)