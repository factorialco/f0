import { ReactNode } from "react"

import { IconType } from "@/components/F0Icon"
import { DialogWidth } from "@/patterns/F0Dialog"

export interface F0WizardStep {
  title: string
  isCompleted?: () => boolean
  hasErrors?: () => boolean
  nextLabel?: string
  previousLabel?: string
  onNext?: () => void | Promise<unknown>
}

/**
 * A consumer-defined action rendered as an additional button in the wizard
 * footer, alongside the built-in Previous/Next (Submit) buttons.
 */
export interface F0WizardSecondaryAction {
  label: string
  icon?: IconType
  onClick: () => void
  disabled?: boolean
  loading?: boolean
  /**
   * Controls on which steps the action is shown.
   * When omitted, the action is visible on every step.
   */
  isVisible?: (arg: {
    stepIndex: number
    isFirstStep: boolean
    isLastStep: boolean
    totalSteps: number
  }) => boolean
}

export interface F0WizardChildrenProps {
  currentStep: number
  goToStep: (index: number) => Promise<void>
}

/**
 * @internal Not exported from the package.
 * Use `F0WizardForm` for form-based wizards (the most common use case).
 */
export interface F0WizardProps {
  steps: F0WizardStep[]
  children: (props: F0WizardChildrenProps) => ReactNode
  isOpen: boolean
  onClose?: () => void
  title?: string
  width?: DialogWidth
  defaultStepIndex?: number
  nextLabel?: string
  previousLabel?: string
  submitLabel?: string
  /**
   * Optional consumer-defined action rendered as an extra footer button
   * between the Previous and Next/Submit buttons.
   */
  secondaryAction?: F0WizardSecondaryAction
  onSubmit?: () => void | Promise<unknown>
  onStepChanged?: (stepIndex: number) => void
  /**
   * When true, users can click on any step that is not explicitly marked
   * as incomplete (i.e. its `isCompleted` callback does not return `false`)
   * to jump to it.
   * When false (default), users must navigate sequentially using Next/Previous.
   * @default false
   */
  allowStepSkipping?: boolean
  /**
   * When true, the wizard automatically closes after the last step's
   * onSubmit completes successfully (without throwing).
   * @default false
   */
  autoCloseOnLastStepSubmit?: boolean
  /**
   * When true, the wizard automatically skips to the first non-completed step
   * on open, based on each step's `isCompleted` function.
   * Only applies on initial render; users can still navigate back freely.
   * @default false
   */
  autoSkipCompletedSteps?: boolean
}
