/**
 * Icon Registration
 *
 * Registers the icons we use in the demo app.
 * EUI requires explicit icon registration for tree-shaking.
 */

import { appendIconComponentCache } from "@elastic/eui/es/components/icon/icon";

// Import icons we use
import { icon as EuiIconAlert } from "@elastic/eui/es/components/icon/assets/alert";
import { icon as EuiIconDashboardApp } from "@elastic/eui/es/components/icon/assets/app_dashboard";
import { icon as EuiIconReportingApp } from "@elastic/eui/es/components/icon/assets/app_reporting";
import { icon as EuiIconSecurityApp } from "@elastic/eui/es/components/icon/assets/app_security";
import { icon as EuiIconApps } from "@elastic/eui/es/components/icon/assets/apps";
import { icon as EuiIconArrowDown } from "@elastic/eui/es/components/icon/assets/arrow_down";
import { icon as EuiIconArrowLeft } from "@elastic/eui/es/components/icon/assets/arrow_left";
import { icon as EuiIconArrowRight } from "@elastic/eui/es/components/icon/assets/arrow_right";
import { icon as EuiIconArrowUp } from "@elastic/eui/es/components/icon/assets/arrow_up";
import { icon as EuiIconCheck } from "@elastic/eui/es/components/icon/assets/check";
import { icon as EuiIconCheckInCircleFilled } from "@elastic/eui/es/components/icon/assets/checkInCircleFilled";
import { icon as EuiIconClock } from "@elastic/eui/es/components/icon/assets/clock";
import { icon as EuiIconColor } from "@elastic/eui/es/components/icon/assets/color";
import { icon as EuiIconCompute } from "@elastic/eui/es/components/icon/assets/compute";
import { icon as EuiIconCopyClipboard } from "@elastic/eui/es/components/icon/assets/copy_clipboard";
import { icon as EuiIconCross } from "@elastic/eui/es/components/icon/assets/cross";
import { icon as EuiIconDatabase } from "@elastic/eui/es/components/icon/assets/database";
import { icon as EuiIconDocumentation } from "@elastic/eui/es/components/icon/assets/documentation";
import { icon as EuiIconDocumentEdit } from "@elastic/eui/es/components/icon/assets/documentEdit";
import { icon as EuiIconDocuments } from "@elastic/eui/es/components/icon/assets/documents";
import { icon as EuiIconDot } from "@elastic/eui/es/components/icon/assets/dot";
import { icon as EuiIconDownload } from "@elastic/eui/es/components/icon/assets/download";
import { icon as EuiIconEditorHeading } from "@elastic/eui/es/components/icon/assets/editor_heading";
import { icon as EuiIconEmpty } from "@elastic/eui/es/components/icon/assets/empty";
import { icon as EuiIconEye } from "@elastic/eui/es/components/icon/assets/eye";
import { icon as EuiIconFaceHappy } from "@elastic/eui/es/components/icon/assets/face_happy";
import { icon as EuiIconFlask } from "@elastic/eui/es/components/icon/assets/flask";
import { icon as EuiIconGear } from "@elastic/eui/es/components/icon/assets/gear";
import { icon as EuiIconGrid } from "@elastic/eui/es/components/icon/assets/grid";
import { icon as EuiIconHeart } from "@elastic/eui/es/components/icon/assets/heart";
import { icon as EuiIconHome } from "@elastic/eui/es/components/icon/assets/home";
import { icon as EuiIconInspect } from "@elastic/eui/es/components/icon/assets/inspect";
import { icon as EuiIconLink } from "@elastic/eui/es/components/icon/assets/link";
import { icon as EuiIconList } from "@elastic/eui/es/components/icon/assets/list";
import { icon as EuiIconLock } from "@elastic/eui/es/components/icon/assets/lock";
import { icon as EuiIconLogoElastic } from "@elastic/eui/es/components/icon/assets/logo_elastic";
import { icon as EuiIconMenu } from "@elastic/eui/es/components/icon/assets/menu";
import { icon as EuiIconMinus } from "@elastic/eui/es/components/icon/assets/minus";
import { icon as EuiIconPackage } from "@elastic/eui/es/components/icon/assets/package";
import { icon as EuiIconPalette } from "@elastic/eui/es/components/icon/assets/palette";
import { icon as EuiIconPlay } from "@elastic/eui/es/components/icon/assets/play";
import { icon as EuiIconPlus } from "@elastic/eui/es/components/icon/assets/plus";
import { icon as EuiIconRefresh } from "@elastic/eui/es/components/icon/assets/refresh";
import { icon as EuiIconSave } from "@elastic/eui/es/components/icon/assets/save";
import { icon as EuiIconSearch } from "@elastic/eui/es/components/icon/assets/search";
import { icon as EuiIconSecuritySignalResolved } from "@elastic/eui/es/components/icon/assets/securitySignalResolved";
import { icon as EuiIconSortDown } from "@elastic/eui/es/components/icon/assets/sort_down";
import { icon as EuiIconSortUp } from "@elastic/eui/es/components/icon/assets/sort_up";
import { icon as EuiIconSortable } from "@elastic/eui/es/components/icon/assets/sortable";
import { icon as EuiIconStopFilled } from "@elastic/eui/es/components/icon/assets/stop_filled";
import { icon as EuiIconTableDensityNormal } from "@elastic/eui/es/components/icon/assets/table_density_normal";
import { icon as EuiIconUser } from "@elastic/eui/es/components/icon/assets/user";
import { icon as EuiIconVisArea } from "@elastic/eui/es/components/icon/assets/vis_area";
import { icon as EuiIconVisGauge } from "@elastic/eui/es/components/icon/assets/vis_gauge";
import { icon as EuiIconWarning } from "@elastic/eui/es/components/icon/assets/warning";
import { icon as EuiIconWrench } from "@elastic/eui/es/components/icon/assets/wrench";

