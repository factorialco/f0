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
 * Base props passed to all custom field render functions
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
 * @typeParam TConfig - Type of the custom configuration object
 */
export type CustomFieldRenderProps<TConfig = undefined> =
  CustomFieldRenderPropsBase & {
    /** Custom configuration passed via fieldConfig */
    config: TConfig
  }

// ============================================================================
// Custom Field Config and Type
// ============================================================================

/**
 * Custom config without fieldConfig (render receives config: undefined)
 */
export interface F0CustomConfigBase {
  /** Render function for the custom component */
  render: (props: CustomFieldRenderProps<undefined>) => ReactNode
}

/**
 * Custom config with fieldConfig (render receives typed config)
 */
export interface F0CustomConfigWithFieldConfig<TConfig> {
  /** Custom configuration to pass to the render function */
  fieldConfig: TConfig
  /** Render function for the custom component */
  render: (props: CustomFieldRenderProps<TConfig>) => ReactNode
}

/**
 * F0 config options specific to custom fields
 *
 * @typeParam TConfig - Type of the custom configuration object
 *
 * @example Without fieldConfig:
 * ```tsx
 * f0FormField(z.string(), {
 *   label: "Employee",
 *   fieldType: "custom",
 *   render: ({ value, onChange }) => (
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
export type F0CustomConfig<TConfig = undefined> = TConfig extends undefined
  ? F0CustomConfigBase
  : F0CustomConfigWithFieldConfig<TConfig>

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
