import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { Tag, type TagVariant } from "@/components/tags/F0Tag/F0Tag"
import { BaseTag } from "@/components/tags/internal/BaseTag"
import { Tooltip } from "@/experimental/Overlays/Tooltip"

import type { F0GraphNodeTagLabels } from "./types"

const DEFAULT_LABELS: Required<F0GraphNodeTagLabels> = {
  person: "people",
  team: "teams",
  company: "companies",
  status: "statuses",
  alert: "alerts",
  balance: "balances",
  dot: "tags",
  raw: "tags",
}

// Tag types that carry an avatar — multi-item groups for these collapse
// into a stacked-avatar summary instead of a plain text chip.
type AvatarTagType = "person" | "company"
const AVATAR_TAG_TYPES = new Set<TagVariant["type"]>(["person", "company"])

interface F0GraphNodeTagsProps {
  tags: TagVariant[]
  labels?: F0GraphNodeTagLabels
}

/**
 * Renders a flex-wrap row of tags grouped by their `type`. Single-item groups
 * render the tag directly; multi-item groups collapse into one summary tag
 * showing the count, with all member names exposed via the tag's tooltip.
 */
export function F0GraphNodeTags({ tags, labels }: F0GraphNodeTagsProps) {
  if (tags.length === 0) return null

  // Group preserving first-occurrence order of types
  const groups = new Map<TagVariant["type"], TagVariant[]>()
  for (const t of tags) {
    const list = groups.get(t.type)
    if (list) {
      list.push(t)
    } else {
      groups.set(t.type, [t])
    }
  }

  const resolvedLabels: Required<F0GraphNodeTagLabels> = {
    ...DEFAULT_LABELS,
    ...labels,
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-1">
      {Array.from(groups.entries()).map(([type, items]) => {
        if (items.length === 1) {
          return (
            <div key={type}>
              <Tag tag={items[0]} />
            </div>
          )
        }
        const label = resolvedLabels[type] ?? DEFAULT_LABELS[type]
        const names = items.map(getTagName).filter(Boolean)
        // Avatar-bearing types collapse into a stacked-avatar summary
        // (small F0AvatarList on the left + "N teams" text) so the
        // viewer sees the entities, not just a count.
        if (AVATAR_TAG_TYPES.has(type)) {
          return (
            <div key={type}>
              <Tooltip
                label={`${items.length} ${label}`}
                description={names.join(", ")}
              >
                <BaseTag
                  className="border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]"
                  shape={type === "person" ? "rounded" : "square"}
                  left={
                    <F0AvatarList
                      size="xs"
                      {...buildAvatarListProps(type as AvatarTagType, items)}
                    />
                  }
                  text={`${items.length} ${label}`}
                />
              </Tooltip>
            </div>
          )
        }
        const summary: TagVariant = {
          type: "raw",
          text: `${items.length} ${label}`,
          description: names.join(", "),
        }
        return (
          <div key={type}>
            <Tag tag={summary} />
          </div>
        )
      })}
    </div>
  )
}

// Build a discriminated F0AvatarList props object for an avatar-bearing
// group. Each variant of the union has its own `avatars` shape so we
// build per-type to keep TS strictness happy.
function buildAvatarListProps(
  type: AvatarTagType,
  items: TagVariant[]
): React.ComponentProps<typeof F0AvatarList> {
  if (type === "person") {
    return {
      type: "person",
      avatars: items.flatMap((t) =>
        t.type === "person"
          ? [{ firstName: t.name ?? "", lastName: "", src: t.src }]
          : []
      ),
      max: 3,
    }
  }
  return {
    type: "company",
    avatars: items.flatMap((t) =>
      t.type === "company" ? [{ name: t.name ?? "", src: t.src }] : []
    ),
    max: 3,
  }
}

function getTagName(tag: TagVariant): string {
  switch (tag.type) {
    case "person":
      return tag.name ?? ""
    case "team":
      return tag.name ?? ""
    case "company":
      return tag.name ?? ""
    case "status":
      return tag.text ?? ""
    case "alert":
      return tag.text ?? ""
    case "balance":
      return tag.hint ?? tag.nullText ?? ""
    case "dot":
      return tag.text ?? ""
    case "raw":
      return tag.text ?? ""
    default:
      return ""
  }
}
