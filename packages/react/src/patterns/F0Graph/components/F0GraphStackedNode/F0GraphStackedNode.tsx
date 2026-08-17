import {
  type KeyboardEvent,
  type MutableRefObject,
  forwardRef,
  useCallback,
} from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import type { F0GraphStackedNodeProps } from "./types"

import {
  STACKED_NODE_AVATAR,
  STACKED_NODE_HEIGHT,
  STACKED_NODE_PADDING,
  STACKED_NODE_TITLE_GAP,
} from "../../constants"

/**
 * One row of a stacked group — what F0Graph lays out when a parent sets
 * `stackChildren` (job levels under a role, plan tiers under a product).
 *
 * It mirrors the node card's anatomy — full card width, a leading avatar, the
 * same title type — so a column reads as a continuation of the parent above it
 * rather than as a different kind of node. It is deliberately shorter, though:
 * a row is a strip, so the avatar steps down to `md` (a `lg` one would fill the
 * row edge to edge with no breathing room). It also does not morph with zoom —
 * the layout reserves a fixed band per row, so the box is the same at every
 * zoom level — and has no expand affordance, since a stacked group is only
 * formed from leaf children.
 */
const F0GraphStackedNodeBase = forwardRef<
  HTMLDivElement,
  F0GraphStackedNodeProps
>(
  (
    {
      state = "default",
      level,
      tabIndex = 0,
      setSize,
      posInSet,
      onClick,
      nodeRef,
      nodeId,
      avatar,
      title,
      trailing,
      loading,
      height = STACKED_NODE_HEIGHT,
    },
    ref
  ) => {
    const combinedRef = useCallback(
      (el: HTMLDivElement | null) => {
        if (typeof ref === "function") {
          ref(el)
        } else if (ref) {
          ;(ref as MutableRefObject<HTMLDivElement | null>).current = el
        }
        nodeRef?.(el)
      },
      [ref, nodeRef]
    )

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        onClick?.()
      }
    }

    const isMarked = state === "selected" || state === "highlighted"

    return (
      <div
        ref={combinedRef}
        id={nodeId ? `f0-graph-node-${nodeId}` : undefined}
        role="treeitem"
        tabIndex={tabIndex}
        aria-level={level}
        aria-setsize={setSize}
        aria-posinset={posInSet}
        aria-selected={state === "selected"}
        className={cn(
          "group flex w-full items-center rounded-xl border border-solid",
          "bg-f1-background outline-none transition-[border-color,background-color,opacity] duration-200",
          isMarked
            ? "border-f1-border-selected-bold ring-2 ring-f1-background-selected ring-offset-0"
            : // The node card drops its border on hover, but it is a rounded
              // pill whose shape survives without one. A flat row does not:
              // losing the outline reads as the row going transparent against
              // the canvas. Keep the border, move only the background.
              "border-f1-border hover:bg-f1-background-hover",
          "focus-visible:ring-2 focus-visible:ring-f1-background-selected focus-visible:ring-offset-0",
          state === "dimmed" && "opacity-40"
        )}
        // Padding and gap are inline rather than utility classes because they
        // are derived (see constants): the padding equals the avatar's inset on
        // every side, and the gap is whatever lands the title on the card's own
        // text offset. A rounded utility step would silently break both.
        style={{
          height,
          paddingLeft: STACKED_NODE_PADDING,
          paddingRight: STACKED_NODE_PADDING,
          gap: STACKED_NODE_TITLE_GAP,
        }}
        onClick={onClick}
        onKeyDown={handleKeyDown}
      >
        {loading ? (
          <>
            <Skeleton
              className="shrink-0 rounded-full"
              style={{
                width: STACKED_NODE_AVATAR,
                height: STACKED_NODE_AVATAR,
              }}
            />
            <Skeleton className="h-3 w-24 flex-1 rounded-xs" />
          </>
        ) : (
          <>
            {avatar && (
              <div
                className="flex shrink-0 items-center justify-center"
                style={{
                  width: STACKED_NODE_AVATAR,
                  height: STACKED_NODE_AVATAR,
                }}
              >
                <F0Avatar size="md" avatar={avatar} />
              </div>
            )}
            <p className="min-w-0 flex-1 truncate text-base font-medium text-f1-foreground">
              {title}
            </p>
          </>
        )}
        {trailing && (
          // Trailing controls are their own affordance: clicking a checkbox must
          // not also select and fly to the node. Two paths would select it — the
          // row's `onClick`, stopped here, and the canvas `pointerup` handler,
          // which fires regardless and reads `data-no-node-select`.
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
  }
)

F0GraphStackedNodeBase.displayName = "F0GraphStackedNode"

export const F0GraphStackedNode = F0GraphStackedNodeBase
