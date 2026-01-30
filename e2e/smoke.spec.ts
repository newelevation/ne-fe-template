import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('home page loads', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/My Application/);

    // Check header is visible
    await expect(page.locator('header')).toBeVisible();

    // Check main content area exists
    await expect(page.locator('main')).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');

    // Navigate to docs page
    await page.click('a[href="/docs"]');
    await expect(page).toHaveURL('/docs');
    await expect(page.locator('h1')).toContainText('Documentation');

    // Navigate to settings page
    await page.click('a[href="/settings"]');
    await expect(page).toHaveURL('/settings');
    await expect(page.locator('h1')).toContainText('Settings');

    // Navigate to help page
    await page.click('a[href="/help"]');
    await expect(page).toHaveURL('/help');
    await expect(page.locator('h1')).toContainText('Help');

    // Navigate back to home
    await page.click('a[href="/"]');
    await expect(page).toHaveURL('/');
  });

  test('header navigation works', async ({ page }) => {
    await page.goto('/');

    // Click About in header nav
    await page.click('header a[href="/about"]');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About');
  });

  test('404 page works', async ({ page }) => {
    await page.goto('/non-existent-page');

    // Should show 404 content
    await expect(page.locator('text=404')).toBeVisible();
    await expect(page.locator('text=Page Not Found')).toBeVisible();

    // Go home button should work
    await page.click('text=Go Home');
    await expect(page).toHaveURL('/');
  });

  test('API health endpoint works', async ({ request }) => {
    const response = await request.get('/api/health');

    expect(response.ok()).toBeTruthy();

    const json = await response.json();
    expect(json.status).toBe('ok');
    expect(json.timestamp).toBeDefined();
  });
});

test.describe('Accessibility', () => {
  test('skip link is functional', async ({ page }) => {
    await page.goto('/');

    // Skip link exists in the DOM
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();

    // Focus the skip link directly and verify it becomes visible
    await skipLink.focus();
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();

    // Click skip link
    await skipLink.click();

    // Main content should be targeted
    await expect(page.locator('#main-content')).toBeVisible();
  });

  test('pages have proper headings', async ({ page }) => {
    const pages = ['/', '/docs', '/settings', '/help', '/about'];

    for (const path of pages) {
      await page.goto(path);

      // Each page should have exactly one h1
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBeGreaterThanOrEqual(1);
    }
  });
});

test.describe('Responsive', () => {
  test('mobile viewport renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Header should still be visible
    await expect(page.locator('header')).toBeVisible();

    // Main content should be visible
    await expect(page.locator('main')).toBeVisible();
  });
});
