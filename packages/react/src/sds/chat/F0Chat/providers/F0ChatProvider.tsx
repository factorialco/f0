"use client"

import { createContext, useContext, type ReactNode } from "react"

import { type F0ChatRuntime } from "../types"

const F0ChatContext = createContext<F0ChatRuntime | null>(null)

/**
 * Makes a chat {@link F0ChatRuntime} available to the F0Chat UI. The host owns
 * the runtime (mock in stories, GetStream adapter in factorial); F0 only reads it.
 */
export const F0ChatProvider = ({
  runtime,
  children,
}: {
  runtime: F0ChatRuntime
  children: ReactNode
}): ReactNode => (
  <F0ChatContext.Provider value={runtime}>{children}</F0ChatContext.Provider>
)

/** Read the chat runtime. Throws when used outside an {@link F0ChatProvider}. */
export function useF0Chat(): F0ChatRuntime {
  const ctx = useContext(F0ChatContext)
  if (!ctx) {
    throw new Error("useF0Chat must be used within an F0ChatProvider")
  }
  return ctx
}
