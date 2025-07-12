# Team Collaboration

This guide covers best practices for using custom modes in team environments, ensuring consistency and productivity across your development team.

## Team Setup Strategies

### Centralized Mode Management

#### Repository-Based Approach
```
project/
├── .roo-modes/
│   ├── team-standards.yaml
│   ├── project-specific.yaml
│   └── README.md
├── .roomodes  # Project-level modes
└── docs/
    └── roo-modes-guide.md
```

**Benefits**:
- Version-controlled mode configurations
- Easy distribution to team members
- Clear documentation and guidelines
- Consistent team standards

#### Implementation
```yaml
# .roo-modes/team-standards.yaml
customModes:
  - slug: team-reviewer
    name: 👥 Team Code Reviewer
    description: Standard code review mode for our team
    roleDefinition: |
      You are a code reviewer following our team's established standards.
      Focus on code quality, security, and maintainability.
    groups:
      - read
      - browser
    rulesFiles:
      - relativePath: "rules-team-reviewer/coding-standards.md"
        content: |
          # Team Coding Standards
          
          ## Code Quality
          - Use TypeScript for all new code
          - Follow ESLint configuration
          - Include unit tests for all functions
          - Use meaningful variable and function names
          
          ## Security
          - Validate all user inputs
          - Use parameterized queries
          - Implement proper authentication
          - Follow OWASP guidelines
```

### Distributed Mode Sharing

#### Individual Contributions
```yaml
# team-member-1-modes.yaml
customModes:
  - slug: react-specialist
    name: ⚛️ React Specialist
    description: Advanced React development patterns
    # ... configuration

# team-member-2-modes.yaml
customModes:
  - slug: api-architect
    name: 🏗️ API Architect
    description: RESTful API design and implementation
    # ... configuration
```

**Workflow**:
1. Team members create specialized modes
2. Share via export/import functionality
3. Team evaluates and adopts useful modes
4. Integrate into team standards

## Role-Based Mode Organization

### Development Roles

#### Frontend Developer
```yaml
customModes:
  - slug: frontend-dev
    name: 🎨 Frontend Developer
    description: Frontend development with modern frameworks
    roleDefinition: |
      You are a frontend developer experienced with React, TypeScript,
      and modern CSS frameworks. Focus on user experience and performance.
    groups:
      - read
      - - edit
        - fileRegex: \.(jsx?|tsx?|css|scss|html|vue)$
          description: Frontend files
      - browser
      - command
```

#### Backend Developer
```yaml
customModes:
  - slug: backend-dev
    name: 🔧 Backend Developer
    description: Backend API and service development
    roleDefinition: |
      You are a backend developer specializing in APIs, databases,
      and server-side architecture.
    groups:
      - read
      - - edit
        - fileRegex: \.(py|js|ts|go|java|sql)$
          description: Backend source files
      - command
```

#### DevOps Engineer
```yaml
customModes:
  - slug: devops-engineer
    name: 🚀 DevOps Engineer
    description: Infrastructure and deployment automation
    roleDefinition: |
      You are a DevOps engineer focused on CI/CD, infrastructure as code,
      and deployment automation.
    groups:
      - read
      - - edit
        - fileRegex: \.(yml|yaml|tf|hcl|sh|Dockerfile)$
          description: Infrastructure files
      - command
```

### Review and Quality Assurance

#### Senior Developer/Tech Lead
```yaml
customModes:
  - slug: tech-lead
    name: 🎯 Technical Lead
    description: Architecture decisions and code quality oversight
    roleDefinition: |
      You are a technical lead responsible for architecture decisions,
      code quality standards, and mentoring team members.
    groups:
      - read
      - - edit
        - fileRegex: \.(md|yaml|json|config)$
          description: Documentation and configuration
      - browser
```

#### QA Engineer
```yaml
customModes:
  - slug: qa-engineer
    name: 🧪 QA Engineer
    description: Quality assurance and testing specialist
    roleDefinition: |
      You are a QA engineer focused on comprehensive testing,
      quality assurance, and bug prevention.
    groups:
      - read
      - - edit
        - fileRegex: \.(test|spec)\.(js|ts|py)$
          description: Test files only
      - command
```

## Project-Specific Configurations

### Technology Stack Alignment

#### React/TypeScript Project
```yaml
# .roomodes
customModes:
  - slug: project-developer
    name: 💻 Project Developer
    description: Developer mode for this React/TypeScript project
    roleDefinition: |
      You are a developer working on this React TypeScript project.
      Follow the established patterns and conventions.
    groups:
      - read
      - - edit
        - fileRegex: ^(src|public)/.*\.(tsx?|jsx?|css|scss|json|md)$
          description: Project source files
      - browser
      - command
    customInstructions: |
      Project-specific guidelines:
      - Use the existing component structure in src/components/
      - Follow the established TypeScript interfaces
      - Use the project's custom hooks from src/hooks/
      - Follow the CSS module naming convention
```

