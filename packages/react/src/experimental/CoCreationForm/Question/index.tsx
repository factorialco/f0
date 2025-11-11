import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { RatingQuestion, RatingQuestionProps } from "../RatingQuestion"
import { TextQuestion, TextQuestionProps } from "../TextQuestion"

export type QuestionProps = BaseQuestionPropsForOtherQuestionComponents &
  (TextQuestionProps | (RatingQuestionProps & { type: "rating" }))

export const Question = ({
  id,
  title,
  description,
  ...props
}: QuestionProps) => {
  const baseQuestionProps = {
    id,
    title,
    description,
  }

  if (props.type === "text" || props.type === "longText") {
    return (
      <TextQuestion
        {...baseQuestionProps}
        onChange={props.onChange}
        {...props}
      />
    )
  }

  if (props.type === "rating") {
    return (
      <RatingQuestion
        {...baseQuestionProps}
        onChange={props.onChange}
        {...props}
      />
    )
  }
}
