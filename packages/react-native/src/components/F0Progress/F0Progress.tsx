import React, { forwardRef, useEffect, useMemo, useRef } from "react"
import { View } from "react-native"
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"
import Svg, { Circle } from "react-native-svg"
import { useCSSVariable } from "uniwind"

import { F0Text } from "../primitives/F0Text"

import {
  F0_PROGRESS_CIRCULAR_BACKGROUND_OPACITY,
  F0_PROGRESS_CIRCULAR_METRICS,
  F0_PROGRESS_DEFAULT_CIRCULAR_SIZE,
  f0ProgressLinearFillVariants,
  f0ProgressLinearTrackVariants,
  f0ProgressRootVariants,
  f0ProgressVisualVariants,
} from "./F0Progress.styles"
import type { F0ProgressProps } from "./F0Progress.types"

const FILL_COLOR_VARIABLES = [
  "--color-f0-icon-info",
  "--color-f0-icon-positive",
  "--color-f0-icon-warning",
  "--color-f0-icon-critical",
] as const

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const F0_PROGRESS_MIN = 0
const F0_PROGRESS_MAX = 100
const F0_PROGRESS_DEFAULT_MAX = 100
const F0_PROGRESS_MIN_TIMING_DURATION = 220
const F0_PROGRESS_MAX_TIMING_DURATION = 900
const F0_PROGRESS_MS_PER_PERCENT = 9
const F0_PROGRESS_FILL_TRANSFORM_ORIGIN = "left center"

function normalizeMax(max?: number): number {
  if (!Number.isFinite(max) || max === undefined || max <= F0_PROGRESS_MIN) {
    return F0_PROGRESS_DEFAULT_MAX
  }

  return max
}

function normalizeValue(value: number, max = F0_PROGRESS_DEFAULT_MAX): number {
  if (!Number.isFinite(value)) {
    return F0_PROGRESS_MIN
  }

  return Math.min(max, Math.max(F0_PROGRESS_MIN, value))
}

function getProgressPercentage(value: number, max?: number): number {
  const normalizedMax = normalizeMax(max)
  const normalizedValue = normalizeValue(value, normalizedMax)

  return (normalizedValue / normalizedMax) * F0_PROGRESS_MAX
}

function getTimingConfig(fromValue: number, toValue: number) {
  const percentageDelta = Math.abs(toValue - fromValue)

  return {
    duration: Math.min(
      F0_PROGRESS_MAX_TIMING_DURATION,
      Math.max(
        F0_PROGRESS_MIN_TIMING_DURATION,
        percentageDelta * F0_PROGRESS_MS_PER_PERCENT
      )
    ),
    easing: Easing.linear,
    reduceMotion: ReduceMotion.System,
  }
}

function getCircularStrokeDashoffset(
  progress: number,
  circumference: number,
  strokeWidth: number
): number {
  const normalizedProgress = normalizeValue(progress)

  if (normalizedProgress <= F0_PROGRESS_MIN) {
    return circumference
  }

  if (normalizedProgress >= F0_PROGRESS_MAX) {
    return 0
  }

  return Math.min(
    circumference,
    circumference -
      (normalizedProgress / F0_PROGRESS_MAX) * circumference +
      strokeWidth
  )
}

/**
 * F0Progress - Determinate progress indicator with linear and circular presentations.
 *
 * Normalizes input values, exposes progressbar accessibility semantics, and animates
 * transitions between values for both linear and circular variants.
 *
 * @example
 * <F0Progress type="linear" value={60} />
 * <F0Progress type="circular" value={3} max={5} status="positive" />
 * <F0Progress type="linear" value={75} label="75%" status="warning" />
 */
