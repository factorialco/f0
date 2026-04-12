import React, { useCallback, useEffect, useRef, useState } from "react"
import { ScrollView, View, type LayoutChangeEvent } from "react-native"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  type WithSpringConfig,
} from "react-native-reanimated"

import { F0Text } from "../primitives/F0Text"
import { PressableFeedback } from "../primitives/PressableFeedback"

import {
  f0TabItemVariants,
  f0TabSeparatorClass,
  f0TabUnderlineClass,
  f0TabsContainerVariants,
} from "./F0Tabs.styles"
import type { F0TabsProps } from "./F0Tabs.types"

const SPRING_CONFIG: WithSpringConfig = {
  damping: 20,
  stiffness: 200,
  mass: 0.5,
}

/**
 * F0Tabs — Animated horizontal tab navigation strip.
 *
 * Mirrors the web `Tabs` component behaviour:
 * - **Primary** (`secondary=false`): animated pill background (`bg-f0-background-tertiary`)
 *   + sliding underline pinned to the bottom of the container.
 * - **Secondary** (`secondary=true`): animated pill background only
 *   (`bg-f0-background-inverse-secondary`), no underline.
 *
 * Both controlled (`activeTabId` + `setActiveTabId`) and uncontrolled modes are supported.
 *
 * @example
 * // Primary
 * <F0Tabs tabs={tabs} activeTabId={activeTab} setActiveTabId={setActiveTab} />
 *
 * // Secondary
 * <F0Tabs tabs={tabs} secondary activeTabId={activeTab} setActiveTabId={setActiveTab} />
 */
export const F0Tabs = React.memo(function F0Tabs({
  tabs,
  activeTabId: controlledActiveTabId,
  setActiveTabId: onChangeActiveTabId,
  secondary = false,
  embedded = false,
}: F0TabsProps) {
  const firstTab = tabs[0]

  const [activeId, setActiveId] = useState(
    controlledActiveTabId ?? firstTab?.id ?? ""
  )

  const tabLayouts = useRef<Record<string, { x: number; width: number }>>({})
  const hasInitialized = useRef(false)
  const indicatorX = useSharedValue(0)
  const indicatorWidth = useSharedValue(0)

  // Sync controlled active tab id → internal state + indicator animation
  useEffect(() => {
    if (controlledActiveTabId === undefined) return

    setActiveId(controlledActiveTabId)

    const layout = tabLayouts.current[controlledActiveTabId]
    if (layout && hasInitialized.current) {
      indicatorX.value = withSpring(layout.x, SPRING_CONFIG)
      indicatorWidth.value = withSpring(layout.width, SPRING_CONFIG)
    }
  }, [controlledActiveTabId, indicatorX, indicatorWidth])

  const handleTabLayout = useCallback(
    (id: string, event: LayoutChangeEvent) => {
      const { x, width } = event.nativeEvent.layout
      tabLayouts.current[id] = { x, width }

      // Set indicator position immediately on first active-tab layout (no spring on mount)
      if (id === activeId && !hasInitialized.current) {
        indicatorX.value = x
        indicatorWidth.value = width
        hasInitialized.current = true
      }
    },
    // activeId intentionally included so the first layout of the correct tab
    // initialises the indicator even if activeId changed before layouts fired
    [activeId, indicatorX, indicatorWidth]
  )

  const handleTabPress = useCallback(
    (id: string) => {
      const layout = tabLayouts.current[id]
      if (layout) {
        indicatorX.value = withSpring(layout.x, SPRING_CONFIG)
        indicatorWidth.value = withSpring(layout.width, SPRING_CONFIG)
      }
      setActiveId(id)
      onChangeActiveTabId?.(id)
    },
    [indicatorX, indicatorWidth, onChangeActiveTabId]
  )

  // Only the underline slides — same x/width shared values drive it
  const underlineAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
    width: indicatorWidth.value,
  }))

  // embedded: render only the first tab as non-interactive text (mirrors web)
  if (embedded) {
    return (
      <View className="h-8 items-center justify-center px-3">
        <F0Text variant="body-md-medium" color="default" numberOfLines={1}>
          {firstTab?.label ?? ""}
        </F0Text>
      </View>
    )
  }

  // single tab: render as plain non-interactive text (mirrors web)
  if (tabs.length === 1) {
    return (
      <View
        className={f0TabsContainerVariants({ secondary })}
        style={{ paddingHorizontal: 12 }}
      >
        <F0Text variant="body-md-medium" color="default" numberOfLines={1}>
          {firstTab?.label ?? ""}
        </F0Text>
      </View>
    )
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        className={f0TabsContainerVariants({ secondary })}
        accessibilityRole="tablist"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeId

          return (
            <PressableFeedback
              key={tab.id}
              className={f0TabItemVariants({ active: isActive, secondary })}
              onLayout={(e) => handleTabLayout(tab.id, e)}
              onPress={() => {
                tab.onPress?.()
                handleTabPress(tab.id)
              }}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={tab.label}
            >
              <F0Text
                variant={secondary ? "body-sm-medium" : "body-md-medium"}
                color={isActive ? "default" : "secondary"}
                numberOfLines={1}
              >
                {tab.label}
              </F0Text>
            </PressableFeedback>
          )
        })}

        {/* Separator — full-width 1px bottom border (primary only, mirrors web) */}
        {!secondary && (
          <View
            className={f0TabSeparatorClass}
            importantForAccessibility="no-hide-descendants"
            pointerEvents="none"
          />
        )}

        {/* Underline — slides under the active tab (primary only, mirrors web) */}
        {!secondary && (
          <Animated.View
            className={f0TabUnderlineClass}
            style={underlineAnimatedStyle}
            importantForAccessibility="no-hide-descendants"
            pointerEvents="none"
          />
        )}
      </View>
    </ScrollView>
  )
})
