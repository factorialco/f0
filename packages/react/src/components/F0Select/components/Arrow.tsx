import { F0Icon } from "@/components/F0Icon/F0Icon"
import { DropdownOpen } from "@/icons/app"
import { cn } from "@/lib/utils"

export const Arrow = ({
  disabled,
  open,
  onChange,
  size = "sm",
  className,
}: {
  disabled?: boolean
  open?: boolean
  onChange?: (open: boolean) => void
  size: "sm" | "md"
  className?: string
}) => {
  return (
    <div
      className={cn(
        !disabled && "cursor-pointer",
        "origin-center transition-transform duration-200",
        "flex items-center justify-center",
        !open && "rotate-180",
        size === "md" && "scale-110",
        className
      )}
      onClick={() => {
        if (disabled) return
        onChange?.(!open)
      }}
    >
      <F0Icon icon={DropdownOpen} size="lg" />
    </div>
  )
}
