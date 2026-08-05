import { FC, useLayoutEffect, useMemo, useRef } from "react"

import type { F0DialogAction } from "@/components/dialog-alike/F0Dialog"
// Import the unwrapped component directly to avoid the experimental-usage
// console warning that the public (experimentalComponent-wrapped) export emits.
import { F0Dialog } from "@/components/dialog-alike/F0Dialog/F0Dialog"
import ArrowLeft from "@/icons/app/ArrowLeft"
import ArrowRight from "@/icons/app/ArrowRight"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"

import type { F0WizardProps } from "./types"

import { WizardProvider } from "./components/WizardProvider"
import { WizardSteps } from "./components/WizardSteps"
import { useWizardNavigation } from "./hooks/useWizardNavigation"

const noop = () => {}

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
  size = "xl",
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

  // The step-content pane is a single DOM node reused across every step, so its
  // scrollTop survives the children swap. Without this, a step taller than the
  // pane opens part-way down (the user had to scroll to reach "Next"). Layout
  // effect so the reset lands before paint, and instant so it never animates.
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const content = contentRef.current
    if (!content) return
    // `behavior: "instant"` keeps it immune to a `scroll-behavior: smooth` on
    // the element; jsdom (consumer unit tests) has no `scrollTo`, hence the
    // `scrollTop` fallback.
    if (typeof content.scrollTo === "function") {
      content.scrollTo({ top: 0, behavior: "instant" })
    } else {
      content.scrollTop = 0
    }
  }, [navigation.currentStep])

  const currentStepDef = steps[navigation.currentStep]
  const isFirstStep = navigation.currentStep === 0
  const isLastStep = navigation.currentStep === steps.length - 1

  const resolvedNextLabel = isLastStep
    ? (currentStepDef?.nextLabel ?? submitLabel ?? i18n.wizard.submit)
    : (currentStepDef?.nextLabel ?? nextLabel ?? i18n.wizard.next)

  const resolvedPreviousLabel =
    currentStepDef?.previousLabel ?? previousLabel ?? i18n.wizard.previous

  const primaryAction = useMemo<F0DialogAction>(
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

  const secondaryAction = useMemo<F0DialogAction | undefined>(
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
      size={size}
      modal
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
        <div className="flex h-[58vh] flex-1 flex-row">
          <div className="w-1/3 shrink-0 overflow-y-auto border-x-0 border-b-0 border-r border-t-0 border-dashed border-f1-border-secondary p-2">
            <WizardSteps />
          </div>
          <div
            ref={contentRef}
            data-testid="wizard-step-content"
            className="flex-1 overflow-y-auto px-8"
          >
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
