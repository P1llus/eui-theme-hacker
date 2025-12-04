/**
 * 90s Hacker Theme - Typography
 * 
 * Monospace-focused typography for that authentic terminal feel.
 * Uses modern monospace fonts with good ligature support.
 */

/**
 * Font scale - based on Major Third (1.200)
 */
export const fontScale = {
  xxxs: 0.5625, // 9px
  xxs: 0.6875,  // 11px
  xs: 0.75,     // 12px
  s: 0.875,     // 14px
  m: 1,         // 16px
  l: 1.25,      // 20px
  xl: 1.5,      // 24px
  xxl: 1.875,   // 30px
};

/**
 * Font families
 * 
 * Primary: Fira Code - excellent monospace with programming ligatures
 * Display: Orbitron - futuristic, techy feel for headings
 * Code: Same as primary for consistency
 */
export const fontBase = {
  family: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Source Code Pro', 'Consolas', monospace",
  familyCode: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace",
  familySerif: "'Orbitron', 'Share Tech Mono', 'VT323', monospace",

  // Enable programming ligatures
  featureSettings: "'calt' 1, 'kern' 1, 'liga' 1",
  defaultUnits: 'rem' as const,

  baseline: 4, // Will be computed from base
  lineHeightMultiplier: 1.5,
};

/**
 * Font weights
 */
export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

/**
 * Complete font configuration
 */
export const typography = {
  ...fontBase,
  scale: fontScale,
  weight: fontWeight,
  body: {
    scale: 's' as const,
    weight: 'regular' as const,
  },
  title: {
    weight: 'bold' as const,
  },
};

