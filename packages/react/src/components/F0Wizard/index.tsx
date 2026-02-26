import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0Wizard as F0WizardComponent } from "./F0Wizard"

export { useF0Wizard } from "./components/WizardProvider"

export type {
  F0WizardStep,
  F0WizardProps,
  F0WizardChildrenProps,
} from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const F0Wizard = withDataTestId(
  experimentalComponent("F0Wizard", F0WizardComponent)
)

export { F0Wizard }
