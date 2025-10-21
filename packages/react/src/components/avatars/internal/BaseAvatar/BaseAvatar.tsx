import { F0AvatarModule } from "@/components/avatars/F0AvatarModule"
import { F0Icon, F0IconProps } from "@/components/F0Icon"
import { Badge } from "@/experimental/Information/Badge"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
  InternalAvatarProps,
} from "@/ui/Avatar"
import { forwardRef, useMemo } from "react"
import { AvatarSize, avatarSizes, BaseAvatarProps, sizesMapping } from "./types"
import {
  getAvatarColor,
  getAvatarSize,
  getBadgeSize,
  getInitials,
  getMask,
} from "./utils"

const DEFAULT_SIZE = "md"

const iconSize: Record<AvatarSize, F0IconProps["size"]> = {
  xs: "xs",
  sm: "xs",
  md: "md",
  lg: "md",
  xl: "lg",
  "2xl": "lg",
}

export const BaseAvatar = forwardRef<HTMLDivElement, BaseAvatarProps>(
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
      flag,
      icon,
    },
    ref
  ) => {
    const reversedSizesMapping = useMemo(
      () =>
        Object.fromEntries(
          Object.entries(sizesMapping).map(([key, value]) => [value, key])
        ),
      []
    )

    const isSize = (
      size: AvatarSize | InternalAvatarProps["size"]
    ): size is AvatarSize => avatarSizes.includes(size as AvatarSize)

    // Check if size is a valid avatar size
    let mappedSize: AvatarSize = DEFAULT_SIZE
    if (size && !isSize(size)) {
      console.warn(
        `The avatar size: ${size} is deprecated. Use ${sizesMapping[size]} instead.`
      )
      mappedSize = sizesMapping[size] ?? DEFAULT_SIZE
    } else {
      mappedSize = size ?? DEFAULT_SIZE
    }

    const initials = getInitials(name, mappedSize)
    const avatarColor =
      color === "random"
        ? getAvatarColor(Array.isArray(name) ? name.join("") : name)
        : color

    const hasAria = Boolean(ariaLabel || ariaLabelledby)

    const badgeSize = getBadgeSize(mappedSize)
    const moduleAvatarSize = getAvatarSize(mappedSize)

    const badgeContent = useMemo(
      () =>
        badge ? (
          <>
            {badge.type === "module" && (
              <F0AvatarModule module={badge.module} size={moduleAvatarSize} />
            )}
            {badge.type !== "module" && (
              <Badge type={badge.type} icon={badge.icon} size={badgeSize} />
            )}
          </>
        ) : null,
      [badge, badgeSize, moduleAvatarSize]
    )

    return (
      <>
        <div className="relative inline-flex h-fit w-fit">
          <div
            className="relative h-fit w-fit"
            style={
              badge
                ? {
                    clipPath: getMask.get(
                      type === "rounded" ? "rounded" : "base",
                      mappedSize,
                      badge.type === "module" ? "module" : "default"
                    ),
                  }
                : undefined
            }
          >
            <AvatarComponent
              size={
                (reversedSizesMapping[
                  mappedSize
                ] as InternalAvatarProps["size"]) ||
                ("small" as InternalAvatarProps["size"])
              }
              type={type}
              color={avatarColor}
              ref={ref}
              role="img"
              aria-hidden={!hasAria}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledby}
              translate="no"
              data-a11y-color-contrast-ignore
              className={
                icon
                  ? "bg-f1-background-secondary"
                  : src || flag
                    ? "bg-f1-background dark:bg-f1-background-inverse-secondary"
                    : ""
              }
            >
              {icon ? (
                <F0Icon
                  icon={icon.icon}
                  color={icon.color}
                  size={iconSize[mappedSize]}
                />
              ) : (
                <>
                  {!flag ? (
                    <AvatarImage src={src} alt={initials} />
                  ) : (
                    <span className="absolute inset-0">{flag}</span>
                  )}
                  <AvatarFallback
                    data-a11y-color-contrast-ignore
                    className="select-none"
                  >
                    {initials}
                  </AvatarFallback>
                </>
              )}
            </AvatarComponent>
          </div>

          {badge && (
            <div className="absolute -bottom-0.5 -right-0.5">
              {badge.tooltip ? (
                <Tooltip description={badge.tooltip}>{badgeContent}</Tooltip>
              ) : (
                badgeContent
              )}
            </div>
          )}
        </div>
      </>
    )
  }
)

BaseAvatar.displayName = "BaseAvatar"
