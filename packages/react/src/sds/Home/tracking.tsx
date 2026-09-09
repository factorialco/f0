import React from "react"

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
 *
 * BEHAVIOUR ONLY, deliberately. The payloads carry what the reader DID and say
 * nothing about which column a widget sits in or where in it — that is the
 * host's own persisted layout, and duplicating it into an analytics event
 * would make two sources for one fact, the stale one being the event.
 */

/**
 * WHICH AFFORDANCE was used. A widget has three ways out of it and they mean
 * different things to whoever reads the numbers: the header's own link, the
 * footer's call to action, and the "View more" a capped list grows.
 */
export type HomeWidgetActionKind = "header-link" | "footer-action" | "view-more"

/**
 * Payload for `tracking.onWidgetAction`. The widget is named by the id the host
 * gave it, which is the key to everything else the host already knows about it.
 */
export type HomeWidgetActionEvent = {
  widgetId: string
  action: HomeWidgetActionKind
}

/** Payload for `tracking.onWidgetItemActivate`. */
export type HomeWidgetItemActivateEvent = {
  widgetId: string
  /** The row's own id, as the slot was given it. */
  itemId: string | number
  /**
   * 1-based place of the row within its slot, AS DRAWN. Not layout state: it
   * is where the reader's attention landed in a list ordered by its own data,
   * which is the one position worth reporting.
   */
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

const HomeWidgetIdContext = React.createContext<string | undefined>(undefined)

/**
 * WHICH WIDGET is being drawn, published by the column around each card. The
 * slots inside it cannot know their own card otherwise: a renderer is handed
 * params and a ctx, not a place in a layout.
 */
export const HomeWidgetIdProvider = ({
  widgetId,
  children,
}: {
  widgetId: string
  children: React.ReactNode
}) => (
  <HomeWidgetIdContext.Provider value={widgetId}>
    {children}
  </HomeWidgetIdContext.Provider>
)

/**
 * Reporters for the widget being drawn. They are NO-OPS when the host passed
 * no `tracking`, and outside a column, so every call site can call them
 * unconditionally without knowing whether anyone is listening.
 */
export const useHomeWidgetTracking = () => {
  const tracking = React.useContext(HomeTrackingContext)
  const widgetId = React.useContext(HomeWidgetIdContext)

  return React.useMemo(
    () => ({
      reportAction: (action: HomeWidgetActionKind) => {
        if (widgetId === undefined) {
          return
        }
        tracking?.onWidgetAction?.({ widgetId, action })
      },
      reportItemActivate: (itemId: string | number, itemPosition: number) => {
        if (widgetId === undefined) {
          return
        }
        tracking?.onWidgetItemActivate?.({ widgetId, itemId, itemPosition })
      },
    }),
    [tracking, widgetId]
  )
}
