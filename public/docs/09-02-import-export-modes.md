# Import/Export Modes

You can easily share, back up, and template your custom modes. Export any mode—and its associated rules—into a single, portable YAML file that you can import into any project.

**Key Features:**
- Shareable setups: Package a mode and its rules into one file to share with your team.
- Easy backups: Save your custom mode configurations.
- Project templates: Create standardized mode templates.
- Simple migration: Move modes between global and project settings.

**How it works:**
- Export: In the Modes view, select a mode and click Export Mode (download icon) to save a `.yaml` file. Roo packages the mode's configuration and any rules found in `.roo/rules-{slug}/`.
- Import: Click Import Mode (upload icon), select the YAML file, and choose Project or Global import. Project imports go to `.roomodes` and `.roo/rules-{slug}/`; Global imports go to your global settings and `~/.roo/rules-{slug}/`.

**FAQ:**
- Importing a mode with the same slug overwrites the existing one.
- Built-in modes can be exported if customized.
- Rules are preserved and stored in the appropriate location.