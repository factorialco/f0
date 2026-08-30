import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { InputFieldStatus } from '../../../../components/F0InputField/types';
import { ResolvedField } from '../types';
import { F0SelectField } from './types';
interface SelectFieldRendererProps {
    field: ResolvedField<F0SelectField>;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    loading?: boolean;
    status?: InputFieldStatus;
}
/**
 * Renders a select dropdown field
 * Supports both static options and dynamic data sources
 */
export declare function SelectFieldRenderer(props: SelectFieldRendererProps): import("react").JSX.Element | null;
export {};
