# Regex Guidance for fileRegex

The `fileRegex` property lets you control which files a mode can edit. Patterns match the full relative file path from your workspace root and are case-sensitive by default.

**YAML vs. JSON:**
- YAML: Use single backslashes (e.g., `\.md$`).
- JSON: Double-escape backslashes (e.g., `\\.md$`).

**Common Pattern Examples:**
In the table below, the 'Pattern (Conceptual / YAML-like)' column shows patterns as they would appear in YAML. For JSON, remember to double-escape backslashes.

| Pattern (Conceptual / YAML-like) | JSON `fileRegex` Value          | Matches                                   | Doesn't Match                         |
| -------------------------------- | ------------------------------- | ----------------------------------------- | ------------------------------------- |
| `\.md$`                          | `"\\.md$"`                      | `readme.md`, `docs/guide.md`              | `script.js`, `readme.md.bak`          |
| `^src/.*`                        | `"^src/.*"`                     | `src/app.js`, `src/components/button.tsx` | `lib/utils.js`, `test/src/mock.js`    |
| `\.(css|scss)$`                  | `"\\.(css|scss)$"`             | `styles.css`, `theme.scss`                | `styles.less`, `styles.css.map`       |
| `docs/.*\.md$`                   | `"docs/.*\\.md$"`               | `docs/guide.md`, `docs/api/reference.md`  | `guide.md`, `src/docs/notes.md`       |
| `^(?!.*(test\|spec))\.(js\|ts)$`  | `"^(?!.*(test\|spec))\\.(js\|ts)$"` | `app.js`, `utils.ts`                      | `app.test.js`, `utils.spec.js`, `app.jsx` |

**Key Regex Building Blocks:**
- `\.`: Matches a literal dot. (YAML: `\.`, JSON: `\\.`)
- `$`: Matches the end of the string.
- `^`: Matches the beginning of the string.
- `.*`: Matches any character (except newline) zero or more times.
- `(a|b)`: Matches either "a" or "b". (e.g., `\.(js|ts)$`)
- `(?!...)`: Negative lookahead.

**Testing Your Patterns:**
1. Test on sample file paths. Online regex testers are helpful.
2. Remember the escaping rules for JSON vs. YAML.
3. Start simple and build complexity.

> **Tip**: **Let Roo Build Your Regex Patterns**
> 
> Instead of writing complex regex manually, ask Roo:
> ```
> Create a regex pattern that matches JavaScript files but excludes test files
> ```
> Roo will generate the pattern. Remember to adapt it for YAML (usually single backslashes) or JSON (double backslashes).

> **Error Handling**: When a mode attempts to edit a file that doesn't match its `fileRegex` pattern, you'll see a `FileRestrictionError` with details about which patterns are allowed.

**Tips:**
- Test your regex on sample file paths.
- Use online regex testers.
- Start simple and build up.

If a file doesn't match, Roo will show a `FileRestrictionError` with allowed patterns.

## Complex File Restrictions

### Conditional Patterns
```yaml
groups:
  - - edit
    - fileRegex: ^(?=.*\.(js|ts)$)(?!.*\.(test|spec)\.).*$
      description: JS/TS files excluding tests
```

### Multiple Restriction Groups
```yaml
groups:
  - read
  - - edit
    - fileRegex: \.(md|txt)$
      description: Documentation files
  - - edit
    - fileRegex: ^config/.*\.(json|yaml)$
      description: Configuration files
```

### Advanced Regex Patterns

#### Lookahead and Lookbehind
```yaml
# Files that contain 'component' but not 'test'
fileRegex: ^(?=.*component)(?!.*test).*\.(js|ts)$

# Files in src/ but not in __tests__ directories
fileRegex: ^src/(?!.*__tests__).*\.(js|ts)$

# Configuration files excluding environment-specific ones
fileRegex: ^(?!.*(dev|prod|staging)).*\.(config|rc)\.(js|json|yaml)$
```

#### Character Classes and Quantifiers
```yaml
# Version-specific files (v1, v2, etc.)
fileRegex: /v\d+/.*\.(js|ts)$

# Files with specific naming patterns
fileRegex: ^[A-Z][a-zA-Z0-9]*\.(component|service|util)\.(js|ts)$

# Documentation with optional numbering
fileRegex: ^docs/\d*-?[a-z-]+\.md$
```