# Verification — 2026-10-03 revision

- TypeScript and focused ESLint passed after the new components/content were added. Production build passed; final packaging rebuild follows the narrow resource-card correction.
- Actual desktop clicks: Home → About → Work → Resources → article → browser Back → Contact. All destination headings matched.
- English → Chinese → About retains language across full page navigation. Mobile menu → Work closes correctly; Escape closes the menu.
- Home ecosystem link → /work#guiding lands at the product with header clearance (110 px); all five IDs exist. Anchor scrolling is smooth so immediate post-click geometry is not final.
- Desktop 1440 px and narrow 390 px visually inspected. Main routes checked at 991, 767 and 320 px. A 320 px Resources overflow was found and corrected; recheck scrollWidth=innerWidth=320. No broken images or captured console errors.
- Actual computed fonts: Faire Octave heading and Suisse Intl body. Replayed finite line drawing. Reduced-motion implementation inspected in code; OS preference was not modified during testing.
- Product image is a direct ARTICLE child with 0 px padding, no colored outer surface.
- HTTP audit: all 5 products and 3 article sources returned 200; Instagram, LinkedIn and TikTok returned 200; Xiaohongshu redirects to login. Yelp returned 403, so its destination content remains unverified; original official URL preserved. See outputs/link-audit.json.
- Production /about diagnosis via direct HTTP encountered a Cloudflare 403 challenge, not an application 404. Native anchors avoid client RSC navigation dependency, but the original online navigation failure’s root cause is not confirmed.
- Contact endpoint excluded from link audit; no messages submitted. Mailto/tel targets retain original values. The inherited opaque response cannot confirm delivery.
- Screenshots: outputs/home-revised.png, outputs/about-revised.png, outputs/work-unframed.png.
