import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { TextQuestion, TextQuestionProps } from "../TextQuestion"

export type QuestionProps = BaseQuestionPropsForOtherQuestionComponents &
  TextQuestionProps

export const Question = ({
  id,
  title,
  description,
  onChange,
  type,
  ...props
}: QuestionProps) => {
  const baseQuestionProps = {
    id,
    title,
    description,
    onChange,
  }

  if (type === "text" || type === "longText") {
    return (
      <TextQuestion
        {...baseQuestionProps}
        type={type}
        onChange={onChange}
        {...props}
      />
    )
  }
}
