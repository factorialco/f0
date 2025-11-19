import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { ButtonInternal } from "@/components/F0Button/internal"
import { IconType } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import {
  DropdownInternal,
  DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { CrossedCircle, Ellipsis } from "@/icons/app"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

type FileAction = {
  icon?: IconType
  label: string
  onClick: () => void
  critical?: boolean
}

interface FileItemProps extends React.HTMLAttributes<HTMLDivElement> {
  file: File
  actions?: FileAction[]
  disabled?: boolean
  size?: "sm" | "md"
}

const FileItem = forwardRef<HTMLDivElement, FileItemProps>(
  (
    { file, actions = [], disabled = false, className, size = "sm", ...props },
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
        className={cn(
          "flex w-full max-w-40 flex-row items-center gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary p-0.5",
          className
        )}
        {...props}
      >
        <F0AvatarFile file={file} size={size} />
        <Tooltip label={file.name}>
          <OneEllipsis
            lines={1}
            className={cn(
              "text-sm font-medium text-f1-foreground",
              size === "sm" ? "text-sm" : "text-base"
            )}
          >
            {file.name}
          </OneEllipsis>
        </Tooltip>
        {hasActions &&
          (singleAction ? (
            <ButtonInternal
              hideLabel
              variant="ghost"
              size={size}
              type="button"
              label={singleAction.label}
              icon={singleAction.icon ?? CrossedCircle}
              onClick={disabled ? undefined : singleAction.onClick}
              className="text-f1-foreground-secondary"
            />
          ) : (
            <DropdownInternal
              items={dropdownItems}
              icon={Ellipsis}
              size={size}
            />
          ))}
      </div>
    )
  }
)
FileItem.displayName = "FileItem"

export { FileItem }
export type { FileAction }
