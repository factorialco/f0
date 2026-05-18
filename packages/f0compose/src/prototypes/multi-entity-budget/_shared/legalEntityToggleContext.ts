/**
 * Shared toggle state for the "Costs by legal entity" switch.
 *
 * The toggle is a property of the training group (movement), not of the
 * view. The sidepanel of the group (frames 5/6) and the Group detail Costs
 * tab (frame 7) must reflect the SAME state per movement — flipping it in
 * one immediately updates the other.
 *
 * We model that with a single React context that lives at the prototype
 * root. Both views read from and write to the same map.
 */
import { createContext, useContext } from "react"

import type { TrainingBudgetMovement } from "@/fixtures"

export type LegalEntityToggleContextValue = {
  /** True if the toggle is ON for the given movement. */
  isOn: (movementId: string) => boolean
  /** Flip / set the toggle for the given movement. */
  setOn: (movementId: string, on: boolean) => void
}

const LegalEntityToggleContext =
  createContext<LegalEntityToggleContextValue | null>(null)

export const LegalEntityToggleProvider = LegalEntityToggleContext.Provider

export function useLegalEntityToggle(): LegalEntityToggleContextValue {
  const value = useContext(LegalEntityToggleContext)
  if (!value) {
    throw new Error(
      "useLegalEntityToggle must be used inside <LegalEntityToggleProvider>"
    )
  }
  return value
}

/** Initial state: ON when the movement has a breakdown configured. */
export function defaultToggleFor(movement: TrainingBudgetMovement): boolean {
  return (
    movement.costsByLegalEntity !== undefined &&
    movement.costsByLegalEntity.length > 0
  )
}
