import { experimentalComponent } from "@/lib/experimental"

import { F0Form as F0FormComponent } from "./F0Form"

// Export main types
export type {
  F0FormProps,
  F0FormPropsWithSingleSchema,
  F0FormPropsWithPerSectionSchema,
  F0FormPropsWithSingleSchemaDefinition,
  F0FormPropsWithPerSectionDefinition,
  F0FormSchema,
  F0PerSectionSchema,
  F0PerSectionSectionConfig,
  F0PerSectionSubmitConfig,
  InferPerSectionValues,
  F0FormErrorTriggerMode,
  F0FormSubmitConfig,
  F0FormDiscardConfig,
  F0FormStylingConfig,
  F0SectionConfig,
  F0SectionAction,
  F0FormSubmitResult,
  SectionRenderIf,
} from "./types"

// Export F0 schema extension and utilities
export {
  f0FormField,
  getF0Config,
  hasF0Config,
  inferFieldType,
  isZodType,
  unwrapZodSchema,
} from "./f0Schema"
export type {
  F0BaseConfig,
  F0FieldConfig,
  F0FieldType,
  F0ZodType,
  InferF0FormValues,
  // Field-specific config types
  F0StringConfig,
  F0NumberFieldConfig,
  F0BooleanConfig,
  F0DateFieldConfig,
  F0DateTimeFieldConfig,
  F0DateRangeFieldConfig,
  F0ArrayConfig,
  F0CustomFieldConfig,
  F0RichTextFieldConfig,
  F0FileFieldConfig,
} from "./f0Schema"

// Export field types and configs
export type {
  F0Field,
  F0BaseField,
  FieldType,
  // RenderIf condition types
  RenderIfCondition,
  CommonRenderIfCondition,
  TextRenderIfCondition,
  NumberRenderIfCondition,
  BooleanRenderIfCondition,
  SelectRenderIfCondition,
  DateRenderIfCondition,
  DateRangeRenderIfCondition,
  // Field-specific configs
  F0TextConfig,
  F0NumberConfig,
  F0TextareaConfig,
  F0SelectConfig,
  F0CheckboxConfig,
  F0SwitchConfig,
  F0DateConfig,
  DateGranularity,
  F0TimeConfig,
  F0TimeField,
  F0DateTimeConfig,
  F0DateTimeField,
  F0DateRangeConfig,
  F0RichTextConfig,
  F0CustomConfig,
  F0FileConfig,
  // Field types
  F0TextField,
  F0NumberField,
  F0TextareaField,
  F0SelectField,
  F0CheckboxField,
  F0SwitchField,
  F0DateField,
  F0DateRangeField,
  F0RichTextField,
  F0FileField,
  F0CustomField,
  // Upload types
  MimeType,
  InitialFile,
  FileUploadResult,
  FileUploadStatus,
  FileUploadHookReturn,
  UseFileUpload,
  // Other types
  RichTextValue,
  DateRangeValue,
  CustomFieldRenderProps,
} from "./fields/types"

// Export renderCustomField types
export type { RenderCustomFieldProps, RenderCustomFieldFunction } from "./types"

// Export schema definition utilities
export { useSchemaDefinition, getSchemaDefinition } from "./useSchemaDefinition"

// Export utilities
export { evaluateRenderIf } from "./fields/utils"
export { generateAnchorId } from "./context"

// Export form control hook
export { useF0Form } from "./useF0Form"
export type {
  F0FormRef,
  F0FormSetValueOptions,
  UseF0FormReturn,
} from "./useF0Form"

// Export AI form registry
export {
  F0AiFormRegistryProvider,
  useF0AiFormRegistry,
} from "./F0AiFormRegistry"
export type {
  F0AiFormEntry,
  F0AiAvailableFormDefinition,
  F0AiPresentedForm,
} from "./F0AiFormRegistry"

import type {
  F0FormPropsWithSingleSchema,
  F0FormPropsWithPerSectionSchema,
  F0FormPropsWithSingleSchemaDefinition,
  F0FormPropsWithPerSectionDefinition,
  F0FormSchema,
  F0PerSectionSchema,
} from "./types"

/**
 * @experimental This is an experimental component, use it at your own risk
 */
export const F0Form = experimentalComponent("F0Form", F0FormComponent) as {
  <TSchema extends F0FormSchema>(
    props: F0FormPropsWithSingleSchema<TSchema>
  ): React.ReactElement
  <T extends F0PerSectionSchema>(
    props: F0FormPropsWithPerSectionSchema<T>
  ): React.ReactElement
  <TSchema extends F0FormSchema>(
    props: F0FormPropsWithSingleSchemaDefinition<TSchema>
  ): React.ReactElement
  <T extends F0PerSectionSchema>(
    props: F0FormPropsWithPerSectionDefinition<T>
  ): React.ReactElement
}
