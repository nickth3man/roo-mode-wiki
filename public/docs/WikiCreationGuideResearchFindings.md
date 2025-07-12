# Wiki Creation Guide Research Findings

## Source 1: Reddit r/sysadmin - How do you organize your wiki or knowledge base?
URL: https://www.reddit.com/r/sysadmin/comments/bmp8om/how_do_you_organize_your_wiki_or_knowledge_base/

### Key Organization Structure Suggestions:

**Main Categories:**
- S.O.P.s (Standard Operating Procedures)
  - Step by step guide on everything you do
- Service Catalog
  - Each Service has an entry with Overview, SOP links, Support Numbers and account info, DR procedure, build configuration etc.
- Scripts/Playbooks
- Network and Systems
  - Network Topology that breaks down to each subnet and their purpose with supporting equipment and change logs
  - Systems broken down by location and roles with change logs
- Design Docs
- DR and Backup Procedures
- Other Reference Materials

### Key Insights:

1. **Emergency-Ready Documentation**: Think about people react in emergencies. Even highly trained people deal with panic. Documentation should be set up like pilot checklists - easy to find and follow under stress.

2. **Textbook Approach**: "Imagine you were writing a textbook on how to do your job. Look at how some of those texts format their table of contents. Could you put all of the responsibilities for your job in like 10-20 buckets?"

3. **Documentation Culture**: Develop a culture where team is not dependent on a single person. When doing something for the first time, document it, create how-to guides, and arrange training sessions.

4. **Cross-cutting Information Challenge**: Documentation often has crosscutting relevance which conflicts with the desire not to repeat information in multiple documents to avoid having to update multiple documents.

5. **Categories as Relations**: Use categories effectively - they work like "relations" in database terms. Categories can be used not just to organize, but also to place pages onto menus and for other purposes.

