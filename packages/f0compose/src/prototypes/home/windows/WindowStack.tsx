import { F0Button, type IconType } from "@factorialco/f0-react"
import { Cross, Maximize, Minimize } from "@factorialco/f0-react/icons/app"
import { Fragment, useLayoutEffect, useRef } from "react"

import type { StackState } from "./stack"

import { FloatingIcon } from "./PanelIcons"
import {
  CANVAS_MIN_WIDTH,
  chunkColumns,
  dockedWindows,
  MIN_COLUMN_WIDTH,
} from "./stack"
import { settleOnMount, stashSwap } from "./windowMotion"

/**
 * Everything a stack needs to draw one window. The stack itself is
 * id-agnostic: the two callers (widgets on the right, Comms chats on the
 * left) each map their own ids onto this.
 */
export type PanelSpec = {
  title: string
  content: React.ReactNode
  /** Rendered before the title — the chat's star / channel avatar. */
  leading?: React.ReactNode
  /** Extra header buttons, placed BEFORE maximize and close. */
  actions?: React.ReactNode
  /**
   * Hug the content instead of taking a share of the column height.
   * Most windows are lists that benefit from every pixel; time tracking
   * is a fixed handful of rows, so stretching it left a large empty
   * block under the clock button (per Oskar, 2026-08-30).
   */
  autoHeight?: boolean
  /**
   * The content lays itself out (its own scroll area, anything pinned to
   * the bottom) instead of being dropped into the stack's scroll box.
   * Chats need this: the message list scrolls, the composer does not.
   */
  fills?: boolean
  /**
   * Replaces the MAXIMIZE button with a dock/float toggle. Only Clock in
   * sets this (per Oskar, 2026-08-31) — every other widget maximizes.
   */
  onToggleFloat?: () => void
  /** Glyph for the RESTORE button while maximized. Defaults to Minimize;
   *  the inbox ticket uses the side-panel icon, because from full screen
   *  its alternative is a docked panel rather than a smaller window. */
  restoreIcon?: IconType
}

export type Side = "left" | "right"

/**
 * Shared window header (Figma window header: padding 6px 6px 6px 12px,
 * MD buttons): optional leading glyph, title, optional extra actions,
 * maximize, close.
 */
// gap-0.5, not gap-2: the frame puts the title at x=32, flush against the
// 20px glyph box at x=12 — the optical gap comes from the glyph being
// smaller than its box, not from a gutter.
function WindowHeader({
  spec,
  onClose,
  onMaximize,
}: {
  spec: PanelSpec
  onClose: () => void
  onMaximize: () => void
}) {
  const { title, leading, actions } = spec
  return (
    <header className="flex shrink-0 items-center justify-between py-1.5 pl-3 pr-1.5">
      <div className="flex min-w-0 items-center gap-0.5">
        {leading}
        {/* Figma "Label" style: 14 medium, lh 20, default color, ellipsis */}
        <span className="truncate text-base font-medium text-f1-foreground">
          {title}
        </span>
      </div>
      <div className="flex shrink-0 items-center">
        {actions}
        {spec.onToggleFloat ? (
          // The glyph names the state you will GET, not the one you are
          // in — docked, it offers you the floating card.
          <F0Button
            variant="ghost"
            size="md"
            icon={FloatingIcon}
            hideLabel
            label={`Float ${title}`}
            onClick={spec.onToggleFloat}
          />
        ) : (
          <F0Button
            variant="ghost"
            size="md"
            icon={Maximize}
            hideLabel
            label={`Maximize ${title}`}
            onClick={onMaximize}
          />
        )}
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
  )
}

const CARD_CLASS =
  "flex min-h-0 flex-col overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-[0_2px_20px_0_rgba(13,22,37,0.04)]"

