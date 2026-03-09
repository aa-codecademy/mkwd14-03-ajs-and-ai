# STYLING.md — Visual Design Guidelines

## General Principles

- Clean, modern, and readable — this is a student showcase, not a marketing site
- Fully responsive — must look good on both desktop and mobile
- No CSS frameworks — write all styles from scratch in `css/style.css`
- Use **CSS custom properties** (variables) for all colors, spacing, and font sizes

## Color Palette (suggested — agent may refine)

```css
:root {
  --color-bg: #f0f4f8;
  --color-surface: #ffffff;
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-text: #1e293b;
  --color-text-muted: #64748b;
  --color-border: #e2e8f0;
  --color-error: #dc2626;
  --color-warning: #d97706;
  --color-info: #0284c7;
  --color-success: #16a34a;
}
```

## Layout

- Max content width: `1200px`, centered with auto margins
- Page has a sticky header with the app name and a subtle tagline
- Search bar is centered, full-width up to `600px`
- Quick buttons sit in a horizontal row, wrapping on mobile
- Country cards display in a **CSS Grid**: 4 columns on desktop, 2 on tablet, 1 on mobile

## Components

### Search Bar
- Large, rounded input field with a clear focus ring
- Primary-colored Search button immediately to the right

### Country Card
- White card with a subtle box shadow and rounded corners
- Flag image fills the top of the card (object-fit: cover)
- Card content has consistent padding
- Wikipedia link is styled as a small accented button at the bottom

### Buttons (Quick Access)
- Outlined style (border + text, transparent background)
- Hover fills with the primary color
- Active state is slightly darker

### Notification
- Full-width banner below the search bar
- Left border accent indicates type (red = error, amber = warning, blue = info)
- Fades in and out smoothly with a CSS transition

### Loader
- Centered spinner animation using pure CSS (no GIF, no external assets)
- Displayed over the results area, not full-screen

## Typography

- Use a system font stack or a single clean Google Font
- Heading: bold, larger
- Card country name: `1.1rem`, semi-bold
- Card details: `0.9rem`, muted color
- Consistent line-height of `1.6` throughout
