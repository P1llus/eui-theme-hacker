/** @jsxImportSource @emotion/react */
/**
 * Theme Token Inspector
 *
 * Displays all computed theme token values with search and filtering.
 */

import {
  EuiAccordion,
  EuiBadge,
  EuiCodeBlock,
  EuiCopy,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiPageTemplate,
  EuiPanel,
  EuiSpacer,
  EuiStat,
  EuiTab,
  EuiTabs,
  EuiText,
  EuiTitle,
  useEuiTheme,
} from "@elastic/eui";
import { css } from "@emotion/react";
import { useMemo, useState } from "react";
import { useGlowText } from "../hooks/useThemeStyles";

// Token categories for tabs
const CATEGORIES = [
  { id: "all", name: "All Tokens" },
  { id: "colors", name: "Colors" },
  { id: "size", name: "Size & Spacing" },
  { id: "typography", name: "Typography" },
  { id: "borders", name: "Borders" },
  { id: "shadows", name: "Shadows" },
  { id: "animation", name: "Animation" },
  { id: "other", name: "Other" },
];

// Helper to flatten nested objects into path-value pairs
function flattenObject(
  obj: Record<string, unknown>,
  prefix = ""
): Array<{ path: string; value: unknown; category: string }> {
  const result: Array<{ path: string; value: unknown; category: string }> = [];

  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;

    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      result.push(...flattenObject(value as Record<string, unknown>, path));
    } else {
      // Determine category based on path
      let category = "other";
      if (
        path.includes("color") ||
        path.includes("Color") ||
        path.includes("shade") ||
        path.includes("background") ||
        (path.includes("border") && path.includes("Color"))
      ) {
        category = "colors";
      } else if (
        path.includes("size") ||
        path.includes("Size") ||
        path.includes("base") ||
        path.includes("spacing") ||
        path.includes("width") ||
        path.includes("radius")
      ) {
        category = "size";
      } else if (
        path.includes("font") ||
        path.includes("Font") ||
        path.includes("family") ||
        path.includes("weight") ||
        path.includes("scale")
      ) {
        category = "typography";
      } else if (path.includes("border") || path.includes("Border")) {
        category = "borders";
      } else if (path.includes("shadow") || path.includes("Shadow")) {
        category = "shadows";
      } else if (
        path.includes("animation") ||
        path.includes("speed") ||
        path.includes("easing")
      ) {
        category = "animation";
      }

      result.push({ path, value, category });
    }
  }

  return result;
}

// Check if a value looks like a color
function isColorValue(value: unknown): boolean {
  if (typeof value !== "string") return false;
  return (
    value.startsWith("#") ||
    value.startsWith("rgb") ||
    value.startsWith("hsl") ||
    value.startsWith("rgba") ||
    value.startsWith("hsla")
  );
}

// Format value for display
function formatValue(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (typeof value === "boolean") return String(value);
  if (Array.isArray(value)) return JSON.stringify(value);
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  return JSON.stringify(value);
}

interface TokenRowProps {
  path: string;
  value: unknown;
}

// Table-like token row (similar to EUI docs)
function TokenRow({ path, value }: TokenRowProps) {
  const { euiTheme } = useEuiTheme();
  const displayValue = formatValue(value);
  const isColor = isColorValue(value);

  return (
    <EuiCopy textToCopy={`euiTheme.${path}`}>
      {(copy) => (
        <div
          onClick={copy}
          title="Click to copy path"
          css={css`
            display: grid;
            grid-template-columns: 40px 1fr 120px;
            gap: ${euiTheme.size.m};
            align-items: center;
            padding: ${euiTheme.size.s} ${euiTheme.size.m};
            cursor: pointer;
            border-bottom: 1px solid ${euiTheme.colors.lightShade};
            transition: background-color 0.15s ease;
            width: 100%;
            &:hover {
              background-color: ${euiTheme.colors.lightestShade};
            }
            &:last-child {
              border-bottom: none;
            }
          `}
        >
          {/* Sample column */}
          <div>
            {isColor && (
              <div
                css={css`
                  width: 24px;
                  height: 24px;
                  border-radius: ${euiTheme.border.radius.small};
                  border: 1px solid ${euiTheme.colors.lightShade};
                `}
                style={{ backgroundColor: displayValue }}
              />
            )}
          </div>

          {/* Token column */}
          <div>
            <EuiBadge
              color="hollow"
              css={css`
                font-family: ${euiTheme.font.familyCode};
              `}
            >
              {path}
            </EuiBadge>
          </div>

          {/* Value column */}
          <EuiText
            size="s"
            css={css`
              font-family: ${euiTheme.font.familyCode};
              color: ${isColor
                ? euiTheme.colors.text
                : euiTheme.colors.primary};
              text-align: right;
            `}
          >
            {displayValue}
          </EuiText>
        </div>
      )}
    </EuiCopy>
  );
}