function WindowPanel({
  windowKey,
  spec,
  weight,
  totalWeight,
  hugsContent,
  onClose,
  onToggleMaximized,
}: {
  windowKey: string
  spec: PanelSpec
  weight: number
  totalWeight: number
  /** Sized to its content rather than taking a share of the column. */
  hugsContent: boolean
  onClose: () => void
  onToggleMaximized: () => void
}) {
  const sectionRef = useRef<HTMLElement>(null)

  // Restoring: this panel shrinks back from the fullscreen rect. Panels
  // that merely REMOUNTED (restore from maximize, or a 3rd window
  // re-chunking the columns) must not replay the entrance — they never
  // moved, so animating them in is motion without a purpose.
  useLayoutEffect(() => {
    settleOnMount(sectionRef.current, windowKey)
  }, [windowKey])

  return (
    <section
      ref={sectionRef}
      data-home-window
      data-window-key={windowKey}
      style={
        hugsContent
          ? { flex: "0 0 auto" }
          : { flexGrow: weight / totalWeight, flexBasis: 0 }
      }
      className={CARD_CLASS}
      aria-label={spec.title}
    >
      <WindowHeader
        spec={spec}
        onClose={onClose}
        onMaximize={() => {
          // Flag the swap so the maximized panel dissolves in.
          stashSwap(windowKey, sectionRef.current)
          onToggleMaximized()
        }}
      />
      {spec.fills ? (
        <div className="flex min-h-0 flex-1 flex-col">{spec.content}</div>
      ) : (
        <div
          className={`home-window-scroll min-h-0 overflow-auto ${
            hugsContent ? "" : "flex-1"
          }`}
        >
          {spec.content}
        </div>
      )}
    </section>
  )
}

/**
 * A maximized window takes over the ENTIRE canvas (Figma 1365:12972):
 * no navbar, no prompt bar — just the window header (title left,
 * restore + close right) and its content in a centered column.
 */
