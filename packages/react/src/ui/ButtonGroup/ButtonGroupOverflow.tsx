import { F0Button } from "@/components/F0Button"
import {
  type ButtonSize,
  type ButtonVariant,
} from "@/components/F0Button/types"
import { type IconType } from "@/components/F0Icon"
import { Dropdown, type DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Ellipsis } from "@/icons/app"
import { cn } from "@/lib/utils"
import { useOverflowCalculation } from "@/ui/OverflowList/useOverflowCalculation"

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
  /** Size applied to every rendered button and the "more" trigger. @default "md" */
  size?: ButtonSize
  /** Variant for actions that don't set their own. @default "outline" */
  variant?: ButtonVariant
  /** Pixel gap between visible buttons. @default 8 */
  gap?: number
  className?: string
}

/**
 * Composition helper that lays out a row of action buttons and sheds the ones
 * that don't fit into a real ellipsis ("⋯") **`Dropdown`** menu — a proper button
 * that closes on select — driven by the measurement-based {@link useOverflowCalculation}.
 *
 * Use it for **width-driven** overflow (e.g. a toolbar / action row that should
 * collapse as space shrinks). This is distinct from a fixed, count-independent
 * "more" bucket (use an experimental `Dropdown` directly for that), and it is NOT
 * part of `ButtonGroup`'s layout job — drop it in as a child of a `ButtonGroup`
 * or use it standalone. The host must constrain the width (this fills it with
 * `w-full`) for the overflow to engage.
 */
export function ButtonGroupOverflow({
  actions,
  size = "md",
  variant = "outline",
  gap = 8,
  className,
}: ButtonGroupOverflowProps) {
  const {
    containerRef,
    measurementContainerRef,
    customOverflowIndicatorRef,
    visibleItems,
    overflowItems,
    isInitialized,
  } = useOverflowCalculation(actions, gap)

  // Before the first measurement, optimistically show everything so the row
  // doesn't flash empty; the measured split takes over once initialized.
  const shown = isInitialized ? visibleItems : actions
  const overflowed = isInitialized ? overflowItems : []

  const menuItems: DropdownItem[] = overflowed.map((action) => ({
    label: action.label,
    icon: action.icon,
    onClick: action.onClick,
  }))

  const renderButton = (action: ButtonGroupOverflowAction, index: number) => (
    <F0Button
      key={action.id ?? index}
      label={action.label}
      icon={action.icon}
      variant={action.variant ?? variant}
      size={size}
      disabled={action.disabled}
      onClick={action.onClick}
    />
  )

  return (
    <div
      ref={containerRef}
      className={cn("relative flex w-full min-w-0 items-center", className)}
      style={{ gap }}
    >
      {/* Hidden full-width measurement copy, used to compute the visible split. */}
      <div
        ref={measurementContainerRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute left-0 top-0 flex items-center whitespace-nowrap"
        style={{ gap }}
      >
        {actions.map(renderButton)}
      </div>

      {shown.map(renderButton)}

      {menuItems.length > 0 && (
        <div ref={customOverflowIndicatorRef}>
          <Dropdown items={menuItems} icon={Ellipsis} size={size} />
        </div>
      )}
    </div>
  )
}
