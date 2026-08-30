import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { InputFieldStatus } from '../../../../components/F0InputField/types';
import { ResolvedDateField } from './types';
interface DateFieldRendererProps {
    field: ResolvedDateField;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    loading?: boolean;
    status?: InputFieldStatus;
}
/**
 * Renders a date picker field.
 * Handles conversion between Date (used by Zod schema) and DatePickerValue (used by F0DatePicker).
 */
export declare function DateFieldRenderer({ field, formField, error, loading, status, }: DateFieldRendererProps): import("react").JSX.Element;
export {};
