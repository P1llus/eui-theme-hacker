import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  outDir: "lib",
  // Externalize peer dependencies
  external: [
    "@elastic/eui",
    "@elastic/eui-theme-common",
    "@emotion/react",
    "react",
  ],
});
