/**
 * Demo Settings Types
 *
 * Type definitions for demo settings context.
 */

import { createContext } from "react";

export type GlobalStylesMode = "full" | "minimal" | "none";
export type ColorMode = "dark" | "light";

export interface DemoSettings {
  // Global styles
  globalStylesMode: GlobalStylesMode;

  // Individual effect toggles
  showGlowEffects: boolean;
  showGradientBackground: boolean;
  showCustomScrollbar: boolean;
  showSelectionStyles: boolean;

  // CRT effects
  showScanlines: boolean;
  showCrtCurvature: boolean;

  // Panel state
  settingsPanelOpen: boolean;
}

export interface DemoSettingsContextType extends DemoSettings {
  setGlobalStylesMode: (mode: GlobalStylesMode) => void;
  setShowGlowEffects: (show: boolean) => void;
  setShowGradientBackground: (show: boolean) => void;
  setShowCustomScrollbar: (show: boolean) => void;
  setShowSelectionStyles: (show: boolean) => void;
  setShowScanlines: (show: boolean) => void;
  setShowCrtCurvature: (show: boolean) => void;
  toggleSettingsPanel: () => void;
  setSettingsPanelOpen: (open: boolean) => void;
  resetToDefaults: () => void;
}

export const defaultSettings: DemoSettings = {
  globalStylesMode: "full",
  showGlowEffects: true,
  showGradientBackground: true,
  showCustomScrollbar: true,
  showSelectionStyles: true,
  showScanlines: false,
  showCrtCurvature: false,
  settingsPanelOpen: false,
};

export const DemoSettingsContext =
  createContext<DemoSettingsContextType | null>(null);
