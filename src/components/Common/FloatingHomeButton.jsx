import { Home } from 'lucide-react';
import { memo } from 'react';
import { scrollToTop } from '../../utils/helpers.js';

function FloatingHomeButton({ show }) {
  if (!show) return null;

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-3 rounded-full shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-110"
      aria-label="Back to top"
    >
      <Home size={24} />
    </button>
  );
}

export default memo(FloatingHomeButton);