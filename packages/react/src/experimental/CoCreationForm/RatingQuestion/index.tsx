import { useMemo } from "react"
import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import {
  BaseScoreQuestion,
  BaseScoreQuestionOnChangeParams,
} from "../BaseScoreQuestion"

export type RatingQuestionOnChangeParams = BaseScoreQuestionOnChangeParams

export type RatingQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    value?: number
    onChange?: (params: RatingQuestionOnChangeParams) => void
  } & (
      | { range: { min: number; max: number } }
      | { options: { value: number; label: string }[] }
    )

export const RatingQuestion = ({
  id,
  title,
  description,
  value,
  onChange,
  disabled,
  ...props
}: RatingQuestionProps) => {
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

  return (
    <BaseScoreQuestion
      id={id}
      title={title}
      description={description}
      value={value}
      options={options}
      onChange={onChange}
      disabled={disabled}
    />
  )
}
