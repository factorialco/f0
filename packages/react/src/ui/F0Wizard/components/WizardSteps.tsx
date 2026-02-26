import { cva } from "cva"

import Check from "@/icons/app/Check"
import { cn, focusRing } from "@/lib/utils"
import { Counter } from "@/ui/Counter"

import { useF0Wizard } from "./WizardProvider"

const stepLabelVariants = cva({
  base: "flex-1 text-base font-medium leading-5 tracking-[-0.005em]",
  variants: {
    state: {
      active: "text-f1-foreground",
      completed: "text-f1-foreground-secondary",
      upcoming: "text-f1-foreground",
    },
  },
})

type StepState = "active" | "completed" | "upcoming"

function getStepState(
  index: number,
  currentStep: number,
  isCompleted: boolean
): StepState {
  if (index === currentStep) return "active"
  if (isCompleted) return "completed"
  return "upcoming"
}

function StepIndicator({ state, index }: { state: StepState; index: number }) {
  if (state === "completed") {
    return (
      <span className="flex h-5 w-5 min-w-5 shrink-0 items-center justify-center rounded-xs bg-f1-background-secondary text-f1-foreground-secondary">
        <Check className="h-3 w-3" />
      </span>
    )
  }

  return (
    <Counter
      value={index + 1}
      type={state === "active" ? "selected" : "default"}
      size="md"
    />
  )
}

export function WizardSteps() {
  const { steps, currentStep, goToStep, allowStepSkipping } = useF0Wizard()

  return (
    <nav aria-label="Wizard steps" className="flex flex-col gap-1.5 p-1">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep || step.isCompleted?.() === true
        const state = getStepState(index, currentStep, isCompleted)

        const currentStepHasErrors = steps[currentStep]?.hasErrors?.() === true

        const intermediateHasErrors =
          index > currentStep &&
          steps.slice(currentStep, index).some((s) => s.hasErrors?.() === true)

        let canNavigate =
          index !== currentStep &&
          !currentStepHasErrors &&
          !intermediateHasErrors &&
          steps.slice(0, index).every((s) => s.isCompleted?.() !== false)

        if (canNavigate && !allowStepSkipping && index > currentStep + 1) {
          canNavigate = false
        }

        const handleClick = () => {
          if (canNavigate) {
            void goToStep(index)
          }
        }

        const handleKeyDown = (e: React.KeyboardEvent) => {
          if ((e.key === "Enter" || e.key === " ") && canNavigate) {
            e.preventDefault()
            void goToStep(index)
          }
        }

        return (
          <button
            key={index}
            type="button"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            disabled={!canNavigate && index !== currentStep}
            aria-current={index === currentStep ? "step" : undefined}
            className={cn(
              focusRing(),
              "flex cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left",
              state === "active" && "bg-f1-background-selected",
              canNavigate && "hover:bg-f1-background-secondary-hover",
              !canNavigate &&
                index !== currentStep &&
                "cursor-default opacity-70"
            )}
          >
            <StepIndicator state={state} index={index} />
            <span className={stepLabelVariants({ state })}>{step.title}</span>
          </button>
        )
      })}
    </nav>
  )
}
