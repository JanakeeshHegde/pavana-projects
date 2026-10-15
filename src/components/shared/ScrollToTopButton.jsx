import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      title="Scroll to top"
      className={`fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-[4px] bg-[#064A32] hover:bg-[#14251E] active:bg-[#0B3B28] text-[#DFBE65] border border-[#C69A36]/80 hover:border-[#DFBE65] shadow-md hover:shadow-[0_0_16px_rgba(198,154,54,0.35)] flex items-center justify-center transition-all duration-300 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69A36] ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 text-[#DFBE65] group-hover:-translate-y-0.5 transition-transform duration-200" />
      <span className="sr-only">Scroll to top</span>
    </button>
  );
}
