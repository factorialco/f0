import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { DateQuestion, DateQuestionProps } from "../DateQuestion"
import { EntitySelectQuestion } from "../EntitySelectQuestion"
import { EntitySelectQuestionProps } from "../EntitySelectQuestion/types"
import { LinkQuestion, LinkQuestionProps } from "../LinkQuestion"
import { NumericQuestion, NumericQuestionProps } from "../NumericQuestion"
import { RatingQuestion, RatingQuestionProps } from "../RatingQuestion"
import { SelectQuestion } from "../SelectQuestion"
import { SelectQuestionProps } from "../SelectQuestion/types"
import { TextQuestion, TextQuestionProps } from "../TextQuestion"

export type QuestionProps = BaseQuestionPropsForOtherQuestionComponents &
  (
    | TextQuestionProps
    | (RatingQuestionProps & { type: "rating" })
    | (SelectQuestionProps & { type: "select" | "multi-select" })
    | (NumericQuestionProps & { type: "numeric" })
    | (LinkQuestionProps & { type: "link" })
    | (DateQuestionProps & { type: "date" })
    | EntitySelectQuestionProps
  )

export const Question = ({ ...props }: QuestionProps) => {
  switch (props.type) {
    case "text":
    case "longText":
      return <TextQuestion {...props} />
    case "rating":
      return <RatingQuestion {...props} />
    case "select":
    case "multi-select":
      return <SelectQuestion {...props} />
    case "numeric":
      return <NumericQuestion {...props} />
    case "link":
      return <LinkQuestion {...props} />
    case "date":
      return <DateQuestion {...props} />
    case "entity-select":
    case "entity-select-multi":
      return <EntitySelectQuestion {...props} />
    default:
      throw new Error("Invalid question type provided")
  }
}
