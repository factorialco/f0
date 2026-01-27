import { createContext, useContext } from "react"

import type { CardSelectableContextValue, CardSelectableValue } from "./types"

export const CardSelectableContext =
  createContext<CardSelectableContextValue<CardSelectableValue> | null>(null)

export function useCardSelectableContext<
  T extends CardSelectableValue,
>(): CardSelectableContextValue<T> {
  const context = useContext(CardSelectableContext)
  if (!context) {
    throw new Error("CardSelectableItem must be used within a CardSelectable")
  }
  return context as unknown as CardSelectableContextValue<T>
}
