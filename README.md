# Professional Portfolio - Loyd Johnson

> **Live Portfolio**: [https://www.loydjohnson.com](https://www.loydjohnson.com)

A modern, enterprise-grade portfolio website demonstrating advanced React architecture, Azure cloud deployment, and professional IT expertise. This project showcases both technical development capabilities and real-world business impact through detailed project case studies.

[![Azure Static Web Apps CI/CD](https://github.com/ljohnson2382/portfolio-site/actions/workflows/azure-static-web-apps-jolly-forest-0b51b220f.yml/badge.svg)](https://github.com/ljohnson2382/portfolio-site/actions/workflows/azure-static-web-apps-jolly-forest-0b51b220f.yml)
[![React 19](https://img.shields.io/badge/React-19.1.1-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff.svg)](https://vitejs.dev/)
[![Azure](https://img.shields.io/badge/Azure-Static%20Web%20Apps-0078d4.svg)](https://azure.microsoft.com/en-us/services/app-service/static/)

## 🎯 Project Overview

This portfolio represents a complete modernization from a 1300+ line monolithic React application to a professionally architected, component-based system with automated Azure deployment pipeline. The project demonstrates expertise in:

- **Enterprise React Architecture** - Component extraction and modular design patterns
- **Azure Cloud Deployment** - PowerShell-managed Azure Static Web Apps with CI/CD
- **Professional DevOps** - GitHub Actions workflows and automated deployment
- **Business Impact Communication** - Detailed project outcomes with measurable results

## 🏗️ Technical Architecture

### **Component-Based Design**
Refactored from monolithic structure to organized, maintainable components:

```
src/components/
├── Navigation/           # Responsive navigation with mobile menu
│   └── Navigation.jsx    # Active section tracking, smooth scrolling
├── Sections/            # Main content sections
│   ├── HeroSection.jsx  # Professional introduction with metrics
│   └── AboutSection.jsx # Technical journey and approach
└── Common/              # Reusable UI components
    └── FloatingHomeButton.jsx # Scroll-to-top functionality
```

### **Custom Hooks & Utilities**
```
src/hooks/
└── useScrollHandler.js   # Scroll position tracking and active section detection

src/styles/constants/     # Organized style management
├── navigationStyles.js  # Navigation-specific styles
├── heroStyles.js        # Hero section styling
├── aboutStyles.js       # About section styling
└── commonStyles.js      # Shared style constants
```

### **Data Architecture**
```
src/data/
└── portfolio-data.js     # Centralized content management
                         # Skills, experience, projects, credentials
```

## 🚀 Modern Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | Latest React with modern hooks and concurrent features |
| **Vite** | 7.1.7 | Lightning-fast build tool with HMR |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS with custom design system |
| **Lucide React** | 0.548.0 | Modern, customizable icon library |
| **Azure Static Web Apps** | Latest | Enterprise cloud hosting with global CDN |
| **GitHub Actions** | Latest | Automated CI/CD pipeline |
| **PowerShell Az Module** | Latest | Infrastructure as Code management |

## ⚡ Performance & Features

### **Developer Experience**
- **Fast Refresh** - Instant development feedback with Vite HMR
- **Modern ESLint** - Code quality and consistency enforcement
- **Component Organization** - Clear separation of concerns and reusability
- **Custom Hooks** - Shared business logic and state management

### **Production Features**
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- **Performance Optimized** - Code splitting and lazy loading ready
- **SEO Ready** - Semantic HTML structure and meta tag optimization
- **Accessibility** - WCAG compliant with proper ARIA attributes
- **Progressive Enhancement** - Works with JavaScript disabled

### **Professional Showcase**
- **Project Case Studies** - Detailed outcomes with measurable business impact
- **Technical Competencies** - Organized skill categorization with real-world context
- **Professional Credentials** - Education, certifications, and continuous learning
- **Resume Integration** - Direct PDF download with proper file handling

## � Development Workflow

### **Prerequisites**
- Node.js 18+ (recommended: latest LTS)
- npm 9+ or yarn 3+
- Git 2.40+

### **Local Development**
```bash
# Clone the repository
git clone https://github.com/ljohnson2382/portfolio-site.git
cd portfolio-site

# Install dependencies
npm install

# Start development server (typically runs on http://localhost:5174)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint codebase
npm run lint
```

### **Azure Deployment Setup**
```powershell
# Connect to Azure (requires Azure PowerShell module)
Connect-AzAccount

# Create Static Web App (example - already deployed)
New-AzStaticWebApp -ResourceGroupName "YourRG" -Name "portfolio-site" -Location "East US 2"

# Get deployment token for GitHub Actions
$secrets = Get-AzStaticWebAppSecret -ResourceGroupName "YourRG" -Name "portfolio-site"
$secrets.Property.apiKey  # Add this to GitHub Secrets as AZURE_STATIC_WEB_APPS_API_TOKEN
```

## 🚀 Deployment Pipeline

### **Automated CI/CD**
```yaml
# Triggered on: push to main, pull requests
├── Checkout code
├── Setup Node.js 18
├── Install dependencies (npm ci)
├── Build application (npm run build)
├── Deploy to Azure Static Web Apps
└── Cleanup and notifications
```

### **Azure Infrastructure**
- **Static Web Apps** - Global CDN with automatic SSL
- **GitHub Integration** - Seamless deployment from repository
- **Custom Domain Ready** - Prepared for loydjohnson.com integration
- **API Functions** - Backend ready with comprehensive documentation

## 📊 Project Metrics & Achievements

### **Code Quality Improvements**
- **Reduced Complexity**: Monolithic 1300+ lines → Organized component architecture
- **Maintainability**: Separated concerns with clear file structure
- **Reusability**: Extracted common components and utilities
- **Performance**: Optimized bundle size and loading performance

### **DevOps Implementation**
- **Automation**: Zero-touch deployment from commit to production
- **Infrastructure as Code**: PowerShell-managed Azure resources
- **Version Control**: Clean git history with conventional commits
- **Documentation**: Comprehensive README and API documentation

### **Professional Presentation**
- **Business Impact**: Quantified outcomes for each project showcase
- **Technical Depth**: Detailed implementation approaches and technologies
- **Career Progression**: Clear narrative of professional growth
- **Continuous Learning**: Active certifications and skill development

## 🎯 Portfolio Sections

| Section | Purpose | Technical Implementation |
|---------|---------|-------------------------|
| **Hero** | Professional introduction with key metrics | Dynamic stats, gradient animations, responsive layout |
| **About** | Technical journey and leadership approach | Card-based design, image optimization, mobile-first |
| **Experience** | Professional work history with context | Timeline layout, hover effects, detailed descriptions |
| **Skills** | Technical competencies organized by category | Grid system, icon integration, skill categorization |
| **Projects** | Featured case studies with measurable outcomes | Detailed cards, outcome metrics, technology badges |
| **Credentials** | Education and professional certifications | Interactive badges, progress tracking, verification links |
| **Contact** | Professional contact methods and resume | Form integration ready, multiple contact options |

## � Security & Best Practices

- **Dependency Management** - Regular security audits and updates
- **Environment Variables** - Secure handling of API keys and secrets
- **Content Security** - XSS protection and secure content delivery
- **HTTPS Everywhere** - SSL/TLS encryption for all communications
- **Privacy Compliance** - GDPR-ready with minimal data collection

## 📚 Learning Resources

This project demonstrates proficiency in:

- **Modern React Patterns** - Hooks, context, component composition
- **Azure Cloud Services** - Static Web Apps, Functions, PowerShell management
- **DevOps Practices** - CI/CD, Infrastructure as Code, automated testing
- **Professional Communication** - Technical writing, project documentation
- **Business Acumen** - ROI measurement, stakeholder communication

## 🤝 Contributing

While this is a personal portfolio, the architecture and deployment patterns are designed to be educational. Key learning areas include:

- Component extraction strategies
- Azure PowerShell automation
- GitHub Actions workflows
- Professional portfolio presentation

## � Professional Contact

- **Portfolio**: [www.loydjohnson.com](https://www.loydjohnson.com)
- **Email**: [contact@loydjohnson.com](mailto:contact@loydjohnson.com)
- **LinkedIn**: [linkedin.com/in/loydj](https://linkedin.com/in/loydj)
- **Phone**: [781.706.2313](tel:7817062313)
- **Resume**: [Download PDF](https://jolly-forest-0b51b220f.3.azurestaticapps.net/Resume_Loyd%20Johnson.pdf)

---

## � Future Enhancements

- **Azure Functions Integration** - Contact form backend with email notifications
- **Custom Domain** - loydjohnson.com with SSL certificate
- **Analytics Integration** - Privacy-compliant visitor tracking
- **Performance Monitoring** - Application Insights integration
- **A/B Testing** - Feature flag implementation for continuous improvement

---

**🏗️ Built with enterprise-grade practices and modern technologies**  
**📈 Demonstrating both technical expertise and business impact**  
**🚀 Deployed with automated Azure DevOps pipeline**

*Last Updated: October 2025*
