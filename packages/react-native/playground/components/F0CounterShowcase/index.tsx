import React from "react"
import { ScrollView, Text, View } from "react-native"
import { useCSSVariable } from "uniwind"

import { F0Counter } from "../../../src/components/F0Counter"

export function F0CounterShowcase() {
  const [f0Foreground] = useCSSVariable(["--color-f0-foreground"])

  const asString = (value: string | number | undefined): string => {
    if (typeof value === "string") return value
    if (typeof value === "number") return String(value)
    return "#000000"
  }

  const label = (text: string) => (
    <Text
      className="mt-1 text-center text-xs"
      style={{ color: asString(f0Foreground) }}
    >
      {text}
    </Text>
  )

  const sectionTitle = (text: string) => (
    <Text
      className="mb-3 text-lg font-bold"
      style={{ color: asString(f0Foreground) }}
    >
      {text}
    </Text>
  )

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 40 }}
      style={{ width: "100%" }}
    >
      {sectionTitle("Type Variants")}
      <View className="mb-6 flex-row items-end gap-6">
        <View className="items-center">
          <F0Counter type="default" value={2} />
          {label("Default")}
        </View>
        <View className="items-center">
          <F0Counter type="selected" value={2} />
          {label("Selected")}
        </View>
        <View className="items-center">
          <F0Counter type="notification" value={2} />
          {label("Notification")}
        </View>
      </View>

      {sectionTitle("Primary (inverse)")}
      <View className="mb-6 rounded-lg bg-f0-background-bold px-4 py-3">
        <View className="flex-row items-center gap-6">
          <View className="items-center">
            <F0Counter type="primary" value={2} />
            <Text className="mt-1 text-center text-xs text-f0-foreground-inverse">
              md
            </Text>
          </View>
          <View className="items-center">
            <F0Counter type="primary" value={2} size="sm" />
            <Text className="mt-1 text-center text-xs text-f0-foreground-inverse">
              sm
            </Text>
          </View>
          <View className="items-center">
            <F0Counter type="primary" value={99} />
            <Text className="mt-1 text-center text-xs text-f0-foreground-inverse">
              multi-digit
            </Text>
          </View>
        </View>
      </View>

      {sectionTitle("Size Variants")}
      <View className="mb-6 flex-row items-end gap-6">
        <View className="items-center">
          <F0Counter size="md" value={2} />
          {label("md (20px)")}
        </View>
        <View className="items-center">
          <F0Counter size="sm" value={2} />
          {label("sm (16px)")}
        </View>
      </View>

      {sectionTitle("MaxValue")}
      <View className="mb-6 flex-row items-end gap-6">
        <View className="items-center">
          <F0Counter value={50} maxValue={99} />
          {label("50 / max 99")}
        </View>
        <View className="items-center">
          <F0Counter value={123} maxValue={99} type="notification" />
          {label("123 / max 99")}
        </View>
      </View>

      {sectionTitle("All Types — sm")}
      <View className="mb-6 flex-row items-end gap-6">
        <View className="items-center">
          <F0Counter type="default" value={7} size="sm" />
          {label("Default")}
        </View>
        <View className="items-center">
          <F0Counter type="selected" value={15} size="sm" />
          {label("Selected")}
        </View>
        <View className="items-center">
          <F0Counter type="notification" value={88} size="sm" />
          {label("Notification")}
        </View>
      </View>

      {sectionTitle("Snapshot")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Counter type="default" value={2} size="md" />
        <F0Counter type="selected" value={2} size="md" />
        <F0Counter type="notification" value={2} size="md" />
        <F0Counter type="default" value={2} size="sm" />
        <F0Counter type="selected" value={2} size="sm" />
        <F0Counter type="notification" value={2} size="sm" />
        <F0Counter type="default" value={42} />
        <F0Counter type="notification" value={150} maxValue={99} />
      </View>
    </ScrollView>
  )
}
