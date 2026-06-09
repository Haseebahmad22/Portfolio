# Portfolio Design System

## 1) Visual Direction
- Tone: matte dark, premium, minimal, product-like.
- Contrast strategy: high legibility for text, restrained accents for emphasis only.
- Surface strategy: layered dark planes (`canvas`, `base`, `raised`, `overlay`) to create depth without noisy effects.

## 2) Color System
### Surface
- `surface.canvas` -> `#0F1117`
- `surface.base` -> `#151923`
- `surface.raised` -> `#1B2030`
- `surface.overlay` -> `#252B3F`

### Text
- `text.primary` -> `#F1F4FF`
- `text.secondary` -> `#A5AEC7`
- `text.muted` -> `#7D869F`

### Accent
- `accent.soft` -> `#7C8CFF`
- `accent.primary` -> `#95A2FF`
- `accent.strong` -> `#C5CDFF`
- `accent.tint` -> `#323C67`

### Utility
- `success` -> `#6BBA9A`
- `warning` -> `#C6AA73`
- `danger` -> `#BE7D8B`

## 3) Typography
- Families:
  - Body: Inter
  - Display: Sora
  - Code: JetBrains Mono
- Hierarchy:
  - `h1`: clamp(2.35rem, 7vw, 5.3rem), 700, tight tracking
  - `h2`: clamp(1.75rem, 4.2vw, 3.2rem)
  - `h3`: clamp(1.3rem, 2.8vw, 2rem)
  - body: 1rem base, line-height 1.65
- Principles:
  - Keep heading line lengths short.
  - Cap body text to reading measure (`68ch`).
  - Avoid decorative type effects.

## 4) Spacing + Layout Grid
- Spacing scale (rem): `0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6`.
- Grid:
  - 12-column layout
  - fluid gutter: `clamp(1rem, 2.5vw, 2rem)`
  - shell max width: `1320px`
  - content max width: `1152px`
- Section rhythm:
  - desktop vertical spacing: `4rem` to `6rem`
  - mobile vertical spacing: `3rem` to `4rem`

## 5) Component Styling Principles
### Cards
- Use `raised` and `base` blend surfaces.
- Border is always subtle first, stronger on hover.
- Radius: 1rem to 1.25rem.
- Motion: small translateY only (`-1px` to `-2px`), no large tilt/zoom.

### Buttons
- Three variants only: `primary`, `secondary`, `ghost`.
- Primary uses `accent.primary` with dark text for premium contrast.
- Keep labels short and medium-weight.
- Hover behavior should be color + slight lift, never flashy glow.

### Sections + Containers
- Keep strict width discipline using shell/content wrappers.
- Use section intro text for context and avoid visual clutter.
- Prioritize whitespace over extra separators.

## 6) Tailwind Mapping
Tailwind is configured to consume CSS variable tokens through RGB syntax:
- `bg-surface-canvas`, `bg-surface-base`, `bg-surface-raised`, `bg-surface-overlay`
- `text-text-primary`, `text-text-secondary`, `text-text-muted`
- `border-border-subtle`, `border-border-strong`
- `bg-accent-primary`, `text-accent-soft`, etc.

This allows opacity-aware usage like:
- `bg-surface-raised/80`
- `border-border-subtle/60`
- `text-text-secondary/90`

## 7) Reusable CSS Primitives
Global primitives are exposed as classes for rapid composition:
- Layout: `ds-shell`, `ds-content`, `ds-grid`, `ds-section`
- Surfaces: `ds-card`, `ds-card-compact`, `ds-card-default`, `ds-card-spacious`
- Actions: `ds-button`, `ds-button-primary`, `ds-button-secondary`, `ds-button-ghost`

Use these primitives as the baseline and compose additional variants sparingly.
