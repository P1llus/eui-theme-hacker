/** @jsxImportSource @emotion/react */
/**
 * Data Table Example
 *
 * A realistic data table example using EuiBasicTable and theme tokens.
 * Demonstrates sorting, selection, pagination, and actions.
 */

import {
  EuiBadge,
  EuiBasicTable,
  EuiButton,
  EuiButtonEmpty,
  EuiCallOut,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiIcon,
  EuiLink,
  EuiPageTemplate,
  EuiPanel,
  EuiSelect,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiToolTip,
  useEuiTheme,
  type CriteriaWithPagination,
  type EuiBasicTableColumn,
  type EuiTableSelectionType,
} from "@elastic/eui";
import { useMemo, useState } from "react";
import { useGlowText } from "../hooks/useThemeStyles";

// Types
interface NetworkEvent {
  id: string;
  timestamp: string;
  source: string;
  destination: string;
  protocol: string;
  port: number;
  bytes: number;
  status: "success" | "warning" | "danger";
  action: "allow" | "block" | "monitor";
  country: string;
}

// Mock data generator
const generateMockData = (count: number): NetworkEvent[] => {
  const protocols = ["TCP", "UDP", "HTTP", "HTTPS", "SSH", "FTP"];
  const statuses: NetworkEvent["status"][] = ["success", "warning", "danger"];
  const actions: NetworkEvent["action"][] = ["allow", "block", "monitor"];
  const countries = [
    "US",
    "DE",
    "JP",
    "BR",
    "AU",
    "GB",
    "FR",
    "CN",
    "IN",
    "CA",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `evt-${1000 + i}`,
    timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(),
    source: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(
      Math.random() * 255
    )}`,
    destination: `10.0.${Math.floor(Math.random() * 255)}.${Math.floor(
      Math.random() * 255
    )}`,
    protocol: protocols[Math.floor(Math.random() * protocols.length)],
    port: [22, 80, 443, 3306, 5432, 8080][Math.floor(Math.random() * 6)],
    bytes: Math.floor(Math.random() * 1000000),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    action: actions[Math.floor(Math.random() * actions.length)],
    country: countries[Math.floor(Math.random() * countries.length)],
  }));
};

const MOCK_DATA = generateMockData(100);

export default function DataTable() {
  const { euiTheme } = useEuiTheme();
  const titleGlow = useGlowText(euiTheme.colors.primary);

  // State
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState<keyof NetworkEvent>("timestamp");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [selectedItems, setSelectedItems] = useState<NetworkEvent[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filtered and sorted data
  const filteredData = useMemo(() => {
    let data = [...MOCK_DATA];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      data = data.filter(
        (item) =>
          item.source.includes(query) ||
          item.destination.includes(query) ||
          item.protocol.toLowerCase().includes(query) ||
          item.id.toLowerCase().includes(query)
      );
    }

    // Apply status filter
    if (statusFilter !== "all") {
      data = data.filter((item) => item.status === statusFilter);
    }

    // Apply sorting
    data.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

    return data;
  }, [searchQuery, statusFilter, sortField, sortDirection]);

  // Paginated data
  const pageOfItems = useMemo(() => {
    const startIndex = pageIndex * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, pageIndex, pageSize]);

  // Format bytes
  const formatBytes = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  // Format timestamp
  const formatTimestamp = (iso: string): string => {
    const date = new Date(iso);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Table columns
  const columns: EuiBasicTableColumn<NetworkEvent>[] = [
    {
      field: "id",
      name: "Event ID",
      sortable: true,
      width: "100px",
      render: (id: string) => <EuiLink onClick={() => {}}>{id}</EuiLink>,
    },
    {
      field: "timestamp",
      name: "Time",
      sortable: true,
      width: "100px",
      render: (timestamp: string) => (
        <EuiToolTip content={new Date(timestamp).toLocaleString()}>
          <span>{formatTimestamp(timestamp)}</span>
        </EuiToolTip>
      ),
    },
    {
      field: "source",
      name: "Source IP",
      sortable: true,
      render: (source: string) => (
        <code style={{ fontFamily: euiTheme.font.familyCode }}>{source}</code>
      ),
    },
    {
      field: "destination",
      name: "Destination IP",
      sortable: true,
      render: (dest: string) => (
        <code style={{ fontFamily: euiTheme.font.familyCode }}>{dest}</code>
      ),
    },
    {
      field: "protocol",
      name: "Protocol",
      sortable: true,
      width: "90px",
      render: (protocol: string) => (
        <EuiBadge color="hollow">{protocol}</EuiBadge>
      ),
    },
    {
      field: "port",
      name: "Port",
      sortable: true,
      width: "70px",
      align: "right",
    },
    {
      field: "bytes",
      name: "Size",
      sortable: true,
      width: "90px",
      align: "right",
      render: (bytes: number) => formatBytes(bytes),
    },
    {
      field: "country",
      name: "Country",
      sortable: true,
      width: "80px",
      render: (country: string) => (
        <EuiToolTip content={country}>
          <EuiBadge color="hollow">{country}</EuiBadge>
        </EuiToolTip>
      ),
    },
    {
      field: "status",
      name: "Status",
      sortable: true,
      width: "100px",
      render: (status: NetworkEvent["status"]) => (
        <EuiHealth color={status}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </EuiHealth>
      ),
    },
    {
      field: "action",
      name: "Action",
      sortable: true,
      width: "90px",
      render: (action: NetworkEvent["action"]) => {
        const colors: Record<NetworkEvent["action"], string> = {
          allow: "success",
          block: "danger",
          monitor: "warning",
        };
        return (
          <EuiBadge color={colors[action]}>{action.toUpperCase()}</EuiBadge>
        );
      },
    },
    {
      name: "Actions",
      width: "80px",
      actions: [
        {
          name: "View",
          description: "View event details",
          icon: "eye",
          type: "icon",
          onClick: () => {},
        },
        {
          name: "Block",
          description: "Block this IP",
          icon: "cross",
          type: "icon",
          color: "danger",
          onClick: () => {},
        },
      ],
    },
  ];

  // Pagination config
  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount: filteredData.length,
    pageSizeOptions: [10, 25, 50, 100],
  };

  // Sorting config
  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection,
    },
  };

  // Selection config
  const selection: EuiTableSelectionType<NetworkEvent> = {
    selectable: () => true,
    onSelectionChange: setSelectedItems,
  };

  // Handle table change
  const onTableChange = ({
    page,
    sort,
  }: CriteriaWithPagination<NetworkEvent>) => {
    if (page) {
      setPageIndex(page.index);
      setPageSize(page.size);
    }
    if (sort) {
      setSortField(sort.field as keyof NetworkEvent);
      setSortDirection(sort.direction);
    }
  };

  // Stats
  const stats = useMemo(
    () => ({
      total: MOCK_DATA.length,
      success: MOCK_DATA.filter((i) => i.status === "success").length,
      warning: MOCK_DATA.filter((i) => i.status === "warning").length,
      danger: MOCK_DATA.filter((i) => i.status === "danger").length,
    }),
    []
  );

  return (
    <EuiPageTemplate.Section>
      {/* Header */}
      <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
        <EuiFlexItem grow={false}>
          <EuiTitle size="l">
            <h1 css={titleGlow}>Network Events</h1>
          </EuiTitle>
          <EuiText color="subdued" size="s">
            <p>Monitor and analyze network traffic in real-time</p>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton fill iconType="download">
            Export CSV
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="l" />

      {/* Stats Bar */}
      <EuiFlexGroup gutterSize="m">
        <EuiFlexItem>
          <EuiPanel paddingSize="m" hasBorder>
            <EuiFlexGroup alignItems="center" gutterSize="s">
              <EuiFlexItem grow={false}>
                <EuiIcon type="documents" size="l" />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size="s">
                  <strong>Total Events</strong>
                </EuiText>
                <EuiTitle size="s">
                  <h3>{stats.total.toLocaleString()}</h3>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel paddingSize="m" hasBorder>
            <EuiFlexGroup alignItems="center" gutterSize="s">
              <EuiFlexItem grow={false}>
                <EuiHealth color="success" />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size="s">
                  <strong>Success</strong>
                </EuiText>
                <EuiTitle size="s">
                  <h3>{stats.success.toLocaleString()}</h3>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel paddingSize="m" hasBorder>
            <EuiFlexGroup alignItems="center" gutterSize="s">
              <EuiFlexItem grow={false}>
                <EuiHealth color="warning" />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size="s">
                  <strong>Warning</strong>
                </EuiText>
                <EuiTitle size="s">
                  <h3>{stats.warning.toLocaleString()}</h3>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel paddingSize="m" hasBorder>
            <EuiFlexGroup alignItems="center" gutterSize="s">
              <EuiFlexItem grow={false}>
                <EuiHealth color="danger" />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size="s">
                  <strong>Blocked</strong>
                </EuiText>
                <EuiTitle size="s">
                  <h3>{stats.danger.toLocaleString()}</h3>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="l" />

      {/* Filters */}
      <EuiPanel paddingSize="m" hasBorder>
        <EuiFlexGroup alignItems="center" gutterSize="m">
          <EuiFlexItem grow={2}>
            <EuiFieldSearch
              placeholder="Search by IP, protocol, or event ID..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPageIndex(0);
              }}
              isClearable
              fullWidth
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiSelect
              options={[
                { value: "all", text: "All Statuses" },
                { value: "success", text: "Success" },
                { value: "warning", text: "Warning" },
                { value: "danger", text: "Danger" },
              ]}
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPageIndex(0);
              }}
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty
              iconType="refresh"
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
                setPageIndex(0);
              }}
            >
              Reset
            </EuiButtonEmpty>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>

      <EuiSpacer size="m" />

      {/* Selection Actions */}
      {selectedItems.length > 0 && (
        <>
          <EuiCallOut
            title={`${selectedItems.length} events selected`}
            color="primary"
            iconType="check"
            size="s"
          >
            <EuiFlexGroup gutterSize="s">
              <EuiFlexItem grow={false}>
                <EuiButton size="s" color="danger">
                  Block Selected IPs
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButton size="s">Export Selected</EuiButton>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty size="s" onClick={() => setSelectedItems([])}>
                  Clear Selection
                </EuiButtonEmpty>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiCallOut>
          <EuiSpacer size="m" />
        </>
      )}

      {/* Table */}
      <EuiBasicTable
        items={pageOfItems}
        columns={columns}
        pagination={pagination}
        sorting={sorting}
        selection={selection}
        onChange={onTableChange}
        itemId="id"
      />

      <EuiSpacer size="m" />

      {/* Footer */}
      <EuiText size="xs" color="subdued" textAlign="center">
        <p>
          Showing {pageOfItems.length} of {filteredData.length} events
          {searchQuery && ` (filtered from ${MOCK_DATA.length} total)`}
        </p>
      </EuiText>
    </EuiPageTemplate.Section>
  );
}
