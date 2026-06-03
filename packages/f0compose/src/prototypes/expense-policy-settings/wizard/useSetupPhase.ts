import { useCallback, useEffect, useState } from "react"

/**
 * Top-level setup phase for the Expense Policy page.
 *
 * The page now has a front-of-funnel that precedes the co-creation
 * editor. The whole experience is a small linear state machine:
 *
 *   empty       → the landing: icon + title + body + "Get started" CTA.
 *                 No left-nav, no sub-header — just the centered scaffold
 *                 (matches the empty-state design).
 *   interview   → "Get started" flips the One chat to FULLSCREEN and runs
 *                 a short clarifying-question interview. The chat covers
 *                 the canvas; behind it we render a quiet skeleton.
 *   generating  → interview done: chat collapses back to the side panel
 *                 and the canvas shows the "Generating your policy…"
 *                 skeleton while the starter policy is assembled.
 *   cocreation  → the existing policy editor (nav + views + side chat).
 *
 * Persistence (localStorage v1):
 *  - `empty` and `cocreation` are durable — a refresh keeps you where you
 *    were (so co-creation can be tested across reloads without replaying
 *    the interview every time).
 *  - `interview` and `generating` are TRANSIENT: they only make sense
 *    while One is actively driving the chat. If a refresh lands on one of
 *    them (the chat isn't mid-turn anymore), we coerce to a sane durable
 *    phase — `interview` → `empty` (restart cleanly), `generating` →
 *    `cocreation` (the policy was already being written).
 *
 * To replay the whole flow from the empty state, call `reset()` (wired to
 * a menu action) or clear the `expense-policy-setup-phase-v1` key.
 */
export type SetupPhase = "empty" | "interview" | "generating" | "cocreation"

const STORAGE_KEY = "expense-policy-setup-phase-v1"

function coerceOnLoad(raw: string | null): SetupPhase {
  switch (raw) {
    case "cocreation":
      return "cocreation"
    case "generating":
      // Was mid-generation on refresh — the policy is (or will be)
      // written, so drop straight into the editor.
      return "cocreation"
    case "interview":
      // Interview can't resume without One mid-turn — restart clean.
      return "empty"
    case "empty":
    default:
      return "empty"
  }
}

function readPhase(): SetupPhase {
  if (typeof window === "undefined") return "empty"
  try {
    return coerceOnLoad(window.localStorage.getItem(STORAGE_KEY))
  } catch {
    return "empty"
  }
}

function writePhase(phase: SetupPhase): void {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, phase)
  } catch {
    // localStorage disabled / quota — persistence is best-effort.
  }
}

export type SetupPhaseState = {
  phase: SetupPhase
  /** "Get started" → run the fullscreen interview. */
  enterInterview: () => void
  /** Interview finished → show the generating skeleton. */
  enterGenerating: () => void
  /** Policy assembled → drop into the co-creation editor. */
  enterCoCreation: () => void
  /** Back to the empty-state landing (replay the whole flow). */
  reset: () => void
}

export function useSetupPhase(): SetupPhaseState {
  const [phase, setPhase] = useState<SetupPhase>(() => readPhase())

  useEffect(() => {
    writePhase(phase)
  }, [phase])

  const enterInterview = useCallback(() => setPhase("interview"), [])
  const enterGenerating = useCallback(() => setPhase("generating"), [])
  const enterCoCreation = useCallback(() => setPhase("cocreation"), [])
  const reset = useCallback(() => setPhase("empty"), [])

  return { phase, enterInterview, enterGenerating, enterCoCreation, reset }
}
