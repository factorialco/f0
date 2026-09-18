import type { F0SelectItemProps } from "@/components/F0Select"
import { flagsMap } from "@/flags"
import type { CountryCode } from "@/lib/countries"

/**
 * Sorted by the localized name, not by code, so the list reads in the order
 * the user knows from every other country picker.
 */
export const buildCountryOptions = (
  countryNames: Record<CountryCode, string>,
  allowed?: readonly CountryCode[]
): F0SelectItemProps<CountryCode>[] => {
  const codes = (
    allowed ?? (Object.keys(countryNames) as CountryCode[])
  ).filter((code) => code in countryNames)

  return codes
    .map((code) => ({
      value: code,
      label: countryNames[code],
      avatar:
        code in flagsMap ? ({ type: "flag", flag: code } as const) : undefined,
    }))
    .sort((a, b) => a.label.localeCompare(b.label))
}
