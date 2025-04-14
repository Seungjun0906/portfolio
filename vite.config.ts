import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), vanillaExtractPlugin(), tsConfigPaths()],
});
