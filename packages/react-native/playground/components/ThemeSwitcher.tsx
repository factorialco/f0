import { SegmentedControl } from "@expo/ui/community/segmented-control"
import { GlassView, isLiquidGlassAvailable } from "expo-glass-effect"
import { SymbolView } from "expo-symbols"
import React from "react"
import { View } from "react-native"
import { Uniwind, useCSSVariable, useUniwind } from "uniwind"

const THEMES = ["system", "light", "dark"] as const
const LABELS = ["System", "Light", "Dark"]

const asString = (value: string | number | undefined): string => {
  if (typeof value === "string") return value
  if (typeof value === "number") return String(value)
  return "#000000"
}

/**
 * Playground theme switcher.
 *
 * Native showcase-chrome element: a native SegmentedControl (@expo/ui) for the
 * System / Light / Dark choice, paired with an expo-symbols SF/Material symbol,
 * inside an iOS 26 Liquid Glass card (expo-glass-effect) when available — with a
 * plain bordered fallback on older iOS / Android.
 */
export const ThemeSwitcher = () => {
  const { theme, hasAdaptiveThemes } = useUniwind()
  const [fg, border] = useCSSVariable([
    "--color-f0-foreground",
    "--color-f0-border",
  ])

  const active = hasAdaptiveThemes ? "system" : theme
  const index = Math.max(0, THEMES.indexOf(active as (typeof THEMES)[number]))

  const content = (
    <View className="flex-row items-center gap-3 p-2">
      <SymbolView
        name={{ ios: "circle.lefthalf.filled", android: "contrast" }}
        size={22}
        tintColor={asString(fg)}
      />
      <View className="flex-1">
        <SegmentedControl
          values={LABELS}
          selectedIndex={index}
          onChange={(e) =>
            Uniwind.setTheme(THEMES[e.nativeEvent.selectedSegmentIndex])
          }
        />
      </View>
    </View>
  )

  if (isLiquidGlassAvailable()) {
    return (
      <GlassView
        glassEffectStyle="regular"
        style={{ borderRadius: 16, overflow: "hidden" }}
      >
        {content}
      </GlassView>
    )
  }

  return (
    <View
      className="rounded-2xl border"
      style={{ borderColor: asString(border) }}
    >
      {content}
    </View>
  )
}
