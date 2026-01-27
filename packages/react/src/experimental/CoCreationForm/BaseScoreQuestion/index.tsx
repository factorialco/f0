import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { useCoCreationFormContext } from "../Context"
import { detectRatingOptionType } from "../lib"
import { ScoreEditOption } from "./ScoreEditOption"

export type BaseScoreQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    value?: number
    options: { value: number; label: string }[]
  }

export const BaseScoreQuestion = ({
  options,
  value,
  ...baseQuestionComponentProps
}: BaseScoreQuestionProps) => {
  const { onQuestionChange, isEditMode } = useCoCreationFormContext()

  const ratingType = detectRatingOptionType(options)
  const isEmojiMode = ratingType === "emojis"

  const handleChangeValue = (newValue: number) => {
    onQuestionChange?.({
      id: baseQuestionComponentProps.id,
      value: newValue,
      type: "rating",
    })
  }

  const handleChangeLabel = (optionValue: number, newLabel: string) => {
    const updatedOptions = options.map((opt) =>
      opt.value === optionValue ? { ...opt, label: newLabel } : opt
    )

    onQuestionChange?.({
      id: baseQuestionComponentProps.id,
      type: "rating",
      value: value ?? 0,
      options: updatedOptions,
    } as Parameters<NonNullable<typeof onQuestionChange>>[0])
  }

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
        {options.map((option) => (
          <ScoreEditOption
            key={option.value}
            option={option}
            selected={value === option.value}
            onClick={handleChangeValue}
            onChangeLabel={handleChangeLabel}
            isEditMode={isEditMode}
            disabled={false}
            isEmojiMode={isEmojiMode}
          />
        ))}
      </div>
    </BaseQuestion>
  )
}
