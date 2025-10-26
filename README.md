# Loyd Johnson - Portfolio Website

A modern, responsive portfolio website showcasing IT professional experience, projects, and expertise.

## 🚀 Tech Stack

- **Frontend**: React 19.1.1 + Vite 7.1.7
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **Deployment**: Azure Static Web Apps
- **Database**: MariaDB (planned)
- **CI/CD**: GitHub Actions

## 🏗️ Project Structure

```
portfolio-site/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation/      # Navigation component
│   │   ├── Sections/        # Page sections (Hero, About, etc.)
│   │   └── Common/          # Reusable components
│   ├── hooks/               # Custom React hooks
│   ├── styles/              # CSS files and style constants
│   ├── data/                # Static data and content
│   ├── utils/               # Utility functions
│   └── assets/              # Static assets
├── public/                  # Public assets
├── api/                     # Azure Functions (planned)
└── .github/workflows/       # GitHub Actions workflows
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-site.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Features

- **Responsive Design** - Works on all devices
- **Component Architecture** - Modular, maintainable code
- **Performance Optimized** - Fast loading and smooth animations
- **SEO Friendly** - Proper meta tags and structure
- **Contact Integration** - Azure Functions + MariaDB (planned)
- **Continuous Deployment** - Automated deployment via GitHub Actions

## 🎯 Sections

- **Hero** - Professional introduction with key metrics
- **About** - Personal background and technical journey  
- **Experience** - Professional work history
- **Skills** - Technical competencies and tools
- **Projects** - Featured project showcases with detailed outcomes
- **Credentials** - Education and professional certifications
- **Contact** - Contact form with backend integration

## 🚀 Deployment

This site is deployed using Azure Static Web Apps with GitHub Actions for CI/CD.

### Deployment Process
1. Push to main branch triggers GitHub Actions workflow
2. Vite builds the production app
3. Azure Static Web Apps deploys automatically
4. Azure Functions handle backend functionality

## 📱 Contact

- **Email**: contact@loydjohnson.com
- **LinkedIn**: [linkedin.com/in/loydj](https://linkedin.com/in/loydj)
- **Portfolio**: [loydjohnson.com](https://loydjohnson.com)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ by Loyd Johnson**
# Azure Static Web Apps Deployment
