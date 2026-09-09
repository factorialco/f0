import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { F0AiTextBase } from "./F0AiText"

export * from "./types"

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0AiText = withDataTestId(
  experimentalComponent("F0AiText", F0AiTextBase)
)
