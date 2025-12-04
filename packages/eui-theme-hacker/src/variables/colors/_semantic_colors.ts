/**
 * 90s Hacker Theme - Semantic Colors
 * 
 * These are the semantic color mappings that bridge primitive colors
 * to meaningful color tokens used throughout the theme.
 * 
 * Naming follows EUI conventions with numeric suffixes indicating
 * lightness/darkness levels (lower = darker, higher = lighter).
 */

import { PRIMITIVE_COLORS } from './_primitive_colors';

/**
 * Semantic color tokens
 * 
 * The hacker theme uses matrix green as primary, with supporting
 * colors for different semantic meanings.
 */
export const SEMANTIC_COLORS = {
  // Plain colors (constant across modes)
  plainLight: PRIMITIVE_COLORS.white,
  plainDark: PRIMITIVE_COLORS.black,
  plainLightRGB: '255, 255, 255',
  plainDarkRGB: '0, 0, 0',

  // Transparency variants
  plainLightAlpha8: PRIMITIVE_COLORS.whiteAlpha8,
  plainLightAlpha16: PRIMITIVE_COLORS.whiteAlpha16,
  plainDarkAlpha50: PRIMITIVE_COLORS.blackAlpha50,
  plainDarkAlpha70: PRIMITIVE_COLORS.blackAlpha70,

  // Primary (Matrix Green) - The signature hacker color
  primary10: PRIMITIVE_COLORS.green10,
  primary20: PRIMITIVE_COLORS.green20,
  primary30: PRIMITIVE_COLORS.green30,
  primary40: PRIMITIVE_COLORS.green40,
  primary50: PRIMITIVE_COLORS.green50,
  primary60: PRIMITIVE_COLORS.green60,
  primary70: PRIMITIVE_COLORS.green70,
  primary80: PRIMITIVE_COLORS.green80,
  primary90: PRIMITIVE_COLORS.green90,
  primary100: PRIMITIVE_COLORS.green100,
  primary110: PRIMITIVE_COLORS.green110,
  primary120: PRIMITIVE_COLORS.green120,
  primary130: PRIMITIVE_COLORS.green20,
  primary140: PRIMITIVE_COLORS.green10,

  // Accent (Purple/Magenta) - Secondary attention
  accent10: PRIMITIVE_COLORS.purple20,
  accent20: PRIMITIVE_COLORS.purple20,
  accent40: PRIMITIVE_COLORS.purple40,
  accent60: PRIMITIVE_COLORS.purple60,
  accent80: PRIMITIVE_COLORS.purple80,
  accent100: PRIMITIVE_COLORS.purple100,
  accent110: PRIMITIVE_COLORS.purple120,
  accent120: PRIMITIVE_COLORS.purple120,
  accent130: PRIMITIVE_COLORS.purple40,
  accent140: PRIMITIVE_COLORS.purple20,

  // Accent Secondary (Cyan/Blue) - Tertiary accent
  accentSecondary10: PRIMITIVE_COLORS.blue20,
  accentSecondary20: PRIMITIVE_COLORS.blue20,
  accentSecondary40: PRIMITIVE_COLORS.blue40,
  accentSecondary60: PRIMITIVE_COLORS.blue60,
  accentSecondary80: PRIMITIVE_COLORS.blue80,
  accentSecondary100: PRIMITIVE_COLORS.blue100,
  accentSecondary110: PRIMITIVE_COLORS.blue120,
  accentSecondary120: PRIMITIVE_COLORS.blue120,
  accentSecondary130: PRIMITIVE_COLORS.blue40,
  accentSecondary140: PRIMITIVE_COLORS.blue20,

  // Neutral (Gray)
  neutral10: PRIMITIVE_COLORS.gray5,
  neutral20: PRIMITIVE_COLORS.gray10,
  neutral30: PRIMITIVE_COLORS.gray20,
  neutral40: PRIMITIVE_COLORS.gray30,
  neutral50: PRIMITIVE_COLORS.gray40,
  neutral60: PRIMITIVE_COLORS.gray50,
  neutral70: PRIMITIVE_COLORS.gray60,
  neutral80: PRIMITIVE_COLORS.gray70,
  neutral110: PRIMITIVE_COLORS.gray80,
  neutral120: PRIMITIVE_COLORS.gray10,
  neutral130: PRIMITIVE_COLORS.gray5,
  neutral140: PRIMITIVE_COLORS.bgCard,

  // Success (Green - same as primary for hacker theme)
  success10: PRIMITIVE_COLORS.green10,
  success20: PRIMITIVE_COLORS.green20,
  success40: PRIMITIVE_COLORS.green40,
  success60: PRIMITIVE_COLORS.green60,
  success80: PRIMITIVE_COLORS.green80,
  success100: PRIMITIVE_COLORS.green100,
  success110: PRIMITIVE_COLORS.green110,
  success120: PRIMITIVE_COLORS.green120,
  success130: PRIMITIVE_COLORS.green20,
  success140: PRIMITIVE_COLORS.green10,

  // Warning (Amber)
  warning10: PRIMITIVE_COLORS.amber20,
  warning20: PRIMITIVE_COLORS.amber20,
  warning30: PRIMITIVE_COLORS.amber100,
  warning40: PRIMITIVE_COLORS.amber100,
  warning60: PRIMITIVE_COLORS.amber80,
  warning80: PRIMITIVE_COLORS.amber100,
  warning100: PRIMITIVE_COLORS.amber100,
  warning110: PRIMITIVE_COLORS.amber120,
  warning120: PRIMITIVE_COLORS.amber120,
  warning130: PRIMITIVE_COLORS.amber40,
  warning140: PRIMITIVE_COLORS.amber20,

  // Risk (Amber variant)
  risk10: PRIMITIVE_COLORS.amber20,
  risk20: PRIMITIVE_COLORS.amber20,
  risk40: PRIMITIVE_COLORS.amber40,
  risk50: PRIMITIVE_COLORS.amber80,
  risk60: PRIMITIVE_COLORS.amber60,
  risk80: PRIMITIVE_COLORS.amber80,
  risk100: PRIMITIVE_COLORS.amber100,
  risk110: PRIMITIVE_COLORS.amber120,
  risk120: PRIMITIVE_COLORS.amber40,
  risk130: PRIMITIVE_COLORS.amber40,
  risk140: PRIMITIVE_COLORS.amber20,

  // Danger (Red)
  danger10: PRIMITIVE_COLORS.red20,
  danger20: PRIMITIVE_COLORS.red20,
  danger40: PRIMITIVE_COLORS.red40,
  danger60: PRIMITIVE_COLORS.red60,
  danger70: PRIMITIVE_COLORS.red60,
  danger80: PRIMITIVE_COLORS.red80,
  danger100: PRIMITIVE_COLORS.red100,
  danger110: PRIMITIVE_COLORS.red120,
  danger120: PRIMITIVE_COLORS.red120,
  danger130: PRIMITIVE_COLORS.red40,
  danger140: PRIMITIVE_COLORS.red20,

  // Assistance (used for code highlighting - using blue)
  assistance60: PRIMITIVE_COLORS.blue100,
  assistance100: PRIMITIVE_COLORS.blue100,

  // Shade scale (for backgrounds, surfaces, and text)
  shade10: PRIMITIVE_COLORS.bgDeep,
  shade15: PRIMITIVE_COLORS.bgDark,
  shade20: PRIMITIVE_COLORS.gray60,
  shade25: PRIMITIVE_COLORS.bgCard,
  shade30: PRIMITIVE_COLORS.gray60,
  shade40: PRIMITIVE_COLORS.gray50,
  shade50: PRIMITIVE_COLORS.gray40,
  shade55: PRIMITIVE_COLORS.gray40,
  shade60: PRIMITIVE_COLORS.gray30,
  shade70: PRIMITIVE_COLORS.gray20,
  shade75: PRIMITIVE_COLORS.gray20,
  shade80: PRIMITIVE_COLORS.gray20,
  shade90: PRIMITIVE_COLORS.gray10,
  shade95: PRIMITIVE_COLORS.gray10,
  shade100: PRIMITIVE_COLORS.gray10,
  shade100RGB: '48, 54, 61',
  shade105: PRIMITIVE_COLORS.bgHover,
  shade110: PRIMITIVE_COLORS.bgElevated,
  shade120: PRIMITIVE_COLORS.bgCard,
  shade120Alpha70: 'rgba(22, 27, 34, 0.70)',
  shade125: PRIMITIVE_COLORS.bgCard,
  shade130: PRIMITIVE_COLORS.bgDark,
  shade135: PRIMITIVE_COLORS.bgDark,
  shade140: PRIMITIVE_COLORS.bgDeep,
  shade140RGB: '10, 10, 15',
  shade145: PRIMITIVE_COLORS.bgDeep,
} as const;

