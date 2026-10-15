import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

/**
 * Standard Unified CTA Button for Pavana Projects
 * 
 * Design Specifications:
 * - Background: Forest green #064A32
 * - Hover Background: Deep green-black #14251E
 * - Text: White #FFFFFF
 * - Accent Arrow: Architectural gold #C69A36
 * - Border radius: 4px (architectural crisp finish)
 * - Dimensions: Height 48px (h-12), padding px-6 sm:px-7
 * - Typography: text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em]
 * - Accessibility: Contrast AAA, clear focus ring, reduced-motion friendly
 */
export default function CTAButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'green', // 'green' | 'gold'
  icon: Icon = ArrowRight,
  showIcon = true,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  className = '',
  target,
  rel,
  ariaLabel,
  ...rest
}) {
  const isGold = variant === 'gold';
  const isOutline = variant === 'outline';

  const variantClasses = isGold
    ? 'bg-[#C69A36] hover:bg-[#DFBE65] active:bg-[#B3892B] text-[#14251E] border border-[#C69A36] hover:border-[#DFBE65] shadow-sm hover:shadow-[0_0_18px_rgba(198,154,54,0.35)]'
    : isOutline
    ? 'bg-[#14251E]/85 backdrop-blur-sm hover:bg-[#064A32] active:bg-[#0B3B28] text-[#F8F6ED] border border-[#C69A36]/80 hover:border-[#DFBE65] shadow-sm hover:shadow-[0_0_18px_rgba(198,154,54,0.25)]'
    : 'bg-[#064A32] hover:bg-[#14251E] active:bg-[#0B3B28] text-[#FFFFFF] border border-[#064A32] hover:border-[#C69A36]/60 shadow-sm hover:shadow-md';

  const baseClasses = `
    inline-flex items-center justify-center space-x-2.5
    h-12 px-6 sm:px-7
    ${variantClasses}
    text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em]
    rounded-[4px]
    hover:-translate-y-0.5
    transition-all duration-300
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69A36] focus-visible:ring-offset-2
    motion-reduce:transition-none motion-reduce:transform-none motion-reduce:hover:transform-none
    disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed
    group select-none
  `.replace(/\s+/g, ' ').trim();

  const combinedClasses = `${baseClasses} ${className}`.trim();

  const iconClasses = isGold
    ? 'text-[#14251E] group-hover:translate-x-1 transition-transform duration-300 shrink-0 motion-reduce:transform-none'
    : 'text-[#C69A36] group-hover:text-[#DFBE65] group-hover:translate-x-1 transition-transform duration-300 shrink-0 motion-reduce:transform-none';

  const iconElement = loading ? (
    <Loader2 className={`w-4 h-4 ${isGold ? 'text-[#14251E]' : 'text-[#DFBE65]'} animate-spin shrink-0`} />
  ) : showIcon && Icon ? (
    <Icon className={`w-4 h-4 ${iconClasses}`} />
  ) : null;

  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconPosition === 'right' && iconElement}
    </>
  );

  // External / Anchor link
  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        aria-label={ariaLabel}
        {...rest}
      >
        {content}
      </a>
    );
  }

  // React Router Internal Link
  if (to) {
    return (
      <Link
        to={to}
        className={combinedClasses}
        aria-label={ariaLabel}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  // Standard Button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
    </button>
  );
}
