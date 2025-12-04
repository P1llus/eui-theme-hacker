/**
 * Theme-aware Style Hooks
 *
 * These hooks provide CSS-in-JS utilities that respect the demo settings panel.
 * Use these instead of the raw utilities when you want styles to be toggleable.
 */

import {
  crtCurvature,
  glowBorder,
  glowText,
  pulsingIndicator,
  scanlineEffect,
  typingCursor,
} from "@p1llus/eui-theme-hacker";
import { css, type SerializedStyles } from "@emotion/react";
import { useDemoSettings } from "./useDemoSettings";

const emptyStyle = css``;

/**
 * Returns glowText() styles if glow effects are enabled, otherwise empty styles.
 *
 * @example
 * const glowStyle = useGlowText(PRIMITIVE_COLORS.green100);
 * <span css={glowStyle}>Glowing text</span>
 */
export function useGlowText(color: string): SerializedStyles {
  const { showGlowEffects, globalStylesMode } = useDemoSettings();
  const isEnabled = showGlowEffects && globalStylesMode !== "none";
  return isEnabled ? glowText(color) : emptyStyle;
}

/**
 * Returns glowBorder() styles if glow effects are enabled, otherwise empty styles.
 */
export function useGlowBorder(color: string): SerializedStyles {
  const { showGlowEffects, globalStylesMode } = useDemoSettings();
  const isEnabled = showGlowEffects && globalStylesMode !== "none";
  return isEnabled ? glowBorder(color) : emptyStyle;
}

/**
 * Returns typingCursor styles if glow effects are enabled, otherwise empty styles.
 */
export function useTypingCursor(): SerializedStyles {
  const { showGlowEffects, globalStylesMode } = useDemoSettings();
  const isEnabled = showGlowEffects && globalStylesMode !== "none";
  return isEnabled ? typingCursor : emptyStyle;
}

/**
 * Returns pulsingIndicator styles if glow effects are enabled, otherwise empty styles.
 */
export function usePulsingIndicator(): SerializedStyles {
  const { showGlowEffects, globalStylesMode } = useDemoSettings();
  const isEnabled = showGlowEffects && globalStylesMode !== "none";
  return isEnabled ? pulsingIndicator : emptyStyle;
}

/**
 * Returns scanline effect styles if scanlines are enabled.
 */
export function useScanlines(): SerializedStyles {
  const { showScanlines } = useDemoSettings();
  return showScanlines ? scanlineEffect : emptyStyle;
}

/**
 * Returns CRT curvature styles if curvature is enabled.
 */
export function useCrtCurvature(): SerializedStyles {
  const { showCrtCurvature } = useDemoSettings();
  return showCrtCurvature ? crtCurvature : emptyStyle;
}

/**
 * Hook to get all relevant style settings at once.
 * Useful when you need to conditionally apply multiple styles.
 */
export function useThemeEffects() {
  const settings = useDemoSettings();

  return {
    isGlowEnabled:
      settings.showGlowEffects && settings.globalStylesMode !== "none",
    isGradientEnabled:
      settings.showGradientBackground && settings.globalStylesMode !== "none",
    isScanlineEnabled: settings.showScanlines,
    isCurvatureEnabled: settings.showCrtCurvature,
    globalStylesMode: settings.globalStylesMode,
  };
}
