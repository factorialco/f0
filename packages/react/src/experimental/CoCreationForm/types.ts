export type QuestionType =
  | "section"
  | "rating"
  | "select"
  | "multi-select"
  | "text"
  | "longText"
  | "numeric"
  | "link"

export type BaseQuestionOnChangeParams = {
  id: string
  title: string
  description?: string
  required?: boolean
}
