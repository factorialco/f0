import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { BaseQuestionOnChangeParams, SelectQuestionOption } from "../types"

export type DataSelectQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  type: "data-select"
  options?: SelectQuestionOption[]
  value?: string | null
}

export type DataSelectQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    type: "data-select"
    options: SelectQuestionOption[]
    value?: string | null
  }
