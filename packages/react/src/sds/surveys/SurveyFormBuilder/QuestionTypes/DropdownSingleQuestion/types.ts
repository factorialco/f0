import { BaseQuestionOnChangeParams } from "../../types"
import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"

export type DropdownSingleQuestionOnChangeParams =
  BaseQuestionOnChangeParams & {
    type: "dropdown-single"
    value?: string | null
    datasetKey?: string
    showSearchBox?: boolean
    searchBoxPlaceholder?: string
  }

export type DropdownSingleQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    type: "dropdown-single"
    datasetKey: string
    value?: string | null
    showSearchBox?: boolean
    searchBoxPlaceholder?: string
  }
