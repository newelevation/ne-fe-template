/**
 * Analytics utility module.
 *
 * Placeholder for analytics integration. Replace with your preferred
 * analytics provider (Google Analytics, Mixpanel, Amplitude, etc.).
 *
 * @example
 * ```tsx
 * import { trackEvent, trackPageView } from '@/lib/analytics';
 *
 * // Track a page view
 * trackPageView('/dashboard');
 *
 * // Track a custom event
 * trackEvent('button_click', { button_id: 'submit' });
 * ```
 */

type EventProperties = Record<string, string | number | boolean>;

/**
 * Track a page view.
 */
export function trackPageView(path: string): void {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_path: path,
    });
  }

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Page view:', path);
  }
}

/**
 * Track a custom event.
 */
export function trackEvent(eventName: string, properties?: EventProperties): void {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, properties);
  }

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Event:', eventName, properties);
  }
}

/**
 * Identify a user (for user-level analytics).
 */
export function identifyUser(userId: string, traits?: EventProperties): void {
  if (typeof window === 'undefined') return;

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Identify user:', userId, traits);
  }
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
