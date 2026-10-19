import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import BrandedLoadingScreen from './BrandedLoadingScreen';

/**
 * NavigationTransitionManager
 * 
 * Safely manages route-level transitions across React Router navigation:
 * - Triggers branded transition ONLY on genuine route pathname changes
 * - Ignores anchor jumps, button clicks, and same-path interactions
 * - Supports browser Back and Forward (popstate)
 * - Prevents flicker via a controlled minimum settle window (~280ms)
 * - Prevents overlapping loaders on rapid sequential navigation
 * - Guarantees visitor is never trapped via a hard safety timeout
 */
export default function NavigationTransitionManager({ children }) {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Track previous path to distinguish between genuine page changes vs hash/anchor clicks
  const prevPathRef = useRef(location.pathname);
  const isInitialMount = useRef(true);
  const transitionTimerRef = useRef(null);
  const safetyTimerRef = useRef(null);

  // Initial mount: Dismiss initial HTML pre-loader smoothly after initial settle
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (typeof window !== 'undefined' && typeof window.__dismissPavanaInitialLoader === 'function') {
        window.__dismissPavanaInitialLoader();
      }
    }, 550); // Comfortable initial presentation window

    return () => clearTimeout(initialTimer);
  }, []);

  // Listen to location changes
  useEffect(() => {
    // Skip triggering navigation transition on the first mount (pre-loader handles initial cold boot)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevPathRef.current = location.pathname;
      return;
    }

    const currentPath = location.pathname;
    const previousPath = prevPathRef.current;

    // Only trigger if destination pathname is genuinely different
    if (currentPath !== previousPath) {
      prevPathRef.current = currentPath;

      // Clear any pending transition timers from rapid clicks
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
      if (safetyTimerRef.current) {
        clearTimeout(safetyTimerRef.current);
      }

      setIsNavigating(true);

      // Scroll window to top cleanly for the new route
      if (!location.hash) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      // Settle window: Gives the new route component time to mount and prepare layout
      // Kept brief and responsive (~280ms) to feel crisp and executive
      transitionTimerRef.current = setTimeout(() => {
        setIsNavigating(false);
      }, 280);

      // Failsafe safety timeout: ensure visitor is NEVER trapped under any network/script anomaly
      safetyTimerRef.current = setTimeout(() => {
        setIsNavigating(false);
      }, 1600);
    }
  }, [location.pathname, location.hash]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* Route Transition Overlay with Authentic Logo & Brand Palette */}
      <BrandedLoadingScreen
        active={isNavigating}
        variant="route"
      />

      {children}
    </>
  );
}
