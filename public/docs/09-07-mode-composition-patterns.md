# Mode Composition Patterns

## Specialized Inheritance
```yaml
# Base documentation mode
- slug: docs-base
  name: 📝 Documentation Base
  roleDefinition: Base documentation writer
  groups: ["read", "edit"]

# Specialized API documentation mode
- slug: api-docs
  name: 🔌 API Documentation
  roleDefinition: >
    You are an API documentation specialist building on
    general documentation expertise.
  groups:
    - read
    - - edit
      - fileRegex: (api|swagger|openapi).*\.(md|yaml|json)$
        description: API documentation files
```

## Role Composition
```yaml
# Combine multiple specializations
roleDefinition: |
  You are a full-stack developer with expertise in:
  
  Frontend Development:
  - React/TypeScript applications
  - Modern CSS and responsive design
  - Component-based architecture
  
  Backend Development:
  - Node.js and Express APIs
  - Database design and optimization
  - Authentication and security
  
  DevOps:
  - CI/CD pipeline configuration
  - Docker containerization
  - Cloud deployment strategies
```