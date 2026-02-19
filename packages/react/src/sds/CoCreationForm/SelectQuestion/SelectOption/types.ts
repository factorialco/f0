import { SelectQuestionOption } from "../../types"

export type OnClickOptionActionParams = {
  value: string
  index: number
  action: "remove" | "mark-as-correct"
}

export type OnChangeLabelParams = {
  value: string
  index: number
  newLabel: string
}

export type SelectOptionProps = {
  option: SelectQuestionOption
  selected: boolean
  onClick: (value: string) => void
  index: number
  onChangeLabel: (params: OnChangeLabelParams) => void
  onClickAction: (params: OnClickOptionActionParams) => void
  isEditMode?: boolean
  correct?: boolean
  locked?: boolean
}
