import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { BaseQuestionOnChangeParams, SelectQuestionOption } from "../types"

export type DropdownQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  options: SelectQuestionOption[]
} & (
    | {
        type: "dropdown"
        value?: string | null
      }
    | {
        type: "dropdown-multi"
        value?: string[] | null
      }
  )

export type DropdownQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    options: SelectQuestionOption[]
  } & (
      | {
          type: "dropdown"
          value?: string | null
        }
      | {
          type: "dropdown-multi"
          value?: string[] | null
        }
    )
