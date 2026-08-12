# GitHub Copilot Instructions for Portfolio Site

## Project Overview

This is a modern, enterprise-grade portfolio website built with React 19, Vite, and Tailwind CSS. The project demonstrates professional development practices including automated Azure deployment, component-based architecture, and comprehensive documentation.

**Live Site**: https://www.loydjohnson.com  
**Primary Purpose**: Professional portfolio showcasing technical expertise and project work  
**Secondary Purpose**: Learning environment for enterprise development practices

## Tech Stack

- **Frontend Framework**: React 19.1.1 (latest with concurrent features)
- **Build Tool**: Vite 7.1.7 (fast HMR, optimized builds)
- **Styling**: Tailwind CSS 3.4.1 (utility-first with custom design system)
- **Icons**: Lucide React 0.548.0
- **Deployment**: Azure Static Web Apps with GitHub Actions CI/CD
- **Code Quality**: ESLint with React hooks and React refresh plugins
- **Node Version**: 18+ (LTS recommended)

## Project Architecture

### Three-Layer Architecture Pattern

The codebase follows a strict separation of concerns across three layers:

1. **Data Layer** (`src/data/`)
   - All content, text, skills, and project data
   - Centralized data management
   - Easy to update without touching components

2. **Style Layer** (`src/styles/constants/`)
   - Tailwind class combinations as JavaScript objects
   - Section-specific and shared styling constants
   - Organized by feature (navigation, hero, about, common)

3. **Component Layer** (`src/components/`)
   - Structure and business logic
   - Imports data and styles from respective layers
   - Organized by type: Navigation, Sections, Common, Pages

### Directory Structure

```
src/
├── components/
│   ├── Navigation/        # Navigation with mobile menu, scroll tracking
│   ├── Sections/          # Main content sections (Hero, About, etc.)
│   ├── Common/            # Reusable UI components
│   └── Pages/             # Full page components (e.g., PhotoComingSoon)
├── data/
│   └── portfolio-data.js  # All content data
├── styles/
│   └── constants/         # Style definitions as JS objects
├── hooks/
│   └── useScrollHandler.js # Custom hooks for shared logic
├── utils/
│   └── helpers.js         # Utility functions
└── assets/                # Images, static files
```

## Development Workflow

### Local Development Commands

```bash
# Install dependencies
npm install

# Start main portfolio dev server (typically port 5173)
npm run dev

# Start photo portfolio dev server (port 5174)
npm run dev:photo

# Build for production
npm run build

# Preview production build
npm run preview

# Lint codebase
npm run lint
```

### Making Changes

- **Content updates**: Edit `src/data/portfolio-data.js`
- **Style changes**: Edit `src/styles/constants/*Styles.js` files
- **Structure changes**: Edit component `.jsx` files
- **New sections**: Add data → create styles → build component → import to App.jsx

## Code Style Guidelines

### React Patterns

- Use **functional components** with hooks (no class components)
- Prefer **named exports** for components
- Use **custom hooks** for shared logic
- Follow **component composition** patterns
- Keep components **focused and single-purpose**

### JavaScript/JSX Conventions

- Use **ES6+ features** (arrow functions, destructuring, template literals)
- Prefer **const** over let, avoid var
- Use **explicit imports** (no wildcard imports)
- Follow **camelCase** for variables and functions
- Use **PascalCase** for component names

### Styling Best Practices

- Use **Tailwind utility classes** for styling
- Define **reusable style objects** in `src/styles/constants/`
- Follow **mobile-first** responsive design
- Use **Tailwind breakpoints**: sm, md, lg, xl, 2xl
- Keep styles **organized and maintainable**

### File Organization

- **One component per file**
- **Co-locate related files** (component and its styles)
- **Group by feature**, not by type
- **Use index.js** for clean imports when appropriate

## ESLint Configuration

The project uses modern ESLint configuration with:
- React hooks rules (latest)
- React refresh for Vite
- Unused variables must match `/^[A-Z_]/u` pattern
- ES2020+ features enabled
- Browser globals available

