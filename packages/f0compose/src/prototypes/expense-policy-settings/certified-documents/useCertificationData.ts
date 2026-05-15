import { useCallback, useState } from "react"

import { seedEntities } from "./seeds"
import type { Entity } from "./types"

/**
 * State hook for the Certified documents step. Visual-only — nothing
 * is persisted (BR-008 / AC-006).
 *
 * Mirrors the shape of `usePolicyData` so the rest of the prototype
 * has a single way to think about state hooks: one hook owns one slice,
 * everything returned is either a list or a setter.
 *
 * Authorization is intentionally one-way (per PM): there is no
 * `revokeEntity` mutation. In real life revoking certification is a
 * contractual / regulatory process, not a UI toggle, and the
 * prototype reflects that.
 *
 * The hook also owns the **mocked One conversation** cursor for this
 * step. The conversation is a state machine (welcome → consent →
 * done, etc.) rendered by `useCertifiedDocsConvoAction`. We keep the
 * cursor up here — instead of inside the action's render component —
 * so external callers (like the "Enable certification" card button)
 * can deep-link the conversation to a specific turn, e.g. jump
 * straight to the consent panel for the entity the user clicked on.
 */

/** A single bubble/turn in the mocked One conversation. */
export type ConvoTurn =
  | { kind: "welcome" }
  | { kind: "regime-explainer"; entityId: string }
  | { kind: "authorize-consent"; entityId: string }
  | { kind: "authorize-done"; entityId: string }
  | { kind: "cancelled"; entityId: string }
  | { kind: "all-done" }

export function useCertificationData() {
  const [entities, setEntities] = useState<Entity[]>(seedEntities)
  const [convoTurn, setConvoTurn] = useState<ConvoTurn>({ kind: "welcome" })

  const authorizeEntity = useCallback((id: string) => {
    setEntities((prev) =>
      prev.map((e) =>
        e.id === id
          ? {
              ...e,
              certificationStatus: "active",
              activatedAt: new Date().toISOString(),
            }
          : e
      )
    )
  }, [])

  return {
    entities,
    authorizeEntity,
    convoTurn,
    setConvoTurn,
  }
}

export type CertificationData = ReturnType<typeof useCertificationData>
