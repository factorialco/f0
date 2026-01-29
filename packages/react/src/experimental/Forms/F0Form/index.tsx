import { experimentalComponent } from "@/lib/experimental"

import { F0Form as F0FormComponent } from "./F0Form"

export * from "./types"
export {
  useFormDefinitionSchema,
  getFormDefinitionSchema,
  extractAllFields,
} from "./useFormDefinitionSchema"
export { evaluateRenderIf } from "./fields/utils"
export { generateAnchorId } from "./context"

// Re-export field types
export type {
  FieldDefinition,
  FieldType,
  RenderIfCondition,
  BaseFieldDefinition,
  TextFieldDefinition,
  NumberFieldDefinition,
  TextareaFieldDefinition,
  SelectFieldDefinition,
  CheckboxFieldDefinition,
  SwitchFieldDefinition,
} from "./fields/types"

import type { F0FormProps } from "./types"

/**
 * @experimental This is an experimental component, use it at your own risk
 */
export const F0Form = experimentalComponent("F0Form", F0FormComponent) as <
  TValues extends Record<string, unknown>,
>(
  props: F0FormProps<TValues>
) => React.ReactElement
