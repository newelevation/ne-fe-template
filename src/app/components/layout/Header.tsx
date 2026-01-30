'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { headerNavItems } from '@/config/navigation';

/**
 * Application header with logo, navigation, and date display.
 *
 * Fixed-position header that shows the New Elevation logo, application
 * title, and current date. Uses system colors defined in globals.css.
 *
 * @example
 * ```tsx
 * <Header appName="My Application" />
 * ```
 */
interface HeaderProps {
  /** Application name displayed next to the logo */
  appName?: string;
}

export default function Header({ appName = 'Application' }: HeaderProps) {
  const pathname = usePathname();
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header
      className="flex items-center justify-between px-6 border-b fixed top-0 left-0 right-0 z-50 h-[var(--sys-header-height)]"
      style={{
        backgroundColor: 'var(--sys-header-bg)',
        borderColor: 'var(--sys-header-border)',
      }}
    >
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="flex items-center pr-6 border-r group"
          style={{ borderColor: 'var(--sys-header-border)' }}
        >
          <div className="relative h-10 w-[120px]">
            <Image
              src="/ne-logo-gold.svg"
              alt="New Elevation"
              fill
              className="object-contain object-left transition-opacity duration-200 group-hover:opacity-0"
              priority
            />
            <Image
              src="/ne-logo-white.svg"
              alt="New Elevation"
              fill
              className="object-contain object-left absolute top-0 left-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              priority
            />
          </div>
        </Link>
        <div className="flex items-center">
          <span
            className="text-base tracking-wide"
            style={{ color: 'var(--sys-header-text)' }}
          >
            {appName}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-4">
        {headerNavItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`px-4 py-2 text-sm transition-colors ${
              pathname === item.href
                ? 'bg-white/10 text-white'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.label}
          </Link>
        ))}
        <div
          className="text-sm pl-4 border-l"
          style={{ color: 'var(--sys-header-text)', borderColor: 'var(--sys-header-border)' }}
        >
          {today}
        </div>
      </nav>
    </header>
  );
}
