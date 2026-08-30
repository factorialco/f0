import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { InputFieldStatusType } from '../../../../components/F0InputField/types';
import { ResolvedField } from '../types';
import { F0FileField, InitialFile } from './types';
interface FileFieldRendererProps {
    field: ResolvedField<F0FileField>;
    formField: ControllerRenderProps<FieldValues>;
    error?: boolean;
    statusType?: InputFieldStatusType;
    initialFiles?: InitialFile[];
}
export declare function FileFieldRenderer({ field, formField, error, statusType, initialFiles, }: FileFieldRendererProps): import("react").JSX.Element;
export {};
