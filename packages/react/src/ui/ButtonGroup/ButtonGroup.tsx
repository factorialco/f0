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
  gap,
  stack,
  fullWidthOnStack,
  reverseOnStack,
  wrap,
  className,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={cn(
        buttonGroupVariants({
          align,
          gap,
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
 * Vertical hairline separator for dividing logical action groups inside a
 * `ButtonGroup` (e.g. the otherActions/primary divider in ResourceHeader, or
 * the actions/close divider in the Dialog header). Hidden while the group is
 * stacked into a column, mirroring the existing components which only show the
 * divider in the horizontal (row) layout.
 *
 * `showOn` must match the parent `ButtonGroup`'s `stack` breakpoint so the
 * divider appears exactly when the group becomes a row.
 */
export function ButtonGroupSeparator({
  showOn = "always",
}: {
  /** Breakpoint at which the group becomes a row and the divider should show. */
  showOn?: "always" | "sm" | "md" | "container-md"
}) {
  const visibility = {
    always: "block",
    sm: "hidden sm:block",
    md: "hidden md:block",
    "container-md": "hidden @md:block",
  }[showOn]

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      className={cn(
        "h-4 w-px self-center bg-f1-background-secondary-hover",
        visibility
      )}
    />
  )
}
