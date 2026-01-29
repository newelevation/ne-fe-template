'use client';

import React from 'react';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Sidebar from '@/app/components/layout/Sidebar';
import ThemeProvider from '@/app/components/theme/ThemeProvider';

import './globals.css';

/**
 * Root layout component for the NE Front-End Template.
 *
 * Provides the application shell with:
 * - Fixed header at the top
 * - Fixed sidebar on the left
 * - Main content area with proper spacing
 * - Fixed footer at the bottom
 *
 * Customize the appName prop in Header to change the application title.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-text-primary font-sans">
        <ThemeProvider>
          {/* Header - fixed full width at top */}
          <Header appName="My Application" />

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
              <main className="flex-grow p-lg pb-[calc(var(--sys-footer-height)+var(--spacing-lg))]">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
