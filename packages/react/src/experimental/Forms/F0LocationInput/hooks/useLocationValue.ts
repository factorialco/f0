import { useCallback, useRef, useState } from "react"
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
  // Controlled-ness is frozen on the first render rather than re-read from
  // `valueProp !== undefined` each time, because this component emits
  // `undefined` for an empty value: a controlled parent handing that back
  // would otherwise flip the field to uncontrolled, where the last internal
  // value it held reappears and the field can never be cleared.
  const isControlled = useRef(valueProp !== undefined).current
  const [internalValue, setInternalValue] = useState(defaultValue)
  const value = isControlled ? valueProp : internalValue
  const setValue = useCallback(
    (next: F0LocationInputValue | undefined) => {
      if (!isControlled) {
        setInternalValue(next)
      }
    },
    [isControlled]
  )
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
          // An edit that leaves the picked place standing leaves its provider
          // string standing too: the local join is the fallback for a value
          // that no longer describes what the provider returned.
          formatted: keepResolution
            ? (base.formatted ??
              formatLocationValue(base, getCountryName(base.country)))
            : formatLocationValue(base, getCountryName(base.country)),
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
  /**
   * A picked suggestion the provider could not resolve. It still describes a
   * whole address, so it replaces the value instead of patching the address
   * line: patching would leave the previous city, region and postal code
   * sitting under a street they do not belong to.
   */
  const setUnlistedAddress = useCallback(
    (text: string) => {
      edited({ addressLine1: text }, false)
    },
    [edited]
  )

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

  return {
    value,
    setPart,
    setUnlistedAddress,
    setCountry,
    applyResolved,
    clear,
  }
}
