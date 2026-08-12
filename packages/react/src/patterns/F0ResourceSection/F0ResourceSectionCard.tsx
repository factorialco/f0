import { F0Card } from "@/components/F0Card"

import { F0ResourceSectionCardProps } from "./types"

/**
 * One card of a `cards` section. `F0Card` itself, the same card the data
 * collection's card view and the org chart's dialog render, so a team shown on a
 * resource page looks like the same team shown anywhere else. Every `F0Card` prop
 * passes through: pass `compact` to sit the avatar beside the title, or
 * `otherActions` for a menu on the card.
 */
export function F0ResourceSectionCard({
  // Cards in a row match each other's height rather than each shrinking to its
  // own content, which is the only thing this wrapper decides.
  fullHeight = true,
  ...props
}: F0ResourceSectionCardProps) {
  return <F0Card fullHeight={fullHeight} {...props} />
}
