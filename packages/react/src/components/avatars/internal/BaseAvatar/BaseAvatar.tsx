import { forwardRef, useMemo } from "react"
import { F0AvatarModule } from "@/components/avatars/F0AvatarModule"
import { F0Icon, F0IconProps } from "@/components/F0Icon"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
  InternalAvatarProps,
} from "@/ui/Avatar"
import { Badge } from "@/ui/IconBadge"
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
  sm: "sm",
  md: "md",
  lg: "md",
  xl: "lg",
  "2xl": "lg",
}

const isSize = (
  size: AvatarSize | InternalAvatarProps["size"]
): size is AvatarSize => avatarSizes.includes(size as AvatarSize)

/**
 * The size to draw at. A deprecated internal size is mapped to its avatar
 * size, and says so.
 */
const resolveAvatarSize = (size: BaseAvatarProps["size"]): AvatarSize => {
  if (size && !isSize(size)) {
    console.warn(
      `The avatar size: ${size} is deprecated. Use ${sizesMapping[size]} instead.`
    )
    return sizesMapping[size] ?? DEFAULT_SIZE
  }
  return size ?? DEFAULT_SIZE
}

/** The ground the avatar sits on: an icon, an image or a flag, or nothing. */
const avatarBackgroundClass = ({
  icon,
  src,
  flag,
}: Pick<BaseAvatarProps, "icon" | "src" | "flag">): string => {
  if (icon) {
    return "bg-f1-background-secondary"
  }
  if (src || flag) {
    return "bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary"
  }
  return ""
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

    const mappedSize = resolveAvatarSize(size)

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
            {badge.type === "module" ? (
              <F0AvatarModule module={badge.module} size={moduleAvatarSize} />
            ) : null}
            {badge.type !== "module" ? (
              <Badge type={badge.type} icon={badge.icon} size={badgeSize} />
            ) : null}
          </>
        ) : null,
      [badge, badgeSize, moduleAvatarSize]
    )

    const renderAvatar = () => (
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
            className={avatarBackgroundClass({ icon, src, flag })}
          >
            {icon ? (
              <F0Icon
                icon={icon.icon}
                color={icon.color}
                size={iconSize[mappedSize]}
              />
            ) : flag ? (
              <span className="absolute inset-0">{flag}</span>
            ) : (
              <>
                <AvatarImage src={src} alt={initials} />
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

        {badge ? (
          <div className="absolute -bottom-0.5 -right-0.5">{badgeContent}</div>
        ) : null}
      </div>
    )

    const avatar = renderAvatar()

    // The tooltip wraps the whole avatar (a real element the trigger can
    // attach to), so hovering anywhere on it — not just the badge — shows it.
    return badge?.tooltip ? (
      <Tooltip description={badge.tooltip}>{avatar}</Tooltip>
    ) : (
      avatar
    )
  }
)

BaseAvatar.displayName = "BaseAvatar"
