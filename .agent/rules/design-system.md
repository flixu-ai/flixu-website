# Flixu Design System & UI Rules

## 1. Philosophy: "Architectural Outline"

- **No Background Fills:** Avoid heavy background colors for cards. Use `#FDFCF8` (Warm Paper) for the viewport.
- **Borders & Lines:** Structure defined by `1px` borders (Default: `#E7E5E4`).
- **Micro-Interactions:** Indicate hover states via border color changes (`#C2410C` or `#A8A29E`) or subtle opacity shifts. No scaling/movement.

## 2. Symmetry & Layout

- STRICTLY symmetrical to accommodate the Chapter Rail (`left-8`, 32px wide).
- **Content Container Padding:**
  - Mobile: `px-6`
  - Tablet: `px-12`
  - Desktop (XL): `px-32` (128px)
- **Rule:** The `128px` safe zone on both sides keeps content perfectly centered while housing the Rail on the left.

## 3. Typography

- **Headings (Brand):** `Instrument Serif` (H1, H2, H3 - large, tight tracking).
- **Body (UI/Readability):** `Inter` (paragraphs, navigation, buttons).
- **Technical (Data/Badges):** `Geist Mono` (uppercase, `tracking-widest`).

## 4. Primary Accent

- `#C2410C` (Orange 700) for active/hover borders, primary buttons, and links. Use sparingly.
