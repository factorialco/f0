import type { NewColor } from "@/components/tags/F0TagDot/types"
import type { WithDataTestIdProps } from "@/lib/data-testid"
import type { InFilterDefinition } from "@/patterns/OneFilterPicker/filterTypes"
import type { FiltersState } from "@/patterns/OneFilterPicker/types"

export type F0FilterTagPickerOptionValue = string | number

export const f0FilterTagPickerModes = ["mixed", "tags"] as const
export type F0FilterTagPickerMode = (typeof f0FilterTagPickerModes)[number]

export type F0FilterTagPickerFilterDefinition<
  Value extends F0FilterTagPickerOptionValue = F0FilterTagPickerOptionValue,
> = InFilterDefinition<Value>

export type F0FilterTagPickerFiltersDefinition = Record<
  string,
  F0FilterTagPickerFilterDefinition
>

export interface F0FilterTagPickerTextToken {
  /** Free-form text kept verbatim between filter tags. */
  type: "text"
  value: string
}

export type F0FilterTagPickerFilterToken<
  Filters extends F0FilterTagPickerFiltersDefinition,
> = {
  [Key in keyof Filters & string]: Filters[Key] extends InFilterDefinition<
    infer Value
  >
    ? {
        /** A selected option from one of the supplied filter definitions. */
        type: "filter"
        filterKey: Key
        value: Extract<Value, F0FilterTagPickerOptionValue>
      }
    : never
}[keyof Filters & string]

/** Ordered, implementation-independent representation of the editor content. */
export type F0FilterTagPickerValue<
  Filters extends F0FilterTagPickerFiltersDefinition,
> = Array<F0FilterTagPickerTextToken | F0FilterTagPickerFilterToken<Filters>>

export interface F0FilterTagPickerProps<
  Filters extends F0FilterTagPickerFiltersDefinition,
> extends WithDataTestIdProps {
  /** Available option-based filter categories. */
  filters: Filters
  /** Ordered free text and selected filter tokens. */
  value: F0FilterTagPickerValue<Filters>
  /** Called immediately whenever text or a filter token changes. */
  onChange: (value: F0FilterTagPickerValue<Filters>) => void
  /** Whether free text is persisted alongside tags or used only as a transient search. */
  mode?: F0FilterTagPickerMode
  /** Visible and accessible label for the picker. */
  label: string
  /** Placeholder shown after the selected tags. */
  placeholder?: string
  /** Optional category color overrides. Defaults are stable for each filter key. */
  categoryColors?: Partial<Record<keyof Filters, NewColor>>
  /** Prevents searching, browsing, adding, and removing values. */
  disabled?: boolean
}

/** Converts the editor value into the shared filters state shape. */
export function filterTagPickerValueToFiltersState<
  Filters extends F0FilterTagPickerFiltersDefinition,
>(value: F0FilterTagPickerValue<Filters>): FiltersState<Filters> {
  const filtersState: Record<string, F0FilterTagPickerOptionValue[]> = {}

  for (const token of value) {
    if (token.type !== "filter") continue

    const currentValues = filtersState[token.filterKey] ?? []
    if (!currentValues.some((item) => Object.is(item, token.value))) {
      filtersState[token.filterKey] = [...currentValues, token.value]
    }
  }

  return filtersState as FiltersState<Filters>
}
