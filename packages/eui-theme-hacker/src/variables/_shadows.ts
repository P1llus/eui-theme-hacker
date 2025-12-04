/**
 * 90s Hacker Theme - Shadows
 * 
 * Neon glow effects instead of traditional shadows.
 * Creates that CRT monitor / terminal glow aesthetic.
 */

import {
  formatMultipleBoxShadow,
  type _EuiThemeShadows,
  type _EuiThemeShadowPrimitives,
} from '@elastic/eui-theme-common';
import { PRIMITIVE_COLORS } from './colors/_primitive_colors';

/**
 * Shadow primitives with neon glow effect
 * Uses green glow for that matrix/terminal aesthetic
 */
export const shadowPrimitives: _EuiThemeShadowPrimitives = {
  xs: {
    light: [
      { opacity: 0.16, x: 0, y: 0, blur: 2, spread: 0 },
      { opacity: 0.06, x: 0, y: 1, blur: 4, spread: 0 },
      { opacity: 0.04, x: 0, y: 2, blur: 8, spread: 0 },
    ],
    dark: [
      { opacity: 1, x: 0, y: 0, blur: 0, spread: 1 },
      { opacity: 0.4, x: 0, y: 1, blur: 4, spread: 0 },
      { opacity: 0.24, x: 0, y: 2, blur: 8, spread: 0 },
    ],
  },
  s: {
    light: [
      { opacity: 0.16, x: 0, y: 0, blur: 2, spread: 0 },
      { opacity: 0.08, x: 0, y: 2, blur: 7, spread: 0 },
      { opacity: 0.05, x: 0, y: 4, blur: 11, spread: 0 },
    ],
    dark: [
      { opacity: 1, x: 0, y: 0, blur: 0, spread: 1 },
      { opacity: 0.46, x: 0, y: 2, blur: 7, spread: 0 },
      { opacity: 0.26, x: 0, y: 4, blur: 11, spread: 0 },
    ],
  },
  m: {
    light: [
      { opacity: 0.16, x: 0, y: 0, blur: 2, spread: 0 },
      { opacity: 0.1, x: 0, y: 3, blur: 10, spread: 0 },
      { opacity: 0.06, x: 0, y: 6, blur: 14, spread: 0 },
    ],
    dark: [
      { opacity: 1, x: 0, y: 0, blur: 0, spread: 1 },
      { opacity: 0.52, x: 0, y: 3, blur: 10, spread: 0 },
      { opacity: 0.28, x: 0, y: 6, blur: 14, spread: 0 },
    ],
  },
  l: {
    light: [
      { opacity: 0.16, x: 0, y: 0, blur: 2, spread: 0 },
      { opacity: 0.12, x: 0, y: 4, blur: 13, spread: 0 },
      { opacity: 0.07, x: 0, y: 8, blur: 17, spread: 0 },
    ],
    dark: [
      { opacity: 1, x: 0, y: 0, blur: 0, spread: 1 },
      { opacity: 0.58, x: 0, y: 4, blur: 13, spread: 0 },
      { opacity: 0.3, x: 0, y: 8, blur: 17, spread: 0 },
    ],
  },
  xl: {
    light: [
      { opacity: 0.16, x: 0, y: 0, blur: 2, spread: 0 },
      { opacity: 0.14, x: 0, y: 5, blur: 16, spread: 0 },
      { opacity: 0.08, x: 0, y: 10, blur: 20, spread: 0 },
    ],
    dark: [
      { opacity: 1, x: 0, y: 0, blur: 0, spread: 1 },
      { opacity: 0.64, x: 0, y: 5, blur: 16, spread: 0 },
      { opacity: 0.32, x: 0, y: 10, blur: 20, spread: 0 },
    ],
  },
  xxl: {
    light: [
      { opacity: 0.16, x: 0, y: 0, blur: 2, spread: 0 },
      { opacity: 0.16, x: 0, y: 6, blur: 19, spread: 0 },
      { opacity: 0.09, x: 0, y: 12, blur: 23, spread: 0 },
    ],
    dark: [
      { opacity: 1, x: 0, y: 0, blur: 0, spread: 1 },
      { opacity: 0.7, x: 0, y: 6, blur: 19, spread: 0 },
      { opacity: 0.34, x: 0, y: 12, blur: 23, spread: 0 },
    ],
  },
  flat: {
    light: [],
    dark: [],
  },
};

