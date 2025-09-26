import { F0Icon } from "@/components/F0Icon/F0Icon"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

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
        "rounded-2xs bg-f1-background-secondary p-0.5",
        "flex h-fit items-center justify-center",
        !disabled && "cursor-pointer",
        size === "sm" ? "h-[16px] w-[16px]" : "h-[24px] w-[24px]",
        className
      )}
      onClick={() => {
        if (disabled) return
        onChange?.(!open)
      }}
    >
      <div
        className={cn(
          "origin-center transition-transform duration-200",
          "flex items-center justify-center",
          open && "rotate-180"
        )}
      >
        <F0Icon
          icon={ChevronDown}
          size="sm"
          className={cn(
            "rounded-2xs bg-f1-background-secondary p-0.5 transition-transform duration-200",
            open && "rotate-180",
            !disabled && "cursor-pointer"
          )}
        />
      </div>
    </div>
  )
}
