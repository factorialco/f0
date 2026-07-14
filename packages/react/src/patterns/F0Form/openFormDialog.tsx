import { nanoid } from "nanoid"
import { useMemo, useRef } from "react"
import { z } from "zod"

import { F0Dialog, F0DialogSize } from "@/components/dialog-alike/F0Dialog"
import { useI18n } from "@/lib/providers/i18n"
import {
  mountFormOverlay,
  unmountFormOverlay,
} from "@/lib/providers/form-overlays"
import type { DialogId, DialogModule } from "@/lib/providers/dialogs-alike"
import type {
  F0FormDefinitionSingleSchema,
  F0FormSchema,
} from "@/patterns/F0WizardForm/types"

import { F0Form } from "./F0Form"
import type { F0FormPropsWithSingleSchemaDefinition } from "./types"
import { useF0Form } from "./useF0Form"

// F0Form is an overloaded generic; spreading generic props in JSX trips overload
// resolution. Cast to the concrete definition-props signature for the call site.
const FormView = F0Form as (
  props: F0FormPropsWithSingleSchemaDefinition<F0FormSchema>
) => React.ReactElement

export type OpenFormDialogResult<TSchema extends F0FormSchema> =
  | { submitted: true; data: z.infer<TSchema> }
  | { submitted: false }

export type OpenFormDialogOptions<TSchema extends F0FormSchema> = {
  /** The form definition created with `useF0FormDefinition`. */
  formDefinition: F0FormDefinitionSingleSchema<TSchema>
  /** The dialog title. */
  title: string
  /** Optional supporting description below the title. */
  description?: string
  /** The dialog size. @default "md" */
  size?: F0DialogSize
  /** Module shown in the dialog header. */
  module?: DialogModule
  /**
   * When true, the dialog can only be closed via its actions (no overlay click
   * or Escape) — so in-progress input isn't lost by an accidental dismissal.
   * @default true
   */
  modal?: boolean
  /** Overlay id. Auto-generated if not provided. */
  id?: DialogId
  /** Override the footer button labels (default to i18n save/cancel). */
  labels?: {
    submit?: string
    cancel?: string
  }
}

type FormDialogContentProps<TSchema extends F0FormSchema> = {
  options: OpenFormDialogOptions<TSchema>
  isOpen: boolean
  onSubmitted: (data: z.infer<TSchema>) => void
  onCancel: () => void
}

/**
 * Renders an `F0Form` inside a `dialog-alike` `F0Dialog`, wiring the dialog's
 * footer submit/cancel to the form. This is the proven `useF0Form` + `F0Dialog`
 * pattern, packaged so `openFormDialog` can mount it imperatively.
 */
function FormDialogContent<TSchema extends F0FormSchema>({
  options,
  isOpen,
  onSubmitted,
  onCancel,
}: FormDialogContentProps<TSchema>) {
  const { actions } = useI18n()
  const {
    formDefinition,
    title,
    description,
    size,
    module,
    modal = true,
    labels,
  } = options
  const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

  // The dialog footer owns submit, so hide the form's own button. We also
  // capture the submitted data on success WITHOUT mutating the caller's
  // definition — shallow-clone with a wrapped onSubmit instead.
  const submittedDataRef = useRef<z.infer<TSchema> | undefined>(undefined)
  const dialogDefinition = useMemo<F0FormDefinitionSingleSchema<TSchema>>(
    () => ({
      ...formDefinition,
      submitConfig: { ...formDefinition.submitConfig, hideSubmitButton: true },
      onSubmit: async (arg) => {
        const result = await formDefinition.onSubmit(arg)
        if (result.success) submittedDataRef.current = arg.data
        return result
      },
    }),
    [formDefinition]
  )

  const handleSubmit = async () => {
    submittedDataRef.current = undefined
    try {
      // Rejects on validation failure — the dialog stays open with inline
      // errors. Only a successful submit advances past this point.
      await submit()
    } catch {
      return
    }
    if (submittedDataRef.current !== undefined) {
      onSubmitted(submittedDataRef.current)
    }
  }

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onCancel}
      title={title}
      description={description}
      size={size}
      module={module}
      modal={modal}
      primaryAction={{
        label: labels?.submit ?? actions.save,
        onClick: handleSubmit,
        loading: isSubmitting,
        disabled: hasErrors,
      }}
      secondaryAction={{
        label: labels?.cancel ?? actions.cancel,
        onClick: onCancel,
      }}
      disableContentPadding
    >
      <FormView
        formDefinition={
          dialogDefinition as unknown as F0FormDefinitionSingleSchema<F0FormSchema>
        }
        formRef={formRef}
      />
    </F0Dialog>
  )
}

/**
 * Open an `F0Form` in a dialog imperatively and await the outcome.
 *
 * Resolves with `{ submitted: true, data }` once the form submits successfully
 * (the dialog closes automatically), or `{ submitted: false }` if the user
 * cancels, dismisses, or it is closed programmatically. Validation failures keep
 * the dialog open with inline errors. Requires `<F0Provider>` to be mounted.
 *
 * @example
 * const result = await forms.open({ formDefinition, mode: "dialog", title: "Add member" })
 * if (result.submitted) save(result.data)
 */
export function openFormDialog<TSchema extends F0FormSchema>(
  options: OpenFormDialogOptions<TSchema>
): Promise<OpenFormDialogResult<TSchema>> {
  return new Promise((resolve) => {
    const id = options.id ?? nanoid()
    let settled = false
    const finish = (result: OpenFormDialogResult<TSchema>) => {
      if (settled) return
      settled = true
      resolve(result)
      unmountFormOverlay(id)
    }

    mountFormOverlay({
      id,
      onDismiss: () => finish({ submitted: false }),
      render: ({ isOpen }) => (
        <FormDialogContent
          options={options}
          isOpen={isOpen}
          onSubmitted={(data) => finish({ submitted: true, data })}
          onCancel={() => finish({ submitted: false })}
        />
      ),
    })
  })
}
