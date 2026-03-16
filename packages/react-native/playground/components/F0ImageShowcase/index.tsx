import React from "react"
import { ScrollView, Text, View } from "react-native"
import { useCSSVariable } from "uniwind"

import { F0Image } from "../../../src/components/primitives/F0Image"

const asString = (value: string | number | undefined): string => {
  if (typeof value === "string") return value
  if (typeof value === "number") return String(value)
  return "#000000"
}

const sampleImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"

export function F0ImageShowcase() {
  const [f0Foreground, f0BackgroundSecondary] = useCSSVariable([
    "--color-f0-foreground",
    "--color-f0-background-secondary",
  ])

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Basic usage
      </Text>
      <View
        className="mb-6 rounded-lg p-3"
        style={{ backgroundColor: asString(f0BackgroundSecondary) }}
      >
        <F0Image
          source={{ uri: sampleImage }}
          className="h-40 w-full rounded-lg"
          accessibilityLabel="Team collaboration"
        />
      </View>

      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        contentFit variants
      </Text>
      <View className="mb-6 flex-row flex-wrap gap-4">
        <View className="items-center">
          <F0Image
            source={{ uri: sampleImage }}
            className="h-24 w-24 rounded-md"
            contentFit="cover"
            accessibilityLabel="Cover fit sample"
          />
          <Text
            className="mt-2 text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            cover
          </Text>
        </View>
        <View className="items-center">
          <F0Image
            source={{ uri: sampleImage }}
            className="h-24 w-24 rounded-md"
            contentFit="contain"
            accessibilityLabel="Contain fit sample"
          />
          <Text
            className="mt-2 text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            contain
          </Text>
        </View>
      </View>

      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Avatar style
      </Text>
      <View className="mb-6 flex-row items-center gap-3">
        <F0Image
          source={{ uri: sampleImage }}
          className="h-10 w-10 rounded-full"
          accessibilityLabel="Avatar image sample"
        />
        <F0Image
          source={{ uri: sampleImage }}
          className="h-10 w-10 rounded-sm"
          accessibilityLabel="Square avatar image sample"
        />
      </View>
    </ScrollView>
  )
}
