import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { BaseScoreQuestion } from "../BaseScoreQuestion"

export type RatingQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    value?: number
  } & { options: { value: number; label: string }[] }

export const RatingQuestion = (props: RatingQuestionProps) => {
  return <BaseScoreQuestion {...props} type="rating" />
}
