import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { InputFieldStatus } from '../../../../components/F0InputField/types';
import { F0DateRangeField } from './types';
import { ResolvedField } from '../types';
interface DateRangeFieldRendererProps {
    field: ResolvedField<F0DateRangeField>;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    loading?: boolean;
    status?: InputFieldStatus;
}
/**
 * Renders a date range picker field.
 * Handles conversion between DateRangeValue (used by Zod schema) and DatePickerValue (used by F0DatePicker).
 */
export declare function DateRangeFieldRenderer({ field, formField, error, loading, status, }: DateRangeFieldRendererProps): import("react").JSX.Element;
export {};
