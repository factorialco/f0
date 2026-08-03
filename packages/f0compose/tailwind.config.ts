import { baseConfig } from "@factorialco/f0-core/tailwind"
import type { Config } from "tailwindcss"

/**
 * Utilities-only Tailwind pass over f0compose's own source. f0-react ships
 * its pre-compiled CSS (reset + tokens + the utilities *it* uses), but any
 * class a prototype uses that f0-react doesn't (p-[14px], w-[712px],
 * rounded-[10px]…) silently emits nothing. This config generates those,
 * with preflight disabled so f0's reset stays the only reset (see
 * src/styles.css for the original rationale).
 */
export default {
  ...baseConfig,
  content: ["./src/**/*.{ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
} satisfies Config
