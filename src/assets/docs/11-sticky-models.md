# Sticky Models

Roo Code's "Sticky Models" feature allows you to assign a specific AI model to a mode. When that mode is active, Roo will automatically use the designated model for all interactions, overriding the default model selection.

This is useful when a particular model is better suited for the tasks you perform in that mode. For example, you might use a powerful model for coding tasks in "Code Mode" and a faster, more conversational model for general questions in "Ask Mode."

## Configuration

To assign a model to a mode, you add the `model` property to your mode's configuration file (`mode.yaml` or `mode.json`).

### Example

Here's an example of how to assign the `claude-3-opus-20240229` model to a custom "Code Review" mode:

```yaml
slug: "code-review"
name: "Code Review"
description: "A mode for reviewing code and providing feedback."
role_definition: "You are an expert code reviewer. Your goal is to provide constructive feedback on code quality, style, and potential bugs."
available_tools:
  - "read"
  - "search"
when_to_use: "When you need to review a pull request or a code snippet."
custom_instructions: "Focus on providing clear and actionable feedback. Be polite and respectful in your comments."
model: "claude-3-opus-20240229"
```