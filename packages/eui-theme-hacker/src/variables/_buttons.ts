/**
 * 90s Hacker Theme - Button Colors
 * 
 * Button-specific color tokens for all button variants and states.
 * Follows EUI's button color structure.
 */

import type { _EuiThemeButton, _EuiThemeButtonColors } from '@elastic/eui-theme-common';
import { SEMANTIC_COLORS } from './colors/_semantic_colors';
import { PRIMITIVE_COLORS } from './colors/_primitive_colors';

/**
 * Button colors for dark mode
 */
const dark_button_colors: _EuiThemeButtonColors = {
  // Base backgrounds
  backgroundPrimary: SEMANTIC_COLORS.primary130,
  backgroundAccent: SEMANTIC_COLORS.accent130,
  backgroundAccentSecondary: SEMANTIC_COLORS.accentSecondary130,
  backgroundNeutral: SEMANTIC_COLORS.neutral130,
  backgroundSuccess: SEMANTIC_COLORS.success130,
  backgroundWarning: SEMANTIC_COLORS.warning130,
  backgroundRisk: SEMANTIC_COLORS.risk130,
  backgroundDanger: SEMANTIC_COLORS.danger130,
  backgroundText: SEMANTIC_COLORS.shade120,
  backgroundDisabled: SEMANTIC_COLORS.shade130,

  // Hover backgrounds
  backgroundPrimaryHover: SEMANTIC_COLORS.primary120,
  backgroundAccentHover: SEMANTIC_COLORS.accent120,
  backgroundAccentSecondaryHover: SEMANTIC_COLORS.accentSecondary120,
  backgroundNeutralHover: SEMANTIC_COLORS.neutral120,
  backgroundSuccessHover: SEMANTIC_COLORS.success120,
  backgroundWarningHover: SEMANTIC_COLORS.warning120,
  backgroundRiskHover: SEMANTIC_COLORS.risk120,
  backgroundDangerHover: SEMANTIC_COLORS.danger120,
  backgroundTextHover: SEMANTIC_COLORS.shade110,

  // Active backgrounds
  backgroundPrimaryActive: SEMANTIC_COLORS.primary110,
  backgroundAccentActive: SEMANTIC_COLORS.accent110,
  backgroundAccentSecondaryActive: SEMANTIC_COLORS.accentSecondary110,
  backgroundNeutralActive: SEMANTIC_COLORS.neutral110,
  backgroundSuccessActive: SEMANTIC_COLORS.success110,
  backgroundWarningActive: SEMANTIC_COLORS.warning110,
  backgroundRiskActive: SEMANTIC_COLORS.risk110,
  backgroundDangerActive: SEMANTIC_COLORS.danger110,
  backgroundTextActive: SEMANTIC_COLORS.shade100,

  // Filled backgrounds
  backgroundFilledPrimary: SEMANTIC_COLORS.primary60,
  backgroundFilledAccent: SEMANTIC_COLORS.accent60,
  backgroundFilledAccentSecondary: SEMANTIC_COLORS.accentSecondary60,
  backgroundFilledNeutral: SEMANTIC_COLORS.neutral50,
  backgroundFilledSuccess: SEMANTIC_COLORS.success60,
  backgroundFilledWarning: SEMANTIC_COLORS.warning40,
  backgroundFilledRisk: SEMANTIC_COLORS.risk50,
  backgroundFilledDanger: SEMANTIC_COLORS.danger60,
  backgroundFilledText: SEMANTIC_COLORS.shade60,
  backgroundFilledDisabled: SEMANTIC_COLORS.shade100,

  // Filled hover backgrounds
  backgroundFilledPrimaryHover: SEMANTIC_COLORS.primary80,
  backgroundFilledAccentHover: SEMANTIC_COLORS.accent80,
  backgroundFilledAccentSecondaryHover: SEMANTIC_COLORS.accentSecondary80,
  backgroundFilledNeutralHover: SEMANTIC_COLORS.neutral60,
  backgroundFilledSuccessHover: SEMANTIC_COLORS.success80,
  backgroundFilledWarningHover: SEMANTIC_COLORS.warning60,
  backgroundFilledRiskHover: SEMANTIC_COLORS.risk60,
  backgroundFilledDangerHover: SEMANTIC_COLORS.danger80,
  backgroundFilledTextHover: SEMANTIC_COLORS.shade70,

  // Filled active backgrounds
  backgroundFilledPrimaryActive: SEMANTIC_COLORS.primary100,
  backgroundFilledAccentActive: SEMANTIC_COLORS.accent100,
  backgroundFilledAccentSecondaryActive: SEMANTIC_COLORS.accentSecondary100,
  backgroundFilledNeutralActive: SEMANTIC_COLORS.neutral70,
  backgroundFilledSuccessActive: SEMANTIC_COLORS.success100,
  backgroundFilledWarningActive: SEMANTIC_COLORS.warning80,
  backgroundFilledRiskActive: SEMANTIC_COLORS.risk80,
  backgroundFilledDangerActive: SEMANTIC_COLORS.danger100,
  backgroundFilledTextActive: SEMANTIC_COLORS.shade80,

  // Empty (ghost) hover backgrounds
  backgroundEmptyPrimaryHover: PRIMITIVE_COLORS.greenGlow15,
  backgroundEmptyAccentHover: PRIMITIVE_COLORS.purpleGlow15,
  backgroundEmptyAccentSecondaryHover: PRIMITIVE_COLORS.blueGlow15,
  backgroundEmptyNeutralHover: PRIMITIVE_COLORS.whiteAlpha8,
  backgroundEmptySuccessHover: PRIMITIVE_COLORS.greenGlow15,
  backgroundEmptyWarningHover: PRIMITIVE_COLORS.amberGlow15,
  backgroundEmptyRiskHover: PRIMITIVE_COLORS.amberGlow15,
  backgroundEmptyDangerHover: PRIMITIVE_COLORS.redGlow15,
  backgroundEmptyTextHover: PRIMITIVE_COLORS.whiteAlpha8,

  // Empty (ghost) active backgrounds
  backgroundEmptyPrimaryActive: PRIMITIVE_COLORS.greenGlow25,
  backgroundEmptyAccentActive: PRIMITIVE_COLORS.purpleGlow15,
  backgroundEmptyAccentSecondaryActive: PRIMITIVE_COLORS.blueGlow25,
  backgroundEmptyNeutralActive: PRIMITIVE_COLORS.whiteAlpha16,
  backgroundEmptySuccessActive: PRIMITIVE_COLORS.greenGlow25,
  backgroundEmptyWarningActive: PRIMITIVE_COLORS.amberGlow15,
  backgroundEmptyRiskActive: PRIMITIVE_COLORS.amberGlow15,
  backgroundEmptyDangerActive: PRIMITIVE_COLORS.redGlow25,
  backgroundEmptyTextActive: PRIMITIVE_COLORS.whiteAlpha16,

  // Text colors for non-filled buttons
  textColorPrimary: SEMANTIC_COLORS.primary100,
  textColorAccent: SEMANTIC_COLORS.accent100,
  textColorAccentSecondary: SEMANTIC_COLORS.accentSecondary100,
  textColorNeutral: SEMANTIC_COLORS.neutral60,
  textColorSuccess: SEMANTIC_COLORS.success80,
  textColorWarning: SEMANTIC_COLORS.warning40,
  textColorRisk: SEMANTIC_COLORS.risk50,
  textColorDanger: SEMANTIC_COLORS.danger80,
  textColorText: SEMANTIC_COLORS.shade30,
  textColorDisabled: SEMANTIC_COLORS.shade80,

  // Text colors for filled buttons
  textColorFilledPrimary: SEMANTIC_COLORS.plainDark,
  textColorFilledAccent: SEMANTIC_COLORS.plainLight,
  textColorFilledAccentSecondary: SEMANTIC_COLORS.plainDark,
  textColorFilledNeutral: SEMANTIC_COLORS.plainLight,
  textColorFilledSuccess: SEMANTIC_COLORS.plainDark,
  textColorFilledWarning: SEMANTIC_COLORS.plainDark,
  textColorFilledRisk: SEMANTIC_COLORS.plainDark,
  textColorFilledDanger: SEMANTIC_COLORS.plainLight,
  textColorFilledText: SEMANTIC_COLORS.plainLight,
  textColorFilledDisabled: SEMANTIC_COLORS.shade80,
};

/**
 * Light mode button colors (same as dark for hacker theme)
 */
const light_button_colors: _EuiThemeButtonColors = {
  ...dark_button_colors,
};

/**
 * Complete button configuration
 */
export const buttons: _EuiThemeButton = {
  LIGHT: light_button_colors,
  DARK: dark_button_colors,
};

