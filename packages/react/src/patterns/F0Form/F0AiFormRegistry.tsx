import type { ZodRawShape, ZodType } from "zod"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { zodToJsonSchema } from "zod-to-json-schema"

import type { ModuleId } from "@/components/avatars/F0AvatarModule"
import type { F0WizardFormStep } from "@/patterns/F0WizardForm/types"

import type {
  F0FormErrorTriggerMode,
  F0FormSchema,
  F0SectionConfig,
  F0FormSubmitConfig,
} from "./types"
import type { F0FormRef, F0FormSetValueOptions } from "./useF0Form"

import { getF0Config, inferFieldType, unwrapZodSchema } from "./f0Schema"

/**
 * Entry in the AI form registry
 */
export interface F0AiFormEntry {
  ref: React.MutableRefObject<F0FormRef | null>
  schema: F0FormSchema
  /** Human-readable description of the form's purpose */
  description?: string
  /** Module associated with this form (for avatar display in canvas cards) */
  module?: ModuleId
  /** Whether this entry was registered from an availableFormDefinition (not a rendered form) */
  virtual?: boolean
  /** Section configs (title, description) keyed by section ID */
  sections?: Record<string, F0SectionConfig>
  /** Zod schema for params accepted by the AI (virtual entries only) */
  defaultValuesParamsSchema?: ZodType
  /** Raw defaultValues function that accepts params (from rendered forms with defaultValuesParamsSchema) */
  defaultValuesFn?: (
    params: Record<string, unknown>
  ) => Promise<Record<string, unknown>>
  /** Field names explicitly set via setValue/setValues on a virtual ref */
  dirtyFields?: Set<string>
  /** Consumer submit callback (from availableFormDefinition). Preserved across virtual ↔ rendered transitions. */
  onSubmit?: (values: Record<string, unknown>) => void | Promise<void>
  /** Wizard steps (for multi-step form rendering) */
  steps?: F0WizardFormStep[]
  /** Submit button configuration (label, icon, etc.) */
  submitConfig?: F0FormSubmitConfig
  /** When to trigger validation errors */
  errorTriggerMode?: F0FormErrorTriggerMode
}

/**
 * A form definition that the AI can interact with even though the form is not rendered.
 *
 * Use the generic parameter to type the params accepted by a functional `defaultValues`.
 * Prefer using {@link defineAvailableForm} for automatic inference from `defaultValuesParamsSchema`.
 */
export interface F0AiAvailableFormDefinition<
  TParams extends Record<string, unknown> = Record<string, unknown>,
> {
  /** Unique name to identify the form */
  name: string
  /** Zod schema that defines the form's fields and validation */
  schema: F0FormSchema
  /**
   * Default values for the form fields.
   * Can be a static object or a function that receives params (supplied by the AI)
   * and returns the defaults.
   */
  defaultValues?:
    | Record<string, unknown>
    | ((params: TParams) => Record<string, unknown>)
  /**
   * Zod schema that describes the params accepted by a functional `defaultValues`.
   * When provided, the AI will see this schema and can supply params.
   * Params are validated against this schema before being passed to `defaultValues`.
   */
  defaultValuesParamsSchema?: ZodType<TParams>
  /** Section configs (title, description) keyed by section ID */
  sections?: Record<string, F0SectionConfig>
  /** Optional submit handler. Called when AI triggers formSubmit on this form. */
  onSubmit?: (values: Record<string, unknown>) => void | Promise<void>
  /** Title shown in the dialog header or wizard header */
  title?: string
  /** Description shown under the title in dialog mode */
  description?: string
  /** Module associated with this form (for avatar display in canvas cards) */
  module?: ModuleId
  /** Wizard steps (required for wizard mode to work with multiple steps) */
  steps?: F0WizardFormStep[]
  /** Submit button configuration (label, icon, etc.) */
  submitConfig?: F0FormSubmitConfig
  /** When to trigger validation errors */
  errorTriggerMode?: F0FormErrorTriggerMode
}

