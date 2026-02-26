import { ReactNode } from "react"

import { DialogWidth } from "@/components/F0Dialog"

export interface F0WizardStep {
  title: string
  isCompleted?: () => boolean
  hasErrors?: () => boolean
  nextLabel?: string
  previousLabel?: string
  onNext?: () => void | Promise<unknown>
}

export interface F0WizardChildrenProps {
  currentStep: number
  goToStep: (index: number) => void
}

export interface F0WizardProps {
  steps: F0WizardStep[]
  children: (props: F0WizardChildrenProps) => ReactNode
  isOpen: boolean
  onClose: () => void
  title?: string
  width?: DialogWidth
  defaultStepIndex?: number
  nextLabel?: string
  previousLabel?: string
  submitLabel?: string
  onSubmit?: () => void | Promise<unknown>
  onStepChanged?: (stepIndex: number) => void
}
