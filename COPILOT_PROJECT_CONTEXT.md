# Lloyd Johnson Development Services - CRM System Project Context

## 🎯 Project Overview
You are working on Lloyd Johnson's **Client Management CRM System** - a professional dual-ticketing workflow that manages contractor projects through automated GitHub + Zoho CRM integration. This system serves as both Lloyd's personal business CRM and a scalable template for client services.

## 🏗️ System Architecture

### Primary Purpose
- **Personal CRM**: Manage Lloyd's contractor client projects (starting with 3-Boys-Handyman)
- **Client Service**: Template system deployable for other contractors
- **Dual-Ticketing**: GitHub issues (technical team) + Zoho tasks (customer management)
- **Automated Workflow**: Staging deployment → Client notification → Approval → Production

### Technology Stack
- **Azure Functions**: Serverless backend (Node.js 18)
- **Zoho CRM**: Customer relationship management
- **GitHub API**: Technical project tracking
- **Professional Email**: Client communication templates

## 📁 Project Structure & Key Files

### Main Implementation Files
- **`CRM_IMPLEMENTATION_PLAN.md`** - Complete business strategy, technical architecture, scaling roadmap, and cost analysis
- **`azure-functions/index.js`** - Full CRM system implementation (500+ lines)
  - 4 main Azure Functions
  - ZohoClient and GitHubClient utility classes  
  - Professional email templates
  - Comprehensive error handling
- **`azure-functions/package.json`** - Dependencies and project configuration
- **`azure-functions/local.settings.json`** - Environment variables template

### Configuration Files
- **`azure-functions/host.json`** - Azure Functions runtime settings
- **`azure-functions/.funcignore`** - Deployment exclusion rules

## 🔧 Core Functions

### 1. `/api/client-project-deployed` (Main Workflow)
**Purpose**: Triggered when client project staging is deployed
**Process**:
1. Create GitHub issue (technical ticket)
2. Create Zoho CRM task (customer ticket)  
3. Send professional client notification email
4. Link both ticketing systems together

### 2. `/api/zoho-webhook-handler`
**Purpose**: Handle Zoho CRM events (approvals, rejections, comments)
**Events**: `task_approved`, `task_rejected`, `task_comment_added`

### 3. `/api/github-webhook-handler` 
**Purpose**: Handle GitHub events (issue closures, PR merges)
**Events**: Issue closed, Pull request merged

### 4. `/api/generate-zoho-auth-url`
**Purpose**: OAuth setup helper for Zoho API integration

## 🔗 Integration Requirements

### Zoho API Configuration
- **Application Name**: `LloydJohnson-ClientManagement-CRM`
- **Domain**: `https://loydjohnson.com`
- **Redirect URI**: `https://loydjohnson.com/auth/zoho/callback`
- **Scopes**: `ZohoCRM.modules.ALL`, `ZohoCRM.users.READ`, `ZohoCRM.settings.READ`

### Environment Variables Needed
```
ZOHO_CLIENT_ID=your_zoho_client_id
ZOHO_CLIENT_SECRET=your_zoho_client_secret
ZOHO_REFRESH_TOKEN=your_zoho_refresh_token
GITHUB_TOKEN=your_github_personal_access_token
LOYDJOHNSON_EMAIL=approvals@loydjohnson.com
AZURE_FUNCTION_BASE_URL=https://func-loydjohnson-crm-prod.azurewebsites.net
```

### Azure Resources
- **Function App**: `func-loydjohnson-crm-prod`
- **Storage Account**: `loydjohnsoncrm`
- **Application Insights**: For monitoring and logs

## 📊 Data Flow & Client Structure

### Typical Client Project Data
```javascript
{
  business_client: "3-Boys-Handyman",           // Lloyd's client company
  end_customer: {                               // Client's customer
    name: "John Smith",
    email: "john@example.com", 
    phone: "(555) 123-4567"
  },
  project: {
    name: "Kitchen Renovation",
    address: "123 Main St, Anytown, USA",
    type: "Residential Remodel",
    budget: "$25,000"
  },
  technical: {
    pr_number: "PR-2025-001",
    staging_url: "https://staging.homefixandbuild.org",
    commit_sha: "abc123def",
    branch: "feature/kitchen-updates",
    changes: ["Updated hero section", "Added project gallery"]
  }
}
```

### Dual-Ticketing Workflow
```
1. Staging Deployed → Azure Function Triggered
2. GitHub Issue Created (Technical Team Tracking)
3. Zoho CRM Task Created (Customer Management)
4. Professional Email Sent to End Customer
5. Systems Linked (Cross-references maintained)
6. Client Reviews → Approval/Rejection Handling
7. Production Deployment → Final Notifications
```

## 🎯 Business Strategy

### Phase 1: Personal CRM (Current)
- Use for Lloyd's own client projects
- Perfect workflow with real clients (starting with 3-Boys-Handyman)
- Build proven track record and testimonials

### Phase 2: Client CRM Services
- Offer "CRM-as-a-Service" to other contractors
- Template-based rapid deployment
- Monthly recurring revenue model

### Phase 3: Platform Business
- Multi-tenant SaaS platform
- Self-service client onboarding
- Marketplace integrations

## 🧪 Testing Strategy

### Test Mode Available
All functions support `?test=true` parameter for safe testing without:
- Creating real GitHub issues
- Creating real Zoho tasks
- Sending actual emails
- Making external API calls

### Current Test Client
**3-Boys-Handyman** serves as the primary test case and first real client implementation.

## 🔍 Key Implementation Details

### ZohoClient Class Features
- Automatic OAuth token refresh
- Professional task creation with custom fields
- Status update capabilities
- Error handling and logging

### GitHubClient Class Features  
- Issue creation with proper labels
- Comment management
- Issue closure handling
- Repository agnostic (works with any client repo)

### Email Templates
- Professional client communication
- Project-specific details included
- Clear call-to-action for client review
- Support contact information

## 📋 Development Guidelines

### When Working on This Project
1. **Always check `CRM_IMPLEMENTATION_PLAN.md`** for complete business context
2. **Test functions with `?test=true`** before production deployment
3. **Maintain dual-ticketing integrity** - both GitHub and Zoho must stay synchronized
4. **Use professional communication** - all client-facing content should be polished
5. **Consider scalability** - code should work for multiple clients simultaneously

### Code Standards
- Comprehensive error handling and logging
- Professional email templates and communication
- Environment variable configuration for all secrets
- Modular class-based architecture (ZohoClient, GitHubClient)
- Azure Functions best practices

### API Integration Notes
- Zoho requires OAuth refresh token workflow
- GitHub requires Personal Access Token with repo permissions
- All external API calls should have retry logic and error handling
- Functions should be idempotent where possible

## 🚀 Deployment Context

This system is designed to be:
- **Multi-tenant**: Handle multiple business clients simultaneously
- **Scalable**: Template for rapid client onboarding
- **Professional**: Enterprise-grade client communication
- **Reliable**: Comprehensive error handling and monitoring
- **Cost-effective**: Serverless architecture with minimal overhead

The codebase serves as both a working CRM for Lloyd's business and a template/framework for offering CRM services to other contractors in the industry.

---

**For detailed implementation guidance, refer to the specific files mentioned above. Each contains comprehensive documentation and production-ready code.**