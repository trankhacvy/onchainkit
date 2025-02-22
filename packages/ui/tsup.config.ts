import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/components/**.tsx", "src/hooks/**.ts", "src/lib/**.ts"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react"],
  ...options,
}));
