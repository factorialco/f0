import { useCallback, useRef } from "react"
import { diffSpan } from "../utils/text-diff"
import { type AnchoredMention } from "./useMentions"

/** Everything an undo step has to put back. */
export type ComposerSnapshot = {
  value: string
  caret: number
  mentions: AnchoredMention[]
}

/** Consecutive keystrokes of the same kind collapse into one step while they
 * stay this close together — one undo per typing burst, not per character. */
const COALESCE_MS = 600

/** Steps kept. Past this, the oldest is dropped. */
const LIMIT = 100

type EditKind = "insert" | "delete" | "other"

/**
 * How a change reads for coalescing. Whitespace is deliberately `other`, so a
 * step boundary falls at every word break and undo walks back a word at a
 * time, the way a plain textarea does.
 */
const kindOf = (prev: string, next: string): EditKind => {
  const { start, prevEnd, nextEnd } = diffSpan(prev, next)
  const removed = prevEnd - start
  const added = nextEnd - start
  if (removed === 0 && added === 1) {
    return /\s/.test(next[start] ?? "") ? "other" : "insert"
  }
  if (added === 0 && removed === 1) {
    return "delete"
  }
  return "other"
}

export type ComposerHistory = {
  /** Note that the composer went from `previous` to `current`. */
  record: (previous: ComposerSnapshot, current: ComposerSnapshot) => void
  /** The state to go back to, or null. */
  undo: (current: ComposerSnapshot) => ComposerSnapshot | null
  /** The state to go forward to, or null. */
  redo: (current: ComposerSnapshot) => ComposerSnapshot | null
  /** Forget everything — the draft it described is gone. */
  reset: () => void
}

/**
 * Undo/redo for the composer.
 *
 * The composer rewrites its own value — inserting a mention, removing one
 * whole, swapping an emoji shortcode — and every such write destroys the
 * textarea's native undo stack, so the browser's Cmd+Z has nothing useful left
 * to give back. This keeps its own stack of full snapshots (text, caret and
 * mention anchors together) so a mention comes back anchored rather than as
 * plain `@name` text.
 */
export const useComposerHistory = (): ComposerHistory => {
  const pastRef = useRef<ComposerSnapshot[]>([])
  const futureRef = useRef<ComposerSnapshot[]>([])
  const lastKindRef = useRef<EditKind>("other")
  const lastAtRef = useRef(0)

  const record = useCallback(
    (previous: ComposerSnapshot, current: ComposerSnapshot) => {
      // Editing after an undo abandons the branch that was ahead.
      futureRef.current = []

      const kind = kindOf(previous.value, current.value)
      const now = Date.now()
      const continues =
        kind !== "other" &&
        kind === lastKindRef.current &&
        now - lastAtRef.current <= COALESCE_MS &&
        previous.mentions === current.mentions &&
        pastRef.current.length > 0

      lastKindRef.current = kind
      lastAtRef.current = now
      if (continues) {
        return
      }

      pastRef.current.push(previous)
      if (pastRef.current.length > LIMIT) {
        pastRef.current.shift()
      }
    },
    []
  )

  const undo = useCallback((current: ComposerSnapshot) => {
    const previous = pastRef.current.pop()
    if (!previous) {
      return null
    }
    futureRef.current.push(current)
    // The run is over: the next keystroke starts a fresh step rather than
    // folding itself into whatever we just restored.
    lastKindRef.current = "other"
    return previous
  }, [])

  const redo = useCallback((current: ComposerSnapshot) => {
    const next = futureRef.current.pop()
    if (!next) {
      return null
    }
    pastRef.current.push(current)
    lastKindRef.current = "other"
    return next
  }, [])

  const reset = useCallback(() => {
    pastRef.current = []
    futureRef.current = []
    lastKindRef.current = "other"
    lastAtRef.current = 0
  }, [])

  return { record, undo, redo, reset }
}
