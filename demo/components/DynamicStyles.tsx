/** @jsxImportSource @emotion/react */
/**
 * Dynamic Styles
 *
 * Applies global styles dynamically based on demo settings.
 */

import {
  crtCurvature,
  euiComponentEssentials,
  euiGlowEffects,
  hackerBodyBase,
  hackerGradientBackground,
  hackerScrollbar,
  hackerSelection,
  PRIMITIVE_COLORS,
  scanlineEffect,
} from "@p1llus/eui-theme-hacker";
import { css, Global } from "@emotion/react";
import { useDemoSettings } from "../hooks/useDemoSettings";

export function DynamicStyles() {
  const {
    globalStylesMode,
    showGlowEffects,
    showGradientBackground,
    showCustomScrollbar,
    showSelectionStyles,
    showScanlines,
    showCrtCurvature,
  } = useDemoSettings();

  // Build dynamic styles based on settings
  // Note: Fonts are loaded via injectHackerFonts() in main.tsx
  const dynamicStyles = css`
    /* Base body styles (if not 'none' mode) */
    ${globalStylesMode !== "none" ? hackerBodyBase : ""}

    /* Component essentials (if not 'none' mode) */
    ${globalStylesMode !== "none" ? euiComponentEssentials : ""}
    
    /* Optional: Gradient background */
    ${showGradientBackground && globalStylesMode !== "none"
      ? hackerGradientBackground
      : ""}
    
    /* Optional: Custom scrollbar */
    ${showCustomScrollbar ? hackerScrollbar : ""}
    
    /* Optional: Selection styles */
    ${showSelectionStyles ? hackerSelection : ""}
    
    /* Optional: Glow effects (only in 'full' mode or when explicitly enabled) */
    ${showGlowEffects && globalStylesMode === "full" ? euiGlowEffects : ""}
    
    /* CRT Effects */
    ${showScanlines
      ? css`
          body {
            ${scanlineEffect}
          }
        `
      : ""}
    
    ${showCrtCurvature
      ? css`
          body {
            ${crtCurvature}
          }
        `
      : ""}
    
    /* Ensure transparent page when gradient is off */
    ${!showGradientBackground
      ? css`
          body {
            background: ${PRIMITIVE_COLORS.bgDeep} !important;
          }
        `
      : ""}
  `;

  return <Global styles={dynamicStyles} />;
}
