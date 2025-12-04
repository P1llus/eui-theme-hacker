/**
 * 90s Hacker Theme - Dark Mode Colors
 * 
 * Maps primitive colors to EUI's semantic color tokens.
 * This is a dark-only theme - it embraces the terminal aesthetic.
 */

import { PRIMITIVE_COLORS } from './_primitive_colors';

/**
 * Brand Colors - The core identity colors
 */
export const brand_colors = {
  primary: PRIMITIVE_COLORS.green100,
  accent: PRIMITIVE_COLORS.purple100,
  accentSecondary: PRIMITIVE_COLORS.blue100,
  success: PRIMITIVE_COLORS.green80,
  warning: PRIMITIVE_COLORS.amber100,
  danger: PRIMITIVE_COLORS.red80,
};

/**
 * Brand Text Colors - Colorful text for emphasis
 */
export const brand_text_colors = {
  // Legacy naming
  primaryText: PRIMITIVE_COLORS.green100,
  accentText: PRIMITIVE_COLORS.purple100,
  successText: PRIMITIVE_COLORS.green80,
  warningText: PRIMITIVE_COLORS.amber100,
  dangerText: PRIMITIVE_COLORS.red80,

  // New naming convention
  textPrimary: PRIMITIVE_COLORS.green100,
  textAccent: PRIMITIVE_COLORS.purple100,
  textAccentSecondary: PRIMITIVE_COLORS.blue100,
  textNeutral: PRIMITIVE_COLORS.gray50,
  textSuccess: PRIMITIVE_COLORS.green80,
  textWarning: PRIMITIVE_COLORS.amber100,
  textRisk: PRIMITIVE_COLORS.amber80,
  textDanger: PRIMITIVE_COLORS.red80,
};

/**
 * General Text Colors
 */
export const text_colors = {
  // Legacy naming
  text: PRIMITIVE_COLORS.gray60,
  title: PRIMITIVE_COLORS.green100,
  subduedText: PRIMITIVE_COLORS.gray40,
  link: PRIMITIVE_COLORS.green100,

  // New naming convention
  textParagraph: PRIMITIVE_COLORS.gray60,
  textHeading: PRIMITIVE_COLORS.green100,
  textSubdued: PRIMITIVE_COLORS.gray40,
  textDisabled: PRIMITIVE_COLORS.gray20,
  textInverse: PRIMITIVE_COLORS.black,
};

/**
 * Shade Colors - Background hierarchy
 */
export const shades = {
  emptyShade: PRIMITIVE_COLORS.bgDeep,
  lightestShade: PRIMITIVE_COLORS.bgDark,
  lightShade: PRIMITIVE_COLORS.bgCard,
  mediumShade: PRIMITIVE_COLORS.gray10,
  darkShade: PRIMITIVE_COLORS.gray30,
  darkestShade: PRIMITIVE_COLORS.gray60,
  fullShade: PRIMITIVE_COLORS.gray70,
};

/**
 * Background Colors - Surface and container backgrounds
 */
export const background_colors = {
  // Base backgrounds
  backgroundBasePrimary: PRIMITIVE_COLORS.green10,
  backgroundBaseAccent: PRIMITIVE_COLORS.purple20,
  backgroundBaseAccentSecondary: PRIMITIVE_COLORS.blue20,
  backgroundBaseNeutral: PRIMITIVE_COLORS.gray5,
  backgroundBaseSuccess: PRIMITIVE_COLORS.green10,
  backgroundBaseWarning: PRIMITIVE_COLORS.amber20,
  backgroundBaseRisk: PRIMITIVE_COLORS.amber20,
  backgroundBaseDanger: PRIMITIVE_COLORS.red20,
  backgroundBaseSubdued: PRIMITIVE_COLORS.bgDeep,
  backgroundBasePlain: PRIMITIVE_COLORS.bgDark,
  backgroundBaseDisabled: PRIMITIVE_COLORS.bgCard,
  backgroundBaseHighlighted: PRIMITIVE_COLORS.bgCard,

  // Form backgrounds
  backgroundBaseFormsPrepend: PRIMITIVE_COLORS.bgCard,
  backgroundBaseFormsControlDisabled: PRIMITIVE_COLORS.bgElevated,

  // Interactive backgrounds
  backgroundBaseInteractiveHover: PRIMITIVE_COLORS.whiteAlpha8,
  backgroundBaseInteractiveSelect: PRIMITIVE_COLORS.green10,
  backgroundBaseInteractiveSelectHover: PRIMITIVE_COLORS.green20,
  backgroundBaseInteractiveOverlay: PRIMITIVE_COLORS.blackAlpha70,

  // Skeleton loading
  backgroundBaseSkeletonEdge: PRIMITIVE_COLORS.whiteAlpha16,
  backgroundBaseSkeletonMiddle: PRIMITIVE_COLORS.whiteAlpha8,

  // Light backgrounds (for badges, callouts with subtle bg)
  backgroundLightPrimary: PRIMITIVE_COLORS.green10,
  backgroundLightAccent: PRIMITIVE_COLORS.purple20,
  backgroundLightAccentSecondary: PRIMITIVE_COLORS.blue20,
  backgroundLightNeutral: PRIMITIVE_COLORS.gray5,
  backgroundLightSuccess: PRIMITIVE_COLORS.green10,
  backgroundLightWarning: PRIMITIVE_COLORS.amber20,
  backgroundLightRisk: PRIMITIVE_COLORS.amber20,
  backgroundLightDanger: PRIMITIVE_COLORS.red20,
  backgroundLightText: PRIMITIVE_COLORS.bgCard,

  // Filled backgrounds (solid color backgrounds)
  backgroundFilledPrimary: PRIMITIVE_COLORS.green60,
  backgroundFilledAccent: PRIMITIVE_COLORS.purple60,
  backgroundFilledAccentSecondary: PRIMITIVE_COLORS.blue60,
  backgroundFilledNeutral: PRIMITIVE_COLORS.gray30,
  backgroundFilledSuccess: PRIMITIVE_COLORS.green60,
  backgroundFilledWarning: PRIMITIVE_COLORS.amber60,
  backgroundFilledRisk: PRIMITIVE_COLORS.amber60,
  backgroundFilledDanger: PRIMITIVE_COLORS.red60,
  backgroundFilledText: PRIMITIVE_COLORS.gray30,
};

