/** @jsxImportSource @emotion/react */
/**
 * Color Palette Page
 *
 * Visual showcase of all theme colors with copy-to-clipboard functionality.
 */

import {
  EuiBadge,
  EuiCodeBlock,
  EuiCopy,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageTemplate,
  EuiPanel,
  EuiSpacer,
  EuiTab,
  EuiTabs,
  EuiText,
  EuiTitle,
  EuiToolTip,
  useEuiTheme,
} from "@elastic/eui";
import { PRIMITIVE_COLORS, SEMANTIC_COLORS } from "@p1llus/eui-theme-hacker";
import { css } from "@emotion/react";
import { useState } from "react";
import { useGlowText } from "../hooks/useThemeStyles";

// Color groupings
const PRIMITIVE_GROUPS = {
  "Matrix Greens": {
    description: "The signature hacker color palette",
    colors: [
      "green5",
      "green10",
      "green20",
      "green30",
      "green40",
      "green50",
      "green60",
      "green70",
      "green80",
      "green90",
      "green100",
      "green110",
      "green120",
    ],
  },
  Backgrounds: {
    description: "Dark, mysterious backgrounds",
    colors: ["bgDeep", "bgDark", "bgCard", "bgElevated", "bgHover"],
  },
  Reds: {
    description: "Danger, alerts, red team",
    colors: ["red20", "red40", "red60", "red80", "red100", "red120"],
  },
  Blues: {
    description: "Info, links, blue team",
    colors: ["blue20", "blue40", "blue60", "blue80", "blue100", "blue120"],
  },
  Ambers: {
    description: "Warnings and caution",
    colors: [
      "amber20",
      "amber40",
      "amber60",
      "amber80",
      "amber100",
      "amber120",
    ],
  },
  Purples: {
    description: "Accent and special states",
    colors: [
      "purple20",
      "purple40",
      "purple60",
      "purple80",
      "purple100",
      "purple120",
    ],
  },
  Neutrals: {
    description: "Text and UI elements",
    colors: [
      "gray5",
      "gray10",
      "gray20",
      "gray30",
      "gray40",
      "gray50",
      "gray60",
      "gray70",
      "gray80",
    ],
  },
  Glows: {
    description: "Semi-transparent glow effects",
    colors: [
      "greenGlow10",
      "greenGlow15",
      "greenGlow25",
      "greenGlow40",
      "redGlow15",
      "redGlow25",
      "blueGlow15",
      "blueGlow25",
      "amberGlow15",
      "purpleGlow15",
    ],
  },
  "Pure & Overlay": {
    description: "Base and overlay colors",
    colors: [
      "black",
      "white",
      "transparent",
      "blackAlpha50",
      "blackAlpha70",
      "whiteAlpha8",
      "whiteAlpha16",
    ],
  },
};

const SEMANTIC_GROUPS = {
  "Primary (Green)": {
    description: "Main brand color - Matrix green",
    colors: [
      "primary10",
      "primary20",
      "primary30",
      "primary40",
      "primary50",
      "primary60",
      "primary70",
      "primary80",
      "primary90",
      "primary100",
      "primary110",
      "primary120",
    ],
  },
  "Accent (Purple)": {
    description: "Secondary attention color",
    colors: [
      "accent10",
      "accent20",
      "accent40",
      "accent60",
      "accent80",
      "accent100",
      "accent120",
    ],
  },
  "Accent Secondary (Cyan)": {
    description: "Tertiary accent color",
    colors: [
      "accentSecondary10",
      "accentSecondary20",
      "accentSecondary40",
      "accentSecondary60",
      "accentSecondary80",
      "accentSecondary100",
      "accentSecondary120",
    ],
  },
  Success: {
    description: "Positive states and confirmations",
    colors: [
      "success10",
      "success20",
      "success40",
      "success60",
      "success80",
      "success100",
      "success120",
    ],
  },
  Warning: {
    description: "Caution and attention needed",
    colors: [
      "warning10",
      "warning20",
      "warning40",
      "warning60",
      "warning80",
      "warning100",
      "warning120",
    ],
  },
  Danger: {
    description: "Errors and destructive actions",
    colors: [
      "danger10",
      "danger20",
      "danger40",
      "danger60",
      "danger80",
      "danger100",
      "danger120",
    ],
  },
  Shades: {
    description: "Background hierarchy and surfaces",
    colors: [
      "shade10",
      "shade15",
      "shade25",
      "shade40",
      "shade55",
      "shade70",
      "shade90",
      "shade100",
      "shade110",
      "shade120",
      "shade130",
      "shade140",
      "shade145",
    ],
  },
};

interface ColorSwatchProps {
  name: string;
  value: string;
  source: "primitive" | "semantic";
}

