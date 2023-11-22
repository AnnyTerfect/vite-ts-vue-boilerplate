import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      cache: false,
      include: ["src/**/*.vue", "src/**/*.ts"],
      exclude: ["node_modules", "dist", ".git", ".vscode", "public"],
    }),
    checker({ typescript: true, vueTsc: true }),
  ],
});
