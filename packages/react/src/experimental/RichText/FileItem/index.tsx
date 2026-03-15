import { cva, type VariantProps } from "cva"
import { forwardRef } from "react"

import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { F0Icon, IconType } from "@/components/F0Icon"
import {
  DropdownInternal,
  DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { CrossedCircle, Ellipsis } from "@/icons/app"
import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

type FileAction = {
  icon?: IconType
  label: string
  onClick: () => void
  critical?: boolean
}

const fileItemVariants = cva({
  base: "flex w-fit flex-row items-center overflow-hidden bg-f1-background-tertiary",
  variants: {
    size: {
      md: "max-w-40 gap-2 rounded-md p-0.5 pr-2",
      lg: "max-w-56 gap-2.5 rounded-lg p-1 pr-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

type FileItemSize = NonNullable<VariantProps<typeof fileItemVariants>["size"]>

const avatarSizeMap: Record<FileItemSize, "sm" | "md"> = {
  md: "sm",
  lg: "md",
}

const iconSizeMap: Record<FileItemSize, "md" | "lg"> = {
  md: "md",
  lg: "lg",
}

interface FileItemProps extends React.HTMLAttributes<HTMLDivElement> {
  file: File
  actions?: FileAction[]
  disabled?: boolean
  size?: FileItemSize
}

const _FileItem = forwardRef<HTMLDivElement, FileItemProps>(
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
        <Tooltip label={file.name}>
          <p className="text-neutral-1000 grow overflow-hidden truncate text-ellipsis text-sm font-medium">
            {file.name}
          </p>
        </Tooltip>
        {hasActions &&
          (singleAction ? (
            <F0Icon
              size={iconSizeMap[size]}
              icon={singleAction.icon ?? CrossedCircle}
              className={cn(
                "cursor-pointer text-f1-icon",
                disabled ? "cursor-not-allowed" : "hover:text-f1-icon-bold",
                singleAction.critical && "text-f1-foreground-critical"
              )}
              onClick={disabled ? undefined : singleAction.onClick}
            />
          ) : (
            <DropdownInternal items={dropdownItems} icon={Ellipsis} size="sm" />
          ))}
      </div>
    )
  }
)
_FileItem.displayName = "FileItem"

export const FileItem = withDataTestId(_FileItem)
export type { FileAction, FileItemSize }
