import { writeFileSync } from "fs"
import { join } from "path"
import { baseColors, f1Colors } from "../src/tokens/colors"
import { absoluteSpacing, betweenSpacing, relativeSpacing } from "../src/tokens/spacing"
import { borderRadius } from "../src/tokens/borderRadius"
import { breakpoints } from "../src/tokens/breakpoints"

/**
 * Converts a nested object path to a CSS variable name
 * e.g., { white: { 5: "..." } } -> "white-5"
 */
function toCssVarName(path: string[]): string {
  return path.join("-").replace(/\./g, "-")
}

/**
 * Flattens a nested color object into CSS variables
 */
function flattenColors(
  colors: Record<string, any>,
  prefix: string[] = [],
  result: Array<{ name: string; value: string }> = []
): Array<{ name: string; value: string }> {
  for (const [key, value] of Object.entries(colors)) {
    // Skip DEFAULT key - it becomes the base name
    const currentPath = key === "DEFAULT" ? prefix : [...prefix, key]
    
    if (typeof value === "string") {
      // Handle special cases
      if (value === "currentColor" || value === "transparent") {
        result.push({
          name: toCssVarName(currentPath),
          value: value,
        })
      } else if (value.startsWith("hsl(")) {
        // Already has hsl() wrapper (from f1Colors) - use as-is
        result.push({
          name: toCssVarName(currentPath),
          value: value,
        })
      } else {
        // HSL values without wrapper - convert to hsl() format
        result.push({
          name: toCssVarName(currentPath),
          value: `hsl(${value})`,
        })
      }
    } else if (typeof value === "object" && value !== null) {
      flattenColors(value, currentPath, result)
    }
  }
  return result
}

/**
 * Generates CSS content from tokens
 */
