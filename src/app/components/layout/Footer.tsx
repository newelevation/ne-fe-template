'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, X, FileText, Settings, MessageCircle, ExternalLink } from 'lucide-react';

/**
 * Application footer with copyright and help panel.
 *
 * Fixed-position footer that displays copyright information and
 * a help button with expandable quick help panel. Uses system
 * colors defined in globals.css.
 *
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
export default function Footer() {
  const [helpOpen, setHelpOpen] = useState(false);

  const quickLinks = [
    { href: '/docs', icon: <FileText size={16} />, label: 'Documentation' },
    { href: '/settings', icon: <Settings size={16} />, label: 'Settings' },
    { href: '/help', icon: <MessageCircle size={16} />, label: 'Help & Support' },
  ];

  return (
    <>
      {/* Help Panel */}
      {helpOpen && (
        <div
          className="fixed bottom-[var(--sys-footer-height)] right-4 w-72 shadow-lg z-40"
          style={{
            backgroundColor: 'var(--color-background)',
            border: '1px solid var(--color-border)',
          }}
        >
          <div
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{
              backgroundColor: 'var(--sys-header-bg)',
              borderColor: 'var(--color-border)',
            }}
          >
            <span className="text-sm font-medium text-white">Quick Help</span>
            <button
              onClick={() => setHelpOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm text-text-secondary mb-4">
              Need assistance? Here are some helpful resources to get you started.
            </p>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100 transition-colors"
                  onClick={() => setHelpOpen(false)}
                >
                  <span className="text-secondary">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <Link
                href="/help"
                className="flex items-center justify-center gap-2 w-full btn btn-primary text-sm"
                onClick={() => setHelpOpen(false)}
              >
                <ExternalLink size={14} />
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-50">
        <div
          className="flex justify-between items-center px-6 py-3"
          style={{
            backgroundColor: 'var(--sys-footer-bg)',
            color: 'var(--sys-footer-text)',
          }}
        >
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} New Elevation. All rights reserved.
          </p>

          <button
            onClick={() => setHelpOpen(!helpOpen)}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <HelpCircle size={20} />
            <span className="text-sm">Need help?</span>
          </button>
        </div>
      </footer>
    </>
  );
}
