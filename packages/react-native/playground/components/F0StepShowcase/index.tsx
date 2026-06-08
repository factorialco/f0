import React, { useState } from "react"
import { ScrollView, View } from "react-native"

import { F0Button } from "../../../src/components/F0Button"
import { F0Step } from "../../../src/components/F0Step"
import { F0Text } from "../../../src/components/primitives/F0Text"

const STEP_PROGRESS_CASES = [
  { label: "Start", stepStates: ["active", "pending", "pending", "pending"] },
  {
    label: "Middle",
    stepStates: ["completed", "active", "pending", "pending"],
  },
  {
    label: "Later",
    stepStates: ["completed", "completed", "active", "pending"],
  },
  {
    label: "Completed quiz",
    stepStates: ["completed", "completed", "completed", "completed"],
  },
] as const

const NORMALIZATION_CASES = [
  { label: "Current step below zero", currentStep: -2, steps: 4 },
  { label: "Current step above range", currentStep: 8, steps: 4 },
  { label: "Invalid step count", currentStep: Number.NaN, steps: Number.NaN },
] as const

const INTERACTIVE_STEPS = 5

export function F0StepShowcase() {
  const [interactiveStep, setInteractiveStep] = useState(1)
  const [furthestReachedStep, setFurthestReachedStep] = useState(1)

  const goToStep = (nextStep: number) => {
    setInteractiveStep(nextStep)
    setFurthestReachedStep((currentFurthestReachedStep) =>
      Math.max(currentFurthestReachedStep, nextStep)
    )
  }

  const resetInteractiveProgress = () => {
    setInteractiveStep(1)
    setFurthestReachedStep(1)
  }

  const sectionTitle = (title: string) => (
    <F0Text variant="heading-sm" className="mb-3">
      {title}
    </F0Text>
  )

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 40 }}
      style={{ width: "100%" }}
    >
      {sectionTitle("Top Bar")}
      <View className="mb-6 gap-3">
        {STEP_PROGRESS_CASES.map((stepCase) => (
          <View key={stepCase.label} className="gap-1">
            <F0Text variant="body-sm-medium">{stepCase.label}</F0Text>
            <F0Step
              stepStates={stepCase.stepStates}
              accessibilityLabel={`${stepCase.label} progress`}
            />
          </View>
        ))}
      </View>

      {sectionTitle("Interactive Navigation")}
      <View className="mb-6 gap-2">
        <F0Text variant="body-sm-default">
          The bar is not pressable. Navigation is controlled externally with the
          buttons below.
        </F0Text>
        <F0Text variant="body-sm-default">
          Going back only changes the active segment. Completed segments stay
          completed through `furthestReachedStep`.
        </F0Text>
        <F0Text variant="body-sm-medium">
          Current step: {interactiveStep + 1}/{INTERACTIVE_STEPS}
        </F0Text>
        <F0Text variant="body-sm-default">
          Furthest reached step: {furthestReachedStep + 1}/{INTERACTIVE_STEPS}
        </F0Text>
        <F0Step
          steps={INTERACTIVE_STEPS}
          currentStep={interactiveStep}
          furthestReachedStep={furthestReachedStep}
          accessibilityLabel="Interactive quiz progress"
        />
        <View className="mt-2 flex-row flex-wrap gap-2">
          <F0Button
            label="Back"
            variant="outline"
            disabled={interactiveStep === 0}
            onPress={() => goToStep(interactiveStep - 1)}
          />
          <F0Button
            label="Next"
            disabled={interactiveStep === INTERACTIVE_STEPS - 1}
            onPress={() => goToStep(interactiveStep + 1)}
          />
          <F0Button
            label="Reset"
            variant="neutral"
            onPress={resetInteractiveProgress}
          />
        </View>
      </View>
      {sectionTitle("Normalization")}
      <View className="gap-3">
        {NORMALIZATION_CASES.map((stepCase) => (
          <View key={stepCase.label} className="gap-1">
            <F0Text variant="body-sm-medium">{stepCase.label}</F0Text>
            <F0Step
              steps={stepCase.steps}
              currentStep={stepCase.currentStep}
              accessibilityLabel={`${stepCase.label} progress`}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
