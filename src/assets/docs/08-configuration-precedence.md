# Configuration Precedence

Mode configurations are applied in a specific order, with more specific configurations overriding general ones:

## Mode Configuration Precedence (Highest to Lowest)

1. **Project-level modes** (`.roomodes` files - YAML or JSON)
2. **Global modes** (`custom_modes.yaml`)
3. **Legacy global modes** (`custom_modes.json`)
4. **Built-in default modes**

This means that project-specific configurations will override global configurations, which in turn override default configurations. For instance, if you have a global 'code' mode and a project-specific 'code' mode in `.roomodes`, the project version will be used when working in that project.

## Instruction File Precedence

Within the loading of mode-specific instructions from the filesystem:

1. **Directory method** (`.roo/rules-{mode-slug}/`) takes precedence over single file method
2. **Single file method** (`.roorules-{mode-slug}`) used as fallback
3. **Combined with customInstructions**: File/directory instructions are appended to the `customInstructions` property
4. **Alphabetical ordering**: Files in directories are processed alphabetically by filename

## Override Behavior

- **Same slug**: Project modes override global modes with the same slug
- **Built-in override**: Custom modes can override built-in modes (`code`, `debug`, `ask`, `architect`, `orchestrator`)
- **Complete replacement**: Override replaces the entire mode configuration, not individual properties

## Example Scenarios

### Global Override
```yaml
# ~/.roo/custom_modes.yaml
customModes:
  - slug: code  # Overrides built-in Code mode
    name: 💻 Code (Global)
    roleDefinition: Global code mode with specific constraints
    groups: ["read", "edit"]
```

### Project Override
```yaml
# project/.roomodes
customModes:
  - slug: code  # Overrides both built-in and global Code mode
    name: 💻 Code (Project)
    roleDefinition: Project-specific code mode
    groups:
      - read
      - - edit
        - fileRegex: \.py$
          description: Python files only
```

## Configuration Locations

### Global Modes
- **Location**: `~/.roo/custom_modes.yaml`
- **Scope**: Available in all projects
- **Access**: Prompts Tab → Global Prompts → Edit Global Modes

### Project Modes
- **Location**: `{project-root}/.roomodes`
- **Scope**: Current project only
- **Access**: Prompts Tab → Project Prompts → Edit Project Modes

## Best Practices

### When to Use Global vs Project Modes

#### Global Modes
- **General-purpose modes** that work across all projects
- **Personal preferences** and workflows
- **Company-wide standards** and templates
- **Reusable patterns** for common tasks

```yaml
# Good global mode example
- slug: security-reviewer
  name: 🔒 Security Reviewer
  roleDefinition: You are a security specialist focused on code review
  groups: ["read", "browser"]  # Read-only for security
```

#### Project Modes
- **Project-specific requirements** and constraints
- **Technology stack specialization** for the current project
- **Team-specific workflows** and standards
- **File restriction patterns** unique to the project

```yaml
# Good project mode example
- slug: api-developer
  name: 🔌 API Developer
  roleDefinition: You are a backend developer for this Node.js API project
  groups:
    - read
    - - edit
      - fileRegex: ^(src|tests)/.*\.(js|ts)$
        description: Source and test files only
```

### Override Strategies

#### Gradual Specialization
Start with a general global mode and specialize it for specific projects:

```yaml
# Global base mode
- slug: frontend-dev
  name: 🎨 Frontend Developer
  groups: ["read", "edit", "browser"]

# Project specialization
- slug: frontend-dev
  name: 🎨 Frontend Developer (React)
  roleDefinition: You are a React developer working on this TypeScript project
  groups:
    - read
    - - edit
      - fileRegex: \.(tsx?|jsx?|css|scss)$
        description: Frontend files only
    - browser
```

#### Built-in Mode Customization
Customize built-in modes for specific needs:

```yaml
# Customize the built-in 'code' mode
- slug: code
  name: 💻 Code (Restricted)
  roleDefinition: You are a code assistant with limited file access
  groups:
    - read
    - - edit
      - fileRegex: ^src/.*\.(py|js|ts)$
        description: Source files only
```

## Troubleshooting

### Mode Not Loading
1. **Check file syntax**: Validate YAML/JSON format
2. **Verify file location**: Ensure correct path and filename
3. **Restart application**: Reload window or restart Roo Code
4. **Check console**: Look for configuration errors

### Unexpected Behavior
1. **Check precedence**: Higher precedence modes override lower ones
2. **Verify slug matching**: Exact slug match required for override
3. **Review file restrictions**: Ensure regex patterns are correct
4. **Test in isolation**: Temporarily disable other modes

## Next Steps

- **Advanced Patterns**: Learn about [Advanced Features](./09-advanced-features.md)
- **Import/Export**: Understand [Import/Export Modes](./10-import-export.md)
- **Examples**: Explore [Example Configurations](./11-examples.md)