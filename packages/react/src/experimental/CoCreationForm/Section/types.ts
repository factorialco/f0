import { QuestionElement } from "../types"

export type SectionProps = {
  id: string
  index: number
  title: string
  description?: string
  questions?: QuestionElement[]
}
