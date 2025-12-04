/**
 * 90s Hacker Theme - Form Colors
 * 
 * Form-specific color tokens for inputs, controls, and form elements.
 * Follows EUI's form color structure.
 */

import type { _EuiThemeForm, _EuiThemeFormColors } from '@elastic/eui-theme-common';
import { SEMANTIC_COLORS } from './colors/_semantic_colors';

/**
 * Form dimensions
 */
export const formDimensions: _EuiThemeForm = {
  maxWidth: '400px',
};

/**
 * Form colors for dark mode
 */
const dark_form_colors: _EuiThemeFormColors = {
  // Backgrounds
  background: SEMANTIC_COLORS.shade145,
  backgroundDisabled: SEMANTIC_COLORS.shade130,
  backgroundReadOnly: SEMANTIC_COLORS.shade135,
  backgroundFocused: SEMANTIC_COLORS.shade145,
  backgroundAutofilled: SEMANTIC_COLORS.primary140,
  backgroundDropping: SEMANTIC_COLORS.primary130,
  prependBackground: SEMANTIC_COLORS.shade125,

  // Borders
  border: SEMANTIC_COLORS.shade100,
  borderDisabled: SEMANTIC_COLORS.shade100,
  borderFocused: SEMANTIC_COLORS.primary100,
  borderInvalid: SEMANTIC_COLORS.danger80,
  borderHovered: SEMANTIC_COLORS.shade90,
  borderInvalidHovered: SEMANTIC_COLORS.danger70,
  borderAutofilled: SEMANTIC_COLORS.primary60,
  borderAutofilledHovered: SEMANTIC_COLORS.primary80,

  // Clear button
  clearButtonBackground: SEMANTIC_COLORS.shade110,

  // Control elements (checkboxes, radios, switches)
  controlBorder: SEMANTIC_COLORS.shade80,
  controlBorderSelected: SEMANTIC_COLORS.primary100,
  controlBorderDisabled: SEMANTIC_COLORS.shade100,
  controlBackgroundUnselected: SEMANTIC_COLORS.shade145,
  controlBackgroundDisabled: SEMANTIC_COLORS.shade130,

  // Text colors
  colorHasPlaceholder: SEMANTIC_COLORS.shade55,
  colorDisabled: SEMANTIC_COLORS.shade80,
  iconDisabled: SEMANTIC_COLORS.shade80,
};

/**
 * Form colors for light mode (same as dark for hacker theme)
 */
const light_form_colors: _EuiThemeFormColors = {
  ...dark_form_colors,
};

/**
 * Complete form configuration
 */
export const forms = {
  ...formDimensions,
  LIGHT: light_form_colors,
  DARK: dark_form_colors,
};

