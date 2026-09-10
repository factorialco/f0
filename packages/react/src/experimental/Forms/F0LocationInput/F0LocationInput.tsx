import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react"
import type { InputFieldStatus } from "@/components/F0InputField"
import { InputMessages } from "@/components/F0InputField/components/InputMessages"
import { F0TextInput } from "@/components/F0TextInput"
import type { CountryCode } from "@/lib/countries"
import { useI18n } from "@/lib/providers/i18n"
import { AddressParts } from "./components/AddressParts"
import { AddressSelect } from "./components/AddressSelect"
import { CountrySelect } from "./components/CountrySelect"
import { useLocationValue } from "./hooks/useLocationValue"
import { invokeAsync } from "./lib/invokeAsync"
import type {
  F0LocationInputProps,
  F0LocationSuggestion,
  LocationPart,
} from "./types"

/**
 * The legacy `hint` and `error` shortcuts collapsed into the `status` the
 * fields take, with `F0InputField`'s precedence: an error outranks a hint,
 * and a hint outranks an explicit status.
 */
const resolveStatus = ({
  status,
  hint,
  error,
}: Pick<F0LocationInputProps, "status" | "hint" | "error">):
  | InputFieldStatus
  | undefined => {
  if (error) {
    return {
      type: "error",
      message: typeof error === "string" ? error : undefined,
    }
  }
  if (hint) {
    return { type: "default", message: hint }
  }
  return status
}

export const F0LocationInput = forwardRef<
  HTMLInputElement,
  F0LocationInputProps
