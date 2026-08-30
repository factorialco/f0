import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { InputFieldStatus } from '../../../../components/F0InputField/types';
import { ResolvedPeriodField } from './types';
interface PeriodFieldRendererProps {
    field: ResolvedPeriodField;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    loading?: boolean;
    status?: InputFieldStatus;
}
/**
 * Renders a period picker field.
 *
 * Unlike the `date` field — which collapses the picker value to a single `Date`
 * and re-displays it with the first granularity — this renderer reads and writes
 * the full `DatePickerValue` (`{ value: { from, to }, granularity }`). This keeps
 * the chosen granularity and range intact, so the field behaves as a real period
 * selector.
 */
export declare function PeriodFieldRenderer({ field, formField, error, loading, status, }: PeriodFieldRendererProps): import("react").JSX.Element;
export {};
