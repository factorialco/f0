import React, { useState } from "react"
import { ScrollView, View } from "react-native"

import { F0Text } from "../../../src/components/primitives/F0Text"
import { PressableFeedback } from "../../../src/components/primitives/PressableFeedback"

export function PressableFeedbackShowcase() {
  const [pressCount, setPressCount] = useState(0)
  const [highlightPressCount, setHighlightPressCount] = useState(0)
  const [nonePressCount, setNonePressCount] = useState(0)

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 40 }}
      style={{ width: "100%" }}
    >
      <F0Text variant="heading-lg" className="mb-2">
        PressableFeedback
      </F0Text>
      <F0Text variant="body-sm-default" color="secondary" className="mb-6">
        Internal primitive for touch feedback animations.
      </F0Text>

      <View className="mb-6">
        <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
          Variant: both (default)
        </F0Text>
        <PressableFeedback
          onPress={() => setPressCount((count) => count + 1)}
          className="self-start rounded-lg border border-f0-border bg-f0-background-secondary px-4 py-2"
        >
          <F0Text variant="body-sm-semibold">Pressed {pressCount} times</F0Text>
        </PressableFeedback>
      </View>

      <View className="mb-6">
        <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
          Variant: scale
        </F0Text>
        <PressableFeedback
          variant="scale"
          className="self-start rounded-lg border border-f0-border bg-f0-background-secondary px-4 py-2"
        >
          <F0Text variant="body-sm-default">Scale only feedback</F0Text>
        </PressableFeedback>
      </View>

      <View className="mb-6">
        <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
          Variant: highlight
        </F0Text>
        <PressableFeedback
          variant="highlight"
          onPress={() => setHighlightPressCount((count) => count + 1)}
          highlightAnimation={{
            backgroundColor: "rgba(59, 130, 246, 1)",
            opacity: [0, 0.22],
          }}
          className="self-start rounded-lg border border-f0-border bg-f0-background-secondary px-4 py-2"
        >
          <F0Text variant="body-sm-default">
            Highlight only feedback ({highlightPressCount})
          </F0Text>
        </PressableFeedback>
      </View>

      <View className="mb-6">
        <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
          Variant: none
        </F0Text>
        <PressableFeedback
          variant="none"
          onPress={() => setNonePressCount((count) => count + 1)}
          className="self-start rounded-lg border border-f0-border bg-f0-background-secondary px-4 py-2"
        >
          <F0Text variant="body-sm-default">
            No visual feedback (still pressable: {nonePressCount})
          </F0Text>
        </PressableFeedback>
      </View>

      <View className="mb-6">
        <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
          Custom animation
        </F0Text>
        <PressableFeedback
          variant="both"
          scaleAnimation={{ value: 0.94, timingConfig: { duration: 200 } }}
          highlightAnimation={{
            opacity: [0, 0.2],
            timingConfig: { duration: 200 },
          }}
          className="self-start rounded-lg border border-f0-border bg-f0-background-secondary px-4 py-2"
        >
          <F0Text variant="body-sm-default">
            Custom scale + highlight settings
          </F0Text>
        </PressableFeedback>
      </View>

      <View className="mb-2">
        <F0Text variant="body-sm-semibold" color="secondary" className="mb-2">
          Disabled animation
        </F0Text>
        <PressableFeedback
          disableAnimation
          className="self-start rounded-lg border border-f0-border bg-f0-background-secondary px-4 py-2"
        >
          <F0Text variant="body-sm-default">disableAnimation=true</F0Text>
        </PressableFeedback>
      </View>
    </ScrollView>
  )
}
