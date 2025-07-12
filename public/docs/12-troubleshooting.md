# Troubleshooting

This guide helps you resolve common issues when working with custom modes in Roo Code.

## Common Issues and Solutions

### Mode Not Appearing in Selector

**Symptoms**: Custom mode doesn't show up in the mode selector

#### Possible Causes and Solutions

**1. YAML Syntax Error**
```yaml
# ❌ Wrong: Invalid YAML formatting
customModes:
- slug: my-mode  # Missing proper indentation
name: My Mode   # Missing dash for array item

# ✅ Correct: Proper YAML formatting
customModes:
  - slug: my-mode
    name: My Mode
    roleDefinition: You are a helpful assistant
    groups: ["read", "edit"]
```

**2. File Location Issues**
```bash
# Check file locations
# Global modes:
~/.roo/custom_modes.yaml

# Project modes:
{project-root}/.roomodes

# Verify the file exists and has correct permissions
ls -la ~/.roo/custom_modes.yaml
ls -la .roomodes
```

**3. Duplicate Slug Conflicts**
```yaml
# ❌ Wrong: Duplicate slugs
customModes:
  - slug: my-mode
    name: First Mode
  - slug: my-mode  # Duplicate slug!
    name: Second Mode

# ✅ Correct: Unique slugs
customModes:
  - slug: my-mode-1
    name: First Mode
  - slug: my-mode-2
    name: Second Mode
```

**4. Missing Required Properties**
```yaml
# ❌ Wrong: Missing required properties
customModes:
  - slug: incomplete-mode
    # Missing name and roleDefinition

# ✅ Correct: All required properties
customModes:
  - slug: complete-mode
    name: Complete Mode
    roleDefinition: You are a helpful assistant
    groups: ["read"]
```

### File Restriction Errors

**Symptoms**: `FileRestrictionError` when trying to edit files

#### Understanding the Error
```
FileRestrictionError: This mode can only edit files matching: \.(md|txt)$
Attempted to edit: src/app.js
Allowed patterns: Documentation files only
```

#### Solutions

**1. Check Regex Pattern**
```yaml
# Debug your regex patterns
groups:
  - read
  - - edit
    - fileRegex: \.(js|ts)$  # Only matches .js and .ts files
      description: JavaScript/TypeScript files

# Test patterns online: regex101.com, regexr.com
```

**2. Common Pattern Fixes**
```yaml
# ❌ Wrong: Missing escape characters
fileRegex: .(js|ts)$  # Matches any character + js|ts

# ✅ Correct: Properly escaped
fileRegex: \.(js|ts)$  # Matches .js or .ts files

# ❌ Wrong: Too restrictive
fileRegex: ^src/app.js$  # Only matches one specific file

# ✅ Correct: Matches pattern
fileRegex: ^src/.*\.js$  # Matches all .js files in src/
```

**3. Multiple File Types**
```yaml
# Support multiple file extensions
groups:
  - read
  - - edit
    - fileRegex: \.(js|jsx|ts|tsx|css|scss|html)$
      description: Frontend development files
```

### Mode Instructions Not Working

**Symptoms**: AI doesn't follow custom instructions

#### Possible Causes and Solutions

**1. Instructions Too Vague**
```yaml
# ❌ Wrong: Vague instructions
customInstructions: "Write good code"

# ✅ Correct: Specific instructions
customInstructions: |
  When writing code:
  - Use TypeScript for type safety
  - Include JSDoc comments for functions
  - Follow the project's ESLint configuration
  - Write unit tests for new functions
```

**2. Conflicting Instructions**
```yaml
# ❌ Wrong: Contradictory requirements
customInstructions: |
  Always use functional programming.
  Use class-based components for React.
  Avoid using any functions.

# ✅ Correct: Consistent guidelines
customInstructions: |
  For React development:
  - Use functional components with hooks
  - Implement proper TypeScript types
  - Follow React best practices
```

**3. Instructions Too Long**
```yaml
# ❌ Wrong: Overwhelming amount of text
customInstructions: |
  [500+ lines of detailed instructions]

# ✅ Correct: Concise, focused instructions
customInstructions: |
  Key principles:
  - Write clean, readable code
  - Include proper error handling
  - Follow team coding standards
  
  For detailed guidelines, see .roo/rules-{slug}/
```

### YAML Formatting Issues

#### Common YAML Mistakes

**1. Indentation Problems**
```yaml
# ❌ Wrong: Using tabs instead of spaces
customModes:
	- slug: my-mode  # Don't use tabs!

# ❌ Wrong: Inconsistent indentation
customModes:
  - slug: my-mode
  name: My Mode  # Wrong indentation level

# ✅ Correct: Consistent 2-space indentation
customModes:
  - slug: my-mode
    name: My Mode
    roleDefinition: You are helpful
```

**2. String Escaping Issues**
```yaml
# ❌ Wrong: Unescaped special characters
fileRegex: .(js|ts)$  # Missing backslash
name: My "Special" Mode  # Unescaped quotes

# ✅ Correct: Proper escaping
fileRegex: \.(js|ts)$
name: 'My "Special" Mode'  # Quoted string
# or
name: "My \"Special\" Mode"  # Escaped quotes
```

