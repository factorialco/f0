import { useCallback, useState } from "react"

import type { Q1OptionId, Q2OptionId, Q3OptionId } from "../data/cascades"

/**
 * State for the co-creation flow's last-answered values + per-form
 * activation flags derived from Q1.
 *
 * Why a separate hook (rather than folding into `usePolicyData`):
 *
 *  - `policyData` is the visible state the table renders. Cascade
 *    answers are a separate domain — they describe WHY the table
 *    looks the way it does and feed the §8 "make changes" loop.
 *    Mixing them would make `usePolicyData` impossible to reason
 *    about (a category toggle would have to know whether it was the
 *    result of a Q1 answer or a manual click).
 *  - The agent reads these via `useExposeContext` so it knows which
 *    question to re-open when the user says "make changes to Q2".
 *  - Per-form activation (`perDiemEnabled`, `mileageEnabled`) gates
 *    which form-summary cards the Forms summary view renders; it's
 *    derived from Q1 only, never set manually.
 *
 * Free-text custom answers from the "type your own" escape hatch are
 * stored alongside the canonical option ids so the summary can render
 * them verbatim. The cascade itself ignores them — per spec §3, free-
 * text on Q1 ("Other") shows an acknowledgement that custom
 * categories aren't supported today; on Q3 it would parse and
 * confirm, but slice 1 stops short of implementing that branch and
 * just stores the string.
 */
export type SetupAnswers = {
  q1: { selected: Q1OptionId[]; custom: string | null } | null
  q2: { selected: Q2OptionId[]; custom: string | null } | null
  q3: { selected: Q3OptionId | null; custom: string | null } | null
  perDiemEnabled: boolean
  mileageEnabled: boolean
}

const INITIAL: SetupAnswers = {
  q1: null,
  q2: null,
  q3: null,
  perDiemEnabled: false,
  mileageEnabled: false,
}

export function useExpensePolicySetup() {
  const [answers, setAnswers] = useState<SetupAnswers>(INITIAL)

  const setQ1 = useCallback(
    (
      selected: Q1OptionId[],
      custom: string | null,
      activation: { perDiemEnabled: boolean; mileageEnabled: boolean }
    ) => {
      setAnswers((prev) => ({
        ...prev,
        q1: { selected, custom },
        perDiemEnabled: activation.perDiemEnabled,
        mileageEnabled: activation.mileageEnabled,
      }))
    },
    []
  )

  const setQ2 = useCallback(
    (selected: Q2OptionId[], custom: string | null) => {
      setAnswers((prev) => ({ ...prev, q2: { selected, custom } }))
    },
    []
  )

  const setQ3 = useCallback(
    (selected: Q3OptionId | null, custom: string | null) => {
      setAnswers((prev) => ({ ...prev, q3: { selected, custom } }))
    },
    []
  )

  const reset = useCallback(() => setAnswers(INITIAL), [])

  return { answers, setQ1, setQ2, setQ3, reset }
}

export type ExpensePolicySetup = ReturnType<typeof useExpensePolicySetup>
