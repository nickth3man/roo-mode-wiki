# Roo Custom Modes Quick Reference

*Fast lookup guide for common tasks and configurations*

---

## Essential Commands

### Create a Mode (Ask Roo)
```
"Create a mode for [specific task] that only [specific permissions]"
```

### Access Mode Configuration
1. Click notebook icon → Settings gear → Edit Modes
2. Or edit files directly:
   - Global: `custom_modes.yaml`
   - Project: `.roomodes`

---

## Quick Templates

### Basic Read-Only Mode
```yaml
customModes:
  - slug: reviewer
    name: 👀 Code Reviewer
    roleDefinition: You are a code reviewer focusing on best practices.
    groups:
      - read
      - browser
```

### Documentation Writer
```yaml
customModes:
  - slug: docs
    name: 📝 Docs Writer
    roleDefinition: You are a technical writer.
    groups:
      - read
      - edit:
          - fileRegex: \.(md|txt)$
      - browser
```

### Frontend Developer
```yaml
customModes:
  - slug: frontend
    name: 🎨 Frontend Dev
    roleDefinition: You are a frontend developer.
    groups:
      - read
      - edit:
          - fileRegex: \.(js|jsx|ts|tsx|css|html)$
      - command
      - browser
```

### Test Engineer
```yaml
customModes:
  - slug: tester
    name: 🧪 Test Engineer
    roleDefinition: You are a test engineer specializing in automated testing.
    groups:
      - read
      - edit:
          - fileRegex: \.(test|spec)\.
      - command
```

---

## File Restriction Patterns

| Pattern | Matches |
|---------|----------|
| `\.md$` | Markdown files |
| `\.(js\|ts)$` | JavaScript/TypeScript |
| `\.(test\|spec)\.` | Test files |
| `^src/.*\.py$` | Python files in src/ |
| `^docs/` | Files in docs directory |
| `\.(json\|yaml\|yml)$` | Config files |

---

## Tool Groups

| Group | Purpose | Risk Level |
|-------|---------|------------|
| `read` | View files | ✅ Safe |
| `edit` | Modify files | ⚠️ Medium |
| `command` | Run commands | ❌ High |
| `browser` | Web access | ✅ Safe |
| `mcp` | Extended tools | ⚠️ Varies |

---

## Common Issues & Quick Fixes

### Mode Not Showing
- Check YAML syntax
- Ensure unique slug
- Restart Roo Code

### Can't Edit Files
- Add `edit` group
- Check `fileRegex` pattern
- Verify file exists

### Permission Denied
- Add required tool groups
- Adjust file restrictions
- Check file permissions

### YAML Errors
- Use spaces, not tabs
- Check colons and hyphens
- Validate syntax online

---

## Required vs Optional Properties

### Required ✅
- `slug` - Unique identifier
- `name` - Display name
- `roleDefinition` - AI behavior
- `groups` - Tool permissions

### Optional ➕
- `description` - Brief summary
- `whenToUse` - Usage guidance
- `customInstructions` - Detailed rules
- `iconName` - VS Code icon

---

## Security Checklist

- [ ] Use most restrictive permissions needed
- [ ] Apply file restrictions for edit access
- [ ] Avoid command group unless necessary
- [ ] Test file patterns work correctly
- [ ] Document security decisions
- [ ] Regular permission reviews

---

*For detailed information, see the [main wiki](./Roo-Modes-Wiki.md)*