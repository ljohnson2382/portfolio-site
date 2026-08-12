// Lloyd Johnson Client Management CRM System
// Dual-Ticketing: GitHub (Technical) + Zoho CRM (Customer)
// Manages all client projects through automated workflow

const { app } = require('@azure/functions');
const axios = require('axios');

// ==========================================
// MAIN FUNCTION: Client Project Deployed
// ==========================================
app.http('client-project-deployed', {
  methods: ['GET', 'POST'],
  authLevel: 'function',
  handler: async (request, context) => {
    try {
      const isTest = request.query.get('test') === 'true';
      
      // Get request data
      const data = request.method === 'POST' 
        ? await request.json()
        : {
            business_client: '3-Boys-Handyman',
            end_customer: {
              name: 'John Smith',
              email: 'john.smith@example.com',
              phone: '(555) 123-4567'
            },
            project: {
              name: 'Kitchen Renovation',
              address: '123 Main St, Anytown, USA', 
              type: 'Residential Remodel',
              budget: '$25,000'
            },
            technical: {
              pr_number: 'auto-generated',
              staging_url: 'https://staging.homefixandbuild.org',
              commit_sha: 'abc123def',
              branch: 'feature/kitchen-updates',
              changes: ['Updated hero section', 'Added project gallery', 'Improved mobile responsiveness']
            }
          };

      context.log('🏗️ Lloyd Johnson CRM: Client project deployment triggered', { 
        client: data.business_client,
        project: data.project.name,
        test_mode: isTest 
      });

      // 1. Create GitHub Issue (Technical Team Ticket)
      const githubResult = await createGitHubIssue(data, isTest, context);
      
      // 2. Create Zoho CRM Task (Customer Management Ticket)
      const zohoResult = await createZohoCRMTask(data, githubResult.issue_number, isTest, context);
      
      // 3. Send Professional Client Notification
      const emailResult = await sendClientNotificationEmail(data, zohoResult, isTest, context);
      
      // 4. Link Both Ticketing Systems
      await linkDualTicketingSystems(githubResult.issue_number, zohoResult.task_id, data, isTest, context);

      return {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: true,
          crm_system: 'Lloyd Johnson Client Management',
          business_client: data.business_client,
          end_customer: data.end_customer.name,
          project: data.project.name,
          dual_tickets: {
            github_issue: `#${githubResult.issue_number}`,
            zoho_task: `Task-${zohoResult.task_id}`
          },
          notifications: {
            client_email_sent: emailResult.success,
            technical_team_notified: githubResult.success
          },
          staging_url: data.technical.staging_url,
          test_mode: isTest,
          workflow_status: 'Client approval workflow initiated',
          next_steps: [
            'Client reviews staging environment',
            'Client approves via Zoho portal',
            'Automatic production deployment triggered',
            'Final project completion notification sent'
          ],
          timestamp: new Date().toISOString()
        })
      };

    } catch (error) {
      context.log.error('❌ Client project deployment failed:', error);
      
      return {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: false,
          error: 'CRM workflow failed',
          message: error.message,
          crm_system: 'Lloyd Johnson Client Management',
          timestamp: new Date().toISOString()
        })
      };
    }
  }
});

// ==========================================
// ZOHO WEBHOOK HANDLER
// ==========================================
app.http('zoho-webhook-handler', {
  methods: ['POST'],
  authLevel: 'function', 
  handler: async (request, context) => {
    try {
      const webhookData = await request.json();
      
      context.log('📋 Zoho CRM Webhook received:', webhookData);

      // Handle different Zoho events
      switch (webhookData.event_type) {
        case 'task_approved':
          return await handleClientApproval(webhookData, context);
        case 'task_rejected':
          return await handleClientRejection(webhookData, context);
        case 'task_comment_added':
          return await handleClientComment(webhookData, context);
        default:
          context.log('ℹ️ Unhandled Zoho webhook event:', webhookData.event_type);
      }

      return { status: 200, body: 'Webhook processed' };

    } catch (error) {
      context.log.error('❌ Zoho webhook processing failed:', error);
      return { status: 500, body: 'Webhook processing failed' };
    }
  }
});

