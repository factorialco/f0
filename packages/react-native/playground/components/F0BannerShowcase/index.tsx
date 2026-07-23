import React from "react"
import { ScrollView, Text, View } from "react-native"

import { F0Banner, F0_BANNER_LEVELS } from "../../../src/components/F0Banner"
import { F0Link } from "../../../src/components/F0Link"

export function F0BannerShowcase() {
  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ paddingBottom: 48, gap: 24 }}
    >
      <View className="gap-2">
        <Text className="px-4 text-base font-semibold text-f0-foreground">
          All levels
        </Text>
        <View className="gap-2">
          {F0_BANNER_LEVELS.map((level) => (
            <F0Banner key={level} level={level} message="Message" />
          ))}
        </View>
      </View>

      <View className="gap-2">
        <Text className="px-4 text-base font-semibold text-f0-foreground">
          With link + action + spinner
        </Text>
        <View className="gap-2">
          {F0_BANNER_LEVELS.map((level) => (
            <F0Banner
              key={level}
              level={level}
              message="Message"
              link={
                <F0Link size="sm" href="https://factorial.co" external>
                  Link
                </F0Link>
              }
              action={{ label: "Label", onPress: () => {} }}
              loading
            />
          ))}
        </View>
      </View>

      <View className="gap-2">
        <Text className="px-4 text-base font-semibold text-f0-foreground">
          Each affordance alone
        </Text>
        <View className="gap-2">
          <F0Banner
            level="info"
            message="Link only"
            link={
              <F0Link size="sm" href="https://factorial.co" external>
                Link
              </F0Link>
            }
          />
          <F0Banner
            level="info"
            message="Action only"
            action={{ label: "Label", onPress: () => {} }}
          />
          <F0Banner level="info" message="Spinner only" loading />
          <F0Banner level="info" message="Tap × to remove me" dismissible />
          <F0Banner
            level="critical"
            message="Link + action + dismiss"
            link={
              <F0Link size="sm" href="https://factorial.co" external>
                Link
              </F0Link>
            }
            action={{ label: "Label", onPress: () => {} }}
            dismissible
          />
        </View>
      </View>

      <View className="gap-2">
        <Text className="px-4 text-base font-semibold text-f0-foreground">
          Long message (wraps)
        </Text>
        <F0Banner
          level="warning"
          message="Your clock-in from this morning is still open. Remember to clock out before the end of your shift to keep your hours accurate."
          action={{ label: "Clock out", onPress: () => {} }}
        />
      </View>

      <View className="gap-2">
        <Text className="px-4 text-base font-semibold text-f0-foreground">
          Inline variant (rounded + elevated, for in-content use)
        </Text>
        <View className="gap-2 px-4">
          {F0_BANNER_LEVELS.map((level) => (
            <F0Banner
              key={level}
              variant="inline"
              level={level}
              message="Some time entries failed to sync"
              action={{ label: "Check", onPress: () => {} }}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
