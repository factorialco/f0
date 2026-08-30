import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { ResolvedField } from '../types';
import { F0RichTextField } from './types';
interface RichTextFieldRendererProps {
    field: ResolvedField<F0RichTextField>;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    loading?: boolean;
}
/**
 * Renders a rich text editor field
 */
export declare function RichTextFieldRenderer({ field, formField, error, loading, }: RichTextFieldRendererProps): import("react").JSX.Element;
export {};
