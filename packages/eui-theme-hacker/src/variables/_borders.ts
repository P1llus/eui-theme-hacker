/**
 * 90s Hacker Theme - Borders
 * 
 * Sharp, defined borders with subtle glow effects.
 * Minimal border radius for that retro terminal look.
 */

import { PRIMITIVE_COLORS } from './colors/_primitive_colors';

export const borders = {
  // Default border color
  color: PRIMITIVE_COLORS.gray10,
  
  // Border widths
  width: {
    thin: '1px',
    thick: '2px',
  },
  
  // Border radius - kept minimal for that retro feel
  radius: {
    medium: '4px',
    small: '2px',
  },
  
  // Pre-composed border strings
  thin: `1px solid ${PRIMITIVE_COLORS.gray10}`,
  thick: `2px solid ${PRIMITIVE_COLORS.gray10}`,
  editable: `2px dotted ${PRIMITIVE_COLORS.green60}`,
};

