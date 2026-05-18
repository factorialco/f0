import React, { useCallback, useState } from "react"
import { ScrollView, View } from "react-native"

import { F0Button } from "../F0Button"
import { F0Step } from "../F0Step"
import { F0Text } from "../primitives/F0Text"

import {
  wizardContentVariants,
  wizardFooterButtonVariants,
  wizardFooterVariants,
  wizardHeaderVariants,
  wizardRootVariants,
  wizardScrollContentStyle,
  wizardTitleBlockVariants,
} from "./F0Wizard.styles"
import type { F0WizardProps } from "./F0Wizard.types"

/**
 * F0Wizard - Multi-step flow container for React Native.
 *
 * Manages step navigation, progress display, and per-step validation.
 * Step content is fully consumer-controlled via `renderContent` — no form
 * primitives are required; pass any React Native components as children.
 *
 * Tapping Next runs the optional per-step `onNext` callback before advancing.
 * The Next button is disabled when `canAdvance` is explicitly `false`.
 *
 * F0Wizard is a standalone `View`-based container with no built-in modal or
 * sheet behavior. The consumer is responsible for embedding it inside a
 * `Modal`, bottom sheet, or full-screen layout as appropriate.
 *
 * @example
 * <!-- prettier-ignore -->
 * <F0Wizard
 *   steps={[
 *     {
 *       title: "Personal info",
 *       renderContent: () => <TextInput placeholder="Name" />,
 *       canAdvance: name.length > 0,
 *     },
 *     {
 *       title: "Confirm",
 *       renderContent: () => <ConfirmationView />,
 *     },
 *   ]}
 *   nextLabel="Next"
 *   previousLabel="Back"
 *   submitLabel="Submit"
 *   onSubmit={handleSubmit}
 * />
 */
const F0Wizard = React.memo(function F0Wizard({
  steps,
  defaultStepIndex = 0,
  nextLabel: globalNextLabel,
  previousLabel: globalPreviousLabel,
  submitLabel,
  stepLabel,
  onStepChanged,
  onSubmit,
  accessibilityLabel,
  testID,
}: F0WizardProps) {
  const [currentStep, setCurrentStep] = useState(() =>
    Math.min(Math.max(0, defaultStepIndex), steps.length - 1)
  )
  const [isAdvancing, setIsAdvancing] = useState(false)

  const step = steps[currentStep]
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1
  const canAdvance = step?.canAdvance !== false

  const goToStep = useCallback(
    (index: number) => {
      setCurrentStep(index)
      onStepChanged?.(index)
    },
    [onStepChanged]
  )

  const handleNext = useCallback(async () => {
    if (!step || isAdvancing) return

    if (step.onNext) {
      setIsAdvancing(true)
      try {
        const result = await step.onNext()
        if (!result.canAdvance) return
      } finally {
        setIsAdvancing(false)
      }
    }

    if (isLastStep) {
      setIsAdvancing(true)
      try {
        await onSubmit?.()
      } finally {
        setIsAdvancing(false)
      }
    } else {
      goToStep(currentStep + 1)
    }
  }, [step, isAdvancing, isLastStep, onSubmit, goToStep, currentStep])

  const handlePrevious = useCallback(() => {
    if (!isFirstStep) {
      goToStep(currentStep - 1)
    }
  }, [isFirstStep, goToStep, currentStep])

  const nextButtonLabel = isLastStep
    ? submitLabel
    : (step?.nextLabel ?? globalNextLabel)
  const backButtonLabel = step?.previousLabel ?? globalPreviousLabel

  if (steps.length === 0) return null

  return (
    <View
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      className={wizardRootVariants()}
    >
      {/* Header: progress bar + title block */}
      <View className={wizardHeaderVariants()}>
        <F0Step steps={steps.length} currentStep={currentStep} />
        <View className={wizardTitleBlockVariants()}>
          {stepLabel ? (
            <F0Text variant="body-sm-default" color="secondary">
              {stepLabel} {currentStep + 1}
            </F0Text>
          ) : null}
          <F0Text variant="heading-md">{step?.title ?? ""}</F0Text>
          {step?.subtitle ? (
            <F0Text variant="body-md-default" color="secondary">
              {step.subtitle}
            </F0Text>
          ) : null}
        </View>
      </View>

      {/* Scrollable content area */}
      <View className={wizardContentVariants()}>
        <ScrollView
          contentContainerStyle={wizardScrollContentStyle}
          keyboardShouldPersistTaps="handled"
          testID={testID ? `${testID}-content` : undefined}
        >
          {step?.renderContent({ stepIndex: currentStep })}
        </ScrollView>
      </View>

      {/* Footer: Back + Next/Submit buttons.
          Each button is wrapped in a flex-1 flex-row View because F0Button fullWidth uses
          className="flex flex-1" internally (Uniwind + Tailwind), which collapses to 32px
          inside a flex-row container without an explicit height. The View wrapper
          provides the correct stretch behavior. */}
      <View className={wizardFooterVariants()}>
        <View className={wizardFooterButtonVariants()}>
          <F0Button
            label={backButtonLabel}
            variant="outline"
            onPress={handlePrevious}
            disabled={isFirstStep}
            fullWidth
            testID={testID ? `${testID}-back-button` : undefined}
          />
        </View>
        <View className={wizardFooterButtonVariants()}>
          <F0Button
            label={nextButtonLabel}
            onPress={handleNext}
            disabled={!canAdvance}
            loading={isAdvancing}
            fullWidth
            testID={testID ? `${testID}-next-button` : undefined}
          />
        </View>
      </View>
    </View>
  )
})

F0Wizard.displayName = "F0Wizard"

export { F0Wizard }
