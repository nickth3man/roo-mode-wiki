# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Push this repository to GitHub
2. Connect your GitHub account to Vercel
3. Import the repository
4. Vercel will automatically detect it's a Vite project
5. Deploy with default settings

### Option 2: Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Option 3: GitHub Pages
1. Push to GitHub
2. Go to Settings > Pages
3. Set source to "GitHub Actions"
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Option 4: Any Static Host
1. Run `npm run build`
2. Upload the contents of the `dist` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes (SPA routing)

## Build Configuration

### Environment Variables
No environment variables are required - this is a purely static application.

### Build Settings
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18+

### Server Configuration
For proper SPA routing, configure your server to:
- Serve `index.html` for all routes that don't match static files
- Set proper cache headers for static assets
- Enable gzip compression

Example Netlify `_redirects` file:
```
/*    /index.html   200
```

Example Apache `.htaccess`:
```apache
RewriteEngine On
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Performance Optimization

### Automatic Optimizations
The build process automatically includes:
- Code splitting by route
- Asset optimization (images, CSS, JS)
- Tree shaking to remove unused code
- Minification and compression

### CDN Configuration
For optimal performance, configure your CDN to:
- Cache static assets (JS, CSS, images) for 1 year
- Cache HTML files for 1 hour
- Enable gzip/brotli compression
- Use HTTP/2 push for critical resources

## Monitoring and Analytics

### Adding Analytics
To add Google Analytics or other tracking:

1. Add the tracking script to `index.html`
2. Or use a React analytics library like `react-ga4`

### Performance Monitoring
Consider adding:
- Core Web Vitals monitoring
- Error tracking (Sentry, Bugsnag)
- Performance monitoring (New Relic, DataDog)

## Maintenance

### Content Updates
1. Edit markdown files in `public/docs/`
2. Update navigation in `src/lib/docs-data.js` if needed
3. Rebuild and redeploy

### Dependency Updates
```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update major versions carefully
npm install package@latest
```

### Security
- Regularly update dependencies
- Monitor for security vulnerabilities with `npm audit`
- Use Dependabot or similar for automated updates

