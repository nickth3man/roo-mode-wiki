# YAML/JSON Configuration and Migration

Roo Code supports both YAML (preferred) and JSON for custom mode configuration. YAML offers better readability, comments, and multi-line string support. JSON remains supported for backward compatibility.

**Migration:**
- Global: If `custom_modes.json` exists and no YAML file is present, Roo Code auto-migrates to YAML on startup.
- Project: `.roomodes` files can be YAML or JSON. Roo detects the format automatically. Editing via the UI converts JSON to YAML.

**Tips:**
- Indentation is key in YAML (use spaces, not tabs).
- Use colons for key-value pairs and hyphens for list items.
- Validate YAML with online tools or your editor.

## Multi-line String Handling

YAML provides several ways to handle multi-line strings:

### Literal Block (`|`)
Preserves line breaks and formatting:

```yaml
roleDefinition: |
  You are a security specialist.
  Core expertise includes:
  - Vulnerability assessment
  - Secure coding practices
```

### Folded Block (`>`)
Folds line breaks into spaces:

```yaml
roleDefinition: >
  You are a security specialist with expertise in vulnerability assessment and secure coding practices.
```

### Folded Block with Strip (`>-`)
Folds lines and strips final line breaks:

```yaml
roleDefinition: >-
  You are a security specialist with expertise in:
  - Vulnerability assessment
  - Secure coding practices
```