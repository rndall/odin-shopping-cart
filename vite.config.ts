/// <reference types="vitest/config" />
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/testing/setup.ts",
  },
});
