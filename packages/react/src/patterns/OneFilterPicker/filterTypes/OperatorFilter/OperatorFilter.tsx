"use client"

import { useEffect, useId, useMemo, useRef, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Label } from "@/components/F0InputField/components/Label"
import { InputInternal } from "@/components/F0TextInput/internal"
import { ChevronDown } from "@/icons/app"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/Select"

import { FilterTypeComponentProps } from "../types"

/**
 * Input-styled trigger for the operator/value dropdowns.
 *
 * These pickers use the raw Select primitives with static `SelectItem`
 * children (not `F0Select`) on purpose: `F0Select` virtualizes its list and
 * only reveals it once the open animation emits `animationstart`. Inside a
 * compact anchored popover that event can fail to fire, leaving the list
 * stuck invisible and unmeasured. A fixed enum like the operator set has no
 * need for virtualization, so the static path is both simpler and robust.
 */
const selectTriggerClassName =
  "flex h-8 w-full items-center justify-between gap-2 rounded-md border " +
  "border-solid border-f1-border-secondary bg-f1-background px-3 text-base " +
  "text-f1-foreground outline-none transition-colors hover:bg-f1-background-hover " +
  "focus-visible:ring-1 focus-visible:ring-f1-border-selected-bold " +
  "data-[state=open]:bg-f1-background-hover [&>span]:truncate"

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

export type OperatorFilterCopy = {
  operatorLabel: string
  valueLabel: string
  valuesLabel: string
  numberValuePlaceholder: string
  numberValuesPlaceholder: string
  valuesHint: string
  noValueRequired: string
  fromLabel: string
  toLabel: string
  trueLabel: string
  falseLabel: string
  emptyOperators: string
}

export type OperatorFilterOptions = {
  /** Operators the user can choose from. An empty catalog renders a disabled state. */
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
  /**
   * Localizable form copy. Omitted fields use the built-in English defaults.
   * This copy is scoped to the opt-in condition editor so adding it does not
   * change F0's shared translation contract for existing consumers.
   */
  copy?: Partial<OperatorFilterCopy>
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
    case "range": {
      const from = coerceValue(draft.from, valueType)
      const to = coerceValue(draft.to, valueType)
      // A range is positional and only meaningful when both endpoints are
      // valid. Collapsing a missing From would otherwise make To reappear as
      // From when the controlled form is reopened.
      return from === undefined || to === undefined ? [] : [from, to]
    }
  }
}

const sameValues = (
  a: (string | number | boolean)[],
  b: (string | number | boolean)[]
): boolean => a.length === b.length && a.every((entry, i) => entry === b[i])

export const defaultOperatorFilterCopy: OperatorFilterCopy = {
  operatorLabel: "Condition",
  valueLabel: "Value",
  valuesLabel: "Values",
  numberValuePlaceholder: "e.g. 42",
  numberValuesPlaceholder: "e.g. 42, 84",
  valuesHint: "Separate multiple values with commas",
  noValueRequired: "This condition doesn't need a value",
  fromLabel: "From",
  toLabel: "To",
  trueLabel: "True",
  falseLabel: "False",
  emptyOperators: "No conditions available",
}

export const resolveOperatorFilterCopy = (
  options: OperatorFilterOptions
): OperatorFilterCopy => ({ ...defaultOperatorFilterCopy, ...options.copy })

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
  const fieldId = useId()
  const selectTriggerRefs = useRef(new Map<string, HTMLButtonElement>())
  const options = schema.options
  const valueType = options.valueType ?? "string"
  const copy = resolveOperatorFilterCopy(options)

  const [draft, setDraft] = useState<DraftInputs>(() =>
    draftFromValue(options, value)
  )

  const operator = resolveOperator(options, draft.operator)
  const mode = operatorValueMode(operator)
  const operatorValue = operator?.value

  // A valueless default is already a complete condition. Seed it as soon as
  // the form opens so a first/only "Has no value" operator can be applied
  // without the impossible requirement to switch away and back first.
  useEffect(() => {
    if (!value && operatorValue && mode === "none") {
      onChange({ operator: operatorValue, values: [] })
    }
  }, [mode, onChange, operatorValue, value])

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
      : valueType === "number"
        ? mode === "multiple"
          ? copy.numberValuesPlaceholder
          : copy.numberValuePlaceholder
        : undefined

  const booleanOptions = [
    { value: "true", label: copy.trueLabel },
    { value: "false", label: copy.falseLabel },
  ]

  const renderEnumSelect = (
    fieldKey: string,
    label: string,
    selectOptions: { value: string; label: string }[],
    selectedValue: string | undefined,
    onSelect: (next: string) => void,
    placeholderText?: string
  ): React.ReactNode => {
    const id = `${fieldId}-${fieldKey}`
    return (
      <div className="flex flex-col gap-1.5">
        <Label label={label} htmlFor={id} />
        <Select value={selectedValue ?? ""} onValueChange={onSelect}>
          <SelectTrigger
            ref={(node) => {
              if (node) selectTriggerRefs.current.set(fieldKey, node)
              else selectTriggerRefs.current.delete(fieldKey)
            }}
            id={id}
            className={selectTriggerClassName}
          >
            <SelectValue placeholder={placeholderText} />
            <F0Icon icon={ChevronDown} size="sm" />
          </SelectTrigger>
          <SelectContent
            focusableViewport={false}
            onCloseAutoFocus={() => {
              selectTriggerRefs.current.get(fieldKey)?.focus()
            }}
          >
            {selectOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  }

  const renderSingleInput = (
    key: "single" | "from" | "to",
    label: string
  ): React.ReactNode =>
    valueType === "boolean" ? (
      renderEnumSelect(
        key,
        label,
        booleanOptions,
        draft[key] || undefined,
        (next) => emit({ ...draft, [key]: next })
      )
    ) : (
      <InputInternal
        label={label}
        placeholder={placeholder}
        value={draft[key]}
        onChange={(next: string) => emit({ ...draft, [key]: next })}
        clearable
      />
    )

  if (options.operators.length === 0) {
    return (
      <p
        role="status"
        className="m-0 p-2 text-base text-f1-foreground-secondary"
      >
        {copy.emptyOperators}
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-3 p-2">
      {renderEnumSelect(
        "operator",
        copy.operatorLabel,
        operatorOptions,
        operator?.value,
        (next) => emit({ ...draft, operator: next })
      )}
      {mode === "none" && (
        <p className="m-0 text-base text-f1-foreground-secondary">
          {copy.noValueRequired}
        </p>
      )}
      {mode === "single" && renderSingleInput("single", copy.valueLabel)}
      {mode === "multiple" && (
        <div className="flex flex-col gap-1">
          <InputInternal
            label={copy.valuesLabel}
            placeholder={placeholder}
            value={draft.multiple}
            onChange={(next: string) => emit({ ...draft, multiple: next })}
            aria-describedby={`${fieldId}-values-hint`}
            clearable
          />
          <p
            id={`${fieldId}-values-hint`}
            className="m-0 text-sm text-f1-foreground-secondary"
          >
            {copy.valuesHint}
          </p>
        </div>
      )}
      {mode === "range" && (
        <div className="flex items-start gap-2 [&>*]:flex-1">
          {renderSingleInput("from", copy.fromLabel)}
          {renderSingleInput("to", copy.toLabel)}
        </div>
      )}
    </div>
  )
}