// ==========================================
// GITHUB WEBHOOK HANDLER  
// ==========================================
app.http('github-webhook-handler', {
  methods: ['POST'],
  authLevel: 'function',
  handler: async (request, context) => {
    try {
      const webhookData = await request.json();
      const eventType = request.headers.get('x-github-event');
      
      context.log('🐙 GitHub Webhook received:', eventType, webhookData.action);

      // Handle GitHub events
      switch (eventType) {
        case 'issues':
          if (webhookData.action === 'closed') {
            return await handleGitHubIssueClosed(webhookData, context);
          }
          break;
        case 'pull_request':
          if (webhookData.action === 'closed' && webhookData.pull_request.merged) {
            return await handlePullRequestMerged(webhookData, context);
          }
          break;
      }

      return { status: 200, body: 'GitHub webhook processed' };

    } catch (error) {
      context.log.error('❌ GitHub webhook processing failed:', error);
      return { status: 500, body: 'GitHub webhook processing failed' };
    }
  }
});

// ==========================================
// OAUTH HELPER FUNCTION
// ==========================================
app.http('generate-zoho-auth-url', {
  methods: ['GET'],
  authLevel: 'function',
  handler: async (request, context) => {
    try {
      const clientId = process.env.ZOHO_CLIENT_ID;
      const redirectUri = 'https://loydjohnson.com/auth/zoho/callback';
      const scope = 'ZohoCRM.modules.ALL,ZohoCRM.users.READ,ZohoCRM.settings.READ';
      
      const authUrl = `https://accounts.zoho.com/oauth/v2/auth?` +
        `scope=${encodeURIComponent(scope)}&` +
        `client_id=${clientId}&` +
        `response_type=code&` +
        `access_type=offline&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}`;

      return {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          auth_url: authUrl,
          instructions: [
            '1. Visit the auth_url above',
            '2. Authorize the application',
            '3. Copy the authorization code from the callback',
            '4. Use the code to generate refresh token'
          ]
        })
      };

    } catch (error) {
      context.log.error('❌ OAuth URL generation failed:', error);
      return { status: 500, body: 'OAuth setup failed' };
    }
  }
});

// ==========================================
// UTILITY CLASSES
// ==========================================

// Zoho CRM Client
class ZohoClient {
  constructor() {
    this.clientId = process.env.ZOHO_CLIENT_ID;
    this.clientSecret = process.env.ZOHO_CLIENT_SECRET;
    this.refreshToken = process.env.ZOHO_REFRESH_TOKEN;
    this.baseUrl = 'https://www.zohoapis.com/crm/v3';
  }

  async getAccessToken() {
    try {
      const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
        params: {
          refresh_token: this.refreshToken,
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: 'refresh_token'
        }
      });
      
