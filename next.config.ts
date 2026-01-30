import type { NextConfig } from 'next';

/**
 * Security headers for all routes.
 *
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/headers
 * @see https://owasp.org/www-project-secure-headers/
 */
const securityHeaders = [
  {
    // Prevent MIME type sniffing
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    // Prevent clickjacking - deny all framing
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    // XSS protection (legacy, but still useful for older browsers)
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    // Control referrer information
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    // Restrict browser features/APIs
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    // Force HTTPS (enable in production)
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    // Content Security Policy
    // Adjust as needed for your application's requirements
    key: 'Content-Security-Policy',
    value: [
      // Default: only same origin
      "default-src 'self'",
      // Scripts: self + inline (needed for Next.js)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Styles: self + inline (needed for styled-components, emotion, etc.)
      "style-src 'self' 'unsafe-inline'",
      // Images: self + data URIs + HTTPS
      "img-src 'self' data: https:",
      // Fonts: self + Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Connect: self + your API endpoints
      "connect-src 'self'",
      // Frames: none
      "frame-ancestors 'none'",
      // Form submissions: self only
      "form-action 'self'",
      // Base URI: self only
      "base-uri 'self'",
      // Upgrade insecure requests
      'upgrade-insecure-requests',
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  /**
   * Security headers applied to all routes.
   */
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },

  /**
   * Powered-by header removal (security through obscurity).
   */
  poweredByHeader: false,
};

export default nextConfig;
