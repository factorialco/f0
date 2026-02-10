import { Reorder } from "motion/react"
import { nanoid } from "nanoid"
import { useEffect, useMemo } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Select } from "@/components/F0Select"
import { F0SelectItemProps } from "@/components/F0Select/types"
import { Add } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { BaseQuestion } from "../BaseQuestion"
import { useCoCreationFormContext } from "../Context"
import { DragProvider } from "../DragContext"
import { SelectQuestionOption } from "../types"
import { SelectOption } from "../SelectQuestion/SelectOption"
import {
  OnChangeLabelParams,
  OnClickOptionActionParams,
} from "../SelectQuestion/SelectOption/types"
import { DropdownQuestionOnChangeParams, DropdownQuestionProps } from "./types"

export type { DropdownQuestionProps } from "./types"

export const DropdownQuestion = ({
  options,
  ...props
}: DropdownQuestionProps) => {
  const { onQuestionChange, isEditMode, getSectionContainingQuestion } =
    useCoCreationFormContext()

  const someOptionsWithSameValue =
    new Set(options.map((option) => option.value)).size !== options.length

  const containingSection = getSectionContainingQuestion(props.id)

  const questionLocked = props.locked || containingSection?.locked

  const { t } = useI18n()

  const baseOnChangeParams: DropdownQuestionOnChangeParams = useMemo(
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
      new Set(newOptions.map((option) => option.value)).size !==
      newOptions.length

    if (!newOptionsWithSameValue) {
      onQuestionChange?.({ ...commonChangeParams, options: newOptions })
      return
    }

    newOptions = newOptions.map((option) => ({
      ...option,
      value: nanoid(),
    }))

    onQuestionChange?.({ ...commonChangeParams, options: newOptions })
  }, [
    someOptionsWithSameValue,
    onQuestionChange,
    options,
    props.id,
    props.type,
  ])

  const handleClickOptionAction = (params: OnClickOptionActionParams) => {
    let newOptions = options

    if (params.action === "remove") {
      newOptions = options.filter((option) => option.value !== params.value)
    }

    if (params.action === "mark-as-correct") {
      newOptions = options.map((option) => ({
        ...option,
        correct:
          option.value === params.value ? !option.correct : option.correct,
      }))
    }

    onQuestionChange?.({
      ...baseOnChangeParams,
      options: newOptions,
    })
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

  const handleDropdownChange = (value: string) => {
    onQuestionChange?.({
      ...baseOnChangeParams,
      type: "dropdown",
      value,
    })
  }

  const handleDropdownMultiChange = (values: string[]) => {
    onQuestionChange?.({
      ...baseOnChangeParams,
      type: "dropdown-multi",
      value: values,
    })
  }

  if (someOptionsWithSameValue) {
    return null
  }

  const selectOptions: F0SelectItemProps<string>[] = options.map((option) => ({
    value: option.value,
    label: option.label,
  }))

  // In edit mode, show editable options list (like SelectQuestion)
  // In answer mode, show a real F0Select dropdown
  if (isEditMode) {
    return (
      <BaseQuestion {...props}>
        <div className="-mx-0.5 flex flex-col items-start [&>div]:w-full">
          <DragProvider>
            <Reorder.Group
              axis="y"
              values={options}
              onReorder={handleReorderOptions}
              as="div"
            >
              {options.map((option, index) => (
                <div className="w-full [&>div]:w-full" key={option.value}>
                  <SelectOption
                    index={index}
                    option={option}
                    correct={option.correct}
                    selected={false}
                    onClick={() => {}}
                    onClickAction={handleClickOptionAction}
                    onChangeLabel={handleChangeLabel}
                    isEditMode={isEditMode}
                    locked={questionLocked}
                  />
                </div>
              ))}
            </Reorder.Group>
          </DragProvider>
          {!questionLocked && (
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

  // Answer mode: render F0Select dropdown
  return (
    <BaseQuestion {...props}>
      <div className="px-0.5">
        {props.type === "dropdown" &&
          (props.required ? (
            <F0Select
              options={selectOptions}
              value={props.value ?? undefined}
              onChange={handleDropdownChange}
              label={t("coCreationForm.answer.label")}
              hideLabel
              placeholder={t("coCreationForm.answer.placeholder")}
              showSearchBox={options.length > 5}
              required
              size="md"
            />
          ) : (
            <F0Select
              options={selectOptions}
              value={props.value ?? undefined}
              onChange={handleDropdownChange}
              clearable
              label={t("coCreationForm.answer.label")}
              hideLabel
              placeholder={t("coCreationForm.answer.placeholder")}
              showSearchBox={options.length > 5}
              size="md"
            />
          ))}
        {props.type === "dropdown-multi" && (
          <F0Select
            options={selectOptions}
            value={props.value ?? undefined}
            onChange={handleDropdownMultiChange}
            multiple
            label={t("coCreationForm.answer.label")}
            hideLabel
            placeholder={t("coCreationForm.answer.placeholder")}
            showSearchBox={options.length > 5}
            size="md"
          />
        )}
      </div>
    </BaseQuestion>
  )
}
