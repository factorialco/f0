import { z } from 'zod';
import { DialogId, DialogModule } from '../../lib/providers/dialogs-alike';
import { F0FormDefinitionSingleSchema, F0FormSchema } from '../F0WizardForm/types';
import { F0DialogSize } from '../../components/dialog-alike/F0Dialog';
import { F0FormRenderer } from './formRendererContext';
export type OpenFormDialogResult<TSchema extends F0FormSchema> = {
    submitted: true;
    data: z.infer<TSchema>;
} | {
    submitted: false;
};
export type OpenFormDialogOptions<TSchema extends F0FormSchema> = {
    /** The form definition created with `useF0FormDefinition`. */
    formDefinition: F0FormDefinitionSingleSchema<TSchema>;
    /** The dialog title. */
    title: string;
    /** Optional supporting description below the title. */
    description?: string;
    /** The dialog size. @default "md" */
    size?: F0DialogSize;
    /** Module shown in the dialog header. */
    module?: DialogModule;
    /**
     * When true, the dialog can only be closed via its actions (no overlay click
     * or Escape) — so in-progress input isn't lost by an accidental dismissal.
     * @default true
     */
    modal?: boolean;
    /** Overlay id. Auto-generated if not provided. */
    id?: DialogId;
    /** Override the footer button labels (default to i18n save/cancel). */
    labels?: {
        submit?: string;
        cancel?: string;
    };
};
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
export declare function openFormDialog<TSchema extends F0FormSchema>(options: OpenFormDialogOptions<TSchema>, FormView: F0FormRenderer): Promise<OpenFormDialogResult<TSchema>>;
