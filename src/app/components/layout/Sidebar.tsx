'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarNavItems, NavItem } from '@/config/navigation';

interface SidebarProps {
  /** Custom navigation items (defaults to sidebarNavItems from config) */
  navItems?: NavItem[];
}

/**
 * Vertical sidebar navigation.
 *
 * Displays icon-based navigation items. Hovering shows the label
 * as a tooltip. Uses system colors defined in globals.css.
 *
 * @example
 * ```tsx
 * <Sidebar navItems={customNavItems} />
 * ```
 */
export default function Sidebar({ navItems = sidebarNavItems }: SidebarProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <div
      className="h-full flex-shrink-0 flex flex-col items-center py-4 space-y-4 relative w-full"
      style={{ backgroundColor: 'var(--sys-sidebar-bg)' }}
    >
      {/* Navigation Items */}
      <nav className="flex flex-col space-y-4 w-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hovered === item.id;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`relative flex justify-center items-center p-3 transition-colors ${
                isActive
                  ? 'bg-white/10'
                  : 'hover:bg-white/5'
              }`}
              style={{
                color: isActive ? 'var(--sys-sidebar-text)' : 'var(--sys-sidebar-text-muted)',
              }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.icon}

              {/* Tooltip */}
              {isHovered && (
                <div
                  className="absolute left-full ml-2 px-3 py-1 text-sm whitespace-nowrap rounded shadow-lg z-50"
                  style={{
                    backgroundColor: 'var(--sys-sidebar-bg)',
                    color: 'var(--sys-sidebar-text)',
                  }}
                >
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
