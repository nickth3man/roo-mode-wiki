# Mode-Specific Instructions

Beyond the `customInstructions` property, you can provide additional instructions through dedicated files or directories. This approach offers better organization and version control.

## Directory-Based Instructions (Preferred)

**Structure**: `.roo/rules-{mode-slug}/`

```
.roo/
└── rules-docs-writer/
    ├── 01-style-guide.md
    ├── 02-formatting-rules.txt
    └── 03-review-checklist.md
```

**Benefits**:
- Multiple organized files
- Recursive directory reading
- Alphabetical file ordering
- Better version control
- Team collaboration friendly

## File-Based Instructions (Fallback)

**Structure**: `.roorules-{mode-slug}`

```
.roorules-docs-writer
```

**Usage**: Single file containing all mode-specific instructions

## Precedence Rules

1. **Directory method takes precedence**: If `.roo/rules-{slug}/` exists and contains files, `.roorules-{slug}` is ignored
2. **Combined with customInstructions**: File/directory instructions are appended to `customInstructions` property
3. **Alphabetical ordering**: Files in directories are processed alphabetically

## Example Implementation

```yaml
# Mode definition
customModes:
  - slug: docs-writer
    name: 📝 Documentation Writer
    customInstructions: |
      Base instructions for documentation writing.
    # ... other properties
```

```markdown
<!-- .roo/rules-docs-writer/01-style-guide.md -->
# Documentation Style Guide

## Writing Standards
- Use active voice
- Keep sentences concise
- Include practical examples

## Formatting Rules
- Use proper markdown syntax
- Include table of contents for long documents
- Add code blocks with syntax highlighting
```

## Best Practices

1. **Organize by Topic**: Use numbered files to control order (01-, 02-, etc.)
2. **Keep Files Focused**: Each file should cover a specific aspect
3. **Use Clear Names**: File names should indicate their purpose
4. **Version Control**: Track changes to instruction files
5. **Team Collaboration**: Share instruction files across team members

## Common Use Cases

### Code Review Mode
```
.roo/rules-code-reviewer/
├── 01-security-checklist.md
├── 02-performance-guidelines.md
└── 03-style-standards.md
```

### Documentation Writer
```
.roo/rules-docs-writer/
├── 01-style-guide.md
├── 02-formatting-rules.md
└── 03-review-process.md
```

### API Developer
```
.roo/rules-api-dev/
├── 01-rest-standards.md
├── 02-error-handling.md
└── 03-testing-requirements.md
```

## Next Steps

- **Configuration Order**: Learn about [Configuration Precedence](./08-configuration-precedence.md)
- **Advanced Patterns**: Explore [Advanced Features](./09-advanced-features.md)
- **Import/Export**: Understand [Import/Export Modes](./10-import-export.md)