import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { AriaAttributes } from 'react';
import { InputFieldStatus } from '../../../../components/F0InputField/types';
import { F0DurationField } from './types';
import { ResolvedField } from '../types';
interface DurationFieldRendererProps {
    field: ResolvedField<F0DurationField>;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    status?: InputFieldStatus;
    id?: string;
    "aria-describedby"?: string;
    "aria-invalid"?: AriaAttributes["aria-invalid"];
}
export declare function DurationFieldRenderer({ field, formField, error, status, id, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, }: DurationFieldRendererProps): import("react").JSX.Element;
export {};
