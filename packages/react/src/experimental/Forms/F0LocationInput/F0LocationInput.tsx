import { forwardRef, useCallback, useMemo, useRef, useState } from "react"

import type { InputFieldStatus } from "@/components/F0InputField"
import type { CountryCode } from "@/lib/countries"

import { InputMessages } from "@/components/F0InputField/components/InputMessages"
import { F0TextInput } from "@/components/F0TextInput"
import { useI18n } from "@/lib/providers/i18n"

import type { EditableLocationPart } from "./internal-types"
import type {
  F0LocationInputProps,
  F0LocationSuggestion,
  LocationField,
} from "./types"

import { AddressSelect } from "./components/AddressSelect"
import { AddressParts } from "./components/AddressParts"
import { CountrySelect } from "./components/CountrySelect"
import { useLocationValue } from "./hooks/useLocationValue"

export const F0LocationInput = forwardRef<
  HTMLInputElement,
  F0LocationInputProps
>(function F0LocationInput(
  {
    label,
    value: valueProp,
    defaultValue,
    onChange,
    fields,
    partLabels,
    countries,
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

  const visibleFields = useMemo(
    () => new Set<LocationField>(fields ?? []),
    [fields]
  )
  const detailed = visibleFields.size > 0

  const labels = useMemo<Record<EditableLocationPart | "country", string>>(
    () => ({
      addressLine1:
        partLabels?.addressLine1 ??
        (detailed ? i18n.locationInput.address : label),
      addressLine2: partLabels?.addressLine2 ?? i18n.locationInput.addressLine2,
      city: partLabels?.city ?? i18n.locationInput.city,
      state: partLabels?.state ?? i18n.locationInput.state,
      postalCode: partLabels?.postalCode ?? i18n.locationInput.postalCode,
      country: partLabels?.country ?? i18n.locationInput.country,
    }),
    [partLabels, detailed, label, i18n]
  )

  const searchCountry =
    value?.country ??
    defaultCountry ??
    (countries?.length === 1 ? countries[0] : undefined)

  // Picking shows the suggestion right away, but nothing is emitted until the
  // place resolves: an intermediate "typed" change would make consumers
  // geocode an address that is about to arrive with coordinates.
  const [pendingLabel, setPendingLabel] = useState<string | undefined>()
  const [resolving, setResolving] = useState(false)
  const pickIdRef = useRef(0)

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
    resolvePlace(suggestion.id)
      .then((resolved) => {
        if (pickId !== pickIdRef.current) return
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
        if (pickId !== pickIdRef.current) return
        if (process.env.NODE_ENV !== "production") {
          console.warn("F0LocationInput: resolvePlace rejected", reason)
        }
        setPart("addressLine1", suggestion.label)
      })
      .finally(() => {
        if (pickId !== pickIdRef.current) return
        setPendingLabel(undefined)
        setResolving(false)
      })
  }

  const handleTypedAddress = (text: string) => {
    cancelPendingPick()
    setPart("addressLine1", text)
  }

  const handleClear = () => {
    cancelPendingPick()
    clear()
  }

  // Legacy `hint`/`error` shortcuts, mirroring F0InputField's semantics
  let effectiveStatus: InputFieldStatus | undefined = status
  if (hint) effectiveStatus = { type: "default", message: hint }
  if (error) {
    effectiveStatus = {
      type: "error",
      message: typeof error === "string" ? error : undefined,
    }
  }

  // In detailed mode the message belongs to the group, the border to the field
  const fieldStatus =
    detailed && effectiveStatus
      ? { type: effectiveStatus.type }
      : effectiveStatus

  const addressField = searchPlaces ? (
    <AddressSelect
      label={labels.addressLine1}
      hideLabel={detailed ? false : hideLabel}
      labelIcon={detailed ? undefined : labelIcon}
      placeholder={placeholder}
      text={pendingLabel ?? value?.addressLine1 ?? ""}
      placeId={value?.placeId}
      country={searchCountry}
      searchPlaces={searchPlaces}
      onPick={handlePick}
      onTyped={handleTypedAddress}
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
  ) : (
    // Nothing to suggest, so the address line is a field the user just types in
    <F0TextInput
      ref={ref}
      label={labels.addressLine1}
      hideLabel={detailed ? false : hideLabel}
      labelIcon={detailed ? undefined : labelIcon}
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

  // Neither F0Select nor F0TextInput takes an onFocus, and focus events bubble
  // through React, so the pair is observed around the field instead
  const addressBlock =
    onFocus || onBlur ? (
      <div onFocus={onFocus} onBlur={onBlur}>
        {addressField}
      </div>
    ) : (
      addressField
    )

  if (!detailed) return addressBlock

  return (
    <fieldset
      className="m-0 flex min-w-0 flex-col gap-3 border-0 p-0"
      // The group is named for assistive tech only: each part carries its own
      // visible label, and a heading above them reads as a second form title
      aria-label={label}
      aria-busy={resolving || undefined}
    >
      {visibleFields.has("country") && (
        <CountrySelect
          label={labels.country}
          value={value?.country}
          onChange={setCountry}
          countries={countries}
          size={size}
          disabled={disabled}
          readonly={readonly}
          name={name ? `${name}.country` : undefined}
        />
      )}
      {addressBlock}
      <AddressParts
        fields={visibleFields}
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
      <InputMessages status={effectiveStatus} />
    </fieldset>
  )
})
