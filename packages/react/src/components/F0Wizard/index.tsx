import { experimentalComponent } from "@/lib/experimental"

import { F0Wizard as F0WizardComponent } from "./F0Wizard"

export type { F0WizardProps } from "./F0Wizard"
// Re-export WizardStepItem for convenience
export type { WizardStepItem } from "@/experimental/Navigation/WizardStepper"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0Wizard = experimentalComponent("F0Wizard", F0WizardComponent)
