import { BaseQuestionOnChangeParams, SelectQuestionOption } from "../../types"
import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"

export type DropdownSingleQuestionOnChangeParams =
  BaseQuestionOnChangeParams & {
    type: "dropdown-single"
    options?: SelectQuestionOption[]
    value?: string | null
    showSearchBox?: boolean
    searchBoxPlaceholder?: string
  }

export type DropdownSingleQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    type: "dropdown-single"
    options: SelectQuestionOption[]
    value?: string | null
    showSearchBox?: boolean
    searchBoxPlaceholder?: string
  }
