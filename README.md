# DiverseMind website

React 19 + TypeScript website using Vinext/Next-compatible routes. Local development: `npm run dev -- --host 127.0.0.1 --port 4174`.

## Structure

- `app/`: Home, About, Work, Resources, resource article, Contact; shared layout and palette 3 CSS.
- `components/site/`: navigation, language state, common contact footer, contact form and page shell.
- `components/ui/BrandButton.tsx`, `SectionHeading.tsx`: shared UI primitives. Starter primitives remain separate.
- `components/products/`: reusable product card and conceptual reading preview.
- `components/pages/`: each page composed from separate React components.
- `content/products.ts`: product order, English/Chinese descriptions, external URLs and image paths.
- `content/contact.ts`: verified original contact details, social links and original form endpoint.
- `content/article.ts`: retained resource article and Chinese translation.

## Content decisions

The public brand is **DiverseMind**. Lee Web and Media Studio appears only in company attribution and existing contact information. English is the initial language; users can switch to Simplified Chinese, remembered locally across routes and refreshes.

Home and About use the founder and ecosystem copy provided by the user on 2026-10-03, with Chinese translations. The reading specimen is conceptual, not a screenshot of the live reading product. No fabricated company history, customer numbers, testimonials, pricing or launch promises.

Work order: DiverseMind Reading (largest section), Pause Lab, Gentle Hand, Focus Room, ADHD Hub. The final three product screenshots are reused from the original portfolio as content assets, not as site design references. Pause Lab retains its early-preview status.

## Sources (2026-10-03)

- https://www.leewebstudio.com/ — common footer text, phone, email, location and social URLs.
- https://www.leewebstudio.com/resources/ — existing resource index.
- https://www.leewebstudio.com/resources/how-digital-tools-help-special-education/ — retained article and references. Claims are retained editorial content, not independently validated medical guidance.
- https://www.leewebstudio.com/contact/ — mailing address, contact copy and form field/data contract.
- https://portfolio.leewebstudio.com/ — Guiding Hands, Focus Space, ADHD Hub text, URLs, images.
- https://litera.zhiyuanf.com/ — reading material entry; supplemented by user-provided reading direction. Current detailed feature roadmap is not advertised as shipped capability.
- https://pause-lab-launchpad.lovable.app/ — Pause Lab name, early-preview status and 3-step description.
- Visual direction: local Ease study's full visual language (type, layout, space, surfaces, components and line motion), palette 3, and user screenshot Desktop3.png. See DESIGN-SYSTEM.md. Old studio styling and interaction design were not used.

## Contact integration

The contact form uses the existing public Google Apps Script receiver, preserving `name`, `email`, `content`. Its cross-origin response is opaque, so the UI never claims confirmed delivery. Submitted text remains visible; a direct email alternative is provided. The form has native required/email validation, timeout, in-flight duplicate prevention and error feedback. End-to-end message delivery has not been tested, to avoid sending unsolicited test messages to the business. A verified delivery response is a future backend improvement.

## Checks

`npx tsc --noEmit` and focused ESLint pass. Browser checks are recorded in `QA.md`. Palette primitives: #FFFEFC, #2F1852, #E6A3C8, #EBE5D8, #DDD1E9, #F8F6F0.

## Navigation

`SiteLink` renders ordinary anchors for internal navigation, independent of client router/RSC interception. Full page requests support deep links, browser history and new tabs; language persists in local storage. Old product URLs are retained under the latest user-provided names Gentle Hand and Focus Room.
