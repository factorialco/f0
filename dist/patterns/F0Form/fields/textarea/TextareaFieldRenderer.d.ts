import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { InputFieldStatus } from '../../../../components/F0InputField/types';
import { ResolvedField } from '../types';
import { F0TextareaField } from './types';
interface TextareaFieldRendererProps {
    field: ResolvedField<F0TextareaField>;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    loading?: boolean;
    status?: InputFieldStatus;
}
/**
 * Renders a textarea field
 */
export declare function TextareaFieldRenderer({ field, formField, error, loading, status, }: TextareaFieldRendererProps): import("react").JSX.Element;
export {};
