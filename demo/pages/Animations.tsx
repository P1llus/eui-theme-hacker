/** @jsxImportSource @emotion/react */
/**
 * Animation Playground
 *
 * Interactive showcase of all hacker theme animations and effects.
 * This page demonstrates the theme's CSS-in-JS utilities.
 */

import {
  EuiBadge,
  EuiButton,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiHorizontalRule,
  EuiPageTemplate,
  EuiPanel,
  EuiRange,
  EuiSpacer,
  EuiSwitch,
  EuiText,
  EuiTitle,
  useEuiTheme,
} from "@elastic/eui";
import {
  PRIMITIVE_COLORS,
  blinkAnimation,
  crtCurvature,
  glitchAnimation,
  glowBorder,
  glowText,
  pulseAnimation,
  pulsingIndicator,
  scanlineEffect,
  terminalCard,
  typeAnimation,
  typingCursor,
} from "@p1llus/eui-theme-hacker";
import { css } from "@emotion/react";
import { useState } from "react";
import { useGlowText } from "../hooks/useThemeStyles";

/**
 * Reusable demo card for animations and CSS utilities.
 * Uses EUI components with minimal custom styling.
 */
const DemoCard = ({
  title,
  exportName,
  children,
  code,
}: {
  title: string;
  exportName: string;
  children: React.ReactNode;
  code: string;
}) => (
  <EuiFlexItem style={{ minWidth: 200 }}>
    <EuiPanel
      paddingSize="l"
      hasBorder
      style={{ textAlign: "center", minHeight: 140 }}
    >
      <EuiFlexGroup
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ height: "100%" }}
      >
        <EuiFlexItem grow={false}>{children}</EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText size="xs" color="subdued">
            {title}
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiText size="xs">{exportName}</EuiText>
    </EuiPanel>
    <EuiSpacer size="s" />

    <EuiCodeBlock
      language="tsx"
      fontSize="s"
      paddingSize="s"
      whiteSpace="pre-wrap"
    >
      {code}
    </EuiCodeBlock>
  </EuiFlexItem>
);

