'use client';

import Image from 'next/image';

/**
 * Props for the Logo component.
 */
interface LogoProps {
  /** Logo variant: 'default' (gold), 'white', or 'gold' */
  variant?: 'default' | 'white' | 'gold';
  /** Width of the logo in pixels */
  width?: number;
  /** Height of the logo in pixels */
  height?: number;
}

/**
 * New Elevation logo component.
 *
 * Displays the company logo with configurable variant and size.
 * Used in the header, sidebar, and other branding locations.
 *
 * @example
 * ```tsx
 * <Logo variant="white" width={100} />
 * ```
 */
export default function Logo({ variant = 'default', width = 150, height = 60 }: LogoProps) {
  const logoSrc = {
    default: '/ne-logo.svg',
    white: '/ne-logo-white.svg',
    gold: '/ne-logo-gold.svg',
  };

  return (
    <div className="flex items-center justify-center">
      <Image
        src={logoSrc[variant]}
        alt="New Elevation"
        width={width}
        height={height}
        style={{ height: 'auto' }}
        className="object-contain"
        priority
      />
    </div>
  );
}
