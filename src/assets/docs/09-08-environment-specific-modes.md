# Environment-Specific Modes

## Development vs Production
```yaml
# Development mode with full access
- slug: dev-mode
  name: 🛠️ Development
  groups: ["read", "edit", "command", "browser"]

# Production mode with restricted access
- slug: prod-mode
  name: 🚀 Production
  groups: ["read"]  # Read-only for production
```

## Technology Stack Variations
```yaml
# React project mode
- slug: react-dev
  name: ⚛️ React Developer
  groups:
    - read
    - - edit
      - fileRegex: \.(jsx?|tsx?|css|scss|json)$
        description: React project files
    - browser

# Python project mode
- slug: python-dev
  name: 🐍 Python Developer
  groups:
    - read
    - - edit
      - fileRegex: \.(py|pyi|toml|txt|md)$
        description: Python project files
    - command
```