export type PresetFormValues = {
    title: string;
    description?: string;
};
interface PresetFormDialogProps {
    isOpen: boolean;
    /** "create" → "Save view"; "update" → edit an existing custom view. */
    mode: "create" | "update";
    /** Seed values when updating an existing view. */
    initialValues?: PresetFormValues;
    onClose: () => void;
    /** Called with the validated form values when the user saves. */
    onSubmit: (values: PresetFormValues) => void;
    /**
     * Called when the user removes the view. Only shown in "update" mode, as a
     * critical action in the dialog's overflow ("extra actions") menu.
     */
    onDelete?: () => void;
    /**
     * Called when the user shares the view (copies a shareable link to the
     * clipboard). Only shown in "update" mode, in the overflow menu.
     */
    onShare?: () => void;
    /**
     * Names of existing views to validate the title against (case-insensitive) —
     * saving a duplicate name raises an inline error. The view being edited should
     * be excluded by the caller so renaming it to itself is allowed.
     */
    existingNames?: string[];
}
/**
 * Dialog wrapping an F0Form (title + optional description), reused for both
 * creating a new custom view and renaming an existing one. The captured view
 * state (filters/sorting/view/grouping/columns) is owned by OneDataCollection;
 * this dialog only collects the title and description.
 */
export declare function PresetFormDialog({ isOpen, mode, initialValues, onClose, onSubmit, onDelete, onShare, existingNames, }: PresetFormDialogProps): import("react").JSX.Element;
export {};