>(function F0LocationInput(
  {
    label,
    value: valueProp,
    defaultValue,
    onChange,
    manualEntry = false,
    partLabels,
    allowedCountries,
    defaultCountry,
    searchPlaces,
    resolvePlace,
    placeholder,
    hideLabel = false,
    labelIcon,
    hint,
    error,
    status,
    required = false,
    disabled = false,
    readonly = false,
    loading = false,
    clearable = false,
    size = "md",
    name,
    autoFocus,
    onBlur,
    onFocus,
  },
  ref
) {
  const i18n = useI18n()

  const getCountryName = useCallback(
    (country: CountryCode | undefined) =>
      country ? i18n.countries[country] : undefined,
    [i18n]
  )

  const { value, setPart, setCountry, applyResolved, clear } = useLocationValue(
    {
      value: valueProp,
      defaultValue,
      onChange,
      getCountryName,
    }
  )

  const labels = useMemo<Record<LocationPart, string>>(
    () => ({
      addressLine1:
        partLabels?.addressLine1 ??
        (manualEntry ? i18n.locationInput.addressLine1 : label),
      addressLine2: partLabels?.addressLine2 ?? i18n.locationInput.addressLine2,
      city: partLabels?.city ?? i18n.locationInput.city,
      state: partLabels?.state ?? i18n.locationInput.state,
      postalCode: partLabels?.postalCode ?? i18n.locationInput.postalCode,
      country: partLabels?.country ?? i18n.locationInput.country,
    }),
    [partLabels, manualEntry, label, i18n]
  )

  // Never the value's own country: the search only exists without manual
  // entry, where no selector shows or undoes that scope, so the first picked
  // address would silently lock every later search to its country
  const searchCountry =
    defaultCountry ??
    (allowedCountries?.length === 1 ? allowedCountries[0] : undefined)

  // Picking shows the suggestion right away, but nothing is emitted until the
  // place resolves: an intermediate "typed" change would make consumers
  // geocode an address that is about to arrive with coordinates.
  const [pendingLabel, setPendingLabel] = useState<string | undefined>()
  const [resolving, setResolving] = useState(false)
  const pickIdRef = useRef(0)
  // A resolution still in flight must not emit once the field is gone
  useEffect(
    () => () => {
      pickIdRef.current += 1
    },
    []
  )

  const cancelPendingPick = () => {
    pickIdRef.current += 1
    setPendingLabel(undefined)
    setResolving(false)
  }

  const handlePick = (suggestion: F0LocationSuggestion) => {
    const pickId = ++pickIdRef.current
    if (!resolvePlace) {
      setPart("addressLine1", suggestion.label)
      return
    }
    setPendingLabel(suggestion.label)
    setResolving(true)
    // A resolver that throws synchronously would otherwise leave the field
    // locked on "resolving"
    invokeAsync(() => resolvePlace(suggestion.id))
      .then((resolved) => {
        if (pickId !== pickIdRef.current) {
          return
        }
        if (resolved) {
          applyResolved({
            ...resolved,
            placeId: resolved.placeId ?? suggestion.id,
          })
        } else {
          setPart("addressLine1", suggestion.label)
        }
      })
      .catch((reason: unknown) => {
        if (pickId !== pickIdRef.current) {
          return
        }
        if (process.env.NODE_ENV !== "production") {
          console.warn("F0LocationInput: resolvePlace rejected", reason)
        }
        setPart("addressLine1", suggestion.label)
      })
      .finally(() => {
        if (pickId !== pickIdRef.current) {
          return
        }
        setPendingLabel(undefined)
        setResolving(false)
      })
  }

  const handleClear = () => {
    cancelPendingPick()
    clear()
  }

  const effectiveStatus = resolveStatus({ status, hint, error })

  const messagesId = useId()

  // In detailed mode the message belongs to the group, the border to the field
  const fieldStatus =
    manualEntry && effectiveStatus
      ? { type: effectiveStatus.type }
      : effectiveStatus

  const addressField =
    searchPlaces && !manualEntry ? (
      <AddressSelect
        label={labels.addressLine1}
        hideLabel={hideLabel}
        labelIcon={labelIcon}
        placeholder={placeholder}
        // The provider's own string first: it is the whole address, which is
        // what this shape shows, and the parts are not on screen to complete
        // an address line on their own
        text={pendingLabel ?? value?.formatted ?? value?.addressLine1 ?? ""}
        placeId={value?.placeId}
        country={searchCountry}
        searchPlaces={searchPlaces}
        onPick={handlePick}
        onClear={handleClear}
        status={fieldStatus}
        required={required}
        disabled={disabled}
        readonly={readonly}
        loading={loading || resolving}
        clearable={clearable}
        size={size}
        name={name}
      />
    ) : manualEntry ? null : (
      // Nothing to suggest, so the address is a field the user just types in
      <F0TextInput
        ref={ref}
        label={labels.addressLine1}
        hideLabel={hideLabel}
        labelIcon={labelIcon}
        placeholder={placeholder}
        value={value?.addressLine1 ?? ""}
        onChange={(text) => setPart("addressLine1", text)}
        status={fieldStatus}
        required={required}
        disabled={disabled}
        readonly={readonly}
        loading={loading}
        clearable={clearable}
        size={size}
        name={name}
        autoFocus={autoFocus}
      />
    )

  if (!manualEntry) {
    // Neither F0Select nor F0TextInput takes an onFocus, and focus events
    // bubble through React, so the pair is observed around the field
    return onFocus || onBlur ? (
      <div onFocus={onFocus} onBlur={onBlur}>
        {addressField}
      </div>
    ) : (
      addressField
    )
  }

  return (
    <fieldset
      onFocus={onFocus}
      onBlur={onBlur}
      className="m-0 flex min-w-0 flex-col gap-3 border-0 p-0"
      // The group is named for assistive tech only: each part carries its own
      // visible label, and a heading above them reads as a second form title
      aria-label={label}
      aria-busy={resolving || undefined}
      aria-describedby={effectiveStatus?.message ? messagesId : undefined}
      aria-invalid={effectiveStatus?.type === "error" || undefined}
    >
      <CountrySelect
        label={labels.country}
        value={value?.country}
        onChange={setCountry}
        allowedCountries={allowedCountries}
        size={size}
        disabled={disabled}
        readonly={readonly}
        name={name ? `${name}.country` : undefined}
      />
      <AddressParts
        value={value}
        labels={labels}
        onChangePart={(part, text) => {
          cancelPendingPick()
          setPart(part, text)
        }}
        size={size}
        disabled={disabled}
        readonly={readonly}
        name={name}
      />
      <div
        id={messagesId}
        role={effectiveStatus?.type === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        <InputMessages status={effectiveStatus} />
      </div>
    </fieldset>
  )
})
