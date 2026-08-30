import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { F0SwitchField } from './types';
import { ResolvedField } from '../types';
interface SwitchFieldRendererProps {
    field: ResolvedField<F0SwitchField>;
    formField: ControllerRenderProps<FieldValues>;
}
/**
 * Renders a switch toggle field
 */
export declare function SwitchFieldRenderer({ field, formField, }: SwitchFieldRendererProps): import("react").JSX.Element;
export {};
