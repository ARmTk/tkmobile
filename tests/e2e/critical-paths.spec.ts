import { expect, test } from "@playwright/test";

test("English critical paths and contact actions", async ({ page }) => {
  await page.goto("/en/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("trip");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/en\/$/);
  await page.getByRole("link", { name: "Services", exact: true }).first().click();
  await expect(page).toHaveURL(/\/en\/services\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("workshop");
  await page.goto("/en/location/");
  await expect(page.getByText("67/25 Phrabaramee Road").first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Google Maps/ })).toHaveAttribute("href", /google\.com\/maps/);
  await expect(page.locator('a[href^="tel:"]').first()).toHaveAttribute("href", "tel:+66958614141");
});

test("Thai language route and alternate language", async ({ page }, testInfo) => {
  await page.goto("/th/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("เครื่องมีปัญหา");
  if (testInfo.project.name.includes("mobile")) {
    await page.getByRole("button", { name: "Toggle navigation" }).click();
  }
  await page.getByRole("link", { name: "EN" }).click();
  await expect(page).toHaveURL(/\/en\/$/);
});

test("SEO endpoints and 404", async ({ page, request }) => {
  for (const path of ["/sitemap.xml", "/robots.txt", "/llms.txt"]) {
    const response = await request.get(path);
    expect(response.ok()).toBeTruthy();
  }
  const response = await page.goto("/en/not-a-page/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("repair");
});
