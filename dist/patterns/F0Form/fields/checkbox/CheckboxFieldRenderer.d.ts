import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { F0CheckboxField } from './types';
import { ResolvedField } from '../types';
interface CheckboxFieldRendererProps {
    field: ResolvedField<F0CheckboxField>;
    formField: ControllerRenderProps<FieldValues>;
}
/**
 * Renders a checkbox field
 */
export declare function CheckboxFieldRenderer({ field, formField, }: CheckboxFieldRendererProps): import("react").JSX.Element;
export {};
