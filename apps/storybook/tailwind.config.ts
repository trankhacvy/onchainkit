import type { Config } from "tailwindcss";
import sharedConfig from "@onchainkit/ui/tailwind.config";

const config = {
  ...sharedConfig,
  content: [
    "src/stories/**.tsx",
    "../../packages/ui/src/components/**/*.{ts,tsx}",
    "../../packages/onchainkit/src/components/**/*.{ts,tsx}",
  ],
} satisfies Config;

export default config;
