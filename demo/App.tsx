/**
 * Demo Application
 *
 * Main app component with routing setup for the 90s Hacker Theme demo.
 */

import { EuiLoadingSpinner } from "@elastic/eui";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Register icons (must be done before rendering)
import "./icons";

// Layout (loaded eagerly as it's always needed)
import Layout from "./components/Layout";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Animations = lazy(() => import("./pages/Animations"));
const ColorPalette = lazy(() => import("./pages/ColorPalette"));
const ComponentShowcase = lazy(() => import("./pages/ComponentShowcase"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DataTable = lazy(() => import("./pages/DataTable"));
const Placeholder = lazy(() => import("./pages/Placeholder"));
const TokenInspector = lazy(() => import("./pages/TokenInspector"));
const Typography = lazy(() => import("./pages/Typography"));

// Loading fallback
const PageLoader = () => (
  <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
    <EuiLoadingSpinner size="xl" />
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
  );
}

export default App;
