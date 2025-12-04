/** @jsxImportSource @emotion/react */
/**
 * Component Showcase Page
 *
 * Comprehensive showcase of EUI components with the 90s Hacker Theme.
 */

import {
  EuiBadge,
  EuiButton,
  EuiButtonEmpty,
  EuiButtonGroup,
  EuiButtonIcon,
  EuiCallOut,
  EuiCard,
  EuiCheckbox,
  EuiCode,
  EuiCodeBlock,
  EuiDescriptionList,
  EuiEmptyPrompt,
  EuiFieldNumber,
  EuiFieldPassword,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
  EuiHealth,
  EuiLink,
  EuiListGroup,
  EuiListGroupItem,
  EuiLoadingSpinner,
  EuiPageTemplate,
  EuiPanel,
  EuiProgress,
  EuiRadioGroup,
  EuiRange,
  EuiSelect,
  EuiSpacer,
  EuiStat,
  EuiSwitch,
  EuiTab,
  EuiTable,
  EuiTableBody,
  EuiTableHeader,
  EuiTableHeaderCell,
  EuiTableRow,
  EuiTableRowCell,
  EuiTabs,
  EuiText,
  EuiTextArea,
  EuiTitle,
  EuiToast,
  useEuiTheme,
} from "@elastic/eui";
import { blinkAnimation, terminalCard } from "@p1llus/eui-theme-hacker";
import { css } from "@emotion/react";
import { useState } from "react";
import { useGlowText } from "../hooks/useThemeStyles";

