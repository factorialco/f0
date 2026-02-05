import { z, ZodTypeAny } from "zod"

import type { RenderIfCondition } from "./fields/types"
import type { F0TextConfig } from "./fields/text/types"
import type { F0NumberConfig } from "./fields/number/types"
import type { F0TextareaConfig } from "./fields/textarea/types"
import type { F0SelectConfig } from "./fields/select/types"
import type { F0CheckboxConfig } from "./fields/checkbox/types"
import type { F0SwitchConfig } from "./fields/switch/types"
import type { F0DateConfig } from "./fields/date/types"
import type { F0DateRangeConfig } from "./fields/daterange/types"
import type { F0RichTextConfig } from "./fields/richtext/types"
import type { F0CustomConfig } from "./fields/custom/types"

/**
 * Zod type names for type checking without instanceof
 * Using _def.typeName is more reliable across module boundaries than instanceof
 */
type ZodTypeName =
  | "ZodString"
  | "ZodNumber"
  | "ZodBoolean"
  | "ZodDate"
  | "ZodEnum"
  | "ZodArray"
  | "ZodObject"
  | "ZodOptional"
  | "ZodNullable"
  | "ZodDefault"
  | "ZodLiteral"

/**
 * Check if a schema is of a specific Zod type using _def.typeName
 * This is more reliable than instanceof across module boundaries
 */
export function isZodType(schema: ZodTypeAny, typeName: ZodTypeName): boolean {
  return schema._def?.typeName === typeName
}

/**
 * Field types for rendering
 */
export type F0FieldType =
  | "text"
  | "number"
  | "textarea"
  | "select"
  | "checkbox"
  | "switch"
  | "date"
  | "daterange"
  | "richtext"
  | "custom"

/**
 * Base configuration shared across all field types.
 * Position is automatically derived from field declaration order in the schema.
 */
export interface F0BaseConfig {
  /** Label displayed above the field */
  label: string
  /** Section ID to group field under (null = root level) */
  section?: string
  /** Placeholder text for the input */
  placeholder?: string
  /** Helper text displayed below the field */
  helpText?: string
  /** Whether the field is disabled */
  disabled?: boolean
  /** Row ID for horizontal grouping with other fields */
  row?: string
  /** Conditional rendering based on another field's value */
  renderIf?: RenderIfCondition
}

// Re-export field-specific config types
export type {
  F0TextConfig,
  F0NumberConfig,
  F0TextareaConfig,
  F0SelectConfig,
  F0CheckboxConfig,
  F0SwitchConfig,
  F0DateConfig,
  F0DateRangeConfig,
  F0RichTextConfig,
  F0CustomConfig,
}

/**
 * Config for string fields - text input (default for z.string())
 */
export type F0StringTextConfig = F0BaseConfig &
  F0TextConfig & {
    fieldType?: "text"
  }

/**
 * Config for string fields - textarea
 */
export type F0StringTextareaConfig = F0BaseConfig &
  F0TextareaConfig & {
    fieldType: "textarea"
  }

/**
 * Config for string fields with select options
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export type F0StringSelectConfig<
  R extends Record<string, unknown> = Record<string, unknown>,
> = F0BaseConfig &
  F0SelectConfig<R> & {
    fieldType?: "select"
  }

/**
 * Union of all string field configs
 *
 * @typeParam TValue - Type of the field value (for custom fields)
 * @typeParam TConfig - Type of the fieldConfig object (for custom fields)
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export type F0StringConfig<
  TValue = string,
  TConfig = undefined,
  R extends Record<string, unknown> = Record<string, unknown>,
> =
  | F0StringTextConfig
  | F0StringTextareaConfig
  | F0StringSelectConfig<R>
  | F0CustomFieldConfig<TValue, TConfig>

/**
 * Config for number fields
 */
export type F0NumberFieldConfig = F0BaseConfig &
  F0NumberConfig & {
    fieldType?: "number"
  }

/**
 * Config for boolean fields - checkbox
 */
export type F0BooleanCheckboxConfig = F0BaseConfig &
  F0CheckboxConfig & {
    fieldType: "checkbox"
  }

/**
 * Config for boolean fields - switch (default for z.boolean())
 */
export type F0BooleanSwitchConfig = F0BaseConfig &
  F0SwitchConfig & {
    fieldType?: "switch"
  }

/**
 * Union of all boolean field configs
 */
export type F0BooleanConfig = F0BooleanCheckboxConfig | F0BooleanSwitchConfig

/**
 * Config for date fields
 */
export type F0DateFieldConfig = F0BaseConfig &
  F0DateConfig & {
    fieldType?: "date"
  }

/**
 * Config for date range fields
 */
