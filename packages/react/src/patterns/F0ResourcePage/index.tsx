import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0ResourcePage as F0ResourcePageComponent } from "./F0ResourcePage"

export type { F0ResourcePageProps } from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const F0ResourcePage = withDataTestId(
  experimentalComponent("F0ResourcePage", F0ResourcePageComponent)
)

export { F0ResourcePage }
