import type { WindowId, WindowsState } from "./types"
import type { PanelSpec } from "./WindowStack"

import { CelebrationsWindow } from "./CelebrationsWindow"
import { ClockInWindow, ClockInWindowCompact } from "./ClockInWindow"
import { CommunitiesWindow } from "./CommunitiesWindow"
import { EventsWindow } from "./EventsWindow"
import { FloatingWindow } from "./FloatingWindow"
import { InboxWindow } from "./InboxWindow"
import { InsightsWindow } from "./InsightsWindow"
import { PreviewWindow } from "./PreviewWindow"
import { animateWindowClose as animateClose } from "./windowMotion"
import {
  MaximizedWindow as GenericMaximizedWindow,
  WindowStack,
} from "./WindowStack"

export { CANVAS_MIN_WIDTH, dockedColumnCount } from "./stack"

/**
 * The RIGHT-hand widgets stack. All of the stacking, resizing and motion
 * machinery lives in `WindowStack` — shared with the left-hand Comms
 * chats since 2026-08-31 — so this file is now just the widget catalogue
 * plus the glue that maps a `WindowId` onto a `PanelSpec`.
 */
export const windowRegistry: Record<
  WindowId,
  {
    title: string
    content: React.ComponentType
    /**
     * Hug the content instead of taking a share of the column height.
     * Most widgets are lists that benefit from every pixel; time tracking
     * is a fixed handful of rows, so stretching it left a large empty
     * block under the clock button (per Oskar, 2026-08-30).
     */
    autoHeight?: boolean
    /**
     * Offers a floating card instead of maximize. Clock in ONLY (per
     * Oskar, 2026-08-31): it is glanceable and worth keeping on top of
     * your work, where the other widgets are lists you either dock or
     * open full-screen.
     */
    canFloat?: boolean
    /** Body for the floating card — compact, per Figma 2694:55372. */
    floatingContent?: React.ComponentType
    /** The 188px card off Figma 2694:55372. */
    floatingWidth?: number
  }
> = {
  // Listed as "Anniversaries" in the widgets drawer — the content is
  // birthdays and work anniversaries either way; the id stays
  // `celebrations` so nothing else has to churn.
  celebrations: { title: "Anniversaries", content: CelebrationsWindow },
  clockin: {
    title: "Clock in",
    content: ClockInWindow,
    autoHeight: true,
    canFloat: true,
    floatingContent: ClockInWindowCompact,
    floatingWidth: 188,
  },
  communities: { title: "Communities", content: CommunitiesWindow },
  events: { title: "Events", content: EventsWindow },
  inbox: { title: "Inbox", content: InboxWindow },
  // "Insights" and "Reports" are NOT the same thing (per Oskar,
  // 2026-08-31): this widget gives you insights about your own activity,
  // while Reports (the nav panel row) is for reports you build yourself
  // with One. An earlier rename collapsed the two — corrected here.
  insights: { title: "Insights", content: InsightsWindow },
  preview: { title: "Performance review · Preview", content: PreviewWindow },
}

/** Namespaces this stack's `data-window-key`s away from the chats'. */
export const WIDGET_KEY_PREFIX = "widget"

export function widgetSpec(
  id: WindowId,
  onToggleFloat?: (id: WindowId) => void
): PanelSpec {
  const { title, content: Content, autoHeight, canFloat } = windowRegistry[id]
  return {
    title,
    content: <Content />,
    autoHeight,
    onToggleFloat:
      canFloat && onToggleFloat ? () => onToggleFloat(id) : undefined,
  }
}

/** Close animation for a widget — the key is namespaced, so callers keep
 *  passing a plain `WindowId`. */
export function animateWindowClose(id: WindowId, close: () => void) {
  animateClose(`${WIDGET_KEY_PREFIX}:${id}`, close)
}

export function MaximizedWindow({
  id,
  onRestore,
  onClose,
}: {
  id: WindowId
  onRestore: () => void
  onClose: () => void
}) {
  return (
    <GenericMaximizedWindow
      windowKey={`${WIDGET_KEY_PREFIX}:${id}`}
      spec={widgetSpec(id)}
      onRestore={onRestore}
      onClose={onClose}
    />
  )
}

export function WindowsColumn({
  onToggleFloat,
  ...props
}: {
  state: WindowsState
  overlay: boolean
  maxWidth?: number
  onToggleFloat: (id: WindowId) => void
  onClose: (id: WindowId) => void
  onToggleMaximized: (id: WindowId) => void
  onSetColumnWidth: (width: number) => void
  onResizeBetween: (idx: number, deltaWeight: number, pair: WindowId[]) => void
  onResizeColumnsBetween: (
    idx: number,
    deltaWeight: number,
    columnCount: number,
    minWeight: number
  ) => void
}) {
  return (
    <WindowStack
      side="right"
      keyPrefix={WIDGET_KEY_PREFIX}
      noun="widget"
      specFor={(id) => widgetSpec(id, onToggleFloat)}
      {...props}
    />
  )
}

/** The floating cards this stack currently has out. Clock in is the only
 *  widget that can be in here. */
export function FloatingWidgets({
  state,
  onToggleFloat,
  onClose,
}: {
  state: WindowsState
  onToggleFloat: (id: WindowId) => void
  onClose: (id: WindowId) => void
}) {
  return (
    <>
      {state.floating
        .filter((id) => state.open.includes(id))
        .map((id) => {
          const { title, content, floatingContent, floatingWidth } =
            windowRegistry[id]
          const Content = floatingContent ?? content
          return (
            <FloatingWindow
              key={id}
              title={title}
              width={floatingWidth ?? 188}
              anchorSelector="[data-home-clockin-button]"
              onDock={() => onToggleFloat(id)}
              onClose={() => onClose(id)}
            >
              <Content />
            </FloatingWindow>
          )
        })}
    </>
  )
}
