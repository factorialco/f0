import type {
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  CommonRenderIfCondition,
} from "../types"

// ============================================================================
// CardSelect Field RenderIf Conditions
// ============================================================================

interface CardSelectRenderIfBase {
  fieldId: string
}

export type CardSelectRenderIfCondition = CardSelectRenderIfBase &
  ({ equalsTo: string } | { notEqualsTo: string } | { isEmpty: boolean })

export type CardSelectFieldRenderIf =
  | CardSelectRenderIfCondition
  | CommonRenderIfCondition
  | F0BaseFieldRenderIfFunction

// ============================================================================
// CardSelect Field Config and Type
// ============================================================================

export interface CardSelectOption {
  value: string
  label: string
  description?: string
}

export interface F0CardSelectConfig {
  options: CardSelectOption[]
  hideLabel?: boolean
}

export type F0CardSelectField = F0BaseField & {
  type: "cardSelect"
  options: CardSelectOption[]
  hideLabel?: boolean
  renderIf?: CardSelectFieldRenderIf
}
