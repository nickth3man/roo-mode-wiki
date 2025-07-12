# Roo Code Custom Modes Wiki - Interactive Edition

> An enhanced fork of [nickth3man/roo-mode-wiki](https://github.com/nickth3man/roo-mode-wiki) with an interactive web interface

**🌐 Live Demo:** [https://lwxthltw.manus.space](https://lwxthltw.manus.space)

This repository transforms the excellent markdown-based wiki into a modern, interactive web application while preserving all the comprehensive documentation and organization principles from the original.

## 🚀 What's New in This Fork

### Interactive Web Interface
- **Modern React Application**: Built with React, Tailwind CSS, and shadcn/ui components
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with persistent preference storage
- **Live Search**: Real-time search across all documentation with instant filtering
- **Smart Navigation**: Collapsible sidebar with organized sections and progress indicators

### Enhanced User Experience
- **Progressive Disclosure**: Content organized in logical sections with clear navigation paths
- **Cross-References**: Internal linking between related topics
- **Next/Previous Navigation**: Sequential reading with contextual navigation buttons
- **Table of Contents**: Auto-generated TOC for each page with anchor links
- **Mobile-First**: Optimized for mobile reading with touch-friendly interface

### Technical Improvements
- **Fast Loading**: Optimized build with code splitting and efficient asset loading
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **Deployable**: Ready for deployment to any static hosting platform

## 📚 Content Organization

This fork maintains the excellent content organization from the original repository:

### 🚀 Getting Started
- **Overview**: Introduction to custom modes and their benefits
- **Configuration Formats**: YAML and JSON format specifications  
- **Core Properties**: Essential mode configuration properties

### ⚙️ Configuration Reference
- **Property Definitions**: Detailed reference for each property
- **Tool Groups & Permissions**: Available tool groups and their capabilities
- **File Restrictions**: Fine-grained file access control
- **Mode Instructions**: Custom instruction files and organization
- **Configuration Precedence**: How settings are resolved and applied

### 🔧 Advanced Features
- **Advanced Features Overview**: Complex configurations and patterns
- **Sticky Models**: Assigning specific models to modes
- **Import/Export Modes**: Sharing and backing up custom modes
- **YAML/JSON Configuration**: Advanced configuration techniques
- **And 8 more advanced topics...**

### 📚 Practical Guides
- **Import/Export**: Sharing and backing up custom modes
- **Example Configurations**: Real-world mode examples and templates
- **Sticky Models**: Model assignment strategies
- **Troubleshooting**: Common issues and solutions
- **Team Collaboration**: Best practices for team environments

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Quick Start
```bash
# Clone the repository
git clone https://github.com/your-username/roo-mode-wiki-fork.git
cd roo-mode-wiki-fork

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

### Project Structure
```
├── public/
│   └── docs/              # Documentation markdown files
├── src/
│   ├── components/
│   │   └── ui/            # shadcn/ui components
│   ├── lib/
│   │   ├── docs-data.js   # Documentation structure and navigation
│   │   └── markdown-parser.js  # Markdown to HTML parser
│   ├── App.jsx            # Main application component
│   └── App.css            # Tailwind CSS styles
├── package.json
└── README.md
```

## 🎨 Design Philosophy

### Building on Excellence
This fork builds upon the outstanding work in the original repository, which demonstrated:
- **User-Centered Approach**: Organized around what users actually need to accomplish
- **Context-Driven Organization**: Multiple pathways to find information
- **Progressive Disclosure**: Start simple, add complexity as needed
- **Problem-Focused Solutions**: Troubleshooting organized around common issues

### Modern Web Standards
The interactive version adds:
- **Performance**: Fast loading with optimized assets and code splitting
- **Accessibility**: WCAG 2.1 AA compliance with keyboard and screen reader support
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Progressive Enhancement**: Works with JavaScript disabled (static fallback)

## 🔄 Relationship to Original Repository

### What's Preserved
- ✅ All original documentation content
- ✅ Excellent information architecture
- ✅ User-centered organization principles
- ✅ Comprehensive coverage of Roo Code custom modes
- ✅ Real-world examples and best practices

### What's Enhanced
- 🚀 Interactive web interface with modern UX
- 🔍 Real-time search and filtering
- 📱 Mobile-optimized responsive design
- 🎨 Dark/light theme support
- 🧭 Enhanced navigation with progress indicators
- ⚡ Fast, optimized performance
- 🌐 Easy deployment to any hosting platform

## 📖 Documentation Sources

This wiki is based on the comprehensive Roo Code Custom Modes API documentation:

- **Source**: Official Roo Code documentation from `docs.roocode.com`
- **Coverage**: 25+ documentation files covering all aspects of custom modes
- **Organization**: Transformed from technical reference into user-friendly guide
- **Examples**: Real-world configurations and best practices

### Original File Structure
```
01-overview.md
02-configuration-formats.md
03-core-properties.md
04-property-definitions.md
05-tool-groups-permissions.md
06-file-restrictions.md
07-mode-instructions.md
08-configuration-precedence.md
09-advanced-features.md (with 11 sub-topics)
10-import-export.md
11-examples.md
12-troubleshooting.md
13-team-collaboration.md
```

## 🚀 Deployment

### Static Hosting
This application builds to static files and can be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Any CDN**: Upload the `dist` folder contents

### Environment Variables
No environment variables required - this is a purely static application.

### Build Optimization
- **Code Splitting**: Automatic route-based code splitting
- **Asset Optimization**: Images and CSS are automatically optimized
- **Tree Shaking**: Unused code is automatically removed
- **Compression**: Gzip compression for all assets

## 🤝 Contributing

### Content Updates
1. Edit markdown files in `public/docs/`
2. Update navigation structure in `src/lib/docs-data.js` if needed
3. Test locally with `pnpm run dev`
4. Submit a pull request

### Feature Enhancements
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Submit a pull request with a clear description

### Bug Reports
Please use the GitHub Issues tab to report bugs with:
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable

## 📄 License

This project maintains the same license as the original repository. The interactive enhancements are provided under the same terms.

## 🙏 Acknowledgments

- **Original Repository**: [nickth3man/roo-mode-wiki](https://github.com/nickth3man/roo-mode-wiki) for the excellent content organization and documentation
- **Roo Code Team**: For creating comprehensive API documentation
- **Community**: For feedback and contributions to make this resource better

## 🔗 Links


- **Roo Code Documentation**: [docs.roocode.com](https://docs.roocode.com)

---

**Start exploring:** [🌐 Live Demo](https://lwxthltw.manus.space) | [📖 Original Wiki](https://github.com/nickth3man/roo-mode-wiki) | [🔧 Roo Code](https://roocode.com)

*Built with ❤️ using React, Tailwind CSS, and modern web technologies*

