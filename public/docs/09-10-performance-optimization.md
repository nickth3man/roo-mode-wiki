# Performance Optimization

## Efficient File Patterns
```yaml
# Optimized patterns for large codebases
groups:
  - read
  - - edit
    # Use specific directory prefixes to reduce regex overhead
    - fileRegex: ^(src|lib)/.*\.(js|ts)$
      description: Source files only
    # Avoid complex lookaheads in large directories
    - fileRegex: \.(test|spec)\.(js|ts)$
      description: Test files
```

## Lazy Loading Patterns
```yaml
# Minimize initial configuration size
customInstructions: |
  Load additional instructions from:
  - .roo/rules-{slug}/
  - Project-specific documentation
  - Team guidelines repository
```