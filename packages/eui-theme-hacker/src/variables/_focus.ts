/**
 * 90s Hacker Theme - Focus States
 * 
 * High-visibility focus states with neon glow.
 * Ensures accessibility while maintaining the aesthetic.
 */

import { PRIMITIVE_COLORS } from './colors/_primitive_colors';

export const focus = {
  // Focus ring color - bright green for visibility
  color: PRIMITIVE_COLORS.green100,
  
  // Focus ring background color (semi-transparent)
  backgroundColor: PRIMITIVE_COLORS.greenGlow15,
  
  // Focus ring transparency for background variant
  transparency: 0.1,
  
  // Focus ring width
  width: '2px',
  
  // Complete focus outline style
  // Using a box-shadow approach for better visual effect
  outline: {
    offset: '2px',
  },
};

