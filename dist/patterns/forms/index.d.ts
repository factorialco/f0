import { OpenFormDialogOptions, OpenFormDialogResult } from '../F0Form/openFormDialog';
import { OpenFormWizardOptions, OpenFormWizardResult } from '../F0WizardForm/openFormWizard';
import { F0FormSchema, F0PerSectionSchema } from '../F0WizardForm/types';
/** Open a form in a dialog. */
declare function openForm<TSchema extends F0FormSchema>(options: {
    mode: "dialog";
} & OpenFormDialogOptions<TSchema>): Promise<OpenFormDialogResult<TSchema>>;
/** Open a form in a multi-step wizard. */
declare function openForm<T extends F0FormSchema | F0PerSectionSchema>(options: {
    mode: "wizard";
} & OpenFormWizardOptions<T>): Promise<OpenFormWizardResult<T>>;
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
export declare const forms: {
    open: typeof openForm;
};
export {};
