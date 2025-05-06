import { Icon, IconType } from "@/components/Utilities/Icon"
import { FileAvatar } from "@/experimental/exports"
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
}

const FileItem = forwardRef<HTMLDivElement, FileItemProps>(
  ({ file, actions = [], disabled = false, className, ...props }, ref) => {
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
          "flex w-fit max-w-40 flex-row items-center gap-2 overflow-hidden rounded-md bg-f1-background-tertiary p-0.5 pr-2",
          className
        )}
        {...props}
      >
        <FileAvatar file={file} />
        <Tooltip label={file.name}>
          <p className="text-neutral-1000 grow overflow-hidden truncate text-ellipsis text-sm font-medium">
            {file.name}
          </p>
        </Tooltip>
        {hasActions &&
          (singleAction ? (
            <Icon
              size="md"
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
FileItem.displayName = "FileItem"

export { FileItem }
export type { FileAction }
