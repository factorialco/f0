import { experimentalComponent } from "@/lib/experimental"

import { F0Form as F0FormComponent } from "./F0Form"

// Export main types
export type {
  F0FormProps,
  F0FormSubmitType,
  F0FormErrorTriggerMode,
  F0FormSubmitConfig,
  F0FormDiscardConfig,
  F0SectionConfig,
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
  F0FormSchema,
  InferF0FormValues,
  // Field-specific config types
  F0StringConfig,
  F0NumberFieldConfig,
  F0BooleanConfig,
  F0DateFieldConfig,
  F0DateRangeFieldConfig,
  F0ArrayConfig,
  F0CustomFieldConfig,
  F0RichTextFieldConfig,
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
  F0DateRangeConfig,
  F0RichTextConfig,
  F0CustomConfig,
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
  F0CustomField,
  // Other types
  RichTextValue,
  DateRangeValue,
  CustomFieldRenderProps,
} from "./fields/types"

// Export schema definition utilities
export { useSchemaDefinition, getSchemaDefinition } from "./useSchemaDefinition"

// Export utilities
export { evaluateRenderIf } from "./fields/utils"
export { generateAnchorId } from "./context"

import type { z, ZodRawShape } from "zod"

import type { F0FormProps } from "./types"

/**
 * @experimental This is an experimental component, use it at your own risk
 */
export const F0Form = experimentalComponent("F0Form", F0FormComponent) as <
  TSchema extends z.ZodObject<ZodRawShape>,
>(
  props: F0FormProps<TSchema>
) => React.ReactElement
