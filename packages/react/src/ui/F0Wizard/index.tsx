import { withDataTestId } from "@/lib/data-testid"

import { F0Wizard as F0WizardComponent } from "./F0Wizard"

export { useF0Wizard } from "./components/WizardProvider"

export type {
  F0WizardStep,
  F0WizardProps,
  F0WizardChildrenProps,
} from "./types"

const F0Wizard = withDataTestId(F0WizardComponent)

export { F0Wizard }
