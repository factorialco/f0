import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { CrossedCircle } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"

import { chipVariants, type F0ChipProps } from "./types"

export { chipVariants }

export const F0Chip = ({
  deactivated,
  label,
  variant,
  onClick,
  onClose,
  avatar,
  icon,
}: F0ChipProps) => {
  const labelContent = (
    <>
      {avatar && <F0Avatar avatar={avatar} size="xs" />}
      <div className="flex items-center gap-0.5">
        {icon && <F0Icon icon={icon} size="sm" color="default" />}
        <span className={deactivated ? "text-f1-foreground/[0.61]" : undefined}>
          {label}
        </span>
      </div>
    </>
  )

  return (
    <div
      className={cn(
        chipVariants({ variant }),
        onClose && "pr-1.5",
        avatar && "pl-0.5",
        avatar && avatar.type !== "person" && "rounded-sm",
        icon && !avatar && "pl-1.5"
      )}
    >
      {onClick ? (
        <button
          type="button"
          className={cn(
            "flex items-center gap-1 bg-transparent p-0 font-[inherit]",
            "cursor-pointer",
            focusRing()
          )}
          onClick={onClick}
          aria-disabled={deactivated || undefined}
        >
          {labelContent}
        </button>
      ) : (
        <div className="flex items-center gap-1">{labelContent}</div>
      )}
      {onClose && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className={cn(
            "-m-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full [&_svg]:text-f1-icon-secondary [&_svg]:transition-colors [&_svg]:hover:text-f1-icon [&_svg]:focus:text-f1-icon",
            variant === "selected" &&
              "[&_svg]:text-f1-icon-selected [&_svg]:hover:text-f1-icon-selected-hover [&_svg]:focus:text-f1-icon-selected-hover",
            focusRing()
          )}
          aria-label={`Remove ${label}`}
        >
          <F0Icon icon={CrossedCircle} size="sm" />
        </button>
      )}
    </div>
  )
}

F0Chip.displayName = "F0Chip"
