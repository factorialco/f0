import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { InputFieldStatus } from '../../../../components/F0InputField/types';
import { ResolvedField } from '../types';
import { F0PhoneField } from './types';
interface PhoneFieldRendererProps {
    field: ResolvedField<F0PhoneField>;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    loading?: boolean;
    status?: InputFieldStatus;
}
/**
 * Renders a phone input field
 */
export declare function PhoneFieldRenderer({ field, formField, error, loading, status, }: PhoneFieldRendererProps): import("react").JSX.Element;
export {};
