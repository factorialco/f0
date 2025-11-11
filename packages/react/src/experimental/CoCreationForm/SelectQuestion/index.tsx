import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { Add } from "@/icons/app"
import { useEffect, useState } from "react"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { BaseQuestionOnChangeParams } from "../types"

type OnChangeParams = BaseQuestionOnChangeParams &
  (
    | {
        type: "select"
        value: string | null
      }
    | {
        type: "multi-select"
        value: string[]
      }
  )

export type SelectQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    options: { value: string; label: string }[]
    onChange?: (params: OnChangeParams) => void
  } & (
      | {
          type: "select"
          value: string | null
        }
      | {
          type: "multi-select"
          value: string[]
        }
    )

const SelectOption = ({
  value,
  label,
  selected,
  onClick,
}: {
  value: string
  label: string
  selected: boolean
  onClick: (value: string) => void
}) => {
  const handleClick = () => {
    onClick(value)
  }

  return (
    <div
      className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 hover:bg-f1-background-hover"
      onClick={handleClick}
    >
      <F0Checkbox
        checked={selected}
        onCheckedChange={() => onClick(value)}
        hideLabel
      />
      <input type="text" value={label} className="flex-1 font-medium" />
    </div>
  )
}

export const SelectQuestion = ({
  id,
  title,
  description,
  options,
  ...props
}: SelectQuestionProps) => {
  const [internalValue, setInternalValue] = useState(props.value)

  useEffect(() => {
    setInternalValue(props.value)
  }, [props.value])

  const handleChange = (params: BaseQuestionOnChangeParams) => {
    if (props.type === "select") {
      props.onChange?.({
        ...params,
        type: props.type,
        value: internalValue as string | null,
      })
    } else {
      props.onChange?.({
        ...params,
        type: props.type,
        value: internalValue as string[],
      })
    }
  }

  const handleOptionClick = (optionValue: string) => {
    if (props.type === "select") {
      const newValue = internalValue === optionValue ? null : optionValue
      setInternalValue(newValue)
    } else if (props.type === "multi-select" && Array.isArray(internalValue)) {
      const newValue = internalValue.includes(optionValue)
        ? internalValue.filter((value) => value !== optionValue)
        : [...internalValue, optionValue]
      setInternalValue(newValue)
    }
  }

  useEffect(() => {
    if (props.type === "select") {
      props.onChange?.({
        id,
        title,
        description,
        type: props.type,
        value: internalValue as string | null,
      })
    } else {
      props.onChange?.({
        id,
        title,
        description,
        type: props.type,
        value: internalValue as string[],
      })
    }
  }, [id, title, description, props, internalValue])

  return (
    <BaseQuestion
      id={id}
      title={title}
      description={description}
      onChange={handleChange}
    >
      <div className="-mx-2 flex flex-col items-start">
        {options.map((option) => (
          <div className="w-full" key={option.value}>
            <SelectOption
              value={option.value}
              label={option.label}
              selected={
                Array.isArray(internalValue)
                  ? internalValue.includes(option.value)
                  : internalValue === option.value
              }
              onClick={handleOptionClick}
            />
          </div>
        ))}
        <div className="opacity-50">
          <F0Button label="Add question" variant="ghost" icon={Add} />
        </div>
      </div>
    </BaseQuestion>
  )
}
