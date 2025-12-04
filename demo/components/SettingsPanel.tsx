/** @jsxImportSource @emotion/react */
/**
 * Settings Panel
 *
 * A collapsible right-side panel for adjusting demo settings in real-time.
 */

import {
  EuiBadge,
  EuiButtonEmpty,
  EuiButtonGroup,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiFormRow,
  EuiHorizontalRule,
  EuiSpacer,
  EuiSwitch,
  EuiText,
  EuiTitle,
  EuiToolTip,
} from "@elastic/eui";
import { PRIMITIVE_COLORS, glowText } from "@p1llus/eui-theme-hacker";
import { css } from "@emotion/react";
import type { GlobalStylesMode } from "../context/DemoSettingsContext";
import { useDemoSettings } from "../hooks/useDemoSettings";

const panelHeader = css`
  ${glowText(PRIMITIVE_COLORS.green100)}
  font-family: 'Orbitron', monospace;
  letter-spacing: 2px;
`;

const sectionLabel = css`
  color: ${PRIMITIVE_COLORS.green80};
  font-family: "Fira Code", monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

const experimentalBadge = css`
  margin-left: 8px;
`;

export function SettingsPanel() {
  const {
    settingsPanelOpen,
    setSettingsPanelOpen,
    globalStylesMode,
    setGlobalStylesMode,
    showGlowEffects,
    setShowGlowEffects,
    showGradientBackground,
    setShowGradientBackground,
    showCustomScrollbar,
    setShowCustomScrollbar,
    showSelectionStyles,
    setShowSelectionStyles,
    showScanlines,
    setShowScanlines,
    showCrtCurvature,
    setShowCrtCurvature,
    resetToDefaults,
  } = useDemoSettings();

  if (!settingsPanelOpen) {
    return null;
  }

  const globalStylesOptions = [
    { id: "full", label: "Full" },
    { id: "minimal", label: "Minimal" },
    { id: "none", label: "None" },
  ];

  return (
    <EuiFlyout
      ownFocus={false}
      onClose={() => setSettingsPanelOpen(false)}
      size="s"
      aria-labelledby="settingsPanelTitle"
      paddingSize="m"
    >
      <EuiFlyoutHeader hasBorder>
        <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
          <EuiFlexItem grow={false}>
            <EuiTitle size="s">
              <h2 id="settingsPanelTitle" css={panelHeader}>
                ⚙ Theme Settings
              </h2>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty
              size="xs"
              onClick={resetToDefaults}
              iconType="refresh"
            >
              Reset
            </EuiButtonEmpty>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlyoutHeader>

      <EuiFlyoutBody>
        {/* Global Styles Mode */}
        <div css={sectionLabel}>Global Styles Bundle</div>
        <EuiFormRow helpText="Controls which global style bundle is applied">
          <EuiButtonGroup
            legend="Global styles mode"
            options={globalStylesOptions}
            idSelected={globalStylesMode}
            onChange={(id) => setGlobalStylesMode(id as GlobalStylesMode)}
            buttonSize="compressed"
            isFullWidth
          />
        </EuiFormRow>

        <EuiSpacer size="l" />
        <EuiHorizontalRule margin="none" />
        <EuiSpacer size="l" />

        {/* Visual Effects */}
        <div css={sectionLabel}>Visual Effects</div>

        <EuiFormRow>
          <EuiSwitch
            label="Glow effects"
            checked={showGlowEffects}
            onChange={(e) => setShowGlowEffects(e.target.checked)}
            compressed
          />
        </EuiFormRow>
        <EuiText size="xs" color="subdued">
          <p>Neon glow on buttons, cards, and forms</p>
        </EuiText>

        <EuiSpacer size="m" />

        <EuiFormRow>
          <EuiSwitch
            label="Gradient background"
            checked={showGradientBackground}
            onChange={(e) => setShowGradientBackground(e.target.checked)}
            compressed
          />
        </EuiFormRow>
        <EuiText size="xs" color="subdued">
          <p>Subtle green/purple radial gradients</p>
        </EuiText>

        <EuiSpacer size="m" />

        <EuiFormRow>
          <EuiSwitch
            label="Custom scrollbar"
            checked={showCustomScrollbar}
            onChange={(e) => setShowCustomScrollbar(e.target.checked)}
            compressed
          />
        </EuiFormRow>

        <EuiSpacer size="m" />

        <EuiFormRow>
          <EuiSwitch
            label="Selection styling"
            checked={showSelectionStyles}
            onChange={(e) => setShowSelectionStyles(e.target.checked)}
            compressed
          />
        </EuiFormRow>
        <EuiText size="xs" color="subdued">
          <p>Green highlight on text selection</p>
        </EuiText>

        <EuiSpacer size="l" />
        <EuiHorizontalRule margin="none" />
        <EuiSpacer size="l" />

        {/* CRT Effects */}
        <div css={sectionLabel}>
          CRT Effects
          <EuiToolTip content="Retro CRT monitor effects - may impact performance">
            <EuiBadge color="warning" css={experimentalBadge}>
              Experimental
            </EuiBadge>
          </EuiToolTip>
        </div>

        <EuiFormRow>
          <EuiSwitch
            label="Scanlines"
            checked={showScanlines}
            onChange={(e) => setShowScanlines(e.target.checked)}
            compressed
          />
        </EuiFormRow>
        <EuiText size="xs" color="subdued">
          <p>Classic CRT horizontal scanlines overlay</p>
        </EuiText>

        <EuiSpacer size="m" />

        <EuiFormRow>
          <EuiSwitch
            label="Screen curvature"
            checked={showCrtCurvature}
            onChange={(e) => setShowCrtCurvature(e.target.checked)}
            compressed
          />
        </EuiFormRow>
        <EuiText size="xs" color="subdued">
          <p>Vignette effect simulating curved CRT screen</p>
        </EuiText>

        <EuiSpacer size="xl" />

        {/* Current Config Summary */}
        <div css={sectionLabel}>Current Configuration</div>
        <EuiText size="xs">
          <pre
            css={css`
              background: ${PRIMITIVE_COLORS.black};
              padding: 12px;
              border-radius: 4px;
              border: 1px solid ${PRIMITIVE_COLORS.green40};
              overflow-x: auto;
              font-family: "Fira Code", monospace;
              font-size: 10px;
              color: ${PRIMITIVE_COLORS.green80};
            `}
          >
            {`{
  globalStylesMode: "${globalStylesMode}",
  glowEffects: ${showGlowEffects},
  gradientBg: ${showGradientBackground},
  scrollbar: ${showCustomScrollbar},
  selection: ${showSelectionStyles},
  scanlines: ${showScanlines},
  crtCurve: ${showCrtCurvature}
}`}
          </pre>
        </EuiText>
      </EuiFlyoutBody>
    </EuiFlyout>
  );
}
