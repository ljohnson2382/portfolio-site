import { useState, useEffect } from 'react';

export function useScrollHandler() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showHomeButton, setShowHomeButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowHomeButton(window.scrollY > 500);
      
      const sections = ['home', 'about', 'learning-philosophy', 'experience', 'skills', 'projects', 'credentials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrolled,
    activeSection,
    showHomeButton
  };
}