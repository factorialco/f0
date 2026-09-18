import React from "react"
import { ScrollView, View, Text } from "react-native"
import { useCSSVariable } from "uniwind"

import { Badge } from "../../../src/components/Badge"
import { AppIcons } from "../../../src/icons"

const { Add, Check, Alert, Warning, Info } = AppIcons

export function BadgeShowcase() {
  const [f0Foreground] = useCSSVariable(["--color-f0-foreground"])

  const asString = (value: string | number | undefined): string => {
    if (typeof value === "string") return value
    if (typeof value === "number") return String(value)
    return "#000000"
  }

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      {/* Type Variants */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Type Variants
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <Badge type="neutral" icon={Info} size="md" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Neutral
          </Text>
        </View>
        <View className="items-center">
          <Badge type="highlight" icon={Add} size="md" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Highlight
          </Text>
        </View>
        <View className="items-center">
          <Badge type="positive" icon={Check} size="md" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Positive
          </Text>
        </View>
        <View className="items-center">
          <Badge type="critical" icon={Alert} size="md" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Critical
          </Text>
        </View>
        <View className="items-center">
          <Badge type="warning" icon={Warning} size="md" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Warning
          </Text>
        </View>
      </View>

      {/* Size Variants */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        Size Variants
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <Badge type="positive" icon={Check} size="xs" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            XS
          </Text>
        </View>
        <View className="items-center">
          <Badge type="positive" icon={Check} size="sm" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            SM
          </Text>
        </View>
        <View className="items-center">
          <Badge type="positive" icon={Check} size="md" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            MD
          </Text>
        </View>
        <View className="items-center">
          <Badge type="positive" icon={Check} size="lg" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            LG
          </Text>
        </View>
      </View>

      {/* All Types with Different Sizes */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        All Types - Small Size
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <Badge type="neutral" icon={Info} size="sm" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Neutral
          </Text>
        </View>
        <View className="items-center">
          <Badge type="highlight" icon={Add} size="sm" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Highlight
          </Text>
        </View>
        <View className="items-center">
          <Badge type="positive" icon={Check} size="sm" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Positive
          </Text>
        </View>
        <View className="items-center">
          <Badge type="critical" icon={Alert} size="sm" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Critical
          </Text>
        </View>
        <View className="items-center">
          <Badge type="warning" icon={Warning} size="sm" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Warning
          </Text>
        </View>
      </View>

      {/* All Types with Large Size */}
      <Text
        className="mb-4 text-lg font-bold"
        style={{ color: asString(f0Foreground) }}
      >
        All Types - Large Size
      </Text>
      <View className="mb-6 flex-row flex-wrap items-center gap-4">
        <View className="items-center">
          <Badge type="neutral" icon={Info} size="lg" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Neutral
          </Text>
        </View>
        <View className="items-center">
          <Badge type="highlight" icon={Add} size="lg" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Highlight
          </Text>
        </View>
        <View className="items-center">
          <Badge type="positive" icon={Check} size="lg" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Positive
          </Text>
        </View>
        <View className="items-center">
          <Badge type="critical" icon={Alert} size="lg" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Critical
          </Text>
        </View>
        <View className="items-center">
          <Badge type="warning" icon={Warning} size="lg" />
          <Text
            className="mt-2 text-center text-xs"
            style={{ color: asString(f0Foreground) }}
          >
            Warning
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
