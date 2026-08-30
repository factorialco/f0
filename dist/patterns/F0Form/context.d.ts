import { InitialFile, UseFileUpload } from './fields/file/types';
import { F0FormSubmitConfig, RenderCustomFieldFunction } from './types';
interface F0FormContextValue {
    /** Form name used for anchor links */
    formName: string;
    /** Shared pool of pre-existing file metadata for file fields */
    initialFiles?: InitialFile[];
    /** Whether async initialFiles are still being resolved */
    isLoadingInitialFiles?: boolean;
    /** Callback that renders custom fields identified by customFieldName */
    renderCustomField?: RenderCustomFieldFunction;
    /** Whether async defaultValues are still being resolved */
    isLoading?: boolean;
    /** Default upload hook shared across all file fields */
    useUpload?: UseFileUpload;
    /**
     * Registers whether a given file field currently has an upload in progress.
     * The form aggregates these signals to block submission until every upload
     * settles. `id` must be stable for the lifetime of the field.
     */
    registerUploadState?: (id: string, isUploading: boolean) => void;
    /**
     * Submit configuration for the form.
     */
    submitConfig?: F0FormSubmitConfig;
}
export declare const F0FormContext: import('react').Context<F0FormContextValue | null>;
/**
 * Hook to access the F0Form context
 */
export declare function useF0FormContext(): F0FormContextValue;
export declare function useOptionalF0FormContext(): F0FormContextValue | null;
/**
 * Generates an anchor ID for a form element
 * Format: forms.[formName].[sectionId].[fieldId]
 */
export declare function generateAnchorId(formName: string, sectionId?: string, fieldId?: string): string;
export {};
