import { baseConfig } from "@factorialco/f0-core/tailwind"
import type { Config } from "tailwindcss"

export default {
  ...baseConfig,
  content: ["./src/**/*.{ts,tsx}"],
} satisfies Config
