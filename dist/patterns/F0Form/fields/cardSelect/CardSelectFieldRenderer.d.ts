import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { F0CardSelectField } from './types';
interface CardSelectFieldRendererProps {
    field: F0CardSelectField & {
        disabled: boolean;
    };
    formField: ControllerRenderProps<FieldValues>;
}
export declare function CardSelectFieldRenderer({ field, formField, }: CardSelectFieldRendererProps): import("react").JSX.Element;
export {};
