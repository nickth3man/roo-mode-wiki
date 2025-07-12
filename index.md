# Roo Custom Modes Knowledge Base

*Your complete guide to mastering custom modes in Roo Code*

---

## 🚀 Start Here

### New to Custom Modes?
- **[What Are Custom Modes?](./Roo-Modes-Wiki.md#what-are-custom-modes)** - Understanding the basics
- **[Quick Start Guide](./Roo-Modes-Wiki.md#quick-start-guide)** - Create your first mode in minutes
- **[Your First Custom Mode](./Roo-Modes-Wiki.md#your-first-custom-mode)** - Step-by-step tutorial

### Need Something Specific?
- **[Quick Reference](./Quick-Reference.md)** - Fast lookup for common tasks
- **[Troubleshooting Guide](./Troubleshooting-Guide.md)** - Fix common problems
- **[Example Configurations](./Roo-Modes-Wiki.md#example-configurations)** - Ready-to-use templates

---

## 📚 Browse by Topic

### Getting Started
| Topic | Description | Link |
|-------|-------------|------|
| **Overview** | What custom modes are and why use them | [View →](./Roo-Modes-Wiki.md#what-are-custom-modes) |
| **Quick Start** | Three ways to create your first mode | [View →](./Roo-Modes-Wiki.md#quick-start-guide) |
| **First Mode** | Complete tutorial with examples | [View →](./Roo-Modes-Wiki.md#your-first-custom-mode) |

### Configuration
| Topic | Description | Link |
|-------|-------------|------|
| **Creating Modes** | Essential properties and best practices | [View →](./Roo-Modes-Wiki.md#creating-modes) |
| **Permissions** | Tool groups and access control | [View →](./Roo-Modes-Wiki.md#configuring-permissions) |
| **File Access** | Restricting which files modes can edit | [View →](./Roo-Modes-Wiki.md#managing-file-access) |
| **Properties Reference** | Complete list of all configuration options | [View →](./Roo-Modes-Wiki.md#configuration-properties) |

### Team & Collaboration
| Topic | Description | Link |
|-------|-------------|------|
| **Team Setup** | Global vs project modes, sharing strategies | [View →](./Roo-Modes-Wiki.md#team-collaboration) |
| **Best Practices** | Security, maintenance, and team guidelines | [View →](./Roo-Modes-Wiki.md#best-practices) |
| **Migration** | Moving from JSON to YAML format | [View →](./Troubleshooting-Guide.md#migration-issues) |

---

## 🎯 Browse by Role

### I'm a Developer
**What you need:**
- [Creating specialized modes for different tasks](./Roo-Modes-Wiki.md#creating-modes)
- [File restriction patterns for security](./Roo-Modes-Wiki.md#file-restriction-patterns)
- [Example configurations for common scenarios](./Roo-Modes-Wiki.md#example-configurations)
- [Quick reference for daily use](./Quick-Reference.md)

**Start here:** [Configuration Properties →](./Roo-Modes-Wiki.md#configuration-properties)

### I'm a Team Lead
**What you need:**
- [Team collaboration strategies](./Roo-Modes-Wiki.md#team-collaboration)
- [Security best practices](./Roo-Modes-Wiki.md#best-practices)
- [Global vs project mode decisions](./Roo-Modes-Wiki.md#team-collaboration)
- [Sharing and standardization approaches](./Roo-Modes-Wiki.md#team-collaboration)

**Start here:** [Team Collaboration →](./Roo-Modes-Wiki.md#team-collaboration)

### I'm New to Roo Code
**What you need:**
- [Understanding what custom modes are](./Roo-Modes-Wiki.md#what-are-custom-modes)
- [Simple examples to get started](./Roo-Modes-Wiki.md#your-first-custom-mode)
- [Basic configuration concepts](./Roo-Modes-Wiki.md#creating-modes)
- [Common use cases and benefits](./Roo-Modes-Wiki.md#what-are-custom-modes)

**Start here:** [What Are Custom Modes? →](./Roo-Modes-Wiki.md#what-are-custom-modes)

### I'm Troubleshooting
**What you need:**
- [Common problems and solutions](./Troubleshooting-Guide.md)
- [YAML syntax validation](./Troubleshooting-Guide.md#yaml-syntax-errors)
- [Permission and access issues](./Troubleshooting-Guide.md#permission-errors)
- [Migration problems](./Troubleshooting-Guide.md#migration-issues)

**Start here:** [Troubleshooting Guide →](./Troubleshooting-Guide.md)

---

## 🔍 Browse by Task

### I Want to Create a Mode for...

#### Documentation Writing
- **Template:** [Documentation Writer Example](./Roo-Modes-Wiki.md#documentation-writer)
- **File Restrictions:** `\.(md|mdx|txt|rst)$`
- **Permissions:** `read`, `edit` (restricted), `browser`

#### Security Reviews
- **Template:** [Security Auditor Example](./Roo-Modes-Wiki.md#security-auditor)
- **File Restrictions:** Read-only access
- **Permissions:** `read`, `browser`

#### Testing
- **Template:** [Test Engineer Example](./Roo-Modes-Wiki.md#test-engineer)
- **File Restrictions:** `\.(test|spec)\.(js|ts|py)$`
- **Permissions:** `read`, `edit` (restricted), `command`

#### API Development
- **Template:** [API Designer Example](./Roo-Modes-Wiki.md#api-designer)
- **File Restrictions:** `\.(js|ts|json|yaml|md)$`
- **Permissions:** `read`, `edit` (restricted), `command`, `browser`

#### Frontend Development
- **Template:** [Frontend Developer Example](./Roo-Modes-Wiki.md#frontend-developer)
- **File Restrictions:** `\.(js|jsx|ts|tsx|css|scss|html|vue)$`
- **Permissions:** `read`, `edit` (restricted), `browser`, `command`

### I Need to Fix...

#### Mode Not Appearing
1. [Check YAML syntax](./Troubleshooting-Guide.md#yaml-syntax-errors)
2. [Verify unique slug](./Troubleshooting-Guide.md#mode-not-appearing)
3. [Confirm required properties](./Troubleshooting-Guide.md#mode-not-appearing)

#### Permission Denied Errors
1. [Add missing tool groups](./Troubleshooting-Guide.md#permission-errors)
2. [Check file restrictions](./Troubleshooting-Guide.md#file-access-issues)
3. [Verify group syntax](./Troubleshooting-Guide.md#permission-errors)

#### File Access Issues
1. [Test regex patterns](./Troubleshooting-Guide.md#file-access-issues)
2. [Add edit permissions](./Troubleshooting-Guide.md#file-access-issues)
3. [Check file existence](./Troubleshooting-Guide.md#file-access-issues)

---

## 📖 Complete Documentation

### Main Guides
- **[Roo Modes Wiki](./Roo-Modes-Wiki.md)** - Complete comprehensive guide
- **[Quick Reference](./Quick-Reference.md)** - Fast lookup and templates
- **[Troubleshooting Guide](./Troubleshooting-Guide.md)** - Problem-solving guide

### Key Sections
1. **[Understanding Custom Modes](./Roo-Modes-Wiki.md#what-are-custom-modes)**
2. **[Configuration Guide](./Roo-Modes-Wiki.md#creating-modes)**
3. **[Permission Management](./Roo-Modes-Wiki.md#configuring-permissions)**
4. **[File Access Control](./Roo-Modes-Wiki.md#managing-file-access)**
5. **[Team Collaboration](./Roo-Modes-Wiki.md#team-collaboration)**
6. **[Example Configurations](./Roo-Modes-Wiki.md#example-configurations)**
7. **[Best Practices](./Roo-Modes-Wiki.md#best-practices)**

---

## 🛠️ Quick Actions

### Common Tasks
- **Create a basic mode:** Use [Quick Reference templates](./Quick-Reference.md#quick-templates)
- **Fix YAML errors:** Check [syntax troubleshooting](./Troubleshooting-Guide.md#yaml-syntax-errors)
- **Set up team modes:** Follow [collaboration guide](./Roo-Modes-Wiki.md#team-collaboration)
- **Migrate from JSON:** Use [migration guide](./Troubleshooting-Guide.md#migration-issues)

### Emergency Fixes
- **Mode disappeared:** [Diagnostic steps](./Troubleshooting-Guide.md#mode-not-appearing)
- **Can't edit files:** [Permission fixes](./Troubleshooting-Guide.md#file-access-issues)
- **Configuration broken:** [YAML validation](./Troubleshooting-Guide.md#yaml-syntax-errors)

---

## 📋 Checklists

### Creating a New Mode
- [ ] Choose unique slug
- [ ] Write clear role definition
- [ ] Set appropriate permissions
- [ ] Add file restrictions if needed
- [ ] Test with simple tasks
- [ ] Document purpose and usage

### Security Review
- [ ] Use least privilege principle
- [ ] Restrict file access appropriately
- [ ] Avoid command group unless necessary
- [ ] Test file regex patterns
- [ ] Document security decisions

### Team Setup
- [ ] Decide global vs project modes
- [ ] Establish naming conventions
- [ ] Create shared documentation
- [ ] Set up version control
- [ ] Plan regular reviews

---

## 🔗 External Resources

### Official Documentation
- [Roo Code Documentation](https://docs.roo.dev)
- [Community Gallery](https://community.roo.dev)
- [GitHub Repository](https://github.com/roo-dev/roo-code)

### Tools & Utilities
- [YAML Validator](https://yamlchecker.com/)
- [Regex Tester](https://regex101.com/)
- [VS Code Icons Reference](https://microsoft.github.io/vscode-codicons/dist/codicon.html)

### Community
- Share your modes with the community
- Learn from other developers
- Contribute to the knowledge base

---

## 📝 About This Wiki

This knowledge base was created following the principles from "The Complete Guide to Creating and Organizing a Wiki" to provide:

- **Multiple Entry Points** - Find information through different pathways
- **Context-Driven Organization** - Organized around user goals and tasks
- **Progressive Disclosure** - Start simple, add complexity as needed
- **Practical Focus** - Real-world examples and solutions

### Contributing
This wiki is based on the official Roo Custom Modes API documentation. For updates or corrections, please refer to the main project repository.

---

*Last updated: December 2024 | Based on Roo Custom Modes API Documentation*