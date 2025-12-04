/**
 * 90s Hacker Theme - Primitive Colors
 * 
 * Base color values without semantic meaning.
 * These form the foundation of all theme colors.
 */

export const PRIMITIVE_COLORS = {
  // Pure values
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',

  // Matrix/Hacker Greens - The signature color
  green5: '#001a00',
  green10: '#002200',
  green20: '#003d00',
  green30: '#005500',
  green40: '#006600',
  green50: '#007711',
  green60: '#009922',
  green70: '#00aa33',
  green80: '#00cc33',
  green90: '#00dd3a',
  green100: '#00ff41',
  green110: '#33ff66',
  green120: '#66ff88',

  // Backgrounds - Deep, dark, mysterious
  bgDeep: '#0a0a0f',
  bgDark: '#0d1117',
  bgCard: '#161b22',
  bgElevated: '#1c2128',
  bgHover: '#21262d',

  // Reds - Danger, alerts, red team
  red20: '#4d0000',
  red40: '#801a1a',
  red60: '#cc2222',
  red80: '#ff3333',
  red100: '#ff5555',
  red120: '#ff8888',

  // Blues - Info, links, blue team
  blue20: '#002233',
  blue40: '#004466',
  blue60: '#0077aa',
  blue80: '#0099cc',
  blue100: '#00d4ff',
  blue120: '#66e5ff',

  // Amber/Yellow - Warnings
  amber20: '#332200',
  amber40: '#664400',
  amber60: '#996600',
  amber80: '#cc8800',
  amber100: '#ffb000',
  amber120: '#ffc844',

  // Purple - Accent, special states
  purple20: '#1a0022',
  purple40: '#440055',
  purple60: '#770088',
  purple80: '#aa00cc',
  purple100: '#bd00ff',
  purple120: '#d455ff',

  // Neutrals - Text and UI elements
  gray5: '#21262d',
  gray10: '#30363d',
  gray20: '#484f58',
  gray30: '#6e7681',
  gray40: '#8b949e',
  gray50: '#b1bac4',
  gray60: '#c9d1d9',
  gray70: '#e6edf3',
  gray80: '#f0f6fc',

  // Glow effects (semi-transparent)
  greenGlow10: 'rgba(0, 255, 65, 0.10)',
  greenGlow15: 'rgba(0, 255, 65, 0.15)',
  greenGlow25: 'rgba(0, 255, 65, 0.25)',
  greenGlow40: 'rgba(0, 255, 65, 0.40)',
  
  redGlow15: 'rgba(255, 51, 51, 0.15)',
  redGlow25: 'rgba(255, 51, 51, 0.25)',
  
  blueGlow15: 'rgba(0, 212, 255, 0.15)',
  blueGlow25: 'rgba(0, 212, 255, 0.25)',
  
  amberGlow15: 'rgba(255, 176, 0, 0.15)',
  
  purpleGlow15: 'rgba(189, 0, 255, 0.15)',
  
  // Overlay
  blackAlpha50: 'rgba(0, 0, 0, 0.50)',
  blackAlpha70: 'rgba(0, 0, 0, 0.70)',
  whiteAlpha8: 'rgba(255, 255, 255, 0.08)',
  whiteAlpha16: 'rgba(255, 255, 255, 0.16)',
} as const;

