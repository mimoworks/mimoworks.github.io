import { expect, test } from '@playwright/test';

test.describe('mimoworks smoke', () => {
  test('homepage loads and hero CTA exists', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/mimoworks/i);
    await expect(
      page.locator('main a.button-primary[href*="lumofield"]').first(),
    ).toBeVisible();
  });

  test('/lumofield/ loads', async ({ page }) => {
    await page.goto('/lumofield/');
    await expect(page).toHaveURL(/\/lumofield\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('/contact/ loads', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page).toHaveURL(/\/contact\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('key navigation links resolve', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header').first();
    const nav = header.locator('nav').first();

    await header
      .getByRole('link', { name: /mimoworks home/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/$/);

    const baseLinks = [
      { name: /lumofield/i, path: '/lumofield/' },
      { name: /contact/i, path: '/contact/' },
    ];

    for (const link of baseLinks) {
      await nav.getByRole('link', { name: link.name }).first().click();
      const pathname = await page.evaluate(() => window.location.pathname);
      expect(pathname.endsWith(link.path)).toBeTruthy();
    }

    const connectLink = nav.getByRole('link', { name: /connect/i }).first();
    if (await connectLink.isVisible()) {
      await connectLink.click();
      const pathname = await page.evaluate(() => window.location.pathname);
      expect(pathname.endsWith('/connect/')).toBeTruthy();
    }

    const aboutLink = nav.getByRole('link', { name: /about/i }).first();
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      const pathname = await page.evaluate(() => window.location.pathname);
      expect(pathname.endsWith('/about/')).toBeTruthy();
    }
  });

  test('no obvious horizontal overflow on mobile width', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const hasOverflow = await page.evaluate(() => {
      const { scrollWidth, clientWidth } = document.documentElement;
      return scrollWidth > clientWidth + 1;
    });
    expect(hasOverflow).toBeFalsy();
  });
});
