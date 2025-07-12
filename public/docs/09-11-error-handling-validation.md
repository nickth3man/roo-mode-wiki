# Error Handling and Validation

## Graceful Degradation
```yaml
# Fallback configurations
groups:
  - read  # Always available
  - edit  # Fallback to unrestricted edit if regex fails
  # Optional advanced groups
  - browser
  - command
```

## Validation Patterns
```yaml
# Self-documenting validation
roleDefinition: |
  You are a {role} with the following constraints:
  
  VALIDATION RULES:
  - Slug must match: ^[a-z0-9-]+$
  - Name must include emoji and description
  - File patterns must be tested before deployment
  
  CAPABILITIES:
  - {list capabilities based on groups}
```