// Shadow colors - using black for base shadows, green for hover
const shadowColorsLight = {
  colors: {
    base: PRIMITIVE_COLORS.black,
    hover: PRIMITIVE_COLORS.green60, // Green glow for hover effects
  },
};

const shadowColorsDark = {
  colors: {
    base: PRIMITIVE_COLORS.black,
    hover: PRIMITIVE_COLORS.green60, // Green glow for hover effects
  },
};

// Light mode shadows (same as dark for this theme)
const shadowsLight = {
  ...shadowColorsLight,
  xs: {
    down: formatMultipleBoxShadow(shadowPrimitives.xs.dark.slice(1), {
      color: shadowColorsLight.colors.base,
    }),
    up: formatMultipleBoxShadow(shadowPrimitives.xs.dark.slice(1), {
      direction: 'up',
      color: shadowColorsLight.colors.base,
    }),
  },
  s: {
    down: formatMultipleBoxShadow(shadowPrimitives.s.dark.slice(1), {
      color: shadowColorsLight.colors.base,
    }),
    up: formatMultipleBoxShadow(shadowPrimitives.s.dark.slice(1), {
      direction: 'up',
      color: shadowColorsLight.colors.base,
    }),
  },
  m: {
    down: formatMultipleBoxShadow(shadowPrimitives.m.dark.slice(1), {
      color: shadowColorsLight.colors.base,
    }),
    up: formatMultipleBoxShadow(shadowPrimitives.m.dark.slice(1), {
      direction: 'up',
      color: shadowColorsLight.colors.base,
    }),
  },
  l: {
    down: formatMultipleBoxShadow(shadowPrimitives.l.dark.slice(1), {
      color: shadowColorsLight.colors.base,
    }),
    up: formatMultipleBoxShadow(shadowPrimitives.l.dark.slice(1), {
      direction: 'up',
      color: shadowColorsLight.colors.base,
    }),
  },
  xl: {
    down: formatMultipleBoxShadow(shadowPrimitives.xl.dark.slice(1), {
      color: shadowColorsLight.colors.base,
    }),
    up: formatMultipleBoxShadow(shadowPrimitives.xl.dark.slice(1), {
      direction: 'up',
      color: shadowColorsLight.colors.base,
    }),
  },
  hover: {
    base: {
      down: formatMultipleBoxShadow(shadowPrimitives.s.dark.slice(1), {
        color: shadowColorsLight.colors.hover,
      }),
      up: formatMultipleBoxShadow(shadowPrimitives.s.dark.slice(1), {
        direction: 'up',
        color: shadowColorsLight.colors.hover,
      }),
    },
    xl: {
      down: formatMultipleBoxShadow(shadowPrimitives.xxl.dark.slice(1), {
        color: shadowColorsLight.colors.hover,
      }),
      up: formatMultipleBoxShadow(shadowPrimitives.xxl.dark.slice(1), {
        direction: 'up',
        color: shadowColorsLight.colors.hover,
      }),
    },
  },
  flat: {
    down: formatMultipleBoxShadow(shadowPrimitives.xs.dark.slice(1), {
      color: shadowColorsLight.colors.base,
    }),
    up: formatMultipleBoxShadow(shadowPrimitives.xs.dark.slice(1), {
      direction: 'up',
      color: shadowColorsLight.colors.base,
    }),
  },
};