export function ComponentShowcase() {
  const { euiTheme } = useEuiTheme();
  const titleGlow = useGlowText(euiTheme.colors.primary);

  const sectionTitleStyle = css`
    font-family: ${euiTheme.font.familySerif};
    letter-spacing: 2px;
    text-transform: uppercase;
  `;

  const [selectedTab, setSelectedTab] = useState("overview");
  const [switchValue, setSwitch] = useState(false);
  const [checkboxValue, setCheckbox] = useState(false);
  const [radioValue, setRadio] = useState("option1");
  const [rangeValue, setRangeValue] = useState(50);
  const [buttonGroupValue, setButtonGroup] = useState("btn1");

  const tabs = [
    { id: "overview", name: "Overview" },
    { id: "buttons", name: "Buttons" },
    { id: "forms", name: "Forms" },
    { id: "data", name: "Data Display" },
    { id: "feedback", name: "Feedback" },
  ];

  const buttonGroupOptions = [
    { id: "btn1", label: "Option 1" },
    { id: "btn2", label: "Option 2" },
    { id: "btn3", label: "Option 3" },
  ];

  const radioOptions = [
    { id: "option1", label: "First Option" },
    { id: "option2", label: "Second Option" },
    { id: "option3", label: "Third Option" },
  ];

  const tableItems = [
    { id: 1, name: "root", access: "Admin", status: "active" },
    { id: 2, name: "guest", access: "Read", status: "active" },
    { id: 3, name: "system", access: "System", status: "locked" },
  ];

  const renderOverview = () => (
    <>
      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiPanel
            css={css`
              ${terminalCard}
              padding: ${euiTheme.size.l};
              padding-top: ${euiTheme.size.xxl};
            `}
          >
            <EuiTitle css={sectionTitleStyle} size="s">
              <h3>System Status</h3>
            </EuiTitle>
            <EuiSpacer />
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiStat
                  title="99.9%"
                  description="Uptime"
                  titleColor="primary"
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiStat
                  title="1,337"
                  description="Active Connections"
                  titleColor="success"
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiStat title="42" description="Alerts" titleColor="danger" />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel>
            <EuiTitle css={sectionTitleStyle} size="s">
              <h3>Quick Actions</h3>
            </EuiTitle>
            <EuiSpacer />
            <EuiListGroup flush>
              <EuiListGroupItem
                iconType="play"
                label="Initialize System"
                onClick={() => {}}
              />
              <EuiListGroupItem
                iconType="search"
                label="Scan Network"
                onClick={() => {}}
              />
              <EuiListGroupItem
                iconType="lock"
                label="Enable Firewall"
                onClick={() => {}}
              />
              <EuiListGroupItem
                iconType="gear"
                label="System Configuration"
                onClick={() => {}}
              />
            </EuiListGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />

      <EuiPanel>
        <EuiTitle css={sectionTitleStyle} size="s">
          <h3>Terminal Output</h3>
        </EuiTitle>
        <EuiSpacer />
        <EuiCodeBlock language="bash" paddingSize="m">
          {`$ whoami
hacker@matrix:~
$ ls -la /home/hacker
drwxr-xr-x  5 hacker hacker  4096 Dec  3 00:00 .
drwxr-xr-x  3 root   root    4096 Jan  1 00:00 ..
-rw-------  1 hacker hacker  1337 Dec  3 00:00 .bash_history
drwx------  2 hacker hacker  4096 Dec  3 00:00 .ssh
drwxr-xr-x  3 hacker hacker  4096 Dec  3 00:00 exploits
$ echo "Access Granted"
Access Granted`}
        </EuiCodeBlock>
      </EuiPanel>

      <EuiSpacer size="xl" />

      <EuiFlexGroup>
        <EuiFlexItem grow={2}>
          <EuiCard
            title="Access Level"
            description="Root privileges enabled. Full system access granted."
            footer={<EuiBadge color="primary">SUDO</EuiBadge>}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            title="Encryption"
            description="AES-256 encryption active on all channels."
            footer={<EuiBadge color="success">SECURE</EuiBadge>}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            title="Alerts"
            description="3 new security events detected."
            footer={<EuiBadge color="danger">ATTENTION</EuiBadge>}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );

  const renderButtons = () => (
    <>
      <EuiPanel>
        <EuiTitle css={sectionTitleStyle} size="s">
          <h3>Primary Buttons</h3>
        </EuiTitle>
        <EuiSpacer />
        <EuiFlexGroup gutterSize="m" wrap>
          <EuiFlexItem grow={false}>
            <EuiButton fill>Execute</EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton fill iconType="play">
              Run Script
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton fill isLoading>
              Processing...
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton fill isDisabled>
              Locked
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>

      <EuiSpacer />

      <EuiPanel>
        <EuiTitle css={sectionTitleStyle} size="s">
          <h3>Button Variants</h3>
        </EuiTitle>
        <EuiSpacer />
        <EuiFlexGroup gutterSize="m" wrap>
          <EuiFlexItem grow={false}>
            <EuiButton>Default</EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton color="success">Success</EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton color="warning">Warning</EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton color="danger">Danger</EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton color="accent">Accent</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer />

        <EuiFlexGroup gutterSize="m" wrap>
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty>Empty Button</EuiButtonEmpty>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty color="danger">Empty Danger</EuiButtonEmpty>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButtonIcon iconType="gear" aria-label="Settings" />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButtonIcon iconType="heart" aria-label="Like" color="danger" />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>

      <EuiSpacer />

      <EuiPanel>
        <EuiTitle css={sectionTitleStyle} size="s">
          <h3>Button Groups</h3>
        </EuiTitle>
        <EuiSpacer />
        <EuiButtonGroup
          legend="Select an option"
          options={buttonGroupOptions}
          idSelected={buttonGroupValue}
          onChange={(id) => setButtonGroup(id)}
        />
      </EuiPanel>
    </>
  );

  const renderForms = () => (
    <>
      <EuiPanel>
        <EuiTitle css={sectionTitleStyle} size="s">
          <h3>Login Terminal</h3>
        </EuiTitle>
        <EuiSpacer />
        <EuiForm component="form">
          <EuiFormRow label="Username">
            <EuiFieldText placeholder="Enter username" icon="user" />
          </EuiFormRow>
          <EuiFormRow label="Password">
            <EuiFieldPassword placeholder="Enter password" />
          </EuiFormRow>
          <EuiFormRow label="Port Number">
            <EuiFieldNumber placeholder="22" min={1} max={65535} />
          </EuiFormRow>
          <EuiFormRow label="Connection Type">
            <EuiSelect
              options={[
                { value: "ssh", text: "SSH" },
                { value: "telnet", text: "Telnet" },
                { value: "rdp", text: "RDP" },
              ]}
            />
          </EuiFormRow>
          <EuiFormRow label="Command">
            <EuiTextArea placeholder="Enter commands..." rows={3} />
          </EuiFormRow>
          <EuiSpacer />
          <EuiButton fill type="submit">
            Connect
          </EuiButton>
        </EuiForm>
      </EuiPanel>

      <EuiSpacer />

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiPanel>
            <EuiTitle css={sectionTitleStyle} size="s">
              <h3>Toggles</h3>
            </EuiTitle>
            <EuiSpacer />
            <EuiFormRow>
              <EuiSwitch
                label="Enable Stealth Mode"
                checked={switchValue}
                onChange={(e) => setSwitch(e.target.checked)}
              />
            </EuiFormRow>
            <EuiFormRow>
              <EuiCheckbox
                id="checkbox1"
                label="Accept Terms & Conditions"
                checked={checkboxValue}
                onChange={(e) => setCheckbox(e.target.checked)}
              />
            </EuiFormRow>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel>
            <EuiTitle css={sectionTitleStyle} size="s">
              <h3>Protocol Selection</h3>
            </EuiTitle>
            <EuiSpacer />
            <EuiRadioGroup
              options={radioOptions}
              idSelected={radioValue}
              onChange={(id) => setRadio(id)}
            />
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer />

      <EuiPanel>
        <EuiTitle css={sectionTitleStyle} size="s">
          <h3>Power Level</h3>
        </EuiTitle>
        <EuiSpacer />
        <EuiRange
          min={0}
          max={100}
          value={rangeValue}
          onChange={(e) => setRangeValue(parseInt(e.currentTarget.value))}
          showLabels
          showValue
        />
      </EuiPanel>
    </>
  );

  const renderData = () => (
    <>
      <EuiPanel>
        <EuiTitle css={sectionTitleStyle} size="s">
          <h3>User Database</h3>
        </EuiTitle>
        <EuiSpacer />
        <EuiTable>
          <EuiTableHeader>
            <EuiTableHeaderCell>ID</EuiTableHeaderCell>
            <EuiTableHeaderCell>Username</EuiTableHeaderCell>
            <EuiTableHeaderCell>Access Level</EuiTableHeaderCell>
            <EuiTableHeaderCell>Status</EuiTableHeaderCell>
          </EuiTableHeader>
          <EuiTableBody>
            {tableItems.map((item) => (
              <EuiTableRow key={item.id}>
                <EuiTableRowCell>{item.id}</EuiTableRowCell>
                <EuiTableRowCell>
                  <EuiCode>{item.name}</EuiCode>
                </EuiTableRowCell>
                <EuiTableRowCell>{item.access}</EuiTableRowCell>
                <EuiTableRowCell>
                  <EuiHealth
                    color={item.status === "active" ? "success" : "warning"}
                  >
                    {item.status}
                  </EuiHealth>
                </EuiTableRowCell>
              </EuiTableRow>
            ))}
          </EuiTableBody>
        </EuiTable>
      </EuiPanel>

      <EuiSpacer />

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiPanel>
            <EuiTitle css={sectionTitleStyle} size="s">
              <h3>Badges</h3>
            </EuiTitle>
            <EuiSpacer />
            <EuiFlexGroup wrap gutterSize="s">
              <EuiFlexItem grow={false}>
                <EuiBadge>Default</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">Primary</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="success">Success</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="warning">Warning</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="danger">Danger</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="hollow">Hollow</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color={euiTheme.colors.accent}>Custom</EuiBadge>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel>
            <EuiTitle css={sectionTitleStyle} size="s">
              <h3>System Info</h3>
            </EuiTitle>
            <EuiSpacer />
            <EuiDescriptionList
              type="column"
              listItems={[
                { title: "Hostname", description: "matrix-01" },
                { title: "IP Address", description: "192.168.1.337" },
                { title: "Kernel", description: "5.15.0-hacker" },
                { title: "Uptime", description: "1337 days" },
              ]}
            />
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer />

      <EuiPanel>
        <EuiTitle css={sectionTitleStyle} size="s">
          <h3>Progress Indicators</h3>
        </EuiTitle>
        <EuiSpacer />
        <EuiText size="s">Download Progress</EuiText>
        <EuiProgress value={75} max={100} size="m" />
        <EuiSpacer size="m" />
        <EuiText size="s">Upload Progress</EuiText>
        <EuiProgress value={33} max={100} size="m" color="accent" />
        <EuiSpacer size="m" />
        <EuiText size="s">Scan Progress</EuiText>
        <EuiProgress size="m" color="success" />
      </EuiPanel>
    </>
  );

  const renderFeedback = () => (
    <>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiCallOut title="System Notice" color="primary" iconType="user">
            <p>New user detected on network segment 42.</p>
          </EuiCallOut>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer />

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiCallOut
            title="Connection Established"
            color="success"
            iconType="check"
          >
            <p>SSH tunnel successfully opened to remote server.</p>
          </EuiCallOut>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer />

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiCallOut title="Security Warning" color="warning" iconType="alert">
            <p>Unusual login attempt detected from IP 192.168.1.666</p>
          </EuiCallOut>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer />

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiCallOut title="Access Denied" color="danger" iconType="cross">
            <p>Authentication failed. 3 attempts remaining.</p>
          </EuiCallOut>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer />

      <EuiPanel>
        <EuiTitle css={sectionTitleStyle} size="s">
          <h3>Toast Notifications</h3>
        </EuiTitle>
        <EuiSpacer />
        <EuiFlexGroup direction="column" gutterSize="m">
          <EuiFlexItem>
            <EuiToast
              title="Script Executed"
              color="success"
              onClose={() => {}}
            >
              <p>exploit.sh completed successfully</p>
            </EuiToast>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiToast title="Connection Lost" color="danger" onClose={() => {}}>
              <p>Reconnecting to server...</p>
            </EuiToast>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>

      <EuiSpacer />

      <EuiPanel>
        <EuiTitle css={sectionTitleStyle} size="s">
          <h3>Loading States</h3>
        </EuiTitle>
        <EuiSpacer />
        <EuiFlexGroup alignItems="center" gutterSize="xl">
          <EuiFlexItem grow={false}>
            <EuiLoadingSpinner size="s" />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiLoadingSpinner size="m" />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiLoadingSpinner size="l" />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiLoadingSpinner size="xl" />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>

      <EuiSpacer />

      <EuiEmptyPrompt
        iconType="faceHappy"
        title={<h2>No Active Threats</h2>}
        body={
          <p>
            All systems are secure. No intrusions detected in the last 24 hours.
          </p>
        }
        actions={<EuiButton fill>Run Full Scan</EuiButton>}
      />
    </>
  );

  const renderContent = () => {
    switch (selectedTab) {
      case "buttons":
        return renderButtons();
      case "forms":
        return renderForms();
      case "data":
        return renderData();
      case "feedback":
        return renderFeedback();
      default:
        return renderOverview();
    }
  };

  return (
    <EuiPageTemplate.Section>
      <EuiTitle size="l">
        <h1 css={titleGlow}>
          Component Showcase{" "}
          <span
            css={css`
              animation: ${blinkAnimation} 1s step-end infinite;
            `}
          >
            ▋
          </span>
        </h1>
      </EuiTitle>
      <EuiText color="subdued">
        <p>
          A comprehensive demo of EUI components with the 90s Hacker Theme.
          <EuiLink href="#"> Learn more</EuiLink>
        </p>
      </EuiText>

      <EuiSpacer size="xl" />

      <EuiTabs>
        {tabs.map((tab) => (
          <EuiTab
            key={tab.id}
            isSelected={selectedTab === tab.id}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.name}
          </EuiTab>
        ))}
      </EuiTabs>

      <EuiSpacer size="xl" />

      {renderContent()}
    </EuiPageTemplate.Section>
  );
}

export default ComponentShowcase;
