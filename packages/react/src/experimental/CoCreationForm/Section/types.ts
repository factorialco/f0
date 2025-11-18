import { QuestionElement } from "../types"

export type SectionProps = {
  id: string
  title: string
  description?: string
  questions?: QuestionElement[]
}
