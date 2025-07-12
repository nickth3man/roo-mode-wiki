# Instruction File Precedence

Roo Code supports two ways to provide mode-specific instructions:

1. **Preferred:** Directory-based (`.roo/rules-{mode-slug}/`)—create a directory in your workspace root (e.g., `.roo/rules-docs-writer/`) and place one or more instruction files inside. Files are loaded recursively and appended in alphabetical order.
2. **Fallback:** Single file (`.roorules-{mode-slug}`)—if the directory does not exist or is empty, Roo loads the root-level file instead.

**Precedence:** The directory method takes priority. If both exist, only the directory is used.

Instructions from files/directories are combined with the `customInstructions` property in your mode configuration.