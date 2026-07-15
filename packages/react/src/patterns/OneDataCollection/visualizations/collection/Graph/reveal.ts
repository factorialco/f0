interface RevealState {
  /** Tree still loading — do nothing yet. */
  isInitialLoading: boolean
  /** Whether the first ready render has already been handled. */
  initialConsumed: boolean
  /** Search-driven reveal target (ignored on entry). */
  revealNodeId?: string
  /** Last `revealNodeId` we adopted/acted on, to detect a *new* search pick. */
  lastRevealed?: string
}

interface RevealDecision {
  /** Node to reveal now, or `null` for none. */
  revealId: string | null
  /** Whether this run marks the initial ready render as handled. */
  consumeInitial: boolean
  /** The value `lastRevealed` should take after this run. */
  lastRevealed: string | undefined
}

/**
 * Decides what the graph should reveal on a given render — pure so the ref
 * juggling in the effect stays trivial and this can be unit-tested.
 *
 * Rules:
 * - While loading: nothing.
 * - First ready render: never reveal — adopt the current `revealNodeId` as
 *   "already handled" so an initial search value doesn't yank the view. (Entry
 *   focus is handled separately by `focusOnEntry` → `initialFocusNodeId`, which
 *   frames the node on the first paint without a reveal/pan.)
 * - Later renders: reveal `revealNodeId` only when it *changes* (a fresh search
 *   selection). "Find me" reveals via the controls, outside this path.
 */
export function resolveGraphReveal({
  isInitialLoading,
  initialConsumed,
  revealNodeId,
  lastRevealed,
}: RevealState): RevealDecision {
  if (isInitialLoading) {
    return { revealId: null, consumeInitial: false, lastRevealed }
  }
  if (!initialConsumed) {
    // Adopt the current search value as handled; never reveal on entry.
    return {
      revealId: null,
      consumeInitial: true,
      lastRevealed: revealNodeId,
    }
  }
  if (revealNodeId && revealNodeId !== lastRevealed) {
    return {
      revealId: revealNodeId,
      consumeInitial: false,
      lastRevealed: revealNodeId,
    }
  }
  return { revealId: null, consumeInitial: false, lastRevealed }
}
