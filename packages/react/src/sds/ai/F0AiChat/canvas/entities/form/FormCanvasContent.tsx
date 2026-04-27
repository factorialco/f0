import { useCoAgent } from "@copilotkit/react-core"
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"
import { z } from "zod"

import type { ModuleId } from "@/components/avatars/F0AvatarModule"
import type { F0FormSchema, F0FormLikeComponent } from "@/patterns/F0Form/types"
import type { F0FormDefinitionSingleSchema } from "@/patterns/F0WizardForm/types"

import { useAiChat } from "@/ai"
import { F0Button } from "@/components/F0Button"
import { CheckCircleAnimated } from "@/icons/animated"
import { useFormComponent } from "@/lib/providers/f0"
import { cn } from "@/lib/utils"
import { useF0AiFormRegistry } from "@/patterns/F0Form/F0AiFormRegistry"
import { F0Form } from "@/patterns/F0Form/F0Form"
import { useF0Form } from "@/patterns/F0Form/useF0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm/useF0FormDefinition"

function useCanvasFormComponent(): F0FormLikeComponent {
  const FormComponent = useFormComponent()
  // Bypass F0Form's distributive conditional generic — F0Form internally
  // casts to AnyF0FormProps, so this narrowed alias is safe.
  return (FormComponent ?? F0Form) as F0FormLikeComponent
}

interface CoAgentFormState {
  activeForm?: {
    formName: string
    description?: string
    module?: ModuleId
    formValues?: Record<string, unknown>
    defaultValuesParams?: Record<string, unknown>
  } | null
}

const FALLBACK_SCHEMA = z.object({}) as unknown as F0FormSchema

// ---------- Submit success overlay ----------

function SubmitSuccessOverlay() {
  return (
    <div
      data-testid="canvas-form-success"
      className="absolute inset-0 z-10 flex items-center justify-center bg-f1-background"
    >
      <div className="flex flex-col items-center gap-2">
        <CheckCircleAnimated
          animate="animate"
          className="h-8 w-8 text-f1-icon-positive"
        />
        <span className="text-base font-medium text-f1-foreground">Saved</span>
      </div>
    </div>
  )
}

// ---------- Wizard canvas content ----------

function WizardCanvasContent({
  formDefinition,
  formRef,
  isSubmitting,
  hasErrors,
  onSubmit,
}: {
  formDefinition: F0FormDefinitionSingleSchema<F0FormSchema>
  formRef: ReturnType<typeof useF0Form>["formRef"]
  isSubmitting: boolean
  hasErrors: boolean
  onSubmit: () => void
}) {
  const errorTriggerMode = formDefinition.errorTriggerMode ?? "on-blur"
  const CanvasForm = useCanvasFormComponent()

  return (
    <div className="flex h-full flex-col">
      <div className="relative min-h-0 flex-1 overflow-hidden [&>div]:h-full">
        {isSubmitting && <SubmitSuccessOverlay />}
        <CanvasForm
          formDefinition={formDefinition}
          styling={{
            showSectionsSidepanel: true,
          }}
          formRef={formRef}
        />
      </div>
      {!isSubmitting && (
        <div
          data-testid="canvas-form-footer"
          className="flex shrink-0 items-center justify-end gap-2 border-x-0 border-b-0 border-t border-solid border-f1-border-secondary bg-f1-background px-6 py-3"
        >
          <F0Button
            variant="default"
            onClick={onSubmit}
            disabled={hasErrors && errorTriggerMode !== "on-submit"}
            label={formDefinition.submitConfig?.label ?? "Submit"}
          />
        </div>
      )}
    </div>
  )
}

// ---------- Plain form content (no steps) ----------

