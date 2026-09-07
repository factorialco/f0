import { F0Icon } from "@/components/F0Icon/F0Icon"
import { DropdownOpen } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

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
  const i18n = useI18n()

  const classes = cn(
    !disabled && "cursor-pointer",
    "origin-center transition-transform duration-200",
    "flex items-center justify-center",
    !open && "rotate-180",
    size === "md" && "scale-110",
    className
  )

  /**
   * With no `onChange` the arrow is decoration: the whole field toggles the
   * list, and a second control announcing itself over it is noise.
   *
   * With one, the arrow IS the control — a field that is typed into cannot
   * toggle on click — so it has to be a real button with a name. It stays out
   * of the tab order, which is where the combobox pattern puts a popup button:
   * the keys that open and close the list already live on the field.
   */
  if (!onChange) {
    return (
      <div data-testid="select-arrow" className={classes}>
        <F0Icon icon={DropdownOpen} size="lg" />
      </div>
    )
  }

  return (
    <button
      type="button"
      data-testid="select-arrow"
      tabIndex={-1}
      disabled={disabled}
      aria-label={i18n.actions.toggleDropdownMenu}
      aria-expanded={!!open}
      className={cn(classes, "border-0 bg-transparent p-0", focusRing())}
      onClick={() => {
        if (disabled) return
        onChange(!open)
      }}
    >
      <F0Icon icon={DropdownOpen} size="lg" />
    </button>
  )
}
