import type { SelectQuestionOption } from "../../types"
import { BaseQuestionOnChangeParams } from "../../types"
import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"

export type DropdownMultiQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  type: "dropdown-multi"
  value?: string[] | null
  datasetKey?: string
  options?: SelectQuestionOption[]
  showSearchBox?: boolean
  searchBoxPlaceholder?: string
}

export type DropdownMultiQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    type: "dropdown-multi"
    datasetKey?: string
    options?: SelectQuestionOption[]
    value?: string[] | null
    showSearchBox?: boolean
    searchBoxPlaceholder?: string
  }
