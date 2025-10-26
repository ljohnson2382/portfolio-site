import { Download, ChevronDown } from 'lucide-react';
import { aboutStats } from '../../data/portfolio-data.js';
import { heroStyles as styles } from '../../styles/constants/heroStyles.js';

function HeroSection({ onScrollToSection }) {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.background}>
        {/* Background Image */}
        <img 
          src="/images/server-room.jpg" 
          alt="" 
          className={styles.bgImage}
        />
        <div className={styles.gradient1} />
        <div className={styles.gradient2} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          LOYD JOHNSON
        </h1>
        <p className={styles.subtitle}>
          IT Professional • Customer Experience Leader • Business Engagement Specialist
        </p>
        <p className={styles.description}>
          Transforming service delivery through strategic stakeholder partnerships, process innovation, and data-driven solutions
        </p>
        
        <div className={styles.buttons}>
          <button 
            onClick={() => onScrollToSection('contact')}
            className={styles.btnPrimary}
          >
            Let's Connect
          </button>
          <a 
            href="/Resume_Loyd Johnson.pdf" 
            download="Loyd_Johnson_Resume.pdf"
            className={styles.btnSecondary}
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        <div className={styles.statsGrid}>
          {aboutStats.slice(0, 3).map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>
                {stat.number}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => onScrollToSection('about')}
          className={styles.scrollBtn}
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;