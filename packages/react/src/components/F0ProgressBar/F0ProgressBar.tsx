import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { ProgressBarBase } from "./components/ProgressBarBase"
import { ProgressBarDistribution } from "./components/ProgressBarDistribution"
import { ProgressBarSteps } from "./components/ProgressBarSteps"

export type {
  ColorToken,
  F0ProgressBarDistributionItem,
  F0ProgressBarDistributionProps,
  F0ProgressBarProps,
  F0ProgressBarStepsProps,
  ProgressBarSegment,
} from "./types"

const F0ProgressBarExperimental = experimentalComponent(
  "F0ProgressBar",
  ProgressBarBase
)

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0ProgressBar = Object.assign(
  withDataTestId(F0ProgressBarExperimental),
  {
    Steps: withDataTestId(
      experimentalComponent("F0ProgressBar.Steps", ProgressBarSteps)
    ),
    Distribution: withDataTestId(
      experimentalComponent(
        "F0ProgressBar.Distribution",
        ProgressBarDistribution
      )
    ),
  }
)
