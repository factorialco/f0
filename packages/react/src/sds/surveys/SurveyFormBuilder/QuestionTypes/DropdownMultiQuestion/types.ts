import { BaseQuestionOnChangeParams } from "../../types"
import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"

export type DropdownMultiQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  type: "dropdown-multi"
  value?: string[] | null
  datasetKey?: string
  showSearchBox?: boolean
  searchBoxPlaceholder?: string
}

export type DropdownMultiQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    type: "dropdown-multi"
    datasetKey: string
    value?: string[] | null
    showSearchBox?: boolean
    searchBoxPlaceholder?: string
  }
