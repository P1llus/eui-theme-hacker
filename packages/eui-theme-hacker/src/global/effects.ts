/**
 * 90s Hacker Theme - Global Effects
 * 
 * Visual effects and enhancements for the hacker aesthetic.
 * These complement the theme tokens with CSS that can't be achieved
 * through tokens alone.
 */

import { css, keyframes } from '@emotion/react';
import { PRIMITIVE_COLORS } from '../variables/colors/_primitive_colors';

/**
 * Google Fonts URL for the theme
 * 
 * Add this to your HTML <head> to load the required fonts:
 * <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&display=swap" rel="stylesheet">
 */
export const GOOGLE_FONTS_URL = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&display=swap';

/**
 * Font imports placeholder
 * Note: Fonts should be loaded via a <link> tag in your HTML to avoid CSS ordering issues.
 */
export const fontImports = css`
  /* Fonts should be loaded via <link> tag in HTML */
`;

/**
 * Scanline overlay effect - classic CRT monitor look
 * Apply to body for full-screen effect
 */
export const scanlineEffect = css`
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.15) 2px,
      rgba(0, 0, 0, 0.15) 4px
    );
    z-index: 9999;
  }
`;

/**
 * CRT screen curvature effect (subtle vignette)
 */
export const crtCurvature = css`
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: radial-gradient(
      ellipse at center,
      transparent 0%,
      transparent 70%,
      rgba(0, 0, 0, 0.3) 100%
    );
    z-index: 9998;
  }
`;

/**
 * Keyframe animations
 */
export const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const pulseAnimation = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.95); }
`;

export const glitchAnimation = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

export const typeAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

/**
 * Glowing text effect
 */
export const glowText = (color: string = PRIMITIVE_COLORS.green100) => css`
  color: ${color};
  text-shadow: 
    0 0 5px ${color},
    0 0 10px ${color},
    0 0 20px ${color};
`;

/**
 * Glowing border effect
 */
export const glowBorder = (color: string = PRIMITIVE_COLORS.green100) => css`
  border-color: ${color};
  box-shadow: 
    0 0 5px ${color},
    0 0 10px ${color}40,
    inset 0 0 5px ${color}20;
`;

/**
 * Typing cursor effect
 */
export const typingCursor = css`
  &::after {
    content: '▋';
    animation: ${blinkAnimation} 1s step-end infinite;
  }
`;

/**
 * Pulsing indicator
 */
export const pulsingIndicator = css`
  animation: ${pulseAnimation} 2s ease-in-out infinite;
`;

/**
 * Custom scrollbar styling
 */
export const hackerScrollbar = css`
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${PRIMITIVE_COLORS.bgDark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${PRIMITIVE_COLORS.green60};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${PRIMITIVE_COLORS.green80};
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${PRIMITIVE_COLORS.green60} ${PRIMITIVE_COLORS.bgDark};
`;

/**
 * Text selection styling
 */
export const hackerSelection = css`
  ::selection {
    background: ${PRIMITIVE_COLORS.green100};
    color: ${PRIMITIVE_COLORS.black};
  }

  ::-moz-selection {
    background: ${PRIMITIVE_COLORS.green100};
    color: ${PRIMITIVE_COLORS.black};
  }
`;

/**
 * Terminal-style card/panel
 */
export const terminalCard = css`
  background: ${PRIMITIVE_COLORS.black};
  border: 1px solid ${PRIMITIVE_COLORS.green60};
  border-radius: 4px;
  box-shadow: 
    0 0 1px ${PRIMITIVE_COLORS.green100},
    inset 0 0 30px ${PRIMITIVE_COLORS.greenGlow10};
  font-family: 'Fira Code', monospace;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 24px;
    background: linear-gradient(
      90deg,
      ${PRIMITIVE_COLORS.green60} 0%,
      transparent 30%,
      transparent 70%,
      ${PRIMITIVE_COLORS.green60} 100%
    );
    border-bottom: 1px solid ${PRIMITIVE_COLORS.green60};
    border-radius: 4px 4px 0 0;
  }
`;

/**
 * Essential component styling that can't be done via tokens
 * 
 * These styles cover gaps in EUI's token system. Most styling is handled
 * by theme tokens - this only includes what tokens can't express.
 */
export const euiComponentEssentials = css`
  /* Panel border colors - no token exists for these */
  .euiPanel--primary {
    border-color: ${PRIMITIVE_COLORS.green60};
  }
  
  .euiPanel--success {
    border-color: ${PRIMITIVE_COLORS.green60};
  }
  
  .euiPanel--warning {
    border-color: ${PRIMITIVE_COLORS.amber60};
  }
  
  .euiPanel--danger {
    border-color: ${PRIMITIVE_COLORS.red60};
  }

  /* Table header styling - no token for header cell text color */
  .euiTableHeaderCell {
    color: ${PRIMITIVE_COLORS.green100};
    border-bottom-color: ${PRIMITIVE_COLORS.green40};
  }

  /* Tab selected indicator - no token exists */
  .euiTab-isSelected {
    box-shadow: inset 0 -2px 0 ${PRIMITIVE_COLORS.green100};
  }

  /* Ensure page template doesn't override body gradient */
  .euiPageTemplate {
    background-color: transparent;
  }