**Note**: When adding code, ensure it passes `npm run lint`.

## Testing and Quality Assurance

- **No formal test framework** is currently set up
- Manual testing is required for changes
- Test in browser with dev server before committing
- Verify responsive design across breakpoints
- Check browser console for errors

## Deployment Pipeline

### CI/CD via GitHub Actions

- **Trigger**: Push to main branch or PR to main
- **Steps**: Checkout → Setup Node 18 → Install deps → Build → Deploy to Azure
- **Build Command**: `npm run build`
- **Output**: `dist/` directory
- **Target**: Azure Static Web Apps

### Azure Infrastructure

- **Service**: Azure Static Web Apps
- **Custom Domain**: www.loydjohnson.com (with SSL)
- **API Location**: `api/` directory (for Azure Functions)
- **Deployment**: Automated via GitHub Actions
- **Token**: Stored in GitHub Secrets as `AZURE_STATIC_WEB_APPS_API_TOKEN`

## Common Tasks

### Adding a New Section Component

1. Add data to `src/data/portfolio-data.js`
2. Create styles in `src/styles/constants/newSectionStyles.js`
3. Create component in `src/components/Sections/NewSection.jsx`
4. Import and use in `src/App.jsx`
5. Test locally with `npm run dev`
6. Lint with `npm run lint`

### Updating Content

1. Edit `src/data/portfolio-data.js`
2. No code changes needed in components
3. Test changes locally
4. Commit and push (auto-deploys to Azure)

### Modifying Styles

1. Edit appropriate file in `src/styles/constants/`
2. Styles are JavaScript objects with Tailwind classes
3. Test responsive behavior at all breakpoints
4. Ensure mobile-first approach is maintained

### Adding Dependencies

1. Use `npm install <package>` (not `npm i` in automation)
2. Verify package compatibility with React 19
3. Update documentation if it affects workflow
4. Test build process: `npm run build`

## Important Notes

### Do Not

- ❌ Delete or modify working code unless absolutely necessary
- ❌ Remove or edit tests (none currently exist, but preserve if added)
- ❌ Add new testing frameworks without discussion
- ❌ Change core dependencies (React, Vite) without careful consideration
- ❌ Commit `node_modules/`, `dist/`, or build artifacts (covered by `.gitignore`)
- ❌ Hard-code secrets or API keys

### Always

- ✅ Make minimal, surgical changes
- ✅ Test locally before committing
- ✅ Run `npm run lint` before committing
- ✅ Follow existing code patterns and conventions
- ✅ Update documentation if making significant changes
- ✅ Verify responsive design on multiple screen sizes
- ✅ Check browser console for errors
- ✅ Use meaningful commit messages

## Security Considerations

- **No sensitive data** in source code
- **Environment variables** for API keys and secrets
- **HTTPS everywhere** (Azure handles SSL)
- **Dependency updates** - review security advisories regularly
- **XSS protection** - sanitize any user inputs (if added)

## Learning Philosophy

This project intentionally uses **enterprise-grade tools and workflows** to provide hands-on experience with real-world development practices. The "overkill" approach is designed to develop skills that are difficult to learn outside professional environments:

- CI/CD pipelines and automated deployment
- Infrastructure as Code with PowerShell
- Professional documentation and knowledge transfer
- Security-first mindset and best practices
- Component architecture and maintainability

## Additional Resources

- **Main README**: Comprehensive project documentation
- **API Documentation**: See `api/README.md`
- **Azure Workflow**: `.github/workflows/azure-static-web-apps-jolly-forest-0b51b220f.yml`
- **ESLint Config**: `eslint.config.js`
- **Vite Config**: `vite.config.js`
- **Tailwind Config**: `tailwind.config.js`

## Questions or Issues?

When in doubt:
1. Check the main README.md for detailed documentation
2. Look at existing components for patterns
3. Follow the three-layer architecture (data, styles, components)
4. Keep changes minimal and focused
5. Test thoroughly before committing

---

**Last Updated**: November 2025  
**Maintained By**: Loyd Johnson
