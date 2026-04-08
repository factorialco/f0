import type { SelectQuestionOption } from "../../types"
import { BaseQuestionOnChangeParams } from "../../types"
import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"

export const SEARCH_BOX_OPTIONS_THRESHOLD = 8

export type DropdownSingleQuestionOnChangeParams =
  BaseQuestionOnChangeParams & {
    type: "dropdown-single"
    value?: string | null
    datasetKey?: string
    options?: SelectQuestionOption[]
    showSearchBox?: boolean
    searchBoxPlaceholder?: string
  }

export type DropdownSingleQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    type: "dropdown-single"
    datasetKey?: string
    options?: SelectQuestionOption[]
    value?: string | null
    showSearchBox?: boolean
    searchBoxPlaceholder?: string
  }
