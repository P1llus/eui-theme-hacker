/**
 * Demo Application Entry Point
 *
 * Showcases the 90s Hacker Theme with various EUI components.
 *
 * Features:
 * - Dynamic theme settings panel
 * - Real-time style adjustments
 * - CRT effects toggles
 */

import { EuiProvider } from "@elastic/eui";
import { EuiThemeHacker } from "@p1llus/eui-theme-hacker";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DynamicStyles } from "./components/DynamicStyles";
import { DemoSettingsProvider } from "./context/DemoSettingsContext";

// Base path for GitHub Pages
const basename = import.meta.env.BASE_URL || "/eui-theme-hacker/";

createRoot(document.getElementById("root")!).render(
  <DemoSettingsProvider>
    <EuiProvider theme={EuiThemeHacker} colorMode="dark">
      <DynamicStyles />
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </EuiProvider>
  </DemoSettingsProvider>
);