#### Python/Django Project
```yaml
customModes:
  - slug: django-developer
    name: 🐍 Django Developer
    description: Developer mode for this Django project
    roleDefinition: |
      You are a Python developer working on this Django project.
      Follow Django best practices and project conventions.
    groups:
      - read
      - - edit
        - fileRegex: \.(py|html|css|js|json|yaml|md)$
          description: Django project files
      - command
    customInstructions: |
      Django project guidelines:
      - Follow the existing app structure
      - Use Django's built-in authentication
      - Follow PEP 8 style guidelines
      - Use the project's custom managers and querysets
```

## Onboarding New Team Members

### Quick Start Package

#### Welcome Mode
```yaml
customModes:
  - slug: team-onboarding
    name: 👋 Team Onboarding
    description: Getting started mode for new team members
    roleDefinition: |
      You are helping a new team member get familiar with our codebase,
      development practices, and team standards.
    groups:
      - read
      - browser
    customInstructions: |
      Onboarding focus:
      - Explain project structure and architecture
      - Highlight important files and directories
      - Point out team conventions and standards
      - Suggest relevant documentation to read
      - Help understand the development workflow
```

#### Setup Instructions
```markdown
# Team Roo Modes Setup

## Quick Start
1. Import team standard modes:
   - Download `team-standards.yaml` from the repository
   - Import at project level in Roo Code

2. Configure your personal modes:
   - Import role-specific modes based on your responsibilities
   - Customize as needed for your workflow

3. Project-specific setup:
   - Project modes are automatically loaded from `.roomodes`
   - Additional rules are in `.roo/rules-*/` directories

## Available Modes
- **Team Reviewer**: Standard code review mode
- **Frontend Dev**: React/TypeScript development
- **Backend Dev**: API and service development
- **DevOps**: Infrastructure and deployment
- **QA Engineer**: Testing and quality assurance
```

## Maintenance and Updates

### Version Control Strategy

#### Mode Versioning
```yaml
# team-standards-v2.yaml
metadata:
  version: "2.0"
  lastUpdated: "2024-01-15"
  changes:
    - "Added security review guidelines"
    - "Updated TypeScript patterns"
    - "Enhanced file restrictions"

customModes:
  - slug: team-reviewer-v2
    name: 👥 Team Code Reviewer v2
    # ... updated configuration
```

#### Change Management
```markdown
# Mode Update Process

1. **Propose Changes**
   - Create issue or discussion
   - Explain rationale for changes
   - Get team feedback

2. **Test Updates**
   - Test new configurations locally
   - Validate with sample projects
   - Ensure backward compatibility

3. **Deploy Changes**
   - Update repository files
   - Notify team of changes
   - Provide migration instructions

4. **Monitor Adoption**
   - Check team usage
   - Gather feedback
   - Make adjustments as needed
```

### Regular Reviews

#### Monthly Mode Audit
```markdown
# Mode Review Checklist

## Usage Analysis
- [ ] Which modes are most/least used?
- [ ] Are there gaps in current mode coverage?
- [ ] Do modes align with current project needs?

## Quality Assessment
- [ ] Are file restrictions still appropriate?
- [ ] Do role definitions match current responsibilities?
- [ ] Are custom instructions clear and helpful?

## Team Feedback
- [ ] Survey team satisfaction with current modes
- [ ] Collect suggestions for improvements
- [ ] Identify pain points or missing functionality

## Updates Needed
- [ ] Technology stack changes
- [ ] New team roles or responsibilities
- [ ] Updated coding standards or practices
```

## Best Practices

### Communication

1. **Clear Documentation**
   - Document mode purposes and usage
   - Provide examples and guidelines
   - Keep documentation up-to-date

2. **Team Training**
   - Conduct mode usage sessions
   - Share tips and best practices
   - Encourage experimentation and feedback

3. **Regular Check-ins**
   - Discuss mode effectiveness in team meetings
   - Address issues and concerns promptly
   - Celebrate successful mode adoptions

### Governance

1. **Approval Process**
   - Establish who can modify team-wide modes
   - Require review for significant changes
   - Maintain change logs and documentation

2. **Standards Enforcement**
   - Use consistent naming conventions
   - Follow established patterns
   - Regular audits and cleanup

3. **Conflict Resolution**
   - Process for handling disagreements
   - Escalation paths for major decisions
   - Focus on team productivity and satisfaction

## Measuring Success

### Key Metrics

1. **Adoption Rate**
   - Percentage of team using custom modes
   - Frequency of mode usage
   - Mode switching patterns

2. **Productivity Impact**
   - Time saved on common tasks
   - Reduction in context switching
   - Improved code quality metrics

3. **Team Satisfaction**
   - Developer experience surveys
   - Feedback on mode effectiveness
   - Suggestions for improvements

### Continuous Improvement

1. **Regular Surveys**
   - Quarterly team feedback
   - Mode-specific usage surveys
   - Suggestion collection

2. **Data-Driven Decisions**
   - Analyze usage patterns
   - Identify underused modes
   - Focus on high-impact improvements

3. **Iterative Enhancement**
   - Small, frequent improvements
   - A/B testing for major changes
   - Gradual rollout of new features

## Next Steps

- **Implementation**: Start with [Example Configurations](./11-examples.md)
- **Troubleshooting**: Review [Common Issues](./12-troubleshooting.md)
- **API Reference**: Return to [Overview](./01-overview.md) for complete documentation