/**
 * Helper to define an available form with proper params typing.
 * TypeScript infers `TParams` from `defaultValuesParamsSchema`, so the
 * `defaultValues` callback receives fully typed params.
 *
 * @example
 * ```tsx
 * const employeeForm = defineAvailableForm({
 *   name: "edit-employee",
 *   schema: employeeSchema,
 *   defaultValuesParamsSchema: z.object({ employeeId: z.string() }),
 *   defaultValues: (params) => ({
 *     // params.employeeId is typed as string
 *     name: `Employee ${params.employeeId}`,
 *   }),
 * })
 * ```
 */
export function defineAvailableForm<
  TParams extends Record<string, unknown> = Record<string, unknown>,
>(
  definition: F0AiAvailableFormDefinition<TParams>
): F0AiAvailableFormDefinition<TParams> {
  return definition
}

/**
 * Resolves defaultValues from a definition, handling both static objects and functions.
 */
function resolveDefaultValues(
  defaultValues:
    | Record<string, unknown>
    | ((params: Record<string, unknown>) => Record<string, unknown>)
    | undefined,
  params: Record<string, unknown> = {}
): Record<string, unknown> {
  if (typeof defaultValues === "function") {
    return defaultValues(params)
  }
  return defaultValues ?? {}
}

/**
 * Creates a virtual F0FormRef backed by in-memory state.
 * Used for form definitions that are available to the AI but not rendered.
 */
function createVirtualFormRef(
  schema: F0FormSchema,
  defaultValues: Record<string, unknown> = {},
  onSubmit?: (values: Record<string, unknown>) => void | Promise<void>
): { ref: React.MutableRefObject<F0FormRef>; dirtyFields: Set<string> } {
  let values = { ...defaultValues }
  const initial = { ...defaultValues }
  const dirtyFields = new Set<string>()

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
        dirtyFields.clear()
      },
      isDirty: () => JSON.stringify(values) !== JSON.stringify(initial),
      getValues: () => ({ ...values }),
      setValue: (
        fieldName: string,
        value: unknown,
        _options?: F0FormSetValueOptions
      ) => {
        values = { ...values, [fieldName]: value }
        dirtyFields.add(fieldName)
      },
      setValues: (
        newValues: Record<string, unknown>,
        _options?: F0FormSetValueOptions
      ) => {
        values = { ...values, ...newValues }
        for (const key of Object.keys(newValues)) {
          dirtyFields.add(key)
        }
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
      actionBar: {
        wiggle: () => {},
      },
      _setStateCallback: () => {},
    },
  }

  return { ref, dirtyFields }
}

/**
 * Extracts human-readable field descriptions from f0FormField metadata.
 * Returns a record mapping field name → { label, placeholder?, helpText?, description? }
 */
function extractFieldDescriptions(schema: F0FormSchema): Record<
  string,
  {
    label: string
    section?: string
    placeholder?: string
    helpText?: string
    description?: string
    customFieldName?: string
    fieldType?: string
  }
> {
  const unwrapped = unwrapZodSchema(schema) as { shape?: ZodRawShape }
  const shape = unwrapped.shape
  if (!shape) return {}

  const result: Record<
    string,
    {
      label: string
      section?: string
      placeholder?: string
      helpText?: string
      description?: string
      customFieldName?: string
      fieldType?: string
    }
  > = {}

  for (const [key, fieldSchema] of Object.entries(shape)) {
    const config = getF0Config(fieldSchema)
    const zodDescription = (fieldSchema as { description?: string }).description

    if (config?.label || zodDescription) {
      result[key] = {
        label: config?.label ?? key,
        ...(config?.section && { section: config.section }),
        ...(config?.placeholder && { placeholder: config.placeholder }),
        ...(config?.helpText && { helpText: config.helpText }),
        ...(zodDescription && { description: zodDescription }),
        ...(config?.customFieldName && {
          customFieldName: config.customFieldName,
        }),
        ...(inferFieldType(fieldSchema, config ?? { label: key }) !==
          "text" && {
          fieldType: inferFieldType(fieldSchema, config ?? { label: key }),
        }),
      }
    }
  }

  return result
}

