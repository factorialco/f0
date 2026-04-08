import type { SelectQuestionOption } from "../../types"
import { BaseQuestionOnChangeParams } from "../../types"
import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"

export type DropdownMultiQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  type: "dropdown-multi"
  value?: string[] | null
  showSearchBox?: boolean
  searchBoxPlaceholder?: string
} & ({ datasetKey: string } | { options: SelectQuestionOption[] })

export type DropdownMultiQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    type: "dropdown-multi"
    value?: string[] | null
    showSearchBox?: boolean
    searchBoxPlaceholder?: string
  } & ({ datasetKey: string } | { options: SelectQuestionOption[] })
