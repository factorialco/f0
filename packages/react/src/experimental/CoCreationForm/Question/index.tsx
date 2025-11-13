import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { DateQuestion, DateQuestionProps } from "../DateQuestion"
import { LinkQuestion, LinkQuestionProps } from "../LinkQuestion"
import { NumericQuestion, NumericQuestionProps } from "../NumericQuestion"
import { RatingQuestion, RatingQuestionProps } from "../RatingQuestion"
import { SelectQuestion, SelectQuestionProps } from "../SelectQuestion"
import { TextQuestion, TextQuestionProps } from "../TextQuestion"

export type QuestionProps = BaseQuestionPropsForOtherQuestionComponents &
  (
    | TextQuestionProps
    | (RatingQuestionProps & { type: "rating" })
    | (SelectQuestionProps & { type: "select" | "multi-select" })
    | (NumericQuestionProps & { type: "numeric" })
    | (LinkQuestionProps & { type: "link" })
    | (DateQuestionProps & { type: "date" })
  )

export const Question = ({ ...props }: QuestionProps) => {
  switch (props.type) {
    case "text":
    case "longText":
      return <TextQuestion onChange={props.onChange} {...props} />
    case "rating":
      return <RatingQuestion onChange={props.onChange} {...props} />
    case "select":
    case "multi-select":
      return <SelectQuestion onChange={props.onChange} {...props} />
    case "numeric":
      return <NumericQuestion onChange={props.onChange} {...props} />
    case "link":
      return <LinkQuestion onChange={props.onChange} {...props} />
    case "date":
      return <DateQuestion onChange={props.onChange} {...props} />
    default:
      throw new Error("Invalid question type provided")
  }
}
