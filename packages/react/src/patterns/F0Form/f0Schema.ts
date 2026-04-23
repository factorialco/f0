import { z, ZodTypeAny } from "zod"

import type { F0AlertProps } from "@/components/F0Alert/types"
import type {
  DurationFieldConfig,
  DurationInputSize,
  DurationUnit,
} from "@/components/F0DurationInput/types"
import type { InputFieldStatus } from "@/ui/InputField/types"

import type { F0CardSelectConfig } from "./fields/cardSelect/types"
import type { F0CheckboxConfig } from "./fields/checkbox/types"
import type { F0CustomConfig } from "./fields/custom/types"
import type {
  F0DateConfig,
  F0DateTimeConfig,
  F0TimeConfig,
} from "./fields/date/types"
import type { F0DateRangeConfig } from "./fields/daterange/types"
import type { F0FileConfig } from "./fields/file/types"
import type { F0NumberConfig } from "./fields/number/types"
import type { F0RichTextConfig } from "./fields/richtext/types"
import type { F0SelectConfig } from "./fields/select/types"
import type { F0SwitchConfig } from "./fields/switch/types"
import type { F0TextConfig } from "./fields/text/types"
import type { F0TextareaConfig } from "./fields/textarea/types"
import type {
  F0BaseFieldDisabledProp,
  F0BaseFieldRenderIfProp,
} from "./fields/types"

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
  | "ZodEffects"

/**
 * Check if a schema is of a specific Zod type using _def.typeName
 * This is more reliable than instanceof across module boundaries
 */
export function isZodType(schema: ZodTypeAny, typeName: ZodTypeName): boolean {
  return schema._def?.typeName === typeName
}

/**
 * Unwrap a ZodEffects (created by .refine(), .transform(), etc.) to get the underlying ZodObject.
 * If the schema is already a ZodObject, returns it as-is.
 * This allows F0Form to work with refined schemas.
 */
export function unwrapToZodObject<T extends z.ZodRawShape>(
  schema: z.ZodObject<T> | z.ZodEffects<z.ZodObject<T>>
): z.ZodObject<T> {
  if (isZodType(schema, "ZodEffects")) {
    // ZodEffects has the inner schema in _def.schema
    return (schema as z.ZodEffects<z.ZodObject<T>>)._def.schema
  }
  return schema as z.ZodObject<T>
}

/**
 * Field types for rendering
 */
export type F0FieldType =
  | "text"
  | "number"
  | "percentage"
  | "money"
  | "duration"
  | "textarea"
  | "select"
  | "checkbox"
  | "switch"
  | "date"
  | "time"
  | "datetime"
  | "daterange"
  | "richtext"
  | "file"
  | "cardSelect"
  | "custom"

/**
 * Base configuration shared across all field types.
 * Position is automatically derived from field declaration order in the schema.
 */
/**
 * Alert props returned by the field alert callback.
 * Derived from F0AlertProps with `variant` defaulting to "info".
 */
export type F0FieldAlertProps = Omit<F0AlertProps, "variant"> & {
  variant?: F0AlertProps["variant"]
}

/**
 * Callback that evaluates whether to show an alert below the field.
 * Receives the field's current value and all form values.
 * Return alert props to show, or null/undefined to hide.
 */
export type F0FieldAlertFunction = (context: {
  fieldValue: unknown
  values: Record<string, unknown>
}) => F0FieldAlertProps | null | undefined

/**
 * Alert configuration for a field.
 * Can be static props (always shown) or a callback for conditional display.
 */
export type F0FieldAlert = F0FieldAlertProps | F0FieldAlertFunction

/**
 * Configuration for a "more info" link displayed below the help text.
 */
export interface F0MoreInfoLink {
  /** URL the link points to */
  href: string
  /** Link label (defaults to "More information") */
  label?: string
}