function PlainFormContent({
  formDefinition,
  formRef,
  isSubmitting,
  hasErrors,
  onSubmit,
}: {
  formDefinition: F0FormDefinitionSingleSchema<F0FormSchema>
  formRef: ReturnType<typeof useF0Form>["formRef"]
  isSubmitting: boolean
  hasErrors: boolean
  onSubmit: () => void
}) {
  const errorTriggerMode = formDefinition.errorTriggerMode ?? "on-blur"
  const CanvasForm = useCanvasFormComponent()
  const showSectionsSidepanel = !!(
    formDefinition.sections && Object.keys(formDefinition.sections).length > 2
  )

  return (
    <div className="flex h-full flex-col">
      <div
        className={cn(
          "relative min-h-0 flex-1",
          showSectionsSidepanel
            ? "overflow-hidden [&>div]:h-full"
            : "overflow-auto p-6 pb-6"
        )}
      >
        {isSubmitting && <SubmitSuccessOverlay />}
        <CanvasForm
          formDefinition={formDefinition}
          formRef={formRef}
          styling={{ showSectionsSidepanel }}
        />
      </div>
      {!isSubmitting && (
        <div
          data-testid="canvas-form-footer"
          className="flex shrink-0 items-center justify-end gap-2 border-x-0 border-b-0 border-t border-solid border-f1-border-secondary bg-f1-background px-6 py-3"
        >
          <F0Button
            variant="default"
            onClick={onSubmit}
            disabled={hasErrors && errorTriggerMode !== "on-submit"}
            label={formDefinition.submitConfig?.label ?? "Submit"}
          />
        </div>
      )}
    </div>
  )
}

// ---------- Virtual form content (router) ----------

/**
 * Renders an interactive F0Form inside the canvas panel.
 * Reads form identity from the coagent shared state (`activeForm`)
 * and looks up the schema/entry from the form registry.
 *
 * When the form definition includes steps, renders a wizard-style
 * layout with WizardSteps sidebar, per-step form content, and
 * Previous/Next/Submit navigation.
 */