export type F0DateRangeFieldConfig = F0BaseConfig &
  F0DateRangeConfig & {
    fieldType: "daterange"
  }

/**
 * Config for array fields (multi-select)
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export type F0ArrayConfig<
  R extends Record<string, unknown> = Record<string, unknown>,
> = F0BaseConfig &
  F0SelectConfig<R> & {
    fieldType?: "select"
  }

/**
 * Config for custom fields without fieldConfig
 *
 * @typeParam TValue - Type of the field value (inferred from Zod schema)
 */
export type F0CustomFieldConfigBase<TValue = unknown> = F0BaseConfig &
  F0CustomConfig<TValue, undefined> & {
    fieldType: "custom"
  }

/**
 * Config for custom fields with fieldConfig
 *
 * @typeParam TValue - Type of the field value (inferred from Zod schema)
 * @typeParam TConfig - Type of the custom configuration object passed to render
 */
export type F0CustomFieldConfigWithConfig<
  TValue = unknown,
  TConfig = unknown,
> = F0BaseConfig &
  F0CustomConfig<TValue, TConfig> & {
    fieldType: "custom"
  }

/**
 * Union of custom field configs (with or without fieldConfig)
 *
 * @typeParam TValue - Type of the field value (inferred from Zod schema)
 * @typeParam TConfig - Type of the fieldConfig object
 */
export type F0CustomFieldConfig<
  TValue = unknown,
  TConfig = undefined,
> = TConfig extends undefined
  ? F0CustomFieldConfigBase<TValue>
  : F0CustomFieldConfigWithConfig<TValue, TConfig>

/**
 * Config for richtext fields
 */
export type F0RichTextFieldConfig = F0BaseConfig &
  F0RichTextConfig & {
    fieldType: "richtext"
  }

/**
 * Config for object fields (richtext, daterange, or custom)
 *
 * @typeParam TValue - Type of the field value (for custom fields)
 * @typeParam TConfig - Type of the custom configuration object (for custom fields)
 */
export type F0ObjectConfig<TValue = unknown, TConfig = undefined> =
  | F0RichTextFieldConfig
  | F0DateRangeFieldConfig
  | F0CustomFieldConfig<TValue, TConfig>

/**
 * Complete F0 field configuration (union of all possible configs)
 */
export type F0FieldConfig =
  | F0StringConfig
  | F0NumberFieldConfig
  | F0BooleanConfig
  | F0DateFieldConfig
  | F0ArrayConfig
  | F0ObjectConfig

/**
 * Extended Zod type with F0 metadata
 */
export interface F0ZodType<T extends ZodTypeAny = ZodTypeAny> {
  _f0Config?: F0FieldConfig
  _innerSchema: T
}

/**
 * Map to store F0 config for schemas (using WeakMap for memory efficiency)
 */
const f0ConfigMap = new WeakMap<ZodTypeAny, F0FieldConfig>()

// Function overloads for type-safe f0FormField function

/**
 * String field - text input, textarea, select, or custom
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export function f0FormField<
  T extends z.ZodString,
  TConfig = undefined,
  R extends Record<string, unknown> = Record<string, unknown>,
>(schema: T, config: F0StringConfig<z.infer<T>, TConfig, R>): T & F0ZodType<T>

/**
 * Number field
 */
export function f0FormField<T extends z.ZodNumber>(
  schema: T,
  config: F0NumberFieldConfig
): T & F0ZodType<T>

/**
 * Boolean field - checkbox or switch
 */
export function f0FormField<T extends z.ZodBoolean>(
  schema: T,
  config: F0BooleanConfig
): T & F0ZodType<T>

/**
 * Date field
 */
export function f0FormField<T extends z.ZodDate>(
  schema: T,
  config: F0DateFieldConfig
): T & F0ZodType<T>

/**
 * Enum field - select
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export function f0FormField<
  T extends z.ZodEnum<[string, ...string[]]>,
  R extends Record<string, unknown> = Record<string, unknown>,
>(schema: T, config: F0StringSelectConfig<R>): T & F0ZodType<T>

/**
 * Array field - multi-select
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export function f0FormField<
  T extends z.ZodArray<ZodTypeAny>,
  R extends Record<string, unknown> = Record<string, unknown>,
>(schema: T, config: F0ArrayConfig<R>): T & F0ZodType<T>

/**
 * Object field - richtext or custom
 */
export function f0FormField<
  T extends z.ZodObject<z.ZodRawShape>,
  TConfig = undefined,
>(schema: T, config: F0ObjectConfig<z.infer<T>, TConfig>): T & F0ZodType<T>

/**
 * Optional wrapper - inherits inner type's config
 */
