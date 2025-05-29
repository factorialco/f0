import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from "@/ui/avatar"
import { ComponentProps, forwardRef } from "react"
import { Badge, BadgeProps } from "../../Badge"
import { getAvatarColor, getInitials, getMask } from "./utils"

const getBadgeSize = (size: ShadAvatarProps["size"]) => {
  if (size === "xlarge") return "lg"
  if (size === "large") return "md"
  if (size === "xsmall") return "xs"
  if (size === "small") return "sm"
  return "sm"
}

type ShadAvatarProps = ComponentProps<typeof AvatarComponent>

type Props = {
  type: ShadAvatarProps["type"]
  name: string | string[]
  src?: string
  size?: ShadAvatarProps["size"]
  color?: ShadAvatarProps["color"] | "random"
  badge?: BadgeProps
} & Pick<ShadAvatarProps, "aria-label" | "aria-labelledby">

export const BaseAvatar = forwardRef<HTMLDivElement, Props>(
  (
    {
      src,
      name,
      size,
      type = "base",
      color = "random",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      badge,
    },
    ref
  ) => {
    const initials = getInitials(name, size)
    const avatarColor =
      color === "random"
        ? getAvatarColor(Array.isArray(name) ? name.join("") : name)
        : color

    const hasAria = Boolean(ariaLabel || ariaLabelledby)

    return (
      <div className="relative inline-flex">
        <div
          className="h-fit w-fit"
          style={badge ? { clipPath: getMask.get(type, size) } : undefined}
        >
          <AvatarComponent
            size={size}
            type={type}
            color={avatarColor}
            ref={ref}
            role="img"
            aria-hidden={!hasAria}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledby}
            data-a11y-color-contrast-ignore
            className={
              src
                ? "bg-f1-background dark:bg-f1-background-inverse-secondary"
                : ""
            }
          >
            <AvatarImage src={src} alt={initials} />
            <AvatarFallback data-a11y-color-contrast-ignore>
              {initials}
            </AvatarFallback>
          </AvatarComponent>
        </div>
        {badge && (
          <div className="absolute -bottom-0.5 -right-0.5">
            <Badge
              type={badge.type}
              icon={badge.icon}
              size={getBadgeSize(size)}
            />
          </div>
        )}
      </div>
    )
  }
)

BaseAvatar.displayName = "BaseAvatar"
