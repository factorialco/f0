interface RevealState {
  /** Tree still loading — do nothing yet. */
  isInitialLoading: boolean
  /** Whether the first ready render has already been handled. */
  initialConsumed: boolean
  /** Opt-in node to auto-reveal once, on entry. */
  focusOnEntry?: string
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
 * - First ready render: adopt the current `revealNodeId` as "already handled"
 *   (so an initial search value never yanks the view), and — only if
 *   `focusOnEntry` is set — reveal that node (the opt-in auto-focus).
 * - Later renders: reveal `revealNodeId` only when it *changes* (a fresh search
 *   selection). "Find me" reveals via the controls, outside this path.
 */
export function resolveGraphReveal({
  isInitialLoading,
  initialConsumed,
  focusOnEntry,
  revealNodeId,
  lastRevealed,
}: RevealState): RevealDecision {
  if (isInitialLoading) {
    return { revealId: null, consumeInitial: false, lastRevealed }
  }
  if (!initialConsumed) {
    // Keep `lastRevealed` tracking the search value (not focusOnEntry) so a
    // later search selection of a different node still fires.
    return {
      revealId: focusOnEntry ?? null,
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
