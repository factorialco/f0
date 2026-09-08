import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { useCallback, useRef } from "react"
import type { CountryCode } from "@/lib/countries"
import type { EditableLocationPart } from "../internal-types"
import {
  editKeepsResolution,
  formatLocationValue,
  invalidateResolution,
  isLocationValueEmpty,
  isResolvedValue,
} from "../lib/format"
import type { F0LocationInputChangeMeta, F0LocationInputValue } from "../types"

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
  // Lets the callbacks below stay referentially stable while still reading the
  // current value. Deliberately only written on render: writing the emitted
  // value here too would leave the ref describing something a controlled
  // parent may have filtered or never accepted.
  const valueRef = useRef(value)
  valueRef.current = value

  const emit = useCallback(
    (next: F0LocationInputValue | undefined, source: "picked" | "typed") => {
      const normalized = isLocationValueEmpty(next) ? undefined : next
      setValue(normalized)
      onChange?.(normalized, {
        source,
        isResolved: isResolvedValue(normalized),
      })
    },
    [onChange, setValue]
  )

  const edited = useCallback(
    (next: F0LocationInputValue, keepResolution = false) => {
      const base = keepResolution ? next : invalidateResolution(next)
      emit(
        {
          ...base,
          formatted: formatLocationValue(base, getCountryName(base.country)),
        },
        "typed"
      )
    },
    [emit, getCountryName]
  )

  const setPart = useCallback(
    (part: EditableLocationPart, text: string) => {
      edited({ ...valueRef.current, [part]: text }, editKeepsResolution(part))
    },
    [edited]
  )

  // A new country moves the pin further than any street edit, so the parts
  // describing the old place go with the resolution: keeping them would emit
  // an address such as "Carrer de Colón 12, Barcelona, France"
  const setCountry = useCallback(
    (country: CountryCode | undefined) => {
      edited({ country })
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
