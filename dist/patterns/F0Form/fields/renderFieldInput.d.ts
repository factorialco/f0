import { ControllerRenderProps, FieldError, FieldValues } from 'react-hook-form';
import { InputFieldStatus } from '../../../components/F0InputField/types';
import { InitialFile } from './file/types';
import { F0Field } from './types';
export interface FieldState {
    error?: FieldError;
    isValidating: boolean;
}
export interface RenderFieldInputOptions {
    field: F0Field;
    formField: ControllerRenderProps<FieldValues>;
    fieldState: FieldState;
    fieldStatus?: InputFieldStatus;
    isSubmitting: boolean;
    isRequired?: boolean;
    values: Record<string, unknown>;
    initialFiles?: InitialFile[];
    /** Whether the form is loading async defaultValues */
    isFormLoading?: boolean;
}
/**
 * Renders the appropriate input component based on field type.
 */
export declare function renderFieldInput({ field, formField, fieldState, fieldStatus, isSubmitting, isRequired, values, initialFiles, isFormLoading, }: RenderFieldInputOptions): React.ReactNode;
