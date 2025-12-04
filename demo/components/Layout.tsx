/** @jsxImportSource @emotion/react */
/**
 * Layout Component
 *
 * Main application layout with header and collapsible side navigation.
 */

import {
  EuiBreadcrumbs,
  EuiCollapsibleNav,
  EuiCollapsibleNavGroup,
  EuiFlexItem,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiListGroup,
  EuiPageTemplate,
  EuiToolTip,
  useGeneratedHtmlId,
} from "@elastic/eui";
import { PRIMITIVE_COLORS, glowText } from "@p1llus/eui-theme-hacker";
import { css } from "@emotion/react";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";
import { useDemoSettings } from "../hooks/useDemoSettings";
import { SettingsPanel } from "./SettingsPanel";

// Header styles
const headerStyles = css`
  background: ${PRIMITIVE_COLORS.bgDark} !important;
  border-bottom: 1px solid ${PRIMITIVE_COLORS.green60} !important;
  box-shadow: 0 0 20px ${PRIMITIVE_COLORS.greenGlow15} !important;
`;

const logoStyles = css`
  font-family: "Orbitron", monospace !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  letter-spacing: 2px !important;
  ${glowText(PRIMITIVE_COLORS.green100)}
`;

// Settings button style
const settingsButtonStyle = css`
  &:hover {
    color: ${PRIMITIVE_COLORS.green100};
  }
`;

// Breadcrumbs container style
const breadcrumbsContainer = css`
  padding: 8px 16px;
  background: ${PRIMITIVE_COLORS.bgDeep};
  border-bottom: 1px solid ${PRIMITIVE_COLORS.gray10};

  .euiBreadcrumb {
    font-family: "Fira Code", monospace;
    font-size: 12px;
  }

  .euiBreadcrumb__content {
    color: ${PRIMITIVE_COLORS.gray40};
  }

  .euiBreadcrumb:last-child .euiBreadcrumb__content {
    color: ${PRIMITIVE_COLORS.green100};
  }

  .euiBreadcrumbSeparator {
    color: ${PRIMITIVE_COLORS.green60};
  }
`;

// Navigation structure
const NAV_ITEMS = {
  examples: {
    title: "Examples",
    icon: "beaker",
    items: [
      { label: "Dashboard", path: "/dashboard", icon: "dashboardApp" },
      { label: "Data Table", path: "/data-table", icon: "tableDensityNormal" },
    ],
  },
  demos: {
    title: "Demos",
    icon: "apps",
    items: [{ label: "Component Showcase", path: "/components", icon: "grid" }],
  },
  theme: {
    title: "Theme",
    icon: "palette",
    items: [
      { label: "Color Palette", path: "/colors", icon: "color" },
      { label: "Token Inspector", path: "/tokens", icon: "inspect" },
      { label: "Typography", path: "/typography", icon: "editorHeading" },
      { label: "Animations", path: "/animations", icon: "play" },
    ],
  },
  docs: {
    title: "Documentation",
    icon: "documentation",
    items: [
      {
        label: "Getting Started",
        path: "/docs/getting-started",
        icon: "documentEdit",
      },
    ],
  },
};

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<string[]>(
    Object.keys(NAV_ITEMS)
  );
  const { toggleSettingsPanel } = useDemoSettings();
  const breadcrumbs = useBreadcrumbs();

  const collapsibleNavId = useGeneratedHtmlId({ prefix: "hackerNav" });

  // Don't show breadcrumbs on home page
  const showBreadcrumbs = location.pathname !== "/";

  const toggleGroup = (isOpen: boolean, groupKey?: string) => {
    if (!groupKey) return;
    if (isOpen) {
      if (!openGroups.includes(groupKey)) {
        setOpenGroups([...openGroups, groupKey]);
      }
    } else {
      setOpenGroups(openGroups.filter((g) => g !== groupKey));
    }
  };

  const collapsibleNav = (
    <EuiCollapsibleNav
      id={collapsibleNavId}
      aria-label="Main navigation"
      isOpen={navIsOpen}
      button={
        <EuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          <EuiIcon type="menu" size="m" aria-hidden="true" />
        </EuiHeaderSectionItemButton>
      }
      onClose={() => setNavIsOpen(false)}
    >
      {/* Navigation Groups */}
      <EuiFlexItem className="eui-yScroll">
        {Object.entries(NAV_ITEMS).map(([groupKey, group]) => (
          <EuiCollapsibleNavGroup
            key={groupKey}
            title={group.title}
            iconType={group.icon}
            isCollapsible={true}
            initialIsOpen={openGroups.includes(groupKey)}
            onToggle={(isOpen) => toggleGroup(isOpen, groupKey)}
          >
            <EuiListGroup
              listItems={group.items.map((item) => ({
                label: item.label,
                iconType: item.icon,
                isActive: location.pathname === item.path,
                onClick: () => {
                  navigate(item.path);
                  setNavIsOpen(false);
                },
              }))}
              maxWidth="none"
              color="subdued"
              gutterSize="none"
              size="s"
            />
          </EuiCollapsibleNavGroup>
        ))}
      </EuiFlexItem>
    </EuiCollapsibleNav>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <EuiHeader position="fixed" css={headerStyles}>
        <EuiHeaderSection grow={false}>
          <EuiHeaderSectionItem>{collapsibleNav}</EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            <EuiHeaderLogo
              onClick={() => navigate("/")}
              aria-label="Go to home page"
            >
              <span css={logoStyles}>HACKER THEME</span>
            </EuiHeaderLogo>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>

        <EuiHeaderSection side="right">
          <EuiHeaderSectionItem>
            <EuiToolTip content="Theme Settings" position="bottom">
              <EuiHeaderSectionItemButton
                aria-label="Open theme settings"
                onClick={toggleSettingsPanel}
                css={settingsButtonStyle}
              >
                <EuiIcon type="gear" size="m" />
              </EuiHeaderSectionItemButton>
            </EuiToolTip>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>

      {/* Settings Panel */}
      <SettingsPanel />

      {/* Breadcrumbs */}
      {showBreadcrumbs && (
        <div css={breadcrumbsContainer} style={{ marginTop: 48 }}>
          <EuiBreadcrumbs
            breadcrumbs={breadcrumbs}
            truncate={false}
            aria-label="Page navigation"
          />
        </div>
      )}

      <EuiPageTemplate
        offset={showBreadcrumbs ? 48 + 37 : 48}
        grow={true}
        panelled={true}
        style={{
          minHeight: showBreadcrumbs
            ? "calc(100vh - 85px)"
            : "calc(100vh - 48px)",
        }}
      >
        <Outlet />
      </EuiPageTemplate>
    </div>
  );
}

export default Layout;
