import { F0Button } from "@factorialco/f0-react"
import { Cross, Maximize, Minimize } from "@factorialco/f0-react/icons/app"
import { Fragment, useLayoutEffect, useRef } from "react"

import { CelebrationsWindow } from "./CelebrationsWindow"
import { CommunitiesWindow } from "./CommunitiesWindow"
import { EventsWindow } from "./EventsWindow"
import { InboxWindow } from "./InboxWindow"
import { InsightsWindow } from "./InsightsWindow"
import { PreviewWindow } from "./PreviewWindow"
import type { WindowId, WindowsState } from "./types"

export const windowRegistry: Record<
  WindowId,
  { title: string; content: React.ComponentType }
> = {
  celebrations: { title: "Celebrations", content: CelebrationsWindow },
  communities: { title: "Communities", content: CommunitiesWindow },
  events: { title: "Events", content: EventsWindow },
  inbox: { title: "Inbox", content: InboxWindow },
  insights: { title: "Insights", content: InsightsWindow },
  preview: { title: "Performance review · Preview", content: PreviewWindow },
}

/**
 * FLIP handoff for every window transition: the click captures the
 * outgoing rect here, and whichever element mounts next animates FROM
 * it — docked ↔ maximized, and menu row → docked panel on open.
 * Module-level on purpose — the elements live in different React trees.
 */
let flipOrigin: { id: WindowId; rect: DOMRect } | null = null

/** Capture where a window should grow from (menu row, play button…). */
export function setWindowFlipOrigin(id: WindowId, rect: DOMRect) {
  flipOrigin = { id, rect }
}

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/**
 * Exit animation for closing a window (docked or maximized): a quick
 * shrink + fade, then the actual close. The timeout fallback guarantees
 * the close even if the animation never finishes.
 */
export function animateWindowClose(id: WindowId, close: () => void) {
  const el = document.querySelector<HTMLElement>(
    `section[data-home-window][aria-label="${windowRegistry[id].title}"]`
  )
  if (!el || reducedMotion()) {
    close()
    return
  }
  el.style.animation = "none"
  el.style.transformOrigin = "50% 50%"
  const exit = el.animate(
    [
      { transform: "none", opacity: 1 },
      { transform: "scale(0.96)", opacity: 0 },
    ],
    { duration: 150, easing: "cubic-bezier(0.23, 1, 0.32, 1)" }
  )
  let done = false
  const finish = () => {
    if (!done) {
      done = true
      close()
    }
  }
  exit.onfinish = finish
  window.setTimeout(finish, 250)
}

function playFlipFrom(el: HTMLElement, id: WindowId) {
  if (flipOrigin?.id !== id) return
  const from = flipOrigin.rect
  flipOrigin = null
  if (reducedMotion()) return
  const to = el.getBoundingClientRect()
  if (!to.width || !to.height) return
  // The FLIP overrides the CSS slide-in so transforms don't compose.
  el.style.animation = "none"
  el.style.transformOrigin = "0 0"
  el.animate(
    [
      {
        transform: `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width}, ${from.height / to.height})`,
      },
      { transform: "none" },
    ],
    { duration: 240, easing: "cubic-bezier(0.23, 1, 0.32, 1)" }
  )
}

function WindowPanel({
  id,
  weight,
  totalWeight,
  onClose,
  onToggleMaximized,
}: {
  id: WindowId
  weight: number
  totalWeight: number
  onClose: () => void
  onToggleMaximized: () => void
}) {
  const { title, content: Content } = windowRegistry[id]
  const sectionRef = useRef<HTMLElement>(null)

  // Restoring: this panel shrinks back from the fullscreen rect.
  useLayoutEffect(() => {
    if (sectionRef.current) playFlipFrom(sectionRef.current, id)
  }, [id])

  return (
    <section
      ref={sectionRef}
      data-home-window
      style={{ flexGrow: weight / totalWeight, flexBasis: 0 }}
      className="flex min-h-0 flex-col overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-[0_2px_20px_0_rgba(13,22,37,0.04)]"
      aria-label={title}
    >
      {/* Figma window header: padding 6px 6px 6px 12px, MD buttons */}
      <header className="flex shrink-0 items-center justify-between py-1.5 pl-3 pr-1.5">
        {/* Figma "Label" style: 14 medium, lh 20, default color, ellipsis */}
        <span className="truncate text-base font-medium text-f1-foreground">
          {title}
        </span>
        <div className="flex items-center">
          <F0Button
            variant="ghost"
            size="md"
            icon={Maximize}
            hideLabel
            label={`Maximize ${title}`}
            onClick={() => {
              // Hand the outgoing rect to the maximized window's FLIP.
              if (sectionRef.current) {
                flipOrigin = {
                  id,
                  rect: sectionRef.current.getBoundingClientRect(),
                }
              }
              onToggleMaximized()
            }}
          />
          <F0Button
            variant="ghost"
            size="md"
            icon={Cross}
            hideLabel
            label={`Close ${title}`}
            onClick={onClose}
          />
        </div>
      </header>
      <div className="home-window-scroll min-h-0 flex-1 overflow-auto">
        <Content />
      </div>
    </section>
  )
}

/**
 * A maximized window takes over the ENTIRE canvas (Figma 1365:12972):
 * no navbar, no prompt bar — just the window header (title left,
 * restore + close right) and its content in a centered column.
 */
