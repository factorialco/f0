import { SegmentedControl } from "@expo/ui/community/segmented-control"
import { Slider } from "@expo/ui/community/slider"
import React, { useState } from "react"
import { Platform, ScrollView, Text, View } from "react-native"
import { useCSSVariable } from "uniwind"

const asString = (value: string | number | undefined): string => {
  if (typeof value === "string") return value
  if (typeof value === "number") return String(value)
  return "#000000"
}

const Section = ({
  title,
  hint,
  children,
}: {
  title: string
  hint?: string
  children: React.ReactNode
}) => {
  const [fg, muted] = useCSSVariable([
    "--color-f0-foreground",
    "--color-f0-foreground-secondary",
  ])
  return (
    <View className="mb-7">
      <Text className="mb-1 text-lg font-bold" style={{ color: asString(fg) }}>
        {title}
      </Text>
      {hint ? (
        <Text className="mb-3 text-xs" style={{ color: asString(muted) }}>
          {hint}
        </Text>
      ) : null}
      {children}
    </View>
  )
}

const RANGES = ["Day", "Week", "Month", "Year"]

/**
 * Showcase for native controls via @expo/ui community drop-ins. These render the
 * platform's real native control — SwiftUI on iOS, Jetpack Compose on Android —
 * with an API compatible with the popular community libraries.
 */
export function NativeControlsShowcase() {
  const [fg, accent] = useCSSVariable([
    "--color-f0-foreground",
    "--color-f0-foreground-info",
  ])
  const tint = asString(accent)

  const [rangeIndex, setRangeIndex] = useState(1)
  const [volume, setVolume] = useState(0.4)

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 24 }}
      style={{ width: "100%" }}
    >
      <Text className="mb-5 text-sm" style={{ color: asString(fg) }}>
        Native controls via <Text className="font-semibold">@expo/ui</Text> —
        real <Text className="font-semibold">SwiftUI</Text> on iOS and{" "}
        <Text className="font-semibold">Jetpack Compose</Text> on Android
        (current platform: <Text className="font-semibold">{Platform.OS}</Text>
        ).
      </Text>

      <Section
        title="Segmented control"
        hint="@expo/ui/community/segmented-control"
      >
        <SegmentedControl
          values={RANGES}
          selectedIndex={rangeIndex}
          onChange={(e) => setRangeIndex(e.nativeEvent.selectedSegmentIndex)}
        />
        <Text className="mt-3 text-sm" style={{ color: asString(fg) }}>
          Selected: <Text className="font-semibold">{RANGES[rangeIndex]}</Text>
        </Text>
      </Section>

      <Section title="Slider" hint="@expo/ui/community/slider">
        <Slider
          value={volume}
          minimumValue={0}
          maximumValue={1}
          step={0.01}
          onValueChange={setVolume}
          style={{ height: 40 }}
        />
        <Text className="mt-1 text-sm" style={{ color: asString(fg) }}>
          Value:{" "}
          <Text className="font-semibold">{Math.round(volume * 100)}%</Text>
        </Text>
      </Section>
    </ScrollView>
  )
}