export function MaximizedWindow({
  windowKey,
  spec,
  onRestore,
  onClose,
}: {
  windowKey: string
  spec: PanelSpec
  onRestore: () => void
  onClose: () => void
}) {
  const { title, leading, actions } = spec
  const sectionRef = useRef<HTMLElement>(null)

  // Maximizing: grow from the docked panel's rect into place.
  useLayoutEffect(() => {
    if (sectionRef.current) settleOnMount(sectionRef.current, windowKey)
  }, [windowKey])

  return (
    // Same gutter as the docked stack (py-2 pr-2, plus left since the
    // canvas is gone) — the maximized window floats as a card, it never
    // touches the page edges.
    <div className="flex h-full min-w-0 flex-1 p-2">
      <section
        ref={sectionRef}
        data-home-window
        data-window-key={windowKey}
        className={`${CARD_CLASS} min-w-0 flex-1`}
        aria-label={title}
      >
        <header className="flex shrink-0 items-center justify-between py-1.5 pl-3 pr-1.5">
          <div className="flex min-w-0 items-center gap-0.5">
            {leading}
            <span className="truncate text-base font-medium text-f1-foreground">
              {title}
            </span>
          </div>
          <div className="flex shrink-0 items-center">
            {actions}
            <F0Button
              variant="ghost"
              size="md"
              icon={spec.restoreIcon ?? Minimize}
              hideLabel
              label={`Restore ${title}`}
              onClick={() => {
                // Flag the swap so the docked panel dissolves in.
                stashSwap(windowKey, sectionRef.current)
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
        {spec.fills ? (
          // The content pins its own bottom bar and scrolls its own list;
          // it also centres itself, so it gets the full width here.
          <div className="flex min-h-0 flex-1 flex-col">{spec.content}</div>
        ) : (
          <div className="home-window-scroll min-h-0 flex-1 overflow-auto">
            {/* 712px, matching the canvas content column (per Oskar) — a
                maximized widget fills the screen, its CONTENT does not. */}
            <div className="mx-auto w-full max-w-[712px] px-6 py-2">
              {spec.content}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

/**
 * One stack of docked windows. Runs on either side of the canvas: the
 * widgets stack on the right, Comms chats on the left. Everything
 * side-dependent is derived from `side` — which edge the width handle
 * sits on, which way a width drag grows the stack, and which edge the
 * stack pins to once it overlays.
 */
export function WindowStack<Id extends string>({
  side,
  keyPrefix,
  noun,
  panelKey = (id) => id,
  maxWidth,
  state,
  overlay,
  specFor,
  onClose,
  onToggleMaximized,
  onSetColumnWidth,
  onResizeBetween,
  onResizeColumnsBetween,
}: {
  side: Side
  /** Namespaces `data-window-key` so the two stacks can never collide. */
  keyPrefix: string
  /** What this stack holds, for the resize handles' accessible names. */
  noun: string
  /**
   * React key for a panel. Defaults to the window id, so opening a
   * different window mounts a different panel. Comms overrides it with a
   * constant: only one conversation is open at a time, and swapping it
   * should change the card's CONTENTS, not re-mount the card and replay
   * its entrance — the card never went anywhere.
   */
  panelKey?: (id: Id) => string
  /** Ceiling on the rendered width. Only set when BOTH stacks are
   *  overlaying: pinned to opposite edges with the canvas parked at its
   *  floor underneath, they would otherwise cross in the middle. */
  maxWidth?: number
  state: StackState<Id>
  /** Columns exceed the room left by CANVAS_MIN_WIDTH — float over the
   *  canvas instead of pushing it any narrower. */
  overlay: boolean
  specFor: (id: Id) => PanelSpec
  onClose: (id: Id) => void
  onToggleMaximized: (id: Id) => void
  onSetColumnWidth: (width: number) => void
  onResizeBetween: (idx: number, deltaWeight: number, pair: Id[]) => void
  onResizeColumnsBetween: (
    idx: number,
    deltaWeight: number,
    columnCount: number,
    minWeight: number
  ) => void
}) {
  const columnRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  // A window that has floated out no longer occupies the column, so a
  // stack whose only window is floating collapses entirely.
  const docked = dockedWindows(state)
  if (docked.length === 0) return null

  /** Hugs its content only until a row drag claims it (see manualHeight). */
  const hugs = (id: Id) =>
    Boolean(specFor(id).autoHeight) && !state.manualHeight.includes(id)

  // Claude-Code stacking: chunk into columns of two, in open order — the
  // window you already had keeps its slot. Every column shares the width.
  const columns = chunkColumns(docked)

  // A RIGHT stack grows leftward (drag left = wider), a LEFT stack grows
  // rightward. One sign flip covers the whole mirror.
  const growSign = side === "right" ? -1 : 1

  const startColumnResize = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    const startX = e.clientX
    const startWidth = state.columnWidth
    // Stretch until the CANVAS hits its floor, Claude-Code style — the
    // MAX_COLUMN_WIDTH constant is just a ceiling; this is the limit that
    // actually bites. Measured off the shell so it follows the window and
    // the nav panel collapsing, rather than being a guess baked into a
    // constant. `room` subtracts the OTHER stack too, via its rendered
    // width, so neither side can crush the canvas on its own.
    const shell = rootRef.current?.parentElement?.getBoundingClientRect()
    const others = Array.from(
      document.querySelectorAll<HTMLElement>("[data-window-stack]")
    )
      .filter((el) => el !== rootRef.current)
      .reduce((sum, el) => sum + el.getBoundingClientRect().width, 0)
    // A ceiling on GROWTH, never a shrink: once both stacks are open in a
    // cramped shell this figure drops below MIN_COLUMN_WIDTH, and without
    // the floor the column snapped to its minimum the instant you touched
    // the handle.
    const room = Math.max(
      startWidth,
      shell
        ? (shell.width - others - CANVAS_MIN_WIDTH) / columns.length
        : Infinity
    )
    const onMove = (ev: PointerEvent) =>
      onSetColumnWidth(
        Math.min(
          room,
          startWidth + (growSign * (ev.clientX - startX)) / columns.length
        )
      )
    const onUp = () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
  }

  /** Drag BETWEEN two columns: shifts width share, so one window column
   *  can be narrower than its neighbour. The outer handle still scales
   *  the whole stack; this one redistributes inside it. */
  const startColumnSplit =
    (idx: number) => (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const stackPx = rootRef.current?.getBoundingClientRect().width ?? 1
      const startX = e.clientX
      const total = columns.length
      // Same floor the outer stretch handle honours, so no column ends up
      // below MIN_COLUMN_WIDTH whichever handle you drag.
      const minWeight = (MIN_COLUMN_WIDTH / stackPx) * total
      let applied = 0
      const onMove = (ev: PointerEvent) => {
        const delta = ((ev.clientX - startX) / stackPx) * total
        onResizeColumnsBetween(idx, delta - applied, total, minWeight)
        applied = delta
      }
      const onUp = () => {
        window.removeEventListener("pointermove", onMove)
        window.removeEventListener("pointerup", onUp)
      }
      window.addEventListener("pointermove", onMove)
      window.addEventListener("pointerup", onUp)
    }

  const startRowResize =
    (globalIdx: number, columnWeight: number, pair: Id[]) =>
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault()
      const columnHeight = columnRef.current?.clientHeight ?? 1
      const startY = e.clientY
      let applied = 0
      const onMove = (ev: PointerEvent) => {
        const deltaWeight =
          ((ev.clientY - startY) / columnHeight) * columnWeight
        onResizeBetween(globalIdx, deltaWeight - applied, pair)
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
      ref={rootRef}
      data-window-stack={side}
      // Pushing (in flow) until the canvas hits its floor, then the same
      // stack lifts into an overlay pinned to its own edge — so widening
      // a window past that point covers the canvas rather than crushing it.
      className={`flex h-full min-w-0 gap-2 py-2 ${
        side === "right" ? "pr-2" : "pl-2"
      } ${
        overlay
          ? `f0c-window-overlay absolute inset-y-0 z-20 ${
              side === "right" ? "right-0" : "left-0"
            }`
          : "relative"
      }`}
      style={{ width: state.columnWidth * columns.length, maxWidth }}
    >
      {/* Width drag zone, straddling the stack's canvas-facing border. It
          used to be fully invisible ("the window edge is the handle") —
          but the ROW divider grows a bar on hover, so the width one read
          as absent and went unfound (per Oskar). It now gets the same
          affordance: same 3px bar, same tokens, just vertical. */}
      <div
        role="separator"
        aria-orientation="vertical"
        aria-label={`Resize ${noun} width`}
        onPointerDown={startColumnResize}
        className={`group absolute inset-y-2 z-10 flex w-2 cursor-col-resize items-center justify-center ${
          side === "right"
            ? "left-0 -translate-x-1/2"
            : "right-0 translate-x-1/2"
        }`}
      >
        <span className="h-full w-[3px] rounded-full bg-transparent transition-colors group-hover:bg-f1-border group-active:bg-f1-border" />
      </div>
      {(() => {
        const colWeights = columns.map((_, i) => state.columnWeights[i] ?? 1)
        const colTotal = colWeights.reduce((a, b) => a + b, 0)
        return columns.map((column, columnIndex) => {
          const columnWeight = column.reduce(
            (sum, id) =>
              hugs(id)
                ? sum
                : sum + (state.weights[state.open.indexOf(id)] ?? 1),
            0
          )
          return (
            <Fragment key={columnIndex}>
              {columnIndex > 0 && (
                <div
                  role="separator"
                  aria-orientation="vertical"
                  aria-label="Resize columns"
                  onPointerDown={startColumnSplit(columnIndex - 1)}
                  // -mx-2 cancels BOTH of the stack's gap-2 gutters, so the
                  // 8px handle IS the gap between columns rather than
                  // sitting inside a 16px one — matching the row divider,
                  // which is the gap it lives in (per Oskar).
                  className="group -mx-2 flex w-2 shrink-0 cursor-col-resize items-center justify-center"
                >
                  <span className="h-full w-[3px] rounded-full bg-transparent transition-colors group-hover:bg-f1-border group-active:bg-f1-border" />
                </div>
              )}
              <div
                ref={columnIndex === 0 ? columnRef : undefined}
                style={{
                  flexGrow: colWeights[columnIndex] / colTotal,
                  flexBasis: 0,
                }}
                className="flex min-w-0 flex-col"
              >
                {column.map((id, idx) => (
                  <Fragment key={panelKey(id)}>
                    {idx > 0 && (
                      // EVERY stacked pair is draggable (per Oskar). This used
                      // to degrade to an inert gap next to an auto-height
                      // panel, since a weight drag would move nothing — now
                      // the drag PROMOTES that neighbour out of hugging
                      // instead, so Clock in can be given a share too.
                      <div
                        role="separator"
                        aria-orientation="horizontal"
                        aria-label={`Resize ${noun} height`}
                        onPointerDown={startRowResize(
                          state.open.indexOf(id) - 1,
                          columnWeight,
                          [column[idx - 1], id]
                        )}
                        className="group flex h-2 shrink-0 cursor-row-resize items-center justify-center"
                      >
                        <span className="h-[3px] w-full rounded-full bg-transparent transition-colors group-hover:bg-f1-border group-active:bg-f1-border" />
                      </div>
                    )}
                    <WindowPanel
                      windowKey={`${keyPrefix}:${id}`}
                      spec={specFor(id)}
                      weight={state.weights[state.open.indexOf(id)] ?? 1}
                      totalWeight={columnWeight}
                      hugsContent={hugs(id)}
                      onClose={() => onClose(id)}
                      onToggleMaximized={() => onToggleMaximized(id)}
                    />
                  </Fragment>
                ))}
              </div>
            </Fragment>
          )
        })
      })()}
    </div>
  )
}
