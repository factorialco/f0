import { useMemo } from "react"

import { F0Select } from "@/components/F0Select"
import { useI18n } from "@/lib/providers/i18n"

import { BaseQuestion } from "../BaseQuestion"
import { useCoCreationFormContext } from "../Context"
import { DropdownSingleQuestionProps } from "./types"

export const DropdownSingleQuestion = ({
  options,
  ...props
}: DropdownSingleQuestionProps) => {
  const { onQuestionChange, getSectionContainingQuestion, isEditMode } =
    useCoCreationFormContext()

  const containingSection = getSectionContainingQuestion(props.id)

  const questionLocked = props.locked || containingSection?.locked

  const { t } = useI18n()

  const selectOptions = useMemo(
    () =>
      options.map((option) => ({ value: option.value, label: option.label })),
    [options]
  )

  return (
    <BaseQuestion {...props}>
      <div className="-mx-0.5 flex flex-col items-start [&>div]:w-full">
        <F0Select
          label={t("coCreationForm.answer.label")}
          hideLabel
          size="md"
          clearable={!props.required}
          multiple={false}
          options={selectOptions}
          value={props.value ?? ""}
          onChange={(value) => {
            if (isEditMode) return
            onQuestionChange?.({
              id: props.id,
              type: "dropdown-single",
              value,
            })
          }}
          placeholder={t("coCreationForm.answer.placeholder")}
          disabled={questionLocked || isEditMode}
          required={props.required}
        />
      </div>
    </BaseQuestion>
  )
}
