import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactDocgenTypescript from "@joshwooding/vite-plugin-react-docgen-typescript";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), reactDocgenTypescript()],
});
