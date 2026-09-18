import React from "react"
import { ScrollView, Text } from "react-native"
import { useCSSVariable } from "uniwind"

import { PageHeader } from "../../../src/components/Navigation/PageHeader"

export function PageHeaderShowcase() {
  const [f0Foreground] = useCSSVariable(["--color-f0-foreground"])

  const asString = (value: string | number | undefined): string => {
    if (typeof value === "string") return value
    if (typeof value === "number") return String(value)
    return "#000000"
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      <Text
        className="my-4 px-4 text-lg font-bold text-f0-foreground"
        style={{ color: asString(f0Foreground) }}
      >
        Default
      </Text>
      <PageHeader title="Timesheet" />

      <Text
        className="my-4 px-4 text-lg font-bold text-f0-foreground"
        style={{ color: asString(f0Foreground) }}
      >
        With action
      </Text>
      <PageHeader
        title="Home"
        actions={[
          {
            type: "notifications",
            label: "Notifications",
            onPress: () => console.log("Notifications pressed"),
          },
        ]}
      />

      <Text
        className="my-4 px-4 text-lg font-bold text-f0-foreground"
        style={{ color: asString(f0Foreground) }}
      >
        With action and badge
      </Text>
      <PageHeader
        title="Profile"
        actions={[
          {
            type: "notifications",
            label: "Notifications",
            onPress: () => console.log("Notifications pressed"),
            showBadge: true,
          },
        ]}
      />
    </ScrollView>
  )
}
