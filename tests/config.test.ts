import { describe, expect, it } from "vitest";
import { chatLink, openingHours, site } from "@/config/site";
import { faqs, services } from "@/content/content";

describe("central business content", () => {
  it("keeps contact details consistent and valid", () => {
    expect(site.phoneE164).toBe("+66958614141");
    expect(site.social.whatsapp).toContain("66958614141");
    expect(site.lineId).toBe("@tkmobileservice");
    expect(chatLink("en")).toContain(encodeURIComponent("device model"));
  });

  it("publishes matching English and Thai content sets", () => {
    expect(services.length).toBeGreaterThanOrEqual(3);
    expect(faqs.en).toHaveLength(faqs.th.length);
    expect(openingHours).toHaveLength(6);
    expect(openingHours.map((entry) => entry.day)).not.toContain("Saturday");
  });
});
