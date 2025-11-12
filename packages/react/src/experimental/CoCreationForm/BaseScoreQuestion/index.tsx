import { EmojiImage } from "@/lib/emojis"
import { cn } from "@/lib/utils"
import { useCallback, useEffect, useState } from "react"
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
  title,
  description,
  options,
  value,
  onChange,
  disabled,
  required,
}: BaseScoreQuestionProps) => {
  const [internalValue, setInternalValue] = useState(value)

  useEffect(() => {
    setInternalValue(value)
  }, [value])

  const handleChange = useCallback(
    (params: BaseQuestionOnChangeParams) => {
      if (internalValue === undefined) return

      onChange?.({
        ...params,
        type: "score",
        value: internalValue,
      })
    },
    [internalValue, onChange]
  )

  useEffect(() => {
    handleChange({
      id,
      title,
      description,
    })
  }, [id, title, description, handleChange])

  return (
    <BaseQuestion
      id={id}
      title={title}
      description={description}
      onChange={handleChange}
      required={required}
    >
      <div className="flex flex-row gap-3">
        {options.map((option) => (
          <ScoreOption
            key={option.value}
            value={option.value}
            label={option.label}
            selected={internalValue === option.value}
            onClick={setInternalValue}
            disabled={disabled}
          />
        ))}
      </div>
    </BaseQuestion>
  )
}