export default function Animations() {
  const { euiTheme } = useEuiTheme();
  const titleGlow = useGlowText(euiTheme.colors.primary);

  const [glowIntensity, setGlowIntensity] = useState(1);
  const [glowColor, setGlowColor] = useState<string>(PRIMITIVE_COLORS.green100);
  const [showScanlines, setShowScanlines] = useState(false);
  const [showCurvature, setShowCurvature] = useState(false);

  // Dynamic glow style for the interactive demo
  const dynamicGlow = css`
    color: ${glowColor};
    text-shadow: 0 0 ${5 * glowIntensity}px ${glowColor},
      0 0 ${10 * glowIntensity}px ${glowColor},
      0 0 ${20 * glowIntensity}px ${glowColor};
    font-size: 24px;
    font-family: ${euiTheme.font.familySerif};
  `;

  // Section title style using theme tokens
  const sectionTitleStyle = css`
    font-family: ${euiTheme.font.familySerif};
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${euiTheme.colors.primaryText};
  `;

  return (
    <EuiPageTemplate.Section
      css={css`
        ${showScanlines ? scanlineEffect : ""}
        ${showCurvature ? crtCurvature : ""}
      `}
    >
      <EuiTitle size="l">
        <h1 css={titleGlow}>Animation Playground</h1>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText color="subdued">
        <p>Interactive demos of all hacker theme animations and effects.</p>
      </EuiText>

      <EuiSpacer size="xl" />

      {/* Keyframe Animations */}
      <EuiTitle size="xs">
        <h2 css={sectionTitleStyle}>Keyframe Animations</h2>
      </EuiTitle>
      <EuiSpacer size="m" />

      <EuiFlexGroup gutterSize="l" wrap>
        <DemoCard
          title="Blink Animation"
          exportName="blinkAnimation"
          code={`animation: \${blinkAnimation} 1s step-end infinite`}
        >
          <span
            css={css`
              font-size: 32px;
              animation: ${blinkAnimation} 1s step-end infinite;
            `}
          >
            ▋
          </span>
        </DemoCard>

        <DemoCard
          title="Pulse Animation"
          exportName="pulseAnimation"
          code={`animation: \${pulseAnimation} 2s ease-in-out infinite`}
        >
          <div
            css={css`
              width: 60px;
              height: 60px;
              background: ${euiTheme.colors.primary};
              border-radius: 50%;
              animation: ${pulseAnimation} 2s ease-in-out infinite;
            `}
          />
        </DemoCard>

        <DemoCard
          title="Glitch Animation"
          exportName="glitchAnimation"
          code={`animation: \${glitchAnimation} 0.3s ease infinite`}
        >
          <span
            css={css`
              font-size: 24px;
              font-family: ${euiTheme.font.familySerif};
              color: ${euiTheme.colors.primary};
              &:hover {
                animation: ${glitchAnimation} 0.3s ease infinite;
              }
            `}
          >
            HOVER ME
          </span>
        </DemoCard>

        <DemoCard
          title="Type Animation"
          exportName="typeAnimation"
          code={`animation: \${typeAnimation} 2s steps(20) forwards`}
        >
          <span
            css={css`
              font-family: ${euiTheme.font.familyCode};
              font-size: 16px;
              color: ${euiTheme.colors.primary};
              overflow: hidden;
              white-space: nowrap;
              animation: ${typeAnimation} 2s steps(20) forwards;
              border-right: 2px solid ${euiTheme.colors.primary};
            `}
          >
            System initialized...
          </span>
        </DemoCard>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />
      <EuiHorizontalRule />
      <EuiSpacer size="xl" />

      {/* CSS Utilities */}
      <EuiTitle size="xs">
        <h2 css={sectionTitleStyle}>CSS-in-JS Utilities</h2>
      </EuiTitle>
      <EuiSpacer size="m" />

      <EuiFlexGroup gutterSize="l" wrap>
        <DemoCard
          title="Glowing Text"
          exportName="glowText()"
          code={`css\`\${glowText(euiTheme.colors.primary)}\``}
        >
          <span
            css={[
              glowText(euiTheme.colors.primary),
              css`
                font-size: 24px;
              `,
            ]}
          >
            Glowing Text
          </span>
        </DemoCard>

        <DemoCard
          title="Glowing Border"
          exportName="glowBorder()"
          code={`css\`\${glowBorder(euiTheme.colors.primary)}\``}
        >
          <div
            css={[
              glowBorder(euiTheme.colors.primary),
              css`
                padding: 16px 24px;
                border: 2px solid;
                border-radius: 4px;
                display: inline-block;
              `,
            ]}
          >
            Glowing Border
          </div>
        </DemoCard>

        <DemoCard
          title="Typing Cursor"
          exportName="typingCursor"
          code={`css\`\${typingCursor}\``}
        >
          <span
            css={[
              typingCursor,
              css`
                font-size: 18px;
                color: ${euiTheme.colors.primary};
              `,
            ]}
          >
            Typing cursor
          </span>
        </DemoCard>

        <DemoCard
          title="Pulsing Indicator"
          exportName="pulsingIndicator"
          code={`css\`\${pulsingIndicator}\``}
        >
          <div
            css={[
              pulsingIndicator,
              css`
                width: 16px;
                height: 16px;
                background: ${euiTheme.colors.primary};
                border-radius: 50%;
              `,
            ]}
          />
        </DemoCard>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />
      <EuiHorizontalRule />
      <EuiSpacer size="xl" />

      {/* Terminal Card */}
      <EuiTitle size="xs">
        <h2 css={sectionTitleStyle}>Terminal Card</h2>
      </EuiTitle>
      <EuiSpacer size="m" />

      <EuiPanel
        paddingSize="l"
        css={[
          terminalCard,
          css`
            padding-top: 40px;
          `,
        ]}
      >
        <EuiText
          css={css`
            font-family: ${euiTheme.font.familyCode};
          `}
        >
          <pre>{`$ whoami
hacker

$ cat /etc/motd
Welcome to the Matrix.
The system is ready.

$ _`}</pre>
        </EuiText>
      </EuiPanel>
      <EuiSpacer size="s" />
      <EuiText size="xs">
        <code>terminalCard</code>
      </EuiText>
      <EuiSpacer size="xs" />
      <EuiCodeBlock language="tsx" fontSize="s" paddingSize="s">
        {`css\`\${terminalCard}\``}
      </EuiCodeBlock>

      <EuiSpacer size="xl" />
      <EuiHorizontalRule />
      <EuiSpacer size="xl" />

      {/* Interactive Glow */}
      <EuiTitle size="xs">
        <h2 css={sectionTitleStyle}>Interactive Glow Effect</h2>
      </EuiTitle>
      <EuiSpacer size="m" />

      <EuiFlexGroup>
        <EuiFlexItem grow={2}>
          <EuiPanel paddingSize="l" hasBorder>
            <div
              css={css`
                text-align: center;
                padding: 40px 0;
              `}
            >
              <span css={dynamicGlow}>GLOW INTENSITY</span>
            </div>
          </EuiPanel>
        </EuiFlexItem>

        <EuiFlexItem grow={1}>
          <EuiPanel paddingSize="l" hasBorder>
            <EuiFormRow label="Intensity">
              <EuiRange
                min={0}
                max={3}
                step={0.1}
                value={glowIntensity}
                onChange={(e) =>
                  setGlowIntensity(parseFloat(e.currentTarget.value))
                }
                showValue
              />
            </EuiFormRow>

            <EuiSpacer size="m" />

            <EuiFormRow label="Color">
              <EuiFlexGroup gutterSize="s" wrap>
                {[
                  { color: PRIMITIVE_COLORS.green100, name: "Green" },
                  { color: PRIMITIVE_COLORS.blue100, name: "Cyan" },
                  { color: PRIMITIVE_COLORS.purple100, name: "Purple" },
                  { color: PRIMITIVE_COLORS.red80, name: "Red" },
                  { color: PRIMITIVE_COLORS.amber100, name: "Amber" },
                ].map(({ color, name }) => (
                  <EuiFlexItem key={name} grow={false}>
                    <EuiButton
                      size="s"
                      onClick={() => setGlowColor(color)}
                      fill={glowColor === color}
                      css={css`
                        background-color: ${glowColor === color
                          ? color
                          : "transparent"};
                        border-color: ${color};
                        color: ${glowColor === color
                          ? PRIMITIVE_COLORS.black
                          : color};
                      `}
                    >
                      {name}
                    </EuiButton>
                  </EuiFlexItem>
                ))}
              </EuiFlexGroup>
            </EuiFormRow>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />
      <EuiHorizontalRule />
      <EuiSpacer size="xl" />

      {/* CRT Effects */}
      <EuiFlexGroup alignItems="center" gutterSize="s">
        <EuiFlexItem grow={false}>
          <EuiTitle size="xs">
            <h2 css={sectionTitleStyle}>CRT Effects</h2>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiBadge color="warning">Experimental</EuiBadge>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="s" />
      <EuiText size="s" color="subdued">
        <p>Toggle CRT monitor effects on this page</p>
      </EuiText>
      <EuiSpacer size="m" />

      <EuiFlexGroup>
        <EuiFlexItem grow={false}>
          <EuiSwitch
            label="Scanlines"
            checked={showScanlines}
            onChange={(e) => setShowScanlines(e.target.checked)}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSwitch
            label="Screen Curvature"
            checked={showCurvature}
            onChange={(e) => setShowCurvature(e.target.checked)}
          />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="m" />
      <EuiCodeBlock language="tsx" fontSize="s" paddingSize="m">
        {`// Apply to body or container
css\`\${scanlineEffect}\`
css\`\${crtCurvature}\``}
      </EuiCodeBlock>

      <EuiSpacer size="xl" />

      {/* Usage Example */}
      <EuiPanel paddingSize="m" color="subdued">
        <EuiText size="s">
          <strong>Usage:</strong>
        </EuiText>
        <EuiSpacer size="s" />
        <EuiCodeBlock language="tsx" fontSize="s" paddingSize="m" isCopyable>
          {`import {
  blinkAnimation,
  pulseAnimation,
  glitchAnimation,
  typeAnimation,
  glowText,
  glowBorder,
  typingCursor,
  pulsingIndicator,
  terminalCard,
  scanlineEffect,
  crtCurvature,
} from '@p1llus/eui-theme-hacker';`}
        </EuiCodeBlock>
      </EuiPanel>
    </EuiPageTemplate.Section>
  );
}