/**
 * Extracts section title and description from section configs.
 */
function extractSectionDescriptions(
  sections?: Record<string, F0SectionConfig>
): Record<string, { title: string; description?: string }> {
  if (!sections) return {}

  const result: Record<string, { title: string; description?: string }> = {}
  for (const [id, config] of Object.entries(sections)) {
    result[id] = {
      title: config.title,
      ...(config.description && { description: config.description }),
    }
  }
  return result
}

/**
 * Context value for the AI form registry
 */
/** Full runtime description of a form (used for formsOnCurrentPage and activeForm) */
export interface F0AiFormDescription {
  formName: string
  description?: string
  module?: ModuleId
  /** Custom title for the card (set via pickActiveForm) */
  cardTitle: string
  /** Custom description for the card (set via pickActiveForm) */
  cardDescription: string
  formSchema: Record<string, unknown>
  fieldDescriptions: Record<
    string,
    {
      label: string
      section?: string
      placeholder?: string
      helpText?: string
      description?: string
      fieldType?: string
    }
  >
  sectionDescriptions: Record<string, { title: string; description?: string }>
  formValues: Record<string, unknown>
  formErrors: Record<string, unknown>
  isDirty: boolean
  /** JSON Schema of defaultValuesParams (only for forms with defaultValuesParamsSchema) */
  defaultValuesParamsSchema?: Record<string, unknown>
}

/** Lightweight summary of an available (virtual) form */
export interface F0AiAvailableFormSummary {
  formName: string
  description?: string
  module?: ModuleId
}

interface F0AiFormRegistryContextValue {
  register: (
    name: string,
    ref: React.MutableRefObject<F0FormRef | null>,
    schema: F0FormSchema,
    sections?: Record<string, F0SectionConfig>,
    defaultValuesParamsSchema?: ZodType,
    defaultValuesFn?: (
      params: Record<string, unknown>
    ) => Promise<Record<string, unknown>>,
    description?: string,
    module?: ModuleId
  ) => void
  unregister: (name: string) => void
  get: (name: string) => F0AiFormEntry | undefined
  getFormNames: () => string[]
  /** Rebuild the form descriptions snapshot (call after mutating form state) */
  rebuildDescriptions: () => void
  /** Full runtime state of all rendered (non-virtual) forms on the current page */
  formsOnCurrentPage: F0AiFormDescription[]
  /** Lightweight summaries (name + description) of all virtual/available forms */
  availableForms: F0AiAvailableFormSummary[]
  /** Full runtime state of the form the AI is actively co-editing, or null */
  activeForm: F0AiFormDescription | null
  /** Set an available form as the active co-editing form */
  setActiveForm: (
    formName: string,
    cardMeta?: { cardTitle: string; cardDescription: string }
  ) => { success: boolean; error?: string }
  /** Clear the active co-editing form (e.g. after submit) */
  clearActiveForm: () => void
  /** Bump the fill-version counter for a form (called after fillForm succeeds) */
  incrementFillVersion: (formName: string) => void
  /** Get the fill-version counter for a form (0 = never filled) */
  getFillVersion: (formName: string) => number
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
  const fillVersionsRef = useRef<Map<string, number>>(new Map())

  // Three-field state replacing the old flat formDescriptions array.
  // formsOnCurrentPage: full runtime state for rendered (non-virtual) forms
  // availableForms: lightweight summaries for virtual forms
  // activeForm: full state of the form the AI is co-editing (set via setActiveForm)
  const [formsOnCurrentPage, setFormsOnCurrentPage] = useState<
    F0AiFormDescription[]
  >([])
  const [availableForms, setAvailableForms] = useState<
    F0AiAvailableFormSummary[]
  >([])
  const [activeForm, setActiveFormState] = useState<F0AiFormDescription | null>(
    null
  )
  const activeFormNameRef = useRef<string | null>(null)
  const activeFormCardMetaRef = useRef<{
    cardTitle?: string
    cardDescription?: string
  }>({})

