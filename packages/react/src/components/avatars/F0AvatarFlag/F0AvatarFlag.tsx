import { getFlag } from "@/flags/flagsMap.tsx"
import { BaseAvatar } from "../internal/BaseAvatar"
import { F0AvatarFlagProps } from "./types"

export const F0AvatarFlag = ({
  flag,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge,
}: F0AvatarFlagProps) => {
  const FlagComponent = getFlag(flag) as React.ComponentType | undefined

  return (
    <BaseAvatar
      type="base"
      name="flag"
      flag={FlagComponent ? <FlagComponent /> : undefined}
      size={size}
      color="viridian"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      badge={badge}
    />
  )
}

F0AvatarFlag.displayName = "FlagAvatar"
