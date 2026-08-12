// Portfolio Data - Static data arrays extracted from the main component

// Navigation items
export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'learning-philosophy', label: 'Learning Philosophy' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' }
];

// Skills categories
export const skillsCategories = [
  {
    iconName: 'Database',
    title: 'Systems & Platforms',
    skills: ['Active Directory', 'Microsoft Azure', 'Microsoft Intune', 'Jamf', 'DUO Admin', 'Adobe Admin', 'Papercut Admin', 'Global Protect VPN', 'Windows', 'macOS']
  },
  {
    iconName: 'Cloud',
    title: 'Service Management',
    skills: ['ServiceNow', 'Microsoft Project', 'Asana', 'ITIL 4', 'Process Optimization']
  },
  {
    iconName: 'Code',
    title: 'Development & Automation',
    skills: ['PowerShell', 'SQL', 'Python', 'JavaScript', 'HTML/CSS', 'Blancco', 'Bomgar Remote Support', 'Git', 'GitHub Issues']
  },
  {
    iconName: 'Palette',
    title: 'Design & Communication',
    skills: ['Figma', 'Draw.io', 'Adobe XD', 'Miro', 'Technical Writing']
  }
];

// About section stats
export const aboutStats = [
  { number: '10+', label: 'Years Experience' },
  { number: '91', label: 'Devices Lifecycle-Managed' },
  { number: '111%', label: 'Ticket Capacity Increase' },
  { number: '2,000+', label: 'Tickets Resolved' }
];

// Experience data
export const experienceData = [
  {
    title: 'IT Systems Support Specialist',
    company: 'Beacon Hill Staffing — Placed at CyberArk, A Palo Alto Networks Company',
    period: 'January 2026 - Present',
    description: 'Delivering Tier 2 endpoint and systems support across the Americas region for a global cybersecurity enterprise, coordinating escalations with global service teams, the local help desk, and US IT.',
    achievements: [
      'Executed secure disposal of 91 devices (72 MacBook Pro T2; 19 Dell Latitude 5730 and Precision 7730), reconciling every asset record in ServiceNow and deprovisioning each unit from Jamf and Intune',
      'Authored the cross-platform secure erasure SOP covering Blancco on T2 through M5 Apple silicon and Dell hardware, with documented fallback paths for non-booting units',
      'Redesigned the enterprise off-boarding workflow, lifting monthly ticket capacity from a prior high of 117 to 217 and then 247 during acquisition-driven peak volume — a 111% increase achieved after the team lost three technicians',
      'Built the Asset Lifecycle Management Dashboard in ServiceNow, spanning off-boarding, recovery, reimaging, return-to-inventory, and disposal with technician-attributed reporting',
      'Designed a 9-color physical inventory system using color-coded dry erase board magnets mapped to asset lifecycle stages in ServiceNow, enabling immediate visual triage without system access',
      'Rebuilt the intake pipeline for off-boarded and refreshed laptops with a PowerShell-driven image-and-rebuild process that detects device model, installs correct drivers, and runs Dell Command Update unattended during OOBE, leaving roughly 100 endpoints deploy-ready on demand',
      'Migrated approximately 120 endpoints from the CyberArk image to the Palo Alto Networks standard image during post-acquisition integration'
    ]
  },
  {
    title: 'IT Client Support Specialist',
    company: 'Northeastern University',
    period: 'April 2022 - December 2025',
    description: 'Delivered advanced Tier II and III endpoint support across Windows and macOS environments using Jamf, Intune, Azure AD, and ServiceNow for 38,000+ students, 3,000+ faculty, and 4,000+ staff across 13 global campus locations.',
    achievements: [
      'Processed 2,000+ tickets at 31% above team average volume, including 42 high-priority tickets (180% above team average)',
      'Designed and deployed 4 operational dashboards in ServiceNow to improve team workflow visibility, accountability, and management reporting',
      'Led knowledge base authoring and junior staff training initiatives; served as lead contributor to the campus locker loaner program and portable charging initiative',
      'Progressed from Service Desk Analyst to IT Client Support Specialist; consistently rated Exceeds Expectations in annual performance reviews'
    ]
  },
  {
    title: 'Operations Manager',
    company: 'Elite Delivery Services',
    period: 'March 2017 - April 2022',
    description: 'Managed daily operations for a 30-driver regional fleet with a focus on performance optimization and customer satisfaction.',
    achievements: [
      'Improved on-time delivery rate by 18% through data-driven route optimization and strategic planning',
      'Reduced operational costs by 12% through analytical routing strategies and resource allocation improvements',
      'Decreased employee turnover by 25% through strategic workforce development and engagement initiatives',
      'Resolved complex delivery escalations and client conflicts, increasing customer satisfaction scores by 20%'
    ]
  },
  {
    title: 'Assistant Engineer',
    company: 'Q Division Studios',
    period: 'September 2013 - December 2017',
    description: 'Supported high-profile studio sessions in Somerville, MA, coordinating with producers, artists, and lead engineers to ensure seamless execution.',
    achievements: [
      'Managed session prep, patchbay configuration, outboard gear setup, and real-time troubleshooting under pressure',
      'Acted as technical lead for incoming interns, guiding session setup and maintaining gear standards',
      'Mentored peers in a fast-paced, high-expectation studio environment'
    ]
  }
];

