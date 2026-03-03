import React, { useCallback, useState } from "react"
import { ScrollView, View } from "react-native"
import {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOut,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
  ZoomIn,
  ZoomOut,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated"

import { PressableFeedback } from "../../../src/components/PressableFeedback"
import { AnimatedF0Text } from "../../../src/components/primitives/F0Text"
import { F0Text } from "../../../src/components/primitives/F0Text"

export function AnimatedF0TextShowcase() {
  const [enteringKey, setEnteringKey] = useState(0)
  const [showExiting, setShowExiting] = useState(true)

  const replayEntering = useCallback(() => {
    setEnteringKey((k) => k + 1)
  }, [])

  const toggleExiting = useCallback(() => {
    setShowExiting((v) => !v)
  }, [])

  const pulseOpacity = useSharedValue(1)

  const startPulse = useCallback(() => {
    pulseOpacity.value = withRepeat(
      withSequence(
        withTiming(0.3, { duration: 400 }),
        withTiming(1, { duration: 400 })
      ),
      3,
      true
    )
  }, [pulseOpacity])

  const pulseStyle = useAnimatedStyle(() => ({
    opacity: pulseOpacity.value,
  }))

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 40 }}
      style={{ width: "100%" }}
    >
      <F0Text variant="heading-lg">AnimatedF0Text</F0Text>
      <View className="mb-6">
        <F0Text variant="body-sm-default" color="secondary">
          Animated text primitive powered by Reanimated. Supports entering,
          exiting, and custom animated styles.
        </F0Text>
      </View>

      {/* Entering Animations */}
      <F0Text variant="heading-md">Entering Animations</F0Text>
      <F0Text variant="body-xs-medium" color="secondary">
        Tap "Replay" to re-trigger entering animations
      </F0Text>

      <View className="mb-2 mt-2">
        <PressableFeedback
          onPress={replayEntering}
          className="bg-f0-background-secondary border border-f0-border self-start rounded-lg px-4 py-2"
        >
          <F0Text variant="body-sm-semibold">Replay</F0Text>
        </PressableFeedback>
      </View>

      <View className="mb-8 gap-4" key={enteringKey}>
        <View>
          <F0Text variant="body-xs-medium" color="tertiary">
            FadeIn
          </F0Text>
          <AnimatedF0Text
            variant="heading-xl"
            entering={FadeIn.duration(600)}
          >
            Hello, Factorial
          </AnimatedF0Text>
        </View>

        <View>
          <F0Text variant="body-xs-medium" color="tertiary">
            FadeInDown
          </F0Text>
          <AnimatedF0Text
            variant="heading-lg"
            entering={FadeInDown.duration(500)}
          >
            Sliding down
          </AnimatedF0Text>
        </View>

        <View>
          <F0Text variant="body-xs-medium" color="tertiary">
            FadeInUp
          </F0Text>
          <AnimatedF0Text
            variant="heading-md"
            entering={FadeInUp.duration(500).delay(100)}
          >
            Rising up
          </AnimatedF0Text>
        </View>

        <View>
          <F0Text variant="body-xs-medium" color="tertiary">
            FadeInLeft
          </F0Text>
          <AnimatedF0Text
            variant="body-md-semibold"
            entering={FadeInLeft.duration(500).delay(200)}
          >
            From the left
          </AnimatedF0Text>
        </View>

        <View>
          <F0Text variant="body-xs-medium" color="tertiary">
            FadeInRight
          </F0Text>
          <AnimatedF0Text
            variant="body-md-semibold"
            entering={FadeInRight.duration(500).delay(300)}
          >
            From the right
          </AnimatedF0Text>
        </View>

        <View>
          <F0Text variant="body-xs-medium" color="tertiary">
            SlideInLeft with spring
          </F0Text>
          <AnimatedF0Text
            variant="body-md-medium"
            color="accent"
            entering={SlideInLeft.springify()}
          >
            Spring slide
          </AnimatedF0Text>
        </View>

        <View>
          <F0Text variant="body-xs-medium" color="tertiary">
            ZoomIn
          </F0Text>
          <AnimatedF0Text
            variant="heading-sm"
            color="positive"
            entering={ZoomIn.duration(400).delay(200)}
          >
            Zoom!
          </AnimatedF0Text>
        </View>
      </View>

      {/* Exiting Animations */}
      <F0Text variant="heading-md">Exiting Animations</F0Text>
      <F0Text variant="body-xs-medium" color="secondary">
        Tap "Toggle" to show/hide with exit animation
      </F0Text>

      <View className="mb-2 mt-2">
        <PressableFeedback
          onPress={toggleExiting}
          className="bg-f0-background-secondary border border-f0-border self-start rounded-lg px-4 py-2"
        >
          <F0Text variant="body-sm-semibold">Toggle</F0Text>
        </PressableFeedback>
      </View>

      <View className="bg-f0-background-secondary mb-8 min-h-[120px] gap-3 rounded-lg p-4">
        {showExiting && (
          <>
            <AnimatedF0Text
              variant="heading-md"
              entering={FadeIn.duration(300)}
              exiting={FadeOut.duration(300)}
            >
              I fade in and out
            </AnimatedF0Text>
            <AnimatedF0Text
              variant="body-md-default"
              color="secondary"
              entering={SlideInRight.duration(300)}
              exiting={SlideOutLeft.duration(300)}
            >
              I slide in from right, out to left
            </AnimatedF0Text>
            <AnimatedF0Text
              variant="body-sm-semibold"
              color="accent"
              entering={SlideInLeft.duration(300)}
              exiting={SlideOutRight.duration(300)}
            >
              I slide in from left, out to right
            </AnimatedF0Text>
            <AnimatedF0Text
              variant="body-sm-default"
              color="positive"
              entering={ZoomIn.duration(300)}
              exiting={ZoomOut.duration(300)}
            >
              I zoom in and out
            </AnimatedF0Text>
          </>
        )}
      </View>

      {/* Custom Animated Styles */}
      <F0Text variant="heading-md">Custom Animated Styles</F0Text>
      <F0Text variant="body-xs-medium" color="secondary">
        Tap "Pulse" to trigger a custom opacity animation
      </F0Text>

      <View className="mb-2 mt-2">
        <PressableFeedback
          onPress={startPulse}
          className="bg-f0-background-secondary border border-f0-border self-start rounded-lg px-4 py-2"
        >
          <F0Text variant="body-sm-semibold">Pulse</F0Text>
        </PressableFeedback>
      </View>

      <View className="bg-f0-background-secondary mb-8 rounded-lg p-4">
        <AnimatedF0Text variant="heading-xl" style={pulseStyle}>
          Pulsing text
        </AnimatedF0Text>
      </View>

      {/* Staggered List */}
      <F0Text variant="heading-md">Staggered List</F0Text>
      <F0Text variant="body-xs-medium" color="secondary">
        Items appear with staggered delay
      </F0Text>

      <View className="mb-2 mt-2">
        <PressableFeedback
          onPress={replayEntering}
          className="bg-f0-background-secondary border border-f0-border self-start rounded-lg px-4 py-2"
        >
          <F0Text variant="body-sm-semibold">Replay</F0Text>
        </PressableFeedback>
      </View>

      <View className="mb-8 gap-3" key={`stagger-${enteringKey}`}>
        {[
          { text: "First item appears", color: "default" as const },
          { text: "Second item follows", color: "secondary" as const },
          { text: "Third with more delay", color: "accent" as const },
          { text: "Fourth item arrives", color: "positive" as const },
          { text: "Last one completes", color: "critical" as const },
        ].map((item, index) => (
          <AnimatedF0Text
            key={item.text}
            variant="body-md-medium"
            color={item.color}
            entering={FadeInLeft.duration(400).delay(index * 150)}
          >
            {item.text}
          </AnimatedF0Text>
        ))}
      </View>
    </ScrollView>
  )
}
