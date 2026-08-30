import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { InputFieldStatus } from '../../../../components/F0InputField/types';
import { F0TextField } from './types';
import { ResolvedField } from '../types';
interface TextFieldRendererProps {
    field: ResolvedField<F0TextField>;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    loading?: boolean;
    status?: InputFieldStatus;
}
/**
 * Renders a text input field
 */
export declare function TextFieldRenderer({ field, formField, error, loading, status, }: TextFieldRendererProps): import("react").JSX.Element;
export {};
