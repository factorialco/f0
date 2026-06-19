import React, { useCallback, useMemo, useState } from "react"
import { ActivityIndicator, View, type ColorValue } from "react-native"
import { useCSSVariable } from "uniwind"

import { Cross } from "../../icons/app"
import { enforceTextFormat } from "../../lib/text"
import { F0AvatarAlert } from "../F0Avatar"
import { F0Button } from "../F0Button"
import { F0Text } from "../primitives/F0Text"

import {
  F0_BANNER_TEXT_COLORS,
  bannerVariants,
} from "./F0Banner.styles"
import type {
  F0BannerLevel,
  F0BannerProps,
} from "./F0Banner.types"

const BANNER_SPINNER_SIZE = 16

// Resolved to concrete colors because ActivityIndicator needs a value, not a class.
const BANNER_SPINNER_COLOR_VARIABLES = [
  "--color-f0-icon-info",
  "--color-f0-icon-warning",
  "--color-f0-icon-positive",
  "--color-f0-icon-critical",
] as const

function BannerSpinner({ level }: { level: F0BannerLevel }) {
  const [infoColor, warningColor, positiveColor, criticalColor] = useCSSVariable(
    [...BANNER_SPINNER_COLOR_VARIABLES]
  )

  const colorByLevel = useMemo<
    Record<F0BannerLevel, string | number | undefined>
  >(
    () => ({
      info: infoColor,
      warning: warningColor,
      positive: positiveColor,
      critical: criticalColor,
    }),
    [infoColor, warningColor, positiveColor, criticalColor]
  )

  return (
    <ActivityIndicator
      testID="f0-banner-spinner"
      accessibilityLabel="Loading indicator"
      size={BANNER_SPINNER_SIZE}
      color={colorByLevel[level] as ColorValue | undefined}
    />
  )
}

/**
 * Inline status banner. Icon, text color, and background tint derive from `level`.
 *
 * @example
 * <F0Banner level="warning" message="Your clock-in is still open." dismissible />
 */
const F0Banner = React.memo(function F0Banner({
  message,
  level,
  link,
  action,
  loading = false,
  dismissible = false,
  onDismiss,
  dismissLabel = "Dismiss",
  numberOfLines,
  testID,
}: F0BannerProps) {
  enforceTextFormat(message, { disallowEmpty: true })

  const [dismissed, setDismissed] = useState(false)

  const canDismiss = dismissible || Boolean(onDismiss)

  const handleDismiss = useCallback(() => {
    setDismissed(true)
    onDismiss?.()
  }, [onDismiss])

  const hasTrailing = Boolean(link || action || loading || canDismiss)

  if (dismissed) return null

  return (
    <View
      testID={testID}
      accessibilityRole="alert"
      className={bannerVariants({ level })}
    >
      <F0AvatarAlert alertType={level} size="sm" />

      <F0Text
        className="flex-1"
        variant="body-md-medium"
        color={F0_BANNER_TEXT_COLORS[level]}
        numberOfLines={numberOfLines}
      >
        {message}
      </F0Text>

      {hasTrailing && (
        <View className="flex-row items-center gap-3">
          {link}
          {action && <F0Button {...action} variant="outline" size="sm" />}
          {loading && <BannerSpinner level={level} />}
          {canDismiss && (
            <F0Button
              icon={Cross}
              label={dismissLabel}
              hideLabel
              round
              variant="ghost"
              size="sm"
              onPress={handleDismiss}
              testID="f0-banner-dismiss"
            />
          )}
        </View>
      )}
    </View>
  )
})

F0Banner.displayName = "F0Banner"

export { F0Banner }
