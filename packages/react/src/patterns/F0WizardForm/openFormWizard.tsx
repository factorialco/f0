import { nanoid } from "nanoid"
import { useMemo, useRef } from "react"
import { z } from "zod"

import { F0DialogSize } from "@/components/dialog-alike/F0Dialog"
import type { DialogId } from "@/lib/providers/dialogs-alike"
import {
  mountFormOverlay,
  unmountFormOverlay,
} from "@/lib/providers/form-overlays"

import { F0WizardForm as F0WizardFormComponent } from "./F0WizardForm"
import type {
  F0FormDefinition,
  F0FormDefinitionPerSection,
  F0FormDefinitionSingleSchema,
  F0FormSchema,
  F0PerSectionSchema,
  F0WizardFormSingleSchemaProps,
  F0WizardFormStep,
  InferPerSectionValues,
} from "./types"

// F0WizardForm is an overloaded generic; spreading union-typed props in JSX
// trips overload resolution. Cast to one concrete signature for the call site
// (it detects single/per-section at runtime from `formDefinition._brand`).
const WizardForm = F0WizardFormComponent as (
  props: F0WizardFormSingleSchemaProps<F0FormSchema>
) => React.ReactElement

type WizardData<T extends F0FormSchema | F0PerSectionSchema> =
  T extends F0FormSchema
    ? z.infer<T>
    : T extends F0PerSectionSchema
      ? InferPerSectionValues<T>
      : never

export type OpenFormWizardResult<T extends F0FormSchema | F0PerSectionSchema> =
  | { completed: true; data: WizardData<T> }
  | { completed: false }

export type OpenFormWizardOptions<T extends F0FormSchema | F0PerSectionSchema> =
  {
    /** The form definition created with `useF0FormDefinition`. */
    formDefinition: F0FormDefinition<T>
    /** The wizard dialog title. */
    title?: string
    /** The wizard dialog size. */
    size?: F0DialogSize
    /** Overlay id. Auto-generated if not provided. */
    id?: DialogId
    /** Custom step definitions (otherwise derived from sections). */
    steps?: F0WizardFormStep[]
    /** Step to open on. */
    defaultStepIndex?: number
    nextLabel?: string
    previousLabel?: string
    /** Allow clicking ahead to non-incomplete steps. @default false */
    allowStepSkipping?: boolean
    /** Skip to the first incomplete step on open. @default false */
    autoSkipCompletedSteps?: boolean
    onStepChanged?: (stepIndex: number) => void
  }

// Shallow-clone the definition with a wrapped onSubmit that reports the latest
// full values on every successful step submit — WITHOUT mutating the caller's
// definition. `capture` records data + marks a (possibly final) completion.
function wrapWizardDefinition<T extends F0FormSchema | F0PerSectionSchema>(
  formDefinition: F0FormDefinition<T>,
  capture: (data: WizardData<T>) => void
): F0FormDefinition<T> {
  if (formDefinition._brand === "per-section") {
    const def = formDefinition as F0FormDefinitionPerSection<F0PerSectionSchema>
    const wrapped: F0FormDefinitionPerSection<F0PerSectionSchema> = {
      ...def,
      onSubmit: async (arg) => {
        const result = await def.onSubmit(arg)
        if (result.success) capture(arg.fullData as WizardData<T>)
        return result
      },
    }
    return wrapped as F0FormDefinition<T>
  }

  const def = formDefinition as F0FormDefinitionSingleSchema<F0FormSchema>
  const wrapped: F0FormDefinitionSingleSchema<F0FormSchema> = {
    ...def,
    onSubmit: async (arg) => {
      const result = await def.onSubmit(arg)
      if (result.success) capture(arg.data as WizardData<T>)
      return result
    },
  }
  return wrapped as F0FormDefinition<T>
}

type WizardOverlayProps<T extends F0FormSchema | F0PerSectionSchema> = {
  options: OpenFormWizardOptions<T>
  isOpen: boolean
  onResolve: (result: OpenFormWizardResult<T>) => void
}

function WizardOverlay<T extends F0FormSchema | F0PerSectionSchema>({
  options,
  isOpen,
  onResolve,
}: WizardOverlayProps<T>) {
  const { formDefinition, onStepChanged, ...wizardProps } = options

  // `completed` flips true on each successful submit and is reset whenever the
  // wizard advances to another step (so only the LAST step's success — which
  // does not advance — survives until close). Since `autoCloseOnLastStepSubmit`
  // is forced on, a self-close means the final step succeeded.
  const completedRef = useRef(false)
  const dataRef = useRef<WizardData<T> | undefined>(undefined)

  const wrapped = useMemo(
    () =>
      wrapWizardDefinition<T>(formDefinition, (data) => {
        completedRef.current = true
        dataRef.current = data
      }),
    [formDefinition]
  )

  const handleStepChanged = (stepIndex: number) => {
    completedRef.current = false
    onStepChanged?.(stepIndex)
  }

  const handleClose = () => {
    if (completedRef.current && dataRef.current !== undefined) {
      onResolve({ completed: true, data: dataRef.current })
    } else {
      onResolve({ completed: false })
    }
  }

  const props = {
    ...wizardProps,
    formDefinition: wrapped,
    isOpen,
    onClose: handleClose,
    onStepChanged: handleStepChanged,
    autoCloseOnLastStepSubmit: true,
  } as unknown as F0WizardFormSingleSchemaProps<F0FormSchema>

  return <WizardForm {...props} />
}

/**
 * Open an `F0WizardForm` (multi-step form) imperatively and await the outcome.
 *
 * Resolves with `{ completed: true, data }` once the final step submits
 * successfully (the wizard auto-closes), or `{ completed: false }` if the user
 * dismisses it or it is closed programmatically. Requires `<F0Provider>` to be
 * mounted.
 *
 * Note: if the underlying definition navigates away via `linkAfterLastStepSubmit`,
 * the page changes and this promise will not resolve.
 *
 * @example
 * const result = await forms.open({ formDefinition, mode: "wizard", title: "Onboarding" })
 * if (result.completed) save(result.data)
 */
export function openFormWizard<T extends F0FormSchema | F0PerSectionSchema>(
  options: OpenFormWizardOptions<T>
): Promise<OpenFormWizardResult<T>> {
  return new Promise((resolve) => {
    const id = options.id ?? nanoid()
    let settled = false
    const finish = (result: OpenFormWizardResult<T>) => {
      if (settled) return
      settled = true
      resolve(result)
      unmountFormOverlay(id)
    }

    mountFormOverlay({
      id,
      onDismiss: () => finish({ completed: false }),
      render: ({ isOpen }) => (
        <WizardOverlay options={options} isOpen={isOpen} onResolve={finish} />
      ),
    })
  })
}