export function MaximizedWindow({
  id,
  onRestore,
  onClose,
}: {
  id: WindowId
  onRestore: () => void
  onClose: () => void
}) {
  const { title, content: Content } = windowRegistry[id]
  const sectionRef = useRef<HTMLElement>(null)

  // Maximizing: grow from the docked panel's rect into place.
  useLayoutEffect(() => {
    if (sectionRef.current) playFlipFrom(sectionRef.current, id)
  }, [id])

  return (
    // Same gutter as the docked stack (py-2 pr-2, plus left since the
    // canvas is gone) — the maximized window floats as a card, it never
    // touches the page edges.
    <div className="flex h-full min-w-0 flex-1 p-2">
      <section
        ref={sectionRef}
        data-home-window
        className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-[0_2px_20px_0_rgba(13,22,37,0.04)]"
        aria-label={title}
      >
        <header className="flex shrink-0 items-center justify-between py-1.5 pl-3 pr-1.5">
          <span className="truncate text-base font-medium text-f1-foreground">
            {title}
          </span>
          <div className="flex items-center">
            <F0Button
              variant="ghost"
              size="md"
              icon={Minimize}
              hideLabel
              label={`Restore ${title}`}
              onClick={() => {
                // Hand the fullscreen rect to the docked panel's FLIP.
                if (sectionRef.current) {
                  flipOrigin = {
                    id,
                    rect: sectionRef.current.getBoundingClientRect(),
                  }
                }
                onRestore()
              }}
            />
            <F0Button
              variant="ghost"
              size="md"
              icon={Cross}
              hideLabel
              label={`Close ${title}`}
              onClick={onClose}
            />
          </div>
        </header>
        <div className="home-window-scroll min-h-0 flex-1 overflow-auto">
          <div className="mx-auto w-full max-w-[840px] px-6 py-2">
            <Content />
          </div>
        </div>
      </section>
    </div>
  )
}

/** Claude-Code stacking: a column holds at most two windows; the next
 *  one starts a new column (newest column sits closest to the canvas). */
const MAX_PER_COLUMN = 2

function chunkColumns(open: WindowId[]): WindowId[][] {
  const columns: WindowId[][] = []
  for (let i = 0; i < open.length; i += MAX_PER_COLUMN) {
    columns.push(open.slice(i, i + MAX_PER_COLUMN))
  }
  return columns
}

export function WindowsColumn({
  state,
  onClose,
  onToggleMaximized,
  onSetColumnWidth,
  onResizeBetween,
}: {
  state: WindowsState
  onClose: (id: WindowId) => void
  onToggleMaximized: (id: WindowId) => void
  onSetColumnWidth: (width: number) => void
  onResizeBetween: (idx: number, deltaWeight: number) => void
}) {
  const columnRef = useRef<HTMLDivElement>(null)

  if (state.open.length === 0) return null

  // Claude-Code stacking: chunk into columns of two, newest column first
  // (closest to the canvas). Every column shares the same width.
  const columns = chunkColumns(state.open)

  const startColumnResize = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    const startX = e.clientX
    const startWidth = state.columnWidth
    const onMove = (ev: PointerEvent) =>
      onSetColumnWidth(startWidth + (startX - ev.clientX) / columns.length)
    const onUp = () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
  }

  const startRowResize =
    (globalIdx: number, columnWeight: number) =>
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault()
      const columnHeight = columnRef.current?.clientHeight ?? 1
      const startY = e.clientY
      let applied = 0
      const onMove = (ev: PointerEvent) => {
        const deltaWeight =
          ((ev.clientY - startY) / columnHeight) * columnWeight
        onResizeBetween(globalIdx, deltaWeight - applied)
        applied = deltaWeight
      }
      const onUp = () => {
        window.removeEventListener("pointermove", onMove)
        window.removeEventListener("pointerup", onUp)
      }
      window.addEventListener("pointermove", onMove)
      window.addEventListener("pointerup", onUp)
    }

  return (
    <div
      className="relative flex h-full min-w-0 gap-2 py-2 pr-2"
      style={{ width: state.columnWidth * columns.length }}
    >
      {/* Width drag zone: an invisible strip straddling the panels' left
          border — the window edge itself is the handle, no visible gutter. */}
      <div
        role="separator"
        aria-orientation="vertical"
        onPointerDown={startColumnResize}
        className="absolute inset-y-2 left-0 z-10 w-2 -translate-x-1/2 cursor-col-resize"
      />
      {columns.map((column, columnIndex) => {
        const columnWeight = column.reduce(
          (sum, id) => sum + (state.weights[state.open.indexOf(id)] ?? 1),
          0
        )
        return (
          <div
            key={columnIndex}
            ref={columnIndex === 0 ? columnRef : undefined}
            className="flex min-w-0 flex-1 flex-col"
          >
            {column.map((id, idx) => (
              <Fragment key={id}>
                {idx > 0 && (
                  <div
                    role="separator"
                    aria-orientation="horizontal"
                    onPointerDown={startRowResize(
                      state.open.indexOf(id) - 1,
                      columnWeight
                    )}
                    className="group flex h-2 shrink-0 cursor-row-resize items-center justify-center"
                  >
                    <span className="h-[3px] w-full rounded-full bg-transparent transition-colors group-hover:bg-f1-border group-active:bg-f1-border" />
                  </div>
                )}
                <WindowPanel
                  id={id}
                  weight={state.weights[state.open.indexOf(id)] ?? 1}
                  totalWeight={columnWeight}
                  onClose={() => onClose(id)}
                  onToggleMaximized={() => onToggleMaximized(id)}
                />
              </Fragment>
            ))}
          </div>
        )
      })}
    </div>
  )
}