// Table header for token list
function TokenTableHeader() {
  const { euiTheme } = useEuiTheme();

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 40px 1fr 120px;
        gap: ${euiTheme.size.m};
        padding: ${euiTheme.size.xs} ${euiTheme.size.m};
        border-bottom: 2px solid ${euiTheme.colors.lightShade};
      `}
    >
      <EuiText size="xs" color="subdued">
        <strong>Sample</strong>
      </EuiText>
      <EuiText size="xs" color="subdued">
        <strong>Token</strong>
      </EuiText>
      <EuiText
        size="xs"
        color="subdued"
        css={css`
          text-align: right;
        `}
      >
        <strong>Value</strong>
      </EuiText>
    </div>
  );
}

export default function TokenInspector() {
  const { euiTheme } = useEuiTheme();
  const titleGlow = useGlowText(euiTheme.colors.primary);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const sectionTitleStyle = css`
    font-family: ${euiTheme.font.familySerif};
    letter-spacing: 2px;
    text-transform: uppercase;
  `;

  // Flatten theme object into searchable tokens
  const allTokens = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return flattenObject(euiTheme as any);
  }, [euiTheme]);

  // Filter tokens based on search and category
  const filteredTokens = useMemo(() => {
    return allTokens.filter((token) => {
      const matchesSearch =
        searchQuery === "" ||
        token.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
        formatValue(token.value)
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || token.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [allTokens, searchQuery, selectedCategory]);

  // Group tokens by top-level key
  const groupedTokens = useMemo(() => {
    const groups: Record<string, typeof filteredTokens> = {};

    for (const token of filteredTokens) {
      const topLevel = token.path.split(".")[0];
      if (!groups[topLevel]) {
        groups[topLevel] = [];
      }
      groups[topLevel].push(token);
    }

    return groups;
  }, [filteredTokens]);

  // Stats
  const stats = useMemo(
    () => ({
      total: allTokens.length,
      colors: allTokens.filter((t) => t.category === "colors").length,
      size: allTokens.filter((t) => t.category === "size").length,
      typography: allTokens.filter((t) => t.category === "typography").length,
      filtered: filteredTokens.length,
    }),
    [allTokens, filteredTokens]
  );

  return (
    <EuiPageTemplate.Section>
      <EuiTitle size="l">
        <h1 css={titleGlow}>Token Inspector</h1>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText color="subdued">
        <p>
          Explore all computed theme tokens. Click any token to copy its access
          path.
        </p>
      </EuiText>

      <EuiSpacer size="l" />

      {/* Stats */}
      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiPanel hasBorder paddingSize="m">
            <EuiStat
              title={stats.total}
              description="Total Tokens"
              titleColor="primary"
              titleSize="s"
            />
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel hasBorder paddingSize="m">
            <EuiStat
              title={stats.colors}
              description="Colors"
              titleColor="primary"
              titleSize="s"
            />
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel hasBorder paddingSize="m">
            <EuiStat
              title={stats.size}
              description="Size/Spacing"
              titleColor="primary"
              titleSize="s"
            />
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel hasBorder paddingSize="m">
            <EuiStat
              title={stats.typography}
              description="Typography"
              titleColor="primary"
              titleSize="s"
            />
          </EuiPanel>
        </EuiFlexItem>
        {searchQuery && (
          <EuiFlexItem grow={false}>
            <EuiPanel hasBorder paddingSize="m">
              <EuiStat
                title={stats.filtered}
                description="Matches"
                titleColor="success"
                titleSize="s"
              />
            </EuiPanel>
          </EuiFlexItem>
        )}
      </EuiFlexGroup>

      <EuiSpacer size="l" />

      {/* Search */}
      <EuiFieldSearch
        placeholder="Search tokens by path or value..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        isClearable
        fullWidth
      />

      <EuiSpacer size="l" />

      {/* Category Tabs */}
      <EuiTabs>
        {CATEGORIES.map((cat) => (
          <EuiTab
            key={cat.id}
            isSelected={selectedCategory === cat.id}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </EuiTab>
        ))}
      </EuiTabs>

      <EuiSpacer size="xl" />

      {/* Token Groups */}
      <EuiFlexGroup direction="column" gutterSize="m">
        {Object.entries(groupedTokens).map(([groupName, tokens]) => (
          <EuiFlexItem key={groupName}>
            <EuiAccordion
              id={`group-${groupName}`}
              arrowDisplay="none"
              buttonContent={
                <EuiFlexGroup alignItems="center" gutterSize="s">
                  <EuiFlexItem grow={false}>
                    <EuiTitle size="xxs">
                      <span css={sectionTitleStyle}>{groupName}</span>
                    </EuiTitle>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiBadge color="hollow">{tokens.length}</EuiBadge>
                  </EuiFlexItem>
                </EuiFlexGroup>
              }
              paddingSize="m"
              initialIsOpen={Object.keys(groupedTokens).length <= 3}
            >
              <EuiPanel
                hasBorder
                paddingSize="none"
                css={css`
                  display: flex;
                  flex-direction: column;
                `}
              >
                <TokenTableHeader />
                {tokens.map((token) => (
                  <TokenRow
                    key={token.path}
                    path={token.path}
                    value={token.value}
                  />
                ))}
              </EuiPanel>
            </EuiAccordion>
            <EuiHorizontalRule margin="s" />
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>

      {filteredTokens.length === 0 && (
        <EuiPanel color="subdued" paddingSize="l">
          <EuiText textAlign="center" color="subdued">
            <p>No tokens match your search criteria.</p>
          </EuiText>
        </EuiPanel>
      )}

      <EuiSpacer size="xl" />

      {/* Usage Example - at the bottom */}
      <EuiPanel paddingSize="m" color="subdued">
        <EuiText size="s">
          <strong>Usage:</strong>
        </EuiText>
        <EuiSpacer size="s" />
        <EuiCodeBlock language="tsx" fontSize="s" paddingSize="m" isCopyable>
          {`import { useEuiTheme } from '@elastic/eui';

function MyComponent() {
  const { euiTheme } = useEuiTheme();
  
  return (
    <div style={{ 
      color: euiTheme.colors.primary,
      fontFamily: euiTheme.font.family,
      padding: euiTheme.size.m,
    }}>
      Themed content using tokens
    </div>
  );
}`}
        </EuiCodeBlock>
      </EuiPanel>
    </EuiPageTemplate.Section>
  );
}
