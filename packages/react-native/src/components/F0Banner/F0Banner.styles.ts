import { Platform } from "react-native"
import { tv } from "tailwind-variants"

import type { TextColor } from "../primitives/F0Text"

import type { F0BannerLevel } from "./F0Banner.types"

// Container layout + per-level background tint (f0-background-* 10% fills).
// `variant` switches placement: `global` is full-bleed + squared (top of
// screen); `inline` is rounded + elevated (see bannerInlineShadow) for use
// inside page content.
export const bannerVariants = tv({
  base: "w-full flex-row items-center gap-2 px-3 py-2",
  variants: {
    level: {
      info: "bg-f0-background-info",
      warning: "bg-f0-background-warning",
      positive: "bg-f0-background-positive",
      critical: "bg-f0-background-critical",
    },
    variant: {
      global: "",
      inline: "rounded-lg",
    },
  },
  defaultVariants: {
    level: "info",
    variant: "global",
  },
})

// Drop shadow for the `inline` (elevated) variant. NativeWind `shadow-*`
// classes don't compile in RN, so this must be an RN style. Values are
// hardcoded and NOT token-backed — replace once the f0 design system defines
// shadow/elevation tokens for the react-native package.
export const bannerInlineShadow = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  android: { elevation: 2 },
  default: {},
})

// Semantic F0Text color by level.
export const F0_BANNER_TEXT_COLORS: Record<F0BannerLevel, TextColor> = {
  info: "info",
  warning: "warning",
  positive: "positive",
  critical: "critical",
}
