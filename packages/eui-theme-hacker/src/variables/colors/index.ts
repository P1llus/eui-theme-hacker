/**
 * 90s Hacker Theme - Colors Index
 * 
 * Exports the complete color configuration for the theme.
 */

import type { _EuiThemeColors } from '@elastic/eui-theme-common';

import { SEMANTIC_COLORS } from './_semantic_colors';
import { light_colors } from './_colors_light';
import { dark_colors } from './_colors_dark';
import { colorVisLight } from './_colors_vis_light';
import { colorVisDark } from './_colors_vis_dark';
import { severityColors } from './_colors_severity';

// Re-export for external use
export { PRIMITIVE_COLORS } from './_primitive_colors';
export { SEMANTIC_COLORS } from './_semantic_colors';
export { colorVisDark } from './_colors_vis_dark';
export { colorVisLight } from './_colors_vis_light';
export { severityColors } from './_colors_severity';
export { dark_colors, dark_background_colors, dark_border_colors } from './_colors_dark';
export { light_colors, border_colors } from './_colors_light';

/**
 * Complete color configuration
 * 
 * Follows the EUI theme color structure with LIGHT and DARK modes.
 * Note: This theme is designed for dark mode - light mode uses same values.
 */
export const colors: _EuiThemeColors = {
  // Global constant colors (same in both modes)
  ghost: SEMANTIC_COLORS.plainLight,
  ink: SEMANTIC_COLORS.plainDark,
  plainLight: SEMANTIC_COLORS.plainLight,
  plainDark: SEMANTIC_COLORS.plainDark,

  // Light mode
  LIGHT: {
    ...light_colors,
    vis: colorVisLight,
    severity: severityColors,
  },
  
  // Dark mode (primary mode for this theme)
  DARK: {
    ...dark_colors,
    vis: colorVisDark,
    severity: severityColors,
  },
};