  const rebuildDescriptions = useCallback(() => {
    // Defer to avoid setState during render — register() is called from
    // F0Form's useEffect while the form may still be completing its render.
    queueMicrotask(() => {
      const entries = Array.from(registryRef.current.entries())

      const nextFormsOnCurrentPage: F0AiFormDescription[] = []
      const nextAvailableForms: F0AiAvailableFormSummary[] = []
      let nextActiveForm: F0AiFormDescription | null = null

      for (const [name, entry] of entries) {
        const ref = entry.ref.current
        if (!ref) continue

        if (entry.virtual) {
          // Virtual entries → lightweight summary for availableForms
          nextAvailableForms.push({
            formName: name,
            ...(entry.description ? { description: entry.description } : {}),
            ...(entry.module ? { module: entry.module } : {}),
          })
        } else {
          // Rendered forms → full runtime state for formsOnCurrentPage
          nextFormsOnCurrentPage.push({
            formName: name,
            ...(entry.description ? { description: entry.description } : {}),
            ...(entry.module ? { module: entry.module } : {}),
            cardTitle: "",
            cardDescription: "",
            formSchema: zodToJsonSchema(entry.schema) as Record<
              string,
              unknown
            >,
            fieldDescriptions: extractFieldDescriptions(entry.schema),
            sectionDescriptions: extractSectionDescriptions(entry.sections),
            formValues: ref.getValues(),
            formErrors: ref.getErrors(),
            isDirty: ref.isDirty(),
            ...(entry.defaultValuesParamsSchema
              ? {
                  defaultValuesParamsSchema: zodToJsonSchema(
                    entry.defaultValuesParamsSchema
                  ) as Record<string, unknown>,
                }
              : {}),
          })
        }

        // Build activeForm regardless of virtual/non-virtual status.
        // A picked form stays active even if a rendered form takes over the entry.
        if (activeFormNameRef.current === name) {
          const cardMeta = activeFormCardMetaRef.current
          nextActiveForm = {
            formName: name,
            ...(entry.description ? { description: entry.description } : {}),
            ...(entry.module ? { module: entry.module } : {}),
            cardTitle: cardMeta.cardTitle ?? "",
            cardDescription: cardMeta.cardDescription ?? "",
            formSchema: zodToJsonSchema(entry.schema) as Record<
              string,
              unknown
            >,
            fieldDescriptions: extractFieldDescriptions(entry.schema),
            sectionDescriptions: extractSectionDescriptions(entry.sections),
            formValues: ref.getValues(),
            formErrors: ref.getErrors(),
            isDirty: ref.isDirty(),
            ...(entry.defaultValuesParamsSchema
              ? {
                  defaultValuesParamsSchema: zodToJsonSchema(
                    entry.defaultValuesParamsSchema
                  ) as Record<string, unknown>,
                }
              : {}),
          }
        }
      }

      const json = JSON.stringify({
        formsOnCurrentPage: nextFormsOnCurrentPage,
        availableForms: nextAvailableForms,
        activeForm: nextActiveForm,
      })
      if (json !== lastDescriptionsJsonRef.current) {
        lastDescriptionsJsonRef.current = json
        setFormsOnCurrentPage(nextFormsOnCurrentPage)
        setAvailableForms(nextAvailableForms)
        setActiveFormState(nextActiveForm)
      }
    })
  }, [])

  const register = useCallback(
    (
      name: string,
      ref: React.MutableRefObject<F0FormRef | null>,
      schema: F0FormSchema,
      sections?: Record<string, F0SectionConfig>,
      defaultValuesParamsSchema?: ZodType,
      defaultValuesFn?: (
        params: Record<string, unknown>
      ) => Promise<Record<string, unknown>>,
      description?: string,
      module?: ModuleId
    ) => {
      // Rendered forms always take precedence over virtual entries.
      // Preserve onSubmit from a previous virtual entry so canvas-submitted
      // forms can still call the consumer's callback.
      const existingEntry = registryRef.current.get(name)
      registryRef.current.set(name, {
        ref,
        schema,
        description,
        module,
        sections,
        defaultValuesParamsSchema,
        defaultValuesFn,
        onSubmit: existingEntry?.onSubmit,
        steps: existingEntry?.steps,
        submitConfig: existingEntry?.submitConfig,
        errorTriggerMode: existingEntry?.errorTriggerMode,
      })
      rebuildDescriptions()
    },
    [rebuildDescriptions]
  )

