'use client';

import Link from 'next/link';

type LogoProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeClasses = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-4xl sm:text-5xl',
};

export function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <Link
      href="#"
      className={`group inline-block ${className}`}
      aria-label="Arooba Fatima — Home"
    >
      <span
        className={`font-script ${sizeClasses[size]} leading-none tracking-wide text-gradient-purple transition-all duration-300 group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]`}
      >
        arooba fatima
      </span>
    </Link>
  );
}
