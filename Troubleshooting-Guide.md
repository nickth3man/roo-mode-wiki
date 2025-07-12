# Roo Custom Modes Troubleshooting Guide

*Solutions to common problems when creating and using custom modes*

---

## Quick Diagnosis

### Is Your Problem...
- [Mode not appearing in selector?](#mode-not-appearing)
- [Can't edit files you should be able to?](#file-access-issues)
- [Getting permission denied errors?](#permission-errors)
- [YAML configuration not loading?](#yaml-syntax-errors)
- [Mode behaving unexpectedly?](#behavior-issues)
- [Migration from JSON failing?](#migration-issues)

---

## Mode Not Appearing

### Symptoms
- Custom mode doesn't show in the mode selector
- Mode was working before but disappeared
- New mode configuration seems ignored

### Diagnostic Steps
1. **Check file location**
   - Global modes: Look for `custom_modes.yaml` in Roo's config directory
   - Project modes: Look for `.roomodes` in project root

2. **Validate YAML syntax**
   ```bash
   # Use online validator or command line
   yamllint custom_modes.yaml
   ```

3. **Check for duplicate slugs**
   - Each `slug` must be unique
   - Search for duplicate slug names

4. **Verify required properties**
   ```yaml
   customModes:
     - slug: required-unique-id
       name: Required Display Name
       roleDefinition: Required AI behavior description
       groups: ["read"]  # At least one group required
   ```

### Solutions

#### Fix YAML Syntax
```yaml
# ❌ Wrong - missing colon
customModes
  - slug: my-mode

# ✅ Correct
customModes:
  - slug: my-mode
```

#### Fix Indentation
```yaml
# ❌ Wrong - inconsistent indentation
customModes:
- slug: my-mode
  name: My Mode
    roleDefinition: Description

# ✅ Correct - consistent 2-space indentation
customModes:
  - slug: my-mode
    name: My Mode
    roleDefinition: Description
```

#### Ensure Unique Slugs
```yaml
# ❌ Wrong - duplicate slugs
customModes:
  - slug: writer
    name: Doc Writer
  - slug: writer  # Duplicate!
    name: Content Writer

# ✅ Correct - unique slugs
customModes:
  - slug: doc-writer
    name: Doc Writer
  - slug: content-writer
    name: Content Writer
```

---

## File Access Issues

### Symptoms
- Mode can't edit files it should be able to
- "File not accessible" errors
- Edit operations fail silently

### Diagnostic Steps
1. **Check edit group configuration**
   ```yaml
   groups:
     - read
     - edit  # Basic edit access
   ```

2. **Test file regex patterns**
   - Use [regex101.com](https://regex101.com) to test patterns
   - Test with actual file paths from your project

3. **Verify file exists and is readable**
   - Check file permissions
   - Ensure file isn't locked by another process

### Solutions

#### Add Edit Permissions
```yaml
# ❌ Wrong - no edit access
groups:
  - read
  - browser

# ✅ Correct - includes edit access
groups:
  - read
  - edit
  - browser
```

#### Fix File Regex Patterns
```yaml
# ❌ Wrong - doesn't escape dots
fileRegex: .md$  # Matches any character + md

# ✅ Correct - escapes dots properly
fileRegex: \.md$  # Matches literal .md extension
```

#### Common Regex Patterns
```yaml
# Multiple extensions
fileRegex: \.(md|txt|rst)$

# Files in specific directory
fileRegex: ^docs/.*\.md$

# Test files anywhere
fileRegex: \.(test|spec)\.(js|ts)$

# Exclude node_modules
fileRegex: ^(?!.*node_modules).*\.(js|ts)$
```

---

## Permission Errors

### Symptoms
- "Permission denied" when trying to use tools
- Commands fail to execute
- Browser access blocked

### Diagnostic Steps
1. **Check required tool groups**
   - `command` group needed for terminal access
   - `browser` group needed for web access
   - `mcp` group needed for MCP tools

2. **Verify group syntax**
   ```yaml
   groups:
     - read
     - edit
     - command  # Not "commands"
     - browser  # Not "browse"
   ```

### Solutions

#### Add Missing Tool Groups
```yaml
# ❌ Wrong - missing command group
groups:
  - read
  - edit

# ✅ Correct - includes command group
groups:
  - read
  - edit
  - command
```

#### Fix Group Names
```yaml
# ❌ Wrong - incorrect group names
groups:
  - reading      # Should be "read"
  - editing      # Should be "edit"
  - commands     # Should be "command"
  - browsing     # Should be "browser"

# ✅ Correct - proper group names
groups:
  - read
  - edit
  - command
  - browser
```

---

## YAML Syntax Errors

### Symptoms
- Configuration file won't load
- "Invalid YAML" errors
- Mode configuration ignored

### Common YAML Mistakes

#### Indentation Issues
```yaml
# ❌ Wrong - mixed tabs and spaces
customModes:
	- slug: my-mode    # Tab used here
  name: My Mode      # Spaces used here

# ✅ Correct - consistent spaces
customModes:
  - slug: my-mode
    name: My Mode
```

#### Missing Colons
```yaml
# ❌ Wrong - missing colon after key
customModes
  - slug: my-mode

# ✅ Correct - colon after key
customModes:
  - slug: my-mode
```

#### Incorrect List Syntax
```yaml
# ❌ Wrong - missing hyphen for list item
customModes:
  slug: my-mode
  name: My Mode

# ✅ Correct - hyphen for list item
customModes:
  - slug: my-mode
    name: My Mode
```

#### String Escaping Issues
```yaml
# ❌ Wrong - unescaped special characters
fileRegex: .(js|ts)$

# ✅ Correct - properly escaped
fileRegex: \.(js|ts)$
```

### Validation Tools
- [YAML Lint](http://www.yamllint.com/)
- [Online YAML Parser](https://yaml-online-parser.appspot.com/)
- VS Code YAML extension

---

## Behavior Issues

### Symptoms
- Mode doesn't behave as expected
- AI doesn't follow role definition
- Instructions seem ignored

### Diagnostic Steps
1. **Review role definition clarity**
   - Is the role specific enough?
   - Are expectations clearly stated?

2. **Check custom instructions**
   - Are they actionable?
   - Do they conflict with role definition?

3. **Test with simple tasks**
   - Start with basic requests
   - Gradually increase complexity

### Solutions

#### Improve Role Definition
```yaml
# ❌ Vague - too general
roleDefinition: You are a developer.

# ✅ Specific - clear expertise and approach
roleDefinition: |
  You are a Python developer specializing in data analysis.
  Focus on writing clean, well-documented code using pandas
  and numpy. Prioritize performance and readability.
```

#### Add Specific Instructions
```yaml
customInstructions: |
  When writing code:
  1. Always include type hints
  2. Add docstrings for functions
  3. Use meaningful variable names
  4. Follow PEP 8 style guidelines
  
  When reviewing code:
  1. Check for potential bugs
  2. Suggest performance improvements
  3. Verify error handling
```

#### Use When-To-Use Guidance
```yaml
whenToUse: |
  Use this mode when:
  - Writing Python data analysis scripts
  - Reviewing data processing code
  - Creating data visualization
  - Optimizing pandas operations
```

---

## Migration Issues

### Symptoms
- JSON to YAML migration failed
- Configuration lost during migration
- Both JSON and YAML files exist

### Diagnostic Steps
1. **Check for both file formats**
   - Look for both `.json` and `.yaml` files
   - Determine which one is being used

2. **Validate migrated content**
   - Compare original JSON with new YAML
   - Ensure all modes were migrated

3. **Test migrated configuration**
   - Load modes and verify they work
   - Check all properties transferred correctly

### Solutions

#### Manual Migration Process
1. **Backup original file**
   ```bash
   cp custom_modes.json custom_modes.json.backup
   ```

2. **Convert JSON to YAML**
   ```yaml
   # Original JSON
   {
     "customModes": [{
       "slug": "writer",
       "name": "Writer",
       "groups": ["read", "edit"]
     }]
   }
   
   # Converted YAML
   customModes:
     - slug: writer
       name: Writer
       groups:
         - read
         - edit
   ```

3. **Validate and test**
   - Use YAML validator
   - Test mode functionality
   - Remove old JSON file when confirmed working

#### Handle Conflicting Files
```bash
# If both files exist, Roo uses YAML
# Safely remove JSON after confirming YAML works
rm custom_modes.json  # Only after testing!
```

---

## Advanced Debugging

### Enable Debug Logging
1. Check Roo Code logs for error messages
2. Look for configuration parsing errors
3. Monitor file system permissions

### Test Configuration Incrementally
1. Start with minimal configuration
2. Add properties one at a time
3. Test after each addition

### Isolate Issues
1. Create test mode with basic configuration
2. Copy working configuration as template
3. Compare working vs non-working configurations

---

## Getting Help

### Before Asking for Help
1. ✅ Check this troubleshooting guide
2. ✅ Validate YAML syntax
3. ✅ Test with minimal configuration
4. ✅ Check file permissions
5. ✅ Review error messages carefully

### When Asking for Help
Include:
- Your configuration file (sanitized)
- Error messages (exact text)
- Steps to reproduce the issue
- Expected vs actual behavior
- Roo Code version
- Operating system

### Community Resources
- [Roo Code Documentation](https://docs.roo.dev)
- [Community Forums](https://community.roo.dev)
- [GitHub Issues](https://github.com/roo-dev/roo-code)

---

*For more information, see the [main wiki](./Roo-Modes-Wiki.md) or [quick reference](./Quick-Reference.md)*