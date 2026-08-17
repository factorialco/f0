import type { CountryCode as PhoneCountry } from "libphonenumber-js"

import { F0AvatarFlag } from "@/components/avatars/F0AvatarFlag"
import { F0Icon } from "@/components/F0Icon"
import { flagsMap } from "@/flags"
import { Globe } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { toCountryCode } from "../lib/phone"

export const CountryFlag = ({ country }: { country?: PhoneCountry }) => {
  const i18n = useI18n()
  const code = toCountryCode(country)

  if (!code || !(code in flagsMap)) {
    return <F0Icon icon={Globe} size="md" color="default" aria-hidden="true" />
  }

  return (
    <F0AvatarFlag
      flag={code}
      size="xs"
      aria-label={i18n.countries[code] ?? code}
    />
  )
}
