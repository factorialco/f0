import { createContext, useCallback, useContext, useRef, useState } from "react"
import { zodToJsonSchema } from "zod-to-json-schema"

import type { F0FormSchema } from "./types"
import type { F0FormRef } from "./useF0Form"

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
  /** Rebuild the form descriptions snapshot (call after mutating form state) */
  rebuildDescriptions: () => void
  /** Structured descriptions of all active forms, updated on register/unregister */
  formDescriptions: {
    formName: string
    formSchema: Record<string, unknown>
    formValues: Record<string, unknown>
    formErrors: Record<string, unknown>
    isDirty: boolean
  }[]
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
  const lastDescriptionsJsonRef = useRef<string>("")

  // State-based snapshot of form descriptions, updated on register/unregister.
  // This triggers re-renders so consumers (useF0AiFormActions) see the latest context.
  const [formDescriptions, setFormDescriptions] = useState<
    F0AiFormRegistryContextValue["formDescriptions"]
  >([])

  const rebuildDescriptions = useCallback(() => {
    // Defer to avoid setState during render — register() is called from
    // F0Form's useEffect while the form may still be completing its render.
    queueMicrotask(() => {
      const entries = Array.from(registryRef.current.entries())
      if (entries.length === 0) {
        if (lastDescriptionsJsonRef.current !== "[]") {
          lastDescriptionsJsonRef.current = "[]"
          setFormDescriptions([])
        }
        return
      }

      const descriptions = entries
        .map(([name, entry]) => {
          const ref = entry.ref.current

          if (!ref) {
            return
          }

          return {
            formName: name,
            formSchema: zodToJsonSchema(entry.schema) as Record<
              string,
              unknown
            >,
            formValues: ref.getValues(),
            formErrors: ref.getErrors(),
            isDirty: ref.isDirty(),
          }
        })
        .filter((el) => !!el)

      const json = JSON.stringify(descriptions)
      if (json !== lastDescriptionsJsonRef.current) {
        lastDescriptionsJsonRef.current = json
        setFormDescriptions(descriptions)
      }
    })
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
    rebuildDescriptions,
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
