---
name: Alexandria Dark Mode
colors:
  surface: '#000000'
  surface-dim: '#000000'
  surface-bright: '#2a303a'
  surface-container-lowest: '#0e1013'
  surface-container-low: '#16191f'
  surface-container: '#1c2026'
  surface-container-high: '#232830'
  surface-container-highest: '#2a303a'
  on-surface: '#e8eaed'
  on-surface-variant: '#9aa0a6'
  inverse-surface: '#e8eaed'
  inverse-on-surface: '#202124'
  outline: '#54595d'
  outline-variant: '#3a3d40'
  surface-tint: '#8ab4f8'
  primary: '#8ab4f8'
  on-primary: '#000000'
  primary-container: '#3366cc'
  on-primary-container: '#ffffff'
  inverse-primary: '#3366cc'
  secondary: '#54595d'
  on-secondary: '#ffffff'
  secondary-container: '#3a3d40'
  on-secondary-container: '#e8eaed'
  tertiary: '#fee77e'
  on-tertiary: '#000000'
  tertiary-container: '#c7b34b'
  on-tertiary-container: '#000000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#8ab4f8'
  primary-fixed-dim: '#3366cc'
  on-primary-fixed: '#000000'
  on-primary-fixed-variant: '#1a3366'
  secondary-fixed: '#e8eaed'
  secondary-fixed-dim: '#9aa0a6'
  on-secondary-fixed: '#000000'
  on-secondary-fixed-variant: '#202124'
  tertiary-fixed: '#fee77e'
  tertiary-fixed-dim: '#c7b34b'
  on-tertiary-fixed: '#000000'
  on-tertiary-fixed-variant: '#4a421b'
  background: '#000000'
  on-background: '#e8eaed'
  surface-variant: '#2a303a'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system embodies an "Alexandria Dark Mode" aesthetic, blending soft neutral grayish-blues with a sleek pure black background. It is designed for creative professionals and high-performance tools that require a focused, immersive experience.

The visual style is a hybrid of **Minimalism** and **Glassmorphism**, set against a deep, expansive backdrop. It avoids traditional "flat" design by using light as the primary material. UI elements should feel like glowing instrumentation floating in a dark, high-contrast space. 

## Colors

The palette is anchored by "Ice Blue" (#8AB4F8), a high-chroma primary accent used for critical actions and state indicators. 

- **Primary (Ice Blue):** #8AB4F8. Use for primary buttons, active states, and critical notifications.
- **Background (Pure Black):** #000000. A deep, pure black that provides the foundation for the cinematic depth.
- **Surface (Dark Slate):** #1c2026. A slightly lighter tier for containers and cards.
- **Secondary Accent:** #54595D. A neutral grayish-blue for secondary elements.
- **Neutral/Text:** High-contrast off-white (#e8eaed) for readability, with muted grays (#9aa0a6) for secondary metadata.

## Typography

Typography in this design system utilizes a high-contrast pairing to balance expression with utility. 

**Sora** is the display voice—geometric and futuristic. It should be used for large headings and punchy titles. **Inter** handles the heavy lifting for body copy, ensuring maximum legibility in dense interfaces. **JetBrains Mono** is utilized for technical data, labels, and status indicators, reinforcing the "instrumentation" feel of the system. 

Text should generally be pure white or very light gray. Avoid mid-tones for text on the dark background to maintain the high-energy, cinematic feel.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a strictly enforced 4px baseline. 

- **Desktop:** 12-column grid, 64px outer margins, 24px gutters.
- **Tablet:** 8-column grid, 32px outer margins, 16px gutters.
- **Mobile:** 4-column grid, 16px outer margins, 16px gutters.

Space is used aggressively to create "focus zones." Large sections of negative space (Pure Black) are essential to allow the Ice Blue accents to pop without overwhelming the user.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Backdrop Blurs**, rather than heavy shadows.

1.  **Level 0 (Floor):** The Pure Black background (#000000).
2.  **Level 1 (Cards/Panels):** Dark Slate surface (#1c2026) with a subtle 1px border (#3a3d40).
3.  **Level 2 (Modals/Popovers):** Semi-transparent Slate (80% opacity) with a heavy background blur (20px) and a Ice Blue inner-glow (2% opacity) to suggest light bleed.

Shadows, when used, are "Ambient"—low-opacity glows that match the color of the element (e.g., a primary button casts a soft #8AB4F8 glow rather than a black shadow).

## Shapes

The shape language is "Soft-Tech." While the brand is high-energy and aggressive, the 4px (Soft) corner radius ensures the UI feels like a precision-milled piece of hardware rather than something sharp or unrefined. 

- Small components (Buttons, Inputs): 4px radius.
- Medium components (Cards, Modals): 8px radius.
- Large containers: 12px radius.

Interactive elements should never be fully pill-shaped; they must maintain a structured, rectangular essence to align with the technical "Alexandria" narrative.

## Components

- **Buttons:** Primary buttons are solid Ice Blue with black text. Secondary buttons are outlined in #3a3d40 with white text, shifting to a blue border on hover.
- **Inputs:** Darker than the surface (#0e1013), with a 1px bottom-border that glows Ice Blue when focused. Labels use JetBrains Mono in uppercase.
- **Chips:** Small, technical tags using JetBrains Mono. Success states use a deep green glow, while warnings use a soft yellow.
- **Cards:** No external shadows. Depth is created purely through color stepping (#1c2026) and a thin, low-contrast border.
- **Progress Bars:** Smooth effect. Use a gradient from #8AB4F8 to #3366CC for the fill, with a subtle "pulse" animation.
- **Data Visualization:** Line charts and graphs should utilize thin, high-intensity glowing lines (neon effect) against the dark void.