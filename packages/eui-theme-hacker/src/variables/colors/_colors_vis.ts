/**
 * 90s Hacker Theme - Visualization Colors
 * 
 * Colors for charts, graphs, and data visualization.
 * Designed to be visually distinct while maintaining the hacker aesthetic.
 */

import { PRIMITIVE_COLORS } from './_primitive_colors';

/**
 * Categorical colors for data visualization
 * These should be distinguishable from each other
 */
export const colorVis = {
  // Primary visualization palette
  euiColorVis0: PRIMITIVE_COLORS.green100,  // Matrix green
  euiColorVis1: PRIMITIVE_COLORS.blue100,   // Cyan
  euiColorVis2: PRIMITIVE_COLORS.purple100, // Magenta
  euiColorVis3: PRIMITIVE_COLORS.amber100,  // Amber
  euiColorVis4: PRIMITIVE_COLORS.red80,     // Red
  euiColorVis5: PRIMITIVE_COLORS.green80,   // Muted green
  euiColorVis6: PRIMITIVE_COLORS.blue80,    // Muted cyan
  euiColorVis7: PRIMITIVE_COLORS.purple80,  // Muted magenta
  euiColorVis8: PRIMITIVE_COLORS.amber80,   // Muted amber
  euiColorVis9: PRIMITIVE_COLORS.gray50,    // Gray
  
  // Extended palette for more data series
  euiColorVis0Shade: PRIMITIVE_COLORS.green60,
  euiColorVis1Shade: PRIMITIVE_COLORS.blue60,
  euiColorVis2Shade: PRIMITIVE_COLORS.purple60,
  euiColorVis3Shade: PRIMITIVE_COLORS.amber60,
  euiColorVis4Shade: PRIMITIVE_COLORS.red60,
};

/**
 * Severity colors for status indicators
 */
export const severityColors = {
  euiColorSeverityCritical: PRIMITIVE_COLORS.red80,
  euiColorSeverityHigh: PRIMITIVE_COLORS.red60,
  euiColorSeverityMedium: PRIMITIVE_COLORS.amber100,
  euiColorSeverityLow: PRIMITIVE_COLORS.amber80,
  euiColorSeverityInfo: PRIMITIVE_COLORS.blue100,
  euiColorSeveritySuccess: PRIMITIVE_COLORS.green80,
  euiColorSeverityNeutral: PRIMITIVE_COLORS.gray40,
};

