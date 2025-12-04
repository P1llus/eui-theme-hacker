/**
 * EUI Theme Hacker - 90s Hacker Aesthetic
 *
 * A retro cyberpunk theme for Elastic UI featuring:
 * - Matrix-green neon colors
 * - Monospace typography (Fira Code)
 * - Terminal/CRT-inspired effects
 * - Dark mode optimized
 *
 * ## Basic Usage
 *
 * The theme works out of the box - just pass it to EuiProvider:
 *
 * @example
 * ```tsx
 * import { EuiProvider } from '@elastic/eui';
 * import { EuiThemeHacker } from '@p1llus/eui-theme-hacker';
 *
 * function App() {
 *   return (
 *     <EuiProvider theme={EuiThemeHacker} colorMode="dark">
 *       <YourApp />
 *     </EuiProvider>
 *   );
 * }
 * ```
 *
 * ## Global Styles (Recommended)
 *
 * Add global styles for the complete experience. Choose your level:
 *
 * ### Full Experience (recommended)
 * Includes: font imports, custom scrollbar, text selection, gradient background, glow effects
 *
 * @example
 * ```tsx
 * import { EuiProvider } from '@elastic/eui';
 * import { Global } from '@emotion/react';
 * import { EuiThemeHacker, globalHackerStyles } from '@p1llus/eui-theme-hacker';
 *
 * <EuiProvider theme={EuiThemeHacker} colorMode="dark">
 *   <Global styles={globalHackerStyles} />
 *   <App />
 * </EuiProvider>
 * ```
 *
 * ### Minimal (just essentials)
 * Includes: font imports, basic body styling, essential component fixes
 *
 * @example
 * ```tsx
 * import { EuiThemeHacker, globalHackerStylesMinimal } from '@p1llus/eui-theme-hacker';
 *
 * <EuiProvider theme={EuiThemeHacker} colorMode="dark">
 *   <Global styles={globalHackerStylesMinimal} />
 *   <App />
 * </EuiProvider>
 * ```
 *
 * ### Custom Combination
 * Mix and match individual style modules:
 *
 * @example
 * ```tsx
 * import { css } from '@emotion/react';
 * import {
 *   fontImports,
 *   hackerBodyBase,
 *   euiComponentEssentials,
 *   euiGlowEffects,  // optional
 * } from '@p1llus/eui-theme-hacker';
 *
 * const myCustomStyles = css`
 *   ${fontImports}
 *   ${hackerBodyBase}
 *   ${euiComponentEssentials}
 *   // Skip glow effects for a cleaner look
 * `;
 * ```
 */

import { buildTheme, type EuiThemeShape } from "@elastic/eui-theme-common";

// Import all theme variables
import { animation } from "./variables/_animation";
import { borders } from "./variables/_borders";
import { breakpoint } from "./variables/_breakpoint";
import { components } from "./variables/_components";
import { focus } from "./variables/_focus";
import { levels } from "./variables/_levels";
import { shadow } from "./variables/_shadows";
import { base, size } from "./variables/_size";
import { typography } from "./variables/_typography";
import { colors } from "./variables/colors";

// Import vis colors for export
import { colorVisDark } from "./variables/colors/_colors_vis_dark";
import { colorVisLight } from "./variables/colors/_colors_vis_light";

// Re-export colors for external use
export { PRIMITIVE_COLORS, SEMANTIC_COLORS } from "./variables/colors";
export { colorVisLight as colorVis, colorVisDark, colorVisLight };

// Export global styles and effects
export {
  // Keyframe animations
  blinkAnimation,
  crtCurvature,
  euiComponentEssentials, // Optional: button/card/form glows
  // Legacy (deprecated)
  euiComponentOverrides, // Required: panel borders, tabs, table headers
  euiGlowEffects,
  // Individual style modules (for custom combinations)
  fontImports,
  glitchAnimation,
  // Main global style bundles
  globalHackerStyles, // Full experience: fonts, scrollbar, glows, gradient
  globalHackerStylesMinimal,
  glowBorder,
  glowText, // Minimal: just fonts and essential overrides
  // Font URL constant (for reference - add to HTML <link> tag)
  GOOGLE_FONTS_URL,
  hackerBodyBase,
  hackerGradientBackground,
  hackerScrollbar,
  hackerSelection,
  pulseAnimation,
  pulsingIndicator, // Use euiComponentEssentials + euiGlowEffects instead
  // CSS-in-JS utilities for custom components
  scanlineEffect,
  terminalCard,
  typeAnimation,
  typingCursor,
} from "./global/effects";

