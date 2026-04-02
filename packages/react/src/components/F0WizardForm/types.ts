import { z, ZodRawShape, ZodEffects, type ZodType } from "zod";

import type {
  F0FormErrorTriggerMode,
  F0FormSubmitConfig,
  F0FormSubmitResult,
  F0PerSectionSubmitConfig,
  F0SectionConfig,
  F0PerSectionSectionConfig,
} from "@/components/F0Form/types";
import type { RenderCustomFieldFunction } from "@/components/F0Form/types";

import { DialogWidth } from "@/components/F0Dialog";

export type F0FormSchema<T extends ZodRawShape = ZodRawShape> =
  | z.ZodObject<T>
  | ZodEffects<z.ZodObject<T>>;

export type F0PerSectionSchema = Record<string, F0FormSchema>;

export type InferPerSectionValues<T extends F0PerSectionSchema> = {
  [K in keyof T]: z.infer<T[K]>;
};

export interface F0WizardFormStep {
  title: string;
  sectionIds: string[];
  nextLabel?: string;
  previousLabel?: string;
  /**
   * Custom function to determine if this step is considered completed.
   * Receives the step's current data. When provided, takes precedence
   * over the default "all required fields filled" check.
   */
  isCompleted?: (arg: { data: Record<string, unknown> }) => boolean;
}

/**
 * Per-section submit argument: discriminated union where sectionId narrows data.
 * fullData always contains all sections' latest values.
 */
export type F0WizardFormPerSectionSubmitArg<T extends F0PerSectionSchema> = {
  [K in keyof T & string]: {
    sectionId: K;
    data: z.infer<T[K]>;
    fullData: InferPerSectionValues<T>;
  };
}[keyof T & string];

/**
 * Single-schema submit argument: data is the full form.
 */
export interface F0WizardFormSingleSubmitArg<TSchema extends F0FormSchema> {
  data: z.infer<TSchema>;
}

// =============================================================================
// F0FormDefinition — opaque object returned by useF0FormDefinition
// =============================================================================

export interface F0FormDefinitionSingleSchema<TSchema extends F0FormSchema> {
  /** @internal Brand to distinguish from per-section at the type level */
  readonly _brand: "single";
  name: string;
  schema: TSchema;
  sections?: Record<string, F0SectionConfig>;
  defaultValues?: Partial<z.infer<TSchema>>;
  onSubmit: (
    arg: F0WizardFormSingleSubmitArg<TSchema>,
  ) => Promise<F0FormSubmitResult> | F0FormSubmitResult;
  submitConfig?: F0FormSubmitConfig;
  errorTriggerMode?: F0FormErrorTriggerMode;
  /** Whether async defaultValues are still being resolved */
  isLoading?: boolean;
  /** Zod schema describing params the AI can supply when calling presentForm */
  defaultValuesParamsSchema?: ZodType;
  /** Raw defaultValues function for AI registry use when params are involved */
  defaultValuesFn?: (
    params: Record<string, unknown>,
  ) => Promise<Partial<z.infer<TSchema>>>;
}

export interface F0FormDefinitionPerSection<T extends F0PerSectionSchema> {
  /** @internal Brand to distinguish from single-schema at the type level */
  readonly _brand: "per-section";
  name: string;
  schema: T;
  sections?: Record<string, F0PerSectionSectionConfig>;
  defaultValues?: { [K in keyof T]?: Partial<z.infer<T[K]>> };
  onSubmit: (
    arg: F0WizardFormPerSectionSubmitArg<T>,
  ) => Promise<F0FormSubmitResult> | F0FormSubmitResult;
  submitConfig?: F0PerSectionSubmitConfig;
  errorTriggerMode?: F0FormErrorTriggerMode;
  /** Whether async defaultValues are still being resolved */
  isLoading?: boolean;
  /** Zod schema describing params the AI can supply when calling presentForm */
  defaultValuesParamsSchema?: ZodType;
  /** Raw defaultValues function for AI registry use when params are involved */
  defaultValuesFn?: (
    params: Record<string, unknown>,
  ) => Promise<{ [K in keyof T]?: Partial<z.infer<T[K]>> }>;
}

export type F0FormDefinition<
  T extends F0FormSchema | F0PerSectionSchema =
    | F0FormSchema
    | F0PerSectionSchema,
> = T extends F0FormSchema
  ? F0FormDefinitionSingleSchema<T>
  : T extends F0PerSectionSchema
    ? F0FormDefinitionPerSection<T>
    : never;

// =============================================================================
// F0WizardForm props — wizard-only props + definition
// =============================================================================

interface F0WizardFormBaseProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  width?: DialogWidth;
  defaultStepIndex?: number;
  nextLabel?: string;
  previousLabel?: string;
  onStepChanged?: (stepIndex: number) => void;
  steps?: F0WizardFormStep[];
  /**
   * When true, users can click on any step that is not explicitly marked
   * as incomplete (i.e. its `isCompleted` callback does not return `false`)
   * to jump to it.
   * When false (default), users must navigate sequentially using Next/Previous.
   * @default false
   */
  allowStepSkipping?: boolean;
  /**
   * When true, the wizard automatically closes after the last step's
   * onSubmit returns `{ success: true }`.
   * Also implied when `linkAfterLastStepSubmit` is provided.
   * @default false
   */
  autoCloseOnLastStepSubmit?: boolean;
  /**
   * When true, the wizard automatically skips to the first non-completed step
   * on open. A step is completed when all required fields have values, or when
   * the step's custom `isCompleted` function returns true.
   * Only applies on initial render; users can still navigate back freely.
   * @default false
   */
  autoSkipCompletedSteps?: boolean;
  /**
   * Callback that renders custom fields identified by `customFieldName`.
   * When a field has `customFieldName`, this function is called instead of the inline `render`.
   */
  renderCustomField?: RenderCustomFieldFunction;
}

export interface F0WizardFormSingleSchemaProps<
  TSchema extends F0FormSchema,
> extends F0WizardFormBaseProps {
  formDefinition: F0FormDefinitionSingleSchema<TSchema>;
  /**
   * Function that receives the submitted data and returns a URL to navigate to
   * after the last step's onSubmit returns `{ success: true }`.
   * When provided, the wizard auto-closes and navigates to the returned URL.
   */
  linkAfterLastStepSubmit?: (arg: { fullData: z.infer<TSchema> }) => string;
}

export interface F0WizardFormPerSectionProps<
  T extends F0PerSectionSchema,
> extends F0WizardFormBaseProps {
  formDefinition: F0FormDefinitionPerSection<T>;
  /**
   * Function that receives the submitted data and returns a URL to navigate to
   * after the last step's onSubmit returns `{ success: true }`.
   * When provided, the wizard auto-closes and navigates to the returned URL.
   */
  linkAfterLastStepSubmit?: (arg: {
    fullData: InferPerSectionValues<T>;
  }) => string;
}
