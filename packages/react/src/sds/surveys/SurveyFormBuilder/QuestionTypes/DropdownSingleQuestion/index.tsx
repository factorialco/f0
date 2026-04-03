import type { F0SelectField } from "@/components/F0Form/fields/select/types"

import { F0FormField } from "@/components/F0FormField"
import { useI18n } from "@/lib/providers/i18n"

import type { DropdownMultiQuestionProps } from "../DropdownMultiQuestion/types"
import type { DropdownSingleQuestionProps } from "./types"

import { useSurveyFormBuilderContext } from "../../Context"
import { BaseQuestion, useQuestionDisabled } from "../BaseQuestion"

/**
 * Unified component for both `dropdown-single` and `dropdown-multi` question
 * types. Keeping both types in a single component ensures React reconciles
 * in-place when toggling "Allow multi-selection" in the ActionsMenu, so the
 * menu stays open and no state is lost.
 */
export const DropdownSingleQuestion = ({
  datasetKey,
  showSearchBox: showSearchBoxProp,
  searchBoxPlaceholder,
  ...props
}: DropdownSingleQuestionProps | DropdownMultiQuestionProps) => {
  const { onQuestionChange, answering, datasets } =
    useSurveyFormBuilderContext()

  const disabled = useQuestionDisabled(props)

  const { t } = useI18n()

  const dataset = datasets?.[datasetKey]
  if (!dataset) {
    throw new Error(`Dataset "${datasetKey}" not found for ${props.type}`)
  }

  const isMulti = props.type === "dropdown-multi"
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
    multiple: isMulti,
    showSearchBox,
    searchBoxPlaceholder,
  }

  return (
    <BaseQuestion {...props}>
      <div className="flex flex-col items-start px-0.5 [&>div]:w-full">
        <F0FormField
          field={field}
          value={isMulti ? (props.value ?? []) : (props.value ?? "")}
          onChange={(value) => {
            if (isMulti) {
              onQuestionChange?.({
                id: props.id,
                type: "dropdown-multi",
                value: value as string[],
              })
            } else {
              onQuestionChange?.({
                id: props.id,
                type: "dropdown-single",
                value: value as string,
              })
            }
          }}
          disabled={!answering || disabled}
          hideLabel
        />
      </div>
    </BaseQuestion>
  )
}
