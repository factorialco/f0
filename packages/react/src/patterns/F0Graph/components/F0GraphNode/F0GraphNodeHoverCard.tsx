import { type ReactNode } from "react"

import type { AvatarVariant } from "@/components/avatars/F0Avatar"
import { F0Card } from "@/components/F0Card"
import type { CardMetadata } from "@/components/F0Card/types"
import type { TagVariant } from "@/components/tags/F0Tag/F0Tag"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"

import type { F0GraphNodeTagLabels } from "./types"

type F0GraphNodeHoverCardProps = {
  /** The node element the card is anchored to and opens on hover. */
  trigger: ReactNode
  avatar?: AvatarVariant
  title?: string
  subtitle?: string
  /** Non-hidden tags — surfaced as native card metadata rows. */
  tags?: TagVariant[]
  tagLabels?: F0GraphNodeTagLabels
}

/**
 * Maps a node tag to a native F0Card metadata row so the popover renders the
 * same value-display chips the rest of the design system uses, instead of
 * embedding raw tags as card children. No leading icon — just the value.
 */
function tagToMetadata(tag: TagVariant, label: string): CardMetadata | null {
  switch (tag.type) {
    case "raw":
      return {
        property: {
          type: "tag",
          label,
          value: { label: tag.text, icon: tag.icon },
        },
      }
    case "status":
      return {
        property: {
          type: "status",
          label,
          value: { status: tag.variant, label: tag.text },
        },
      }
    case "alert":
      return {
        property: {
          type: "alertTag",
          label,
          value: { level: tag.level, label: tag.text },
        },
      }
    case "dot":
      return "color" in tag
        ? {
            property: {
              type: "dotTag",
              label,
              value: { label: tag.text, color: tag.color },
            },
          }
        : {
            property: { type: "text", label, value: tag.text },
          }
    case "person":
      return {
        property: {
          type: "person",
          label,
          value: { firstName: tag.name, lastName: "", src: tag.src },
        },
      }
    case "team":
      return {
        property: {
          type: "team",
          label,
          value: { name: tag.name, src: tag.src },
        },
      }
    case "company":
      return {
        property: {
          type: "company",
          label,
          value: { name: tag.name, src: tag.src },
        },
      }
    default:
      return null
  }
}

/**
 * Hover popover that surfaces a node's full information in an F0Card.
 *
 * Used when the node itself hides part of its data (compact/dot zoom). Mirrors
 * the AI chat entity-ref hover card: same `HoverCard` + `F0Card` composition,
 * but the data is already in hand so there is no async resolver. Tags are mapped
 * to native card metadata rather than rendered as children, so the card looks
 * like any other F0Card. Opens above the node at screen scale even when the
 * graph is zoomed out.
 */
export function F0GraphNodeHoverCard({
  trigger,
  avatar,
  title,
  subtitle,
  tags,
  tagLabels,
}: F0GraphNodeHoverCardProps) {
  const metadata = tags
    ?.map((tag) => tagToMetadata(tag, tagLabels?.[tag.type] ?? ""))
    .filter((item): item is CardMetadata => item !== null)

  return (
    <HoverCard openDelay={300} closeDelay={100}>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardContent
        side="top"
        align="center"
        className="w-64 rounded-2xl border-none p-0 text-f1-foreground shadow-md"
      >
        <F0Card
          avatar={avatar}
          title={title}
          description={subtitle}
          metadata={metadata && metadata.length > 0 ? metadata : undefined}
        />
      </HoverCardContent>
    </HoverCard>
  )
}
