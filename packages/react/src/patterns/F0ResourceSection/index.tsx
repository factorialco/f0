import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0ResourceSection as F0ResourceSectionComponent } from "./F0ResourceSection"
import { F0ResourceSectionCard } from "./F0ResourceSectionCard"
import { F0ResourceSectionItem } from "./F0ResourceSectionItem"

export { resourceSectionVariants } from "./types"
export type {
  F0ResourceSectionCardProps,
  F0ResourceSectionHeader,
  F0ResourceSectionItemProps,
  F0ResourceSectionProps,
  F0ResourceSectionVariant,
} from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const F0ResourceSection = Object.assign(
  withDataTestId(
    experimentalComponent("F0ResourceSection", F0ResourceSectionComponent)
  ),
  { Item: F0ResourceSectionItem, Card: F0ResourceSectionCard }
)

export { F0ResourceSection }
