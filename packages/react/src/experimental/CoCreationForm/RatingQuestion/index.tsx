import { useMemo } from "react"
import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { BaseScoreQuestion } from "../BaseScoreQuestion"

export type RatingQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    value?: number
  } & (
      | { range: { min: number; max: number } }
      | { options: { value: number; label: string }[] }
    )

export const RatingQuestion = (props: RatingQuestionProps) => {
  const options = useMemo(() => {
    if ("range" in props) {
      return Array.from(
        { length: props.range.max - props.range.min + 1 },
        (_, i) => ({
          value: props.range.min + i,
          label: String(props.range.min + i),
        })
      )
    }

    return props.options
  }, [props])

  return <BaseScoreQuestion {...props} options={options} />
}
