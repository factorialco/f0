import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { InputFieldStatus } from '../../../../components/F0InputField/types';
import { ResolvedField } from '../types';
import { F0NumberField } from './types';
interface NumberFieldRendererProps {
    field: ResolvedField<F0NumberField>;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    loading?: boolean;
    status?: InputFieldStatus;
}
/**
 * Renders a number input field
 */
export declare function NumberFieldRenderer({ field, formField, error, loading, status, }: NumberFieldRendererProps): import("react").JSX.Element;
export {};
