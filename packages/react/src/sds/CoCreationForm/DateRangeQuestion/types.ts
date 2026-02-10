import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { BaseQuestionOnChangeParams } from "../types"

export type DateRangeValue = {
  from: Date
  to: Date
}

export type DateRangeQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  type: "daterange"
  value?: DateRangeValue | null
}

export type DateRangeQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    type: "daterange"
    value?: DateRangeValue | null
  }
