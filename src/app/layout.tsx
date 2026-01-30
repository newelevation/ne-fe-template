import type { Metadata, Viewport } from 'next';
import { LayoutShell } from '@/app/components/layout';
import { siteConfig } from '@/config/site';

import './globals.css';

/**
 * SEO and social sharing metadata.
 *
 * Update siteConfig in src/config/site.ts to customize these values.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.organization }],
  creator: siteConfig.organization,
  publisher: siteConfig.organization,

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons (auto-detected from app directory: icon.svg, apple-icon.svg)
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.svg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  // Twitter/X
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    site: siteConfig.social.twitter,
    creator: siteConfig.social.twitter,
    images: [`${siteConfig.url}/twitter-image.svg`],
  },

  // App metadata
  applicationName: siteConfig.name,
  generator: 'Next.js',

  // Canonical URL
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
};

/**
 * Viewport configuration for mobile and PWA.
 */
export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

/**
 * Root layout component for the NE Front-End Template.
 *
 * This is a server component that provides metadata for SEO and social sharing.
 * The actual layout UI is rendered by the LayoutShell client component.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-background text-text-primary font-sans">
        <LayoutShell appName={siteConfig.name}>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
