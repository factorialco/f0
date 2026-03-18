import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import type { ZodRawShape } from "zod"
import { zodToJsonSchema } from "zod-to-json-schema"

import type { F0FormSchema } from "./types"
import { unwrapZodSchema } from "./f0Schema"
import type { F0FormRef, F0FormSetValueOptions } from "./useF0Form"

/**
 * Entry in the AI form registry
 */
export interface F0AiFormEntry {
  ref: React.MutableRefObject<F0FormRef | null>
  schema: F0FormSchema
  /** Whether this entry was registered from an availableFormDefinition (not a rendered form) */
  virtual?: boolean
}

/**
 * A form definition that the AI can interact with even though the form is not rendered.
 */
export interface F0AiAvailableFormDefinition {
  /** Unique name to identify the form */
  name: string
  /** Zod schema that defines the form's fields and validation */
  schema: F0FormSchema
  /** Default values for the form fields */
  defaultValues?: Record<string, unknown>
  /** Optional submit handler. Called when AI triggers formSubmit on this form. */
  onSubmit?: (values: Record<string, unknown>) => void | Promise<void>
}

/**
 * Creates a virtual F0FormRef backed by in-memory state.
 * Used for form definitions that are available to the AI but not rendered.
 */
function createVirtualFormRef(
  schema: F0FormSchema,
  defaultValues: Record<string, unknown> = {},
  onSubmit?: (values: Record<string, unknown>) => void | Promise<void>
): React.MutableRefObject<F0FormRef> {
  let values = { ...defaultValues }
  const initial = { ...defaultValues }

  const getShapeKeys = (): string[] => {
    const unwrapped = unwrapZodSchema(schema) as { shape?: ZodRawShape }
    return Object.keys(unwrapped.shape ?? {})
  }

  const ref: React.MutableRefObject<F0FormRef> = {
    current: {
      submit: async () => {
        const result = schema.safeParse(values)
        if (!result.success) {
          throw new Error(result.error.issues.map((i) => i.message).join(", "))
        }
        await onSubmit?.(result.data as Record<string, unknown>)
      },
      reset: () => {
        values = { ...initial }
      },
      isDirty: () => JSON.stringify(values) !== JSON.stringify(initial),
      getValues: () => ({ ...values }),
      setValue: (
        fieldName: string,
        value: unknown,
        _options?: F0FormSetValueOptions
      ) => {
        values = { ...values, [fieldName]: value }
      },
      setValues: (
        newValues: Record<string, unknown>,
        _options?: F0FormSetValueOptions
      ) => {
        values = { ...values, ...newValues }
      },
      trigger: async (fieldName?: string) => {
        if (fieldName) {
          const unwrapped = unwrapZodSchema(schema) as {
            shape?: Record<
              string,
              { safeParse: (v: unknown) => { success: boolean } }
            >
          }
          const fieldSchema = unwrapped.shape?.[fieldName]
          if (!fieldSchema) return true
          return fieldSchema.safeParse(values[fieldName]).success
        }
        return schema.safeParse(values).success
      },
      getErrors: () => {
        const result = schema.safeParse(values)
        if (result.success) return {}
        const errors: Record<string, string> = {}
        for (const issue of result.error.issues) {
          const path = issue.path.join(".")
          if (path && !errors[path]) {
            errors[path] = issue.message
          }
        }
        return errors
      },
      getFieldNames: getShapeKeys,
      _setStateCallback: () => {},
    },
  }

  return ref
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
  availableFormDefinitions,
}: {
  children: React.ReactNode
  /** Form definitions the AI can interact with even if the form is not rendered on the page */
  availableFormDefinitions?: F0AiAvailableFormDefinition[]
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
      // Rendered forms always take precedence over virtual entries
      registryRef.current.set(name, { ref, schema })
      rebuildDescriptions()
    },
    [rebuildDescriptions]
  )

  const unregister = useCallback(
    (name: string) => {
      const entry = registryRef.current.get(name)
      // Only unregister if it's not a virtual entry (virtual lifecycle is managed by the effect)
      if (entry?.virtual) return
      registryRef.current.delete(name)
      // If there's a virtual definition with this name, re-register it
      const virtualDef = availableFormDefinitions?.find((d) => d.name === name)
      if (virtualDef) {
        const virtualRef = createVirtualFormRef(
          virtualDef.schema,
          virtualDef.defaultValues,
          virtualDef.onSubmit
        )
        registryRef.current.set(name, {
          ref: virtualRef,
          schema: virtualDef.schema,
          virtual: true,
        })
      }
      rebuildDescriptions()
    },
    [rebuildDescriptions, availableFormDefinitions]
  )

  const get = useCallback((name: string) => {
    return registryRef.current.get(name)
  }, [])

  const getFormNames = useCallback(() => {
    return Array.from(registryRef.current.keys())
  }, [])

  // Sync virtual form definitions: register forms that aren't rendered,
  // skip if a rendered (non-virtual) form with the same name already exists.
  const virtualNamesRef = useRef<Set<string>>(new Set())
  useEffect(() => {
    const defs = availableFormDefinitions ?? []
    const nextVirtualNames = new Set<string>()

    for (const def of defs) {
      nextVirtualNames.add(def.name)
      const existing = registryRef.current.get(def.name)
      // Skip if a rendered form already owns this name
      if (existing && !existing.virtual) continue
      // Skip if already registered as virtual
      if (existing?.virtual) continue

      const virtualRef = createVirtualFormRef(
        def.schema,
        def.defaultValues,
        def.onSubmit
      )
      registryRef.current.set(def.name, {
        ref: virtualRef,
        schema: def.schema,
        virtual: true,
      })
    }

    // Remove virtual entries that are no longer in the definitions
    for (const prevName of virtualNamesRef.current) {
      if (!nextVirtualNames.has(prevName)) {
        const entry = registryRef.current.get(prevName)
        if (entry?.virtual) {
          registryRef.current.delete(prevName)
        }
      }
    }

    virtualNamesRef.current = nextVirtualNames
    rebuildDescriptions()

    return () => {
      // Cleanup: remove all virtual entries from this effect
      for (const name of nextVirtualNames) {
        const entry = registryRef.current.get(name)
        if (entry?.virtual) {
          registryRef.current.delete(name)
        }
      }
      rebuildDescriptions()
    }
  }, [availableFormDefinitions, rebuildDescriptions])

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
