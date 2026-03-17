import { createContext, useCallback, useContext, useRef, useState } from "react"

import type { F0FormSchema } from "./types"
import type { F0FormRef } from "./useF0Form"

import { describeFormSchema } from "./describeFormSchema"

/**
 * Entry in the AI form registry
 */
export interface F0AiFormEntry {
  ref: React.MutableRefObject<F0FormRef | null>
  schema: F0FormSchema
}

/**
 * Context value for the AI form registry
 */
interface F0AiFormRegistryContextValue {
  register: (
    name: string,
    ref: React.MutableRefObject<F0FormRef | null>,
    schema: F0FormSchema
  ) => void
  unregister: (name: string) => void
  get: (name: string) => F0AiFormEntry | undefined
  getFormNames: () => string[]
  /** Serialized descriptions of all active forms, updated on register/unregister */
  formDescriptions: string
}

const F0AiFormRegistryContext =
  createContext<F0AiFormRegistryContextValue | null>(null)

/**
 * Provider that maintains a registry of active F0Forms,
 * enabling AI tools to look up forms by name.
 *
 * Place this inside both the CopilotKit provider and above the F0Form components.
 *
 * @example
 * ```tsx
 * <F0AiChatProvider>
 *   <F0AiFormRegistryProvider>
 *     <F0Form name="my-form" ... />
 *     <F0AiChat />
 *   </F0AiFormRegistryProvider>
 * </F0AiChatProvider>
 * ```
 */
export function F0AiFormRegistryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const registryRef = useRef<Map<string, F0AiFormEntry>>(new Map())

  // State-based snapshot of form descriptions, updated on register/unregister.
  // This triggers re-renders so consumers (useF0AiFormActions) see the latest context.
  const [formDescriptions, setFormDescriptions] = useState<string>("")

  console.log({ formDescriptions })

  const rebuildDescriptions = useCallback(() => {
    const entries = Array.from(registryRef.current.entries())
    if (entries.length === 0) {
      setFormDescriptions("")
      return
    }

    const descriptions = entries.map(([name, entry]) => {
      const fields = describeFormSchema(entry.schema)
      const fieldsSummary = fields
        .map((f) => {
          let desc = `- ${f.name} (${f.type}): "${f.label}"${f.required ? " [required]" : ""}`
          if (f.options) {
            desc += ` options: ${f.options.map((o) => `"${o.value}"`).join(", ")}`
          }
          if (f.optionsSource === "dynamic") {
            desc += " (options loaded dynamically)"
          }
          return desc
        })
        .join("\n")

      return `Form "${name}":\n${fieldsSummary}`
    })

    setFormDescriptions(descriptions.join("\n\n"))
  }, [])

  const register = useCallback(
    (
      name: string,
      ref: React.MutableRefObject<F0FormRef | null>,
      schema: F0FormSchema
    ) => {
      registryRef.current.set(name, { ref, schema })
      rebuildDescriptions()
    },
    [rebuildDescriptions]
  )

  const unregister = useCallback(
    (name: string) => {
      registryRef.current.delete(name)
      rebuildDescriptions()
    },
    [rebuildDescriptions]
  )

  const get = useCallback((name: string) => {
    return registryRef.current.get(name)
  }, [])

  const getFormNames = useCallback(() => {
    return Array.from(registryRef.current.keys())
  }, [])

  const value: F0AiFormRegistryContextValue = {
    register,
    unregister,
    get,
    getFormNames,
    formDescriptions,
  }

  return (
    <F0AiFormRegistryContext.Provider value={value}>
      {children}
    </F0AiFormRegistryContext.Provider>
  )
}

/**
 * Hook to access the AI form registry.
 * Returns null if not inside a F0AiFormRegistryProvider.
 */
export function useF0AiFormRegistry() {
  return useContext(F0AiFormRegistryContext)
}
