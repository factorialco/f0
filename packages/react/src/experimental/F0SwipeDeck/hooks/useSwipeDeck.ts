import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type {
  SwipeDecision,
  SwipeDirection,
  UseSwipeDeckOptions,
  UseSwipeDeckResult,
} from "../types"

const DEFAULT_UNDO_DEPTH = 1
const DEFAULT_NEED_MORE_THRESHOLD = 2

type DeckEntry<T> = {
  decision: SwipeDecision<T>
  index: number
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
  const [index, setIndex] = useState(0)
  const [history, setHistory] = useState<DeckEntry<T>[]>([])
  const [lastDirection, setLastDirection] = useState<SwipeDirection>()
  const decided = useRef(new Set<string>())
  const needMoreRequested = useRef(false)

  const current = items[index]
  const currentId = current === undefined ? undefined : getItemId(current)
  const remaining = Math.max(items.length - index, 0)
  const lastEntry = history[history.length - 1]
  const canUndo = lastEntry !== undefined && lastEntry.index === index - 1

  const restore = useCallback(
    (entry: DeckEntry<T>) => {
      const id = getItemId(entry.decision.item)
      if (!decided.current.delete(id)) {
        return
      }

      setHistory((entries) =>
        entries.filter((candidate) => candidate !== entry)
      )
      setIndex((currentIndex) =>
        entry.index === currentIndex - 1 ? entry.index : currentIndex
      )
    },
    [getItemId]
  )

  const decide = useCallback(
    (direction: SwipeDirection) => {
      const item = items[index]
      if (item === undefined) {
        return
      }

      const id = getItemId(item)
      if (decided.current.has(id)) {
        return
      }
      decided.current.add(id)

      const entry: DeckEntry<T> = { decision: { item, direction }, index }
      setHistory((entries) => [...entries, entry].slice(-undoDepth))
      setIndex(index + 1)
      setLastDirection(direction)
      onDecide?.(entry.decision, () => restore(entry))
    },
    [getItemId, index, items, onDecide, restore, undoDepth]
  )

  const undo = useCallback(() => {
    if (!canUndo || lastEntry === undefined) {
      return
    }

    restore(lastEntry)
    setLastDirection(undefined)
    onUndo?.(lastEntry.decision.item)
  }, [canUndo, lastEntry, onUndo, restore])

  const swipeLeft = useCallback(() => decide("left"), [decide])
  const swipeRight = useCallback(() => decide("right"), [decide])

  useEffect(() => {
    if (!onNeedMore) {
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
  }, [needMoreThreshold, onNeedMore, remaining])

  return useMemo(
    () => ({
      current,
      currentId,
      index,
      total: items.length,
      remaining,
      canUndo,
      lastDirection,
      decide,
      swipeLeft,
      swipeRight,
      undo,
    }),
    [
      canUndo,
      current,
      currentId,
      decide,
      index,
      items.length,
      lastDirection,
      remaining,
      swipeLeft,
      swipeRight,
      undo,
    ]
  )
}
