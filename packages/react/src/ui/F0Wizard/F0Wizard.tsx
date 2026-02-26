import { FC, useMemo } from "react"

import type {
  F0DialogPrimaryAction,
  F0DialogSecondaryAction,
} from "@/components/F0Dialog/types"

import { F0DialogInternal as F0Dialog } from "@/components/F0Dialog/F0DialogInternal"
import ArrowLeft from "@/icons/app/ArrowLeft"
import ArrowRight from "@/icons/app/ArrowRight"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"

import type { F0WizardProps } from "./types"

import { WizardProvider } from "./components/WizardProvider"

const noop = () => {}
import { WizardSteps } from "./components/WizardSteps"
import { useWizardNavigation } from "./hooks/useWizardNavigation"

/**
 * @internal This component is not exported from the package.
 * For form-based wizards (the most common use case), use `F0WizardForm` instead,
 * which wraps `F0Wizard` and `F0Form` together with built-in step validation,
 * submission handling, and value persistence across steps.
 */
export const F0Wizard: FC<F0WizardProps> = ({
  steps,
  children,
  isOpen,
  onClose = noop,
  title,
  width = "xl",
  defaultStepIndex,
  nextLabel,
  previousLabel,
  submitLabel,
  onSubmit,
  onStepChanged,
  allowStepSkipping = false,
  autoCloseOnLastStepSubmit = false,
  autoSkipCompletedSteps = false,
}) => {
  const effectiveDefaultStepIndex = useMemo(() => {
    if (defaultStepIndex !== undefined) return defaultStepIndex
    if (!autoSkipCompletedSteps) return 0
    const firstIncomplete = steps.findIndex(
      (step) => step.isCompleted?.() !== true
    )
    return firstIncomplete === -1 ? steps.length - 1 : firstIncomplete
  }, [defaultStepIndex, autoSkipCompletedSteps, steps])

  const navigation = useWizardNavigation({
    steps,
    defaultStepIndex: effectiveDefaultStepIndex,
    onSubmit,
    onStepChanged,
    allowStepSkipping,
    autoCloseOnLastStepSubmit,
    onClose,
  })

  const i18n = useI18n()

  const currentStepDef = steps[navigation.currentStep]
  const isFirstStep = navigation.currentStep === 0
  const isLastStep = navigation.currentStep === steps.length - 1

  const resolvedNextLabel = isLastStep
    ? (currentStepDef?.nextLabel ?? submitLabel ?? i18n.wizard.submit)
    : (currentStepDef?.nextLabel ?? nextLabel ?? i18n.wizard.next)

  const resolvedPreviousLabel =
    currentStepDef?.previousLabel ?? previousLabel ?? i18n.wizard.previous

  const primaryAction = useMemo<F0DialogPrimaryAction>(
    () => ({
      label: resolvedNextLabel,
      icon: isLastStep ? undefined : ArrowRight,
      onClick: () => void navigation.goNext(),
      disabled:
        currentStepDef?.isCompleted?.() === false ||
        currentStepDef?.hasErrors?.() === true,
      loading: navigation.loading,
    }),
    [resolvedNextLabel, isLastStep, navigation, currentStepDef]
  )

  const secondaryAction = useMemo<F0DialogSecondaryAction | undefined>(
    () =>
      isFirstStep
        ? undefined
        : {
            label: resolvedPreviousLabel,
            icon: ArrowLeft,
            onClick: navigation.goPrevious,
            disabled: navigation.loading,
          },
    [isFirstStep, resolvedPreviousLabel, navigation]
  )

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      width={width}
      title={title}
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
      disableContentPadding
    >
      <WizardProvider
        currentStep={navigation.currentStep}
        totalSteps={steps.length}
        loading={navigation.loading}
        goToStep={navigation.goToStep}
        goNext={navigation.goNext}
        goPrevious={navigation.goPrevious}
        steps={steps}
        allowStepSkipping={allowStepSkipping}
      >
        <div className="flex min-h-[58vh] flex-1 flex-row">
          <div className="w-1/3 shrink-0 overflow-y-auto border-x-0 border-b-0 border-r border-t-0 border-dashed border-f1-border-secondary p-2">
            <WizardSteps />
          </div>
          <div className="flex-1 overflow-y-auto px-8">
            {children({
              currentStep: navigation.currentStep,
              goToStep: navigation.goToStep,
            })}
          </div>
        </div>
      </WizardProvider>
    </F0Dialog>
  )
}

F0Wizard.displayName = "F0Wizard"
