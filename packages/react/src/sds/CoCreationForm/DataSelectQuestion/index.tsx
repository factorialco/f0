import { nanoid } from "nanoid"
import { useEffect, useMemo } from "react"

import { F0Select } from "@/components/F0Select"
import { useI18n } from "@/lib/providers/i18n"

import { BaseQuestion } from "../BaseQuestion"
import { useCoCreationFormContext } from "../Context"
import {
  DataSelectQuestionOnChangeParams,
  DataSelectQuestionProps,
} from "./types"

export const DataSelectQuestion = ({
  options,
  ...props
}: DataSelectQuestionProps) => {
  const { onQuestionChange, getSectionContainingQuestion } =
    useCoCreationFormContext()

  const someOptionsWithSameValue =
    new Set(options.map((option) => option.value)).size !== options.length

  const containingSection = getSectionContainingQuestion(props.id)

  const questionLocked = props.locked || containingSection?.locked

  const { t } = useI18n()

  const baseOnChangeParams: DataSelectQuestionOnChangeParams = useMemo(
    () => ({
      id: props.id,
      type: "data-select",
      options,
    }),
    [props.id, options]
  )

  useEffect(() => {
    if (!someOptionsWithSameValue) return

    let newOptions = options.map((option) => ({
      ...option,
      value: option.label.toLowerCase().replace(/\s+/g, "-"),
    }))

    const commonChangeParams = {
      id: props.id,
      type: "data-select" as const,
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

    if (newOptionsWithSameValue) {
      onQuestionChange?.({ ...commonChangeParams, options: newOptions })
    }

    onQuestionChange?.({ ...commonChangeParams, options: newOptions })
  }, [someOptionsWithSameValue, onQuestionChange, options, props.id])

  const selectOptions = useMemo(
    () =>
      options.map((option) => ({ value: option.value, label: option.label })),
    [options]
  )

  if (someOptionsWithSameValue) {
    return null
  }

  return (
    <BaseQuestion {...props}>
      <div className="-mx-0.5 flex flex-col items-start [&>div]:w-full">
        <F0Select
          label=""
          hideLabel
          clearable={false}
          multiple={false}
          options={selectOptions}
          value={props.value ?? ""}
          onChange={(value) =>
            onQuestionChange?.({
              ...baseOnChangeParams,
              value,
            })
          }
          placeholder={t("coCreationForm.answer.placeholder")}
          disabled={questionLocked}
        />
      </div>
    </BaseQuestion>
  )
}
