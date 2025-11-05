import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/portfolio-data.js';
import { navigationStyles as styles } from '../../styles/constants/navigationStyles.js';

function Navigation({ scrolled, activeSection, onScrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    onScrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.base} ${scrolled ? styles.scrolled : styles.transparent}`}>
      <div className={styles.container}>
        <div className={styles.content}>
            <button 
              onClick={() => handleScrollToSection('home')}
              className={styles.logo}
              style={{ padding: 0, background: 'none', border: 'none' }}
              aria-label="Home"
            >
              <img 
                src="/images/logo.loydjohnson.png" 
                alt="Loyd Johnson Logo" 
                style={{ height: '4rem', width: 'auto', maxWidth: '4rem', objectFit: 'contain', display: 'block' }} 
              />
            </button>
          
          {/* Desktop Navigation */}
          <div className={styles.desktop}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`${styles.item} ${
                  activeSection === item.id 
                    ? styles.itemActive 
                    : styles.itemInactive
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.mobileButton}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileContent}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`${styles.mobileItem} ${
                  activeSection === item.id
                    ? styles.mobileItemActive
                    : styles.mobileItemInactive
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;