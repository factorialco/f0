import { QuestionElement } from "../types"

export type SectionProps = {
  id: string
  title: string
  description?: string
  locked?: boolean
  questions?: QuestionElement[]
}
