import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { BaseQuestionOnChangeParams, SelectQuestionOption } from "../types"

export type DropdownSingleQuestionOnChangeParams =
  BaseQuestionOnChangeParams & {
    type: "dropdown-single"
    options?: SelectQuestionOption[]
    value?: string | null
  }

export type DropdownSingleQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    type: "dropdown-single"
    options: SelectQuestionOption[]
    value?: string | null
  }
