import type { F0SelectItemProps } from "@/components/F0Select"
import type { CountryCode } from "@/lib/countries"

import { flagsMap } from "@/flags"

/**
 * One option per translated country, restricted to `allowed` when given and
 * sorted by the localized name so the list reads the same as the OS pickers
 * the user already knows.
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
