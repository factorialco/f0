"use client"

import { useEffect, useMemo, useState } from "react"

import { F0Select } from "@/components/F0Select"
import { InputInternal } from "@/components/F0TextInput/internal"
import { useI18n } from "@/lib/providers/i18n"

import { FilterTypeComponentProps } from "../types"

/** How many value inputs an operator requires. */
export type OperatorFilterValueMode = "none" | "single" | "multiple" | "range"

export type OperatorFilterOperator = {
  /** Serializable operator identifier (e.g. "equals", "not_in", "set"). */
  value: string
  /** Human-readable operator label. */
  label: string
  /** How many value inputs this operator needs. @default "single" */
  valueMode?: OperatorFilterValueMode
}

export type OperatorFilterOptions = {
  /** Operators the user can choose from. Must not be empty. */
  operators: OperatorFilterOperator[]
  /**
   * Coercion applied to the raw input before emitting values.
   * Invalid entries (e.g. non-numeric text for "number") are dropped, which
   * leaves the filter empty/inactive rather than emitting garbage.
   * @default "string"
   */
  valueType?: "string" | "number" | "boolean"
  /** Example values surfaced as input placeholder text. */
  suggestions?: string[]
}

export type OperatorFilterValue = {
  operator: string
  values: (string | number | boolean)[]
}

export type OperatorFilterComponentProps = FilterTypeComponentProps<
  OperatorFilterValue | undefined,
  OperatorFilterOptions
>

export const resolveOperator = (
  options: OperatorFilterOptions,
  operator: string | undefined
): OperatorFilterOperator | undefined =>
  options.operators.find((entry) => entry.value === operator) ??
  options.operators[0]

export const operatorValueMode = (
  operator: OperatorFilterOperator | undefined
): OperatorFilterValueMode => operator?.valueMode ?? "single"

const coerceValue = (
  raw: string,
  valueType: OperatorFilterOptions["valueType"]
): string | number | boolean | undefined => {
  const trimmed = raw.trim()
  if (!trimmed) return undefined

  if (valueType === "number") {
    const parsed = Number(trimmed)
    return Number.isFinite(parsed) ? parsed : undefined
  }

  if (valueType === "boolean") {
    if (trimmed.toLowerCase() === "true") return true
    if (trimmed.toLowerCase() === "false") return false
    return undefined
  }

  return trimmed
}

const coerceValues = (
  raw: string[],
  valueType: OperatorFilterOptions["valueType"]
): (string | number | boolean)[] =>
  raw
    .map((entry) => coerceValue(entry, valueType))
    .filter((entry): entry is string | number | boolean => entry !== undefined)

/** Raw text inputs backing the form, before coercion/validation. */
type DraftInputs = {
  operator: string
  single: string
  multiple: string
  from: string
  to: string
}

const draftFromValue = (
  options: OperatorFilterOptions,
  value: OperatorFilterValue | undefined
): DraftInputs => {
  const operator = resolveOperator(options, value?.operator)
  const values = (value?.values ?? []).map(String)
  const mode = operatorValueMode(operator)

  return {
    operator: operator?.value ?? "",
    single: mode === "single" ? (values[0] ?? "") : "",
    multiple: mode === "multiple" ? values.join(", ") : "",
    from: mode === "range" ? (values[0] ?? "") : "",
    to: mode === "range" ? (values[1] ?? "") : "",
  }
}

const draftValues = (
  draft: DraftInputs,
  mode: OperatorFilterValueMode,
  valueType: OperatorFilterOptions["valueType"]
): (string | number | boolean)[] => {
  switch (mode) {
    case "none":
      return []
    case "single":
      return coerceValues([draft.single], valueType)
    case "multiple":
      return coerceValues(draft.multiple.split(","), valueType)
    case "range":
      return coerceValues([draft.from, draft.to], valueType)
  }
}

const sameValues = (
  a: (string | number | boolean)[],
  b: (string | number | boolean)[]
): boolean => a.length === b.length && a.every((entry, i) => entry === b[i])

