/**
 * 90s Hacker Theme - Dark Mode Visualization Colors
 * 
 * Colors for charts, graphs, and data visualization.
 * Uses a neon/cyberpunk palette that maintains the hacker aesthetic.
 */

import type { _EuiThemeVisColors } from '@elastic/eui-theme-common';
import { PRIMITIVE_COLORS } from './_primitive_colors';

/**
 * Dark mode visualization colors
 * 
 * The palette is designed to be visually distinct while
 * maintaining the neon/terminal aesthetic.
 */
export const colorVisDark: _EuiThemeVisColors = {
  // Primary categorical colors (0-9)
  euiColorVis0: PRIMITIVE_COLORS.green100,   // Matrix green
  euiColorVis1: PRIMITIVE_COLORS.blue100,    // Cyan
  euiColorVis2: PRIMITIVE_COLORS.purple100,  // Magenta
  euiColorVis3: PRIMITIVE_COLORS.amber100,   // Amber
  euiColorVis4: PRIMITIVE_COLORS.red80,      // Red
  euiColorVis5: '#00ff88',                   // Teal green
  euiColorVis6: '#ff6b6b',                   // Coral
  euiColorVis7: '#feca57',                   // Gold
  euiColorVis8: '#48dbfb',                   // Sky blue
  euiColorVis9: '#ff9ff3',                   // Pink

  // Behind text variants (deprecated but required)
  euiColorVisBehindText0: PRIMITIVE_COLORS.green60,
  euiColorVisBehindText1: PRIMITIVE_COLORS.blue60,
  euiColorVisBehindText2: PRIMITIVE_COLORS.purple60,
  euiColorVisBehindText3: PRIMITIVE_COLORS.amber60,
  euiColorVisBehindText4: PRIMITIVE_COLORS.red60,
  euiColorVisBehindText5: '#008844',
  euiColorVisBehindText6: '#993333',
  euiColorVisBehindText7: '#997722',
  euiColorVisBehindText8: '#226699',
  euiColorVisBehindText9: '#993377',

  // Text variants (for accessibility on backgrounds)
  euiColorVisText0: PRIMITIVE_COLORS.green100,
  euiColorVisText1: PRIMITIVE_COLORS.blue100,
  euiColorVisText2: PRIMITIVE_COLORS.purple100,
  euiColorVisText3: PRIMITIVE_COLORS.amber100,
  euiColorVisText4: PRIMITIVE_COLORS.red80,
  euiColorVisText5: '#00ff88',
  euiColorVisText6: '#ff6b6b',
  euiColorVisText7: '#feca57',
  euiColorVisText8: '#48dbfb',
  euiColorVisText9: '#ff9ff3',

  // Semantic status colors
  euiColorVisNeutral0: PRIMITIVE_COLORS.gray40,
  euiColorVisNeutral1: PRIMITIVE_COLORS.gray50,
  euiColorVisSuccess0: PRIMITIVE_COLORS.green80,
  euiColorVisSuccess1: PRIMITIVE_COLORS.green100,
  euiColorVisWarning0: PRIMITIVE_COLORS.amber80,
  euiColorVisWarning1: PRIMITIVE_COLORS.amber100,
  euiColorVisRisk0: PRIMITIVE_COLORS.amber60,
  euiColorVisRisk1: PRIMITIVE_COLORS.amber80,
  euiColorVisDanger0: PRIMITIVE_COLORS.red60,
  euiColorVisDanger1: PRIMITIVE_COLORS.red80,

  // Base color
  euiColorVisBase0: PRIMITIVE_COLORS.green100,

  // Gray scale
  euiColorVisGrey0: PRIMITIVE_COLORS.gray30,
  euiColorVisGrey1: PRIMITIVE_COLORS.gray40,
  euiColorVisGrey2: PRIMITIVE_COLORS.gray50,
  euiColorVisGrey3: PRIMITIVE_COLORS.gray60,

  // Warm colors
  euiColorVisWarm0: PRIMITIVE_COLORS.amber60,
  euiColorVisWarm1: PRIMITIVE_COLORS.amber80,
  euiColorVisWarm2: PRIMITIVE_COLORS.amber100,

  // Cool colors
  euiColorVisCool0: PRIMITIVE_COLORS.blue60,
  euiColorVisCool1: PRIMITIVE_COLORS.blue80,
  euiColorVisCool2: PRIMITIVE_COLORS.blue100,

  // Complementary
  euiColorVisComplementary0: PRIMITIVE_COLORS.green100,
  euiColorVisComplementary1: PRIMITIVE_COLORS.purple100,
};

