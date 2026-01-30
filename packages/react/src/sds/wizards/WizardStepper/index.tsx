import CheckIcon from "@/icons/app/Check"
import { experimentalComponent } from "@/lib/experimental"
import { cn } from "@/lib/utils"

import { Counter } from "@/experimental/Information/Counter"

export type WizardStepItem = {
  id: string
  label: string
  completed?: boolean
}

export interface WizardStepperProps {
  steps: WizardStepItem[]
  currentStepId: string
}

const StepIndicator = ({
  index,
  isCurrent,
  isCompleted,
}: {
  index: number
  isCurrent: boolean
  isCompleted: boolean
}) => {
  // Completed: checkmark with opacity 0.3, same rounded as Counter (rounded-xs)
  if (isCompleted) {
    return (
      <div className="inline-flex min-w-5 items-center justify-center rounded-xs bg-f1-background-positive-bold p-0.5 opacity-30">
        <CheckIcon className="h-4 w-4 text-f1-foreground-inverse" />
      </div>
    )
  }

  // Active: selected style, same rounded as Counter (rounded-xs)
  if (isCurrent) {
    return <Counter value={index + 1} type="selected" size="md" />
  }

  // Pending: default counter with gray background and border
  return <Counter value={index + 1} type="default" size="md" />
}

const BaseWizardStepper = ({ steps, currentStepId }: WizardStepperProps) => {
  const currentStepIndex = steps.findIndex((step) => step.id === currentStepId)

  return (
    <div className="flex flex-col gap-1.5">
      {steps.map((step, index) => {
        const isCurrent = step.id === currentStepId
        const isCompleted = step.completed ?? index < currentStepIndex

        return (
          <div
            key={step.id}
            className={cn(
              "flex flex-row items-center gap-2 rounded-[10px] px-2 py-2",
              isCurrent && "bg-f1-background-selected"
            )}
          >
            <StepIndicator
              index={index}
              isCurrent={isCurrent}
              isCompleted={isCompleted}
            />
            <span
              className={cn(
                "text-sm font-medium leading-5 tracking-tight",
                isCurrent && "text-f1-foreground",
                isCompleted && "text-f1-foreground-secondary",
                !isCurrent && !isCompleted && "text-f1-foreground"
              )}
            >
              {step.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const WizardStepper = experimentalComponent(
  "WizardStepper",
  BaseWizardStepper
)
