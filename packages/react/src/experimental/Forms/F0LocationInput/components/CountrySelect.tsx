import { useMemo } from "react"
import { F0Select } from "@/components/F0Select"
import type { CountryCode } from "@/lib/countries"
import { useI18n } from "@/lib/providers/i18n"
import { buildCountryOptions } from "../lib/countryOptions"
import type { LocationInputSize } from "../types"

type Props = {
  label: string
  value: CountryCode | undefined
  onChange: (country: CountryCode) => void
  countries?: readonly CountryCode[]
  size: LocationInputSize
  disabled?: boolean
  readonly?: boolean
  name?: string
}

export const CountrySelect = ({
  label,
  value,
  onChange,
  countries,
  size,
  disabled,
  readonly,
  name,
}: Props) => {
  const i18n = useI18n()
  const options = useMemo(
    () => buildCountryOptions(i18n.countries, countries),
    [i18n.countries, countries]
  )

  return (
    <F0Select<CountryCode>
      label={label}
      placeholder={i18n.locationInput.selectCountry}
      options={options}
      value={value}
      onChange={(next) => onChange(next)}
      showSearchBox
      searchBoxPlaceholder={i18n.locationInput.searchCountry}
      searchEmptyMessage={i18n.locationInput.noCountryResults}
      size={size}
      disabled={disabled || readonly}
      name={name}
    />
  )
}
