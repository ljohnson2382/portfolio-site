import { useState, useEffect } from 'react';
import { Download, Mail, Linkedin, ChevronDown, Award, Briefcase, Users, TrendingUp, Target, Database, Cloud, Code, Phone, Lock, Shield, Globe, Network } from 'lucide-react';
import { 
  skillsCategories, 
  aboutStats, 
  experienceData, 
  velocityProjectOutcomes,
  laptopLockerOutcomes,
  servicenowOutcomes,
  dnsSSLOutcomes,
  velocitySkills,
  laptopLockerSkills,
  servicenowSkills,
  dnsSSLSkills,
  professionalHighlights,
  contactInfo
} from './data/portfolio-data.js';
import { scrollToSection } from './utils/helpers.js';
import { useScrollHandler } from './hooks/useScrollHandler.js';
import { commonStyles } from './styles/constants/commonStyles.js';

// Components
import Navigation from './components/Navigation/Navigation.jsx';
import HeroSection from './components/Sections/HeroSection.jsx';
import AboutSection from './components/Sections/AboutSection.jsx';
import LearningPhilosophySection from './components/Sections/LearningPhilosophySection.jsx';
import FloatingHomeButton from './components/Common/FloatingHomeButton.jsx';

function App() {
  const { scrolled, activeSection, showHomeButton } = useScrollHandler();

  // Helper function to get icon component by name
  const getIcon = (iconName, size = 24) => {
    const icons = {
      Database: <Database size={size} />,
      Cloud: <Cloud size={size} />,
      Code: <Code size={size} />
    };
    return icons[iconName] || null;
  };

  // Wrapper for imported scrollToSection
  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
  };

  // Style constants for remaining sections
  const styles = commonStyles;

  // Load Credly script for credential badge functionality
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <Navigation 
        scrolled={scrolled}
        activeSection={activeSection}
        onScrollToSection={handleScrollToSection}
      />

      {/* Hero Section */}
      <HeroSection onScrollToSection={handleScrollToSection} />

      {/* About Section */}
      <AboutSection />

      {/* Learning Philosophy Section */}
      <LearningPhilosophySection />

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>

          <div className="space-y-12">
            {[
              {
                title: 'IT Client Support Specialist',
                company: 'Northeastern University',
                period: 'April 2022 - Present',
                highlights: [
                  'Serve as primary technology liaison for 38,000+ students, 3,000+ faculty, and 4,000+ staff across 13 global campus locations',
                  'Designed and implemented comprehensive analytics dashboard that increased team workflow efficiency',
                  'Recognized by management for "tremendous job in collaborating" across departments and initiatives',
                  'Mentor junior analysts on technical procedures and customer service excellence',
                  'Developed expertise in equipment and asset management across multiple campus locations'
                ]
              },
              {
                title: 'Operations Manager',
                company: 'Elite Delivery Services',
                period: 'March 2017 - 2022',
                highlights: [
                  'Managed daily operations for 30-driver fleet, improving on-time delivery rate by 18%',
                  'Reduced operational costs by 12% through data-driven route optimization',
                  'Decreased employee turnover by 25% through strategic workforce development',
                  'Resolved complex delivery escalations, increasing customer satisfaction scores by 20%',
                  'Developed customer communication protocols that enhanced relationship management'
                ]
              },
              {
                title: 'Assistant Recording Engineer',
                company: 'Q Division',
                period: 'May 2014 - 2017',
                highlights: [
                  'Served as technical lead during complex studio sessions',
                  'Coordinated between lead engineers, artists, and support staff for seamless project delivery',
                  'Managed pre-session planning including resource allocation and technical setup'
                ]
              }
            ].map((job, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-1">{job.title}</h3>
                    <p className="text-lg text-slate-300">{job.company}</p>
                  </div>
                  <span className="text-slate-400 mt-2 md:mt-0">{job.period}</span>
                </div>
                <ul className="space-y-2 text-slate-300">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

              {/* Skills Section */}
        <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-5">
            <img 
              src="/images/keyboard-alerts.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillsCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="text-cyan-400 mb-4">{getIcon(category.iconName)}</div>
                <h3 className="text-xl font-semibold mb-4 text-slate-200">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 border border-slate-600 shadow-md shadow-slate-900/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 shadow-lg shadow-slate-900/50">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Stakeholder Relationship Management',
                'Process Improvement & Innovation',
                'Team Leadership & Mentorship',
                'Customer Experience Design',
                'Project Management',
                'Cross-Functional Collaboration',
                'Data Analysis & Decision Support',
                'Change Management'
              ].map((competency, index) => (
                <span key={index} className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg text-slate-300 shadow-md shadow-slate-900/50">
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Strategic initiatives demonstrating leadership, technical expertise, and measurable business impact
          </p>

          <div className="space-y-8">
            {/* Project 1: Walk-up Dashboard */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg">
                    <TrendingUp size={32} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-200 mb-2">Walk-up Experience Dashboard Redesign</h3>
                    <p className="text-slate-400 text-sm mb-2">Northeastern University ITS • December 2024 - December 2025</p>
                    <p className="text-slate-300 mb-4">
                      <strong>Centralized Command System:</strong> Designed and led the development of a unified dashboard ecosystem that merged all IT service offerings into a single, real-time management platform. This comprehensive solution served as the central nervous system for cross-functional teams, providing dynamic visibility and coordination across all student-facing technology services.
                    </p>
                    <p className="text-slate-300">
                      The dashboard solutions directly aligned with our service offerings because I architected them as an integrated ecosystem - each component feeding into a centralized communication structure that enabled real-time decision making and seamless collaboration across 13 campuses serving 38,000+ users.
                    </p>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">🎯 Unified Dashboard Ecosystem Architecture</h4>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div>
                      <strong className="text-cyan-300">Tech Bar Dashboard:</strong> Real-time incident tracking, customer queue monitoring, campus-wide printer status, and repair workflow management (vendor repairs and imaging room status)
                    </div>
                    <div>
                      <strong className="text-cyan-300">Technology Lending Dashboard:</strong> End-to-end asset lifecycle tracking (In Locker → In Use → Awaiting Return → Visual Inspection → Restocking), with interactive filtering for historical analysis and daily processing reports
                    </div>
                    <div>
                      <strong className="text-cyan-300">Central Communication Hub:</strong> All tier 1 escalations automatically route to tier 2 specialists, with auto-flagging for unassigned printer tickets after 2 hours, ensuring seamless support continuity
                    </div>
                    <div>
                      <strong className="text-cyan-300">Route-Based Printer Support:</strong> Geographic ticket routing by campus printer locations, with shift transition capabilities for continuous coverage
                    </div>
                    <div>
                      <strong className="text-purple-300">Unified Workflow Visibility:</strong> Designed a centralized dashboard aligned with Velocity Click & Collect's automated data feed, enabling staff to track loan records across all stages — from checkout to return. Replaced fragmented queries with real-time reporting, reducing missed steps and preventing asset loss through clear, actionable insights.
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Project Approach</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>Conducted user research with CX staff, student employees, and leadership</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>Gathered requirements and analyzed existing pain points</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>Designed five specialized dashboards for different user groups</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>Integrated with ServiceNow for real-time monitoring</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Dashboard Solutions</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-purple-400">→</span>
                        <span><strong>CXt Concierge:</strong> FAQs, location & order tracking</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400">→</span>
                        <span><strong>Tech Bar:</strong> Tier 1 support & queue monitoring</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400">→</span>
                        <span><strong>SDA Dashboard:</strong> Fast-paced ticket management</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400">→</span>
                        <span><strong>Printer Dashboard:</strong> Campus-wide printer monitoring</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400">→</span>
                        <span><strong>Tech Lending:</strong> Vending machine asset tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Business Impact</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Created unified command center eliminating information silos',
                      'Enabled real-time cross-functional team coordination',
                      'Automated escalation workflows reducing response times by 40%',
                      'Established single source of truth for all IT service metrics',
                      'Eliminated manual ticket routing through intelligent auto-flagging',
                      'Integrated asset lifecycle management with service delivery'
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-green-400">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['User Research', 'Requirements Gathering', 'ServiceNow', 'Dashboard Design', 'Cross-functional Collaboration', 'Customer Experience Design', 'Data Visualization'].map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2: Omni Power Stations */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg">
                    <Target size={32} className="text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-200 mb-2">Campus-Wide Omni Charging Station Deployment</h3>
                    <p className="text-slate-400 text-sm mb-2">Northeastern University • April 2022 - December 2025</p>
                    <p className="text-slate-300">
                      Led final implementation phase of university-wide sustainable charging infrastructure across 16 campus buildings, managing ongoing vendor relationships and end-user support.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-3">Project Scope</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700">
                        <div className="text-2xl font-bold text-green-400 mb-1">52</div>
                        <div className="text-xs text-slate-400">Charging Stations Deployed</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700">
                        <div className="text-2xl font-bold text-green-400 mb-1">520</div>
                        <div className="text-xs text-slate-400">Portable Power Banks</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700">
                        <div className="text-2xl font-bold text-green-400 mb-1">16</div>
                        <div className="text-xs text-slate-400">Academic & Residence Buildings</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-green-400 mt-0.5">•</span>
                        <span>Planned and coordinated deployment logistics</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-400 mt-0.5">•</span>
                        <span>Configured hardware and created inventory tracking system</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-400 mt-0.5">•</span>
                        <span>Partnered with Facilities, Network Engineering, CI Operations</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-400 mt-0.5">•</span>
                        <span>Directed student staff through deployment phases</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-400 mt-0.5">•</span>
                        <span>Developed 24-slide training presentation for Service Desk</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-400 mt-0.5">•</span>
                        <span>Maintain sole support ownership for vendor escalations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Project Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {velocityProjectOutcomes.map((item, i) => (
                      <div key={i} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-green-400">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {velocitySkills.map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-full text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 3: Laptop Locker Program */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                    <Lock size={32} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-200 mb-2">Velocity Smart Locker Laptop Program Enhancement</h3>
                    <p className="text-slate-400 text-sm mb-2">Northeastern University • 2023 - December 2025</p>
                    <p className="text-slate-300">
                      Led comprehensive service enhancement and optimization of 200+ laptop lending program through Velocity Smart Locker system, 
                      transforming technology access delivery for Faculty, Staff, and Students across campus through improved processes, 
                      training programs, and operational excellence initiatives.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Service Enhancement & Optimization</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-blue-400 mt-0.5">•</span>
                        <span>Optimized 200+ laptop lifecycle management and rotation processes</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400 mt-0.5">•</span>
                        <span>Enhanced troubleshooting protocols for faster issue resolution</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400 mt-0.5">•</span>
                        <span>Streamlined manufacturer warranty repair coordination</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400 mt-0.5">•</span>
                        <span>Improved vendor collaboration and support escalation procedures</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Support & Training</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-cyan-400">→</span>
                        <span>Trained 30+ students on locker management procedures</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-400">→</span>
                        <span>Provided ongoing support to campus support teams</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-400">→</span>
                        <span>Developed troubleshooting procedures</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-400">→</span>
                        <span>Served as subject matter expert for locker issues</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Service Enhancement Impact</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Transformed technology access delivery for campus community',
                      'Improved service availability through proactive enhancement initiatives',
                      'Reduced equipment downtime via optimized repair coordination processes',
                      'Enhanced user experience through systematic service improvements',
                      'Established sustainable laptop lending infrastructure framework',
                      'Developed comprehensive vendor relationship management protocols'
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-green-400">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Asset Management', 'Vendor Relations', 'Hardware Troubleshooting', 'Student Training', 'Process Development', 'Technical Support', 'System Administration'].map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-full text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 4: Campus Image Refresh */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                    <Code size={32} className="text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-200 mb-2">Campus Device Image Refresh Initiative</h3>
                    <p className="text-slate-400 text-sm mb-2">Northeastern University • 2024 - December 2025</p>
                    <p className="text-slate-300">
                      Partnered with colleague to lead comprehensive image refresh project for Macbook Air and Surface Laptops, redesigning user experience and coordinating deployment across campus through cross-functional collaboration.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Project Leadership</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>Led partnership with coworker on image redesign</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>Collaborated with Jamf and Intune Admins</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>Redesigned user experience for improved usability</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>Coordinated with Endpoint Management teams</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Implementation & Support</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-pink-400">→</span>
                        <span>Worked with support teams on setup and deployment</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-pink-400">→</span>
                        <span>Deployed service across campus locations</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-pink-400">→</span>
                        <span>Provided ongoing support and training</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-pink-400">→</span>
                        <span>Served as technical resource for complex issues</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Project Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Improved laptop usability for campus community',
                      'Streamlined device management processes',
                      'Enhanced user experience through thoughtful design',
                      'Successful cross-functional team collaboration',
                      'Created sustainable image deployment framework',
                      'Established ongoing support model for teams'
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-green-400">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Cross-functional Leadership', 'Image Management', 'User Experience Design', 'Jamf Administration', 'Intune Management', 'Deployment Coordination', 'Technical Training', 'System Integration'].map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 5: Papercut ServiceNow Integration */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
                    <TrendingUp size={32} className="text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-200 mb-2">Papercut ServiceNow Integration Project</h3>
                    <p className="text-slate-400 text-sm mb-2">Northeastern University • 2024 - December 2025 (Phase 1 Complete)</p>
                    <p className="text-slate-300">
                      Led systems integration project connecting Papercut Print Management with ServiceNow to streamline printer support workflows across 40+ campus printers and three support tiers.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-orange-400 mb-3">Integration Architecture</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-orange-400 mt-0.5">•</span>
                        <span>Integrated Papercut notifications with ServiceNow</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-orange-400 mt-0.5">•</span>
                        <span>Designed seamless workflow across support tiers</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-orange-400 mt-0.5">•</span>
                        <span>Connected 40+ campus printers to centralized system</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-orange-400 mt-0.5">•</span>
                        <span>Utilized custom dashboard for streamlined support</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-orange-400 mb-3">Multi-Tier Workflow</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-red-400">→</span>
                        <span><strong>Tier 1:</strong> IT Assistants managing supplies</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-400">→</span>
                        <span><strong>Tier 2:</strong> IT Client Support Specialists</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-400">→</span>
                        <span><strong>Tier 3:</strong> Konica Minolta vendor support</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-400">→</span>
                        <span>Automated escalation and routing logic</span>
                      </li>
                    </ul>
                  </div>
                </div>

                  <div className="mb-6">
                  <h4 className="text-sm font-semibold text-orange-400 mb-3">Project Impact & Status</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {servicenowOutcomes.map((item, i) => (
                      <div key={i} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-green-400">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>                <div className="flex flex-wrap gap-2">
                  {servicenowSkills.map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-full text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 6: Enterprise DNS & SSL Implementation */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-blue-400 mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-slate-200">Enterprise DNS & SSL Implementation</h3>
              <p className="text-slate-300 mb-6">
                Comprehensive infrastructure implementation demonstrating enterprise-grade DNS management with Azure, Microsoft 365 email integration, 
                and SSL/TLS certificate deployment strategy. Self-directed technical initiative showcasing practical application of Network+ 
                certification concepts and modern cloud infrastructure management skills.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Technical Architecture & Implementation</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Phase 1: DNS Infrastructure</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-blue-400">→</span>
                        <span>Azure DNS Zones as authoritative nameserver</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400">→</span>
                        <span>Configured NS, MX, TXT, CNAME records</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400">→</span>
                        <span>PowerShell automation for DNS verification</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400">→</span>
                        <span>Global DNS propagation monitoring</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Phase 2: Email Security</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-blue-400">→</span>
                        <span>Microsoft 365 Business Standard integration</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400">→</span>
                        <span>SPF, DKIM, DMARC authentication protocols</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400">→</span>
                        <span>Custom domain email (@loydjohnson.com)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400">→</span>
                        <span>Microsoft Graph PowerShell validation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <h5 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Phase 3: SSL/TLS Security Implementation (Completed ✅)</h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Certificate Management</p>
                      <ul className="space-y-1 text-sm text-slate-300">
                        <li className="flex gap-2">
                          <span className="text-green-400">✓</span>
                          <span>Azure-managed SSL certificate deployed</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-400">✓</span>
                          <span>Automated 90-day renewal cycle active</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-400">✓</span>
                          <span>TLS 1.2/1.3 protocol support enabled</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Security Validation</p>
                      <ul className="space-y-1 text-sm text-slate-300">
                        <li className="flex gap-2">
                          <span className="text-green-400">✓</span>
                          <span>HTTPS enforcement (301 redirects)</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-400">✓</span>
                          <span>Security headers implementation</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-400">✓</span>
                          <span>Certificate validation completed</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Platform Integration</p>
                      <ul className="space-y-1 text-sm text-slate-300">
                        <li className="flex gap-2">
                          <span className="text-green-400">✓</span>
                          <span>LinkedIn profile integration</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-400">✓</span>
                          <span>GitHub portfolio linking</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-400">✓</span>
                          <span>Professional brand cohesion</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Network+ Certification Alignment & Technical Skills</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-900/30 rounded-lg p-3 border border-slate-700">
                    <h5 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">DNS & Networking Concepts</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-blue-400">📚</span>
                        <span>Hierarchical DNS structure and delegation</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400">📚</span>
                        <span>Record types: NS, MX, TXT, CNAME, A records</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400">📚</span>
                        <span>TTL configuration and DNS propagation</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400">📚</span>
                        <span>Ports & Protocols: DNS (53), HTTP (80), HTTPS (443)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/30 rounded-lg p-3 border border-slate-700">
                    <h5 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Security Implementation</h5>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-blue-400">🔒</span>
                        <span>SSL/TLS encryption and certificate lifecycle</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400">🔒</span>
                        <span>Email security: SPF, DKIM, DMARC protocols</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400">🔒</span>
                        <span>Security headers and defense-in-depth</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400">🔒</span>
                        <span>Certificate Authority validation processes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Project Outcomes & Business Impact</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {dnsSSLOutcomes.map((item, i) => (
                    <div key={i} className="flex gap-2 text-sm text-slate-300">
                      <span className="text-green-400">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Project Timeline & Final Status</h4>
                <div className="bg-slate-900/30 rounded-lg p-3 border border-slate-700">
                  <div className="grid md:grid-cols-4 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-green-400 mb-1">✓ Completed</p>
                      <p className="text-slate-300">Domain migration & DNS setup</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-400 mb-1">✓ Completed</p>
                      <p className="text-slate-300">Email configuration & validation</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-400 mb-1">✓ Completed</p>
                      <p className="text-slate-300">SSL certificate deployment</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-400 mb-1">✓ Completed</p>
                      <p className="text-slate-300">Final integration & testing</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-600">
                    <p className="text-xs text-slate-400">
                      <span className="text-green-400">Project Status:</span> Successfully completed with Azure-managed SSL certificate and automated renewal
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {dnsSSLSkills.map((skill, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-full text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 7: Multi-Platform Homelab Infrastructure */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-lg">
                    <Network size={32} className="text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-200 mb-2">Multi-Platform Homelab Infrastructure</h3>
                    <p className="text-slate-400 text-sm mb-2">Self-Directed Learning Environment • October 2025 - Present</p>
                    <p className="text-slate-300 mb-4">
                      <strong>Self-Directed Technical Lab:</strong> Built a comprehensive virtualized environment for hands-on learning across Linux administration, Windows Server management, and cybersecurity testing. Implemented security hardening practices including SSH key authentication, port management, and network access controls. Initially set up Apache web server for potential portfolio self-hosting, then strategically chose enterprise cloud deployment (Azure Static Web Apps) to gain DevOps experience.
                    </p>
                    <p className="text-slate-300">
                      This project reflects my commitment to understanding enterprise technologies beyond my current support role, gaining practical experience with security best practices, multi-platform system administration, and strategic technology decision-making.
                    </p>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">🎯 Infrastructure Architecture & Capabilities</h4>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div>
                      <strong className="text-emerald-300">Linux Server Security:</strong> SSH key-based authentication with password authentication disabled, root login disabled, custom SSH port configuration, firewall hardening with only ports 80, 443, and custom SSH port open, ICMP ping disabled for stealth operation
                    </div>
                    <div>
                      <strong className="text-emerald-300">System Hardening:</strong> Automatic security updates configured, sudo-only administration (root access disabled), minimal service footprint with only MariaDB running
                    </div>
                    <div>
                      <strong className="text-emerald-300">Linux Administration:</strong> Ubuntu server management, Apache web server installation and configuration (initially for portfolio self-hosting consideration), MariaDB installation and configuration, secure file transfers via SCP, and command-line proficiency
                    </div>
                    <div>
                      <strong className="text-emerald-300">Windows Server 2025:</strong> Latest enterprise server platform for Active Directory testing, group policy management, and modern Windows server administration
                    </div>
                    <div>
                      <strong className="text-emerald-300">Cybersecurity Lab:</strong> Kali Linux penetration testing environment for security assessment skill development and vulnerability analysis
                    </div>
                    <div>
                      <strong className="text-emerald-300">Network Infrastructure:</strong> Static IP addressing, secure remote access protocols, and cross-platform connectivity for seamless administration
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">Technical Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Implemented comprehensive SSH hardening (key-only auth, root disabled, custom port)',
                      'Configured automatic security updates and sudo-only administration',
                      'Established minimal attack surface with only essential services (MariaDB)',
                      'Applied enterprise-grade firewall rules and network stealth configuration',
                      'Created secure cybersecurity testing and learning environment',
                      'Developed production-level Linux security administration skills'
                    ].map((outcome, i) => (
                      <div key={i} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 p-4 bg-slate-700/30 rounded-lg">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">Professional Development Focus</h4>
                  <p className="text-sm text-slate-300 mb-3">
                    This homelab represents my commitment to understanding enterprise technologies beyond my current support role. By gaining hands-on experience with security hardening, server administration, and multi-platform environments, I'm building practical knowledge that enhances my ability to troubleshoot and support complex IT infrastructure.
                  </p>
                  <div className="text-sm text-slate-300">
                    <strong className="text-emerald-300">Learning Objective:</strong> Develop comprehensive technical understanding that allows me to provide better support and grow into more advanced IT roles with confidence and competency.
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">Key Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Linux Security Hardening', 'SSH Key Authentication', 'Root Access Control', 'Firewall Configuration', 
                      'Automatic Updates', 'Service Minimization', 'Sudo Administration', 'Custom Port Management',
                      'Windows Server 2025', 'VirtualBox', 'Network Security', 'MariaDB Administration'
                    ].map((skill, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-slate-700/50 rounded text-slate-400 border border-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project 8 & 9: Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Cross-Functional Collaboration */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-200">Cross-Functional Collaboration Excellence</h3>
                <p className="text-slate-300 mb-4">
                  Built strategic partnerships across IT teams and business units, consistently recognized for exceptional collaborative approach across departments and initiatives.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Impact:</h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {[
                      'Improved service delivery coordination',
                      'Enhanced cross-team communication',
                      'Developed reputation as trusted partner',
                      'Created collaborative frameworks'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-cyan-400">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Relationship Building', 'Strategic Communication', 'Conflict Resolution', 'Team Leadership'].map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-700/50 rounded text-slate-400 border border-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Operations Optimization */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-purple-400 mb-4">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-200">Operations Optimization</h3>
                <p className="text-slate-300 mb-4">
                  Led 30-driver fleet operations with data-driven strategies that significantly improved performance metrics and customer satisfaction.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Measurable Results:</h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {[
                      'Improved on-time delivery rate by 18%',
                      'Reduced operational costs by 12%',
                      'Decreased turnover by 25%',
                      'Increased customer satisfaction by 20%'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-purple-400">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Data Analysis', 'Strategic Planning', 'Workforce Development', 'Performance Management'].map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-700/50 rounded text-slate-400 border border-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/images/ai-chip.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Education & Professional Credentials
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Committed to continuous learning and professional development
          </p>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">🎓 Formal Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h4 className="text-xl font-semibold text-slate-200 mb-2">Bachelor of Science in Information Technology</h4>
                <p className="text-slate-300">Northeastern University</p>
                <p className="text-cyan-400 font-medium">In Progress</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h4 className="text-xl font-semibold text-slate-200 mb-2">Associate Degree in General Business</h4>
                <p className="text-slate-300">Bay State College</p>
                <p className="text-slate-400">2003</p>
              </div>
            </div>
          </div>

          {/* Professional Certifications */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">📜 Professional Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Google PM - Complete */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    {/* Credly badge - highest priority */}
                    <div className="relative z-20" data-iframe-width="150" data-iframe-height="270" data-share-badge-id="c1275d91-7873-4ee1-88e2-7026e2ab6229" data-share-badge-host="https://www.credly.com"></div>
                    {/* Mid-tone background for badge contrast - behind badge */}
                    <div className="absolute inset-0 bg-slate-400 rounded-lg -z-10" style={{width: '150px', height: '270px', top: '0px', left: '0px'}}></div>
                    {/* Border frame - on top */}
                    <div className="absolute border-2 border-cyan-500/50 rounded-lg z-30 pointer-events-none" style={{width: '152px', height: '272px', top: '-1px', left: '-1px'}}></div>
                    <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-200 text-center mb-2">Google Project Management</h4>
                <p className="text-slate-300 text-center mb-2">Professional Certificate</p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                    ✓ Certified 2025
                  </span>
                </div>
              </div>

              {/* AI in Professional Practice - In Progress */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/50 hover:border-purple-400 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 flex flex-col items-center justify-center">
                    <span className="text-5xl mb-2">🤖</span>
                    <span className="text-xs text-slate-400">NEU</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-200 text-center mb-2">AI in Professional Practice</h4>
                <p className="text-slate-300 text-center mb-2">Northeastern University</p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                    Completing Nov 2025
                  </span>
                </div>
              </div>

              {/* Network+ - Studying */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 flex flex-col items-center justify-center">
                    <span className="text-5xl mb-2">🔒</span>
                    <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden mt-2">
                      <div className="w-[80%] h-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    </div>
                    <span className="text-xs text-slate-400 mt-1">80% Complete</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-200 text-center mb-2">CompTIA Network+</h4>
                <p className="text-slate-300 text-center mb-2">Industry Certification</p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                    📚 Exam: Mid Nov 2025
                  </span>
                </div>
              </div>
            </div>
            <p className="text-center text-slate-400 text-sm mt-6">
              Click badges to verify credentials • All certifications industry-recognized
            </p>
          </div>

          {/* Professional Development */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">📚 Continuous Professional Development</h3>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
              <p className="text-slate-300 mb-6">
                Completed 15+ specialized training courses across business analysis, leadership, and emerging technologies
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-200 mb-3">Strategic Business & Leadership</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Business Analysis & Process Management</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Leading Your Team to Excellence</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Leadership Effectiveness</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Customer Experience Leadership</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Managing a Customer Service Team</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 mb-3">Technology & IT Service Management</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> ITIL 4 Service Management Foundations</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> ServiceNow: Basic Administration</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Azure Fundamentals Preparation</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> AI Automation with Claude API</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Intelligent Automation Foundations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            I'm actively exploring opportunities in IT leadership, business engagement, and customer experience roles where I can drive strategic value through stakeholder partnerships and process innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold mb-6 text-slate-200">Send a Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 text-slate-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 text-slate-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 text-slate-200"
                    placeholder="Your message..."
                  />
                </div>
                <button 
                  onClick={() => alert('Contact form integration needed - for now, please email contact@loydjohnson.com directly')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-1">Email</h4>
                    <a href="mailto:contact@loydjohnson.com" className="text-cyan-400 hover:text-cyan-300">
                      contact@loydjohnson.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-1">Phone</h4>
                    <a href="tel:7817062313" className="text-cyan-400 hover:text-cyan-300">
                      781.706.2313
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Linkedin className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/loydj" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      linkedin.com/in/loydj
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Download className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-200 mb-1">Resume</h4>
                    <a 
                      href="/Resume_Loyd Johnson.pdf" 
                      download="Loyd_Johnson_Resume.pdf"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                    >
                      Download PDF <Download size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6">
                <p className="text-slate-300 text-sm">
                  <strong className="text-cyan-400">Response Time:</strong> I typically respond within 24 hours. Looking forward to connecting!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400 mb-2">
              © 2025 Loyd Johnson | Professional IT Portfolio
            </p>
            <div className="space-y-1">
              <p className="text-slate-500 text-sm">
                <a href="https://github.com/ljohnson2382/portfolio-site" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">View Source Code on GitHub</a>
              </p>
              <p className="text-slate-500 text-sm">
                Beyond technology: <a href="./photo.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">photo.loydjohnson.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Home Button */}
      <FloatingHomeButton show={showHomeButton} />
    </div>
  );
}

export default App;