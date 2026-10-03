# DiverseMind visual language

Source: sibling `ease-health-design-system/dist/data/` and the browsable local study at http://127.0.0.1:4173/. Implemented for the existing DiverseMind Site on 2026-10-03.

## Applied foundations

- Type: Faire Octave Light for headings; Suisse Intl Regular for text and controls, with Chinese system font fallbacks. Source font assets copied from the local study; commercial font licensing has not been independently verified.
- Type scale: desktop headings 84/64/46 px, tablet 60/44/32 px and mobile 46/33/25 px. Hero fits its panel with a fluid scale.
- Layout: maximum width 1648 px; 40/24/16 px responsive outer gutters; 24 px panel gaps; 1:1.5 desktop compositions. Section rhythm 112/96/64 px.
- Surfaces: flat palette blocks, subtle separators, 16 px panels and controls; 8 px compact controls. No stacked screenshot frames or decorative card shadows.
- Controls: 16×24 px button padding, explicit hover/focus/disabled treatment; 2 px input borders and 16 px input text.
- Palette 3 is user supplied: #FFFEFC canvas, #2F1852 text/action, #E6A3C8 accent, #EBE5D8 beige, #DDD1E9 lilac, #F8F6F0 soft surface.

## Adaptations and reusable components

`BrandDot` and `BrandWordmark` extend the user-approved pink punctuation into headings, CTA endpoints and line destinations. The dot is decorative, never a status indicator. `FlowLines` adapts the study’s converging/curved line family: 900 ms drawing with 45 ms stagger. One entrance per mount, optional replay, no perpetual movement. Reduced motion keeps the complete static illustration, hides replay and cancels active motion when the preference changes. Geometry is newly authored for DiverseMind, not presented as copied source artwork.

`ProductCollection` shares ordered product sections between Home and Work; `ProductCard` renders the image directly without a padded outer wrapper. `SiteLink` uses a real anchor for robust navigation. All new branding, content arrangements and accessible motion controls are implementation adaptations rather than claims about the source website.
