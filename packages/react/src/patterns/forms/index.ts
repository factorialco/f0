import { openFormDialog } from "@/patterns/F0Form/openFormDialog"
import type {
  OpenFormDialogOptions,
  OpenFormDialogResult,
} from "@/patterns/F0Form/openFormDialog"
import { openFormWizard } from "@/patterns/F0WizardForm/openFormWizard"
import type {
  OpenFormWizardOptions,
  OpenFormWizardResult,
} from "@/patterns/F0WizardForm/openFormWizard"
import type {
  F0FormSchema,
  F0PerSectionSchema,
} from "@/patterns/F0WizardForm/types"

/** Open a form in a dialog. */
function openForm<TSchema extends F0FormSchema>(
  options: { mode: "dialog" } & OpenFormDialogOptions<TSchema>
): Promise<OpenFormDialogResult<TSchema>>
/** Open a form in a multi-step wizard. */
function openForm<T extends F0FormSchema | F0PerSectionSchema>(
  options: { mode: "wizard" } & OpenFormWizardOptions<T>
): Promise<OpenFormWizardResult<T>>
function openForm(
  options: { mode: "dialog" | "wizard" } & Record<string, unknown>
): Promise<unknown> {
  const { mode, ...rest } = options
  if (mode === "wizard") {
    return openFormWizard(rest as OpenFormWizardOptions<F0FormSchema>)
  }
  return openFormDialog(rest as OpenFormDialogOptions<F0FormSchema>)
}

/**
 * Imperative API for opening forms. Pick the presentation with `mode` —
 * `"dialog"` for a single-screen form, `"wizard"` for a multi-step form.
 * Requires `<F0Provider>` to be mounted.
 *
 * @example
 * const result = await forms.open({ formDefinition, mode: "dialog", title: "Add member" })
 * if (result.submitted) save(result.data)
 *
 * @example
 * const result = await forms.open({ formDefinition, mode: "wizard", title: "Onboarding" })
 * if (result.completed) save(result.data)
 */
export const forms = { open: openForm }

// The option/result types stay public through `@/patterns/F0Form` and
// `@/patterns/F0WizardForm`; re-exporting them here too would make the
// `export *` barrels ambiguous, so they are intentionally not re-exported.