function VirtualFormContent() {
  const { formRef, hasErrors } = useF0Form()
  const { agent: agentName, closeCanvas } = useAiChat()
  const registry = useF0AiFormRegistry()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  const { state } = useCoAgent<CoAgentFormState>({
    name: agentName || "one-workflow",
  })

  const activeForm = state?.activeForm
  const formName = activeForm?.formName ?? ""
  const entry = formName ? registry?.get(formName) : undefined
  const ref = entry?.ref.current
  const currentValues = activeForm?.formValues ?? {}
  // Prefer params from the registry entry (written by useF0AiFormActions) as the
  // canonical source; fall back to coagent state for the brief window before sync.
  const defaultValuesParams =
    entry?.defaultValuesParams ?? activeForm?.defaultValuesParams

  // Keep refs so callbacks always capture the latest values without
  // changing identity (which would cause useF0FormDefinition to recompute).
  const entryRef = useRef(entry)
  entryRef.current = entry
  const defaultValuesParamsRef = useRef(defaultValuesParams)
  defaultValuesParamsRef.current = defaultValuesParams
  const currentValuesRef = useRef(currentValues)
  currentValuesRef.current = currentValues
  const registryRef = useRef(registry)
  registryRef.current = registry
  const formNameRef = useRef(formName)
  formNameRef.current = formName
  const closeCanvasRef = useRef(closeCanvas)
  closeCanvasRef.current = closeCanvas

  // Only apply values once when the canvas first opens for this form.
  // After the initial population, the rendered F0Form manages its own state and
  // AI fills go through fillForm → ref.setValues() directly.
  // Re-applying formValues continuously from coagent state would cause a loop:
  // form renders → rebuildDescriptions → coagent sync → setValues → re-render.
  const initializedFormRef = useRef("")
  useEffect(() => {
    if (!ref || !formName) return
    if (initializedFormRef.current === formName) return
    initializedFormRef.current = formName
    // If the AI has already filled values on the virtual ref (fillVersion > 0),
    // use the virtual ref values (which include AI-filled fields) rather than
    // the coagent formValues snapshot (which may still reflect original defaults).
    const valuesToApply = registry?.getFillVersion?.(formName)
      ? (entry?.ref.current?.getValues() ?? currentValues)
      : currentValues
    const existing = ref.getValues()
    if (JSON.stringify(existing) === JSON.stringify(valuesToApply)) return
    ref.setValues(valuesToApply, { shouldDirty: true, shouldValidate: false })
  }, [ref, formName, JSON.stringify(currentValues)])

  const handleSubmit = useCallback(() => {
    formRef.current?.submit().catch(() => {
      // Validation errors are displayed by the form
    })
  }, [formRef])

  const resolvedDefaultValues = useCallback(() => {
    const e = entryRef.current
    const name = formNameRef.current
    const params = defaultValuesParamsRef.current

    // If defaults were already resolved on a previous mount with the same
    // params, skip re-fetching. This prevents a slow async call when the
    // canvas closes and reopens. Reset happens on submit via resetFillVersion.
    const paramsKey = params ? JSON.stringify(params) : null
    if (
      name &&
      registryRef.current?.hasDefaultValuesEverResolved?.(name, paramsKey)
    ) {
      return Promise.resolve(
        e?.ref.current?.getValues() ?? currentValuesRef.current
      )
    }

    if (e?.defaultValuesFn && params) {
      // Capture AI-set values before async resolution — form.reset() after
      // defaults load would otherwise overwrite them.
      const virtualValues = e.ref.current?.getValues() ?? {}
      const fallbackValues = { ...virtualValues }
      const dirty = e.dirtyFields ?? new Set<string>()
      // Signal that async resolution is in progress — any concurrent
      // fillForm calls will be queued until resolution completes.
      if (name) registryRef.current?.markDefaultValuesResolving?.(name)
      return e
        .defaultValuesFn(params)
        .then((values) => {
          // Merge AI-filled fields on top of resolved defaults so
          // F0Form's reset() preserves values set by fillForm.
          const merged = { ...values }
          for (const field of dirty) {
            if (field in virtualValues) {
              merged[field] = virtualValues[field]
            }
          }
          return merged
        })
        .catch(() => fallbackValues)
        .finally(() => {
          if (name)
            registryRef.current?.markDefaultValuesResolved?.(name, paramsKey)
        })
    }
    return Promise.resolve(currentValuesRef.current)
  }, [])

  const onSubmit = useCallback(
    async ({ data }: { data: Record<string, unknown> }) => {
      setIsSubmitting(true)
      await entryRef.current?.onSubmit?.(data)
      closeTimerRef.current = setTimeout(() => {
        registryRef.current?.resetFillVersion(formNameRef.current)
        registryRef.current?.clearActiveForm()
        closeCanvasRef.current()
      }, 1500)
      return { success: true }
    },
    []
  )

  const formDefinition = useF0FormDefinition({
    name: formName || "form",
    schema: entry?.schema ?? FALLBACK_SCHEMA,
    defaultValues: resolvedDefaultValues,
    sections: entry?.sections,
    steps: entry?.steps,
    module: entry?.module,
    description: entry?.description,
    errorTriggerMode: entry?.errorTriggerMode,
    submitConfig: {
      type: "default",
      hideSubmitButton: true,
      hideActionBar: true,
      ...(entry?.submitConfig?.label && { label: entry.submitConfig.label }),
    },
    onSubmit,
  })

  if (!activeForm || !entry) return null

  if (formDefinition.steps?.length) {
    return (
      <WizardCanvasContent
        formDefinition={formDefinition}
        formRef={formRef}
        isSubmitting={isSubmitting}
        hasErrors={hasErrors}
        onSubmit={handleSubmit}
      />
    )
  }

  return (
    <PlainFormContent
      formDefinition={formDefinition}
      formRef={formRef}
      isSubmitting={isSubmitting}
      hasErrors={hasErrors}
      onSubmit={handleSubmit}
    />
  )
}

/**
 * Canvas panel content for forms.
 * Propless — reads the active form from coagent shared state
 * and delegates to VirtualFormContent for rendering.
 */
export function FormContent(): ReactNode {
  const { agent: agentName } = useAiChat()

  const { state } = useCoAgent<CoAgentFormState>({
    name: agentName || "one-workflow",
  })

  const formName = state?.activeForm?.formName

  if (!formName) return null

  return (
    <div className="mx-auto h-full">
      <VirtualFormContent />
    </div>
  )
}

FormContent.displayName = "FormContent"
