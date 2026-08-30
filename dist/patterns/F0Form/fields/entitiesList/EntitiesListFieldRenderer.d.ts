import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { ResolvedField } from '../types';
import { F0EntitiesListField } from './types';
interface EntitiesListFieldRendererProps {
    field: ResolvedField<F0EntitiesListField>;
    formField: ControllerRenderProps<FieldValues>;
    /**
     * The react-hook-form error for this field. Typed loosely because array
     * errors are index-keyed with an optional array-level `root`, which does not
     * match the flat `FieldError` shape.
     */
    error?: unknown;
}
/**
 * Renders a sortable, editable table for an array of objects whose shape is
 * defined by the field's item schema. Columns and cell types are derived from
 * the schema (`string` → text, `number` → number, `enum` → select).
 *
 * With up to {@link MAX_INLINE_FIELDS} schema properties, rows are edited
 * inline; with more, adding and editing happen through a form dialog (the
 * FormInDialog pattern) and rows show a pencil action. `editableIds`
 * restricts which items can be edited in either mode.
 */
export declare function EntitiesListFieldRenderer({ field, formField, error: rawError, }: EntitiesListFieldRendererProps): import("react").JSX.Element;
export {};
