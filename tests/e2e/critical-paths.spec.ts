import { expect, test } from "@playwright/test";

test("English critical paths and contact actions", async ({ page }, testInfo) => {
  await page.goto("/en/");
  await expect(page.getByRole("dialog")).toContainText("still being developed");
  await page.getByRole("button", { name: "I understand — view the website" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("iPhone repair in Phuket");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/en\/$/);
  if (testInfo.project.name.includes("mobile")) {
    await page.getByRole("button", { name: "Toggle navigation" }).click();
  }
  await page.getByRole("link", { name: "Screen", exact: true }).click();
  await expect(page).toHaveURL(/\/en\/iphone-screen-repair\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("screen repair");
  await page.goto("/en/location/");
  await expect(page.getByText("67/25 Phrabaramee Road").first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Google Maps/ })).toHaveAttribute("href", /google\.com\/maps/);
  await expect(page.locator('a[href^="tel:"]').first()).toHaveAttribute("href", "tel:+66958614141");
});

test("Thai language route and alternate language", async ({ page }, testInfo) => {
  await page.goto("/th/");
  await page.getByRole("button", { name: "รับทราบ — เข้าชมเว็บไซต์" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("ซ่อมไอโฟนภูเก็ต");
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
