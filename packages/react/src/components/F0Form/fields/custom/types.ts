import type { ReactNode } from "react"

import type { F0BaseField, CommonRenderIfCondition } from "../types"

// ============================================================================
// Custom Field RenderIf Conditions
// Custom only supports common conditions (isEmpty)
// ============================================================================

/**
 * All valid renderIf conditions for custom fields
 */
export type CustomFieldRenderIf = CommonRenderIfCondition

// ============================================================================
// Custom Field Render Props
// ============================================================================

/**
 * Base props passed to all custom field render functions (runtime type)
 */
export interface CustomFieldRenderPropsBase {
  /** Field id */
  id: string
  /** Field label */
  label: string
  /** Placeholder text */
  placeholder?: string
  /** Current field value */
  value: unknown
  /** Callback to update the value */
  onChange: (value: unknown) => void
  /** Callback for blur events */
  onBlur: () => void
  /** Error message if validation failed */
  error?: string
  /** Whether async validation is in progress */
  isValidating: boolean
  /** Whether the field is disabled */
  disabled?: boolean
}

/**
 * Props passed to the custom field render function
 *
 * @typeParam TValue - Type of the field value (inferred from Zod schema)
 * @typeParam TConfig - Type of the custom configuration object
 */
export interface CustomFieldRenderProps<TValue = unknown, TConfig = undefined> {
  /** Field id */
  id: string
  /** Field label */
  label: string
  /** Placeholder text */
  placeholder?: string
  /** Current field value */
  value: TValue
  /** Callback to update the value */
  onChange: (value: TValue) => void
  /** Callback for blur events */
  onBlur: () => void
  /** Error message if validation failed */
  error?: string
  /** Whether async validation is in progress */
  isValidating: boolean
  /** Whether the field is disabled */
  disabled?: boolean
  /** Custom configuration passed via fieldConfig */
  config: TConfig
}

// ============================================================================
// Custom Field Config and Type
// ============================================================================

/**
 * Custom config without fieldConfig (render receives config: undefined)
 *
 * @typeParam TValue - Type of the field value
 */
export interface F0CustomConfigBase<TValue = unknown> {
  /** Render function for the custom component */
  render: (props: CustomFieldRenderProps<TValue, undefined>) => ReactNode
}

/**
 * Custom config with fieldConfig (render receives typed config)
 *
 * @typeParam TValue - Type of the field value
 * @typeParam TConfig - Type of the fieldConfig object
 */
export interface F0CustomConfigWithFieldConfig<
  TValue = unknown,
  TConfig = unknown,
> {
  /** Custom configuration to pass to the render function */
  fieldConfig: TConfig
  /** Render function for the custom component */
  render: (props: CustomFieldRenderProps<TValue, TConfig>) => ReactNode
}

/**
 * F0 config options specific to custom fields
 *
 * @typeParam TValue - Type of the field value (inferred from Zod schema)
 * @typeParam TConfig - Type of the custom configuration object
 *
 * @example Without fieldConfig:
 * ```tsx
 * f0FormField(z.string(), {
 *   label: "Employee",
 *   fieldType: "custom",
 *   render: ({ value, onChange }) => (
 *     // value is typed as string
 *     <EmployeeSelector value={value} onChange={onChange} />
 *   ),
 * })
 * ```
 *
 * @example With fieldConfig:
 * ```tsx
 * f0FormField(z.array(z.number()), {
 *   label: "Select employees",
 *   fieldType: "custom",
 *   fieldConfig: {
 *     multiple: true,
 *     excludeCurrentEmployee: true,
 *   },
 *   render: ({ value, onChange, config }) => {
 *     // value is typed as number[]
 *     // config is typed as { multiple: boolean, excludeCurrentEmployee: boolean }
 *     return (
 *       <EmployeeSelector
 *         multiple={config.multiple}
 *         excludeCurrent={config.excludeCurrentEmployee}
 *         value={value}
 *         onChange={onChange}
 *       />
 *     )
 *   },
 * })
 * ```
 */
export type F0CustomConfig<
  TValue = unknown,
  TConfig = undefined,
> = TConfig extends undefined
  ? F0CustomConfigBase<TValue>
  : F0CustomConfigWithFieldConfig<TValue, TConfig>

/**
 * Custom field with all properties for rendering (runtime type)
 */
export type F0CustomField = F0BaseField & {
  type: "custom"
  /** Render function for the custom component */
  render: (props: CustomFieldRenderPropsBase & { config: unknown }) => ReactNode
  /** Custom configuration (if provided) */
  fieldConfig?: unknown
  /** Conditional rendering based on another field's value */
  renderIf?: CustomFieldRenderIf
}