// Dark mode shadows
const shadowsDark = {
  ...shadowColorsDark,
  xs: {
    down: formatMultipleBoxShadow(shadowPrimitives.xs.dark.slice(1), {
      color: shadowColorsDark.colors.base,
    }),
    up: formatMultipleBoxShadow(shadowPrimitives.xs.dark.slice(1), {
      direction: 'up',
      color: shadowColorsDark.colors.base,
    }),
  },
  s: {
    down: formatMultipleBoxShadow(shadowPrimitives.s.dark.slice(1), {
      color: shadowColorsDark.colors.base,
    }),
    up: formatMultipleBoxShadow(shadowPrimitives.s.dark.slice(1), {
      direction: 'up',
      color: shadowColorsDark.colors.base,
    }),
  },
  m: {
    down: formatMultipleBoxShadow(shadowPrimitives.m.dark.slice(1), {
      color: shadowColorsDark.colors.base,
    }),
    up: formatMultipleBoxShadow(shadowPrimitives.m.dark.slice(1), {
      direction: 'up',
      color: shadowColorsDark.colors.base,
    }),
  },
  l: {
    down: formatMultipleBoxShadow(shadowPrimitives.l.dark.slice(1), {
      color: shadowColorsDark.colors.base,
    }),
    up: formatMultipleBoxShadow(shadowPrimitives.l.dark.slice(1), {
      direction: 'up',
      color: shadowColorsDark.colors.base,
    }),
  },
  xl: {
    down: formatMultipleBoxShadow(shadowPrimitives.xl.dark.slice(1), {
      color: shadowColorsDark.colors.base,
    }),
    up: formatMultipleBoxShadow(shadowPrimitives.xl.dark.slice(1), {
      direction: 'up',
      color: shadowColorsDark.colors.base,
    }),
  },
  hover: {
    base: {
      down: formatMultipleBoxShadow(shadowPrimitives.s.dark.slice(1), {
        color: shadowColorsDark.colors.hover,
      }),
      up: formatMultipleBoxShadow(shadowPrimitives.s.dark.slice(1), {
        direction: 'up',
        color: shadowColorsDark.colors.hover,
      }),
    },
    xl: {
      down: formatMultipleBoxShadow(shadowPrimitives.xxl.dark.slice(1), {
        color: shadowColorsDark.colors.hover,
      }),
      up: formatMultipleBoxShadow(shadowPrimitives.xxl.dark.slice(1), {
        direction: 'up',
        color: shadowColorsDark.colors.hover,
      }),
    },
  },
  flat: {
    down: formatMultipleBoxShadow(shadowPrimitives.xs.dark.slice(1), {
      color: shadowColorsDark.colors.base,
    }),
    up: formatMultipleBoxShadow(shadowPrimitives.xs.dark.slice(1), {
      direction: 'up',
      color: shadowColorsDark.colors.base,
    }),
  },
};

/**
 * Complete shadows configuration
 */
export const shadow: _EuiThemeShadows = {
  LIGHT: shadowsLight,
  DARK: shadowsDark,
};

/**
 * Special shadow variants for custom styling
 * (exported separately for use in global styles)
 */
export const specialShadows = {
  // Floating elements (dropdowns, popovers)
  floating: `0 0 20px ${PRIMITIVE_COLORS.greenGlow25}, 0 6px 12px ${PRIMITIVE_COLORS.blackAlpha70}`,
  
  // Focused elements
  focus: `0 0 0 2px ${PRIMITIVE_COLORS.green100}`,
  focusInset: `inset 0 0 0 2px ${PRIMITIVE_COLORS.green100}`,
  
  // Button hover glow
  buttonHover: `0 0 20px ${PRIMITIVE_COLORS.greenGlow40}`,
  buttonActive: `0 0 30px ${PRIMITIVE_COLORS.greenGlow40}, inset 0 2px 4px ${PRIMITIVE_COLORS.blackAlpha50}`,
  
  // Danger variants
  dangerFocus: `0 0 0 2px ${PRIMITIVE_COLORS.red80}`,
  dangerGlow: `0 0 20px ${PRIMITIVE_COLORS.redGlow25}`,
};