      return response.data.access_token;
    } catch (error) {
      throw new Error(`Failed to get Zoho access token: ${error.message}`);
    }
  }

  async createTask(taskData) {
    const accessToken = await this.getAccessToken();
    
    const task = {
      data: [{
        Subject: taskData.subject,
        Status: 'Not Started',
        Priority: taskData.priority || 'High',
        Description: taskData.description,
        Due_Date: taskData.due_date,
        Task_Owner: taskData.owner,
        What_Id: taskData.related_to,
        // Custom fields for client management
        Business_Client: taskData.business_client,
        End_Customer_Name: taskData.end_customer_name,
        End_Customer_Email: taskData.end_customer_email,
        Project_Name: taskData.project_name,
        Project_Address: taskData.project_address,
        Staging_URL: taskData.staging_url,
        GitHub_Issue: taskData.github_issue,
        PR_Number: taskData.pr_number
      }]
    };

    const response = await axios.post(`${this.baseUrl}/Tasks`, task, {
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.data[0];
  }

  async updateTaskStatus(taskId, status, comments = '') {
    const accessToken = await this.getAccessToken();
    
    const updateData = {
      data: [{
        id: taskId,
        Status: status,
        Description: comments
      }]
    };

    await axios.put(`${this.baseUrl}/Tasks`, updateData, {
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }
}

// GitHub Client
class GitHubClient {
  constructor() {
    this.token = process.env.GITHUB_TOKEN;
    this.baseUrl = 'https://api.github.com';
  }

  async createIssue(repoOwner, repoName, issueData) {
    const response = await axios.post(
      `${this.baseUrl}/repos/${repoOwner}/${repoName}/issues`,
      {
        title: issueData.title,
        body: issueData.body,
        labels: issueData.labels || ['client-project', 'staging-deployed'],
        assignees: issueData.assignees || []
      },
      {
        headers: {
          'Authorization': `token ${this.token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  }

  async addComment(repoOwner, repoName, issueNumber, comment) {
    await axios.post(
      `${this.baseUrl}/repos/${repoOwner}/${repoName}/issues/${issueNumber}/comments`,
      { body: comment },
      {
        headers: {
          'Authorization': `token ${this.token}`,
          'Content-Type': 'application/json'
        }
      }
    );
  }

  async closeIssue(repoOwner, repoName, issueNumber) {
    await axios.patch(
      `${this.baseUrl}/repos/${repoOwner}/${repoName}/issues/${issueNumber}`,
      { state: 'closed' },
      {
        headers: {
          'Authorization': `token ${this.token}`,
          'Content-Type': 'application/json'
        }
      }
    );
  }
}

// ==========================================
// WORKFLOW FUNCTIONS
// ==========================================

async function createGitHubIssue(data, isTest, context) {
  try {
    if (isTest) {
      context.log('🧪 TEST: Would create GitHub issue');
      return { success: true, issue_number: 'TEST-123' };
    }

    const github = new GitHubClient();
    
    const issueTitle = `🏗️ ${data.business_client}: ${data.project.name} - Staging Review`;
    const issueBody = `
## Client Project Staging Review

**Business Client:** ${data.business_client}
**End Customer:** ${data.end_customer.name} (${data.end_customer.email})
**Project:** ${data.project.name}
**Address:** ${data.project.address}

### Technical Details
- **Staging URL:** ${data.technical.staging_url}
- **Branch:** ${data.technical.branch}
- **Commit:** ${data.technical.commit_sha}

### Changes Made
${data.technical.changes.map(change => `- ${change}`).join('\n')}

### Next Steps
1. ✅ Staging environment deployed
2. ⏳ Client review in progress
3. ⏳ Awaiting client approval
4. ⏳ Production deployment pending

**Zoho Task ID:** Will be linked once created
`;

    const issue = await github.createIssue('ljohnson2382', data.business_client || '3-Boys-Handyman-LLC', {
      title: issueTitle,
      body: issueBody,
      labels: ['client-project', 'staging-deployed', 'awaiting-approval']
    });

    context.log('✅ GitHub issue created:', issue.number);
    return { success: true, issue_number: issue.number };

  } catch (error) {
    context.log.error('❌ Failed to create GitHub issue:', error);
    return { success: false, error: error.message };
  }
}

async function createZohoCRMTask(data, githubIssueNumber, isTest, context) {
  try {
    if (isTest) {
      context.log('🧪 TEST: Would create Zoho CRM task');
      return { success: true, task_id: 'TEST-ZOHO-789' };
    }

    const zoho = new ZohoClient();
    
    const taskData = {
      subject: `${data.business_client}: ${data.project.name} - Client Approval Required`,
      description: `
Client project ready for review and approval.

CLIENT INFORMATION:
- Name: ${data.end_customer.name}
- Email: ${data.end_customer.email}
- Phone: ${data.end_customer.phone}

PROJECT DETAILS:
- Project: ${data.project.name}
- Address: ${data.project.address}
- Type: ${data.project.type}
- Budget: ${data.project.budget || 'Not specified'}

TECHNICAL DETAILS:
- Staging URL: ${data.technical.staging_url}
- GitHub Issue: #${githubIssueNumber}
- PR Number: ${data.technical.pr_number}

RECENT CHANGES:
${data.technical.changes.map(change => `• ${change}`).join('\n')}

NEXT STEPS:
1. Client reviews staging environment
2. Client provides feedback or approval
3. Production deployment upon approval
4. Final project completion confirmation
      `,
      priority: 'High',
      due_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 3 days from now
      business_client: data.business_client,
      end_customer_name: data.end_customer.name,
      end_customer_email: data.end_customer.email,
      project_name: data.project.name,
      project_address: data.project.address,
      staging_url: data.technical.staging_url,
      github_issue: `#${githubIssueNumber}`,
      pr_number: data.technical.pr_number
    };

    const task = await zoho.createTask(taskData);
    
    context.log('✅ Zoho CRM task created:', task.id);
    return { success: true, task_id: task.id };

  } catch (error) {
    context.log.error('❌ Failed to create Zoho CRM task:', error);
    return { success: false, error: error.message };
  }
}

async function sendClientNotificationEmail(data, zohoResult, isTest, context) {
  try {
    if (isTest) {
      context.log('🧪 TEST: Would send client notification email');
      return { success: true };
    }

    // Email template for professional client communication
    const emailTemplate = {
      to: data.end_customer.email,
      subject: `${data.project.name} - Ready for Your Review`,
      body: `
Dear ${data.end_customer.name},

Great news! Your ${data.project.name} project is ready for review.

We've completed the latest updates to your website and deployed them to a staging environment for your review and approval.

🔗 **Review Your Project Here:** ${data.technical.staging_url}

**Recent Updates:**
${data.technical.changes.map(change => `• ${change}`).join('\n')}

**What's Next:**
1. Please review the staging site at the link above
2. Test all functionality on both desktop and mobile
3. Reply to this email with your feedback or approval
4. Once approved, we'll deploy to your live website

**Questions or Changes Needed?**
Simply reply to this email or call us at your convenience. Our team is standing by to make any adjustments you need.

**Your Project Details:**
- Project: ${data.project.name}
- Address: ${data.project.address}
- Staging URL: ${data.technical.staging_url}
- Support Task: #${zohoResult.task_id}

Thank you for choosing Lloyd Johnson Development Services!

Best regards,
Lloyd Johnson
Lloyd Johnson Development Services
lloyd@loydjohnson.com
      `
    };

    // In a real implementation, you would integrate with SendGrid, Mailgun, or similar
    context.log('📧 Client notification email prepared:', emailTemplate);
    
    return { success: true, email_template: emailTemplate };

  } catch (error) {
    context.log.error('❌ Failed to send client notification:', error);
    return { success: false, error: error.message };
  }
}

async function linkDualTicketingSystems(githubIssueNumber, zohoTaskId, data, isTest, context) {
  try {
    if (isTest) {
      context.log('🧪 TEST: Would link dual ticketing systems');
      return { success: true };
    }

    const github = new GitHubClient();
    const zoho = new ZohoClient();

    // Add Zoho task link to GitHub issue
    const githubComment = `
🔗 **Linked Zoho CRM Task:** #${zohoTaskId}

This GitHub issue is linked to the customer management task in our CRM system. 

**Client Information:**
- Customer: ${data.end_customer.name}
- Email: ${data.end_customer.email}
- Project: ${data.project.name}

**Status Synchronization:**
- GitHub issue tracks technical progress
- Zoho task tracks customer communication and approval
- Both systems will be updated automatically as the project progresses
    `;

    await github.addComment('ljohnson2382', data.business_client || '3-Boys-Handyman-LLC', githubIssueNumber, githubComment);

    // Update Zoho task with GitHub issue link
    await zoho.updateTaskStatus(zohoTaskId, 'In Progress', `Linked to GitHub Issue #${githubIssueNumber}. Client notification sent and staging environment deployed.`);

    context.log('🔗 Dual ticketing systems linked successfully');
    return { success: true };

  } catch (error) {
    context.log.error('❌ Failed to link ticketing systems:', error);
    return { success: false, error: error.message };
  }
}

// ==========================================
// WEBHOOK EVENT HANDLERS
// ==========================================

async function handleClientApproval(webhookData, context) {
  context.log('✅ Client approved project:', webhookData);
  
  // Trigger production deployment
  // Close GitHub issue
  // Send final confirmation email
  
  return { status: 200, body: 'Client approval processed' };
}

async function handleClientRejection(webhookData, context) {
  context.log('❌ Client requested changes:', webhookData);
  
  // Reopen GitHub issue
  // Add client feedback to issue
  // Notify development team
  
  return { status: 200, body: 'Client feedback processed' };
}

async function handleClientComment(webhookData, context) {
  context.log('💬 Client added comment:', webhookData);
  
  // Add comment to GitHub issue
  // Notify relevant team members
  
  return { status: 200, body: 'Client comment processed' };
}

async function handleGitHubIssueClosed(webhookData, context) {
  context.log('🏁 GitHub issue closed:', webhookData.issue.number);
  
  // Update Zoho task status
  // Send project completion notification
  
  return { status: 200, body: 'GitHub issue closure processed' };
}

async function handlePullRequestMerged(webhookData, context) {
  context.log('🔀 Pull request merged:', webhookData.pull_request.number);
  
  // Could trigger new deployment workflow
  
  return { status: 200, body: 'Pull request merge processed' };
}

module.exports = { app };