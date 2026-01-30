import { test, expect } from '@playwright/test';

test.describe('Page Content Tests', () => {
  test('docs page has content', async ({ page }) => {
    await page.goto('/docs');

    // Check for documentation content (h1, h2, or h3)
    const headingCount = await page.locator('h1, h2, h3').count();
    expect(headingCount).toBeGreaterThanOrEqual(1);
  });

  test('settings page has toggles', async ({ page }) => {
    await page.goto('/settings');

    // Settings page should have interactive elements
    const toggleCount = await page.locator('input[type="checkbox"], [role="switch"]').count();
    expect(toggleCount).toBeGreaterThanOrEqual(1);
  });

  test('help page has FAQ', async ({ page }) => {
    await page.goto('/help');

    // Help page should have expandable FAQ items
    const detailsCount = await page.locator('details').count();
    expect(detailsCount).toBeGreaterThanOrEqual(1);

    // Click to expand first FAQ
    const firstFaq = page.locator('details').first();
    await firstFaq.click();

    // Content should be visible after expanding
    await expect(firstFaq).toHaveAttribute('open', '');
  });

  test('about page has content', async ({ page }) => {
    await page.goto('/about');

    // About page should have descriptive content
    await expect(page.locator('main')).toContainText(/about|template|application/i);
  });
});

test.describe('SEO & Meta', () => {
  test('pages have meta description', async ({ page }) => {
    await page.goto('/');

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /.+/);
  });

  test('pages have Open Graph tags', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
  });

  test('robots.txt is accessible', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.ok()).toBeTruthy();

    const text = await response.text();
    expect(text.toLowerCase()).toContain('user-agent');
  });

  test('sitemap.xml is accessible', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.ok()).toBeTruthy();

    const text = await response.text();
    expect(text).toContain('urlset');
  });

  test('manifest is accessible', async ({ request }) => {
    const response = await request.get('/manifest.webmanifest');
    expect(response.ok()).toBeTruthy();

    const json = await response.json();
    expect(json.name).toBeDefined();
    expect(json.icons).toBeDefined();
  });
});
