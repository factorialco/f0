import React, { useEffect } from 'react'
import { View, StyleSheet, ColorValue } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import { LinearGradient } from 'expo-linear-gradient'

const AnimatedLinearGradient =
  Animated.createAnimatedComponent(LinearGradient)

// Dimensions matching mobile app
const dimensions = {
  s12: 12,
  s16: 16,
  s20: 20,
  s24: 24,
  s32: 32,
  s128: 128,
}

const SkeletonBubble = ({
  width,
  height,
  borderRadius,
  gradientColors,
  gradientStart,
  gradientEnd,
}: {
  width: number
  height: number
  borderRadius: number
  gradientColors: readonly [ColorValue, ColorValue, ...ColorValue[]]
  gradientStart: { x: number; y: number }
  gradientEnd: { x: number; y: number }
}) => {
  const opacity = useSharedValue(1)

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.4, { duration: 1000 }),
        withTiming(1, { duration: 1000 })
      ),
      -1,
      true
    )
  }, [opacity])

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }))

  return (
    <AnimatedLinearGradient
      colors={gradientColors}
      start={gradientStart}
      end={gradientEnd}
      style={[
        {
          width,
          height,
          borderRadius,
        },
        animatedStyle,
      ]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: dimensions.s20,
    paddingTop: dimensions.s128,
  },
  headerSection: {
    alignItems: 'flex-start',
    marginBottom: dimensions.s24,
  },
  secondElement: {
    alignItems: 'flex-start',
    marginBottom: dimensions.s16,
  },
  thirdElement: {
    alignItems: 'flex-start',
    marginBottom: dimensions.s32,
  },
  bubbleRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: dimensions.s12,
    marginBottom: dimensions.s16,
  },
  latestBubble: {
    alignItems: 'flex-start',
  },
})

/**
 * Skeleton loading component shown while AI Agent chat is initializing.
 * Displays animated placeholder bubbles to indicate loading state.
 * Uses custom skeleton animation with reanimated and specific gradients/dimensions.
 * Shown until DOM component is loaded.
 */
export const AiAgentChatSkeleton = () => {
  return (
    <View style={styles.container}>
      {/* First avatar bubble - 40x40px */}
      <View style={styles.headerSection}>
        <SkeletonBubble
          width={40}
          height={40}
          borderRadius={10}
          gradientColors={
            ['rgba(5, 31, 81, 0.04)', 'rgba(255, 255, 255, 0.04)'] as const
          }
          gradientStart={{ x: 0, y: 0 }}
          gradientEnd={{ x: 1, y: 1 }}
        />
      </View>

      {/* Second element - 111x16px */}
      <View style={styles.secondElement}>
        <SkeletonBubble
          width={111}
          height={16}
          borderRadius={6}
          gradientColors={
            ['rgba(5, 31, 81, 0.04)', 'rgba(255, 255, 255, 0.04)'] as const
          }
          gradientStart={{ x: 0, y: 0 }}
          gradientEnd={{ x: 1, y: 0 }}
        />
      </View>

      {/* Third element - 260x22px */}
      <View style={styles.thirdElement}>
        <SkeletonBubble
          width={260}
          height={22}
          borderRadius={8}
          gradientColors={
            ['rgba(5, 31, 81, 0.04)', 'rgba(255, 255, 255, 0.04)'] as const
          }
          gradientStart={{ x: 0, y: 0 }}
          gradientEnd={{ x: 1, y: 0 }}
        />
      </View>

      {/* Row of bubbles - 260x44px each */}
      <View style={styles.bubbleRow}>
        <SkeletonBubble
          width={260}
          height={44}
          borderRadius={16}
          gradientColors={
            ['rgba(5, 31, 81, 0.04)', 'rgba(255, 255, 255, 0.04)'] as const
          }
          gradientStart={{ x: 0, y: 0 }}
          gradientEnd={{ x: 1, y: 0 }}
        />
        <SkeletonBubble
          width={260}
          height={44}
          borderRadius={16}
          gradientColors={
            ['rgba(5, 31, 81, 0.04)', 'rgba(255, 255, 255, 0.04)'] as const
          }
          gradientStart={{ x: 0, y: 0 }}
          gradientEnd={{ x: 1, y: 0 }}
        />
      </View>

      {/* Latest bubble - 369x44px */}
      <View style={styles.latestBubble}>
        <SkeletonBubble
          width={369}
          height={44}
          borderRadius={12}
          gradientColors={
            ['rgba(5, 31, 81, 0.04)', 'rgba(255, 255, 255, 0.04)'] as const
          }
          gradientStart={{ x: 0, y: 0 }}
          gradientEnd={{ x: 1, y: 0 }}
        />
      </View>
    </View>
  )
}