// Project outcomes for specific projects
export const velocityProjectOutcomes = [
  'Successfully deployed sustainable charging solution campus-wide',
  'Created operational framework serving users continuously',
  'Established cross-departmental coordination model',
  'Reduced charging access inequality in high-traffic areas',
  'Built comprehensive training and documentation',
  'Ongoing vendor management and technical support leadership'
];

export const laptopLockerOutcomes = [
  'Implemented comprehensive security and tracking system',
  'Established automated inventory management processes',
  'Created user training and support documentation',
  'Achieved 99% equipment accountability and tracking',
  'Reduced equipment loss through systematic management',
  'Developed scalable locker management protocols'
];

export const servicenowOutcomes = [
  'Streamlined printer support across campus',
  'Reduced response times through automated routing',
  'Improved visibility into printer status and issues',
  'Enhanced coordination between support tiers',
  'Phase 1 successfully completed and deployed',
  'Established foundation for future system expansions'
];

// Project skills
export const velocitySkills = [
  'Project Management', 'Vendor Management', 'Cross-functional Coordination', 
  'Training Development', 'Asset Management', 'Technical Documentation', 
  'Stakeholder Communication', 'IT Infrastructure'
];

export const laptopLockerSkills = [
  'Asset Management', 'Inventory Systems', 'Security Protocols', 
  'Database Management', 'User Training', 'Process Development', 
  'System Integration', 'Documentation'
];

export const servicenowSkills = [
  'Systems Integration', 'ServiceNow Development', 'Papercut Administration', 
  'Workflow Design', 'Dashboard Creation', 'Vendor Coordination', 
  'Multi-tier Support', 'Process Automation'
];

// DNS & SSL Implementation Project Data
export const dnsSSLOutcomes = [
  'Zero-downtime domain migration with enterprise DNS management',
  'Implemented Microsoft 365 email with full authentication (SPF/DKIM/DMARC)',
  'Successfully deployed Azure-managed SSL certificate with automated renewal',
  'Established professional brand integration across LinkedIn, GitHub, and portfolio',
  'Created comprehensive Azure DNS and PowerShell automation framework',
  'Achieved complete end-to-end secure infrastructure with enterprise-grade practices'
];

export const dnsSSLSkills = [
  'Azure DNS Management', 'SSL/TLS Implementation', 'Domain Migration', 
  'Microsoft 365 Administration', 'PowerShell Automation', 'Email Security Protocols',
  'DNS Troubleshooting', 'Certificate Management', 'Cloud Infrastructure', 
  'Network Security', 'Systems Integration', 'Technical Documentation'
];

// System Scripts Project Data
export const systemScriptsOutcomes = [
  'Built comprehensive cross-platform automation toolkit supporting 5+ operating systems',
  'Developed modular Python framework with enterprise-grade logging and error handling',
  'Created help desk troubleshooting tools reducing manual diagnostic time by 70%',
  'Implemented security-first automation with configurable safety checks and validation',
  'Established professional SOPs for network, performance, and system maintenance',
  'Deployed production-ready scripts with comprehensive documentation and testing'
];

export const systemScriptsSkills = [
  'Python Development', 'Cross-Platform Automation', 'System Administration', 
  'Network Diagnostics', 'Performance Analysis', 'Windows PowerShell',
  'Linux Bash Scripting', 'Help Desk Tools', 'Configuration Management',
  'Logging & Monitoring', 'Error Handling', 'Documentation', 'DevOps Practices'
];

// Additional certifications and professional highlights
export const professionalHighlights = [
  'Google Project Management Professional Certificate',
  'Microsoft Azure Fundamentals (AZ-900) - Certification Preparation',
  'ServiceNow: Basic Administration (LinkedIn Learning)',
  'Intro to Service Management with ITIL 4 (LinkedIn Learning)',
  'Bachelor of Science in Information Technology - In Progress, GPA 3.86',
  'Cross-Platform Device Lifecycle Management Expert (Apple & Dell)'
];

// CyberArk Asset Lifecycle & Endpoint Support Project Data
export const cyberArkOutcomes = [
  'Delivered structured, repeatable, audit-friendly disposal workflow for Apple and Dell platforms',
  'Redesigned off-boarding workflow, lifting monthly ticket capacity 111% during acquisition-driven peak volume',
  'Built centralized ServiceNow dashboard covering off-boarding, recovery, reimaging, and disposal',
  'Authored cross-platform secure erasure SOP spanning Apple silicon (T2-M5) and Dell hardware',
  'Migrated ~120 endpoints to the Palo Alto Networks standard image during post-acquisition integration',
  'Restored full asset lifecycle accuracy across Jamf, Intune, and ServiceNow after 91-device disposal',
  'Rebuilt automated PowerShell imaging pipeline, keeping ~100 endpoints deploy-ready on demand',
  'Implemented a 9-color physical inventory system for instant visual lifecycle triage'
];

export const cyberArkSkills = [
  'ServiceNow Administration', 'Asset Lifecycle Management', 'Jamf', 'Microsoft Intune',
  'Secure Data Erasure (Blancco)', 'Endpoint Imaging', 'Tier 2 Systems Support',
  'Dashboard Design', 'SOP Documentation', 'M&A Endpoint Integration', 'Process Automation',
  'PowerShell Scripting'
];

// Contact information
export const contactInfo = {
  email: 'contact@loydjohnson.com',
  phone: '+1 (781) 706-2313',
  linkedin: 'https://linkedin.com/in/loydjohnson',
  github: 'https://github.com/loydjohnson'
};