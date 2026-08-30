import { F0ActionBarRef } from '../../components/F0ActionBar';
/**
 * Callback to update form state in the hook
 */
export type F0FormStateCallback = (state: {
    isSubmitting: boolean;
    hasErrors: boolean;
}) => void;
/**
 * Options for setValue
 */
export interface F0FormSetValueOptions {
    shouldValidate?: boolean;
    shouldDirty?: boolean;
}
/**
 * Interface for the F0Form ref methods
 */
export interface F0FormRef {
    /**
     * Programmatically submit the form.
     * Will only call onSubmit if validation passes.
     * @returns Promise that resolves when submission completes (or rejects on validation failure)
     */
    submit: () => Promise<void>;
    /**
     * Reset the form to its default values
     */
    reset: () => void;
    /**
     * Check if the form has unsaved changes
     */
    isDirty: () => boolean;
    /**
     * Get the current form values (including unsaved changes)
     */
    getValues: () => Record<string, unknown>;
    /**
     * Set a single field value programmatically
     */
    setValue: (fieldName: string, value: unknown, options?: F0FormSetValueOptions) => void;
    /**
     * Set multiple field values at once
     */
    setValues: (values: Record<string, unknown>, options?: F0FormSetValueOptions) => void;
    /**
     * Manually trigger validation for a specific field or all fields
     * @returns true if validation passes
     */
    trigger: (fieldName?: string) => Promise<boolean>;
    /**
     * Get current validation errors as a map of field name to error message
     */
    getErrors: () => Record<string, string>;
    /**
     * Get the list of field names in the form
     */
    getFieldNames: () => string[];
    /**
     * Access the action bar imperatively (e.g. to trigger a wiggle animation)
     */
    actionBar: F0ActionBarRef;
    /**
     * Internal: Set the state callback for reactive updates
     * @internal
     */
    _setStateCallback: (callback: F0FormStateCallback) => void;
}
/**
 * Return type for the useF0Form hook
 */
export interface UseF0FormReturn {
    /**
     * Ref to pass to the F0Form component's `formRef` prop
     */
    formRef: React.MutableRefObject<F0FormRef | null>;
    /**
     * Programmatically submit the form.
     * Will only trigger onSubmit if all validations pass.
     * @returns Promise that resolves when submission completes
     */
    submit: () => Promise<void>;
    /**
     * Reset the form to its default values
     */
    reset: () => void;
    /**
     * Check if the form has unsaved changes
     */
    isDirty: () => boolean;
    /**
     * Get the current form values (including unsaved changes)
     */
    getValues: () => Record<string, unknown>;
    /**
     * Set a single field value programmatically
     */
    setValue: (fieldName: string, value: unknown, options?: F0FormSetValueOptions) => void;
    /**
     * Set multiple field values at once
     */
    setValues: (values: Record<string, unknown>, options?: F0FormSetValueOptions) => void;
    /**
     * Manually trigger validation for a specific field or all fields
     * @returns true if validation passes
     */
    trigger: (fieldName?: string) => Promise<boolean>;
    /**
     * Get current validation errors as a map of field name to error message
     */
    getErrors: () => Record<string, string>;
    /**
     * Get the list of field names in the form
     */
    getFieldNames: () => string[];
    /**
     * Whether the form is currently submitting
     */
    isSubmitting: boolean;
    /**
     * Whether the form has validation errors
     */
    hasErrors: boolean;
}
/**
 * Hook to control F0Form programmatically.
 *
 * Useful when you need to submit the form from outside the component,
 * such as when the form is inside a dialog and the submit button is
 * in the dialog's footer.
 *
 * @example
 * ```tsx
 * import { useF0Form, F0Form } from "@factorialco/factorial-one/experimental"
 *
 * function FormInDialog() {
 *   const { formRef, submit } = useF0Form()
 *   const [open, setOpen] = useState(false)
 *
 *   return (
 *     <Dialog open={open} onOpenChange={setOpen}>
 *       <DialogContent>
 *         <F0Form
 *           formRef={formRef}
 *           name="my-form"
 *           schema={schema}
 *           defaultValues={defaultValues}
 *           onSubmit={async (data) => {
 *             // Handle submission
 *             setOpen(false)
 *             return { success: true }
 *           }}
 *         />
 *         <DialogFooter>
 *           <Button onClick={() => setOpen(false)}>Cancel</Button>
 *           <Button onClick={submit}>Save</Button>
 *         </DialogFooter>
 *       </DialogContent>
 *     </Dialog>
 *   )
 * }
 * ```
 */
export declare function useF0Form(): UseF0FormReturn;
