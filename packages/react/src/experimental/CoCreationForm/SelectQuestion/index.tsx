import { F0Button } from "@/components/F0Button"
import { Add } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Reorder } from "motion/react"
import { nanoid } from "nanoid"
import { useEffect, useMemo } from "react"
import { BaseQuestion } from "../BaseQuestion"
import { useCoCreationFormContext } from "../Context"
import { DragProvider } from "../DragContext"
import { SelectQuestionOption } from "../types"
import { SelectOption } from "./SelectOption"
import { OnChangeLabelParams, OnClickOptionActionParams } from "./SelectOption/types"
import { SelectQuestionOnChangeParams, SelectQuestionProps } from "./types"

export const SelectQuestion = ({ options, ...props }: SelectQuestionProps) => {
  const { onQuestionChange, isEditMode, getSectionContainingQuestion } = useCoCreationFormContext()

  const someOptionsWithSameValue =
    new Set(options.map((option) => option.value)).size !== options.length

  const containingSection = getSectionContainingQuestion(props.id)

  const questionLocked = props.locked || containingSection?.locked

  const { t } = useI18n()

  const baseOnChangeParams: SelectQuestionOnChangeParams = useMemo(
    () => ({
      id: props.id,
      type: props.type,
      options,
    }),
    [props.id, props.type, options]
  )

  // preventing options with same value to cause unexpected behavior
  useEffect(() => {
    if (!someOptionsWithSameValue) return

    let newOptions = options.map((option) => ({
      ...option,
      value: option.label.toLowerCase().replace(/\s+/g, "-"),
    }))

    const commonChangeParams = {
      id: props.id,
      type: props.type,
    }

    const newOptionsWithSameValue =
      new Set(newOptions.map((option) => option.value)).size !== newOptions.length

    if (!newOptionsWithSameValue) {
      onQuestionChange?.({ ...commonChangeParams, options: newOptions })
      return
    }

    newOptions = newOptions.map((option) => ({
      ...option,
      value: nanoid(),
    }))

    if (newOptionsWithSameValue) {
      onQuestionChange?.({ ...commonChangeParams, options: newOptions })
    }

    onQuestionChange?.({ ...commonChangeParams, options: newOptions })
  }, [someOptionsWithSameValue, onQuestionChange, options, props.id, props.type])

  const handleClickOptionAction = (params: OnClickOptionActionParams) => {
    let newOptions = options

    if (params.action === "remove") {
      newOptions = options.filter((option) => option.value !== params.value)
    }

    if (params.action === "mark-as-correct") {
      newOptions = options.map((option) => ({
        ...option,
        correct: option.value === params.value ? !option.correct : option.correct,
      }))
    }

    onQuestionChange?.({
      ...baseOnChangeParams,
      options: newOptions,
    })
  }

  const handleOptionClick = (optionValue: string) => {
    if (props.type === "select") {
      onQuestionChange?.({
        ...baseOnChangeParams,
        type: props.type,
        value: optionValue,
      })
    } else if (props.type === "multi-select" && Array.isArray(props.value)) {
      const newValue = props.value.includes(optionValue)
        ? props.value.filter((value) => value !== optionValue)
        : [...props.value, optionValue]

      onQuestionChange?.({
        ...baseOnChangeParams,
        type: props.type,
        value: newValue,
      })
    }
  }

  const handleChangeLabel = (params: OnChangeLabelParams) => {
    const newOptions = options.map((option, index) => ({
      ...option,
      ...(index === params.index
        ? {
            value: params.value,
            label: params.newLabel,
          }
        : {}),
    }))
    onQuestionChange?.({
      ...baseOnChangeParams,
      options: newOptions,
    })
  }

  const handleAddOption = () => {
    const optionsLength = options.length
    const newOption = {
      value: `new-option-${optionsLength + 1}`,
      label: t("coCreationForm.selectQuestion.newOption", {
        number: optionsLength + 1,
      }),
    }
    onQuestionChange?.({
      ...baseOnChangeParams,
      options: [...options, newOption],
    })
  }

  const handleReorderOptions = (newOptions: SelectQuestionOption[]) => {
    onQuestionChange?.({
      ...baseOnChangeParams,
      options: newOptions,
    })
  }

  if (someOptionsWithSameValue) {
    return null
  }

  return (
    <BaseQuestion {...props}>
      <div className="-mx-0.5 flex flex-col items-start [&>div]:w-full">
        <DragProvider>
          <Reorder.Group axis="y" values={options} onReorder={handleReorderOptions} as="div">
            {options.map((option, index) => (
              <div className="w-full [&>div]:w-full" key={option.value}>
                <SelectOption
                  index={index}
                  option={option}
                  correct={option.correct}
                  selected={
                    Array.isArray(props.value)
                      ? props.value.includes(option.value)
                      : props.value === option.value
                  }
                  onClick={handleOptionClick}
                  onClickAction={handleClickOptionAction}
                  onChangeLabel={handleChangeLabel}
                  isEditMode={isEditMode}
                  locked={questionLocked}
                />
              </div>
            ))}
          </Reorder.Group>
        </DragProvider>
        {isEditMode && !questionLocked && (
          <div className="opacity-50">
            <F0Button
              label={t("coCreationForm.selectQuestion.addOption")}
              variant="ghost"
              icon={Add}
              onClick={handleAddOption}
            />
          </div>
        )}
      </div>
    </BaseQuestion>
  )
}
