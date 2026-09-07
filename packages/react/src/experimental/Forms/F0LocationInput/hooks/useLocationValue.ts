import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { useCallback, useRef } from "react"

import type { CountryCode } from "@/lib/countries"

import type { EditableLocationPart } from "../internal-types"
import type { F0LocationInputChangeMeta, F0LocationInputValue } from "../types"

import {
  formatLocationValue,
  invalidateResolution,
  isLocationValueEmpty,
  isResolvedValue,
} from "../lib/format"

type Options = {
  value?: F0LocationInputValue
  defaultValue?: F0LocationInputValue
  onChange?: (
    value: F0LocationInputValue | undefined,
    meta: F0LocationInputChangeMeta
  ) => void
  getCountryName: (country: CountryCode | undefined) => string | undefined
}

/**
 * Owns the structured value and the one correctness rule the component
 * exists for: any manual edit invalidates the picked place. Every emitted
 * change carries whether the value can still be trusted for coordinates.
 */
export const useLocationValue = ({
  value: valueProp,
  defaultValue,
  onChange,
  getCountryName,
}: Options) => {
  const [value, setValue] = useControllableState<
    F0LocationInputValue | undefined
  >({
    prop: valueProp,
    defaultProp: defaultValue,
  })
  // The latest value is needed synchronously inside event handlers that may
  // fire before React re-renders (type, then pick in the same tick).
  const valueRef = useRef(value)
  valueRef.current = value

  const emit = useCallback(
    (next: F0LocationInputValue | undefined, source: "picked" | "typed") => {
      const normalized = isLocationValueEmpty(next) ? undefined : next
      valueRef.current = normalized
      setValue(normalized)
      onChange?.(normalized, {
        source,
        isResolved: isResolvedValue(normalized),
      })
    },
    [onChange, setValue]
  )

  const edited = useCallback(
    (next: F0LocationInputValue) => {
      const withoutResolution = invalidateResolution(next)
      emit(
        {
          ...withoutResolution,
          formatted: formatLocationValue(
            withoutResolution,
            getCountryName(withoutResolution.country)
          ),
        },
        "typed"
      )
    },
    [emit, getCountryName]
  )

  const setPart = useCallback(
    (part: EditableLocationPart, text: string) => {
      edited({ ...valueRef.current, [part]: text })
    },
    [edited]
  )

  const setCountry = useCallback(
    (country: CountryCode | undefined) => {
      edited({ ...valueRef.current, country })
    },
    [edited]
  )

  const applyResolved = useCallback(
    (resolved: F0LocationInputValue) => {
      emit(
        {
          ...resolved,
          formatted:
            resolved.formatted ??
            formatLocationValue(resolved, getCountryName(resolved.country)),
        },
        "picked"
      )
    },
    [emit, getCountryName]
  )

  const clear = useCallback(() => emit(undefined, "typed"), [emit])

  return { value, setPart, setCountry, applyResolved, clear }
}
