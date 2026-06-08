import type {
  DurationFieldConfig,
  DurationInputSize,
  DurationUnit,
} from "@/components/F0DurationInput/types"

import type {
  CommonRenderIfCondition,
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  NumberRenderIfCondition,
} from "../types"

// ============================================================================
// Duration Field RenderIf Conditions
// ============================================================================

export type DurationRenderIfCondition = NumberRenderIfCondition

export type DurationFieldRenderIf =
  | DurationRenderIfCondition
  | CommonRenderIfCondition
  | F0BaseFieldRenderIfFunction

// ============================================================================
// Duration Field Config and Type
// ============================================================================

export interface F0DurationConfig {
  units?: DurationUnit[]
  fields?: Partial<Record<DurationUnit, DurationFieldConfig>>
  readonly?: boolean
  size?: DurationInputSize
}

export type F0DurationField = F0BaseField &
  F0DurationConfig & {
    type: "duration"
    /** Conditional rendering based on another field's value */
    renderIf?: DurationFieldRenderIf
  }
