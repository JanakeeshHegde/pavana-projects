import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import BrandedLoadingScreen from './BrandedLoadingScreen';












export default function NavigationTransitionManager({ children }) {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);


  const prevPathRef = useRef(location.pathname);
  const isInitialMount = useRef(true);
  const transitionTimerRef = useRef(null);
  const safetyTimerRef = useRef(null);


  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (typeof window !== 'undefined' && typeof window.__dismissPavanaInitialLoader === 'function') {
        window.__dismissPavanaInitialLoader();
      }
    }, 550);

    return () => clearTimeout(initialTimer);
  }, []);


  useEffect(() => {

    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevPathRef.current = location.pathname;
      return;
    }

    const currentPath = location.pathname;
    const previousPath = prevPathRef.current;


    if (currentPath !== previousPath) {
      prevPathRef.current = currentPath;


      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
      if (safetyTimerRef.current) {
        clearTimeout(safetyTimerRef.current);
      }

      setIsNavigating(true);


      if (!location.hash) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }



      transitionTimerRef.current = setTimeout(() => {
        setIsNavigating(false);
      }, 280);


      safetyTimerRef.current = setTimeout(() => {
        setIsNavigating(false);
      }, 1600);
    }
  }, [location.pathname, location.hash]);


  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    };
  }, []);

  return (
    <>

      <BrandedLoadingScreen
        active={isNavigating}
        variant="route"
      />

      {children}
    </>
  );
}
