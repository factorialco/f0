import { useCallback, useState } from "react"

const DEFAULT_COLUMN_WIDTH = 448
export const MIN_COLUMN_WIDTH = 336
/** Generous ceiling — the real limit is the canvas floor, applied while
 *  dragging (see startColumnResize), so a widget can stretch until the
 *  content beside it hits CANVAS_MIN_WIDTH, Claude-Code style. */
export const MAX_COLUMN_WIDTH = 1400
const MIN_WEIGHT = 0.15

/** Claude-Code stacking: a column holds at most two windows; the next one
 *  starts a new column. */
export const MAX_PER_COLUMN = 2

/**
 * The narrowest the canvas may get. Below this the content stops being
 * usable, so the window columns stop PUSHING and start OVERLAYING instead
 * — they can keep growing while the canvas parks here underneath.
 */
export const CANVAS_MIN_WIDTH = 480

/**
 * State for ONE window stack. Generic over the id type because the
 * prototype runs two of them: the right-hand widgets (a fixed union of
 * `WindowId`s) and the left-hand Comms chats (one id per conversation).
 */
export type StackState<Id extends string> = {
  /** Open windows, in the order they were opened. */
  open: Id[]
  /** Vertical space share per open window (parallel to `open`). */
  weights: number[]
  /** Base column width in px — the whole stack is this × column count. */
  columnWidth: number
  /**
   * Share of the stack's width per COLUMN, left to right (missing entries
   * default to 1). Mirrors `weights`, which does the same for the rows
   * inside a column, so dragging between columns and between stacked
   * windows work the same way.
   */
  columnWeights: number[]
  /** Window currently maximized, if any. */
  maximized: Id | null
  /**
   * Windows lifted OUT of the column into a floating card. Only Clock in
   * can do this (per Oskar, 2026-08-31: it is the one widget he wanted to
   * keep floatable instead of full-screen) — the registry gates it with
   * `canFloat`. A floating window keeps its entry in `open`, so the
   * navbar button still reads as active and closing is unchanged; it is
   * only filtered out of the columns.
   */
  floating: Id[]
  /**
   * Windows whose `autoHeight` has been overridden by a row drag. Clock in
   * hugs its content by default, but the moment you drag the divider you
   * are asking for a share of the column instead — intent beats default.
   */
  manualHeight: Id[]
}

export function chunkColumns<Id extends string>(open: Id[]): Id[][] {
  const columns: Id[][] = []
  for (let i = 0; i < open.length; i += MAX_PER_COLUMN) {
    columns.push(open.slice(i, i + MAX_PER_COLUMN))
  }
  return columns
}

/** The windows actually in the column — floating ones have left it. */
export function dockedWindows<Id extends string>(state: StackState<Id>): Id[] {
  return state.open.filter((id) => !state.floating.includes(id))
}

/** How many columns a stack's docked windows currently occupy. */
export function dockedColumnCount<Id extends string>(
  state: StackState<Id>
): number {
  return Math.ceil(dockedWindows(state).length / MAX_PER_COLUMN)
}

/** Total px a stack takes when docked — 0 when it holds nothing. */
export function stackWidth<Id extends string>(state: StackState<Id>): number {
  return state.columnWidth * dockedColumnCount(state)
}

/**
 * Claude-Code-style window stack state: windows open into a column that
 * pushes the canvas. New windows are APPENDED — whatever is already open
 * keeps its place and the new one stacks below it (per Oskar, 2026-08-30;
 * they used to prepend, which shoved the open widget down every time and
 * was half of why the entrance read badly). Windows share the column
 * height by adjustable weights.
 */
