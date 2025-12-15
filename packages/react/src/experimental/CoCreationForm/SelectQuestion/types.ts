import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { BaseQuestionOnChangeParams, SelectQuestionOption } from "../types"

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

export type SelectQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
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
