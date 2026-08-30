import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { ResolvedField } from '../types';
import { F0CustomField } from './types';
interface CustomFieldRendererProps {
    field: ResolvedField<F0CustomField>;
    formField: ControllerRenderProps<FieldValues>;
    error?: string;
    isValidating: boolean;
    required?: boolean;
}
/**
 * Renders a custom field by calling the user-provided render function
 * with the appropriate props for react-hook-form integration.
 *
 * When `customFieldName` is set on the field, delegates to the form-level
 * `renderCustomField` callback instead of the inline `render` function.
 */
export declare function CustomFieldRenderer({ field, formField, error, isValidating, required, }: CustomFieldRendererProps): import("react").JSX.Element;
export {};
