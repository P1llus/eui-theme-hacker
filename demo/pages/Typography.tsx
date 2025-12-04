/** @jsxImportSource @emotion/react */
/**
 * Typography Showcase
 *
 * Demonstrates all typography settings in the hacker theme.
 */

import {
  EuiBadge,
  EuiCode,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiPageTemplate,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
  useEuiTheme,
} from "@elastic/eui";
import { css } from "@emotion/react";
import { useGlowText } from "../hooks/useThemeStyles";

// Font scale sizes
const FONT_SCALES = [
  { name: "xxxs", size: "10px", lineHeight: "1.2" },
  { name: "xxs", size: "11px", lineHeight: "1.3" },
  { name: "xs", size: "12px", lineHeight: "1.4" },
  { name: "s", size: "14px", lineHeight: "1.5" },
  { name: "m", size: "16px", lineHeight: "1.5" },
  { name: "l", size: "20px", lineHeight: "1.4" },
  { name: "xl", size: "24px", lineHeight: "1.3" },
  { name: "xxl", size: "32px", lineHeight: "1.2" },
];

// Font weights
const FONT_WEIGHTS = [
  { name: "light", value: 300 },
  { name: "regular", value: 400 },
  { name: "medium", value: 500 },
  { name: "semiBold", value: 600 },
  { name: "bold", value: 700 },
];

