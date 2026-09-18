import { useCallback, useEffect, useReducer, useRef } from "react"
import type {
  SwipeDeckAction,
  SwipeDecision,
  SwipeDirection,
  UseSwipeDeckOptions,
  UseSwipeDeckResult,
} from "../types"

const DEFAULT_UNDO_DEPTH = 1
const DEFAULT_NEED_MORE_THRESHOLD = 2

type DeckSource = { kind: "items"; index: number } | { kind: "requeued" }

type DeckEntry<T> = {
  decision: SwipeDecision<T>
  source: DeckSource
}

type DeckState<T> = {
  index: number
  requeued: T[]
  history: DeckEntry<T>[]
  lastAction: SwipeDeckAction | undefined
}

type DeckEvent<T> =
  | { type: "decide"; entry: DeckEntry<T>; undoDepth: number }
  | { type: "restore"; entry: DeckEntry<T>; action: "undo" | "rollback" }

const initialState = <T>(): DeckState<T> => ({
  index: 0,
  requeued: [],
  history: [],
  lastAction: undefined,
})

const reducer = <T>(state: DeckState<T>, event: DeckEvent<T>): DeckState<T> => {
  switch (event.type) {
    case "decide": {
      const fromRequeued = event.entry.source.kind === "requeued"

      return {
        index: fromRequeued ? state.index : state.index + 1,
        requeued: fromRequeued ? state.requeued.slice(1) : state.requeued,
        history: [...state.history, event.entry].slice(-event.undoDepth),
        lastAction: {
          type: "decide",
          direction: event.entry.decision.direction,
        },
      }
    }
    case "restore": {
      const { entry } = event
      const history = state.history.filter((candidate) => candidate !== entry)
      const isLatest = state.history[state.history.length - 1] === entry
      const lastAction: SwipeDeckAction = { type: event.action }

      if (isLatest && entry.source.kind === "items") {
        return {
          index: entry.source.index,
          requeued: state.requeued,
          history,
          lastAction,
        }
      }

      return {
        index: state.index,
        requeued: isLatest
          ? [entry.decision.item, ...state.requeued]
          : [...state.requeued, entry.decision.item],
        history,
        lastAction,
      }
    }
  }
}

export const useSwipeDeck = <T>({
  items,
  getItemId,
  onDecide,
  onUndo,
  onNeedMore,
  undoDepth = DEFAULT_UNDO_DEPTH,
  needMoreThreshold = DEFAULT_NEED_MORE_THRESHOLD,
}: UseSwipeDeckOptions<T>): UseSwipeDeckResult<T> => {
  const [state, dispatch] = useReducer(
    reducer as (state: DeckState<T>, event: DeckEvent<T>) => DeckState<T>,
    undefined,
    initialState<T>
  )
  // Synchronous latch: two decisions dispatched in the same tick would both
  // read the same state, so the guard cannot live in the reducer.
  const decided = useRef(new Set<string>())
  const needMoreRequested = useRef(false)

  const { index, requeued, history, lastAction } = state
  const current = items[index] ?? requeued[0]
  const currentId = current === undefined ? undefined : getItemId(current)
  const remaining = Math.max(items.length - index, 0) + requeued.length

  const restore = useCallback(
    (entry: DeckEntry<T>, action: "undo" | "rollback") => {
      if (!decided.current.delete(getItemId(entry.decision.item))) {
        return
      }
      dispatch({ type: "restore", entry, action })
    },
    [getItemId]
  )

  const decide = useCallback(
    (direction: SwipeDirection) => {
      if (current === undefined) {
        return
      }

      const id = getItemId(current)
      if (decided.current.has(id)) {
        return
      }
      decided.current.add(id)

      const entry: DeckEntry<T> = {
        decision: { item: current, direction },
        source:
          items[index] === undefined
            ? { kind: "requeued" }
            : { kind: "items", index },
      }

      dispatch({ type: "decide", entry, undoDepth })
      onDecide?.(entry.decision, () => restore(entry, "rollback"))
    },
    [current, getItemId, index, items, onDecide, restore, undoDepth]
  )

  const undo = useCallback(() => {
    const entry = history[history.length - 1]
    if (entry === undefined) {
      return
    }

    restore(entry, "undo")
    onUndo?.(entry.decision.item)
  }, [history, onUndo, restore])

  const swipeLeft = useCallback(() => decide("left"), [decide])
  const swipeRight = useCallback(() => decide("right"), [decide])

  useEffect(() => {
    if (!onNeedMore || items.length === 0) {
      return
    }

    if (remaining > needMoreThreshold) {
      needMoreRequested.current = false
      return
    }

    if (needMoreRequested.current) {
      return
    }
    needMoreRequested.current = true
    onNeedMore()
  }, [items.length, needMoreThreshold, onNeedMore, remaining])

  return {
    current,
    currentId,
    index,
    total: items.length + requeued.length,
    remaining,
    canUndo: history.length > 0,
    lastAction,
    decide,
    swipeLeft,
    swipeRight,
    undo,
  }
}