/**
 * Theme key identifier
 */
export const EUI_THEME_HACKER_KEY = "EUI_THEME_HACKER";

/**
 * Theme shape definition
 *
 * This defines all the theme tokens for the 90s hacker aesthetic.
 */
export const euiThemeHacker: EuiThemeShape = {
  colors,
  base,
  size,
  border: borders,
  font: typography,
  animation,
  breakpoint,
  levels,
  shadows: shadow,
  focus,
  components,
  flags: {
    shadowVariant: "refresh",
  },
};

/**
 * Complete 90s Hacker theme built using EUI's theme system
 *
 * Use this with EuiProvider's theme prop for full theme integration:
 *
 * @example
 * ```tsx
 * import { EuiProvider } from '@elastic/eui';
 * import { EuiThemeHacker } from '@p1llus/eui-theme-hacker';
 *
 * <EuiProvider theme={EuiThemeHacker} colorMode="dark">
 *   <App />
 * </EuiProvider>
 * ```
 */
export const EuiThemeHacker = buildTheme(euiThemeHacker, EUI_THEME_HACKER_KEY);

/**
 * Legacy alias for the theme (matching convention for modify approach)
 * @deprecated Use EuiThemeHacker instead
 */
export const EUI_THEME_HACKER = EuiThemeHacker;

/**
 * Legacy theme overrides for use with EuiProvider's modify prop
 *
 * Use this if you want to layer hacker theme customizations on top of
 * the default Borealis theme instead of replacing it entirely.
 *
 * @deprecated Prefer using EuiThemeHacker with the theme prop instead
 *
 * @example
 * ```tsx
 * <EuiProvider colorMode="dark" modify={hackerThemeOverrides}>
 *   <App />
 * </EuiProvider>
 * ```
 */
export const hackerThemeOverrides = {
  colors: {
    DARK: {
      // Core brand colors
      primary: "#00ff41",
      accent: "#bd00ff",
      accentSecondary: "#00d4ff",
      success: "#00cc33",
      warning: "#ffb000",
      danger: "#ff3333",

      // Text colors
      text: "#c9d1d9",
      title: "#00ff41",
      subduedText: "#8b949e",
      link: "#00ff41",

      // Shade colors
      emptyShade: "#0a0a0f",
      lightestShade: "#0d1117",
      lightShade: "#161b22",
      mediumShade: "#30363d",
      darkShade: "#6e7681",
      darkestShade: "#c9d1d9",
      fullShade: "#e6edf3",

      // Special colors
      body: "#0a0a0f",
      highlight: "rgba(0, 255, 65, 0.25)",
      disabled: "#161b22",
      disabledText: "#484f58",
      shadow: "#000000",
    },
    LIGHT: {
      // Same as dark - this is a dark-optimized theme
      primary: "#00ff41",
      accent: "#bd00ff",
      accentSecondary: "#00d4ff",
      success: "#00cc33",
      warning: "#ffb000",
      danger: "#ff3333",
      text: "#c9d1d9",
      title: "#00ff41",
      subduedText: "#8b949e",
      link: "#00ff41",
      emptyShade: "#0a0a0f",
      lightestShade: "#0d1117",
      lightShade: "#161b22",
      mediumShade: "#30363d",
      darkShade: "#6e7681",
      darkestShade: "#c9d1d9",
      fullShade: "#e6edf3",
      body: "#0a0a0f",
      highlight: "rgba(0, 255, 65, 0.25)",
      disabled: "#161b22",
      disabledText: "#484f58",
    },
  },
  font: {
    family: typography.family,
    familyCode: typography.familyCode,
    familySerif: typography.familySerif,
  },
  border: {
    color: borders.color,
    radius: borders.radius,
  },
  focus: {
    color: focus.color,
  },
};

// Default export
export default EuiThemeHacker;
