import {
  type KeyboardEvent,
  type MutableRefObject,
  forwardRef,
  useCallback,
} from "react"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import type { F0GraphStackedNodeProps } from "./types"

import { STACKED_NODE_HEIGHT } from "../../constants"

/**
 * One row of a stacked group — the compact strip F0Graph lays out when a parent
 * sets `stackChildren` (job levels under a role, plan tiers under a product).
 *
 * Unlike the node card, it does not morph with zoom: the layout reserves a fixed
 * band per row, so the row keeps the same box at every zoom level. It also has
 * no expand affordance — a stacked group is only formed from leaf children.
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
          "group flex w-full items-center gap-2 rounded-md border border-solid px-3",
          "bg-f1-background outline-none transition-[border-color,background-color,opacity] duration-200",
          isMarked
            ? "border-f1-border-selected-bold ring-2 ring-f1-background-selected ring-offset-0"
            : "border-f1-border hover:border-transparent hover:bg-f1-background-hover",
          "focus-visible:ring-2 focus-visible:ring-f1-background-selected focus-visible:ring-offset-0",
          state === "dimmed" && "opacity-40"
        )}
        style={{ height }}
        onClick={onClick}
        onKeyDown={handleKeyDown}
      >
        {loading ? (
          <Skeleton className="h-3 w-24 rounded-xs" />
        ) : (
          <p className="min-w-0 flex-1 truncate text-base font-medium text-f1-foreground">
            {title}
          </p>
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
