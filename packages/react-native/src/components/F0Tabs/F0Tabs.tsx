import React, { useCallback, useEffect, useRef, useState } from "react"
import { ScrollView, View, type LayoutChangeEvent } from "react-native"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  type WithSpringConfig,
} from "react-native-reanimated"

import { cn } from "../../lib/utils"
import { F0Text } from "../primitives/F0Text"
import { PressableFeedback } from "../primitives/PressableFeedback"

import {
  f0TabsContentInsetVariants,
  f0TabItemVariants,
  f0TabSeparatorContentInsetVariants,
  f0TabSeparatorVariants,
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
  disabled = false,
  fullWidth = false,
  separatorInset = "full",
  separatorWidth = "container",
  contentInset = "sm",
  embedded = false,
}: F0TabsProps) {
  const firstTab = tabs[0]

  const [activeId, setActiveId] = useState(
    controlledActiveTabId ?? firstTab?.id ?? ""
  )
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)

  const scrollViewRef = useRef<ScrollView>(null)
  const tabLayouts = useRef<Record<string, { x: number; width: number }>>({})
  const hasInitialized = useRef(false)
  const indicatorX = useSharedValue(0)
  const indicatorWidth = useSharedValue(0)

  const scrollToTab = useCallback(
    (id: string, animated = true) => {
      if (fullWidth) return

      const layout = tabLayouts.current[id]
      if (!layout || containerWidth <= 0) return

      const targetX = layout.x + layout.width / 2 - containerWidth / 2
      const maxOffset = Math.max(0, contentWidth - containerWidth)
      const clampedOffset = Math.max(0, Math.min(targetX, maxOffset))

      scrollViewRef.current?.scrollTo({ x: clampedOffset, animated })
    },
    [containerWidth, contentWidth, fullWidth]
  )

  // Sync controlled active tab id → internal state + indicator animation
  useEffect(() => {
    if (controlledActiveTabId === undefined) return

    setActiveId(controlledActiveTabId)

    const layout = tabLayouts.current[controlledActiveTabId]
    if (layout && hasInitialized.current) {
      indicatorX.value = withSpring(layout.x, SPRING_CONFIG)
      indicatorWidth.value = withSpring(layout.width, SPRING_CONFIG)
      scrollToTab(controlledActiveTabId)
    }
  }, [controlledActiveTabId, indicatorX, indicatorWidth, scrollToTab])

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
      scrollToTab(id)
    },
    [indicatorX, indicatorWidth, onChangeActiveTabId, scrollToTab]
  )

  // Only the underline slides — same x/width shared values drive it
  const underlineAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
    width: indicatorWidth.value,
  }))

  const tabListStyle =
    separatorWidth === "container" && !fullWidth && containerWidth > 0
      ? { minWidth: containerWidth }
      : undefined

  // embedded: render only the first tab as non-interactive text (mirrors web)
  if (embedded) {
    return (
      <View
        className={cn(
          "h-8 items-center justify-center",
          f0TabsContentInsetVariants({ contentInset })
        )}
      >
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
        className={cn(
          f0TabsContainerVariants({ secondary, fullWidth }),
          f0TabsContentInsetVariants({ contentInset })
        )}
      >
        <F0Text variant="body-md-medium" color="default" numberOfLines={1}>
          {firstTab?.label ?? ""}
        </F0Text>
      </View>
    )
  }

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      scrollEnabled={fullWidth ? false : undefined}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={fullWidth ? { width: "100%" } : undefined}
      onLayout={(event) => {
        setContainerWidth(event.nativeEvent.layout.width)
      }}
      onContentSizeChange={(width) => {
        setContentWidth(width)
      }}
    >
      <View
        className={cn(
          f0TabsContainerVariants({ secondary, fullWidth }),
          f0TabsContentInsetVariants({ contentInset })
        )}
        style={tabListStyle}
        accessibilityRole="tablist"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeId
          const isDisabled = disabled || Boolean(tab.disabled)

          return (
            <PressableFeedback
              key={tab.id}
              className={f0TabItemVariants({
                active: isActive,
                secondary,
                fullWidth,
                disabled: isDisabled,
              })}
              onLayout={(e) => handleTabLayout(tab.id, e)}
              disabled={isDisabled}
              onPress={() => {
                if (isDisabled) return
                tab.onPress?.()
                handleTabPress(tab.id)
              }}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive, disabled: isDisabled }}
              accessibilityLabel={tab.label}
            >
              <F0Text
                variant={secondary ? "body-sm-medium" : "body-md-medium"}
                color={
                  isDisabled ? "disabled" : isActive ? "default" : "secondary"
                }
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
            className={cn(
              f0TabSeparatorVariants({ inset: separatorInset }),
              separatorInset === "content"
                ? f0TabSeparatorContentInsetVariants({ contentInset })
                : undefined
            )}
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