function generateCSS(): string {
  const lines: string[] = []

  // Import Tailwind
  lines.push('@import "tailwindcss";')
  lines.push("")
  lines.push("@theme {")

  // Base Colors
  lines.push("  /* Colors - Base Colors */")
  const baseColorVars = flattenColors(baseColors)
  for (const { name, value } of baseColorVars) {
    lines.push(`  --color-${name}: ${value};`)
  }
  lines.push("")

  // F1 Semantic Colors
  lines.push("  /* Colors - F1 Semantic Colors */")
  const f1ColorVars = flattenColors(f1Colors, ["f1"])
  for (const { name, value } of f1ColorVars) {
    // f1Colors already have hsl() wrapper with var() references
    // Remove the outer hsl() wrapper since we're already in @theme
    // and the value already contains hsl(var(...))
    const cleanName = name.replace(/-DEFAULT$/, "") // Remove -DEFAULT suffix
    // The value is already in format "hsl(var(--neutral-100))" so use it directly
    lines.push(`  --color-${cleanName}: ${value};`)
  }
  lines.push("")

  // Spacing
  lines.push("  /* Spacing - Absolute (px) - Default */")
  for (const [key, value] of Object.entries(absoluteSpacing)) {
    const varName = key.toString().replace(/\./g, "\\.")
    lines.push(`  --spacing-${varName}: ${value};`)
  }
  lines.push("")

  // Border Radius
  lines.push("  /* Border Radius */")
  for (const [key, value] of Object.entries(borderRadius)) {
    const varName = key === "DEFAULT" ? "" : `-${key}`
    lines.push(`  --radius${varName}: ${value};`)
  }
  lines.push("")

  // Font Family
  lines.push("  /* Font Family */")
  lines.push('  --font-family-sans: Inter, sans-serif;')
  lines.push("")

  // Font Weight
  lines.push("  /* Font Weight */")
  lines.push("  --font-weight-normal: 400;")
  lines.push("  --font-weight-medium: 500;")
  lines.push("  --font-weight-semibold: 600;")
  lines.push("")

  // Font Size - Tailwind 4 format with separate line-height
  lines.push("  /* Font Size - Tailwind 4 format with separate line-height */")
  const fontSizes = [
    { name: "xs", size: "0.625rem", lineHeight: "0.75rem" },
    { name: "sm", size: "0.75rem", lineHeight: "1rem" },
    { name: "base", size: "0.875rem", lineHeight: "1.25rem" },
    { name: "lg", size: "1rem", lineHeight: "1.5rem" },
    { name: "xl", size: "1.125rem", lineHeight: "1.75rem" },
    { name: "2xl", size: "1.375rem", lineHeight: "1.75rem" },
    { name: "3xl", size: "1.625rem", lineHeight: "2rem" },
    { name: "4xl", size: "2.25rem", lineHeight: "2.5rem" },
  ]
  for (const { name, size, lineHeight } of fontSizes) {
    lines.push(`  --font-size-${name}: ${size};`)
    lines.push(`  --font-size-${name}--line-height: ${lineHeight};`)
  }
  lines.push("")

  // Box Shadow
  lines.push("  /* Box Shadow - Using direct HSL values per Tailwind 4 guide */")
  lines.push("  --shadow: 0 2px 20px 0 hsl(218 48% 10% / 0.04);")
  lines.push("  --shadow-md: 0 4px 20px 0 hsl(218 48% 10% / 0.08);")
  lines.push("  --shadow-lg: 0 8px 30px 0 hsl(218 48% 10% / 0.12);")
  lines.push("  --shadow-xl: 0 12px 56px 0 hsl(218 48% 10% / 0.16);")
  lines.push("  --shadow-none: none;")
  lines.push("")

  // Screens
  lines.push("  /* Screens */")
  lines.push(`  --breakpoint-xs: 480px;`)
  for (const [key, value] of Object.entries(breakpoints)) {
    lines.push(`  --breakpoint-${key}: ${value}px;`)
  }
  lines.push("  --breakpoint-2xl: 1400px;")
  lines.push("")

  // Z-Index
  lines.push("  /* Z-Index */")
  lines.push("  --z-index-50: 1250;")
  lines.push("")

  // Stroke Width
  lines.push("  /* Stroke Width */")
  lines.push("  --stroke-width-xs: 1px;")
  lines.push("  --stroke-width-sm: 1.2px;")
  lines.push("  --stroke-width-md: 1.3px;")
  lines.push("  --stroke-width-lg: 1.4px;")
  lines.push("  --stroke-width-xl: 1.7px;")
  lines.push("")

  // Container Queries
  lines.push("  /* Container Queries */")
  lines.push("  --container-sm: 40rem;")
  lines.push("  --container-8xl: 96rem;")
  lines.push("  --container-9xl: 120rem;")
  lines.push("  --container-10xl: 152rem;")
  lines.push("  --container-11xl: 192rem;")
  lines.push("  --container-12xl: 240rem;")
  lines.push("")

  // Animations
  lines.push("  /* Animations */")
  lines.push("  --animate-accordion-down: accordion-down 0.2s ease-out;")
  lines.push("  --animate-accordion-up: accordion-up 0.2s ease-out;")
  lines.push("  --animate-autofill: autofill 0s both;")
  lines.push("}")

  // Container utility
  lines.push("")
  lines.push("/* Container utility - Tailwind 4 requires @utility for custom container */")
  lines.push("@utility container {")
  lines.push("  margin-inline: auto;")
  lines.push("  padding-inline: 2rem;")
  lines.push("  max-width: 1400px;")
  lines.push("}")

  // Keyframes
  lines.push("")
  lines.push("@keyframes accordion-down {")
  lines.push("  from {")
  lines.push("    height: 0;")
  lines.push("  }")
  lines.push("  to {")
  lines.push("    height: var(--radix-accordion-content-height);")
  lines.push("  }")
  lines.push("}")
  lines.push("")
  lines.push("@keyframes accordion-up {")
  lines.push("  from {")
  lines.push("    height: var(--radix-accordion-content-height);")
  lines.push("  }")
  lines.push("  to {")
  lines.push("    height: 0;")
  lines.push("  }")
  lines.push("}")

  // @layer base with CSS variables
  lines.push("")
  lines.push("@layer base {")
  lines.push("  :root {")
  
  // Mood colors
  lines.push("    --mood-super-negative: var(--color-radical-50);")
  lines.push("    --mood-negative: var(--color-orange-50);")
  lines.push("    --mood-neutral: var(--color-yellow-50);")
  lines.push("    --mood-positive: var(--color-flubber-50);")
  lines.push("    --mood-super-positive: var(--color-grass-50);")
  lines.push("")

  // Neutral colors
  lines.push("    --neutral-0: var(--color-white-100);")
  lines.push("    --neutral-2: var(--color-grey-0);")
  lines.push("    --neutral-5: var(--color-grey-5);")
  lines.push("    --neutral-10: var(--color-grey-10);")
  lines.push("    --neutral-20: var(--color-grey-20);")
  lines.push("    --neutral-30: var(--color-grey-30);")
  lines.push("    --neutral-40: var(--color-grey-40);")
  lines.push("    --neutral-50: var(--color-grey-50);")
  lines.push("    --neutral-60: var(--color-grey-60);")
  lines.push("    --neutral-70: var(--color-grey-70);")
  lines.push("    --neutral-80: var(--color-grey-80);")
  lines.push("    --neutral-90: var(--color-grey-90);")
  lines.push("    --neutral-100: var(--color-grey-100);")
  lines.push("")
  lines.push("    --neutral-solid-40: var(--color-grey-solid-40);")
  lines.push("    --neutral-solid-50: var(--color-grey-solid-50);")
  lines.push("")

  // White colors
  lines.push("    --white-5: var(--color-white-5);")
  lines.push("    --white-10: var(--color-white-10);")
  lines.push("    --white-20: var(--color-white-20);")
  lines.push("    --white-30: var(--color-white-30);")
  lines.push("    --white-40: var(--color-white-40);")
  lines.push("    --white-50: var(--color-white-50);")
  lines.push("    --white-60: var(--color-white-60);")
  lines.push("    --white-70: var(--color-white-70);")
  lines.push("    --white-80: var(--color-white-80);")
  lines.push("    --white-90: var(--color-white-90);")
  lines.push("    --white-100: var(--color-white-100);")
  lines.push("")

  // Accent colors
  lines.push("    --accent-50: var(--color-radical-50);")
  lines.push("    --accent-60: var(--color-radical-60);")
  lines.push("    --accent-70: var(--color-radical-70);")
  lines.push("")
  lines.push("    --warning-50: var(--color-orange-50);")
  lines.push("    --warning-60: var(--color-orange-60);")
  lines.push("    --warning-70: var(--color-orange-70);")
  lines.push("")
  lines.push("    --selected-50: var(--color-viridian-50);")
  lines.push("    --selected-60: var(--color-viridian-60);")
  lines.push("    --selected-70: var(--color-viridian-70);")
  lines.push("")
  lines.push("    --critical-50: var(--color-red-50);")
  lines.push("    --critical-60: var(--color-red-60);")
  lines.push("    --critical-70: var(--color-red-70);")
  lines.push("")
  lines.push("    --positive-50: var(--color-grass-50);")
  lines.push("    --positive-60: var(--color-grass-60);")
  lines.push("    --positive-70: var(--color-grass-70);")
  lines.push("")
  lines.push("    --info-50: var(--color-malibu-50);")
  lines.push("    --info-60: var(--color-malibu-60);")
  lines.push("    --info-70: var(--color-malibu-70);")
  lines.push("")
  lines.push("    --promote-50: var(--color-yellow-50);")
  lines.push("    --promote-60: var(--color-yellow-60);")
  lines.push("    --promote-70: var(--color-yellow-70);")
  lines.push("")
  lines.push("    --ring: var(--selected-50);")
  lines.push("    --page: var(--white-100);")
  lines.push("")

  // Chart colors
  lines.push("    --chart-categorical-1: 184 92% 35%;")
  lines.push("    --chart-categorical-2: 216 90% 65%;")
  lines.push("    --chart-categorical-3: 84 55% 53%;")
  lines.push("    --chart-categorical-4: 340 49% 60%;")
  lines.push("    --chart-categorical-5: 24 98% 59%;")
  lines.push("    --chart-categorical-6: 239 91% 64%;")
  lines.push("    --chart-categorical-7: 162 44% 33%;")
  lines.push("    --chart-categorical-8: 25 46% 53%;")
  lines.push("")
  lines.push("    --chart-feedback-negative: 6 100% 65%;")
  lines.push("    --chart-feedback-neutral: 38 92% 54%;")
  lines.push("    --chart-feedback-positive: 160 85% 39%;")
  lines.push("")
  lines.push("    --scrollbar-track: transparent;")
  lines.push("    --scrollbar-thumb: rgba(0, 0, 0, 0.4);")
  lines.push("    --scrollbar-thumb-hover: rgba(0, 0, 0, 0.6);")
  lines.push("  }")
  lines.push("")

  // Dark mode
  lines.push("  /* Expressed in these two ways to support both web and mobile */")
  lines.push("  .dark:root,")
  lines.push("  :root .dark {")
  lines.push("    --neutral-0: var(--color-grey-100);")
  lines.push("    --neutral-2: var(--color-grey-0);")
  lines.push("    --neutral-5: var(--color-white-5);")
  lines.push("    --neutral-10: var(--color-white-10);")
  lines.push("    --neutral-20: var(--color-white-20);")
  lines.push("    --neutral-30: var(--color-white-30);")
  lines.push("    --neutral-40: var(--color-white-40);")
  lines.push("    --neutral-50: var(--color-white-50);")
  lines.push("    --neutral-60: var(--color-white-60);")
  lines.push("    --neutral-70: var(--color-white-70);")
  lines.push("    --neutral-80: var(--color-white-80);")
  lines.push("    --neutral-90: var(--color-white-90);")
  lines.push("    --neutral-100: var(--color-white-100);")
  lines.push("")
  lines.push("    --neutral-solid-40: var(--color-white-40);")
  lines.push("    --neutral-solid-50: var(--color-white-50);")
  lines.push("")
  lines.push("    --white-5: var(--color-white-5);")
  lines.push("    --white-10: var(--color-white-10);")
  lines.push("    --white-20: var(--color-white-20);")
  lines.push("    --white-30: var(--color-white-30);")
  lines.push("    --white-40: var(--color-white-40);")
  lines.push("    --white-50: var(--color-white-50);")
  lines.push("    --white-60: var(--color-white-5);")
  lines.push("    --white-70: var(--color-white-70);")
  lines.push("    --white-80: var(--color-white-80);")
  lines.push("    --white-90: var(--color-white-90);")
  lines.push("    --white-100: var(--color-white-100);")
  lines.push("")
  lines.push("    --accent-50: var(--color-radical-60);")
  lines.push("    --accent-60: var(--color-radical-50);")
  lines.push("    --accent-70: var(--color-radical-50);")
  lines.push("")
  lines.push("    --warning-50: var(--color-orange-70);")
  lines.push("    --warning-60: var(--color-orange-60);")
  lines.push("    --warning-70: var(--color-orange-50);")
  lines.push("")
  lines.push("    --selected-50: var(--color-viridian-50);")
  lines.push("    --selected-60: var(--color-viridian-60);")
  lines.push("    --selected-70: var(--color-viridian-50);")
  lines.push("")
  lines.push("    --critical-50: var(--color-red-60);")
  lines.push("    --critical-60: var(--color-red-60);")
  lines.push("    --critical-70: var(--color-red-50);")
  lines.push("")
  lines.push("    --positive-50: var(--color-grass-60);")
  lines.push("    --positive-60: var(--color-grass-50);")
  lines.push("    --positive-70: var(--color-grass-50);")
  lines.push("")
  lines.push("    --info-50: var(--color-malibu-60);")
  lines.push("    --info-60: var(--color-malibu-50);")
  lines.push("    --info-70: var(--color-malibu-50);")
  lines.push("")
  lines.push("    --promote-50: var(--color-yellow-60);")
  lines.push("    --promote-60: var(--color-yellow-50);")
  lines.push("    --promote-70: var(--color-yellow-50);")
  lines.push("")
  lines.push("    --ring: var(--selected-50);")
  lines.push("    --page: var(--color-white-3);")
  lines.push("")
  lines.push("    --scrollbar-track: transparent;")
  lines.push("    --scrollbar-thumb: rgba(255, 255, 255, 0.4);")
  lines.push("    --scrollbar-thumb-hover: rgba(255, 255, 255, 0.6);")
  lines.push("  }")
  lines.push("}")

  // Body styles
  lines.push("")
  lines.push("body {")
  lines.push("  @apply !text-f1-foreground font-sans text-base antialiased;")
  lines.push("}")

  // Autofill keyframes
  lines.push("")
  lines.push("/* For autofill detection */")
  lines.push("@keyframes autofill {")
  lines.push("  from {")
  lines.push("  }")
  lines.push("  to {")
  lines.push("  }")
  lines.push("}")
  lines.push("")
  lines.push("input:-webkit-autofill {")
  lines.push("  animation-name: autofill;")
  lines.push("  animation-fill-mode: both;")
  lines.push("}")

  return lines.join("\n")
}

// Generate and write CSS
const cssContent = generateCSS()
const outputPath = join(__dirname, "..", "base.css")
writeFileSync(outputPath, cssContent, "utf-8")
console.log(`✅ Generated base.css from tokens at ${outputPath}`)