/**
 * Transparent Background Colors - For overlays and glassmorphism
 */
export const transparent_background_colors = {
  backgroundTransparent: PRIMITIVE_COLORS.transparent,
  backgroundTransparentPrimary: PRIMITIVE_COLORS.greenGlow15,
  backgroundTransparentAccent: PRIMITIVE_COLORS.purpleGlow15,
  backgroundTransparentAccentSecondary: PRIMITIVE_COLORS.blueGlow15,
  backgroundTransparentNeutral: PRIMITIVE_COLORS.whiteAlpha8,
  backgroundTransparentSuccess: PRIMITIVE_COLORS.greenGlow15,
  backgroundTransparentWarning: PRIMITIVE_COLORS.amberGlow15,
  backgroundTransparentRisk: PRIMITIVE_COLORS.amberGlow15,
  backgroundTransparentDanger: PRIMITIVE_COLORS.redGlow15,
  backgroundTransparentSubdued: PRIMITIVE_COLORS.bgDeep,
  backgroundTransparentHighlighted: PRIMITIVE_COLORS.bgCard,
  backgroundTransparentPlain: PRIMITIVE_COLORS.bgDark,
};

/**
 * Border Colors
 */
export const border_colors = {
  // Base semantic borders
  borderBasePrimary: PRIMITIVE_COLORS.green40,
  borderBaseAccent: PRIMITIVE_COLORS.purple40,
  borderBaseAccentSecondary: PRIMITIVE_COLORS.blue40,
  borderBaseNeutral: PRIMITIVE_COLORS.gray20,
  borderBaseSuccess: PRIMITIVE_COLORS.green40,
  borderBaseWarning: PRIMITIVE_COLORS.amber40,
  borderBaseRisk: PRIMITIVE_COLORS.amber40,
  borderBaseDanger: PRIMITIVE_COLORS.red40,

  // UI borders
  borderBasePlain: PRIMITIVE_COLORS.gray10,
  borderBaseSubdued: PRIMITIVE_COLORS.bgElevated,
  borderBaseProminent: PRIMITIVE_COLORS.gray20,
  borderBaseDisabled: PRIMITIVE_COLORS.gray10,
  borderBaseFloating: PRIMITIVE_COLORS.green40,

  // Form borders
  borderBaseFormsColorSwatch: PRIMITIVE_COLORS.whiteAlpha16,

  // Interactive form borders
  borderInteractiveFormsHoverPlain: PRIMITIVE_COLORS.green60,
  borderInteractiveFormsHoverProminent: PRIMITIVE_COLORS.green80,
  borderInteractiveFormsHoverDanger: PRIMITIVE_COLORS.red60,

  // Strong borders (for emphasis)
  borderStrongPrimary: PRIMITIVE_COLORS.green100,
  borderStrongAccent: PRIMITIVE_COLORS.purple100,
  borderStrongAccentSecondary: PRIMITIVE_COLORS.blue100,
  borderStrongNeutral: PRIMITIVE_COLORS.gray40,
  borderStrongSuccess: PRIMITIVE_COLORS.green80,
  borderStrongWarning: PRIMITIVE_COLORS.amber100,
  borderStrongRisk: PRIMITIVE_COLORS.amber80,
  borderStrongDanger: PRIMITIVE_COLORS.red80,
  borderStrongText: PRIMITIVE_COLORS.gray40,
};

/**
 * Special Colors
 */
export const special_colors = {
  body: PRIMITIVE_COLORS.bgDeep,
  highlight: PRIMITIVE_COLORS.greenGlow25,
  disabled: PRIMITIVE_COLORS.bgCard,
  disabledText: PRIMITIVE_COLORS.gray20,
  shadow: PRIMITIVE_COLORS.black,
};

/**
 * Combined Dark Mode Colors
 */
export const hacker_colors = {
  ...brand_colors,
  ...shades,
  ...special_colors,
  ...brand_text_colors,
  ...text_colors,
  ...background_colors,
  ...transparent_background_colors,
  ...border_colors,
};

