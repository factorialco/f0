import type { F0WizardStep } from "./types"

export interface F0WizardContextValue {
  currentStep: number
  totalSteps: number
  loading: boolean
  goToStep: (index: number) => void
  goNext: () => Promise<void>
  goPrevious: () => void
  steps: F0WizardStep[]
}