### Technical Recommendations:
- BookStack (https://www.bookstackapp.com/) was mentioned as a good solution
- MediaWiki with effective category usage
- PmWiki for dynamic content and categorization
- Consider Semantic MediaWiki extension for advanced structured data storage
- Use better search than default (SphinxSearch mentioned)
- Look for orphan pages regularly
- Consider include/transclusion features for dynamic content updates




## Source 2: Reddit r/azuredevops - Wiki Strategy Best Practices
URL: https://www.reddit.com/r/azuredevops/comments/1esuwhs/wiki_strategy_best_practices/

### Key Discussion Points:

**Main Question**: Whether to use "Publish wiki as code" vs regular project wiki for documentation collaboration and validation through pull requests.

**Branching Strategy Challenge**: 
- Current strategy: feature -> dev/* -> main
- Problem: Cannot make quick changes (like fixing typos) without going through full process
- Tension between collaboration/approval and ease of updates

### Key Insights:

1. **License Considerations**: Users with Stakeholder licenses cannot view code wikis, only project wikis. This can be a significant limitation for organizations.

2. **Hybrid Approach**: Some organizations maintain two wikis:
   - Code wiki for the development team
   - Project wiki for stakeholders
   - Use PowerShell scripts to publish from internal to public wiki

3. **Practical Workflow Suggestions**:
   - Use project wiki for little updates with web editor
   - Use branches against wikiMaster and PRs for new content or significant updates
   - Subscribe to pages you care about for notifications
   - Collect typos in "snaglist PR" to reduce review overhead
   - Modify branch policies to allow minimal mandatory signoffs for wiki-only PRs

4. **Content Strategy**: 
   - If docs are about code/increment → use Code Wiki
   - If docs are about the Project → use Project wiki
   - Can publish code docs as webpage to negate license issues

5. **Process Management**:
   - Set "Contribute" permission for users allowed to edit
   - Set branch policies for significant changes
   - Use "Bypass policies" permissions for quick updates if needed
   - Follow wiki pages to get email notifications for changes

6. **Quality Control**: "It should be tracked in code - otherwise people can just delete and do whatever they want"


## Source 3: Reddit r/devops - Best Practices for creating a wiki/Documentation
URL: https://www.reddit.com/r/devops/comments/9rxtgg/best_practices_for_creating_a_wikidocumentation/

### Original Question Context:
Team has project using multiple programming languages and libraries. Need specific rules for documentation to avoid "giant mess of spaghetti that next year's team won't understand."

Key questions: How to handle documentation so it's low effort but useful? How should it be organized?

### Key Insights:

1. **MediaWiki Warning**: "Don't use mediawiki unless you want it fully private or fully public" - ACL (Access Control List) management is complex and problematic.

2. **Documentation as Code Approach**:
   - **Per-repo markdown**: Markdown files throughout any repo, README.md gets automatically rendered
   - **Documentation repo**: Dedicated documentation repo with just markdown files
   - Can be self-referential and reference external markdown files in other repos
   - **Benefits**: Version control, merge capabilities, CI/CD integration

3. **Image/Diagram Challenges**:
   - Embedding pictures is difficult with markdown approach
   - **Solutions**: 
     - Image repo with commits to master, reference as external links
     - Use code to generate diagrams (PlantUML recommended)
     - Diagrams as code can be versioned, merged, and included in CI pipelines

4. **Formatting and Organization**:
   - "Making use of formatting and organizing documentation into a flow is important for readability"
   - "If your docs are just a brain dump of unorganized knowledge, then nobody will understand it"

5. **Documentation Types and Templates**:
   - **External facing**: Should explain how to use a product (Docker's documentation cited as good example)
   - **Internal operational**: Write for "bus scenario" - assume entire team is gone, document everything needed for replacement

6. **Internal Documentation Should Include**:
   - Daily maintenance procedures
   - How to set up new access
   - Backup procedures
   - Frequent fixes
   - Support contacts and SLAs
   - Dependencies
   - Version information
   - Architecture (every host, daemon, failover mechanism)

7. **Tool Recommendations**:
   - **MkDocs**: "Very easy to build, and really powerful"
   - **GitBook**: Used with SCM, CI/CD, based on markdown
   - **Read the Docs**: Mentioned as good option
   - **Avoid Confluence**: "It's not completely terrible, but it's not exactly great"

8. **Documentation Strategy**: Write for someone with similar skills OR someone who knows nothing about the tech - assume you're writing for whoever would step up if your entire team was hit by a bus.


## Source 4: Reddit r/sysadmin - How is your IT departments wiki structured?
URL: https://www.reddit.com/r/sysadmin/comments/1byp7bp/how_is_your_it_departments_wiki_structured/

### Original Problem:
Confluence Cloud wiki has become unorganized over years. Mix of deprecated and new/relevant information. Structure and conventions have fallen by the wayside.

Questions: Do you have spaces for each vendor/product? Or each area of IT (network infrastructure, storage servers, etc.)?

### Reality Check - Common Problems:

1. **Documentation Chaos**: "We have 200 page uncontrolled word documents that nobody reads and nobody updates, partly because nobody can find them."

2. **Outdated Information**: References to 5-year-old Confluence pages being used as current specifications.

3. **Access Issues**: "can't find something you don't have privileges to view!"

4. **Lack of Documentation**: Multiple comments of "You guys document things??" and "You have docs? Damn."

5. **Tribal Knowledge**: "The dude who has been here for 20 years has everything memorized so if we can't figure it out we ask him."

### Successful Structure Examples:

1. **Hierarchical Confluence Structure**:
   - **Top level**: Systems Environment, Common Fixes, Setup guides, Procedures
   - **Next level**: Software Lists, Firewall, Networking, Phones
   - **Detailed level**: SCCM Task Sequences, CL/CI details, Equipment setup guides

2. **Role-Based Organization**:
   - **Application manager**: intro & documentation user guide, system basics, user guides, admin guides, integration
   - **Systems developer**: intro, access, end user guides, processes, integration, development guides
   - **Software development manager**: intro, business info, user guides, admin guides, DevOps, development guides & standards

3. **Department-Based Spaces**: Each team gets completely different 'Space' in Confluence. People from other teams can't edit other teams' articles.

### Tool Recommendations:

1. **BookStack**: "Easy to maintain" - mentioned multiple times
2. **OneNote**: "little structure but we use tags and also being able to search text on images makes easy to find stuff"
3. **DokuWiki**: "Each department gets a namespace. What they do with it is up to them."
4. **Wiki.js**: Mentioned but user feels it's "getting out of hand"
5. **Microsoft Loop**: Moving from getoutline because it's built into MS Suite
6. **getoutline**: Self-hosted Notion alternative, $10 for 10 people

### Governance and Maintenance:

1. **Process Implementation**:
   - Who can create new articles
   - How they are created
   - When they are reviewed
   - How/when they are deprecated

2. **Review Process**:
   - One other team member to review and approve new articles
   - Seasonal document review period (90 days)
   - Each team member reviews ~100 articles per period
   - Archive unused articles with confirmation

3. **GitHub Integration**: Some organizations moved to GitHub with source control and approvals in deployment workflow, using tags instead of hierarchical structure.

### Knowledge Base Structure:
- Split into 2 pieces: Users and Service Desk
- Structured based on software and hardware (Networking, O365, Windows, Printing)
- Different visibility levels depending on who needs to see information


## Source 5: Blog Post - Ideal wiki structure (snape.me)
URL: https://snape.me/2024/07/ideal-wiki-structure/

### Key Philosophy:
"Most team wikis are a mess of folders and pages with very little thought to structure. Here is a complex system evolved from a simple one over time for you to use as a shortcut."

Based on Gall's Law: "A complex system that works has evolved from a simple system that worked. A complex system built from scratch won't work."

### Signs You Need Better Wiki Structure:
- You find yourself searching for content by repeatedly opening the wrong folders
- Team members are unaware that the information they need already exists
- You are unsure where the new page you are writing should live

### Recommended Top-Level Structure:
Organized around user context and goals:

1. **Home** - Landing page with introduction, announcements, and map-of-content (MOC)
2. **Designs** - How the product is built (architecture, independent of features/releases)
3. **Features** - What is being built (requirements, business analysis)
4. **Releases** - Release-specific information (notes, timings, troubleshooting)
5. **Guides** - Role-specific how-to documentation
6. **Tools** - Custom tools and scripts documentation
7. **Standards** - Mandatory practices and policies
8. **References** - External content and background reading
9. **Help** - Wiki usage guidance and social norms

### Detailed Section Breakdown:

**Designs Section:**
- **Design Considerations**: Why the solution is designed as it is
- **Design Governance**: Architectural Decision Records (ADRs) with status, context, decision

**Features Section:**
- Business analyst/product owner workspace
- Maintains history of feature evolution
- Links back to original work items
- Only features needing more than a single work item card get wiki pages

**Guides Section (Role-Specific):**
- **Business Analyst Guide**: Story writing, documentation tasks, data requirements
- **Data Engineer Guide**: Database details, performance tuning, data volumes
- **Developer Guide**: Tools, techniques, pull request procedures, git specifics
- **Tester Guide**: Test suite descriptions, execution guides, bug raising rules
- **Release Guide**: Release procedures, environment details, sign-off procedures
- **Support Guide**: Error codes, troubleshooting, known issues
- **Operations Guide**: Daily/weekly/monthly tasks, run-books, automation
- **Onboarding Guide**: Workstation setup, communication details, new joiner FAQs

**Standards Section:**
- Design Standards
- Code Standards
- Data Standards
- Process Standards
- Security Standards
- Release Standards
- Format: Simple checklists (nobody wants to waste time reading policies)

### Key Design Principles:
1. **Context-Based Organization**: Structure based on user's context when accessing information
2. **Evolution Over Revolution**: Start simple and evolve complexity over time
3. **Role-Based Access**: Different sections serve different team roles
4. **Mandatory vs. Guidance**: Clear distinction between standards (mandatory) and guides (helpful)
5. **Single Source of Truth**: Avoid duplication while maintaining accessibility
6. **Practical Format**: Use checklists and simple formats for easy consumption

### Target Audience:
Designed specifically for single software project teams, though principles can be adapted for other contexts.


## Source 6: Reddit r/sysadmin - How Do You Format Your Internal Wiki?
URL: https://www.reddit.com/r/sysadmin/comments/e20nxx/how_do_you_format_your_internal_wiki/

### Original Question:
Looking for general structure and subtrees, especially from someone who went through the pain of what didn't work.

### Key Insights:

1. **Evolution Philosophy**: "Wikis evolve, so don't overthink it too much."

2. **Advanced MediaWiki**: Strongly consider Semantic MediaWiki extension to query wiki like a database. Example: PCGW (PC Gaming Wiki) as highly-populated Semantic MediaWiki.

3. **PmWiki Corporate Portal Structure**:
   - **Resources**: Org Chart, Corporate Directory, News, Reports, File Shares, Service Desk
   - **Infrastructure**: Backups, Operations, Monitoring, Servers, Desktops, Network, FAQ
   - **Help**: Markup, SiteMap, Themes, Recent Changes, About

4. **Security Integration**: 
   - PmWiki tied into Active Directory with Security Groups
   - Secure password/username/url info pages accessible to those with privileges
   - Page-level and upload-level security permissions
   - Pretty redactions for content users can't access

5. **Content vs. Perfection**: "Content is paramount. Better to have content from the uneducated masses vs. hitting people on the head so much to where they never want to contribute."

### Advanced DokuWiki Implementation:

**Struct-Patterns for Data Aggregation**:
- 24 different patterns for various data types
- Automated aggregation and filtering
- Single line includes that dynamically populate pages
- Complete data chain tracking (workstation → VLAN → room → user → project)

**Example Data Chain**:
WS73 | 200 | R305 | XYZ | PP0406 | C-015-459 | SP0206 | SW-Avaya03 | R203 | Mr. X | 784

Translation: Workstation 73 has VLAN 200, is in Room 305 in Building XYZ, on Port 04-06, patched with cable 015-459, on port 02/06 at switch Avaya03 located in Room 203, user is Mr. X, project 784.

**DokuWiki Pattern Categories**:
- Documentation (separated by topics/systems, internal/external, howto/configuration)
- GPOs, Servers, Virtual servers, Clients
- Rooms (with clients, patchports, VLANs, users, projects)
- Backups, Devices (switches, printers, access points)
- Network infrastructure mapping

**Key DokuWiki Plugins for Advanced Implementation**:
- **struct**: Structured data plugin (core functionality)
- **bureaucracy**: HTML forms for data collection
- **include**: Include other wiki pages
- **tag**: Category tagging system
- **move**: Move pages while maintaining links
- **csv**: Display CSV data in tables
- **edittable**: Visual table editing
- **issuetracker**: Issue tracking functionality
- **switchpanel**: Network switch panel visualization

### Implementation Recommendations:

1. **Start Simple**: Don't overthink initial structure
2. **Content First**: Prioritize getting content over perfect organization
3. **Security by Design**: Implement page-level permissions from start
4. **Template Usage**: Create templates for common page types
5. **Tagging Strategy**: Use tags for cross-cutting concerns
6. **Regular Expression Patterns**: Automate data connections via namespace patterns
7. **Dynamic Filtering**: Use includes and filters for automated content aggregation

### Technical Architecture Considerations:
- Active Directory integration for authentication
- Database-like querying capabilities (Semantic MediaWiki)
- Automated data relationships and aggregation
- Visual network topology representation
- Complete asset and infrastructure tracking

