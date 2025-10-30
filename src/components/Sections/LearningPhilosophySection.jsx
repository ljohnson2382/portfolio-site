import { BookOpen, Target, Lightbulb, GitBranch, ExternalLink } from 'lucide-react';

function LearningPhilosophySection() {
  const philosophyItems = [
    {
      icon: <Target size={24} />,
      title: "Intentional Over-Engineering",
      description: "Choosing enterprise-grade solutions over simple ones to gain hands-on experience with real-world tools and processes."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Systematic Skill Development", 
      description: "Documenting learning decisions and methodologies to demonstrate strategic professional growth and enterprise readiness."
    },
    {
      icon: <GitBranch size={24} />,
      title: "Controlled Learning Environment",
      description: "Using personal projects as laboratories for enterprise practices that are impossible to learn from tutorials alone."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Strategic Professional Preparation",
      description: "Building comprehensive enterprise experience through deliberate complexity and thorough documentation."
    }
  ];

  const learningProjects = [
    {
      title: "Enterprise Learning Framework",
      description: "Comprehensive methodology for gaining enterprise development experience through personal projects",
      link: "https://github.com/ljohnson2382/enterprise-learning-framework",
      technologies: ["GitFlow", "Documentation", "Process Design", "Professional Development"]
    },
    {
      title: "Homelab Enterprise Simulation", 
      description: "Virtualized enterprise infrastructure with security hardening, monitoring, and automation",
      link: "https://github.com/ljohnson2382/homelab-enterprise-simulation",
      technologies: ["Linux Administration", "Security Hardening", "Infrastructure Automation", "Monitoring"]
    }
  ];

  return (
    <section id="learning-philosophy" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Learning Philosophy
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-blue-400 font-semibold">"Overkill by Design"</span> - I intentionally use enterprise-grade tools and processes 
            for personal projects to gain hands-on experience with real-world development practices that can't be learned from tutorials alone.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {philosophyItems.map((item, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Projects */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Learning Projects</h3>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Strategic repositories documenting my systematic approach to enterprise skill development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {learningProjects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-600 transition-all duration-300"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Strategic Professional Development</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              This approach transforms personal projects into enterprise skill development laboratories, 
              preparing for real-world team environments where these practices are critical for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/ljohnson2382/enterprise-learning-framework"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium"
              >
                <GitBranch className="mr-2" size={18} />
                View Learning Framework
              </a>
              <a 
                href="https://github.com/ljohnson2382/homelab-enterprise-simulation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300 font-medium"
              >
                <BookOpen className="mr-2" size={18} />
                View Homelab Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningPhilosophySection;