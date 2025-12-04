/** @jsxImportSource @emotion/react */
/**
 * Dashboard Example
 *
 * A realistic dashboard example using only EUI components and theme tokens.
 * No hardcoded styles - everything respects the theme settings.
 */

import {
  EuiAvatar,
  EuiBadge,
  EuiButton,
  EuiButtonEmpty,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiHorizontalRule,
  EuiIcon,
  EuiListGroup,
  EuiListGroupItem,
  EuiPageTemplate,
  EuiPanel,
  EuiProgress,
  EuiSelect,
  EuiSpacer,
  EuiStat,
  EuiText,
  EuiTitle,
  EuiToolTip,
  useEuiTheme,
} from "@elastic/eui";
import { css } from "@emotion/react";
import { useState } from "react";
import { useGlowText } from "../hooks/useThemeStyles";

// Mock data for the dashboard
const SYSTEM_STATS = [
  {
    title: "Active Connections",
    value: "2,847",
    description: "+12% from last hour",
    color: "success" as const,
    icon: "link",
  },
  {
    title: "Data Processed",
    value: "1.2 TB",
    description: "Last 24 hours",
    color: "primary" as const,
    icon: "database",
  },
  {
    title: "Error Rate",
    value: "0.03%",
    description: "Below threshold",
    color: "success" as const,
    icon: "check",
  },
  {
    title: "Latency",
    value: "23ms",
    description: "P99 response time",
    color: "primary" as const,
    icon: "clock",
  },
];

const RECENT_EVENTS = [
  {
    id: 1,
    type: "success",
    message: "Backup completed successfully",
    time: "2 min ago",
    icon: "checkInCircleFilled",
  },
  {
    id: 2,
    type: "warning",
    message: "High memory usage detected on node-03",
    time: "15 min ago",
    icon: "warning",
  },
  {
    id: 3,
    type: "primary",
    message: "New user authenticated: admin@system",
    time: "32 min ago",
    icon: "user",
  },
  {
    id: 4,
    type: "success",
    message: "Security scan completed - no threats found",
    time: "1 hour ago",
    icon: "securitySignalResolved",
  },
  {
    id: 5,
    type: "primary",
    message: "System update available: v2.4.1",
    time: "2 hours ago",
    icon: "package",
  },
];

const ACTIVE_PROCESSES = [
  { name: "nginx", cpu: 12, memory: 256, status: "running" },
  { name: "postgres", cpu: 45, memory: 1024, status: "running" },
  { name: "redis", cpu: 8, memory: 128, status: "running" },
  { name: "elasticsearch", cpu: 67, memory: 2048, status: "warning" },
  { name: "logstash", cpu: 23, memory: 512, status: "running" },
];

const NETWORK_STATS = [
  { label: "Inbound", value: 847, max: 1000, color: "success" as const },
  { label: "Outbound", value: 623, max: 1000, color: "primary" as const },
  { label: "Packets/s", value: 12453, max: 20000, color: "success" as const },
];

export default function Dashboard() {
  const { euiTheme } = useEuiTheme();
  const titleGlow = useGlowText(euiTheme.colors.primary);
  const [timeRange, setTimeRange] = useState("24h");

  const statCardStyle = css`
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px ${euiTheme.colors.primary}40;
    }
  `;

  const eventIconStyle = (color: string) => css`
    color: ${color};
  `;

  return (
    <EuiPageTemplate.Section>
      {/* Header */}
      <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
        <EuiFlexItem grow={false}>
          <EuiTitle size="l">
            <h1 css={titleGlow}>System Dashboard</h1>
          </EuiTitle>
          <EuiText color="subdued" size="s">
            <p>Real-time monitoring and analytics</p>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiFlexGroup gutterSize="s" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiSelect
                options={[
                  { value: "1h", text: "Last hour" },
                  { value: "24h", text: "Last 24 hours" },
                  { value: "7d", text: "Last 7 days" },
                  { value: "30d", text: "Last 30 days" },
                ]}
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                compressed
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton iconType="refresh" size="s">
                Refresh
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="l" />

      {/* Stats Row */}
      <EuiFlexGroup gutterSize="l">
        {SYSTEM_STATS.map((stat) => (
          <EuiFlexItem key={stat.title}>
            <EuiPanel css={statCardStyle} paddingSize="l" hasBorder>
              <EuiFlexGroup alignItems="center" gutterSize="m">
                <EuiFlexItem grow={false}>
                  <EuiIcon type={stat.icon} size="xl" color={stat.color} />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiStat
                    title={stat.value}
                    description={stat.title}
                    titleColor={stat.color}
                    textAlign="left"
                  />
                  <EuiText size="xs" color="subdued">
                    <p>{stat.description}</p>
                  </EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>

      <EuiSpacer size="xl" />

      {/* Main Content Row */}
      <EuiFlexGroup gutterSize="l">
        {/* Network Activity */}
        <EuiFlexItem grow={2}>
          <EuiPanel paddingSize="l" hasBorder>
            <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
              <EuiFlexItem grow={false}>
                <EuiTitle size="s">
                  <h3>Network Activity</h3>
                </EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="success">Live</EuiBadge>
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiSpacer size="l" />

            {NETWORK_STATS.map((stat) => (
              <div key={stat.label}>
                <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
                  <EuiFlexItem grow={false}>
                    <EuiText size="s">
                      <strong>{stat.label}</strong>
                    </EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiText size="s">
                      {stat.value.toLocaleString()} /{" "}
                      {stat.max.toLocaleString()}
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer size="xs" />
                <EuiProgress
                  value={stat.value}
                  max={stat.max}
                  color={stat.color}
                  size="m"
                />
                <EuiSpacer size="m" />
              </div>
            ))}

            <EuiHorizontalRule margin="m" />

            <EuiFlexGroup justifyContent="center">
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty iconType="visArea" size="s">
                  View Detailed Charts
                </EuiButtonEmpty>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>

        {/* Active Processes */}
        <EuiFlexItem grow={2}>
          <EuiPanel paddingSize="l" hasBorder>
            <EuiTitle size="s">
              <h3>Active Processes</h3>
            </EuiTitle>

            <EuiSpacer size="m" />

            {ACTIVE_PROCESSES.map((process) => (
              <div key={process.name}>
                <EuiFlexGroup alignItems="center" gutterSize="m">
                  <EuiFlexItem grow={false}>
                    <EuiHealth
                      color={
                        process.status === "warning" ? "warning" : "success"
                      }
                    >
                      {process.name}
                    </EuiHealth>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiFlexGroup gutterSize="s" alignItems="center">
                      <EuiFlexItem grow={false}>
                        <EuiToolTip content="CPU Usage">
                          <EuiBadge
                            color={process.cpu > 50 ? "warning" : "hollow"}
                          >
                            CPU: {process.cpu}%
                          </EuiBadge>
                        </EuiToolTip>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiToolTip content="Memory Usage">
                          <EuiBadge color="hollow">
                            MEM: {process.memory}MB
                          </EuiBadge>
                        </EuiToolTip>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer size="s" />
              </div>
            ))}

            <EuiHorizontalRule margin="m" />

            <EuiFlexGroup justifyContent="center">
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty iconType="list" size="s">
                  View All Processes
                </EuiButtonEmpty>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>

        {/* Recent Events */}
        <EuiFlexItem grow={2}>
          <EuiPanel paddingSize="l" hasBorder>
            <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
              <EuiFlexItem grow={false}>
                <EuiTitle size="s">
                  <h3>Recent Events</h3>
                </EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge>{RECENT_EVENTS.length}</EuiBadge>
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiSpacer size="m" />

            <EuiListGroup flush>
              {RECENT_EVENTS.map((event) => (
                <EuiListGroupItem
                  key={event.id}
                  icon={
                    <EuiIcon
                      type={event.icon}
                      css={eventIconStyle(
                        event.type === "success"
                          ? euiTheme.colors.success
                          : event.type === "warning"
                          ? euiTheme.colors.warning
                          : euiTheme.colors.primary
                      )}
                    />
                  }
                  label={
                    <div>
                      <EuiText size="s">{event.message}</EuiText>
                      <EuiText size="xs" color="subdued">
                        {event.time}
                      </EuiText>
                    </div>
                  }
                  size="s"
                />
              ))}
            </EuiListGroup>

            <EuiHorizontalRule margin="m" />

            <EuiFlexGroup justifyContent="center">
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty iconType="list" size="s">
                  View All Events
                </EuiButtonEmpty>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />

      {/* Quick Actions */}
      <EuiTitle size="s">
        <h3>Quick Actions</h3>
      </EuiTitle>
      <EuiSpacer size="m" />

      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon type="securityApp" size="xl" color="primary" />}
            title="Security Scan"
            description="Run a full system security scan"
            onClick={() => {}}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon type="save" size="xl" color="success" />}
            title="Create Backup"
            description="Create a system backup snapshot"
            onClick={() => {}}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon type="reportingApp" size="xl" color="accent" />}
            title="Generate Report"
            description="Export system analytics report"
            onClick={() => {}}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon type="gear" size="xl" />}
            title="Settings"
            description="Configure system preferences"
            onClick={() => {}}
          />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />

      {/* Footer Info */}
      <EuiPanel color="subdued" paddingSize="m">
        <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
          <EuiFlexItem grow={false}>
            <EuiFlexGroup alignItems="center" gutterSize="s">
              <EuiFlexItem grow={false}>
                <EuiAvatar size="s" name="System" iconType="compute" />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText size="s">
                  <strong>System Status:</strong> All systems operational
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiText size="xs" color="subdued">
              Last updated: Just now
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </EuiPageTemplate.Section>
  );
}
