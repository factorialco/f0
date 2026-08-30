import { z } from 'zod';
import { F0DialogSize } from '../../components/dialog-alike/F0Dialog';
import { DialogId } from '../../lib/providers/dialogs-alike';
import { F0FormDefinition, F0FormSchema, F0PerSectionSchema, F0WizardFormStep, InferPerSectionValues } from './types';
type WizardData<T extends F0FormSchema | F0PerSectionSchema> = T extends F0FormSchema ? z.infer<T> : T extends F0PerSectionSchema ? InferPerSectionValues<T> : never;
export type OpenFormWizardResult<T extends F0FormSchema | F0PerSectionSchema> = {
    completed: true;
    data: WizardData<T>;
} | {
    completed: false;
};
export type OpenFormWizardOptions<T extends F0FormSchema | F0PerSectionSchema> = {
    /** The form definition created with `useF0FormDefinition`. */
    formDefinition: F0FormDefinition<T>;
    /** The wizard dialog title. */
    title?: string;
    /** The wizard dialog size. */
    size?: F0DialogSize;
    /** Overlay id. Auto-generated if not provided. */
    id?: DialogId;
    /** Custom step definitions (otherwise derived from sections). */
    steps?: F0WizardFormStep[];
    /** Step to open on. */
    defaultStepIndex?: number;
    nextLabel?: string;
    previousLabel?: string;
    /** Allow clicking ahead to non-incomplete steps. @default false */
    allowStepSkipping?: boolean;
    /** Skip to the first incomplete step on open. @default false */
    autoSkipCompletedSteps?: boolean;
    onStepChanged?: (stepIndex: number) => void;
};
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
export declare function openFormWizard<T extends F0FormSchema | F0PerSectionSchema>(options: OpenFormWizardOptions<T>): Promise<OpenFormWizardResult<T>>;
export {};
