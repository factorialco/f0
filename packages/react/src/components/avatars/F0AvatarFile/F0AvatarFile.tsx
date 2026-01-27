import { ElementRef, forwardRef, useMemo } from "react"

import { Badge } from "@/experimental/Information/Badge"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, InternalAvatarProps } from "@/ui/Avatar"

import { AvatarBadge } from "../F0Avatar/types"
import { F0AvatarModule } from "../F0AvatarModule"
import { BaseAvatarProps, sizesMapping } from "../internal/BaseAvatar"
import { AvatarFileSize, FileDef } from "./types"
import { getAvatarSize, getBadgeSize, getFileTypeInfo } from "./utils"

export type F0AvatarFileProps = Omit<
  React.ComponentPropsWithoutRef<typeof Avatar>,
  "type" | "size"
> & {
  file: FileDef
  size?: AvatarFileSize
  badge?: AvatarBadge
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">

const F0AvatarFile = forwardRef<ElementRef<typeof Avatar>, F0AvatarFileProps>(
  ({ file, badge, ...props }, ref) => {
    const { type: fileType, color: fileColor } = getFileTypeInfo(file)

    const reversedSizesMapping = useMemo(
      () =>
        Object.fromEntries(
          Object.entries(sizesMapping).map(([key, value]) => [value, key])
        ),
      []
    )

    const mappedSize: InternalAvatarProps["size"] = (reversedSizesMapping[
      props.size as string
    ] ?? "small") as InternalAvatarProps["size"]

    const badgeSize = getBadgeSize(props.size)
    const moduleAvatarSize = getAvatarSize(props.size)

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

    const textSize = useMemo(() => {
      const textSizeMap: Record<AvatarFileSize, string> = {
        xs: "text-[7px]",
        sm: "text-[8px]",
        md: "text-sm",
        lg: "text-sm",
      }
      return textSizeMap[props.size || "sm"] ?? textSizeMap.sm
    }, [props])

    return (
      <Avatar
        ref={ref}
        className={cn("bg-f1-background", "overflow-visible")}
        {...props}
        size={mappedSize}
      >
        <AvatarFallback
          className={cn("select-none font-semibold", textSize, fileColor)}
        >
          {fileType}
        </AvatarFallback>
        {badge && (
          <div className="absolute -bottom-0.5 -right-0.5">
            {badge.tooltip ? (
              <Tooltip description={badge.tooltip}>
                <div className="cursor-help">{badgeContent}</div>
              </Tooltip>
            ) : (
              badgeContent
            )}
          </div>
        )}
      </Avatar>
    )
  }
)
F0AvatarFile.displayName = "F0AvatarFile"

export { F0AvatarFile, type FileDef }