export function useWindowStack<Id extends string>({
  /** Starting column width. Chats open narrower than widgets — 428 is the
   *  Figma frame's own column (a 420 card plus the 8px gutter). */
  columnWidth: initialColumnWidth = DEFAULT_COLUMN_WIDTH,
  /**
   * Windows already open on the first render (per Oskar, 2026-09-01: the
   * widgets stack lands with Clock in + Communities). Read by the
   * useState initializer only, so it is the state Home OPENS with, not a
   * floor — close them and they stay closed for the session.
   */
  open: initialOpen = [],
}: { columnWidth?: number; open?: Id[] } = {}) {
  const [state, setState] = useState<StackState<Id>>({
    // Copied, not aliased: callers pass a module-level constant, and
    // handing it straight to state would make every later mount share it.
    open: [...initialOpen],
    // Parallel to `open` — a missing weight would leave the pre-opened
    // window with no height share.
    weights: initialOpen.map(() => 1),
    columnWidth: initialColumnWidth,
    columnWeights: [],
    maximized: null,
    floating: [],
    manualHeight: [],
  })

  const toggle = useCallback((id: Id) => {
    setState((s) => {
      const idx = s.open.indexOf(id)
      if (idx >= 0) {
        return {
          ...s,
          open: s.open.filter((w) => w !== id),
          weights: s.weights.filter((_, i) => i !== idx),
          maximized: s.maximized === id ? null : s.maximized,
          floating: s.floating.filter((w) => w !== id),
        }
      }
      return { ...s, open: [...s.open, id], weights: [...s.weights, 1] }
    })
  }, [])

  /** Open (or surface) a window without toggling it closed. */
  const open = useCallback((id: Id) => {
    setState((s) =>
      s.open.includes(id)
        ? s
        : { ...s, open: [...s.open, id], weights: [...s.weights, 1] }
    )
  }, [])

  /**
   * Show exactly ONE window, replacing whatever was open. Comms uses this:
   * clicking a second conversation swaps the panel's contents rather than
   * stacking another window, the way Slack does (per Oskar).
   *
   * Weights and column shares reset with it — a single window owns the
   * whole stack, so there is nothing left to share.
   */
  const openOnly = useCallback((id: Id) => {
    setState((s) =>
      s.open.length === 1 && s.open[0] === id
        ? s
        : {
            ...s,
            open: [id],
            weights: [1],
            columnWeights: [],
            maximized: s.maximized === null ? null : id,
            manualHeight: [],
            floating: [],
          }
    )
  }, [])

  /**
   * Open `id`, dropping only the already-open windows `replaces` matches.
   *
   * The left pane uses it to keep ONE conversation and ONE ticket: a new
   * conversation replaces the conversation you were reading (Slack-style,
   * per Oskar) but STACKS with an open inbox task, the way widgets stack
   * on the right. Everything it does not match keeps its slot and its
   * height share.
   */
  const openReplacing = useCallback(
    (id: Id, replaces: (open: Id) => boolean) => {
      setState((s) => {
        if (s.open.includes(id)) return s
        const rows = s.open.map((w, i) => ({ w, weight: s.weights[i] ?? 1 }))
        const idx = rows.findIndex(({ w }) => replaces(w))
        // Nothing of this kind open yet — append, like any new window.
        const next =
          idx === -1
            ? [...rows, { w: id, weight: 1 }]
            : // Take over the replaced window's SLOT and its height share,
              // so the pane beside it neither moves nor resizes. Dropping
              // the old one and appending would shunt the neighbour up.
              rows
                .map((row, i) =>
                  i === idx ? { w: id, weight: row.weight } : row
                )
                .filter((_, i) => i === idx || !replaces(rows[i].w))
        return {
          ...s,
          open: next.map(({ w }) => w),
          weights: next.map(({ weight }) => weight),
          // Whatever was replaced takes its overrides with it.
          manualHeight: s.manualHeight.filter((w) => !replaces(w)),
          floating: s.floating.filter((w) => !replaces(w)),
          maximized:
            s.maximized !== null && replaces(s.maximized) ? null : s.maximized,
        }
      })
    },
    []
  )

  const close = useCallback((id: Id) => {
    setState((s) => {
      const idx = s.open.indexOf(id)
      if (idx < 0) return s
      return {
        ...s,
        open: s.open.filter((w) => w !== id),
        weights: s.weights.filter((_, i) => i !== idx),
        maximized: s.maximized === id ? null : s.maximized,
        // Reopening a widget always comes back DOCKED — the float is a
        // per-session choice, not a sticky preference.
        floating: s.floating.filter((w) => w !== id),
      }
    })
  }, [])

  /** Force a window maximized, unlike toggleMaximized which flips it.
   *  The inbox ticket opens this way; a chat does not. */
  const maximize = useCallback((id: Id) => {
    setState((s) => (s.maximized === id ? s : { ...s, maximized: id }))
  }, [])

  /** Leave the maximized state entirely, whatever was in it. Pairs with
   *  `maximize` so callers never have to read `state.maximized` — which
   *  is stale inside an event handler React has not flushed yet. */
  const restore = useCallback(() => {
    setState((s) => (s.maximized === null ? s : { ...s, maximized: null }))
  }, [])

  const toggleMaximized = useCallback((id: Id) => {
    setState((s) => ({ ...s, maximized: s.maximized === id ? null : id }))
  }, [])

  /** Lift a window out of the column into a floating card, or drop it
   *  back in. Maximize and float are mutually exclusive states. */
  const toggleFloating = useCallback((id: Id) => {
    setState((s) => ({
      ...s,
      floating: s.floating.includes(id)
        ? s.floating.filter((w) => w !== id)
        : [...s.floating, id],
      maximized: s.maximized === id ? null : s.maximized,
    }))
  }, [])

  const setColumnWidth = useCallback((width: number) => {
    setState((s) => ({
      ...s,
      columnWidth: Math.min(
        MAX_COLUMN_WIDTH,
        Math.max(MIN_COLUMN_WIDTH, width)
      ),
    }))
  }, [])

  /** Shift WIDTH share between column `idx` and `idx + 1`. Same shape as
   *  resizeBetween, but across the stack instead of down a column. */
  const resizeColumnsBetween = useCallback(
    (
      idx: number,
      deltaWeight: number,
      columnCount: number,
      /** Floor in WEIGHT units, computed by the caller from
       *  MIN_COLUMN_WIDTH — the share clamp rows use is far too loose
       *  here (0.15 of the stack is a ~65px widget). */
      minWeight: number
    ) => {
      setState((s) => {
        const weights = Array.from(
          { length: columnCount },
          (_, i) => s.columnWeights[i] ?? 1
        )
        const a = weights[idx]
        const b = weights[idx + 1]
        if (a === undefined || b === undefined) return s
        const clamped = Math.max(
          minWeight - a,
          Math.min(b - minWeight, deltaWeight)
        )
        weights[idx] = a + clamped
        weights[idx + 1] = b - clamped
        return { ...s, columnWeights: weights }
      })
    },
    []
  )

  /** Shift height share between window `idx` and `idx + 1` by `deltaWeight`.
   *  Dragging also promotes either neighbour out of `autoHeight`. */
  const resizeBetween = useCallback(
    (idx: number, deltaWeight: number, pair: Id[] = []) => {
      setState((s) => {
        const weights = [...s.weights]
        const a = weights[idx]
        const b = weights[idx + 1]
        if (a === undefined || b === undefined) return s
        const clamped = Math.max(
          MIN_WEIGHT - a,
          Math.min(b - MIN_WEIGHT, deltaWeight)
        )
        weights[idx] = a + clamped
        weights[idx + 1] = b - clamped
        const manualHeight = [...new Set([...s.manualHeight, ...pair])]
        return { ...s, weights, manualHeight }
      })
    },
    []
  )

  return {
    state,
    toggle,
    open,
    openOnly,
    openReplacing,
    close,
    maximize,
    restore,
    toggleMaximized,
    toggleFloating,
    setColumnWidth,
    resizeBetween,
    resizeColumnsBetween,
  }
}
