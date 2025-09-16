import { F0Icon, IconType } from "@/components/F0Icon"
import { cn } from "@/lib/utils"
import { BaseAvatarProps } from "../internal/BaseAvatar"

export const avatarIconSizes = ["sm", "md", "lg"] as const

export type F0AvatarIconProps = {
  icon: IconType
  size?: (typeof avatarIconSizes)[number]
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>

const sizes = {
  sm: "size-6 rounded-sm",
  md: "size-9 rounded-md",
  lg: "size-10 rounded-lg",
}

export const F0AvatarIcon = ({
  icon,
  size = "md",
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: F0AvatarIconProps) => {
  return (
    <div
      className={cn(
        "flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background dark:bg-f1-background-inverse-secondary",
        sizes[size]
      )}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      <F0Icon
        icon={icon}
        size={size}
        className="text-f1-foreground-secondary"
      />
    </div>
  )
}

F0AvatarIcon.displayName = "IconAvatar"
