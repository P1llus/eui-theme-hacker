# EUI Hacker theme

A 90s cyberpunk/hacker aesthetic theme for [Elastic UI](https://elastic.github.io/eui/).


### Peer Dependencies

Required peer dependencies (If you have complaints from EuiProvider you can try to update your eui version together with eui-theme-common version):

```bash
npm install @elastic/eui @elastic/eui-theme-common @emotion/react react
```

## Quick Start

### Basic Usage

```tsx
import { EuiProvider } from '@elastic/eui';
import { EuiThemeHacker } from '@p1llus/eui-theme-hacker';

function App() {
  return (
    <EuiProvider theme={EuiThemeHacker} colorMode="dark">
      <YourApp />
    </EuiProvider>
  );
}
```

### With Global Styles

Include global styles for full theme features:

```tsx
import { EuiProvider } from '@elastic/eui';
import { Global } from '@emotion/react';
import { EuiThemeHacker, globalHackerStyles } from '@p1llus/eui-theme-hacker';

function App() {
  return (
    <EuiProvider theme={EuiThemeHacker} colorMode="dark">
      <Global styles={globalHackerStyles} />
      <YourApp />
    </EuiProvider>
  );
}
```

## Global Styles

The theme provides modular global styles. Choose your level:

### Complete Styles

```tsx
import { globalHackerStyles, GOOGLE_FONTS_URL } from '@p1llus/eui-theme-hacker';
```

Add fonts to your HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
```

Includes:
- Custom styled scrollbar
- Neon text selection
- Gradient background
- Glow effects on buttons, cards, forms

### Minimal

```tsx
import { globalHackerStylesMinimal } from '@p1llus/eui-theme-hacker';
```

Includes:
- Font imports
- Basic body styling
- Essential component fixes

### Custom Combination

Mix and match individual modules:

```tsx
import { css } from '@emotion/react';
import {
  hackerBodyBase,
  hackerScrollbar,
  hackerSelection,
  hackerGradientBackground,
  euiComponentEssentials,
  euiGlowEffects,
  GOOGLE_FONTS_URL,
} from '@p1llus/eui-theme-hacker';

// Add fonts to your HTML head:
// <link href={GOOGLE_FONTS_URL} rel="stylesheet" />

const customStyles = css`
  ${hackerBodyBase}
  ${hackerScrollbar}
  ${euiComponentEssentials}
  // Skip glow effects for cleaner look
`;
```

## CSS-in-JS Utilities

Use these in your own components:

```tsx
import { 
  glowText, 
  glowBorder, 
  terminalCard, 
  typingCursor,
  pulsingIndicator,
  scanlineEffect,
  crtCurvature,
} from '@p1llus/eui-theme-hacker';

// Glowing text
const title = css`
  ${glowText('#00ff41')}
`;

// Glowing border
const panel = css`
  ${glowBorder('#00ff41')}
`;

// Terminal-style card with header bar
const terminal = css`
  ${terminalCard}
`;

// Blinking cursor after text
const prompt = css`
  ${typingCursor}
`;
```

### Keyframe Animations

```tsx
import {
  blinkAnimation,
  pulseAnimation,
  glitchAnimation,
  typeAnimation,
} from '@p1llus/eui-theme-hacker';

const cursor = css`
  animation: ${blinkAnimation} 1s step-end infinite;
`;

const indicator = css`
  animation: ${pulseAnimation} 2s ease-in-out infinite;
`;
```

## Color Exports

Access the color palettes directly:

```tsx
import { PRIMITIVE_COLORS, SEMANTIC_COLORS } from '@p1llus/eui-theme-hacker';

// Primitive colors - raw values
PRIMITIVE_COLORS.green100  // '#00ff41' - Matrix green
PRIMITIVE_COLORS.bgDeep    // '#0a0a0f' - Deep background
PRIMITIVE_COLORS.purple100 // '#bd00ff' - Accent purple
PRIMITIVE_COLORS.blue100   // '#00d4ff' - Cyan accent

// Semantic colors - mapped values
SEMANTIC_COLORS.primary100      // Primary brand color
SEMANTIC_COLORS.accent100       // Accent color
SEMANTIC_COLORS.danger80        // Danger/error color
```

## Theme Tokens

The theme provides complete coverage of EUI's token system:

| Category | Tokens | Description |
|----------|--------|-------------|
| Colors | 100+ | Brand, text, background, border colors |
| Buttons | 60+ | All button states and variants |
| Forms | 20+ | Input backgrounds, borders, controls |
| Components | 60+ | Badge, code, data grid, header, etc. |
| Typography | 15+ | Font families, scales, weights |
| Shadows | 20+ | Shadow sizes and variants |

### Accessing Theme Tokens

```tsx
import { useEuiTheme } from '@elastic/eui';

function MyComponent() {
  const { euiTheme } = useEuiTheme();
  
  return (
    <div style={{ 
      color: euiTheme.colors.primary,
      fontFamily: euiTheme.font.family,
      padding: euiTheme.size.m,
    }}>
      Styled with theme tokens
    </div>
  );
}
```

## CRT Effects

Add retro CRT monitor effects:

```tsx
import { scanlineEffect, crtCurvature } from '@p1llus/eui-theme-hacker';

// Apply to body for full-screen effect
const retroBody = css`
  ${scanlineEffect}
  ${crtCurvature}
`;
```

Note: CRT effects may impact performance on some devices.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## What's Covered by Tokens vs Global CSS

### Theme Tokens (Automatic)

These work automatically via `EuiThemeHacker`:

- All brand, text, background, and border colors
- Button states (hover, active, filled, empty, disabled)
- Form backgrounds, borders, and controls
- Component colors (60+ components)
- Typography, shadows, focus states

### Global CSS (Required for some features)

Some styling requires global CSS:

| Style | Reason |
|-------|--------|
| Font imports | External Google Fonts URL |
| Custom scrollbar | Browser-specific CSS |
| Text selection | Browser-specific CSS |
| Panel border colors | No token exists |
| Glow effects | Box-shadow animations |

