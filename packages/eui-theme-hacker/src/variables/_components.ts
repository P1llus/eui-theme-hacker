/**
 * 90s Hacker Theme - Component Colors
 * 
 * Component-specific color tokens for EUI components.
 * These provide granular control over individual component appearances.
 */

import type {
  _EuiThemeComponentColors,
  _EuiThemeComponents,
} from '@elastic/eui-theme-common';

import { SEMANTIC_COLORS } from './colors/_semantic_colors';
import { PRIMITIVE_COLORS } from './colors/_primitive_colors';
import { dark_background_colors, dark_border_colors } from './colors/_colors_dark';
import { border_colors } from './colors/_colors_light';
import { buttons } from './_buttons';
import { forms } from './_forms';

/**
 * Component colors for dark mode
 */
const dark_component_colors: _EuiThemeComponentColors = {
  // Badges
  badgeBackground: SEMANTIC_COLORS.shade120,
  badgeBackgroundSubdued: SEMANTIC_COLORS.shade120,
  badgeBorderColorHollow: SEMANTIC_COLORS.primary60,
  badgeIconButtonBackgroundHover: SEMANTIC_COLORS.plainLightAlpha8,

  // Breadcrumbs
  breadcrumbsApplicationBackground: SEMANTIC_COLORS.shade120,
  breadcrumbsApplicationColor: SEMANTIC_COLORS.shade55,

  // Bottom bar
  bottomBarBackground: SEMANTIC_COLORS.plainDark,

  // Button group
  buttonGroupBackgroundDisabledSelected: SEMANTIC_COLORS.shade130,
  buttonGroupBorderColor: SEMANTIC_COLORS.shade100,
  buttonGroupBorderColorSelected: SEMANTIC_COLORS.primary60,
  buttonGroupFocusColor: SEMANTIC_COLORS.plainDark,

  // Code blocks - terminal aesthetic
  codeBackground: PRIMITIVE_COLORS.black,
  codeBackgroundSelected: 'inherit',
  codeColor: SEMANTIC_COLORS.primary100,
  codeInlineBackground: SEMANTIC_COLORS.shade135,
  codeInlineColor: SEMANTIC_COLORS.primary100,
  codeCommentColor: SEMANTIC_COLORS.shade55,
  codeSelectorColor: 'inherit',
  codeStringColor: SEMANTIC_COLORS.warning100,
  codeTagColor: SEMANTIC_COLORS.accentSecondary100,
  codeNameColor: SEMANTIC_COLORS.accentSecondary100,
  codeNumberColor: SEMANTIC_COLORS.accent100,
  codeInlineCodeKeywordColor: SEMANTIC_COLORS.primary100,
  codeKeywordColor: SEMANTIC_COLORS.accent100,
  codeFunctionTitleColor: SEMANTIC_COLORS.accentSecondary100,
  codeTypeColor: SEMANTIC_COLORS.accentSecondary100,
  codeAttributeColor: SEMANTIC_COLORS.warning100,
  codeSymbolColor: SEMANTIC_COLORS.danger80,
  codeParamsColor: 'inherit',
  codeMetaColor: SEMANTIC_COLORS.shade55,
  codeTitleColor: SEMANTIC_COLORS.warning100,
  codeSectionColor: SEMANTIC_COLORS.danger80,
  codeAdditionColor: SEMANTIC_COLORS.success80,
  codeDeletionColor: SEMANTIC_COLORS.danger80,
  codeSelectorClassColor: 'inherit',
  codeSelectorIdColor: 'inherit',

  // Collapsible nav
  collapsibleNavGroupBackground: SEMANTIC_COLORS.shade145,
  collapsibleNavGroupBackgroundDark: dark_background_colors.backgroundBaseSubdued,

  // Data grid
  dataGridBorderColor: SEMANTIC_COLORS.shade100,
  dataGridVerticalLineBorderColor: SEMANTIC_COLORS.shade100,
  dataGridRowBackground: SEMANTIC_COLORS.shade145,
  dataGridRowBackgroundHover: SEMANTIC_COLORS.plainLightAlpha8,
  dataGridRowBackgroundSelect: SEMANTIC_COLORS.primary130,
  dataGridRowBackgroundSelectHover: SEMANTIC_COLORS.primary120,
  dataGridRowBackgroundMarked: SEMANTIC_COLORS.warning140,
  dataGridRowBackgroundMarkedHover: SEMANTIC_COLORS.warning130,
  dataGridRowBorderActive: SEMANTIC_COLORS.primary100,
  dataGridRowBorderHover: SEMANTIC_COLORS.shade60,
  dataGridRowBorderMarked: SEMANTIC_COLORS.warning40,
  dataGridRowStripesBackground: SEMANTIC_COLORS.shade145,
  dataGridRowStripesBackgroundHover: SEMANTIC_COLORS.shade130,
  dataGridRowStripesBackgroundStriped: SEMANTIC_COLORS.shade135,
  dataGridRowStripesBackgroundStripedHover: SEMANTIC_COLORS.shade130,
  dataGridRowStripesBackgroundSelect: SEMANTIC_COLORS.primary130,
  dataGridRowStripesBackgroundSelectHover: SEMANTIC_COLORS.primary120,

  // Drag and drop
  dragDropDraggingBackground: SEMANTIC_COLORS.success140,
  dragDropDraggingOverBackground: SEMANTIC_COLORS.success130,

  // Filter button
  filterButtonBadgeBackgroundHover: SEMANTIC_COLORS.shade105,

  // Filter select
  filterSelectItemBackgroundFocusDisabled: SEMANTIC_COLORS.shade130,

  // Flyout
  flyoutFooterBackground: SEMANTIC_COLORS.shade135,
  flyoutCloseButtonInsideBackground: SEMANTIC_COLORS.shade145,

  // Header
  headerBackground: SEMANTIC_COLORS.shade145,
  headerDarkBackground: dark_background_colors.backgroundBasePlain,
  headerDarkSearchBorderColor: dark_border_colors.borderBasePlain,
  headerDarkSectionItemBackgroundFocus: dark_background_colors.backgroundBasePrimary,

  // List group
  listGroupItemBackgroundPrimaryActive: SEMANTIC_COLORS.primary130,
  listGroupItemBackgroundSubduedActive: SEMANTIC_COLORS.primary130,
  listGroupItemBackgroundHover: SEMANTIC_COLORS.plainLightAlpha8,
  listGroupItemBackgroundPrimaryHover: SEMANTIC_COLORS.plainLightAlpha8,

  // Loading
  loadingSpinnerBorder: dark_border_colors.borderBasePlain,
  loadingSpinnerHighlight: SEMANTIC_COLORS.primary100,
  loadingChartMonoBackground0: SEMANTIC_COLORS.shade110,
  loadingChartMonoBackground1: SEMANTIC_COLORS.shade100,
  loadingChartMonoBackground2: SEMANTIC_COLORS.shade90,
  loadingChartMonoBackground3: SEMANTIC_COLORS.shade80,

  // Mark (highlight)
  markBackground: SEMANTIC_COLORS.primary130,

  // Markdown
  markdownFormatTableBorderColor: SEMANTIC_COLORS.shade100,

  // Overlay
  overlayMaskBackground: SEMANTIC_COLORS.shade120Alpha70,
  overlayMaskBackgroundHighContrast: `rgba(${SEMANTIC_COLORS.shade140RGB}, 0.9)`,

  // Popover
  popoverPanelBackground: SEMANTIC_COLORS.shade145,
  popoverFooterBorderColor: SEMANTIC_COLORS.shade120,

  // Scrollbar
  scrollbarTrackColor: SEMANTIC_COLORS.shade145,

  // Side nav
  sideNavItemEmphasizedBackground: SEMANTIC_COLORS.primary130,

  // Selectable list
  selectableListItemBorderColor: SEMANTIC_COLORS.shade120,

  // Skeleton
  skeletonBackgroundSkeletonMiddleHighContrast: `rgba(${SEMANTIC_COLORS.plainLightRGB}, 0.3)`,

  // Super date picker
  superDatePickerBackgroundSuccees: SEMANTIC_COLORS.success140,

  // Switch
  switchBackgroundOn: SEMANTIC_COLORS.primary60,
  switchBackgroundOff: SEMANTIC_COLORS.shade60,
  switchUncompressedBackgroundDisabled: SEMANTIC_COLORS.shade130,
  switchCompressedBackgroundDisabled: SEMANTIC_COLORS.shade130,
  switchMiniBackgroundDisabled: SEMANTIC_COLORS.shade130,
  switchThumbBackgroundDisabled: SEMANTIC_COLORS.shade145,
  switchThumbBorderOn: SEMANTIC_COLORS.primary60,
  switchThumbBorderOff: SEMANTIC_COLORS.shade60,
  switchIconDisabled: forms.DARK.iconDisabled,

  // Table
  tableRowBackgroundHover: SEMANTIC_COLORS.plainLightAlpha8,
  tableRowBackgroundSelected: SEMANTIC_COLORS.primary130,
  tableRowBackgroundSelectedHover: SEMANTIC_COLORS.primary120,
  tableRowInteractiveBackgroundHover: SEMANTIC_COLORS.plainLightAlpha8,
  tableRowInteractiveBackgroundFocus: SEMANTIC_COLORS.plainLightAlpha8,
  tableRowBackgroundMarked: SEMANTIC_COLORS.warning140,
  tableRowBackgroundMarkedHover: SEMANTIC_COLORS.warning130,
  tableCellSortableIconColor: SEMANTIC_COLORS.shade60,
  tableFooterBackground: SEMANTIC_COLORS.shade135,

  // Tooltip
  tooltipBackground: dark_background_colors.backgroundBaseSubdued,
  tooltipBorder: dark_border_colors.borderBaseSubdued,
  tooltipBorderFloating: SEMANTIC_COLORS.primary60,

  // Tour
  tourFooterBackground: SEMANTIC_COLORS.shade135,

  // Tree view
  treeViewItemBackgroundHover: SEMANTIC_COLORS.plainLightAlpha8,
};

/**
 * Component colors for light mode (uses dark values for hacker theme)
 */
const light_component_colors: _EuiThemeComponentColors = {
  ...dark_component_colors,
  // Override specific tokens that need to be different in light mode
  buttonGroupFocusColor: SEMANTIC_COLORS.plainLight,
  switchIconDisabled: forms.LIGHT.iconDisabled,
  loadingSpinnerBorder: border_colors.borderBasePlain,
};

/**
 * Complete components configuration
 */
export const components: _EuiThemeComponents = {
  buttons,
  forms,
  LIGHT: light_component_colors,
  DARK: dark_component_colors,
};
