/** @jsxImportSource @emotion/react */
/**
 * Home Page
 *
 * Landing page with hero section, navigation cards, and feature highlights.
 */

import {
  EuiBadge,
  EuiCard,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiIcon,
  EuiPageTemplate,
  EuiPanel,
  EuiSpacer,
  EuiStat,
  EuiText,
  EuiTitle,
  useEuiTheme,
} from "@elastic/eui";
import { blinkAnimation } from "@p1llus/eui-theme-hacker";
import { css, keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlowText } from "../hooks/useThemeStyles";

// Animations - these are custom effects specific to the home page
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const matrixRain = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

// Navigation cards data
const NAV_CARDS = [
  {
    title: "Dashboard",
    description: "System monitoring dashboard example",
    icon: "visGauge",
    path: "/dashboard",
  },
  {
    title: "Components",
    description: "See example implementations of EUI components",
    icon: "grid",
    path: "/components",
  },
  {
    title: "Animations",
    description: "Interactive animation and effects playground",
    icon: "play",
    path: "/animations",
    badge: "Interactive",
  },
  {
    title: "Color Palette",
    description: "Explore all theme color tokens",
    icon: "color",
    path: "/colors",
    badge: "60+ colors",
  },
  {
    title: "Token Inspector",
    description: "Browse and search all computed theme tokens",
    icon: "inspect",
    path: "/tokens",
    badge: "500+ tokens",
  },
  {
    title: "Typography",
    description: "Font families, scales, and weights",
    icon: "editorHeading",
    path: "/typography",
  },
];

// Matrix rain characters
const MATRIX_CHARS =
  "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

