// Documentation structure for Roo Code Custom Modes Wiki
export const docsStructure = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: '🚀',
    items: [
      {
        id: '01-overview',
        title: 'Overview',
        file: '01-overview.md',
        description: 'Introduction to custom modes and their benefits'
      },
      {
        id: '02-configuration-formats',
        title: 'Configuration Formats',
        file: '02-configuration-formats.md',
        description: 'YAML and JSON format specifications'
      },
      {
        id: '03-core-properties',
        title: 'Core Properties',
        file: '03-core-properties.md',
        description: 'Essential mode configuration properties'
      }
    ]
  },
  {
    id: 'configuration-reference',
    title: 'Configuration Reference',
    icon: '⚙️',
    items: [
      {
        id: '04-property-definitions',
        title: 'Property Definitions',
        file: '04-property-definitions.md',
        description: 'Detailed reference for each property'
      },
      {
        id: '05-tool-groups-permissions',
        title: 'Tool Groups & Permissions',
        file: '05-tool-groups-permissions.md',
        description: 'Available tool groups and their capabilities'
      },
      {
        id: '06-file-restrictions',
        title: 'File Restrictions',
        file: '06-file-restrictions.md',
        description: 'Fine-grained file access control'
      },
      {
        id: '07-mode-instructions',
        title: 'Mode Instructions',
        file: '07-mode-instructions.md',
        description: 'Custom instruction files and organization'
      },
      {
        id: '08-configuration-precedence',
        title: 'Configuration Precedence',
        file: '08-configuration-precedence.md',
        description: 'How settings are resolved and applied'
      }
    ]
  },
  {
    id: 'advanced-features',
    title: 'Advanced Features',
    icon: '🔧',
    items: [
      {
        id: '09-advanced-features',
        title: 'Advanced Features Overview',
        file: '09-advanced-features.md',
        description: 'Complex configurations and patterns'
      },
      {
        id: '09-01-sticky-models',
        title: 'Sticky Models',
        file: '09-01-sticky-models.md',
        description: 'Assigning specific models to modes'
      },
      {
        id: '09-02-import-export-modes',
        title: 'Import/Export Modes',
        file: '09-02-import-export-modes.md',
        description: 'Sharing and backing up custom modes'
      },
      {
        id: '09-03-yaml-json-configuration',
        title: 'YAML/JSON Configuration',
        file: '09-03-yaml-json-configuration.md',
        description: 'Advanced configuration techniques'
      },
      {
        id: '09-04-instruction-file-precedence',
        title: 'Instruction File Precedence',
        file: '09-04-instruction-file-precedence.md',
        description: 'How instruction files are prioritized'
      },
      {
        id: '09-05-overriding-default-modes',
        title: 'Overriding Default Modes',
        file: '09-05-overriding-default-modes.md',
        description: 'Customizing built-in modes'
      },
      {
        id: '09-06-regex-file-restrictions',
        title: 'Regex File Restrictions',
        file: '09-06-regex-file-restrictions.md',
        description: 'Advanced file access patterns'
      },
      {
        id: '09-07-mode-composition-patterns',
        title: 'Mode Composition Patterns',
        file: '09-07-mode-composition-patterns.md',
        description: 'Combining modes effectively'
      },
      {
        id: '09-08-environment-specific-modes',
        title: 'Environment-Specific Modes',
        file: '09-08-environment-specific-modes.md',
        description: 'Modes for different environments'
      },
      {
        id: '09-09-dynamic-configuration-patterns',
        title: 'Dynamic Configuration Patterns',
        file: '09-09-dynamic-configuration-patterns.md',
        description: 'Runtime configuration techniques'
      },
      {
        id: '09-10-performance-optimization',
        title: 'Performance Optimization',
        file: '09-10-performance-optimization.md',
        description: 'Optimizing mode performance'
      },
      {
        id: '09-11-error-handling-validation',
        title: 'Error Handling & Validation',
        file: '09-11-error-handling-validation.md',
        description: 'Robust error handling strategies'
      }
    ]
  },
  {
    id: 'practical-guides',
    title: 'Practical Guides',
    icon: '📚',
    items: [
      {
        id: '10-import-export',
        title: 'Import/Export',
        file: '10-import-export.md',
        description: 'Sharing and backing up custom modes'
      },
      {
        id: '11-examples',
        title: 'Example Configurations',
        file: '11-examples.md',
        description: 'Real-world mode examples and templates'
      },
      {
        id: '11-sticky-models',
        title: 'Sticky Models',
        file: '11-sticky-models.md',
        description: 'Model assignment strategies'
      },
      {
        id: '12-troubleshooting',
        title: 'Troubleshooting',
        file: '12-troubleshooting.md',
        description: 'Common issues and solutions'
      },
      {
        id: '13-team-collaboration',
        title: 'Team Collaboration',
        file: '13-team-collaboration.md',
        description: 'Best practices for team environments'
      }
    ]
  }
];

// Create a flat map for easy lookup
export const docsMap = {};
docsStructure.forEach(section => {
  section.items.forEach(item => {
    docsMap[item.id] = {
      ...item,
      section: section.title,
      sectionId: section.id
    };
  });
});

// Get all doc IDs in order
export const getAllDocIds = () => {
  return docsStructure.flatMap(section => section.items.map(item => item.id));
};

// Get next/previous doc
export const getAdjacentDocs = (currentId) => {
  const allIds = getAllDocIds();
  const currentIndex = allIds.indexOf(currentId);
  
  return {
    previous: currentIndex > 0 ? docsMap[allIds[currentIndex - 1]] : null,
    next: currentIndex < allIds.length - 1 ? docsMap[allIds[currentIndex + 1]] : null
  };
};

