/**
 * Breadcrumbs Hook
 *
 * Generates breadcrumbs based on current route using react-router.
 */

import type { EuiBreadcrumb } from "@elastic/eui";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Route to breadcrumb label mapping
const ROUTE_LABELS: Record<string, string> = {
  "": "Home",
  colors: "Color Palette",
  tokens: "Token Inspector",
  typography: "Typography",
  animations: "Animations",
  components: "Component Showcase",
  dashboard: "Dashboard",
  "data-table": "Data Table",
  docs: "Documentation",
  "getting-started": "Getting Started",
};

// Route categories for grouping
const ROUTE_CATEGORIES: Record<string, string> = {
  colors: "Theme",
  tokens: "Theme",
  typography: "Theme",
  animations: "Theme",
  components: "Demos",
  dashboard: "Examples",
  "data-table": "Examples",
  "getting-started": "Documentation",
};

export function useBreadcrumbs(): EuiBreadcrumb[] {
  const location = useLocation();
  const navigate = useNavigate();

  const breadcrumbs = useMemo(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const crumbs: EuiBreadcrumb[] = [];

    // Always start with Home
    crumbs.push({
      text: "🏠 Home",
      href: "/",
      onClick: (e) => {
        e.preventDefault();
        navigate("/");
      },
    });

    // If we're on the home page, just return home
    if (pathSegments.length === 0) {
      return crumbs;
    }

    // Add category if applicable
    const firstSegment = pathSegments[0];
    const category = ROUTE_CATEGORIES[firstSegment];

    if (category && !crumbs.find((c) => c.text === category)) {
      crumbs.push({
        text: category,
        // No link for category - it's just a label
      });
    }

    // Build path progressively
    let currentPath = "";

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = ROUTE_LABELS[segment] || segment;
      const isLast = index === pathSegments.length - 1;

      crumbs.push({
        text: label,
        href: isLast ? undefined : currentPath,
        onClick: isLast
          ? undefined
          : (e) => {
              e.preventDefault();
              navigate(currentPath);
            },
      });
    });

    return crumbs;
  }, [location.pathname, navigate]);

  return breadcrumbs;
}
