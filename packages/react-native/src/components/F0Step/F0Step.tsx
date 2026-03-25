import React, { useMemo } from "react"
import { View } from "react-native"

import {
  F0_STEP_DEFAULT_TEST_ID_PREFIX,
  f0StepGroupVariants,
} from "./F0Step.styles"
import {
  F0_STEP_STATES,
  type F0StepProps,
  type F0StepState,
} from "./F0Step.types"
import { F0StepSegment } from "./F0StepSegment"

const F0_STEP_MIN = 1
const F0_STEP_START = 0
const F0_PROGRESS_MIN = 0

function isExplicitStateMode(
  props: F0StepProps
): props is Extract<F0StepProps, { stepStates: readonly F0StepState[] }> {
  return "stepStates" in props
}

function normalizeSteps(steps: number): number {
  if (!Number.isFinite(steps)) {
    return F0_STEP_MIN
  }

  return Math.max(F0_STEP_MIN, Math.floor(steps))
}

function normalizeCurrentStep(currentStep: number, steps: number): number {
  const normalizedSteps = normalizeSteps(steps)

  if (!Number.isFinite(currentStep)) {
    return F0_STEP_START
  }

  return Math.min(
    normalizedSteps - 1,
    Math.max(F0_STEP_START, Math.floor(currentStep))
  )
}

function normalizeFurthestReachedStep(
  furthestReachedStep: number | undefined,
  currentStep: number,
  steps: number
): number {
  if (furthestReachedStep === undefined) {
    return currentStep
  }

  const normalizedFurthestReachedStep = normalizeCurrentStep(
    furthestReachedStep,
    steps
  )

  return Math.max(normalizedFurthestReachedStep, currentStep)
}

function normalizeStepStates(
  stepStates: readonly F0StepState[]
): F0StepState[] {
  if (!Array.isArray(stepStates) || stepStates.length === 0) {
    return ["pending"]
  }

  return stepStates.map((state) => {
    if (F0_STEP_STATES.includes(state)) {
      return state
    }

    return "pending"
  })
}

function deriveStepStates(
  steps: number,
  currentStep: number,
  furthestReachedStep?: number
): F0StepState[] {
  const normalizedSteps = normalizeSteps(steps)
  const normalizedCurrentStep = normalizeCurrentStep(
    currentStep,
    normalizedSteps
  )
  const normalizedFurthestReachedStep = normalizeFurthestReachedStep(
    furthestReachedStep,
    normalizedCurrentStep,
    normalizedSteps
  )

  return Array.from({ length: normalizedSteps }, (_, index) => {
    if (index === normalizedCurrentStep) {
      return "active"
    }

    if (index <= normalizedFurthestReachedStep) {
      return "completed"
    }

    return "pending"
  })
}

function getProgressValue(stepStates: readonly F0StepState[]): number {
  return stepStates.filter((state) => state !== "pending").length
}

/**
 * F0Step - Segmented progress bar for multi-step flows.
 *
 * Supports both derived progress (`steps`, `currentStep`, `furthestReachedStep`)
 * and fully controlled visual state via `stepStates`. The bar itself is decorative,
 * while the host owns navigation and completion history.
 *
 * @example
 * <F0Step steps={4} currentStep={1} furthestReachedStep={2} />
 */
const F0Step = React.memo(function F0Step(props: F0StepProps) {
  const { accessibilityLabel, testID } = props

  const resolvedStepStates = useMemo(() => {
    if (isExplicitStateMode(props)) {
      return normalizeStepStates(props.stepStates)
    }

    return deriveStepStates(
      props.steps,
      props.currentStep,
      props.furthestReachedStep
    )
  }, [props])
  const resolvedTestID = testID ?? F0_STEP_DEFAULT_TEST_ID_PREFIX
  const progressValue = useMemo(
    () => getProgressValue(resolvedStepStates),
    [resolvedStepStates]
  )

  return (
    <View
      testID={resolvedTestID}
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={{
        min: F0_PROGRESS_MIN,
        max: resolvedStepStates.length,
        now: progressValue,
      }}
      className={f0StepGroupVariants()}
    >
      {resolvedStepStates.map((state, index) => (
        <F0StepSegment
          key={index}
          state={state}
          testID={`${resolvedTestID}-segment-${index}`}
        />
      ))}
    </View>
  )
})

F0Step.displayName = "F0Step"

export { F0Step }
