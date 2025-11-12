import { EmojiImage } from "@/lib/emojis"
import { cn } from "@/lib/utils"
import { useCallback, useMemo } from "react"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { BaseQuestionOnChangeParams } from "../types"

export type BaseScoreQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  type: "score"
  value: number
}

export type BaseScoreQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    value?: number
    options: { value: number; label: string }[]
    onChange?: (params: BaseScoreQuestionOnChangeParams) => void
  }

const ScoreOption = ({
  value,
  label,
  selected,
  onClick,
  disabled,
}: {
  value: number
  label: string
  selected: boolean
  onClick: (value: number) => void
  disabled?: boolean
}) => {
  const handleClick = () => {
    if (disabled) return

    onClick(value)
  }

  return (
    <div
      className={cn(
        "flex h-10 min-w-20 flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium",
        selected && "border-f1-border-selected-bold",
        !disabled ? "cursor-pointer" : "cursor-default"
      )}
      onClick={handleClick}
    >
      <EmojiImage emoji={label} size="sm" />
    </div>
  )
}

export const BaseScoreQuestion = ({
  id,
  index,
  title,
  description,
  options,
  value,
  onChange,
  disabled,
  required,
}: BaseScoreQuestionProps) => {
  const baseOnChangeParams: BaseScoreQuestionOnChangeParams = useMemo(
    () => ({
      id,
      title,
      description,
      value: value ?? 0,
      type: "score",
    }),
    [id, title, description, value]
  )

  const handleChange = useCallback(
    (params: BaseQuestionOnChangeParams) => {
      onChange?.({
        ...params,
        value: value ?? 0,
        type: "score",
      })
    },
    [value, onChange]
  )

  const handleChangeValue = useCallback(
    (newValue: number) => {
      onChange?.({
        ...baseOnChangeParams,
        value: newValue,
        type: "score",
      })
    },
    [baseOnChangeParams, onChange]
  )

  return (
    <BaseQuestion
      id={id}
      index={index}
      title={title}
      description={description}
      onChange={handleChange}
      required={required}
    >
      <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
        {options.map((option) => (
          <ScoreOption
            key={option.value}
            value={option.value}
            label={option.label}
            selected={value === option.value}
            onClick={handleChangeValue}
            disabled={disabled}
          />
        ))}
      </div>
    </BaseQuestion>
  )
}