  const unregister = useCallback(
    (name: string) => {
      const entry = registryRef.current.get(name)
      // Only unregister if it's not a virtual entry (virtual lifecycle is managed by the effect)
      if (entry?.virtual) return
      // Capture current values before removing, so the virtual ref preserves them
      const currentValues = entry?.ref.current?.getValues() ?? {}
      registryRef.current.delete(name)
      // If there's a virtual definition with this name, re-register it
      // using the captured values so AI-filled data is not lost
      const virtualDef = availableFormDefinitions?.find((d) => d.name === name)
      if (virtualDef) {
        const originalDefaults = resolveDefaultValues(virtualDef.defaultValues)
        const mergedDefaults = { ...originalDefaults, ...currentValues }
        const { ref: virtualRef, dirtyFields } = createVirtualFormRef(
          virtualDef.schema,
          mergedDefaults,
          virtualDef.onSubmit
        )
        registryRef.current.set(name, {
          ref: virtualRef,
          schema: virtualDef.schema,
          description: virtualDef.description,
          module: virtualDef.module,
          sections: virtualDef.sections,
          virtual: true,
          defaultValuesParamsSchema: virtualDef.defaultValuesParamsSchema,
          dirtyFields,
          onSubmit: virtualDef.onSubmit,
          steps: virtualDef.steps,
          submitConfig: virtualDef.submitConfig,
          errorTriggerMode: virtualDef.errorTriggerMode,
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

  const setActiveForm = useCallback(
    (
      formName: string,
      cardMeta?: { cardTitle: string; cardDescription: string }
    ) => {
      const entry = registryRef.current.get(formName)
      if (!entry) {
        const available = Array.from(registryRef.current.keys())
        return {
          success: false,
          error: `Form "${formName}" not found. Available forms: ${available.join(", ")}`,
        }
      }
      if (!entry.virtual) {
        return {
          success: false,
          error: `Form "${formName}" is a rendered form on the current page. You can co-edit it directly without picking it as active.`,
        }
      }
      activeFormNameRef.current = formName
      activeFormCardMetaRef.current = {
        cardTitle: cardMeta?.cardTitle ?? "",
        cardDescription: cardMeta?.cardDescription ?? "",
      }
      rebuildDescriptions()
      return { success: true }
    },
    [rebuildDescriptions]
  )

  const clearActiveForm = useCallback(() => {
    activeFormNameRef.current = null
    activeFormCardMetaRef.current = { cardTitle: "", cardDescription: "" }
    rebuildDescriptions()
  }, [rebuildDescriptions])

  const incrementFillVersion = useCallback((formName: string) => {
    const current = fillVersionsRef.current.get(formName) ?? 0
    fillVersionsRef.current.set(formName, current + 1)
  }, [])

  const getFillVersion = useCallback((formName: string) => {
    return fillVersionsRef.current.get(formName) ?? 0
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

      const { ref: virtualRef, dirtyFields } = createVirtualFormRef(
        def.schema,
        resolveDefaultValues(def.defaultValues),
        def.onSubmit
      )
      registryRef.current.set(def.name, {
        ref: virtualRef,
        schema: def.schema,
        description: def.description,
        module: def.module,
        sections: def.sections,
        virtual: true,
        defaultValuesParamsSchema: def.defaultValuesParamsSchema,
        dirtyFields,
        onSubmit: def.onSubmit,
        steps: def.steps,
        submitConfig: def.submitConfig,
        errorTriggerMode: def.errorTriggerMode,
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
    formsOnCurrentPage,
    availableForms,
    activeForm,
    setActiveForm,
    clearActiveForm,
    incrementFillVersion,
    getFillVersion,
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
