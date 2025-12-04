/**
 * 90s Hacker Theme - Light Mode Colors
 * 
 * NOTE: The hacker theme is designed primarily for dark mode.
 * Light mode uses the same values as dark mode to maintain
 * the cyberpunk aesthetic. Users should use colorMode="dark".
 */

import {
  type _EuiThemeColorsMode,
  type _EuiThemeBorderColors,
} from '@elastic/eui-theme-common';

import { dark_colors, dark_border_colors } from './_colors_dark';

/**
 * Light mode colors - same as dark mode for this theme
 */
export const light_colors: _EuiThemeColorsMode = {
  ...dark_colors,
};

/**
 * Light mode border colors - exported for component tokens
 */
export const border_colors: _EuiThemeBorderColors = {
  ...dark_border_colors,
};

