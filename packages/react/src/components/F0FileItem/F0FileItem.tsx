import { cva } from "cva"
import { forwardRef } from "react"

import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { F0Button } from "@/components/F0Button"
import {
  DropdownInternal,
  DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal"
import { CrossedCircle, Ellipsis } from "@/icons/app"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"
import { cn } from "@/lib/utils"

import type { FileDef } from "@/components/avatars/F0AvatarFile/types"
import type { IconType } from "@/components/F0Icon"
import type { HTMLAttributes } from "react"

// Declared next to the component (not in a sibling types.ts) so api-extractor
// rolls them into the bundled d.ts instead of emitting a broken relative import.
export type F0FileAction = {
  icon?: IconType
  label: string
  onClick: () => void
  critical?: boolean
}

export const f0FileItemSizes = ["md", "lg"] as const
export type F0FileItemSize = (typeof f0FileItemSizes)[number]

export interface F0FileItemProps extends HTMLAttributes<HTMLDivElement> {
  file: File | FileDef
  actions?: F0FileAction[]
  disabled?: boolean
  size?: F0FileItemSize
}

/** @deprecated Use F0FileAction */
export type FileAction = F0FileAction
/** @deprecated Use F0FileItemProps */
export type FileItemProps = F0FileItemProps
/** @deprecated Use F0FileItemSize */
export type FileItemSize = F0FileItemSize

const fileItemVariants = cva({
  base: "flex w-fit flex-row items-center overflow-hidden bg-f1-background-tertiary rounded-[10px]",
  variants: {
    size: {
      md: "max-w-48 gap-2 py-0.5 pl-0.5 pr-1.5",
      lg: "max-w-56 gap-2.5 p-1",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const avatarSizeMap: Record<F0FileItemSize, "sm" | "md"> = {
  md: "md",
  lg: "md",
}

const buttonSizeMap: Record<F0FileItemSize, "sm" | "md"> = {
  md: "sm",
  lg: "md",
}

const _F0FileItem = forwardRef<HTMLDivElement, F0FileItemProps>(
  (
    { file, actions = [], disabled = false, size = "md", className, ...props },
    ref
  ) => {
    const hasActions = actions.length > 0
    const singleAction = actions.length === 1 ? actions[0] : null

    const dropdownItems: DropdownItem[] = actions.map((action) => ({
      label: action.label,
      icon: action.icon,
      critical: action.critical,
      onClick: disabled ? undefined : action.onClick,
    }))

    return (
      <div
        ref={ref}
        className={cn(fileItemVariants({ size }), className)}
        {...props}
      >
        <F0AvatarFile file={file} size={avatarSizeMap[size]} />
        <OneEllipsis
          className={cn(
            "text-neutral-1000 grow text-sm font-medium",
            !hasActions && "pr-3"
          )}
        >
          {file.name}
        </OneEllipsis>
        {hasActions &&
          (singleAction ? (
            <F0Button
              label={singleAction.label}
              size={buttonSizeMap[size]}
              icon={singleAction.icon ?? CrossedCircle}
              disabled={disabled}
              onClick={disabled ? undefined : singleAction.onClick}
              hideLabel
              variant="ghost"
            />
          ) : (
            <DropdownInternal
              items={dropdownItems}
              icon={Ellipsis}
              size={buttonSizeMap[size]}
            />
          ))}
      </div>
    )
  }
)
_F0FileItem.displayName = "F0FileItem"

/**
 * @experimental This is an experimental component, use it at your own risk
 */
const F0FileItem = experimentalComponent(
  "F0FileItem",
  withDataTestId(_F0FileItem)
)

export { F0FileItem }

/** @deprecated Use F0FileItem */
export const FileItem = F0FileItem
