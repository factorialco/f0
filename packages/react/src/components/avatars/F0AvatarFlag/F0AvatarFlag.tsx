import { getFlag } from "@/flags/flagsMap.tsx"
import { CountryCode } from "@/lib/countries"
import { useI18n } from "@/lib/providers/i18n"

import { BaseAvatar } from "../internal/BaseAvatar"
import { F0AvatarFlagProps } from "./types"

export const F0AvatarFlag = ({
  flag,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge,
  testId,
}: F0AvatarFlagProps) => {
  const FlagComponent = getFlag(flag) as React.ComponentType | undefined

  const i18n = useI18n()

  const countryName = i18n.countries[flag as CountryCode] ?? flag

  return (
    <BaseAvatar
      type="base"
      name={countryName}
      flag={FlagComponent ? <FlagComponent /> : undefined}
      size={size}
      color="viridian"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      badge={badge}
      testId={testId}
    />
  )
}

F0AvatarFlag.displayName = "FlagAvatar"
