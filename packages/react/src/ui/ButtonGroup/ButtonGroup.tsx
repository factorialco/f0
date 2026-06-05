import { type VariantProps } from "cva"

import { cn } from "@/lib/utils"

import { buttonGroupVariants } from "./variants"

export interface ButtonGroupProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

/**
 * Low-level layout primitive that arranges a group of action buttons.
 *
 * It controls ONLY arrangement: alignment, orientation, gap, responsive
 * stacking (viewport via `stack="sm"|"md"` or container via
 * `stack="container-md"`), full-width-on-stack, and stacked-order reversal
 * (`reverseOnStack`, to promote the primary to the top when stacked).
 *
 * It does NOT own footer/header chrome (borders, padding), button `size`, or
 * collapse-into-dropdown behavior. Compose `F0ButtonDropdown` (array → split
 * button), an experimental `Dropdown` ("more" menu), or `ButtonGroupOverflow`
 * (generic width-driven overflow) as children for those. See `ButtonGroup.mdx`
 * for the per-component behavior matrix.
 *
 * Children render left→right, so pass the secondary action(s) first and the
 * primary last; with the default `align="end"` the primary ends up rightmost.
 * Insert a `<ButtonGroupSeparator />` between children to divide logical groups.
 */
export function ButtonGroup({
  align,
  stack,
  fullWidthOnStack,
  reverseOnStack,
  wrap,
  className,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      role="group"
      className={cn(
        buttonGroupVariants({
          align,
          stack,
          fullWidthOnStack,
          reverseOnStack,
          wrap,
        }),
        className
      )}
      {...props}
    />
  )
}

/**
 * Vertical hairline that divides logical groups inside a **row-layout**
 * `ButtonGroup` — e.g. the actions/close divider in a dialog header, or the
 * otherActions/primary divider in a page header. It is intended for horizontal
 * layouts and renders unconditionally, so don't place it inside a group that
 * stacks into a column (it would float oddly mid-column).
 */
export function ButtonGroupSeparator() {
  return (
    <div
      role="separator"
      aria-orientation="vertical"
      className="h-4 w-px self-center bg-f1-background-secondary"
    />
  )
}
