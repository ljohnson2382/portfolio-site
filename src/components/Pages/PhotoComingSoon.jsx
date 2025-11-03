import { useState, useEffect } from 'react';
import { Camera, ChevronDown, Mail, Briefcase, Palette, Image, Globe, Linkedin } from 'lucide-react';
import { contactInfo } from '../../data/portfolio-data.js';
import { commonStyles } from '../../styles/constants/commonStyles.js';

function PhotoComingSoon() {
  const [progress, setProgress] = useState(0);

  // Animate progress bar on mount
  useEffect(() => {
    const timer = setTimeout(() => setProgress(25), 500);
    return () => clearTimeout(timer);
  }, []);

  const styles = {
    ...commonStyles,
    heroSection: "relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-16",
    background: "absolute inset-0 z-0",
    gradient1: "absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900",
    gradient2: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent",
    gradient3: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent",
    content: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
    heroTitle: "text-5xl md:text-7xl font-bold mb-6 text-white",
    heroSubtitle: "text-xl md:text-2xl text-slate-300 mb-4",
    heroDescription: "text-lg text-slate-400 max-w-3xl mx-auto mb-8",
    cameraIcon: "inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30",
    buttons: "flex flex-col sm:flex-row gap-4 justify-center mb-12",
    btnPrimary: "px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300",
    btnSecondary: "px-8 py-3 border border-slate-600 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2",
    featureGrid: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12",
    featureCard: "bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 shadow-lg shadow-slate-900/50 hover:border-cyan-500/50 transition-all duration-300",
    featureIcon: "inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4",
    progressContainer: "max-w-md mx-auto mb-8",
    progressBar: "w-full bg-slate-800 rounded-full h-2",
    progressFill: "bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000",
    scrollBtn: "absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-cyan-400 animate-bounce cursor-pointer",
    footer: "py-12 bg-slate-950 border-t border-slate-800",
    socialIcons: "flex justify-center space-x-6"
  };

  const features = [
    {
      icon: <Briefcase size={24} className="text-emerald-400" />,
      title: "Professional Work",
      description: "Corporate events, headshots, and commercial photography projects",
      gradient: "from-emerald-500/20 to-blue-500/20"
    },
    {
      icon: <Palette size={24} className="text-purple-400" />,
      title: "Creative Projects", 
      description: "Artistic explorations, personal projects, and experimental photography",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Image size={24} className="text-cyan-400" />,
      title: "Visual Stories",
      description: "Documentary photography and narrative-driven visual content",
      gradient: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.background}>
          <div className={styles.gradient1} />
          <div className={styles.gradient2} />
          <div className={styles.gradient3} />
        </div>

        <div className={styles.content}>
          {/* Camera Icon */}
          <div className="mb-8 animate-fade-in">
            <div className={`${styles.cameraIcon} animate-pulse`} style={{ animationDuration: '3s' }}>
              <Camera size={48} className="text-cyan-400" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className={`${styles.heroTitle} hero-title-glow animate-fade-in`}>
            PHOTO PORTFOLIO
          </h1>
          
          {/* Subtitle */}
          <p className={`${styles.heroSubtitle} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
            Coming Soon
          </p>
          
          {/* Description */}
          <p className={`${styles.heroDescription} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
            Currently developing a comprehensive photography showcase featuring professional work, 
            creative projects, and visual storytelling. Stay tuned for an immersive gallery experience.
          </p>

          {/* Action Buttons */}
          <div className={`${styles.buttons} animate-fade-in`} style={{ animationDelay: '0.6s' }}>
            <a 
              href="/" 
              className={styles.btnPrimary}
            >
              View Main Portfolio
            </a>
            <a 
              href={`mailto:${contactInfo.email}?subject=Photo Portfolio Inquiry`}
              className={styles.btnSecondary}
            >
              <Mail size={20} />
              Get Notified
            </a>
          </div>

          {/* Feature Preview Cards */}
          <div className={`${styles.featureGrid} animate-fade-in`} style={{ animationDelay: '0.8s' }}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={`${styles.featureIcon} bg-gradient-to-br ${feature.gradient}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className={`${styles.progressContainer} animate-fade-in`} style={{ animationDelay: '1s' }}>
            <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
              <span>Development Progress</span>
              <span>{progress}%</span>
            </div>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">Gallery framework in development</p>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className={styles.scrollBtn}>
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className="text-center">
            <p className="text-slate-400 mb-4">
              Stay connected for updates on the photo portfolio launch
            </p>
            <div className={styles.socialIcons}>
              <a 
                href="/" 
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="Main Portfolio"
              >
                <Globe size={24} />
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href={contactInfo.linkedin}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              © 2025 Loyd Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-title-glow {
          text-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
}

export default PhotoComingSoon;