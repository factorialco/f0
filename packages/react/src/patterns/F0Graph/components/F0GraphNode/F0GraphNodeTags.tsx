import { Tag } from "@/components/tags/F0Tag/F0Tag"

import { cn } from "@/lib/utils"

import type { F0GraphNodeTag } from "./types"

interface F0GraphNodeTagsProps {
  tags: F0GraphNodeTag[]
  /**
   * Where the row sits under the node. A card is content-sized, so centring
   * hangs its tags under its own middle. A stacked row is width-driven and much
   * wider than its text, so centring leaves the tags floating in the middle of
   * an empty strip — those align to the leading edge instead.
   */
  align?: "center" | "start"
}

/**
 * Renders a flex-wrap row with every tag shown individually. Tags are never
 * grouped or collapsed into a summary — even several tags of the same type are
 * all rendered as-is.
 */
export function F0GraphNodeTags({
  tags,
  align = "center",
}: F0GraphNodeTagsProps) {
  if (tags.length === 0) return null

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-1",
        align === "start" ? "justify-start" : "justify-center"
      )}
    >
      {tags.map((tag, index) => (
        <div key={`${tag.type}-${index}`}>
          <Tag tag={tag} />
        </div>
      ))}
    </div>
  )
}
