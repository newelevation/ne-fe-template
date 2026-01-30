'use client';

/**
 * Skip to main content link for keyboard navigation.
 *
 * This component provides a way for keyboard users to skip
 * repetitive navigation and jump directly to the main content.
 *
 * @example
 * ```tsx
 * // In layout.tsx
 * <SkipLink />
 * <Header />
 * <main id="main-content">...</main>
 * ```
 */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      Skip to main content
    </a>
  );
}