`;

/**
 * Optional glow effects for the cyberpunk aesthetic
 * 
 * These add neon glow effects on hover/focus that enhance the 90s hacker look.
 * Can be disabled if you prefer a cleaner appearance.
 */
export const euiGlowEffects = css`
  /* Button glow on hover */
  .euiButton--primary.euiButton--fill:hover:not(:disabled),
  .euiButton--primary.euiButton--fill:focus:not(:disabled) {
    box-shadow: 0 0 20px ${PRIMITIVE_COLORS.greenGlow40};
  }
  
  .euiButton--danger.euiButton--fill:hover:not(:disabled) {
    box-shadow: 0 0 20px ${PRIMITIVE_COLORS.redGlow25};
  }

  .euiButton--success.euiButton--fill:hover:not(:disabled) {
    box-shadow: 0 0 20px ${PRIMITIVE_COLORS.greenGlow40};
  }

  .euiButton--accent.euiButton--fill:hover:not(:disabled) {
    box-shadow: 0 0 20px ${PRIMITIVE_COLORS.purpleGlow15};
  }

  .euiButton--accentSecondary.euiButton--fill:hover:not(:disabled) {
    box-shadow: 0 0 20px ${PRIMITIVE_COLORS.blueGlow25};
  }

  /* Form focus glow (beyond the token border) */
  .euiFieldText:focus,
  .euiFieldPassword:focus,
  .euiFieldNumber:focus,
  .euiFieldSearch:focus,
  .euiTextArea:focus,
  .euiSelect:focus {
    box-shadow: 0 0 0 1px ${PRIMITIVE_COLORS.green100}, 0 0 8px ${PRIMITIVE_COLORS.greenGlow25};
  }

  /* Card/Panel hover glow */
  .euiCard:hover,
  .euiCard:focus {
    box-shadow: 0 0 20px ${PRIMITIVE_COLORS.greenGlow15};
  }

  /* Header bottom glow */
  .euiHeader {
    border-bottom: 1px solid ${PRIMITIVE_COLORS.green40};
    box-shadow: 0 2px 10px ${PRIMITIVE_COLORS.greenGlow15};
  }
`;

/**
 * Combined component overrides (essentials + glow effects)
 * @deprecated Use euiComponentEssentials and euiGlowEffects separately for more control
 */
export const euiComponentOverrides = css`
  ${euiComponentEssentials}
  ${euiGlowEffects}
`;

/**
 * Base body styling - solid dark background
 * Use this if you don't want the gradient background
 */
export const hackerBodyBase = css`
  html, body, #root {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: ${PRIMITIVE_COLORS.bgDeep};
    color: ${PRIMITIVE_COLORS.gray60};
    font-family: 'Fira Code', 'JetBrains Mono', monospace;
    font-size: 14px;
    line-height: 1.6;
  }

  /* Override EUI body background */
  .euiBody {
    background: transparent !important;
  }
`;

/**
 * Optional gradient background - adds atmospheric depth
 * Includes subtle green and purple radial gradients
 */
export const hackerGradientBackground = css`
  body {
    background: 
      radial-gradient(ellipse at top, ${PRIMITIVE_COLORS.greenGlow10} 0%, transparent 50%),
      radial-gradient(ellipse at bottom right, ${PRIMITIVE_COLORS.purpleGlow15} 0%, transparent 50%),
      linear-gradient(180deg, ${PRIMITIVE_COLORS.bgDeep} 0%, #050508 100%);
    background-attachment: fixed;
  }
`;

/**
 * Minimal global styles - just what's needed for the theme to work
 * 
 * Includes:
 * - Font imports
 * - Body base styling
 * - Essential component overrides (tokens can't handle)
 * 
 * Does NOT include: glow effects, gradient background, CRT effects
 */
export const globalHackerStylesMinimal = css`
  ${fontImports}
  ${hackerBodyBase}
  ${euiComponentEssentials}
`;

/**
 * Complete global styles for the hacker theme
 * 
 * Includes everything for the full 90s hacker aesthetic:
 * - Font imports (Fira Code, Orbitron)
 * - Custom scrollbar
 * - Text selection styling
 * - Gradient background
 * - Essential component overrides
 * - Glow effects on buttons, cards, forms
 * 
 * For a minimal version without glow effects, use globalHackerStylesMinimal
 */
export const globalHackerStyles = css`
  ${fontImports}
  ${hackerScrollbar}
  ${hackerSelection}
  ${hackerBodyBase}
  ${hackerGradientBackground}
  ${euiComponentEssentials}
  ${euiGlowEffects}
`;
