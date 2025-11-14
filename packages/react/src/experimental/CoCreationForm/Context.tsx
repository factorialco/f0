import React, { createContext, useContext } from "react"
import { CoCreationFormCallbacks } from "./types"

type CoCreationFormContextType = CoCreationFormCallbacks & {
  isEditMode?: boolean
}

const CoCreationFormContext = createContext<
  CoCreationFormContextType | undefined
>(undefined)

export function CoCreationFormProvider({
  children,
  isEditMode,
  ...callbacks
}: {
  children: React.ReactNode
  isEditMode?: boolean
} & CoCreationFormCallbacks) {
  return (
    <CoCreationFormContext.Provider value={{ ...callbacks, isEditMode }}>
      {children}
    </CoCreationFormContext.Provider>
  )
}

export function useCoCreationFormContext() {
  const context = useContext(CoCreationFormContext)
  if (!context) {
    throw new Error(
      "useCoCreationFormContext must be used within a CoCreationFormProvider"
    )
  }
  return context
}
