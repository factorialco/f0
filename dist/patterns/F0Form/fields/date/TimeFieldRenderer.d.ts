import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { InputFieldStatus } from '../../../../components/F0InputField/types';
import { ResolvedTimeField } from './types';
export interface TimeFieldRendererProps {
    field: ResolvedTimeField;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    loading?: boolean;
    status?: InputFieldStatus;
}
/**
 * Renders a time input field.
 *
 * When the app sets a global `hourCycle` (via `F0Provider`), the field is
 * rendered/parsed in that hour cycle (12h with AM/PM or 24h) so apps can honor
 * a user's preference instead of the browser locale. Otherwise it falls back to
 * the native HTML time input (unchanged default behavior).
 *
 * The value is stored as a Date object in both modes.
 */
export declare function TimeFieldRenderer(props: TimeFieldRendererProps): import("react").JSX.Element;
