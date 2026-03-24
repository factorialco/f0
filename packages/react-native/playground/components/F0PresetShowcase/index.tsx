import React, { useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { useCSSVariable } from "uniwind"

import { F0Preset } from "../../../src/components/F0Preset"

export function F0PresetShowcase() {
  const [f0Foreground] = useCSSVariable(["--color-f0-foreground"])
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const asString = (value: string | number | undefined): string => {
    if (typeof value === "string") return value
    if (typeof value === "number") return String(value)
    return "#000000"
  }

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

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
      {sectionTitle("Default vs Selected")}
      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Preset label="Default" />
        <F0Preset label="Selected" selected />
      </View>

      {sectionTitle("With Counter")}
      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Preset label="Inbox" number={5} />
        <F0Preset label="Messages" number={12} />
        <F0Preset label="Tasks" number={99} />
      </View>

      {sectionTitle("Selected with Counter")}
      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Preset label="Inbox" number={5} selected />
        <F0Preset label="Messages" number={12} selected />
        <F0Preset label="Tasks" number={99} selected />
      </View>

      {sectionTitle("Interactive (press to toggle)")}
      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Preset
          label="All"
          selected={selected.has("all")}
          onPress={() => toggle("all")}
        />
        <F0Preset
          label="Unread"
          number={23}
          selected={selected.has("unread")}
          onPress={() => toggle("unread")}
        />
        <F0Preset
          label="Important"
          number={5}
          selected={selected.has("important")}
          onPress={() => toggle("important")}
        />
        <F0Preset
          label="Archived"
          number={150}
          selected={selected.has("archived")}
          onPress={() => toggle("archived")}
        />
      </View>

      {sectionTitle("All Variants")}
      <View className="mb-6 flex-row flex-wrap gap-2">
        <F0Preset label="Default" />
        <F0Preset label="Selected" selected />
        <F0Preset label="With Counter" number={5} />
        <F0Preset label="Selected + Counter" number={12} selected />
      </View>
    </ScrollView>
  )
}