export default function Typography() {
  const { euiTheme } = useEuiTheme();
  const titleGlow = useGlowText(euiTheme.colors.primary);

  const sectionTitleStyle = css`
    font-family: ${euiTheme.font.familySerif};
    letter-spacing: 2px;
    text-transform: uppercase;
  `;

  return (
    <EuiPageTemplate.Section>
      <EuiTitle size="l">
        <h1 css={titleGlow}>Typography</h1>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText color="subdued">
        <p>Font families, sizes, and weights used in the hacker theme.</p>
      </EuiText>

      <EuiSpacer size="xl" />

      {/* Font Families */}
      <EuiTitle size="xs">
        <h2 css={sectionTitleStyle}>Font Families</h2>
      </EuiTitle>
      <EuiSpacer size="m" />

      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiPanel
            paddingSize="l"
            hasBorder
            style={{ height: "100%", textAlign: "center" }}
          >
            <EuiFlexGroup
              direction="column"
              justifyContent="spaceBetween"
              style={{ height: "100%" }}
            >
              <EuiFlexItem grow={false}>
                <EuiText
                  css={css`
                    font-family: ${euiTheme.font.family};
                    font-size: 28px;
                  `}
                >
                  Fira Code
                </EuiText>
                <EuiText
                  size="s"
                  color="subdued"
                  css={css`
                    font-family: ${euiTheme.font.family};
                  `}
                >
                  The quick brown fox jumps over the lazy dog
                  <br />
                  0123456789 !@#$%^&*()
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText size="xs" color="subdued">
                  font.family (Primary)
                </EuiText>
                <EuiSpacer size="xs" />
                <EuiCode>{euiTheme.font.family}</EuiCode>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiPanel
            paddingSize="l"
            hasBorder
            style={{ height: "100%", textAlign: "center" }}
          >
            <EuiFlexGroup
              direction="column"
              justifyContent="spaceBetween"
              style={{ height: "100%" }}
            >
              <EuiFlexItem grow={false}>
                <EuiText
                  css={css`
                    font-family: ${euiTheme.font.familyCode};
                    font-size: 28px;
                  `}
                >
                  Monospace
                </EuiText>
                <EuiText
                  size="s"
                  color="subdued"
                  css={css`
                    font-family: ${euiTheme.font.familyCode};
                  `}
                >
                  const theme = 'hacker';
                  <br />
                  {'{ code: true, style: "retro" }'}
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText size="xs" color="subdued">
                  font.familyCode (Code)
                </EuiText>
                <EuiSpacer size="xs" />
                <EuiCode>{euiTheme.font.familyCode}</EuiCode>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiPanel
            paddingSize="l"
            hasBorder
            style={{ height: "100%", textAlign: "center" }}
          >
            <EuiFlexGroup
              direction="column"
              justifyContent="spaceBetween"
              style={{ height: "100%" }}
            >
              <EuiFlexItem grow={false}>
                <EuiText
                  css={css`
                    font-family: ${euiTheme.font.familySerif};
                    font-size: 28px;
                  `}
                >
                  Orbitron
                </EuiText>
                <EuiText
                  size="s"
                  color="subdued"
                  css={css`
                    font-family: ${euiTheme.font.familySerif};
                    letter-spacing: 2px;
                  `}
                >
                  SYSTEM ONLINE
                  <br />
                  INITIALIZING...
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText size="xs" color="subdued">
                  font.familySerif (Display)
                </EuiText>
                <EuiSpacer size="xs" />
                <EuiCode>{euiTheme.font.familySerif}</EuiCode>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />
      <EuiHorizontalRule />
      <EuiSpacer size="xl" />

      {/* Font Scale */}
      <EuiTitle size="xs">
        <h2 css={sectionTitleStyle}>Font Scale</h2>
      </EuiTitle>
      <EuiText size="s" color="subdued">
        <p>EUI's type scale from xxxs to xxl</p>
      </EuiText>
      <EuiSpacer size="m" />

      <EuiPanel paddingSize="l" hasBorder>
        {FONT_SCALES.map((scale) => (
          <EuiFlexGroup
            key={scale.name}
            alignItems="center"
            justifyContent="spaceBetween"
            css={css`
              padding: ${euiTheme.size.s} ${euiTheme.size.m};
              border-left: 3px solid ${euiTheme.colors.primary};
              margin-bottom: ${euiTheme.size.xs};
            `}
          >
            <EuiFlexItem grow={false}>
              <span
                style={{
                  fontSize: scale.size,
                  lineHeight: scale.lineHeight,
                  fontFamily: euiTheme.font.family,
                }}
              >
                The quick brown fox ({scale.name})
              </span>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFlexGroup gutterSize="s" alignItems="center">
                <EuiFlexItem grow={false}>
                  <EuiBadge color="hollow">{scale.size}</EuiBadge>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiCode transparentBackground>
                    euiTheme.font.scale.{scale.name}
                  </EuiCode>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        ))}
      </EuiPanel>

      <EuiSpacer size="xl" />
      <EuiHorizontalRule />
      <EuiSpacer size="xl" />

      {/* Font Weights */}
      <EuiTitle size="xs">
        <h2 css={sectionTitleStyle}>Font Weights</h2>
      </EuiTitle>
      <EuiText size="s" color="subdued">
        <p>Available font weights</p>
      </EuiText>
      <EuiSpacer size="m" />

      <EuiFlexGroup wrap gutterSize="m">
        {FONT_WEIGHTS.map((weight) => (
          <EuiFlexItem key={weight.name} grow={false} style={{ width: 180 }}>
            <EuiPanel paddingSize="m" hasBorder>
              <div
                style={{
                  fontWeight: weight.value,
                  fontSize: 24,
                  marginBottom: 8,
                  fontFamily: euiTheme.font.family,
                }}
              >
                Aa
              </div>
              <EuiText size="xs" color="subdued">
                {weight.name}
              </EuiText>
              <EuiBadge color="hollow">{weight.value}</EuiBadge>
            </EuiPanel>
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>

      <EuiSpacer size="xl" />
      <EuiHorizontalRule />
      <EuiSpacer size="xl" />

      {/* EUI Title Components */}
      <EuiTitle size="xs">
        <h2 css={sectionTitleStyle}>EUI Title Sizes</h2>
      </EuiTitle>
      <EuiText size="s" color="subdued">
        <p>EuiTitle component at different sizes</p>
      </EuiText>
      <EuiSpacer size="m" />

      <EuiPanel paddingSize="l" hasBorder>
        <EuiFlexGroup direction="column" gutterSize="l">
          <EuiFlexItem>
            <EuiFlexGroup alignItems="baseline">
              <EuiFlexItem grow={false} style={{ width: 80 }}>
                <EuiBadge>xxxs</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle size="xxxs">
                  <h6>Access Granted</h6>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFlexGroup alignItems="baseline">
              <EuiFlexItem grow={false} style={{ width: 80 }}>
                <EuiBadge>xxs</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle size="xxs">
                  <h5>Terminal Ready</h5>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFlexGroup alignItems="baseline">
              <EuiFlexItem grow={false} style={{ width: 80 }}>
                <EuiBadge>xs</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle size="xs">
                  <h4>Hello, World!</h4>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFlexGroup alignItems="baseline">
              <EuiFlexItem grow={false} style={{ width: 80 }}>
                <EuiBadge>s</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle size="s">
                  <h3>System Status: Online</h3>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFlexGroup alignItems="baseline">
              <EuiFlexItem grow={false} style={{ width: 80 }}>
                <EuiBadge>m</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle size="m">
                  <h2>Initializing Matrix</h2>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFlexGroup alignItems="baseline">
              <EuiFlexItem grow={false} style={{ width: 80 }}>
                <EuiBadge>l</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle size="l">
                  <h1>Connection Established</h1>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>

      <EuiSpacer size="xl" />
      <EuiHorizontalRule />
      <EuiSpacer size="xl" />

      {/* Text Colors */}
      <EuiTitle size="xs">
        <h2 css={sectionTitleStyle}>Text Colors</h2>
      </EuiTitle>
      <EuiText size="s" color="subdued">
        <p>Semantic text colors from the theme</p>
      </EuiText>
      <EuiSpacer size="m" />

      <EuiPanel paddingSize="l" hasBorder>
        <EuiFlexGroup direction="column" gutterSize="m">
          <EuiFlexItem>
            <EuiText>
              <p>Default text color (euiTheme.colors.text)</p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText color="subdued">
              <p>Subdued text for secondary information</p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText color="success">
              <p>Success text for positive feedback</p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText color="warning">
              <p>Warning text for caution messages</p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText color="danger">
              <p>Danger text for errors and alerts</p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText color="accent">
              <p>Accent text for emphasis</p>
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>

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
  
  return (
    <div style={{ 
      fontFamily: euiTheme.font.family,
      fontSize: euiTheme.font.scale.m,
      fontWeight: euiTheme.font.weight.bold,
    }}>
      Styled text
    </div>
  );
}`}
        </EuiCodeBlock>
      </EuiPanel>
    </EuiPageTemplate.Section>
  );
}
