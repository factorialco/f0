import { ZodType } from 'zod';
import { ModuleId } from '../../components/avatars/F0AvatarModule';
import { F0FormDefinitionSingleSchema, F0FormDefinitionPerSection, F0WizardFormStep } from '../F0WizardForm/types';
import { F0FormErrorTriggerMode, F0FormSchema, F0SectionConfig, F0FormSubmitConfig } from './types';
import { F0FormRef } from './useF0Form';
/**
 * Entry in the AI form registry
 */
export interface F0AiFormEntry {
    ref: React.MutableRefObject<F0FormRef | null>;
    schema: F0FormSchema;
    /** Human-readable description of the form's purpose */
    description?: string;
    /** Module associated with this form (for avatar display in canvas cards) */
    module?: ModuleId;
    /** Whether this entry was registered from an availableFormDefinition (not a rendered form) */
    virtual?: boolean;
    /** Section configs (title, description) keyed by section ID */
    sections?: Record<string, F0SectionConfig>;
    /** Zod schema for params accepted by the AI (virtual entries only) */
    defaultValuesParamsSchema?: ZodType;
    /** Raw defaultValues function that accepts params (from rendered forms with defaultValuesParamsSchema) */
    defaultValuesFn?: (params: Record<string, unknown>) => Promise<Record<string, unknown>>;
    /** The params most recently used to pre-populate this form (updated via updateActiveFormDefaultValuesParams through coagent state sync) */
    defaultValuesParams?: Record<string, unknown>;
    /** Field names explicitly set via setValue/setValues on a virtual ref */
    dirtyFields?: Set<string>;
    /** Consumer submit callback (from availableFormDefinition). Preserved across virtual ↔ rendered transitions. */
    onSubmit?: (values: Record<string, unknown>) => void | Promise<void>;
    /** Wizard steps (for multi-step form rendering) */
    steps?: F0WizardFormStep[];
    /** Submit button configuration (label, icon, etc.) */
    submitConfig?: F0FormSubmitConfig;
    /** When to trigger validation errors */
    errorTriggerMode?: F0FormErrorTriggerMode;
}
/**
 * A form definition that the AI can interact with even though the form is not rendered.
 *
 * Use the generic parameter to type the params accepted by a functional `defaultValues`.
 * Prefer using {@link defineAvailableForm} for automatic inference from `defaultValuesParamsSchema`.
 */
export interface F0AiAvailableFormDefinition<TParams extends Record<string, unknown> = Record<string, unknown>> {
    /** Unique name to identify the form */
    name: string;
    /** Zod schema that defines the form's fields and validation */
    schema: F0FormSchema;
    /**
     * Default values for the form fields.
     * Can be a static object, a sync function, or an async function that
     * receives params (supplied by the AI) and returns the defaults.
     */
    defaultValues?: Record<string, unknown> | ((params: TParams) => Record<string, unknown> | Promise<Record<string, unknown>>);
    /**
     * Zod schema that describes the params accepted by a functional `defaultValues`.
     * When provided, the AI will see this schema and can supply params.
     * Params are validated against this schema before being passed to `defaultValues`.
     */
    defaultValuesParamsSchema?: ZodType<TParams>;
    /** Section configs (title, description) keyed by section ID */
    sections?: Record<string, F0SectionConfig>;
    /** Optional submit handler. Called when AI triggers formSubmit on this form. */
    onSubmit?: (values: Record<string, unknown>) => void | Promise<void>;
    /** Title shown in the dialog header or wizard header */
    title?: string;
    /** Description shown under the title in dialog mode */
    description?: string;
    /** Module associated with this form (for avatar display in canvas cards) */
    module?: ModuleId;
    /** Wizard steps (required for wizard mode to work with multiple steps) */
    steps?: F0WizardFormStep[];
    /** Submit button configuration (label, icon, etc.) */
    submitConfig?: F0FormSubmitConfig;
    /** When to trigger validation errors */
    errorTriggerMode?: F0FormErrorTriggerMode;
}
/**
 * An item that can be passed in the `availableFormDefinitions` array.
 * Accepts either a plain {@link F0AiAvailableFormDefinition} or the result
 * of calling {@link useF0FormDefinition} (i.e. {@link F0FormDefinitionSingleSchema}
 * or {@link F0FormDefinitionPerSection}).
 */
export type AvailableFormDefinitionItem = F0AiAvailableFormDefinition | F0FormDefinitionSingleSchema<any> | F0FormDefinitionPerSection<any>;
/**
 * Helper to define an available form with proper params typing.
 * TypeScript infers `TParams` from `defaultValuesParamsSchema`, so the
 * `defaultValues` callback receives fully typed params.
 *
 * @example
 * ```tsx
 * const employeeForm = defineAvailableForm({
 *   name: "edit-employee",
 *   schema: employeeSchema,
 *   defaultValuesParamsSchema: z.object({ employeeId: z.string() }),
 *   defaultValues: (params) => ({
 *     // params.employeeId is typed as string
 *     name: `Employee ${params.employeeId}`,
 *   }),
 * })
 * ```
 */
