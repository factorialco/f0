import { z, ZodType } from 'zod';
import { ModuleId } from '../../components/avatars/F0AvatarModule';
import { InitialFile } from '../F0Form/fields/file/types';
import { F0FormErrorTriggerMode, F0FormSubmitConfig, F0FormSubmitResult, F0PerSectionSubmitConfig, F0SectionConfig, F0PerSectionSectionConfig } from '../F0Form/types';
import { F0FormDefinitionPerSection, F0FormDefinitionSingleSchema, F0FormSchema, F0PerSectionSchema, F0WizardFormPerSectionSubmitArg, F0WizardFormSingleSubmitArg, F0WizardFormStep } from './types';
/**
 * Accepts either a synchronous value or an async function that resolves it.
 * The async function receives an `AbortSignal` for cancellation support.
 */
export type AsyncOrSync<T> = T | ((signal: AbortSignal) => Promise<T>);
/**
 * Async function that receives typed params (from AI presentForm).
 * Use this variant when `defaultValuesParamsSchema` is provided.
 */
export type AsyncWithParams<T, TParams> = (params: TParams) => Promise<T>;
/** Base fields shared by all single-schema input variants */
interface UseF0FormDefinitionSingleSchemaInputBase<TSchema extends F0FormSchema> {
    name: string;
    /** Human-readable description of the form's purpose */
    description?: string;
    /** Module associated with this form (for avatar display in canvas cards) */
    module?: ModuleId;
    schema: TSchema;
    sections?: Record<string, F0SectionConfig>;
    onSubmit: (arg: F0WizardFormSingleSubmitArg<TSchema>) => Promise<F0FormSubmitResult> | F0FormSubmitResult;
    submitConfig?: F0FormSubmitConfig;
    errorTriggerMode?: F0FormErrorTriggerMode;
    /**
     * Pre-existing file metadata for file fields.
     * Accepts a static array or an async function `(signal: AbortSignal) => Promise<InitialFile[]>`
     * that resolves the list at mount time.
     */
    initialFiles?: AsyncOrSync<InitialFile[]>;
    /** Wizard steps — when present, F0WizardForm uses these instead of auto-deriving from sections */
    steps?: F0WizardFormStep[];
}
/** Single-schema input WITHOUT `defaultValuesParamsSchema` → `defaultValues` is sync or `(signal) => Promise<T>` */
interface UseF0FormDefinitionSingleSchemaInputWithoutParams<TSchema extends F0FormSchema> extends UseF0FormDefinitionSingleSchemaInputBase<TSchema> {
    defaultValues?: AsyncOrSync<Partial<z.infer<TSchema>>>;
    defaultValuesParamsSchema?: undefined;
}
/** Single-schema input WITH `defaultValuesParamsSchema` → `defaultValues` is sync or `(params) => Promise<T>` */
interface UseF0FormDefinitionSingleSchemaInputWithParams<TSchema extends F0FormSchema, TParams extends Record<string, unknown>> extends UseF0FormDefinitionSingleSchemaInputBase<TSchema> {
    defaultValues?: Partial<z.infer<TSchema>> | AsyncWithParams<Partial<z.infer<TSchema>>, TParams>;
    defaultValuesParamsSchema: ZodType<TParams>;
}
/** Base fields shared by all per-section input variants */
interface UseF0FormDefinitionPerSectionInputBase<T extends F0PerSectionSchema> {
    name: string;
    /** Human-readable description of the form's purpose */
    description?: string;
    /** Module associated with this form (for avatar display in canvas cards) */
    module?: ModuleId;
    schema: T;
    sections?: Record<string, F0PerSectionSectionConfig>;
    onSubmit: (arg: F0WizardFormPerSectionSubmitArg<T>) => Promise<F0FormSubmitResult> | F0FormSubmitResult;
    submitConfig?: F0PerSectionSubmitConfig;
    errorTriggerMode?: F0FormErrorTriggerMode;
    /**
     * Pre-existing file metadata for file fields.
     * Accepts a static array or an async function `(signal: AbortSignal) => Promise<InitialFile[]>`
     * that resolves the list at mount time.
     */
    initialFiles?: AsyncOrSync<InitialFile[]>;
    /** Wizard steps — when present, F0WizardForm uses these instead of auto-deriving from sections */
    steps?: F0WizardFormStep[];
}
/** Per-section input WITHOUT `defaultValuesParamsSchema` */
interface UseF0FormDefinitionPerSectionInputWithoutParams<T extends F0PerSectionSchema> extends UseF0FormDefinitionPerSectionInputBase<T> {
    defaultValues?: AsyncOrSync<{
        [K in keyof T]?: Partial<z.infer<T[K]>>;
    }>;
    defaultValuesParamsSchema?: undefined;
}
/** Per-section input WITH `defaultValuesParamsSchema` */
interface UseF0FormDefinitionPerSectionInputWithParams<T extends F0PerSectionSchema, TParams extends Record<string, unknown>> extends UseF0FormDefinitionPerSectionInputBase<T> {
    defaultValues?: {
        [K in keyof T]?: Partial<z.infer<T[K]>>;
    } | AsyncWithParams<{
        [K in keyof T]?: Partial<z.infer<T[K]>>;
    }, TParams>;
    defaultValuesParamsSchema: ZodType<TParams>;
}
export declare function useAsyncDefaultValues<T>(defaultValues: T | ((signal: AbortSignal) => Promise<T>) | ((params: Record<string, unknown>) => Promise<T>) | undefined, defaultValuesParamsSchema?: ZodType): {
    resolved: T | undefined;
    isLoading: boolean;
};
/** Single schema, no params */
export declare function useF0FormDefinition<TSchema extends F0FormSchema>(input: UseF0FormDefinitionSingleSchemaInputWithoutParams<TSchema>): F0FormDefinitionSingleSchema<TSchema>;
/** Single schema, with params */
export declare function useF0FormDefinition<TSchema extends F0FormSchema, TParams extends Record<string, unknown>>(input: UseF0FormDefinitionSingleSchemaInputWithParams<TSchema, TParams>): F0FormDefinitionSingleSchema<TSchema>;
/** Per-section, no params */
export declare function useF0FormDefinition<T extends F0PerSectionSchema>(input: UseF0FormDefinitionPerSectionInputWithoutParams<T>): F0FormDefinitionPerSection<T>;
/** Per-section, with params */
export declare function useF0FormDefinition<T extends F0PerSectionSchema, TParams extends Record<string, unknown>>(input: UseF0FormDefinitionPerSectionInputWithParams<T, TParams>): F0FormDefinitionPerSection<T>;
export {};
