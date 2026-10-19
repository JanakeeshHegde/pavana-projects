import React, { useEffect, useState } from 'react';

/**
 * Pavana Projects — Minimalist Branded Loading Screen & Route Transition
 * 
 * Design Specification:
 * - Only the authentic Pavana Projects logo centered
 * - Deep luxury architectural background: #14251E with subtle radial ambient emerald glow #064A32
 * - Elegant animations:
 *   1. Breathing gold/forest ambient aura behind the logo
 *   2. Soft logo float / pulse
 *   3. Golden architectural light sheen sweeping across the logo
 *   4. Clean, thin gold hairline accent beneath the logo
 * - Zero distracting text, zero clutter, purely iconic brand presentation
 * - Full accessibility and prefers-reduced-motion support
 */
export default function BrandedLoadingScreen({
  active = true,
  variant = 'route', // 'route' | 'initial' | 'inline'
  onFinish,
}) {
  const [shouldRender, setShouldRender] = useState(active);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (active) {
      setShouldRender(true);
      setIsFadingOut(false);
    } else {
      setIsFadingOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsFadingOut(false);
        if (onFinish) onFinish();
      }, 260);
      return () => clearTimeout(timer);
    }
  }, [active, onFinish]);

  if (!shouldRender) return null;

  const isInitial = variant === 'initial';
  const isInline = variant === 'inline';

  const containerClasses = isInline
    ? 'relative w-full py-20 flex flex-col items-center justify-center bg-[#14251E] text-[#F8F6ED]'
    : `fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-opacity duration-[260ms] ease-out ${
        isInitial
          ? 'bg-[#14251E]'
          : 'bg-[#14251E]/96 backdrop-blur-md'
      } ${
        isFadingOut
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100 pointer-events-auto'
      }`;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={active}
      aria-label="Loading Pavana Projects"
      className={containerClasses}
    >
      {/* 1. ARCHITECTURAL AMBIENT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Soft radial emerald glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-[#064A32]/40 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle CAD Drafting Grid */}
        <div className="absolute inset-0 cad-grid-dark opacity-15 pointer-events-none" />
      </div>

      {/* 2. PURE LOGO CENTERPIECE WITH ELEGANT ANIMATION */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        
        {/* Logo Container with Ambient Glow & Floating Animation */}
        <div className="relative flex items-center justify-center animate-[pavanaLogoFloat_3s_ease-in-out_infinite] motion-reduce:animate-none">
          
          {/* Breathing Gold Aura Glow */}
          <div 
            className="absolute -inset-6 bg-radial from-[#C69A36]/30 via-[#064A32]/25 to-transparent rounded-full blur-2xl pointer-events-none animate-[pavanaAuraPulse_2.6s_ease-in-out_infinite] motion-reduce:animate-none" 
            aria-hidden="true" 
          />

          {/* Authentic Pavana Projects Logo with Golden Sheen Overlay */}
          <div className="relative overflow-hidden p-2 rounded-sm">
            <img
              src="/logo-white.png"
              alt="Pavana Projects"
              width={340}
              height={90}
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
            />

            {/* Golden Luxury Light Sheen sweeping across the logo */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-[#DFBE65]/40 to-transparent w-full h-full animate-[pavanaSheenSweep_2.4s_cubic-bezier(0.2,0.8,0.2,1)_infinite] motion-reduce:hidden"
              style={{ mixBlendMode: 'screen' }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Delicate Gold Hairline Accent beneath logo */}
        <div className="mt-5 w-24 sm:w-32 h-[1.5px] bg-[#1F382E] rounded-full overflow-hidden relative">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#9A7420] via-[#DFBE65] to-[#9A7420] rounded-full shadow-[0_0_8px_rgba(223,190,101,0.8)] animate-[pavanaUnderlineSweep_1.8s_cubic-bezier(0.16,1,0.3,1)_infinite] origin-center motion-reduce:animate-none motion-reduce:w-full"
            aria-hidden="true"
          />
        </div>

      </div>

      {/* Screen Reader Announcement */}
      <span className="sr-only">Loading Pavana Projects...</span>
    </div>
  );
}