// Register all icons
appendIconComponentCache({
  play: EuiIconPlay,
  check: EuiIconCheck,
  cross: EuiIconCross,
  warning: EuiIconWarning,
  empty: EuiIconEmpty,
  user: EuiIconUser,
  dot: EuiIconDot,
  arrowRight: EuiIconArrowRight,
  arrowDown: EuiIconArrowDown,
  gear: EuiIconGear,
  lock: EuiIconLock,
  search: EuiIconSearch,
  heart: EuiIconHeart,
  plus: EuiIconPlus,
  minus: EuiIconMinus,
  alert: EuiIconAlert,
  faceHappy: EuiIconFaceHappy,
  menu: EuiIconMenu,
  home: EuiIconHome,
  apps: EuiIconApps,
  grid: EuiIconGrid,
  beaker: EuiIconFlask,
  dashboardApp: EuiIconDashboardApp,
  tableDensityNormal: EuiIconTableDensityNormal,
  documentation: EuiIconDocumentation,
  documentEdit: EuiIconDocumentEdit,
  palette: EuiIconPalette,
  wrench: EuiIconWrench,
  stopFilled: EuiIconStopFilled,
  logoElastic: EuiIconLogoElastic,
  color: EuiIconColor,
  editorHeading: EuiIconEditorHeading,
  refresh: EuiIconRefresh,
  copyClipboard: EuiIconCopyClipboard,
  inspect: EuiIconInspect,
  link: EuiIconLink,
  database: EuiIconDatabase,
  clock: EuiIconClock,
  checkInCircleFilled: EuiIconCheckInCircleFilled,
  securitySignalResolved: EuiIconSecuritySignalResolved,
  package: EuiIconPackage,
  visArea: EuiIconVisArea,
  list: EuiIconList,
  securityApp: EuiIconSecurityApp,
  save: EuiIconSave,
  reportingApp: EuiIconReportingApp,
  compute: EuiIconCompute,
  documents: EuiIconDocuments,
  download: EuiIconDownload,
  eye: EuiIconEye,
  sortUp: EuiIconSortUp,
  sortDown: EuiIconSortDown,
  arrowUp: EuiIconArrowUp,
  arrowLeft: EuiIconArrowLeft,
  sortable: EuiIconSortable,
  visGauge: EuiIconVisGauge,
});
