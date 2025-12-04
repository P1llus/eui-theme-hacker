/**
 * Demo Settings Provider
 *
 * Provider component for demo settings context.
 */

import { useCallback, useState, type ReactNode } from "react";
import {
  DemoSettingsContext,
  defaultSettings,
  type DemoSettings,
  type DemoSettingsContextType,
} from "./types";

// Re-export types for convenience
export { DemoSettingsContext } from "./types";
export type {
  ColorMode,
  DemoSettingsContextType,
  GlobalStylesMode,
} from "./types";

export function DemoSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<DemoSettings>(defaultSettings);

  const updateSetting = useCallback(
    <K extends keyof DemoSettings>(key: K, value: DemoSettings[K]) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const value: DemoSettingsContextType = {
    ...settings,
    setGlobalStylesMode: (mode) => updateSetting("globalStylesMode", mode),
    setShowGlowEffects: (show) => updateSetting("showGlowEffects", show),
    setShowGradientBackground: (show) =>
      updateSetting("showGradientBackground", show),
    setShowCustomScrollbar: (show) =>
      updateSetting("showCustomScrollbar", show),
    setShowSelectionStyles: (show) =>
      updateSetting("showSelectionStyles", show),
    setShowScanlines: (show) => updateSetting("showScanlines", show),
    setShowCrtCurvature: (show) => updateSetting("showCrtCurvature", show),
    toggleSettingsPanel: () =>
      updateSetting("settingsPanelOpen", !settings.settingsPanelOpen),
    setSettingsPanelOpen: (open) => updateSetting("settingsPanelOpen", open),
    resetToDefaults: () => setSettings(defaultSettings),
  };

  return (
    <DemoSettingsContext.Provider value={value}>
      {children}
    </DemoSettingsContext.Provider>
  );
}