**3. Multi-line String Problems**
```yaml
# ❌ Wrong: Improper multi-line syntax
roleDefinition: You are a helpful assistant
that specializes in code review  # This creates a new key!

# ✅ Correct: Using literal block
roleDefinition: |
  You are a helpful assistant
  that specializes in code review

# ✅ Correct: Using folded block
roleDefinition: >
  You are a helpful assistant
  that specializes in code review
```

### Configuration Loading Issues

#### Cache and Reload Problems

**1. Configuration Not Updating**
```bash
# Solution: Reload the window
# In VS Code: Ctrl+Shift+P → "Developer: Reload Window"
# Or restart Roo Code completely
```

**2. Global vs Project Conflicts**
```yaml
# Check precedence order:
# 1. Project modes (.roomodes) - highest priority
# 2. Global modes (custom_modes.yaml)
# 3. Built-in modes - lowest priority

# If project mode isn't working, check for global override
```

### Permission and Access Issues

#### File System Permissions

**1. Cannot Read Configuration File**
```bash
# Check file permissions
ls -la ~/.roo/custom_modes.yaml
ls -la .roomodes

# Fix permissions if needed
chmod 644 ~/.roo/custom_modes.yaml
chmod 644 .roomodes
```

**2. Cannot Write to Project Directory**
```bash
# Check directory permissions
ls -la .roo/

# Create directory if missing
mkdir -p .roo/rules-my-mode/
```

### Import/Export Issues

#### Import Failures

**1. Invalid YAML in Exported File**
```yaml
# Validate exported YAML before importing
# Use online YAML validators or:
python -c "import yaml; yaml.safe_load(open('exported-mode.yaml'))"
```

**2. Conflicting Mode Slugs**
```yaml
# When importing, choose appropriate action:
# - Replace: Override existing mode
# - Skip: Keep existing mode
# - Rename: Modify slug before importing
```

**3. Missing Rule Files**
```yaml
# Ensure all referenced rule files are included
customModes:
  - slug: my-mode
    # ...
    rulesFiles:
      - relativePath: "rules-my-mode/guidelines.md"
        content: "..."  # Content must be present
```

## Debugging Techniques

### Validation Tools

**1. YAML Syntax Validation**
```bash
# Using Python
python -c "import yaml; print(yaml.safe_load(open('.roomodes')))"

# Using online validators
# - yamllint.com
# - codebeautify.org/yaml-validator
```

**2. Regex Pattern Testing**
```bash
# Test regex patterns online:
# - regex101.com
# - regexr.com
# - regexpal.com

# Example test cases:
# Pattern: \.(js|ts)$
# Should match: app.js, utils.ts
# Should not match: app.jsx, README.md
```

### Step-by-Step Debugging

**1. Start Simple**
```yaml
# Begin with minimal configuration
customModes:
  - slug: test-mode
    name: Test Mode
    roleDefinition: You are a test assistant
    groups: ["read"]
```

**2. Add Complexity Gradually**
```yaml
# Add features one at a time
# 1. Basic mode (above)
# 2. Add edit permissions
# 3. Add file restrictions
# 4. Add custom instructions
# 5. Add rule files
```

**3. Test Each Change**
```bash
# After each modification:
# 1. Save the configuration file
# 2. Reload the window
# 3. Check if mode appears in selector
# 4. Test mode functionality
```

### Logging and Diagnostics

**1. Check Console Output**
```bash
# In VS Code:
# 1. Open Developer Tools (Help → Toggle Developer Tools)
# 2. Check Console tab for errors
# 3. Look for Roo-related error messages
```

**2. Enable Debug Mode**
```json
// In VS Code settings.json
{
  "roo.debug": true,
  "roo.logLevel": "debug"
}
```

## Getting Help

### Before Asking for Help

1. **Check this troubleshooting guide**
2. **Validate your YAML syntax**
3. **Test with a minimal configuration**
4. **Check file permissions and locations**
5. **Try reloading the window**

### When Reporting Issues

Include the following information:

1. **Your configuration file** (sanitized)
2. **Error messages** (exact text)
3. **Steps to reproduce** the issue
4. **Expected vs actual behavior**
5. **Roo Code version** and platform

### Example Issue Report

```markdown
## Issue Description
Custom mode not appearing in selector after configuration.

## Configuration
```yaml
customModes:
  - slug: my-mode
    name: My Mode
    roleDefinition: You are helpful
    groups: ["read", "edit"]
```

## Steps to Reproduce
1. Created .roomodes file in project root
2. Added configuration above
3. Reloaded VS Code window
4. Checked mode selector

## Expected Behavior
Mode should appear in selector

## Actual Behavior
Mode does not appear, no error messages

## Environment
- Roo Code version: 1.2.3
- Platform: Windows 10
- VS Code version: 1.80.0
```

## Next Steps

- **Team Collaboration**: Learn about [Team Collaboration](./13-team-collaboration.md)
- **Examples**: Review [Example Configurations](./11-examples.md)
- **API Reference**: Return to [Overview](./01-overview.md)