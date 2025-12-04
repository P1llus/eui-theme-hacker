# Contributing to eui-theme-hacker

## Development Setup

1. Clone the repository
2. Run `yarn install` to install dependencies
3. Make modifications to the theme in the `packages/eui-theme-hacker/src` directory
4. Run `yarn build` to build the theme
5. Run `yarn dev` to start the development server
6. Visit `http://localhost:5173` to see the demo application

More information about the project is in progress...

## Project Structure

```
eui-theme-hacker/
├── packages/
│   └── eui-theme-hacker/           # Theme package (published to npm)
│       ├── src/
│       │   ├── variables/          # EUI theme tokens
│       │   │   ├── colors/         # Color definitions
│       │   │   │   ├── _primitive_colors.ts   # Raw color values (greens, purples, etc.)
│       │   │   │   ├── _semantic_colors.ts    # Semantic mappings (primary, danger, etc.)
│       │   │   │   ├── _colors_dark.ts        # Dark mode color palette
│       │   │   │   ├── _colors_light.ts       # Light mode color palette
│       │   │   │   ├── _colors_vis.ts         # Data visualization colors
│       │   │   │   └── _colors_severity.ts    # Severity/status colors
│       │   │   ├── _animation.ts   # Animation timing and easing
│       │   │   ├── _borders.ts     # Border radius and styles
│       │   │   ├── _breakpoint.ts  # Responsive breakpoints
│       │   │   ├── _buttons.ts     # Button-specific tokens
│       │   │   ├── _components.ts  # Component-level overrides
│       │   │   ├── _focus.ts       # Focus ring styles
│       │   │   ├── _forms.ts       # Form element tokens
│       │   │   ├── _levels.ts      # Z-index levels
│       │   │   ├── _shadows.ts     # Box shadow definitions
│       │   │   ├── _size.ts        # Spacing scale
│       │   │   └── _typography.ts  # Font families and scales
│       │   ├── global/
│       │   │   └── effects.ts      # CSS-in-JS utilities (glowText, scanlines, etc.)
│       │   └── index.ts            # Package exports
│       └── lib/                    # Build output
│           ├── esm/                # ES modules build
│           └── cjs/                # CommonJS build
│
├── demo/                           # Interactive demo application
│   ├── components/
│   │   ├── Layout.tsx              # Main app shell with header and nav
│   │   ├── DynamicStyles.tsx       # Runtime style toggling for demos
│   │   └── SettingsPanel.tsx       # Theme customization panel
│   ├── context/
│   │   ├── DemoSettingsContext.tsx # React context for demo state
│   │   └── types.ts                # TypeScript types for settings
│   ├── hooks/
│   │   ├── useBreadcrumbs.ts       # Navigation breadcrumb generation
│   │   ├── useDemoSettings.ts      # Access demo settings context
│   │   └── useThemeStyles.ts       # Theme-aware style utilities
│   ├── pages/
│   │   ├── Home.tsx                # Landing page with theme overview
│   │   ├── ColorPalette.tsx        # Interactive color explorer
│   │   ├── TokenInspector.tsx      # Browse all 500+ theme tokens
│   │   ├── Typography.tsx          # Font family and scale demos
│   │   ├── Animations.tsx          # CRT effects playground
│   │   ├── ComponentShowcase.tsx   # EUI components with theme
│   │   ├── Dashboard.tsx           # Example dashboard layout
│   │   └── DataTable.tsx           # Example data table
│   ├── types/
│   │   └── declarations.d.ts       # TypeScript declarations
│   ├── App.tsx                     # Route definitions
│   ├── main.tsx                    # React entry point
│   └── vite.config.ts              # Vite configuration
│
└── package.json                    # Workspace root
```
