import type { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import type { CheckboxQuestionProps } from "../CheckboxQuestion"

import { CheckboxQuestion } from "../CheckboxQuestion"
import { DateQuestion, DateQuestionProps } from "../DateQuestion"
import { DropdownSingleQuestion } from "../DropdownSingleQuestion"
import { DropdownSingleQuestionProps } from "../DropdownSingleQuestion/types"
import { FileQuestion, FileQuestionProps } from "../FileQuestion"
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
    | (DropdownSingleQuestionProps & { type: "dropdown-single" })
    | (NumericQuestionProps & { type: "numeric" })
    | (LinkQuestionProps & { type: "link" })
    | (DateQuestionProps & { type: "date" })
    | (FileQuestionProps & { type: "file" })
    | (CheckboxQuestionProps & { type: "checkbox" })
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
    case "dropdown-single":
      return <DropdownSingleQuestion {...props} />
    case "numeric":
      return <NumericQuestion {...props} />
    case "link":
      return <LinkQuestion {...props} />
    case "date":
      return <DateQuestion {...props} />
    case "file":
      return <FileQuestion {...props} />
    case "checkbox":
      return <CheckboxQuestion {...props} />
    default:
      throw new Error("Invalid question type provided")
  }
}
