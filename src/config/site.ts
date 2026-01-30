/**
 * Site configuration for SEO, metadata, and branding.
 *
 * Update these values when creating a new application from this template.
 */
export const siteConfig = {
  /** Application name displayed in header and metadata */
  name: 'My Application',

  /** Short description for SEO and social sharing */
  description: 'A New Elevation branded web application built with Next.js',

  /** Full URL where the app is deployed (no trailing slash) */
  url: 'https://example.com',

  /** Open Graph image path (relative to app directory) */
  ogImage: '/opengraph-image.svg',

  /** Company/organization name */
  organization: 'New Elevation',

  /** Contact email */
  email: 'info@newelevation.com',

  /** Social media handles */
  social: {
    twitter: '@newelevation',
    // linkedin: 'company/newelevation',
  },

  /** Default locale */
  locale: 'en_US',

  /** Theme color for browser chrome */
  themeColor: '#011540',

  /** Keywords for SEO (comma-separated or array) */
  keywords: [
    'New Elevation',
    'web application',
    'Next.js',
    'React',
  ] as string[],
};

export type SiteConfig = typeof siteConfig;
