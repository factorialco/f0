import type { Config } from "tailwindcss"

import { baseConfig } from "@factorialco/f0-core/tailwind"

export default {
  ...baseConfig,
  content: ["./src/**/*.{ts,tsx}", "../react/src/**/*.{ts,tsx}"],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
    },
  },
} satisfies Config
