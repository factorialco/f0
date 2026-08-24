import type { ComponentPropsWithRef, ReactNode } from "react"

import { F0Avatar, type AvatarVariant } from "@/components/avatars/F0Avatar"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import type { GraphNodeState, GraphNodeVariant } from "./types"

import {
  STACKED_NODE_AVATAR,
  STACKED_NODE_HEIGHT,
  STACKED_NODE_PADDING,
  STACKED_NODE_TITLE_BY_ZOOM,
  STACKED_NODE_TITLE_GAP,
} from "../../constants"

interface F0GraphNodeStackedRowProps {
  /**
   * Role, ARIA, focus and keyboard props owned by [[F0GraphNode]]. A row is a
   * different shape of the same node, not a different kind of thing, so its
   * semantics come from there rather than being re-declared here.
   */
  shellProps: ComponentPropsWithRef<"div">
  variant: GraphNodeVariant
  state: GraphNodeState
  avatar?: AvatarVariant
  title?: ReactNode
  trailing?: ReactNode
  loading?: boolean
  height?: number
}

/**
 * One row of a stacked column — what [[F0GraphNode]] renders when the graph
 * passes `stacked`, because this node's parent set `stackNodes`.
 *
 * It mirrors the card's anatomy (leading avatar, same title type scale per zoom,
 * tags underneath) so a column reads as a continuation of the parent above it,
 * but it is a strip: fixed height, indented a little narrower than the card, no
 * subtitle, no expand affordance.
 */
export const F0GraphNodeStackedRow = ({
  shellProps,
  variant,
  state,
  avatar,
  title,
  trailing,
  loading,
  height = STACKED_NODE_HEIGHT,
}: F0GraphNodeStackedRowProps) => {
  const isMarked = state === "selected" || state === "highlighted"
  const titleType = STACKED_NODE_TITLE_BY_ZOOM[variant]
  // At dot zoom the row has no text left, so its chrome has nothing to hold
  // together and a full-width outline would read as an empty box. The card
  // resolves to a bare avatar there too, so the row follows: no border, no
  // background, avatar centred on the parent's own axis. It stays at 32px rather
  // than growing like the card's dot, which would overflow the reserved band and
  // collide with the row below.
  const isDot = titleType === null

  const strip = (
    <div
      {...shellProps}
      data-zoom-level={variant}
      className={cn(
        "group flex w-full items-center rounded-xl border border-solid",
        "outline-none transition-[border-color,background-color,opacity] duration-200",
        isDot
          ? "justify-center border-transparent bg-transparent"
          : isMarked
            ? "border-f1-border-selected-bold bg-f1-background ring-2 ring-f1-background-selected ring-offset-0"
            : // The card drops its border on hover, but it is a rounded pill
              // whose shape survives without one. A flat row does not: losing
              // the outline reads as the row going transparent against the
              // canvas. Keep the border, move only the background.
              "border-f1-border bg-f1-background hover:bg-f1-background-hover",
        // In dot the visible node is the avatar, not the strip, so the focus
        // ring moves there (below) — on the row it would frame empty space.
        !isDot &&
          "focus-visible:ring-2 focus-visible:ring-f1-background-selected focus-visible:ring-offset-0",
        state === "dimmed" && "opacity-40"
      )}
      // Padding and gap are inline rather than utility classes because they are
      // derived (see constants): the padding equals the avatar's inset on every
      // side, and the gap is whatever lands the title on the card's own text
      // offset. A rounded utility step would silently break both.
      style={{
        height,
        paddingLeft: STACKED_NODE_PADDING,
        paddingRight: STACKED_NODE_PADDING,
        gap: STACKED_NODE_TITLE_GAP,
      }}
    >
      {loading ? (
        <>
          <Skeleton
            className="shrink-0 rounded-full"
            style={{ width: STACKED_NODE_AVATAR, height: STACKED_NODE_AVATAR }}
          />
          {titleType && <Skeleton className="h-3 w-24 flex-1 rounded-xs" />}
        </>
      ) : (
        <>
          {avatar && (
            <div
              className={cn(
                "flex shrink-0 items-center justify-center",
                // Selection and focus rings live here in dot, where the avatar
                // is the whole visible node (F0Avatar owns its own silhouette,
                // so this radius only shapes the ring).
                isDot && "rounded-md",
                isDot &&
                  isMarked &&
                  "ring-2 ring-f1-background-selected ring-offset-0",
                isDot &&
                  "group-focus-visible:ring-2 group-focus-visible:ring-f1-background-selected group-focus-visible:ring-offset-0"
              )}
              style={{
                width: STACKED_NODE_AVATAR,
                height: STACKED_NODE_AVATAR,
              }}
            >
              <F0Avatar size="md" avatar={avatar} />
            </div>
          )}
          {/* Dropped entirely at dot zoom rather than faded: the card has no
              text there either, and a row that keeps it would be the only
              legible label on a canvas of dots. */}
          {titleType && (
            <p
              className="min-w-0 flex-1 truncate font-medium tracking-[-0.07px] text-f1-foreground"
              style={titleType}
            >
              {title}
            </p>
          )}
        </>
      )}
      {/* Trailing content follows the title: it is a detail-level affordance,
          and at dot zoom there is no text for it to sit beside. */}
      {trailing && titleType && (
        // Its own affordance: clicking a small action must not also select and
        // fly to the node. Two paths would select it — the row's `onClick`,
        // stopped here, and the canvas `pointerup` handler, which fires
        // regardless and reads `data-no-node-select`.
        <div
          className="flex shrink-0 items-center"
          data-no-node-select
          onClick={(e) => e.stopPropagation()}
        >
          {trailing}
        </div>
      )}
    </div>
  )

  return strip
}
