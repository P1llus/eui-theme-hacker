import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
import path from "path";
import { defineConfig } from "vite";

// Read version from theme package
const themePackageJson = JSON.parse(
  readFileSync(
    path.resolve(__dirname, "../packages/eui-theme-hacker/package.json"),
    "utf-8"
  )
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  // For GitHub Pages deployment under /eui-theme-hacker/
  base: "/eui-theme-hacker/",
  define: {
    __THEME_VERSION__: JSON.stringify(themePackageJson.version),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimize deps for EUI
  optimizeDeps: {
    include: ["@elastic/eui", "@emotion/react", "@emotion/css"],
  },
  build: {
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large vendor libraries
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-eui": ["@elastic/eui"],
          "vendor-emotion": ["@emotion/react", "@emotion/css"],
        },
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
  },
});
