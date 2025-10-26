# Azure Functions API

This directory contains serverless Azure Functions that provide backend functionality for the portfolio website.

## 📁 Project Structure

```
api/
├── README.md           # This file
├── package.json        # Node.js dependencies (when needed)
├── host.json          # Azure Functions host configuration
├── local.settings.json # Local development settings (gitignored)
└── functions/          # Individual function directories
    ├── contact/        # Contact form handler
    ├── analytics/      # Visitor analytics
    └── health/         # Health check endpoint
```

## 🚀 Available Functions

### `/api/contact` (Planned)
- **Method**: POST
- **Purpose**: Handle contact form submissions from the portfolio
- **Features**: Email validation, spam protection, notification sending
- **Response**: JSON status and message

### `/api/analytics` (Future)
- **Method**: POST
- **Purpose**: Track visitor analytics and page views
- **Features**: Privacy-compliant analytics, performance metrics
- **Response**: Success confirmation

### `/api/health` (Future)
- **Method**: GET
- **Purpose**: Health check for monitoring
- **Response**: API status and uptime information

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ (matches Static Web App runtime)
- Azure Functions Core Tools
- Azure CLI (already installed)

### Local Development
```bash
# Install Azure Functions Core Tools (if needed)
npm install -g azure-functions-core-tools@4 --unsafe-perm true

# Navigate to api directory
cd api

# Install dependencies (when functions are added)
npm install

# Start local development server
func start
```

### Environment Variables
Create `local.settings.json` for local development:
```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "WEBSITE_NODE_DEFAULT_VERSION": "~18"
  }
}
```

## 📦 Deployment

### Automatic Deployment
Functions are automatically deployed with the Static Web App via GitHub Actions workflow:
- **Trigger**: Push to `main` branch
- **Build**: Node.js functions are built and deployed
- **Integration**: Functions are accessible at `/api/*` routes

### Manual Testing
```powershell
# Test deployed functions
Invoke-RestMethod -Uri "https://jolly-forest-0b51b220f.3.azurestaticapps.net/api/health" -Method GET

# Test locally (when functions exist)
Invoke-RestMethod -Uri "http://localhost:7071/api/health" -Method GET
```

## 🔧 Configuration

### Runtime Configuration (`host.json`)
```json
{
  "version": "2.0",
  "functionTimeout": "00:05:00",
  "extensions": {
    "http": {
      "routePrefix": "api"
    }
  }
}
```

### CORS Settings
CORS is automatically configured for Static Web Apps integration.

## 🔐 Security

### Authentication
- Static Web Apps provide built-in authentication integration
- Functions can access user information via headers
- Custom authentication middleware available

### API Keys
- Production functions use managed identity
- Local development uses connection strings
- Secrets stored in Azure Key Vault integration

## 📊 Monitoring

### Application Insights
- Automatic telemetry collection
- Performance monitoring
- Error tracking and alerting
- Custom metrics and logging

### PowerShell Monitoring Commands
```powershell
# Check function app status
Get-AzStaticWebApp -ResourceGroupName "LoydJohnson.com" -Name "portfolio-site"

# View function logs (when functions exist)
Get-AzStaticWebAppFunction -ResourceGroupName "LoydJohnson.com" -Name "portfolio-site"
```

## 📋 Next Steps

1. **Create Contact Function**: Implement form submission handler
2. **Add Validation**: Email validation and spam protection
3. **Setup Notifications**: Email/SMS alerts for new contacts
4. **Analytics Integration**: Privacy-compliant visitor tracking
5. **Health Monitoring**: Status endpoints for uptime monitoring

## 🔗 Resources

- [Azure Static Web Apps Functions Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/apis)
- [Azure Functions Node.js Developer Guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node)
- [Static Web Apps API Configuration](https://docs.microsoft.com/en-us/azure/static-web-apps/configuration)