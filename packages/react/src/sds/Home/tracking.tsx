import React from "react"
import type { WidgetContainerSide } from "./WidgetContainer"

/**
 * TRACKING FOR THE HOME — the same shape the AI kit uses (`AiChatTrackingOptions`):
 * the host passes callbacks, the components fire them, and nothing about a
 * widget's data changes to make it measurable.
 *
 * This exists because a Home widget is DECLARATIVE. Its rows carry an `href`
 * and never an `onClick` (that is the one click behavior a `list` slot has, and
 * a type test holds the line), so a host had no seam to observe an interaction
 * from — its analytics simply could not see the Home. These callbacks are that
 * seam, and they leave the row data alone: navigation is still the anchor's.
 */

/**
 * WHICH AFFORDANCE was used. A widget has three ways out of it and they mean
 * different things to whoever reads the numbers: the header's own link, the
 * footer's call to action, and the "View more" a capped list grows.
 */
export type HomeWidgetActionKind = "header-link" | "footer-action" | "view-more"

/** What identifies the widget an event came from. */
type HomeWidgetScope = {
  /** The widget's id, as the column was given it. */
  widgetId: string
  side: WidgetContainerSide
  /** 1-based place in its column. */
  position: number
}

/**
 * Payload for `tracking.onWidgetAction`. Carries everything an analytics layer
 * (e.g. Amplitude) needs to attribute the action without the host tracing back
 * which card it came from.
 */
export type HomeWidgetActionEvent = HomeWidgetScope & {
  action: HomeWidgetActionKind
}

/** Payload for `tracking.onWidgetItemActivate`. */
export type HomeWidgetItemActivateEvent = HomeWidgetScope & {
  /** The row's own id, as the slot was given it. */
  itemId: string | number
  /** 1-based place of the row within its slot, as drawn. */
  itemPosition: number
}

export type HomeTrackingOptions = {
  /** A widget's header link, footer action, or "View more" was used. */
  onWidgetAction?: (event: HomeWidgetActionEvent) => void
  /**
   * A row inside a widget was activated. Fires ALONGSIDE the navigation the
   * row's `href` performs — it does not replace or gate it, so a middle-click
   * or a modified click still behaves like the link it is.
   */
  onWidgetItemActivate?: (event: HomeWidgetItemActivateEvent) => void
}

const HomeTrackingContext = React.createContext<
  HomeTrackingOptions | undefined
>(undefined)

/** What the layout publishes for everything it draws. */
export const HomeTrackingProvider = ({
  tracking,
  children,
}: {
  tracking: HomeTrackingOptions | undefined
  children: React.ReactNode
}) => (
  <HomeTrackingContext.Provider value={tracking}>
    {children}
  </HomeTrackingContext.Provider>
)

const HomeWidgetScopeContext = React.createContext<HomeWidgetScope | undefined>(
  undefined
)

/**
 * WHICH WIDGET is being drawn, published by the column around each card. The
 * slots inside it cannot know their own card otherwise: a renderer is handed
 * params and a ctx, not a place in a layout.
 */
export const HomeWidgetScopeProvider = ({
  widgetId,
  side,
  position,
  children,
}: HomeWidgetScope & { children: React.ReactNode }) => {
  const scope = React.useMemo(
    () => ({ widgetId, side, position }),
    [widgetId, side, position]
  )

  return (
    <HomeWidgetScopeContext.Provider value={scope}>
      {children}
    </HomeWidgetScopeContext.Provider>
  )
}

/**
 * Reporters for the widget being drawn. They are NO-OPS when the host passed
 * no `tracking`, and outside a column's scope, so every call site can call
 * them unconditionally without knowing whether anyone is listening.
 */
export const useHomeWidgetTracking = () => {
  const tracking = React.useContext(HomeTrackingContext)
  const scope = React.useContext(HomeWidgetScopeContext)

  return React.useMemo(
    () => ({
      reportAction: (action: HomeWidgetActionKind) => {
        if (!scope) {
          return
        }
        tracking?.onWidgetAction?.({ ...scope, action })
      },
      reportItemActivate: (itemId: string | number, itemPosition: number) => {
        if (!scope) {
          return
        }
        tracking?.onWidgetItemActivate?.({ ...scope, itemId, itemPosition })
      },
    }),
    [tracking, scope]
  )
}
