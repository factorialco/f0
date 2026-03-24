import React, { useCallback, useEffect, useRef, useState } from "react"
import { ScrollView, View } from "react-native"

import { F0Button } from "../../../src/components/F0Button"
import { F0Progress } from "../../../src/components/F0Progress"
import { F0Text } from "../../../src/components/primitives/F0Text"

const SHOWCASE_VALUES = [0, 1, 25, 50, 99, 100] as const
const STATUS_VALUES = ["info", "positive", "warning", "critical"] as const
const CIRCULAR_SIZE_VALUES = ["default", "small"] as const
const AUTOMATED_PROGRESS_STEP = 4
const AUTOMATED_PROGRESS_INTERVAL_MS = 450
const LINEAR_LABEL_WIDTH_CLASS_NAME = "w-14 items-end"
const CUSTOM_MAX_VALUE = 3

export function F0ProgressShowcase() {
  const [automatedValue, setAutomatedValue] = useState(0)
  const [manualValue, setManualValue] = useState(0)
  const animationFrameRef = useRef<number | null>(null)

  const cancelPendingAnimationFrame = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
  }, [])

  const startManualDemo = useCallback(() => {
    cancelPendingAnimationFrame()
    setManualValue(0)

    animationFrameRef.current = requestAnimationFrame(() => {
      animationFrameRef.current = requestAnimationFrame(() => {
        setManualValue(100)
        animationFrameRef.current = null
      })
    })
  }, [cancelPendingAnimationFrame])

  const resetManualDemo = useCallback(() => {
    cancelPendingAnimationFrame()
    setManualValue(0)
  }, [cancelPendingAnimationFrame])

  useEffect(() => {
    const automatedInterval = setInterval(() => {
      setAutomatedValue((currentValue) =>
        currentValue >= 100 ? 0 : currentValue + AUTOMATED_PROGRESS_STEP
      )
    }, AUTOMATED_PROGRESS_INTERVAL_MS)

    return () => {
      clearInterval(automatedInterval)
      cancelPendingAnimationFrame()
    }
  }, [cancelPendingAnimationFrame])

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ width: "100%" }}
    >
      <F0Text variant="heading-sm" className="mb-4">
        Linear
      </F0Text>
      <View className="mb-6 gap-3">
        {SHOWCASE_VALUES.map((showcaseValue) => (
          <View key={`linear-${showcaseValue}`} className="gap-1">
            <View className="flex-row items-center gap-2">
              <View className="flex-1">
                <F0Progress
                  type="linear"
                  value={showcaseValue}
                  accessibilityLabel={`Linear progress ${showcaseValue} percent`}
                />
              </View>
              <View className={LINEAR_LABEL_WIDTH_CLASS_NAME}>
                <F0Text variant="body-sm-default">{`${showcaseValue}%`}</F0Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <F0Text variant="heading-sm" className="mb-4">
        Circular
      </F0Text>
      <View className="mb-6 gap-4">
        {STATUS_VALUES.map((status) => (
          <View key={`circular-${status}`} className="gap-2">
            <F0Text variant="body-sm-medium">{status}</F0Text>
            {CIRCULAR_SIZE_VALUES.map((size) => (
              <View key={`circular-${status}-${size}`} className="gap-2">
                <F0Text variant="body-sm-default">{size}</F0Text>
                <View className="flex-row flex-wrap gap-4">
                  {SHOWCASE_VALUES.map((showcaseValue) => (
                    <View
                      key={`circular-${status}-${size}-${showcaseValue}`}
                      className="items-center gap-2"
                    >
                      <F0Progress
                        type="circular"
                        value={showcaseValue}
                        size={size}
                        status={status}
                        label={`${showcaseValue}%`}
                        accessibilityLabel={`Circular ${status} ${size} progress ${showcaseValue} percent`}
                      />
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>

      <F0Text variant="heading-sm" className="mb-4">
        Manual Update
      </F0Text>
      <View className="gap-3">
        <View className="w-64 gap-2">
          <View className="flex-row items-center gap-2">
            <View className="flex-1">
              <F0Progress
                type="linear"
                value={manualValue}
                status="info"
                accessibilityLabel="Manual linear progress demo"
              />
            </View>
            <View className={LINEAR_LABEL_WIDTH_CLASS_NAME}>
              <F0Text variant="body-sm-default">{`${manualValue}%`}</F0Text>
            </View>
          </View>
          <F0Progress
            type="circular"
            value={manualValue}
            size="default"
            status="info"
            label={`${manualValue}%`}
            accessibilityLabel="Manual circular progress demo"
          />
          <View className="flex-row gap-2">
            <F0Button label="Run 0 to 100" onPress={startManualDemo} />
            <F0Button
              label="Reset to 0"
              onPress={resetManualDemo}
              variant="outline"
            />
          </View>
        </View>
        <View className="items-start gap-1"></View>
      </View>

      <F0Text variant="heading-sm" className="mt-6 mb-4">
        Custom Max
      </F0Text>
      <View className="gap-3">
        <View className="w-64 gap-2">
          <View className="flex-row items-center gap-2">
            <View className="flex-1">
              <F0Progress
                type="linear"
                value={2}
                max={CUSTOM_MAX_VALUE}
                status="positive"
                accessibilityLabel="Custom max linear progress demo"
              />
            </View>
            <View className={LINEAR_LABEL_WIDTH_CLASS_NAME}>
              <F0Text variant="body-sm-default">2/3</F0Text>
            </View>
          </View>
          <F0Progress
            type="circular"
            value={2}
            max={CUSTOM_MAX_VALUE}
            size="default"
            status="positive"
            label="2/3"
            accessibilityLabel="Custom max circular progress demo"
          />
        </View>
      </View>

      <F0Text variant="heading-sm" className="mt-6 mb-4">
        Automated Updates
      </F0Text>
      <View className="gap-3">
        <View className="w-56 flex-row items-center gap-2">
          <View className="flex-1">
            <F0Progress
              type="linear"
              value={automatedValue}
              status="info"
              accessibilityLabel="Automated linear progress demo"
            />
          </View>
          <View className={LINEAR_LABEL_WIDTH_CLASS_NAME}>
            <F0Text variant="body-sm-default">{`${automatedValue}%`}</F0Text>
          </View>
        </View>
        <View className="items-start">
          <F0Progress
            type="circular"
            value={automatedValue}
            size="default"
            status="info"
            label={`${automatedValue}%`}
            accessibilityLabel="Automated circular progress demo"
          />
        </View>
      </View>
    </ScrollView>
  )
}