function ColorSwatch({ name, value, source }: ColorSwatchProps) {
  const { euiTheme } = useEuiTheme();
  const importPath =
    source === "primitive"
      ? `PRIMITIVE_COLORS.${name}`
      : `SEMANTIC_COLORS.${name}`;
  const isTransparent = value.includes("rgba") || value === "transparent";

  return (
    <EuiCopy textToCopy={value}>
      {(copy) => (
        <EuiToolTip
          content={
            <div>
              <strong>{importPath}</strong>
              <br />
              <code>{value}</code>
              <br />
              <em>Click to copy</em>
            </div>
          }
        >
          <EuiPanel
            paddingSize="s"
            hasBorder
            onClick={copy}
            css={css`
              cursor: pointer;
              text-align: center;
              transition: border-color 0.2s ease;
              height: 130px;
              display: flex;
              flex-direction: column;
              &:hover {
                border-color: ${euiTheme.colors.primary};
              }
            `}
          >
            <div
              css={css`
                width: 100%;
                height: 60px;
                border-radius: ${euiTheme.border.radius.small};
                border: 1px solid ${euiTheme.colors.lightShade};
                transition: transform 0.2s ease, box-shadow 0.2s ease;
                overflow: hidden;
                ${isTransparent &&
                `
                  background-image: linear-gradient(45deg, #333 25%, transparent 25%),
                    linear-gradient(-45deg, #333 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #333 75%),
                    linear-gradient(-45deg, transparent 75%, #333 75%);
                  background-size: 10px 10px;
                  background-position: 0 0, 0 5px, 5px -5px, -5px 0px;
                `}
                &:hover {
                  transform: scale(1.02);
                  box-shadow: 0 0 15px ${value};
                }
              `}
            >
              <div
                css={css`
                  width: 100%;
                  height: 100%;
                  background-color: ${value};
                `}
              />
            </div>
            <EuiText
              size="xs"
              css={css`
                margin-top: ${euiTheme.size.xs};
                word-break: break-all;
                line-height: 1.2;
              `}
            >
              <code>{name}</code>
            </EuiText>
            <EuiText
              size="xs"
              color="subdued"
              css={css`
                font-size: 10px;
                word-break: break-all;
              `}
            >
              {value}
            </EuiText>
          </EuiPanel>
        </EuiToolTip>
      )}
    </EuiCopy>
  );
}

function ColorGroup({
  title,
  description,
  colors,
  source,
}: {
  title: string;
  description: string;
  colors: string[];
  source: "primitive" | "semantic";
}) {
  const { euiTheme } = useEuiTheme();
  const colorSource =
    source === "primitive" ? PRIMITIVE_COLORS : SEMANTIC_COLORS;

  const sectionTitleStyle = css`
    font-family: ${euiTheme.font.familySerif};
    letter-spacing: 2px;
    text-transform: uppercase;
  `;

  return (
    <EuiPanel paddingSize="l" hasBorder>
      <EuiFlexGroup alignItems="center" gutterSize="s">
        <EuiFlexItem grow={false}>
          <EuiTitle size="xs">
            <h3 css={sectionTitleStyle}>{title}</h3>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiBadge color="hollow">{colors.length} colors</EuiBadge>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiText size="s" color="subdued">
        <p>{description}</p>
      </EuiText>
      <EuiSpacer size="m" />

      <EuiFlexGroup wrap responsive gutterSize="m">
        {colors.map((colorName) => {
          const value = (colorSource as Record<string, string>)[colorName];
          if (!value) return null;
          return (
            <EuiFlexItem key={colorName} grow={false} style={{ width: 110 }}>
              <ColorSwatch name={colorName} value={value} source={source} />
            </EuiFlexItem>
          );
        })}
      </EuiFlexGroup>
    </EuiPanel>
  );
}

export default function ColorPalette() {
  const { euiTheme } = useEuiTheme();
  const titleGlow = useGlowText(euiTheme.colors.primary);
  const [selectedTab, setSelectedTab] = useState<"primitive" | "semantic">(
    "primitive"
  );

  const tabs = [
    {
      id: "primitive",
      name: "Primitive Colors",
      count: Object.keys(PRIMITIVE_COLORS).length,
    },
    {
      id: "semantic",
      name: "Semantic Colors",
      count: Object.keys(SEMANTIC_COLORS).length,
    },
  ];

  return (
    <EuiPageTemplate.Section>
      <EuiTitle size="l">
        <h1 css={titleGlow}>Color Palette</h1>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText color="subdued">
        <p>
          The complete color system for the 90s Hacker Theme. Click any color to
          copy its value.
        </p>
      </EuiText>

      <EuiSpacer size="xl" />

      {/* Tabs */}
      <EuiTabs>
        {tabs.map((tab) => (
          <EuiTab
            key={tab.id}
            isSelected={selectedTab === tab.id}
            onClick={() => setSelectedTab(tab.id as "primitive" | "semantic")}
          >
            {tab.name} <EuiBadge color="hollow">{tab.count}</EuiBadge>
          </EuiTab>
        ))}
      </EuiTabs>

      <EuiSpacer size="xl" />

      {/* Primitive Colors */}
      {selectedTab === "primitive" && (
        <EuiFlexGroup direction="column" gutterSize="l">
          {Object.entries(PRIMITIVE_GROUPS).map(([groupName, group]) => (
            <EuiFlexItem key={groupName}>
              <ColorGroup
                title={groupName}
                description={group.description}
                colors={group.colors}
                source="primitive"
              />
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>
      )}

      {/* Semantic Colors */}
      {selectedTab === "semantic" && (
        <EuiFlexGroup direction="column" gutterSize="l">
          {Object.entries(SEMANTIC_GROUPS).map(([groupName, group]) => (
            <EuiFlexItem key={groupName}>
              <ColorGroup
                title={groupName}
                description={group.description}
                colors={group.colors}
                source="semantic"
              />
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>
      )}

      <EuiSpacer size="xl" />

      {/* Usage Example */}
      <EuiPanel paddingSize="m" color="subdued">
        <EuiText size="s">
          <strong>Usage:</strong>
        </EuiText>
        <EuiSpacer size="s" />
        <EuiCodeBlock language="tsx" fontSize="s" paddingSize="m" isCopyable>
          {`import { useEuiTheme } from '@elastic/eui';

function MyComponent() {
  const { euiTheme } = useEuiTheme();
  
  // Access theme colors directly
  const primaryColor = euiTheme.colors.primary;
  const successColor = euiTheme.colors.success;
  
  return (
    <div style={{ color: primaryColor }}>
      Themed content
    </div>
  );
}`}
        </EuiCodeBlock>
      </EuiPanel>
    </EuiPageTemplate.Section>
  );
}
