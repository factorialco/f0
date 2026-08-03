interface RevealState {
  /** Tree still loading — do nothing yet. */
  isInitialLoading: boolean
  /** Whether the first ready render has already been handled. */
  initialConsumed: boolean
  /** Search-driven reveal target (ignored on entry). */
  revealNodeId?: string
  /** Last `revealNodeId` we adopted/acted on, to detect a *new* search pick. */
  lastRevealed?: string
  /**
   * Monotonic counter bumped by the shared search on every result selection.
   * Lets us re-reveal the SAME `revealNodeId` when the user picks it again
   * (the id alone can't distinguish a repeat pick from a no-op re-render), so
   * re-searching a node re-centers just like "Find me".
   */
  revealNonce?: number
  /** Last `revealNonce` we acted on, to detect a repeat pick of the same node. */
  lastNonce?: number
}

interface RevealDecision {
  /** Node to reveal now, or `null` for none. */
  revealId: string | null
  /** Whether this run marks the initial ready render as handled. */
  consumeInitial: boolean
  /** The value `lastRevealed` should take after this run. */
  lastRevealed: string | undefined
  /** The value `lastNonce` should take after this run. */
  lastNonce: number | undefined
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
 * - Later renders: reveal `revealNodeId` when it *changes* (a fresh search
 *   selection) OR when `revealNonce` changes with the id unchanged (the user
 *   re-picked the same node — re-center it, like "Find me"). "Find me" itself
 *   reveals via the controls, outside this path.
 */
export function resolveGraphReveal({
  isInitialLoading,
  initialConsumed,
  revealNodeId,
  lastRevealed,
  revealNonce,
  lastNonce,
}: RevealState): RevealDecision {
  if (isInitialLoading) {
    return { revealId: null, consumeInitial: false, lastRevealed, lastNonce }
  }
  if (!initialConsumed) {
    // Adopt the current search value + nonce as handled; never reveal on entry.
    return {
      revealId: null,
      consumeInitial: true,
      lastRevealed: revealNodeId,
      lastNonce: revealNonce,
    }
  }
  const idChanged = revealNodeId !== lastRevealed
  const nonceChanged = revealNonce !== lastNonce
  if (revealNodeId && (idChanged || nonceChanged)) {
    return {
      revealId: revealNodeId,
      consumeInitial: false,
      lastRevealed: revealNodeId,
      lastNonce: revealNonce,
    }
  }
  return { revealId: null, consumeInitial: false, lastRevealed, lastNonce }
}
