import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ScrollToTopButton from '@/components/shared/ScrollToTopButton';
import NavigationTransitionManager from '@/components/shared/NavigationTransitionManager';
import AppRoutes from './AppRoutes.jsx';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // Wait for the destination route to finish mounting before scrolling to its anchor.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <NavigationTransitionManager>
        <ScrollManager />
        <div className="flex min-h-screen flex-col bg-[#F8F6ED] text-[#14251E] selection:bg-[#064A32] selection:text-[#DFBE65]">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </NavigationTransitionManager>
    </BrowserRouter>
  );
}
