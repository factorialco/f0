import { createContext, ReactNode, useContext } from "react"

import type { F0WizardContextValue } from "../internal-types"

export const F0WizardContext = createContext<F0WizardContextValue | null>(null)

export function useF0Wizard(): F0WizardContextValue {
  const context = useContext(F0WizardContext)
  if (!context) {
    throw new Error("useF0Wizard must be used within a F0Wizard")
  }
  return context
}

interface WizardProviderProps extends F0WizardContextValue {
  children: ReactNode
}

export function WizardProvider({ children, ...value }: WizardProviderProps) {
  return (
    <F0WizardContext.Provider value={value}>
      {children}
    </F0WizardContext.Provider>
  )
}
