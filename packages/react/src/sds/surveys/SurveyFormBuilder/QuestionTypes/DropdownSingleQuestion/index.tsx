import { useMemo } from "react"

import type { F0Field } from "@/components/F0Form/fields/types"

import { F0FormField } from "@/components/F0FormField"
import { Input } from "@/experimental/Forms/Fields/Input"
import { useI18n } from "@/lib/providers/i18n"

import { useSurveyFormBuilderContext } from "../../Context"
import { BaseQuestion, useQuestionDisabled } from "../BaseQuestion"
import {
  DropdownSingleQuestionProps,
  SEARCH_BOX_OPTIONS_THRESHOLD,
} from "./types"

export const DropdownSingleQuestion = ({
  options,
  showSearchBox: showSearchBoxProp,
  searchBoxPlaceholder,
  ...props
}: DropdownSingleQuestionProps) => {
  const { onQuestionChange, answering } = useSurveyFormBuilderContext()

  const disabled = useQuestionDisabled(props)

  const { t } = useI18n()

  const selectOptions = useMemo(
    () =>
      options.map((option) => ({ value: option.value, label: option.label })),
    [options]
  )

  const showSearchBox =
    showSearchBoxProp ?? selectOptions.length > SEARCH_BOX_OPTIONS_THRESHOLD

  const field: F0Field = useMemo(
    () => ({
      id: props.id,
      type: "select" as const,
      label: t("surveyFormBuilder.answer.label"),
      placeholder: t("surveyFormBuilder.answer.dropdownPlaceholder"),
      options: selectOptions,
      clearable: !props.required,
      multiple: false,
      showSearchBox,
      searchBoxPlaceholder,
    }),
    [
      props.id,
      props.required,
      selectOptions,
      t,
      showSearchBox,
      searchBoxPlaceholder,
    ]
  )

  return (
    <BaseQuestion {...props}>
      <div className="flex flex-col items-start px-0.5 [&>div]:w-full">
        {answering ? (
          <F0FormField
            field={field}
            value={props.value ?? ""}
            onChange={(value) => {
              onQuestionChange?.({
                id: props.id,
                type: "dropdown-single",
                value: value as string,
              })
            }}
            disabled={disabled}
            hideLabel
          />
        ) : (
          <Input
            type="text"
            size="md"
            value={t("surveyFormBuilder.answer.dropdownPlaceholder")}
            onChange={() => {}}
            disabled
            label={t("surveyFormBuilder.answer.label")}
            hideLabel={true}
          />
        )}
      </div>
    </BaseQuestion>
  )
}
