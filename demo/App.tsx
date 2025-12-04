/**
 * Demo Application
 *
 * Main app component with routing setup for the 90s Hacker Theme demo.
 */

import { Route, Routes } from "react-router-dom";

// Register icons (must be done before rendering)
import "./icons";

// Layout and pages
import Layout from "./components/Layout";
import Animations from "./pages/Animations";
import ColorPalette from "./pages/ColorPalette";
import ComponentShowcase from "./pages/ComponentShowcase";
import Dashboard from "./pages/Dashboard";
import DataTable from "./pages/DataTable";
import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";
import TokenInspector from "./pages/TokenInspector";
import Typography from "./pages/Typography";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Theme Pages */}
        <Route path="colors" element={<ColorPalette />} />
        <Route path="tokens" element={<TokenInspector />} />
        <Route path="typography" element={<Typography />} />
        <Route path="animations" element={<Animations />} />

        {/* Demo Pages */}
        <Route path="components" element={<ComponentShowcase />} />

        {/* Example Pages */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="data-table" element={<DataTable />} />

        {/* Documentation Pages */}
        <Route
          path="docs/getting-started"
          element={
            <Placeholder
              title="Getting Started"
              description="Installation and usage guide coming soon."
            />
          }
        />
        <Route
          path="docs/tokens"
          element={
            <Placeholder
              title="Theme Tokens"
              description="Complete token reference coming soon."
            />
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Placeholder
              title="404 - Not Found"
              description="The page you're looking for doesn't exist."
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
