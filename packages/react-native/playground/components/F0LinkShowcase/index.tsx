import React from "react"
import { ScrollView, Text, View } from "react-native"
import { useCSSVariable } from "uniwind"

import { F0Link } from "../../../src/components/F0Link"

export function F0LinkShowcase() {
  const [f0Foreground] = useCSSVariable(["--color-f0-foreground"])

  const asString = (value: string | number | undefined): string => {
    if (typeof value === "string") return value
    if (typeof value === "number") return String(value)
    return "#000000"
  }

  const sectionTitle = (text: string) => (
    <Text
      className="mb-3 text-lg font-bold"
      style={{ color: asString(f0Foreground) }}
    >
      {text}
    </Text>
  )

  const label = (text: string) => (
    <Text className="mt-1 text-xs" style={{ color: asString(f0Foreground) }}>
      {text}
    </Text>
  )

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 40 }}
      style={{ width: "100%" }}
    >
      {sectionTitle("Variants")}
      <View className="mb-6 gap-3">
        <View>
          <F0Link variant="link">Default link</F0Link>
          {label('variant="link"')}
        </View>
        <View>
          <F0Link variant="unstyled">Unstyled link</F0Link>
          {label('variant="unstyled"')}
        </View>
        <View>
          <F0Link variant="mention">User name</F0Link>
          {label('variant="mention"')}
        </View>
      </View>

      {sectionTitle("Sizes")}
      <View className="mb-6 gap-3">
        <View>
          <F0Link size="md">Link md</F0Link>
          {label('size="md"')}
        </View>
        <View>
          <F0Link size="sm">Link sm</F0Link>
          {label('size="sm"')}
        </View>
        <View>
          <F0Link size="xs">Link xs</F0Link>
          {label('size="xs"')}
        </View>
      </View>

      {sectionTitle("Mention × Sizes")}
      <View className="mb-6 gap-3">
        <View>
          <F0Link variant="mention" size="md">
            @John — md
          </F0Link>
          {label('mention + size="md"')}
        </View>
        <View>
          <F0Link variant="mention" size="sm">
            @John — sm
          </F0Link>
          {label('mention + size="sm"')}
        </View>
        <View>
          <F0Link variant="mention" size="xs">
            @John — xs
          </F0Link>
          {label('mention + size="xs"')}
        </View>
      </View>

      {sectionTitle("External")}
      <View className="mb-6 gap-3">
        <View>
          <F0Link href="https://factorialhr.com" target="_blank">
            Factorial website
          </F0Link>
          {label('target="_blank" + href')}
        </View>
        <View>
          <F0Link href="https://help.factorialhr.com" external>
            Help center
          </F0Link>
          {label("external={true}")}
        </View>
      </View>

      {sectionTitle("States")}
      <View className="mb-6 gap-3">
        <View>
          <F0Link disabled href="https://factorialhr.com">
            Disabled link
          </F0Link>
          {label("disabled")}
        </View>
        <View>
          <F0Link disabled variant="mention">
            @disabled mention
          </F0Link>
          {label("disabled mention")}
        </View>
        <View>
          <F0Link numberOfLines={1}>
            This is a very long link text that should truncate in one line
          </F0Link>
          {label("numberOfLines=1")}
        </View>
      </View>
    </ScrollView>
  )
}
