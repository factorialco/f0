import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { BaseQuestionOnChangeParams } from "../types"

export type SelectQuestionOption = {
  value: string
  label: string
  correct?: boolean
}

export type SelectQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  options: SelectQuestionOption[]
} & (
    | {
        type: "select"
        value?: string | null
      }
    | {
        type: "multi-select"
        value?: string[] | null
      }
  )

export type SelectQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    options: SelectQuestionOption[]
    onChange?: (params: SelectQuestionOnChangeParams) => void
  } & (
      | {
          type: "select"
          value?: string | null
        }
      | {
          type: "multi-select"
          value?: string[] | null
        }
    )
