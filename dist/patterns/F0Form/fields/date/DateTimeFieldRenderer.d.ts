import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { InputFieldStatus } from '../../../../components/F0InputField/types';
import { ResolvedDateTimeField } from './types';
interface DateTimeFieldRendererProps {
    field: ResolvedDateTimeField;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    loading?: boolean;
    status?: InputFieldStatus;
}
/**
 * Renders a datetime field as two inputs: a date picker and a time input.
 * Composes DateFieldRenderer and TimeFieldRenderer for maximum reuse.
 */
export declare function DateTimeFieldRenderer({ field, formField, error, loading, status, }: DateTimeFieldRendererProps): import("react").JSX.Element;
export {};
