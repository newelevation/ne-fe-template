import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

/**
 * Generate sitemap.xml for search engine indexing.
 *
 * Add new routes here as they are created.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const routes = ['', '/docs', '/settings', '/help', '/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