export declare function defineAvailableForm<TParams extends Record<string, unknown> = Record<string, unknown>>(definition: F0AiAvailableFormDefinition<TParams>): F0AiAvailableFormDefinition<TParams>;
/**
 * Overload that accepts an `F0FormDefinitionSingleSchema` (the return value
 * of `useF0FormDefinition` with a single schema) and converts it into an
 * `F0AiAvailableFormDefinition`.
 */
export declare function defineAvailableForm<TSchema extends F0FormSchema>(definition: F0FormDefinitionSingleSchema<TSchema>): F0AiAvailableFormDefinition;
/**
 * Context value for the AI form registry
 */
/** Full runtime description of a form (used for formsOnCurrentPage and activeForm) */
export interface F0AiFormDescription {
    formName: string;
    description?: string;
    module?: ModuleId;
    /** Custom title for the card (set via fillForm) */
    cardTitle: string;
    /** Custom description for the card (set via fillForm) */
    cardDescription: string;
    formSchema: Record<string, unknown>;
    fieldDescriptions: Record<string, {
        label: string;
        section?: string;
        placeholder?: string;
        helpText?: string;
        description?: string;
        fieldType?: string;
    }>;
    sectionDescriptions: Record<string, {
        title: string;
        description?: string;
    }>;
    formValues: Record<string, unknown>;
    formErrors: Record<string, unknown>;
    isDirty: boolean;
    /** JSON Schema of defaultValuesParams (only for forms with defaultValuesParamsSchema) */
    defaultValuesParamsSchema?: Record<string, unknown>;
    /** The params most recently used to pre-populate this form (set when fillForm is called with defaultValuesParams) */
    defaultValuesParams?: Record<string, unknown>;
}
interface F0AiFormRegistryContextValue {
    register: (name: string, ref: React.MutableRefObject<F0FormRef | null>, schema: F0FormSchema, sections?: Record<string, F0SectionConfig>, defaultValuesParamsSchema?: ZodType, defaultValuesFn?: (params: Record<string, unknown>) => Promise<Record<string, unknown>>, description?: string, module?: ModuleId) => void;
    unregister: (name: string) => void;
    get: (name: string) => F0AiFormEntry | undefined;
    getFormNames: () => string[];
    /** Rebuild the form descriptions snapshot (call after mutating form state) */
    rebuildDescriptions: () => void;
    /** Full runtime state of all rendered (non-virtual) forms on the current page */
    formsOnCurrentPage: F0AiFormDescription[];
    /** Full runtime state of all virtual/available forms */
    availableForms: F0AiFormDescription[];
    /** Full runtime state of the form the AI is actively co-editing, or null */
    activeForm: F0AiFormDescription | null;
    /** Set an available form as the active co-editing form */
    setActiveForm: (formName: string, cardMeta?: {
        cardTitle: string;
        cardDescription: string;
    }) => {
        success: boolean;
        error?: string;
    };
    /** Clear the active co-editing form (e.g. after submit) */
    clearActiveForm: () => void;
    /** Write defaultValuesParams onto a registry entry (called when Mastra sets them in shared state) */
    updateActiveFormDefaultValuesParams: (formName: string, params: Record<string, unknown> | undefined) => void;
    /** Bump the fill-version counter for a form (called after fillForm succeeds) */
    incrementFillVersion: (formName: string) => void;
    /** Reset the fill-version counter for a form (e.g. after submit) */
    resetFillVersion: (formName: string) => void;
    /** Get the fill-version counter for a form (0 = never filled) */
    getFillVersion: (formName: string) => number;
    /** Whether a form's async default values have been resolved (true unless actively resolving) */
    isDefaultValuesResolved: (formName: string) => boolean;
    /** Mark a form as currently resolving async default values (fills will be queued) */
    markDefaultValuesResolving: (formName: string) => void;
    /** Mark a form's default values as resolved and flush any queued fill actions */
    markDefaultValuesResolved: (formName: string, paramsKey?: string | null) => void;
    /** Queue a fill callback to run after a form's defaults are resolved */
    queueFillAction: (formName: string, action: () => void) => void;
    /** Whether a form's async defaults have ever been resolved (persists across canvas close/reopen) */
    hasDefaultValuesEverResolved: (formName: string, paramsKey?: string | null) => boolean;
}
/**
 * Provider that maintains a registry of active F0Forms,
 * enabling AI tools to look up forms by name.
 *
 * Place this inside both the CopilotKit provider and above the F0Form components.
 *
 * @example
 * ```tsx
 * <F0AiChatProvider>
 *   <F0AiFormRegistryProvider>
 *     <F0Form name="my-form" ... />
 *     <F0AiChat />
 *   </F0AiFormRegistryProvider>
 * </F0AiChatProvider>
 * ```
 */
export declare function F0AiFormRegistryProvider({ children, availableFormDefinitions: rawAvailableFormDefinitions, }: {
    children: React.ReactNode;
    /** Form definitions the AI can interact with even if the form is not rendered on the page.
     *  Accepts plain definitions, or the return value of `useF0FormDefinition` hooks. */
    availableFormDefinitions?: AvailableFormDefinitionItem[];
}): import("react").JSX.Element;
/**
 * Hook to access the AI form registry.
 * Returns null if not inside a F0AiFormRegistryProvider.
 */
export declare function useF0AiFormRegistry(): F0AiFormRegistryContextValue | null;
export {};
