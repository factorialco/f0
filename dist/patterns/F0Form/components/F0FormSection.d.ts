import { default as React } from 'react';
import { z } from 'zod';
import { F0FormErrorTriggerMode, F0FormSchema, F0FormSubmitResult, F0PerSectionSectionConfig, F0PerSectionSubmitConfig, RenderCustomFieldFunction } from '../types';
import { F0FormRef } from '../useF0Form';
interface F0FormSectionProps<TSchema extends F0FormSchema> {
    formName: string;
    sectionId: string;
    schema: TSchema;
    sectionConfig?: F0PerSectionSectionConfig;
    defaultValues?: Partial<z.infer<TSchema>>;
    onSubmit: (data: z.infer<TSchema>) => Promise<F0FormSubmitResult> | F0FormSubmitResult;
    submitConfig?: F0PerSectionSubmitConfig;
    errorTriggerMode: F0FormErrorTriggerMode;
    className?: string;
    initialFiles?: import('../fields/file/types').InitialFile[];
    /** Whether async initialFiles are still being resolved */
    isLoadingInitialFiles?: boolean;
    formRef?: React.MutableRefObject<F0FormRef | null>;
    renderCustomField?: RenderCustomFieldFunction;
    /** Upload hook shared by all file fields */
    useUpload?: import('../fields/file/types').UseFileUpload;
    /** Whether async defaultValues are still being resolved */
    isLoading?: boolean;
}
/**
 * Renders a single section as an independent form with its own
 * react-hook-form instance, validation, and submit button.
 */
export declare function F0FormSection<TSchema extends F0FormSchema>({ formName, sectionId, schema, sectionConfig, defaultValues, onSubmit, submitConfig, errorTriggerMode, className, initialFiles, isLoadingInitialFiles, formRef, renderCustomField, useUpload, isLoading: isFormLoading, }: F0FormSectionProps<TSchema>): React.JSX.Element;
export {};
