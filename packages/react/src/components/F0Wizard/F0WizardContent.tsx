import { FC, ReactNode } from "react"

import {
  WizardStepItem,
  WizardStepper,
} from "@/experimental/Navigation/WizardStepper"

export interface F0WizardContentProps {
  steps: WizardStepItem[]
  currentStepId: string
  children: ReactNode
}

export const F0WizardContent: FC<F0WizardContentProps> = ({
  steps,
  currentStepId,
  children,
}) => {
  return (
    <div className="flex flex-1 flex-row gap-6 overflow-hidden px-4 py-4">
      <WizardStepper steps={steps} currentStepId={currentStepId} />
      <div className="flex flex-1 flex-col overflow-auto">{children}</div>
    </div>
  )
}
