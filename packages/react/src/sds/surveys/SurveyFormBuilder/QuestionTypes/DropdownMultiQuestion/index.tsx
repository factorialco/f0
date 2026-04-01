import type { F0SelectField } from "@/components/F0Form/fields/select/types"

import { F0FormField } from "@/components/F0FormField"
import { useI18n } from "@/lib/providers/i18n"

import { useSurveyFormBuilderContext } from "../../Context"
import { BaseQuestion, useQuestionDisabled } from "../BaseQuestion"
import { DropdownMultiQuestionProps } from "./types"

export const DropdownMultiQuestion = ({
  datasetKey,
  showSearchBox: showSearchBoxProp,
  searchBoxPlaceholder,
  ...props
}: DropdownMultiQuestionProps) => {
  const { onQuestionChange, answering, datasets } =
    useSurveyFormBuilderContext()
  const disabled = useQuestionDisabled(props)
  const { t } = useI18n()

  const dataset = datasets?.[datasetKey]
  if (!dataset) {
    throw new Error(`Dataset "${datasetKey}" not found for dropdown-multi`)
  }

  const showSearchBox = showSearchBoxProp ?? true

  const field: F0SelectField = {
    id: props.id,
    type: "select",
    label: t("surveyFormBuilder.answer.label"),
    placeholder:
      dataset.placeholder ?? t("surveyFormBuilder.answer.dropdownPlaceholder"),
    source: dataset.dataSource,
    mapOptions: dataset.mapOptions,
    icon: dataset.icon,
    clearable: !props.required,
    multiple: true,
    showSearchBox,
    searchBoxPlaceholder,
  }

  return (
    <BaseQuestion {...props}>
      <div className="flex flex-col items-start px-0.5 [&>div]:w-full">
        <F0FormField
          field={field}
          value={props.value ?? []}
          onChange={(value) => {
            onQuestionChange?.({
              id: props.id,
              type: "dropdown-multi",
              value: value as string[],
            })
          }}
          disabled={!answering || disabled}
          hideLabel
        />
      </div>
    </BaseQuestion>
  )
}
