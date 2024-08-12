// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@internal/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],

  presets: [sharedConfig],
};

export default config;
