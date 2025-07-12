# File Restrictions

File restrictions provide fine-grained control over which files a mode can access or modify. They use regular expressions to match file paths and are primarily used with the `edit` tool group.

## Basic Syntax

File restrictions are defined as part of the `edit` group configuration:

```yaml
groups:
  - - edit                          # Tool group name
    - fileRegex: pattern            # Regex pattern
      description: human description # Optional description
```

## Regex Escaping Rules

**YAML Format** (single backslashes):
```yaml
fileRegex: \.(js|ts)$              # Matches .js or .ts files
fileRegex: ^src/.*\.test\.js$      # Matches test files in src/
```

**JSON Format** (double backslashes):
```json
"fileRegex": "\\.(js|ts)$"          // Matches .js or .ts files
"fileRegex": "^src/.*\\.test\\.js$"  // Matches test files in src/
```

## Common Patterns

### File Extension Matching

```yaml
# Single extension
fileRegex: \.md$                   # Markdown files
fileRegex: \.py$                   # Python files

# Multiple extensions
fileRegex: \.(js|ts)$              # JavaScript or TypeScript
fileRegex: \.(css|scss|less)$      # Stylesheet files
fileRegex: \.(jpg|png|gif|svg)$    # Image files
```

### Directory-Based Restrictions

```yaml
# Files in specific directories
fileRegex: ^src/.*                 # Files in src/ directory
fileRegex: ^docs/.*\.md$           # Markdown files in docs/
fileRegex: ^tests/.*\.(js|ts)$     # Test files in tests/ directory

# Exclude specific directories
fileRegex: ^(?!node_modules/).*    # Exclude node_modules
fileRegex: ^(?!\.).*               # Exclude hidden files/directories
```

### Complex Patterns

```yaml
# Test files only
fileRegex: \.(test|spec)\.(js|ts)$ # Files ending with .test.js, .spec.ts, etc.

# Source files excluding tests
fileRegex: ^src/(?!.*\.(test|spec)).*\.(js|ts)$
description: Source files excluding tests

# Configuration files
fileRegex: ^(\.|.*\.(config|rc)).*$
description: Configuration files

# Documentation and README files
fileRegex: (README|CHANGELOG|LICENSE|\.(md|txt|rst))$
description: Documentation files
```

## Practical Examples

### Documentation Mode
```yaml
groups:
  - read
  - - edit
    - fileRegex: \.(md|mdx|txt|rst)$
      description: Documentation files only
  - browser
```

### Frontend Development Mode
```yaml
groups:
  - read
  - - edit
    - fileRegex: \.(js|jsx|ts|tsx|css|scss|html)$
      description: Frontend files only
  - command
```

### Test Engineering Mode
```yaml
groups:
  - read
  - - edit
    - fileRegex: \.(test|spec)\.(js|ts|py)$
      description: Test files only
  - command
```

### Security Review Mode (Read-Only)
```yaml
groups:
  - read  # No edit permissions for security reviews
  - browser
```

### Configuration Management Mode
```yaml
groups:
  - read
  - - edit
    - fileRegex: \.(json|yaml|yml|toml|ini|env)$
      description: Configuration files only
```

## Pattern Testing

| Pattern | Matches | Doesn't Match |
|---------|---------|---------------|
| `\.md$` | `readme.md`, `docs/guide.md` | `script.js`, `readme.md.bak` |
| `^src/.*` | `src/app.js`, `src/components/button.tsx` | `lib/utils.js`, `test/src/mock.js` |
| `\.(css\|scss)$` | `styles.css`, `theme.scss` | `styles.less`, `styles.css.map` |
| `docs/.*\.md$` | `docs/guide.md`, `docs/api/reference.md` | `guide.md`, `src/docs/notes.md` |
| `^(?!.*(test\|spec)).*\.(js\|ts)$` | `app.js`, `utils.ts` | `app.test.js`, `utils.spec.js` |

## Error Handling

When a mode attempts to edit a file that doesn't match its `fileRegex` pattern:

```
FileRestrictionError: This mode can only edit files matching: \.(md|mdx|txt)$
Attempted to edit: src/app.js
Allowed patterns: Documentation files only
```

## Best Practices

1. **Start Simple**: Begin with basic patterns and add complexity as needed
2. **Test Patterns**: Use online regex testers to validate patterns
3. **Provide Descriptions**: Always include human-readable descriptions
4. **Consider Edge Cases**: Think about file naming conventions in your project
5. **Use Positive Matching**: Prefer matching what you want rather than excluding what you don't
6. **Document Restrictions**: Make it clear to users what files the mode can access

## Next Steps

- **Custom Instructions**: Learn about [Mode-Specific Instructions](./07-mode-instructions.md)
- **Configuration Order**: Understand [Configuration Precedence](./08-configuration-precedence.md)
- **Advanced Patterns**: Explore [Advanced Features](./09-advanced-features.md)