function MatrixRain() {
  const { euiTheme } = useEuiTheme();
  const columns = 15;

  const columnStyle = css`
    position: absolute;
    top: 0;
    font-family: ${euiTheme.font.familyCode};
    font-size: 14px;
    color: ${euiTheme.colors.primary};
    opacity: 0.3;
    animation: ${matrixRain} 8s linear infinite;
    white-space: nowrap;
    pointer-events: none;
  `;

  return (
    <>
      {Array.from({ length: columns }).map((_, i) => (
        <div
          key={i}
          css={[
            columnStyle,
            css`
              left: ${(i / columns) * 100}%;
              animation-delay: ${Math.random() * 5}s;
              animation-duration: ${5 + Math.random() * 5}s;
            `,
          ]}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <div key={j}>
              {MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default function Home() {
  const { euiTheme } = useEuiTheme();
  const navigate = useNavigate();
  const titleGlow = useGlowText(euiTheme.colors.primary);
  const [typedText, setTypedText] = useState("");
  const fullText = "> Initializing 90s Hacker Theme...";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Hero section styles using theme tokens
  const heroSection = css`
    text-align: center;
    padding: ${euiTheme.size.xxxl} ${euiTheme.size.l};
    position: relative;
    overflow: hidden;
    background: radial-gradient(
      ellipse at center,
      ${euiTheme.colors.primary}15 0%,
      transparent 70%
    );
  `;

  const heroTitle = css`
    font-family: ${euiTheme.font.familySerif};
    font-size: 48px;
    font-weight: ${euiTheme.font.weight.bold};
    letter-spacing: 4px;
    margin-bottom: ${euiTheme.size.m};
    animation: ${fadeInUp} 0.8s ease-out;
  `;

  const terminalPrompt = css`
    font-family: ${euiTheme.font.familyCode};
    color: ${euiTheme.colors.primaryText};
    margin-top: ${euiTheme.size.l};
    animation: ${fadeInUp} 0.8s ease-out 0.4s both;

    &::after {
      content: "▋";
      animation: ${blinkAnimation} 1s step-end infinite;
      margin-left: 4px;
    }
  `;

  const sectionTitleStyle = css`
    font-family: ${euiTheme.font.familySerif};
    letter-spacing: 2px;
    text-transform: uppercase;
  `;

  return (
    <EuiPageTemplate.Section>
      {/* Hero Section */}
      <div css={heroSection}>
        <MatrixRain />
        <h1 css={[heroTitle, titleGlow]}>EUI Hacker Theme</h1>
        <EuiFlexGroup justifyContent="center" gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiBadge color="hollow">v{__THEME_VERSION__}</EuiBadge>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiText css={terminalPrompt}>{typedText}</EuiText>
      </div>

      <EuiSpacer size="xxl" />

      {/* Stats - using EuiStat component */}
      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiPanel hasBorder paddingSize="l" style={{ textAlign: "center" }}>
            <EuiStat
              title="500+"
              description="Theme Tokens"
              titleColor="primary"
              titleSize="l"
            />
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel hasBorder paddingSize="l" style={{ textAlign: "center" }}>
            <EuiStat
              title="60+"
              description="Component Tokens"
              titleColor="primary"
              titleSize="l"
            />
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel hasBorder paddingSize="l" style={{ textAlign: "center" }}>
            <EuiStat
              title="10+"
              description="CSS Utilities"
              titleColor="primary"
              titleSize="l"
            />
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel hasBorder paddingSize="l" style={{ textAlign: "center" }}>
            <EuiStat
              title="4"
              description="Animations"
              titleColor="primary"
              titleSize="l"
            />
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xxl" />
      <EuiHorizontalRule />
      <EuiSpacer size="xxl" />

      {/* Navigation Cards */}
      <EuiTitle size="xs">
        <h2 css={sectionTitleStyle}>Explore the Theme</h2>
      </EuiTitle>
      <EuiSpacer size="l" />

      <EuiFlexGroup gutterSize="l" wrap>
        {NAV_CARDS.map((card) => (
          <EuiFlexItem
            key={card.path}
            grow={1}
            css={css`
              min-width: 280px;
              max-width: 400px;
              flex-basis: 30%;
            `}
          >
            <EuiCard
              icon={<EuiIcon type={card.icon} size="xl" color="primary" />}
              title={card.title}
              description={card.description}
              onClick={() => navigate(card.path)}
              paddingSize="l"
              css={css`
                height: 100%;
                transition: transform 0.2s ease, box-shadow 0.2s ease;
                &:hover {
                  transform: translateY(-4px);
                  box-shadow: 0 0 20px ${euiTheme.colors.primary}30;
                }
              `}
              footer={
                card.badge ? (
                  <EuiBadge color="hollow">{card.badge}</EuiBadge>
                ) : undefined
              }
            />
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>

      <EuiSpacer size="xxl" />
      <EuiHorizontalRule />
      <EuiSpacer size="xxl" />

      {/* Quick Start */}
      <EuiTitle size="xs">
        <h2 css={sectionTitleStyle}>Quick Start</h2>
      </EuiTitle>
      <EuiSpacer size="l" />

      <EuiFlexGroup>
        <EuiFlexItem grow={2}>
          <EuiCodeBlock language="tsx" fontSize="m" paddingSize="l" isCopyable>
            {`// Install from npm
npm install @p1llus/eui-theme-hacker
// or with yarn
yarn add @p1llus/eui-theme-hacker

// Use with EuiProvider
import { EuiProvider } from '@elastic/eui';
import { EuiThemeHacker, globalHackerStyles } from '@p1llus/eui-theme-hacker';
import { Global } from '@emotion/react';

function App() {
  return (
    <EuiProvider theme={EuiThemeHacker} colorMode="dark">
      <Global styles={globalHackerStyles} />
      <YourApp />
    </EuiProvider>
  );
}`}
          </EuiCodeBlock>
        </EuiFlexItem>

        <EuiFlexItem grow={1}>
          <EuiPanel paddingSize="l" hasBorder>
            <EuiTitle size="s">
              <h3>What's Included</h3>
            </EuiTitle>
            <EuiSpacer size="m" />
            <EuiText size="s">
              <ul>
                <li>Complete theme token coverage</li>
                <li>Matrix-green color palette</li>
                <li>Monospace typography</li>
                <li>Glow effects for buttons & forms</li>
                <li>Screen effects (scanlines, curvature)</li>
                <li>CSS-in-JS utilities</li>
                <li>Full TypeScript support</li>
              </ul>
            </EuiText>
            <EuiSpacer size="m" />
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xxl" />
    </EuiPageTemplate.Section>
  );
}