const F0Progress = React.memo(
  forwardRef<View, F0ProgressProps>(function F0Progress(
    {
      type,
      value,
      max = F0_PROGRESS_DEFAULT_MAX,
      size = F0_PROGRESS_DEFAULT_CIRCULAR_SIZE,
      status = "info",
      label,
      accessibilityLabel,
      testID,
    },
    ref
  ) {
    const [
      fillColorInfo,
      fillColorPositive,
      fillColorWarning,
      fillColorCritical,
    ] = useCSSVariable([...FILL_COLOR_VARIABLES])
    const normalizedMax = useMemo(() => normalizeMax(max), [max])
    const normalizedValue = useMemo(
      () => normalizeValue(value, normalizedMax),
      [normalizedMax, value]
    )
    const progressPercentage = useMemo(
      () => getProgressPercentage(value, normalizedMax),
      [normalizedMax, value]
    )
    const animatedProgress = useSharedValue(progressPercentage)
    const previousTargetValueRef = useRef(progressPercentage)
    const hasLabel = Boolean(label)
    const fillColorByStatus = useMemo(
      () => ({
        info: fillColorInfo,
        positive: fillColorPositive,
        warning: fillColorWarning,
        critical: fillColorCritical,
      }),
      [fillColorCritical, fillColorInfo, fillColorPositive, fillColorWarning]
    )
    const circularMetrics =
      F0_PROGRESS_CIRCULAR_METRICS[size] ??
      F0_PROGRESS_CIRCULAR_METRICS[F0_PROGRESS_DEFAULT_CIRCULAR_SIZE]
    const fillColor = fillColorByStatus[status]

    useEffect(() => {
      const timingConfig = getTimingConfig(
        previousTargetValueRef.current,
        progressPercentage
      )

      previousTargetValueRef.current = progressPercentage
      animatedProgress.value = withTiming(progressPercentage, timingConfig)
    }, [animatedProgress, progressPercentage])

    const accessibilityValue = useMemo(
      () => ({
        min: F0_PROGRESS_MIN,
        max: normalizedMax,
        now: normalizedValue,
      }),
      [normalizedMax, normalizedValue]
    )

    const linearFillStyle = useAnimatedStyle(() => {
      return {
        transformOrigin: F0_PROGRESS_FILL_TRANSFORM_ORIGIN,
        transform: [{ scaleX: animatedProgress.value / F0_PROGRESS_MAX }],
      }
    })

    const circularProgressAnimatedProps = useAnimatedProps(() => {
      "worklet"

      const normalizedProgress = Math.min(
        F0_PROGRESS_MAX,
        Math.max(F0_PROGRESS_MIN, animatedProgress.value)
      )

      if (normalizedProgress <= F0_PROGRESS_MIN) {
        return {
          strokeDashoffset: circularMetrics.circumference,
        }
      }

      if (normalizedProgress >= F0_PROGRESS_MAX) {
        return {
          strokeDashoffset: 0,
        }
      }

      return {
        strokeDashoffset: Math.min(
          circularMetrics.circumference,
          circularMetrics.circumference -
            (normalizedProgress / F0_PROGRESS_MAX) *
              circularMetrics.circumference +
            circularMetrics.strokeWidth
        ),
      }
    })

    const circularVisualStyle = useMemo(
      () => ({
        width: circularMetrics.size,
        height: circularMetrics.size,
        alignItems: "center" as const,
        justifyContent: "center" as const,
      }),
      [circularMetrics.size]
    )

    const circularBackgroundStyle = useMemo(
      () => ({
        position: "absolute" as const,
        width: circularMetrics.size,
        height: circularMetrics.size,
        borderRadius: circularMetrics.size / 2,
        backgroundColor: String(fillColor),
        opacity: F0_PROGRESS_CIRCULAR_BACKGROUND_OPACITY,
      }),
      [circularMetrics.size, fillColor]
    )

    return (
      <View
        ref={ref}
        accessible
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="progressbar"
        accessibilityValue={accessibilityValue}
        className={f0ProgressRootVariants({ type, withLabel: hasLabel })}
        testID={testID}
      >
        <View
          className={f0ProgressVisualVariants({ type, withLabel: hasLabel })}
          style={type === "circular" ? circularVisualStyle : undefined}
        >
          {type === "linear" ? (
            <View
              className={f0ProgressLinearTrackVariants({ status })}
              testID="f0-progress-linear-track"
            >
              <Animated.View
                className={f0ProgressLinearFillVariants({ status })}
                style={linearFillStyle}
                testID="f0-progress-linear-fill"
              />
            </View>
          ) : (
            <>
              <View
                style={circularBackgroundStyle}
                testID="f0-progress-circular-track"
              />
              <Svg
                width={circularMetrics.progressSize}
                height={circularMetrics.progressSize}
                viewBox={`0 0 ${circularMetrics.progressSize} ${circularMetrics.progressSize}`}
                testID="f0-progress-circular-svg"
              >
                <AnimatedCircle
                  animatedProps={circularProgressAnimatedProps}
                  cx={circularMetrics.progressSize / 2}
                  cy={circularMetrics.progressSize / 2}
                  r={circularMetrics.radius}
                  stroke={String(fillColor)}
                  strokeWidth={circularMetrics.strokeWidth}
                  fill="none"
                  strokeDasharray={`${circularMetrics.circumference}`}
                  strokeLinecap="round"
                  rotation={-90}
                  origin={`${circularMetrics.progressSize / 2}, ${circularMetrics.progressSize / 2}`}
                  testID="f0-progress-circular-fill"
                />
              </Svg>
            </>
          )}
        </View>
        {hasLabel && (
          <F0Text testID="f0-progress-label" variant="body-sm-default">
            {label}
          </F0Text>
        )}
      </View>
    )
  })
)

F0Progress.displayName = "F0Progress"

export { F0Progress, getCircularStrokeDashoffset, normalizeValue }
