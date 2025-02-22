import type { Config } from "tailwindcss";
import baseConfig from "@onchainkit/ui/tailwind.config";

const config = {
  ...baseConfig,
  content: [
    "src/components/**/*.{ts,tsx}",
    "../../packages/ui/src/components/**/*.{ts,tsx}",
  ],
} satisfies Config;

export default config;