/**
 * A condition-style filter: the user picks an operator (equals, contains,
 * has no value, between…) and provides the values that operator needs.
 *
 * Designed for data sources with an explicit operator model (e.g. analytics
 * query specs) that can't be expressed by the plain in/search/date/number
 * filters.
 */
export function OperatorFilter({
  schema,
  value,
  onChange,
}: OperatorFilterComponentProps) {
  const i18n = useI18n()
  const options = schema.options
  const valueType = options.valueType ?? "string"

  const [draft, setDraft] = useState<DraftInputs>(() =>
    draftFromValue(options, value)
  )

  const operator = resolveOperator(options, draft.operator)
  const mode = operatorValueMode(operator)

  // Re-sync the raw inputs when the value is changed from outside the form
  // (e.g. "clear filters", or reopening the popover on another filter).
  // While the user types, `value` follows the draft, so this never fires.
  useEffect(() => {
    setDraft((current) => {
      const currentOperator = resolveOperator(options, current.operator)
      const currentValues = draftValues(
        current,
        operatorValueMode(currentOperator),
        valueType
      )

      const matchesDraft = value
        ? value.operator === currentOperator?.value &&
          sameValues(value.values, currentValues)
        : currentValues.length === 0

      return matchesDraft ? current : draftFromValue(options, value)
    })
  }, [value, options, valueType])

  const emit = (next: DraftInputs) => {
    setDraft(next)
    const nextOperator = resolveOperator(options, next.operator)
    if (!nextOperator) {
      onChange(undefined)
      return
    }
    onChange({
      operator: nextOperator.value,
      values: draftValues(next, operatorValueMode(nextOperator), valueType),
    })
  }

  const operatorOptions = useMemo(
    () =>
      options.operators.map((entry) => ({
        value: entry.value,
        label: entry.label,
      })),
    [options.operators]
  )

  const placeholder =
    options.suggestions && options.suggestions.length > 0
      ? options.suggestions.slice(0, 3).join(", ")
      : mode === "multiple"
        ? i18n.t("filters.operator.valuesPlaceholder")
        : i18n.t("filters.operator.valuePlaceholder")

  const booleanOptions = [
    { value: "true", label: i18n.t("filters.operator.trueLabel") },
    { value: "false", label: i18n.t("filters.operator.falseLabel") },
  ]

  const renderSingleInput = (
    key: "single" | "from" | "to",
    label: string
  ): React.ReactNode =>
    valueType === "boolean" ? (
      <F0Select
        label={label}
        options={booleanOptions}
        value={draft[key] || undefined}
        onChange={(next: string) => emit({ ...draft, [key]: next })}
      />
    ) : (
      <InputInternal
        label={label}
        placeholder={placeholder}
        value={draft[key]}
        onChange={(next: string) => emit({ ...draft, [key]: next })}
        clearable
      />
    )

  return (
    <div className="flex flex-col gap-3 p-2">
      <F0Select
        label={i18n.t("filters.operator.operatorLabel")}
        options={operatorOptions}
        value={operator?.value}
        onChange={(next: string) => emit({ ...draft, operator: next })}
      />
      {mode === "none" && (
        <p className="m-0 text-base text-f1-foreground-secondary">
          {i18n.t("filters.operator.noValueRequired")}
        </p>
      )}
      {mode === "single" &&
        renderSingleInput("single", i18n.t("filters.operator.valueLabel"))}
      {mode === "multiple" && (
        <div className="flex flex-col gap-1">
          <InputInternal
            label={i18n.t("filters.operator.valuesLabel")}
            placeholder={placeholder}
            value={draft.multiple}
            onChange={(next: string) => emit({ ...draft, multiple: next })}
            clearable
          />
          <p className="m-0 text-sm text-f1-foreground-secondary">
            {i18n.t("filters.operator.valuesHint")}
          </p>
        </div>
      )}
      {mode === "range" && (
        <div className="flex items-start gap-2 [&>*]:flex-1">
          {renderSingleInput("from", i18n.t("filters.operator.fromLabel"))}
          {renderSingleInput("to", i18n.t("filters.operator.toLabel"))}
        </div>
      )}
    </div>
  )
}
