'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import ThemeProvider from '@/app/components/theme/ThemeProvider';
import { SkipLink } from '@/app/components/accessibility';

interface LayoutShellProps {
  children: React.ReactNode;
  appName?: string;
}

/**
 * Client-side layout shell component.
 *
 * Provides the application shell with:
 * - Fixed header at the top
 * - Fixed sidebar on the left
 * - Main content area with proper spacing
 * - Fixed footer at the bottom
 */
export default function LayoutShell({ children, appName = 'My Application' }: LayoutShellProps) {
  return (
    <ThemeProvider>
      {/* Skip link for accessibility */}
      <SkipLink />

      {/* Header - fixed full width at top */}
      <Header appName={appName} />

      {/* Content wrapper with top padding for fixed header */}
      <div className="flex pt-[var(--sys-header-height)]">
        {/* Sidebar - fixed position below header */}
        <div className="fixed top-[var(--sys-header-height)] left-0 h-[calc(100vh-var(--sys-header-height))] bg-[var(--sys-sidebar-bg)] w-[var(--sys-sidebar-width)]">
          <Sidebar />
        </div>

        {/* Sidebar spacer */}
        <div className="w-[var(--sys-sidebar-width)] flex-none" />

        {/* Main content area */}
        <div className="flex flex-col flex-grow min-h-[calc(100vh-var(--sys-header-height))]">
          <main id="main-content" className="flex-grow p-lg pb-[calc(var(--sys-footer-height)+var(--spacing-lg))]">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
