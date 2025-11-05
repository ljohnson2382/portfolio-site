import { Users, TrendingUp, Target, Award } from 'lucide-react';
import { aboutStyles as styles } from '../../styles/constants/aboutStyles.js';

function AboutSection() {
  const approachItems = [
    { icon: <Users size={20} />, title: 'Strategic Stakeholder Partnership Building', desc: 'Building bridges between business objectives and IT capabilities' },
    { icon: <TrendingUp size={20} />, title: 'Data-Driven Process Improvement', desc: 'Designing solutions based on real insights and measurable results' },
    { icon: <Target size={20} />, title: 'Cross-Functional Collaboration Leadership', desc: 'Bringing diverse perspectives together for optimal outcomes' },
    { icon: <Award size={20} />, title: 'Customer-Centric Service Delivery', desc: 'Keeping the end user at the center of every decision' }
  ];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleGradient}>
            About Me
          </span>
        </h2>

        <div className={styles.grid}>
          {/* Decorative Image with Headshot Overlay */}
          <div className={styles.imageContainer}>
            <div className="relative flex items-center justify-center h-full">
              <img 
                src="/images/digital-automation.jpg" 
                alt="Digital Technology" 
                className={styles.image + " rounded-lg"}
              />
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <img 
                  src="/images/headshot.jpg" 
                  alt="Loyd Johnson Headshot" 
                  className="rounded-full object-cover border-4 border-cyan-400 shadow-2xl bg-slate-900" 
                  style={{ width: '85%', height: '85%', maxWidth: '420px', maxHeight: '90%', padding: '2.5%', boxSizing: 'border-box' }}
                />
              </div>
            </div>
          </div>

          {/* My Approach Section */}
          <div className={styles.approachContainer}>
            <div className={styles.approachCard}>
              <h3 className={styles.approachTitle}>My Approach</h3>
              <div className={styles.approachList}>
                {approachItems.map((item, index) => (
                  <div key={index} className={styles.approachItem}>
                    <div className={styles.approachIcon}>{item.icon}</div>
                    <div>
                      <div className={styles.approachItemTitle}>{item.title}</div>
                      <div className={styles.approachItemDesc}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Text Content - Full Width */}
        <div className={styles.textSection}>
          <p>
            I'm an IT professional who believes technology should serve people, not the other way around. With over a decade of experience spanning customer service, operations management, and IT support, I've built my career on a simple principle: the best technical solutions are the ones that genuinely improve how people work and connect.
          </p>
          <p>
            My operations background has taught me the importance of truly understanding how people work before implementing new technology. I've learned that the most successful solutions often aren't the most technically impressive ones—they're the ones that fit naturally into existing workflows and feel intuitive to the people using them. When I approach a new project, I spend time learning from the actual users: what works well in their current process, what frustrates them, and what would genuinely make their day easier. This collaborative approach helps me identify opportunities to reduce complexity and create solutions that people actually want to use.
          </p>
          <p>
            Currently, I serve as an IT Client Support Specialist at Northeastern University, where I support 38,000+ students, 3,000+ faculty, and 4,000+ staff across 13 global campus locations. What energizes me most about this role is the opportunity to bridge the gap between complex IT capabilities and real human needs.
          </p>
          <p>
            I'm deeply committed to continuous professional growth. In 2025, I completed the Google Project Management Professional Certificate and am on track to earn both AI in Professional Practice (Northeastern University) and CompTIA Network+ certifications in November. This combination of project management expertise, emerging technology fluency, and networking infrastructure knowledge positions me to lead technical initiatives that bridge operational excellence with strategic innovation.
          </p>
          <p>
            My technical journey has interesting roots in the audio world. I'm a former recording engineer and trumpet player who performed with the Parkway Concert Orchestra, where I also served as stage manager before filling an available trumpet spot. I was the trumpet player for a Ska/Reggae band called Late Night Dial, bringing energy to the local music scene.
          </p>
          <p>
            In the live sound field, I worked as an A1, A2, and stagehand, with opportunities to work behind the scenes for incredible artists like Alicia Keys, Romeo Santos, and Dave Matthews at Life is Good Festival. As an Assistant Engineer at Q Division Studios, I had the privilege of working with both local and industry artists, from Will Dailey to Eli "Paperboy" Reed, and was fortunate to serve as Assistant Engineer for the Dropkick Murphys album "Turn Up That Dial."
          </p>
          <p>
            Outside of technology, I'm a photographer who previously operated a client-focused photography business. This creative background continues to inform how I approach problem solving: with attention to detail, an eye for what matters most, and a commitment to delivering quality results. Whether it's fine-tuning audio equipment or optimizing network infrastructure, I bring the same passion for excellence and precision to everything I do.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;