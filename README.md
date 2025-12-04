# EUI Hacker theme

A 90s cyberpunk/hacker aesthetic theme for [Elastic UI](https://elastic.github.io/eui/).

Provides Matrix-green neon colors, monospace typography, and optional CRT effects for EUI applications.

Part of a fun project to create the tacky 90s hacker aesthetic and learning EUI themeing system.

Supports both **ESM** and **CommonJS** module formats.

## Installation

```bash
# Using npm
npm install @p1llus/eui-theme-hacker

# Using yarn
yarn add @p1llus/eui-theme-hacker

# Using pnpm
pnpm add @p1llus/eui-theme-hacker
```

### Peer Dependencies

Required peer dependencies:

```bash
npm install @elastic/eui @elastic/eui-theme-common @emotion/react react
```

## Quick Start

```tsx
import { EuiProvider } from '@elastic/eui';
import { Global } from '@emotion/react';
import { EuiThemeHacker, globalHackerStyles } from '@p1llus/eui-theme-hacker';

function App() {
  return (
    <EuiProvider theme={EuiThemeHacker} colorMode="dark">
      <Global styles={globalHackerStyles} />
      <YourApp />
    </EuiProvider>
  );
}
```

See the [package README](packages/@p1llus/eui-theme-hacker/README.md) for full documentation.

## Demo

The demo application includes:

- Color palette viewer with 60+ colors
- Token inspector for browsing 500+ theme tokens
- Typography examples showing font families, scales, and weights
- Animation playground with interactive effects
- Component showcase demonstrating EUI components with the theme
- Sample application with tables and dashboards

```bash
# Clone and run the demo
git clone https://github.com/P1llus/@p1llus/eui-theme-hacker.git
cd @p1llus/eui-theme-hacker
yarn install
yarn dev
```

Visit `http://localhost:5173` after starting the dev server.

## Contributing

Contributions are welcome. Please read the [contributing guidelines](CONTRIBUTING.md) before submitting a PR.