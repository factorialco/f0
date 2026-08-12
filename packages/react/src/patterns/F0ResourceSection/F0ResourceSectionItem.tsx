import { DetailsItem } from "@/experimental/Lists/DetailsItem"

import { F0ResourceSectionItemProps } from "./types"

/**
 * One label/value row of a resource section. A thin wrapper over `DetailsItem`
 * locked to the vertical layout (label above value), so every value type and
 * action `DetailsItem` supports works here unchanged.
 */
export function F0ResourceSectionItem({
  label,
  content,
  placeholder = "--",
}: F0ResourceSectionItemProps) {
  return (
    <DetailsItem
      title={label}
      content={content ?? { type: "item", text: placeholder }}
    />
  )
}
