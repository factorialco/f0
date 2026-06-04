import { F0Button } from "@/components/F0Button"
import {
  type ButtonSize,
  type ButtonVariant,
} from "@/components/F0Button/types"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { EllipsisHorizontal } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { OverflowList } from "@/ui/OverflowList"

// Square dimensions matching the F0Button heights, so the ellipsis "more"
// trigger lines up with the visible action buttons.
const triggerSizeClass: Record<ButtonSize, string> = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10",
}

export interface ButtonGroupOverflowAction {
  /** Stable identifier, used as the React key. */
  id: string
  label: string
  icon?: IconType
  onClick: () => void
  variant?: ButtonVariant
  disabled?: boolean
}

export interface ButtonGroupOverflowProps {
  actions: ButtonGroupOverflowAction[]
  /** Size applied to every rendered button. @default "md" */
  size?: ButtonSize
  /** Variant for actions that don't set their own. @default "outline" */
  variant?: ButtonVariant
  /** Pixel gap between visible buttons, forwarded to `OverflowList`. @default 8 */
  gap?: number
  /** Force the visible/overflow split (passed through to `OverflowList`). */
  max?: number
  min?: number
  className?: string
}

/**
 * Composition helper that lays out a row of action buttons and collapses the
 * ones that don't fit into a "more" popover, by wrapping the measurement-based
 * {@link OverflowList}. Use it for **width-driven** overflow — e.g. a toolbar
 * or action row that should shed buttons into a "more" menu as space shrinks —
 * so consumers don't re-wire `OverflowList` by hand.
 *
 * Note: this is NOT how ResourceHeader's `otherActions` work — those are always
 * a single "more" menu (a fixed bucket, count-independent), so reach for an
 * experimental `Dropdown` there instead. And it is NOT part of `ButtonGroup`'s
 * layout responsibilities: use it as a child of a `ButtonGroup` (or standalone).
 */
export function ButtonGroupOverflow({
  actions,
  size = "md",
  variant = "outline",
  gap = 8,
  max,
  min,
  className,
}: ButtonGroupOverflowProps) {
  const t = useI18n()

  return (
    <OverflowList
      items={actions}
      className={className}
      gap={gap}
      max={max}
      min={min}
      renderListItem={(action) => (
        <F0Button
          label={action.label}
          icon={action.icon}
          onClick={action.onClick}
          variant={action.variant ?? variant}
          size={size}
          disabled={action.disabled}
        />
      )}
      // The overflow affordance for an action group is an ellipsis "more"
      // trigger (not OverflowList's default "+N" count badge). `OverflowList`
      // already wraps this in a <button>, so render a styled span — not a
      // nested button — and expose the accessible name via sr-only text.
      renderOverflowIndicator={(_, isOpen) => (
        <span
          className={cn(
            "inline-flex items-center justify-center rounded-md border border-solid border-f1-border bg-f1-background text-f1-foreground transition-colors hover:bg-f1-background-secondary",
            triggerSizeClass[size],
            isOpen && "bg-f1-background-secondary"
          )}
        >
          <span className="sr-only">{t.actions.more}</span>
          <F0Icon
            icon={EllipsisHorizontal}
            size={size === "sm" ? "sm" : "md"}
          />
        </span>
      )}
      // Conventional menu rows (icon + left-aligned label), not stacked buttons.
      renderDropdownItem={(action) => (
        <button
          type="button"
          onClick={action.onClick}
          disabled={action.disabled}
          className="flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary disabled:cursor-default disabled:opacity-50"
        >
          {action.icon && <F0Icon icon={action.icon} size="sm" />}
          <span>{action.label}</span>
        </button>
      )}
    />
  )
}