export interface F0BaseConfig {
  /** Label displayed above the field */
  label: string
  /** Section ID to group field under (null = root level) */
  section?: string
  /** Placeholder text for the input */
  placeholder?: string
  /** Helper text displayed below the field */
  helpText?: string
  /** Optional non-validation field status (warning/info/error/default) */
  status?: InputFieldStatus
  /**
   * Whether the field is disabled.
   * Can be a boolean or a function that receives form values.
   * @example
   * // Static disabled
   * disabled: true
   *
   * // Dynamic disabled based on other field values
   * disabled: ({ values }) => values.status === 'readonly'
   */
  disabled?: F0BaseFieldDisabledProp
  /**
   * When true, resets the field to its default value when it becomes disabled.
   * Useful for clearing dependent fields when their controlling field changes.
   * @default false
   */
  resetOnDisable?: boolean
  /** Row ID for horizontal grouping with other fields */
  row?: string
  /**
   * Conditional rendering based on another field's value.
   * Can be a condition object or a function that receives form values.
   * @example
   * // Condition object
   * renderIf: { fieldId: 'status', equalsTo: 'active' }
   *
   * // Dynamic renderIf based on form values
   * renderIf: ({ values }) => values.status === 'active'
   */
  renderIf?: F0BaseFieldRenderIfProp
  /**
   * Alert displayed below the field.
   * Can be static props (always shown) or a callback for conditional display.
   * @example
   * // Static alert (always visible)
   * alert: { title: "Note", description: "This field is important" }
   *
   * // Conditional alert based on field value
   * alert: ({ fieldValue }) =>
   *   fieldValue === 0
   *     ? { title: "Heads up", description: "Value is zero", variant: "warning" }
   *     : null
   */
  alert?: F0FieldAlert
  /**
   * Name identifying a reusable custom field type.
   * When set, the form-level `renderCustomField` callback is invoked to provide
   * field-specific configuration (e.g. data source, options) or a custom component.
   */
  customFieldName?: string
}

