/**
 * 90s Hacker Theme - Severity Colors
 * 
 * Colors for severity/status indicators.
 * Uses the neon hacker palette for status representation.
 */

import type { _EuiThemeSeverityColors } from '@elastic/eui-theme-common';
import { PRIMITIVE_COLORS } from './_primitive_colors';

export const severityColors: _EuiThemeSeverityColors = {
  unknown: PRIMITIVE_COLORS.gray40,
  success: PRIMITIVE_COLORS.green80,
  neutral: PRIMITIVE_COLORS.gray50,
  warning: PRIMITIVE_COLORS.amber100,
  risk: PRIMITIVE_COLORS.amber80,
  danger: PRIMITIVE_COLORS.red80,
};

