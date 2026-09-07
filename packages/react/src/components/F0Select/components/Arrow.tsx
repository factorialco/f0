import { F0Icon } from "@/components/F0Icon/F0Icon"
import { DropdownOpen } from "@/icons/app"
import { cn } from "@/lib/utils"

/**
 * Decoration, deliberately: the field is the control. A button here would be a
 * second touch target inside a 32px field, so the field's own click handler
 * closes the list when the click landed on this glyph.
 */
export const Arrow = ({
  disabled,
  open,
  size = "sm",
  className,
}: {
  disabled?: boolean
  open?: boolean
  size: "sm" | "md"
  className?: string
}) => {
  return (
    <div
      data-testid="select-arrow"
      className={cn(
        !disabled && "cursor-pointer",
        "origin-center transition-transform duration-200",
        "flex items-center justify-center",
        !open && "rotate-180",
        size === "md" && "scale-110",
        className
      )}
    >
      <F0Icon icon={DropdownOpen} size="lg" />
    </div>
  )
}
