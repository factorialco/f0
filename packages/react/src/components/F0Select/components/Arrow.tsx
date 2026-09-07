import { F0Icon } from "@/components/F0Icon/F0Icon"
import { DropdownOpen } from "@/icons/app"
import { cn } from "@/lib/utils"

/**
 * The glyph at the end of a select's field. Decoration, deliberately: the
 * field is the control, and it carries the name and the expanded state.
 *
 * A second real button in here would be a second touch target inside a 32px
 * field, which is a target-size violation, so what closes the list is the
 * field's own click handler recognising a click that landed on this glyph
 * (see `F0Select`'s `onClickContent`).
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
