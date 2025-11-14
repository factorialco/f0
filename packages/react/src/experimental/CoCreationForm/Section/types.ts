import { QuestionElement } from "../types"

export type ActionType = "duplicate" | "delete"

export type SectionActionParams = {
  sectionId: string
  type: ActionType
  index: number
}

export type OnChangeSectionParams = {
  id: string
  title: string
  description?: string
}

export type SectionProps = {
  id: string
  index: number
  title: string
  description?: string
  onChange?: (params: OnChangeSectionParams) => void
  isEditMode?: boolean
  onAction?: (params: SectionActionParams) => void
  questions?: QuestionElement[]
}
