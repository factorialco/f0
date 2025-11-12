import { F0Button } from "@/components/F0Button"
import { Add } from "@/icons/app"
import { useEffect } from "react"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { BaseQuestionOnChangeParams } from "../types"
import {
  OnChangeLabelParams,
  OnClickOptionActionParams,
  SelectOption,
} from "./SelectOption"

type SelectQuestionOption = {
  value: string
  label: string
  correct?: boolean
}

export type SelectQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  options: SelectQuestionOption[]
} & (
    | {
        type: "select"
        value?: string | null
      }
    | {
        type: "multi-select"
        value?: string[] | null
      }
  )

export type SelectQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    options: SelectQuestionOption[]
    onChange?: (params: SelectQuestionOnChangeParams) => void
  } & (
      | {
          type: "select"
          value?: string | null
        }
      | {
          type: "multi-select"
          value?: string[] | null
        }
    )

export const SelectQuestion = ({
  id,
  title,
  description,
  options,
  disabled,
  ...props
}: SelectQuestionProps) => {
  const baseOnChangeParams = {
    id,
    title,
    description,
    options,
    ...(props.type === "select"
      ? { type: props.type, value: props.value }
      : { type: props.type, value: props.value }),
  }

  useEffect(() => {
    const someValuesEqual =
      new Set(options.map((option) => option.value)).size !== options.length
    if (someValuesEqual) {
      throw new Error("Options must have unique values")
    }
  }, [options])

  const handleChange = (params: BaseQuestionOnChangeParams) => {
    props.onChange?.({
      ...baseOnChangeParams,
      ...params,
    })
  }

  const handleClickOptionAction = (params: OnClickOptionActionParams) => {
    let newOptions = options

    if (params.action === "remove") {
      newOptions = options.filter((option) => option.value !== params.value)
    }

    if (params.action === "mark-as-correct") {
      newOptions = options.map((option) => ({
        ...option,
        correct: option.value === params.value,
      }))
    }

    props.onChange?.({
      ...baseOnChangeParams,
      options: newOptions,
    })
  }

  const handleOptionClick = (optionValue: string) => {
    if (props.type === "select") {
      props.onChange?.({
        ...baseOnChangeParams,
        type: props.type,
        value: optionValue,
      })
    } else if (props.type === "multi-select" && Array.isArray(props.value)) {
      const newValue = props.value.includes(optionValue)
        ? props.value.filter((value) => value !== optionValue)
        : [...props.value, optionValue]

      props.onChange?.({
        ...baseOnChangeParams,
        type: props.type,
        value: newValue,
      })
    }
  }

  const handleChangeLabel = (params: OnChangeLabelParams) => {
    const newOptions = options.map((option) => ({
      ...option,
      label: option.value === params.value ? params.newLabel : option.label,
    }))
    props.onChange?.({
      ...baseOnChangeParams,
      options: newOptions,
    })
  }

  const handleAddOption = () => {
    props.onChange?.({
      ...baseOnChangeParams,
      options: [
        ...options,
        { value: `new-option-${options.length + 1}`, label: "" },
      ],
    })
  }

  return (
    <BaseQuestion
      id={id}
      title={title}
      description={description}
      onChange={handleChange}
    >
      <div className="-mx-0.5 flex flex-col items-start">
        {options.map((option, index) => (
          <div className="w-full" key={option.value}>
            <SelectOption
              value={option.value}
              index={index}
              label={option.label}
              correct={option.correct}
              selected={
                Array.isArray(props.value)
                  ? props.value.includes(option.value)
                  : props.value === option.value
              }
              onClick={handleOptionClick}
              onClickAction={handleClickOptionAction}
              onChangeLabel={handleChangeLabel}
              disabled={disabled}
            />
          </div>
        ))}
        <div className="opacity-50">
          <F0Button
            label="Add option"
            variant="ghost"
            icon={Add}
            onClick={handleAddOption}
          />
        </div>
      </div>
    </BaseQuestion>
  )
}
