import { ReactNode } from 'react';
import { DetailsItemContent } from '../../../../experimental/Lists/DetailsItem';
export interface FormCardValueFormatterEntry<T = unknown> {
    /** Scope to a specific form. Omit to apply to all forms. */
    formName?: string;
    /** Scope to a specific custom field name. Omit to apply to all fields. */
    customFieldName?: string;
    /** Format function. Return `undefined` to fall back to built-in formatting. */
    format: (value: T, meta: {
        key: string;
        fieldType?: string;
        customFieldName?: string;
    }) => DetailsItemContent | DetailsItemContent[] | undefined;
}
type SetFormCardValueFormatter = <T = unknown>(entry: FormCardValueFormatterEntry<T>) => void;
export declare function FormCardValueFormatterProvider({ children, }: {
    children: ReactNode;
}): import("react").JSX.Element;
/**
 * Returns a resolved formatter for the given `formName`.
 * Matches registered formatters by specificity:
 *   formName + customFieldName > formName only > customFieldName only > global
 * Returns `null` when no provider is present or no formatters are registered.
 */
export declare function useFormCardValueFormatter(formName: string): ((key: string, value: unknown, meta: {
    fieldType?: string;
    customFieldName?: string;
}) => DetailsItemContent | DetailsItemContent[] | undefined) | null;
/**
 * Returns a setter to register value formatters used by FormCard.
 *
 * ```ts
 * const setFormatter = useSetFormCardValueFormatter()
 *
 * // Global formatter (all forms, all fields)
 * setFormatter({ format: (value) => ({ type: "item", text: String(value) }) })
 *
 * // Scoped to a form
 * setFormatter({ formName: "create-task", format: (value) => ... })
 *
 * // Scoped to a custom field name (across all forms)
 * setFormatter({ customFieldName: "assignees_selector", format: (value) => ... })
 *
 * // Scoped to both
 * setFormatter({ formName: "create-task", customFieldName: "assignees_selector", format: (value) => ... })
 * ```
 */
export declare function useSetFormCardValueFormatter(): SetFormCardValueFormatter;
export {};
