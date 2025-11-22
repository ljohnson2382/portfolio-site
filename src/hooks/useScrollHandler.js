import { useState, useEffect, useRef, useCallback } from 'react';

export function useScrollHandler() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showHomeButton, setShowHomeButton] = useState(false);
  
  // Cache section elements to avoid repeated DOM queries
  const sectionsRef = useRef(null);
  const timeoutRef = useRef(null);

  // Memoize the scroll handler with debouncing
  const handleScroll = useCallback(() => {
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Debounce the expensive operations
    timeoutRef.current = setTimeout(() => {
      const scrollY = window.scrollY;
      
      // Update simple state immediately for better responsiveness
      setScrolled(scrollY > 50);
      setShowHomeButton(scrollY > 500);
      
      // Cache section elements on first run
      if (!sectionsRef.current) {
        const sectionIds = ['home', 'about', 'learning-philosophy', 'experience', 'skills', 'projects', 'credentials', 'contact'];
        sectionsRef.current = sectionIds
          .map(id => document.getElementById(id))
          .filter(Boolean);
      }
      
      // Find active section using cached elements
      const current = sectionsRef.current.find(element => {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (current) {
        setActiveSection(current.id);
      }
    }, 50); // 50ms debounce for smooth but efficient updates
  }, []);

  useEffect(() => {
    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);

  return {
    scrolled,
    activeSection,
    showHomeButton
  };
}