export function f0FormField<T extends z.ZodOptional<ZodTypeAny>>(
  schema: T,
  config: F0FieldConfig
): T & F0ZodType<T>

/**
 * Nullable wrapper - inherits inner type's config
 */
export function f0FormField<T extends z.ZodNullable<ZodTypeAny>>(
  schema: T,
  config: F0FieldConfig
): T & F0ZodType<T>

/**
 * Default wrapper - inherits inner type's config
 */
export function f0FormField<T extends z.ZodDefault<ZodTypeAny>>(
  schema: T,
  config: F0FieldConfig
): T & F0ZodType<T>

/**
 * Custom field - works with any schema type
 * Place before fallback to ensure proper type inference for fieldConfig
 * TValue is inferred from the Zod schema to provide typed value and onChange
 */
export function f0FormField<T extends ZodTypeAny, TConfig = undefined>(
  schema: T,
  config: F0CustomFieldConfig<z.infer<T>, TConfig>
): T & F0ZodType<T>

/**
 * Fallback for any other schema type
 */
export function f0FormField<T extends ZodTypeAny>(
  schema: T,
  config: F0FieldConfig
): T & F0ZodType<T>

/**
 * Implementation
 */
export function f0FormField<T extends ZodTypeAny>(
  schema: T,
  config: F0FieldConfig
): T & F0ZodType<T> {
  // Store config in WeakMap
  f0ConfigMap.set(schema, config)

  // Add config directly to schema object for easier access
  const extendedSchema = schema as T & F0ZodType<T>
  extendedSchema._f0Config = config
  extendedSchema._innerSchema = schema

  return extendedSchema
}

/**
 * Get F0 config from a schema
 */
export function getF0Config(schema: ZodTypeAny): F0FieldConfig | undefined {
  // Try direct property first (schema may have been extended with f0FormField())
  const schemaWithConfig = schema as unknown as { _f0Config?: F0FieldConfig }
  if (schemaWithConfig._f0Config) {
    return schemaWithConfig._f0Config
  }

  // Fallback to WeakMap
  return f0ConfigMap.get(schema)
}

/**
 * Check if a schema has F0 config
 */
export function hasF0Config(schema: ZodTypeAny): boolean {
  return getF0Config(schema) !== undefined
}

/**
 * Unwrap optional, nullable, default wrappers to get the inner schema
 * Uses _def.typeName for reliable type checking across module boundaries
 */
export function unwrapZodSchema(schema: ZodTypeAny): ZodTypeAny {
  let innerSchema = schema
  while (
    isZodType(innerSchema, "ZodOptional") ||
    isZodType(innerSchema, "ZodNullable") ||
    isZodType(innerSchema, "ZodDefault")
  ) {
    innerSchema = innerSchema._def.innerType
  }
  return innerSchema
}

/**
 * Infer field type from Zod schema when not explicitly specified
 */
export function inferFieldType(
  schema: ZodTypeAny,
  config: F0FieldConfig
): F0FieldType {
  // If explicitly specified, use that
  if ("fieldType" in config && config.fieldType) {
    return config.fieldType
  }

  // If options or source are provided, it's a select
  if (
    ("options" in config && config.options) ||
    ("source" in config && config.source)
  ) {
    return "select"
  }

  // Unwrap optional, nullable, default wrappers
  const innerSchema = unwrapZodSchema(schema)

  // Infer from Zod type using _def.typeName (reliable across module boundaries)
  if (isZodType(innerSchema, "ZodString")) {
    // Check if textarea based on rows config
    if ("rows" in config && config.rows) {
      return "textarea"
    }
    return "text"
  }

  if (isZodType(innerSchema, "ZodNumber")) {
    return "number"
  }

  if (isZodType(innerSchema, "ZodBoolean")) {
    // Default to switch for boolean, can be overridden with fieldType: "checkbox"
    return "switch"
  }

  if (isZodType(innerSchema, "ZodDate")) {
    return "date"
  }

  if (isZodType(innerSchema, "ZodEnum")) {
    return "select"
  }

  if (isZodType(innerSchema, "ZodArray")) {
    // Arrays with options or source are multi-select
    if (
      ("options" in config && config.options) ||
      ("source" in config && config.source)
    ) {
      return "select"
    }
  }

  if (
    isZodType(innerSchema, "ZodObject") &&
    "render" in config &&
    config.render
  ) {
    return "custom"
  }

  // Default to text
  return "text"
}

/**
 * Type helper for creating a form schema with F0 fields
 */
export type F0FormSchema<T extends Record<string, ZodTypeAny>> = z.ZodObject<T>

/**
 * Extract the inferred type from an F0 form schema
 */
export type InferF0FormValues<T extends z.ZodObject<z.ZodRawShape>> = z.infer<T>
