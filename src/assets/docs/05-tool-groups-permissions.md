# Tool Groups and Permissions

Tool groups define what operations a mode can perform. Each group provides access to specific sets of tools that enable different capabilities.

**Available Tool Groups**: `"read"`, `"search"`, `"edit"`, `"browser"`, `"command"`, `"mcp"`, `"workflow"`

## Available Tool Groups

### `read` Group
**Purpose**: File system reading and code exploration

**Available Tools**:
- `read_file`: Examine file contents
- `list_files`: Map project file structure
- `list_code_definition_names`: Create structural code maps

**Common Use Cases**: Code analysis, documentation review, understanding project structure

```yaml
groups:
  - read  # Basic file reading capabilities
```

### `search` Group
**Purpose**: Pattern and semantic searching

**Available Tools**:
- `search_files`: Find patterns across multiple files using regex
- `codebase_search`: Perform semantic searches across your indexed codebase

**Common Use Cases**: Finding code patterns and functionality, locating specific implementations, code analysis across multiple files

```yaml
groups:
  - search
```

### `edit` Group
**Purpose**: File system modifications and content creation

**Available Tools**:
- `apply_diff`: Make precise, surgical code changes
- `insert_content`: Add new content without modifying existing lines
- `search_and_replace`: Find and replace text or regex patterns
- `write_to_file`: Create new files or completely rewrite existing ones

**File Restrictions**: Can be configured with `fileRegex` patterns to limit which files can be modified

```yaml
# Basic edit access
groups:
  - edit

# Restricted edit access
groups:
  - - edit
    - fileRegex: \.(js|ts)$
      description: JavaScript/TypeScript files only
```

### `browser` Group
**Purpose**: Web automation and browser interactions

**Available Tools**:
- `browser_action`: Automate browser interactions, web testing, form filling

**Common Use Cases**: Web testing, UI automation, web scraping, form interactions

```yaml
groups:
  - browser
```

### `command` Group
**Purpose**: System command execution and script running

**Available Tools**:
- `execute_command`: Run system commands, scripts, build tools, package managers

**Security Considerations**: Provides powerful system access - use carefully

**Common Use Cases**: Building projects, running tests, package management, deployment scripts

```yaml
groups:
  - command
```

### `mcp` Group
**Purpose**: External tool integration via Model Context Protocol

**Available Tools**:
- `use_mcp_tool`: Access specialized external tools
- `access_mcp_resource`: Access external data sources

**Common Use Cases**: Database access, API integrations, specialized analysis tools

```yaml
groups:
  - mcp
```

### `workflow` Group
**Purpose**: Mode and task management

**Available Tools**:
- `switch_mode`: Change to a different mode for specialized tasks
- `new_task`: Create a new subtask
- `ask_followup_question`: Get additional information from users
- `attempt_completion`: Present final results

**Common Use Cases**: Context switching and task organization, managing complex workflows, user interaction and feedback

```yaml
groups:
  - workflow
```

## Always Available Tools

Certain tools are accessible regardless of the current mode's group configuration:

- `ask_followup_question`: Gather additional information from users
- `attempt_completion`: Signal task completion
- `switch_mode`: Change operational modes
- `new_task`: Create subtasks

## Group Combinations

Most modes use multiple tool groups to provide comprehensive capabilities:

```yaml
# Full-featured development mode
groups:
  - read
  - edit
  - browser
  - command

# Documentation-focused mode
groups:
  - read
  - - edit
    - fileRegex: \.(md|mdx|txt|rst)$
      description: Documentation files only
  - browser

# Read-only analysis mode
groups:
  - read
  - browser

# Restricted testing mode
groups:
  - read
  - - edit
    - fileRegex: \.(test|spec)\.(js|ts)$
      description: Test files only
  - command
```

## Next Steps

- **File Control**: Learn about [File Restrictions](./06-file-restrictions.md)
- **Custom Instructions**: Set up [Mode-Specific Instructions](./07-mode-instructions.md)
- **Advanced Patterns**: Explore [Advanced Features](./09-advanced-features.md)