// Re-export field-specific config types
export type {
  F0TextConfig,
  F0NumberConfig,
  F0TextareaConfig,
  F0SelectConfig,
  F0CardSelectConfig,
  F0CheckboxConfig,
  F0SwitchConfig,
  F0DateConfig,
  F0TimeConfig,
  F0DateRangeConfig,
  F0RichTextConfig,
  F0CustomConfig,
  F0FileConfig,
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
  F0SelectConfig<string, R> & {
    fieldType?: "select"
  }

/**
 * Config for string fields rendered as grouped radio cards
 */
export type F0StringCardSelectConfig = F0BaseConfig &
  F0CardSelectConfig & {
    fieldType: "cardSelect"
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
  | F0StringCardSelectConfig
  | F0StringFileConfig
  | F0CustomFieldConfig<TValue, TConfig>

/**
 * Config for number fields - number input
 */
export type F0NumberInputConfig = F0BaseConfig &
  F0NumberConfig & {
    fieldType?: "number" | "percentage"
  }

/**
 * Config for money fields - number input with currency suffix
 */
export type F0NumberMoneyConfig = F0BaseConfig &
  F0NumberConfig & {
    fieldType: "money"
    currency: string
  }

/**
 * Config for duration fields (stores total seconds as number)
 */
export type F0DurationFieldConfig = F0BaseConfig & {
  fieldType: "duration"
  units?: DurationUnit[]
  fields?: Partial<Record<DurationUnit, DurationFieldConfig>>
  readonly?: boolean
  size?: DurationInputSize
}

/**
 * Config for number fields - select (for selecting numeric values)
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export type F0NumberSelectConfig<
  R extends Record<string, unknown> = Record<string, unknown>,
> = F0BaseConfig &
  F0SelectConfig<number, R> & {
    fieldType: "select"
  }

/**
 * Config for number fields
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export type F0NumberFieldConfig<
  R extends Record<string, unknown> = Record<string, unknown>,
> =
  | F0NumberInputConfig
  | F0NumberMoneyConfig
  | F0NumberSelectConfig<R>
  | F0DurationFieldConfig

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
 * Config for time fields (stores as Date, displays as HH:mm)
 */
export type F0TimeFieldConfig = F0BaseConfig &
  F0TimeConfig & {
    fieldType: "time"
  }

/**
 * Config for datetime fields
 */
export type F0DateTimeFieldConfig = F0BaseConfig &
  F0DateTimeConfig & {
    fieldType: "datetime"
  }

/**
 * Union of all date/time/datetime field configs for z.date()
 */
export type F0DateOrDateTimeFieldConfig =
  | F0DateFieldConfig
  | F0TimeFieldConfig
  | F0DateTimeFieldConfig

/**
 * Config for date range fields
 */
export type F0DateRangeFieldConfig = F0BaseConfig &
  F0DateRangeConfig & {
    fieldType: "daterange"
  }

/**
 * Config for array fields with select (multi-select)
 * @typeParam T - The value type (string or number)
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export type F0ArraySelectConfig<
  T extends string | number = string,
  R extends Record<string, unknown> = Record<string, unknown>,
> = F0BaseConfig &
  F0SelectConfig<T, R> & {
    fieldType?: "select"
  }

/**
 * Config for array fields (multi-select or multi-file)
 * @typeParam T - The value type (string or number)
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export type F0ArrayConfig<
  T extends string | number = string,
  R extends Record<string, unknown> = Record<string, unknown>,
> = F0ArraySelectConfig<T, R> | F0ArrayFileConfig

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
 * Config for file fields (single file upload, form value is a string identifier)
 */
export type F0StringFileConfig = F0BaseConfig &
  F0FileConfig & {
    fieldType: "file"
    multiple?: false
  }

/**
 * Config for file fields (multiple file upload, form value is string[])
 */
export type F0ArrayFileConfig = F0BaseConfig &
  F0FileConfig & {
    fieldType: "file"
    multiple: true
  }

/**
 * Union of all file field configs
 */
export type F0FileFieldConfig = F0StringFileConfig | F0ArrayFileConfig

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
 * @typeParam T - The value type for select fields (string or number)
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export type F0FieldConfig<
  T extends string | number = string | number,
  R extends Record<string, unknown> = Record<string, unknown>,
> =
  | F0StringConfig<string, undefined, R>
  | F0NumberFieldConfig<R>
  | F0BooleanConfig
  | F0DateFieldConfig
  | F0TimeFieldConfig
  | F0DateTimeFieldConfig
  | F0ArrayConfig<T, R>
  | F0FileFieldConfig
  | F0ObjectConfig
  | F0StringCardSelectConfig

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
 * Number field - number input, duration, or select
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export function f0FormField<
  T extends z.ZodNumber,
  R extends Record<string, unknown> = Record<string, unknown>,
>(schema: T, config: F0NumberFieldConfig<R>): T & F0ZodType<T>

/**
 * Boolean field - checkbox or switch
 */
export function f0FormField<T extends z.ZodBoolean>(
  schema: T,
  config: F0BooleanConfig
): T & F0ZodType<T>

/**
 * Date or DateTime field
 */
export function f0FormField<T extends z.ZodDate>(
  schema: T,
  config: F0DateOrDateTimeFieldConfig
): T & F0ZodType<T>

/**
 * Enum field - select
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export function f0FormField<
  T extends z.ZodEnum<[string, ...string[]]>,
  R extends Record<string, unknown> = Record<string, unknown>,
>(
  schema: T,
  config: F0StringSelectConfig<R> | F0StringCardSelectConfig
): T & F0ZodType<T>

/**
 * Array field - multi-select
 * @typeParam V - The element value type (string or number)
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export function f0FormField<
  T extends z.ZodArray<ZodTypeAny>,
  V extends string | number = string,
  R extends Record<string, unknown> = Record<string, unknown>,
>(schema: T, config: F0ArrayConfig<V, R>): T & F0ZodType<T>

/**
 * Object field - richtext or custom
 */
export function f0FormField<
  T extends z.ZodObject<z.ZodRawShape>,
  TConfig = undefined,
>(schema: T, config: F0ObjectConfig<z.infer<T>, TConfig>): T & F0ZodType<T>

/**
 * Optional wrapper - inherits inner type's config
 * @typeParam V - The value type for select fields (string or number)
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export function f0FormField<
  T extends z.ZodOptional<ZodTypeAny>,
  V extends string | number = string | number,
  R extends Record<string, unknown> = Record<string, unknown>,
>(schema: T, config: F0FieldConfig<V, R>): T & F0ZodType<T>

/**
 * Nullable wrapper - inherits inner type's config
 * @typeParam V - The value type for select fields (string or number)
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export function f0FormField<
  T extends z.ZodNullable<ZodTypeAny>,
  V extends string | number = string | number,
  R extends Record<string, unknown> = Record<string, unknown>,
>(schema: T, config: F0FieldConfig<V, R>): T & F0ZodType<T>

/**
 * Default wrapper - inherits inner type's config
 * @typeParam V - The value type for select fields (string or number)
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export function f0FormField<
  T extends z.ZodDefault<ZodTypeAny>,
  V extends string | number = string | number,
  R extends Record<string, unknown> = Record<string, unknown>,
>(schema: T, config: F0FieldConfig<V, R>): T & F0ZodType<T>

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
 * @typeParam V - The value type for select fields (string or number)
 * @typeParam R - Record type for data source (when using source instead of options)
 */
export function f0FormField<
  T extends ZodTypeAny,
  V extends string | number = string | number,
  R extends Record<string, unknown> = Record<string, unknown>,
>(schema: T, config: F0FieldConfig<V, R>): T & F0ZodType<T>

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
 * Extract the inferred type from an F0 form schema
 */
export type InferF0FormValues<T extends z.ZodObject<z.ZodRawShape>> = z.infer<T>

// ============================================================================
// f0FormField shortcut helpers
// ============================================================================

/**
 * Shortcut helpers for common field types.
 * These merge with the `f0FormField` function via TypeScript declaration merging,
 * eliminating the need to manually create Zod schemas for the most common cases.
 *
 * @example
 * // Instead of:
 * name: f0FormField(z.string(), { label: "Name" })
 * // Write:
 * name: f0FormField.text({ label: "Name" })
 *
 * // Optional fields:
 * nickname: f0FormField.text({ label: "Nickname", optional: true })
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace f0FormField {
  // ---- text ----------------------------------------------------------------

  /** @internal */
  type TextConfig = Omit<F0StringTextConfig, "fieldType"> & {
    optional?: boolean
    minLength?: number
    maxLength?: number
  }

  export function text(
    config: TextConfig & { optional: true }
  ): z.ZodOptional<z.ZodString> & F0ZodType<z.ZodOptional<z.ZodString>>
  export function text(
    config: TextConfig & { optional?: false | undefined }
  ): z.ZodString & F0ZodType<z.ZodString>
  export function text({
    optional,
    minLength,
    maxLength,
    ...config
  }: TextConfig) {
    let schema = z.string()
    if (minLength !== undefined) schema = schema.min(minLength)
    if (maxLength !== undefined) schema = schema.max(maxLength)
    const finalSchema = optional ? schema.optional() : schema
    return f0FormField(finalSchema as never, config as never)
  }

  // ---- email ---------------------------------------------------------------

  /** @internal */
  type EmailConfig = Omit<F0StringTextConfig, "fieldType"> & {
    optional?: boolean
  }

  export function email(
    config: EmailConfig & { optional: true }
  ): z.ZodOptional<z.ZodString> & F0ZodType<z.ZodOptional<z.ZodString>>
  export function email(
    config: EmailConfig & { optional?: false | undefined }
  ): z.ZodString & F0ZodType<z.ZodString>
  export function email({ optional, ...config }: EmailConfig) {
    const schema = optional ? z.string().email().optional() : z.string().email()
    return f0FormField(schema as never, config as never)
  }

  // ---- textarea ------------------------------------------------------------

  /** @internal */
  type TextareaConfig = Omit<F0StringTextareaConfig, "fieldType"> & {
    optional?: boolean
  }

  export function textarea(
    config: TextareaConfig & { optional: true }
  ): z.ZodOptional<z.ZodString> & F0ZodType<z.ZodOptional<z.ZodString>>
  export function textarea(
    config: TextareaConfig & { optional?: false | undefined }
  ): z.ZodString & F0ZodType<z.ZodString>
  export function textarea({ optional, ...config }: TextareaConfig) {
    const schema = optional ? z.string().optional() : z.string()
    return f0FormField(
      schema as never,
      { ...config, fieldType: "textarea" } as never
    )
  }

  // ---- number --------------------------------------------------------------

  /** @internal */
  type NumberConfig = Omit<F0NumberInputConfig, "fieldType"> & {
    optional?: boolean
    min?: number
    max?: number
    isInt?: boolean
  }

  export function number(
    config: NumberConfig & { optional: true }
  ): z.ZodOptional<z.ZodNumber> & F0ZodType<z.ZodOptional<z.ZodNumber>>
  export function number(
    config: NumberConfig & { optional?: false | undefined }
  ): z.ZodNumber & F0ZodType<z.ZodNumber>
  export function number({
    optional,
    min,
    max,
    isInt,
    ...config
  }: NumberConfig) {
    let schema = z.number()
    if (isInt) schema = schema.int()
    if (min !== undefined) schema = schema.min(min)
    if (max !== undefined) schema = schema.max(max)
    const finalSchema = optional ? schema.optional() : schema
    return f0FormField(finalSchema as never, config as never)
  }

  // ---- switch (boolean default) -------------------------------------------

  /** @internal */
  type SwitchConfig = Omit<F0BooleanSwitchConfig, "fieldType"> & {
    optional?: boolean
  }

  export function boolean(
    config: SwitchConfig & { optional: true }
  ): z.ZodOptional<z.ZodBoolean> & F0ZodType<z.ZodOptional<z.ZodBoolean>>
  export function boolean(
    config: SwitchConfig & { optional?: false | undefined }
  ): z.ZodBoolean & F0ZodType<z.ZodBoolean>
  export function boolean({ optional, ...config }: SwitchConfig) {
    const schema = optional ? z.boolean().optional() : z.boolean()
    return f0FormField(
      schema as never,
      { ...config, fieldType: "switch" } as never
    )
  }

  // ---- checkbox ------------------------------------------------------------

  /** @internal */
  type CheckboxConfig = Omit<F0BooleanCheckboxConfig, "fieldType"> & {
    optional?: boolean
  }

  export function checkbox(
    config: CheckboxConfig & { optional: true }
  ): z.ZodOptional<z.ZodBoolean> & F0ZodType<z.ZodOptional<z.ZodBoolean>>
  export function checkbox(
    config: CheckboxConfig & { optional?: false | undefined }
  ): z.ZodBoolean & F0ZodType<z.ZodBoolean>
  export function checkbox({ optional, ...config }: CheckboxConfig) {
    const schema = optional ? z.boolean().optional() : z.boolean()
    return f0FormField(
      schema as never,
      { ...config, fieldType: "checkbox" } as never
    )
  }

  // ---- date ----------------------------------------------------------------

  /** @internal */
  type DateConfig = Omit<F0DateFieldConfig, "fieldType"> & {
    optional?: boolean
  }

  export function date(
    config: DateConfig & { optional: true }
  ): z.ZodOptional<z.ZodDate> & F0ZodType<z.ZodOptional<z.ZodDate>>
  export function date(
    config: DateConfig & { optional?: false | undefined }
  ): z.ZodDate & F0ZodType<z.ZodDate>
  export function date({ optional, ...config }: DateConfig) {
    const schema = optional ? z.date().optional() : z.date()
    return f0FormField(schema as never, config as never)
  }

  // ---- url -----------------------------------------------------------------

  /** @internal */
  type UrlConfig = Omit<F0StringTextConfig, "fieldType"> & {
    optional?: boolean
  }

  export function url(
    config: UrlConfig & { optional: true }
  ): z.ZodOptional<z.ZodString> & F0ZodType<z.ZodOptional<z.ZodString>>
  export function url(
    config: UrlConfig & { optional?: false | undefined }
  ): z.ZodString & F0ZodType<z.ZodString>
  export function url({ optional, ...config }: UrlConfig) {
    const schema = optional ? z.string().url().optional() : z.string().url()
    return f0FormField(schema as never, config as never)
  }

  // ---- money ---------------------------------------------------------------

  /** @internal */
  type MoneyConfig = Omit<F0NumberMoneyConfig, "fieldType"> & {
    optional?: boolean
  }

  export function money(
    config: MoneyConfig & { optional: true }
  ): z.ZodOptional<z.ZodNumber> & F0ZodType<z.ZodOptional<z.ZodNumber>>
  export function money(
    config: MoneyConfig & { optional?: false | undefined }
  ): z.ZodNumber & F0ZodType<z.ZodNumber>
  export function money({ optional, ...config }: MoneyConfig) {
    const schema = optional ? z.number().optional() : z.number()
    return f0FormField(
      schema as never,
      { ...config, fieldType: "money" } as never
    )
  }

  // ---- percentage ----------------------------------------------------------

  /** @internal */
  type PercentageConfig = Omit<F0NumberInputConfig, "fieldType"> & {
    optional?: boolean
    min?: number
    max?: number
  }

  export function percentage(
    config: PercentageConfig & { optional: true }
  ): z.ZodOptional<z.ZodNumber> & F0ZodType<z.ZodOptional<z.ZodNumber>>
  export function percentage(
    config: PercentageConfig & { optional?: false | undefined }
  ): z.ZodNumber & F0ZodType<z.ZodNumber>
  export function percentage({
    optional,
    min,
    max,
    ...config
  }: PercentageConfig) {
    let schema = z.number()
    if (min !== undefined) schema = schema.min(min)
    if (max !== undefined) schema = schema.max(max)
    const finalSchema = optional ? schema.optional() : schema
    return f0FormField(
      finalSchema as never,
      { ...config, fieldType: "percentage" } as never
    )
  }

  // ---- cardSelect ----------------------------------------------------------

  /** @internal */
  type CardSelectConfig<V extends string = string> = Omit<
    F0StringCardSelectConfig,
    "fieldType" | "options"
  > & {
    options: Array<{ value: V } & Record<string, unknown>>
    optional?: boolean
  }

  export function cardSelect<const V extends string>(
    config: CardSelectConfig<V> & { optional: true }
  ): z.ZodOptional<z.ZodEnum<[V, ...V[]]>> &
    F0ZodType<z.ZodOptional<z.ZodEnum<[V, ...V[]]>>>
  export function cardSelect<const V extends string>(
    config: CardSelectConfig<V> & { optional?: false | undefined }
  ): z.ZodEnum<[V, ...V[]]> & F0ZodType<z.ZodEnum<[V, ...V[]]>>
  export function cardSelect<const V extends string>(
    config: CardSelectConfig<V>
  ) {
    if (config.options.length === 0) {
      throw new Error(
        "f0FormField.cardSelect requires at least one option to build a Zod enum"
      )
    }
    const { optional, ...rest } = config
    const values = rest.options.map((o) => o.value) as [V, ...V[]]
    const schema = optional ? z.enum(values).optional() : z.enum(values)
    return f0FormField(
      schema as never,
      { ...rest, fieldType: "cardSelect" } as never
    ) as never
  }

  // ---- file ----------------------------------------------------------------

  /** @internal */
  type FileConfig = Omit<F0StringFileConfig, "fieldType" | "multiple"> & {
    optional?: boolean
  }

  export function file(
    config: FileConfig & { optional: true }
  ): z.ZodOptional<z.ZodString> & F0ZodType<z.ZodOptional<z.ZodString>>
  export function file(
    config: FileConfig & { optional?: false | undefined }
  ): z.ZodString & F0ZodType<z.ZodString>
  export function file({ optional, ...config }: FileConfig) {
    const schema = optional ? z.string().optional() : z.string()
    return f0FormField(
      schema as never,
      { ...config, fieldType: "file", multiple: false } as never
    ) as never
  }

  // ---- multiFile -----------------------------------------------------------

  /** @internal */
  type MultiFileConfig = Omit<F0ArrayFileConfig, "fieldType" | "multiple"> & {
    optional?: boolean
  }

  export function multiFile(
    config: MultiFileConfig & { optional: true }
  ): z.ZodOptional<z.ZodArray<z.ZodString>> &
    F0ZodType<z.ZodOptional<z.ZodArray<z.ZodString>>>
  export function multiFile(
    config: MultiFileConfig & { optional?: false | undefined }
  ): z.ZodArray<z.ZodString> & F0ZodType<z.ZodArray<z.ZodString>>
  export function multiFile({ optional, ...config }: MultiFileConfig) {
    const schema = optional
      ? z.array(z.string()).optional()
      : z.array(z.string())
    return f0FormField(
      schema as never,
      { ...config, fieldType: "file", multiple: true } as never
    ) as never
  }

  // ---- requiredCheckbox ----------------------------------------------------

  /** @internal */
  type RequiredCheckboxConfig = Omit<F0BooleanCheckboxConfig, "fieldType">

  export function requiredCheckbox(
    config: RequiredCheckboxConfig
  ): z.ZodLiteral<true> & F0ZodType<z.ZodLiteral<true>> {
    return f0FormField(z.literal(true as const), {
      ...config,
      fieldType: "checkbox",
    }) as never
  }

  // ---- time ----------------------------------------------------------------

  /** @internal */
  type TimeConfig = Omit<F0TimeFieldConfig, "fieldType"> & {
    optional?: boolean
  }

  export function time(
    config: TimeConfig & { optional: true }
  ): z.ZodOptional<z.ZodDate> & F0ZodType<z.ZodOptional<z.ZodDate>>
  export function time(
    config: TimeConfig & { optional?: false | undefined }
  ): z.ZodDate & F0ZodType<z.ZodDate>
  export function time({ optional, ...config }: TimeConfig) {
    const schema = optional ? z.date().optional() : z.date()
    return f0FormField(
      schema as never,
      { ...config, fieldType: "time" } as never
    )
  }

  // ---- datetime ------------------------------------------------------------

  /** @internal */
  type DateTimeConfig = Omit<F0DateTimeFieldConfig, "fieldType"> & {
    optional?: boolean
  }

  export function datetime(
    config: DateTimeConfig & { optional: true }
  ): z.ZodOptional<z.ZodDate> & F0ZodType<z.ZodOptional<z.ZodDate>>
  export function datetime(
    config: DateTimeConfig & { optional?: false | undefined }
  ): z.ZodDate & F0ZodType<z.ZodDate>
  export function datetime({ optional, ...config }: DateTimeConfig) {
    const schema = optional ? z.date().optional() : z.date()
    return f0FormField(
      schema as never,
      { ...config, fieldType: "datetime" } as never
    )
  }

  // ---- duration ------------------------------------------------------------

  /** @internal */
  type DurationConfig = Omit<F0DurationFieldConfig, "fieldType"> & {
    optional?: boolean
  }

  export function duration(
    config: DurationConfig & { optional: true }
  ): z.ZodOptional<z.ZodNumber> & F0ZodType<z.ZodOptional<z.ZodNumber>>
  export function duration(
    config: DurationConfig & { optional?: false | undefined }
  ): z.ZodNumber & F0ZodType<z.ZodNumber>
  export function duration({ optional, ...config }: DurationConfig) {
    const schema = optional ? z.number().optional() : z.number()
    return f0FormField(
      schema as never,
      { ...config, fieldType: "duration" } as never
    )
  }

  // ---- dateRange -----------------------------------------------------------

  /** @internal */
  type DateRangeObjectSchema = z.ZodObject<{ from: z.ZodDate; to: z.ZodDate }>
  /** @internal */
  type DateRangeConfig = Omit<F0DateRangeFieldConfig, "fieldType"> & {
    optional?: boolean
  }

  export function dateRange(
    config: DateRangeConfig & { optional: true }
  ): z.ZodOptional<DateRangeObjectSchema> &
    F0ZodType<z.ZodOptional<DateRangeObjectSchema>>
  export function dateRange(
    config: DateRangeConfig & { optional?: false | undefined }
  ): DateRangeObjectSchema & F0ZodType<DateRangeObjectSchema>
  export function dateRange({ optional, ...config }: DateRangeConfig) {
    const baseSchema = z.object({ from: z.date(), to: z.date() })
    const schema = optional ? baseSchema.optional() : baseSchema
    return f0FormField(
      schema as never,
      { ...config, fieldType: "daterange" } as never
    )
  }

  // ---- richText ------------------------------------------------------------

  /** @internal */
  type RichTextObjectSchema = z.ZodObject<{
    value: z.ZodString
    mentionIds: z.ZodOptional<z.ZodArray<z.ZodString>>
  }>
  /** @internal */
  type RichTextConfig = Omit<F0RichTextFieldConfig, "fieldType"> & {
    optional?: boolean
  }

  export function richText(
    config: RichTextConfig & { optional: true }
  ): z.ZodOptional<RichTextObjectSchema> &
    F0ZodType<z.ZodOptional<RichTextObjectSchema>>
  export function richText(
    config: RichTextConfig & { optional?: false | undefined }
  ): RichTextObjectSchema & F0ZodType<RichTextObjectSchema>
  export function richText({ optional, ...config }: RichTextConfig) {
    const base = z.object({
      value: z.string(),
      mentionIds: z.array(z.string()).optional(),
    })
    const schema = optional ? base.optional() : base
    return f0FormField(
      schema as never,
      { ...config, fieldType: "richtext" } as never
    )
  }

  // ---- select (string values) ----------------------------------------------

  /** @internal */
  type SelectConfig<
    R extends Record<string, unknown> = Record<string, unknown>,
  > = Omit<F0StringSelectConfig<R>, "fieldType"> & { optional?: boolean }

  // With typed options → z.enum inferred from option values
  export function select<
    const V extends string,
    R extends Record<string, unknown> = Record<string, unknown>,
  >(
    config: SelectConfig<R> & {
      options: Array<{ value: V } & Record<string, unknown>>
      optional: true
    }
  ): z.ZodOptional<z.ZodEnum<[V, ...V[]]>> &
    F0ZodType<z.ZodOptional<z.ZodEnum<[V, ...V[]]>>>
  export function select<
    const V extends string,
    R extends Record<string, unknown> = Record<string, unknown>,
  >(
    config: SelectConfig<R> & {
      options: Array<{ value: V } & Record<string, unknown>>
      optional?: false | undefined
    }
  ): z.ZodEnum<[V, ...V[]]> & F0ZodType<z.ZodEnum<[V, ...V[]]>>
  // Without options → z.string()
  export function select<
    R extends Record<string, unknown> = Record<string, unknown>,
  >(
    config: SelectConfig<R> & { optional: true }
  ): z.ZodOptional<z.ZodString> & F0ZodType<z.ZodOptional<z.ZodString>>
  export function select<
    R extends Record<string, unknown> = Record<string, unknown>,
  >(
    config: SelectConfig<R> & { optional?: false | undefined }
  ): z.ZodString & F0ZodType<z.ZodString>
  export function select(config: unknown) {
    if (typeof config !== "object" || config === null) {
      throw new TypeError("f0FormField.select requires a config object")
    }
    const cfg = config as Record<string, unknown>
    const { optional, ...rest } = cfg
    const opts = Array.isArray(cfg.options) ? cfg.options : undefined
    if (opts && opts.length > 0) {
      const values = opts
        .filter(
          (o): o is { value: string } =>
            typeof o === "object" &&
            o !== null &&
            "value" in o &&
            typeof (o as { value: unknown }).value === "string"
        )
        .map((o) => o.value) as [string, ...string[]]
      if (values.length > 0) {
        const schema = optional ? z.enum(values).optional() : z.enum(values)
        return f0FormField(schema as never, rest as never)
      }
    }
    const schema = optional ? z.string().optional() : z.string()
    return f0FormField(schema as never, rest as never)
  }

  // ---- multiSelect ---------------------------------------------------------

  /** @internal */
  type MultiSelectConfig<
    V extends string | number = string,
    R extends Record<string, unknown> = Record<string, unknown>,
  > = Omit<F0ArraySelectConfig<V, R>, "fieldType"> & { optional?: boolean }

  // With typed options → z.array(z.enum(...)).min(1) inferred from option values
  export function multiSelect<const V extends string>(
    config: Omit<MultiSelectConfig<string>, "options"> & {
      options: Array<{ value: V } & Record<string, unknown>>
      optional: true
    }
  ): z.ZodOptional<z.ZodArray<z.ZodEnum<[V, ...V[]]>>> &
    F0ZodType<z.ZodOptional<z.ZodArray<z.ZodEnum<[V, ...V[]]>>>>
  export function multiSelect<const V extends string>(
    config: Omit<MultiSelectConfig<string>, "options"> & {
      options: Array<{ value: V } & Record<string, unknown>>
      optional?: false | undefined
    }
  ): z.ZodArray<z.ZodEnum<[V, ...V[]]>> &
    F0ZodType<z.ZodArray<z.ZodEnum<[V, ...V[]]>>>
  // Without options → z.array(z.string()).min(1)
  export function multiSelect<
    V extends string | number = string,
    R extends Record<string, unknown> = Record<string, unknown>,
  >(
    config: MultiSelectConfig<V, R> & { optional: true }
  ): z.ZodOptional<z.ZodArray<z.ZodString>> &
    F0ZodType<z.ZodOptional<z.ZodArray<z.ZodString>>>
  export function multiSelect<
    V extends string | number = string,
    R extends Record<string, unknown> = Record<string, unknown>,
  >(
    config: MultiSelectConfig<V, R> & { optional?: false | undefined }
  ): z.ZodArray<z.ZodString> & F0ZodType<z.ZodArray<z.ZodString>>
  export function multiSelect(config: unknown) {
    if (typeof config !== "object" || config === null) {
      throw new TypeError("f0FormField.multiSelect requires a config object")
    }
    const cfg = config as Record<string, unknown>
    const { optional, ...rest } = cfg
    const opts = Array.isArray(cfg.options) ? cfg.options : undefined
    if (opts && opts.length > 0) {
      const values = opts
        .filter(
          (o): o is { value: string } =>
            typeof o === "object" &&
            o !== null &&
            "value" in o &&
            typeof (o as { value: unknown }).value === "string"
        )
        .map((o) => o.value) as [string, ...string[]]
      if (values.length > 0) {
        const base = z.array(z.enum(values)).min(1)
        const schema = optional ? base.optional() : base
        return f0FormField(schema as never, rest as never)
      }
    }
    const base = z.array(z.string()).min(1)
    const schema = optional ? base.optional() : base
    return f0FormField(schema as never, rest as never)
  }

  // ---- requiredSwitch ------------------------------------------------------

  /** @internal */
  type RequiredSwitchConfig = Omit<F0BooleanSwitchConfig, "fieldType">

  export function requiredSwitch(
    config: RequiredSwitchConfig
  ): z.ZodLiteral<true> & F0ZodType<z.ZodLiteral<true>> {
    return f0FormField(z.literal(true as const), {
      ...config,
      fieldType: "switch",
    }) as never
  }
}
