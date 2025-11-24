import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis/OneEllipsis"
import { Bullet } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"

interface CurrentVersionIndicatorProps {
  title: string
  onClick?: () => void
  isActive?: boolean
}

export function CurrentVersionIndicator({
  title,
  isActive = false,
  onClick,
}: CurrentVersionIndicatorProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        isActive && "bg-f1-background-tertiary",
        onClick && "cursor-pointer hover:bg-f1-background-hover",
        focusRing("focus-visible:ring-inset")
      )}
      onClick={onClick}
      disabled={!onClick}
      aria-label={`${title}${isActive ? " (selected)" : ""}`}
      aria-pressed={onClick ? isActive : undefined}
    >
      <F0Icon icon={Bullet} size="md" color="selected" />
      <OneEllipsis
        lines={1}
        className="text-[13px] font-semibold leading-5 text-f1-foreground-selected"
      >
        {title}
      </OneEllipsis>
    </button>
  )
}
