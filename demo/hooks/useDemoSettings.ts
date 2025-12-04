/**
 * useDemoSettings Hook
 *
 * Hook to access demo settings context.
 * Separated from provider for fast refresh compatibility.
 */

import { useContext } from "react";
import {
  DemoSettingsContext,
  type DemoSettingsContextType,
} from "../context/types";

export function useDemoSettings(): DemoSettingsContextType {
  const context = useContext(DemoSettingsContext);
  if (!context) {
    throw new Error(
      "useDemoSettings must be used within a DemoSettingsProvider"
    );
  }
  return context;
}
