import { useMemo } from "react"

import type { F0SelectField } from "@/patterns/F0Form/fields/select/types"

import { F0FormField } from "@/patterns/F0FormField"
import { useI18n } from "@/lib/providers/i18n"

import type { DropdownMultiQuestionProps } from "../DropdownMultiQuestion/types"
import {
  SEARCH_BOX_OPTIONS_THRESHOLD,
  type DropdownSingleQuestionProps,
} from "./types"

import { useSurveyFormBuilderContext } from "../../Context"
import { BaseQuestion, useQuestionDisabled } from "../BaseQuestion"

/**
 * Unified component for both `dropdown-single` and `dropdown-multi` question
 * types. Supports two modes:
 * - **Dataset mode**: when `datasetKey` is provided and a matching dataset
 *   exists in context, renders an F0Select backed by the dataset's data source.
 * - **Static options mode** (backward compatible): when no dataset is found,
 *   falls back to rendering with static `options` prop.
 */
export const DropdownSingleQuestion = (
  allProps: DropdownSingleQuestionProps | DropdownMultiQuestionProps
) => {
  const {
    showSearchBox: showSearchBoxProp,
    searchBoxPlaceholder,
    ...props
  } = allProps
  const datasetKey = "datasetKey" in allProps ? allProps.datasetKey : undefined
  const options = "options" in allProps ? allProps.options : undefined
  const { onQuestionChange, answering, datasets } =
    useSurveyFormBuilderContext()

  const disabled = useQuestionDisabled(props)

  const { t } = useI18n()

  const dataset = datasetKey ? datasets?.[datasetKey] : undefined
  const isMulti = props.type === "dropdown-multi"

  const selectOptions = useMemo(
    () => options?.map((o) => ({ value: o.value, label: o.label })) ?? [],
    [options]
  )

  const showSearchBox = dataset
    ? (showSearchBoxProp ?? true)
    : (showSearchBoxProp ?? selectOptions.length > SEARCH_BOX_OPTIONS_THRESHOLD)

  const field: F0SelectField = useMemo(() => {
    const base = {
      id: props.id,
      type: "select" as const,
      label: t("surveyFormBuilder.answer.label"),
      clearable: !props.required,
      multiple: isMulti,
      showSearchBox,
      searchBoxPlaceholder,
    }

    if (dataset) {
      return {
        ...base,
        placeholder:
          dataset.placeholder ??
          t("surveyFormBuilder.answer.dropdownPlaceholder"),
        source: dataset.dataSource,
        mapOptions: dataset.mapOptions,
        icon: dataset.icon,
      }
    }

    return {
      ...base,
      placeholder: t("surveyFormBuilder.answer.dropdownPlaceholder"),
      options: selectOptions,
    }
  }, [
    props.id,
    props.required,
    isMulti,
    dataset,
    selectOptions,
    t,
    showSearchBox,
    searchBoxPlaceholder,
  ])

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
