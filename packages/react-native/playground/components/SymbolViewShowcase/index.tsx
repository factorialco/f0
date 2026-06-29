import { SymbolView } from "expo-symbols"
import React from "react"
import { Platform, ScrollView, Text, View } from "react-native"
import { useCSSVariable } from "uniwind"

const asString = (value: string | number | undefined): string => {
  if (typeof value === "string") return value
  if (typeof value === "number") return String(value)
  return "#000000"
}

/** One SF Symbol (iOS) / Material Symbol (Android) name, resolved per platform. */
const SYMBOLS = [
  { ios: "heart.fill", android: "favorite", label: "heart" },
  { ios: "bell.fill", android: "notifications", label: "bell" },
  { ios: "star.fill", android: "star", label: "star" },
  { ios: "bolt.fill", android: "bolt", label: "bolt" },
  { ios: "gearshape.fill", android: "settings", label: "gear" },
  { ios: "paintpalette.fill", android: "palette", label: "palette" },
] as const

const WEIGHTS = ["ultraLight", "regular", "semibold", "bold", "heavy"] as const
const TINTS = ["#3b82f6", "#ef4444", "#22c55e", "#a855f7", "#f59e0b"] as const

const Section = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  const [fg] = useCSSVariable(["--color-f0-foreground"])
  return (
    <View className="mb-6">
      <Text className="mb-3 text-lg font-bold" style={{ color: asString(fg) }}>
        {title}
      </Text>
      {children}
    </View>
  )
}

const Caption = ({ children }: { children: React.ReactNode }) => {
  const [muted] = useCSSVariable(["--color-f0-foreground-secondary"])
  return (
    <Text
      className="mt-1 text-center text-xs"
      style={{ color: asString(muted) }}
    >
      {children}
    </Text>
  )
}

/**
 * Showcase for `expo-symbols` SymbolView. In SDK 56 it's universal: one `name`
 * resolves to an SF Symbol on iOS and a Material Symbol on Android. A `fallback`
 * is rendered when a platform has no matching symbol.
 */
export function SymbolViewShowcase() {
  const [fg, accent] = useCSSVariable([
    "--color-f0-foreground",
    "--color-f0-foreground-info",
  ])
  const tint = asString(accent)

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 24 }}
      style={{ width: "100%" }}
    >
      <Text className="mb-4 text-sm" style={{ color: asString(fg) }}>
        Native symbols via <Text className="font-semibold">expo-symbols</Text> —
        one name renders as an <Text className="font-semibold">SF Symbol</Text>{" "}
        on iOS and a <Text className="font-semibold">Material Symbol</Text> on
        Android. Current platform:{" "}
        <Text className="font-semibold">{Platform.OS}</Text>.
      </Text>

      <Section title="Universal (same name, native per platform)">
        <View className="flex-row flex-wrap gap-5">
          {SYMBOLS.map((s) => (
            <View key={s.label} className="w-16 items-center">
              <SymbolView
                name={{ ios: s.ios, android: s.android }}
                size={34}
                tintColor={tint}
                fallback={<Text style={{ fontSize: 30, color: tint }}>★</Text>}
              />
              <Caption>{s.label}</Caption>
            </View>
          ))}
        </View>
      </Section>

      <Section title="Sizes">
        <View className="flex-row items-end gap-5">
          {[20, 28, 36, 48].map((size) => (
            <View key={size} className="items-center">
              <SymbolView
                name={{ ios: "bell.fill", android: "notifications" }}
                size={size}
                tintColor={tint}
              />
              <Caption>{size}</Caption>
            </View>
          ))}
        </View>
      </Section>

      <Section title="Weights (iOS)">
        <View className="flex-row flex-wrap items-center gap-5">
          {WEIGHTS.map((weight) => (
            <View key={weight} className="items-center">
              <SymbolView
                name={{ ios: "bolt.fill", android: "bolt" }}
                size={34}
                weight={weight}
                tintColor={tint}
              />
              <Caption>{weight}</Caption>
            </View>
          ))}
        </View>
      </Section>

      <Section title="Tint colors">
        <View className="flex-row flex-wrap items-center gap-5">
          {TINTS.map((color) => (
            <SymbolView
              key={color}
              name={{ ios: "heart.fill", android: "favorite" }}
              size={34}
              tintColor={color}
            />
          ))}
        </View>
      </Section>

      <Section title="Rendering modes (iOS)">
        <View className="flex-row flex-wrap items-center gap-6">
          <View className="items-center">
            <SymbolView
              name={{ ios: "cloud.sun.rain.fill", android: "rainy" }}
              size={40}
              type="monochrome"
              tintColor={tint}
            />
            <Caption>monochrome</Caption>
          </View>
          <View className="items-center">
            <SymbolView
              name={{ ios: "cloud.sun.rain.fill", android: "rainy" }}
              size={40}
              type="hierarchical"
              tintColor={tint}
            />
            <Caption>hierarchical</Caption>
          </View>
          <View className="items-center">
            <SymbolView
              name={{ ios: "cloud.sun.rain.fill", android: "rainy" }}
              size={40}
              type="palette"
              colors={["#f59e0b", "#3b82f6"]}
            />
            <Caption>palette</Caption>
          </View>
          <View className="items-center">
            <SymbolView
              name={{ ios: "cloud.sun.rain.fill", android: "rainy" }}
              size={40}
              type="multicolor"
            />
            <Caption>multicolor</Caption>
          </View>
        </View>
      </Section>
    </ScrollView>
  )
}
