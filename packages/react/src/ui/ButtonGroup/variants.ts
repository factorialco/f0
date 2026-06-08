import { cva } from "cva"

/**
 * Class variants for {@link ButtonGroup}'s **stacked (column) branch** —
 * alignment, the stack breakpoint, full-width-on-stack, and stacked-order
 * reversal. The row branch builds its flex layout inline (it also runs the
 * width-measured overflow), so these classes only apply once the group collapses
 * into a column below the breakpoint.
 *
 * Every generated class is a static string so Tailwind's JIT can see it.
 */
export const buttonGroupVariants = cva({
  // Gap is a fixed `gap-md` (8px) for every button group — a constant rhythm
  // across surfaces, not a per-call knob.
  base: "flex gap-md",
  variants: {
    // Action groups are never left-aligned (a left-positioned primary is an
    // anti-pattern), so only `end` (default, right-aligned) and `between`
    // (secondary ‖ primary) are exposed.
    align: {
      end: "justify-end",
      between: "justify-between",
    },
    /**
     * Orientation + responsive stacking, encoded as ONE axis:
     * - `none`: always a horizontal row.
     * - `sm` / `md`: stack as a column below the named *viewport* breakpoint and
     *   become a row at/above it (matches Card footer `sm`, ResourceHeader `md`).
     * - `container-md`: stack below the *container* `@md` breakpoint (28rem / 448px);
     *   requires an ancestor with `@container` (matches the Card oneLiner).
     */
    stack: {
      none: "flex-row items-center",
      sm: "flex-col items-stretch sm:flex-row sm:items-center",
      md: "flex-col items-stretch md:flex-row md:items-center",
      "container-md": "flex-col items-stretch @md:flex-row @md:items-center",
    },
    /**
     * When stacked, stretch every direct child to full width; revert to auto
     * width once the row layout kicks in. No-op when `stack="none"`.
     */
    fullWidthOnStack: {
      true: "",
      false: "",
    },
    /**
     * Reverse the *stacked* (column) order so the LAST child renders on top,
     * then restore source order once the row layout kicks in. Use it to promote
     * the primary (passed last) above the secondaries when the group stacks.
     * Note: this flips the WHOLE column, so secondary buttons also reverse.
     * No-op when `stack="none"`. Resolved via compound variants below.
     */
    reverseOnStack: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    // full-width only while stacked, released at the row breakpoint
    {
      stack: "sm",
      fullWidthOnStack: true,
      class: "[&>*]:w-full sm:[&>*]:w-auto",
    },
    {
      stack: "md",
      fullWidthOnStack: true,
      class: "[&>*]:w-full md:[&>*]:w-auto",
    },
    {
      stack: "container-md",
      fullWidthOnStack: true,
      class: "[&>*]:w-full @md:[&>*]:w-auto",
    },
    // reverse only the stacked (column) part; `flex-col-reverse` wins over the
    // stack variant's `flex-col` via tailwind-merge, leaving the row class intact
    { stack: "sm", reverseOnStack: true, class: "flex-col-reverse" },
    { stack: "md", reverseOnStack: true, class: "flex-col-reverse" },
    { stack: "container-md", reverseOnStack: true, class: "flex-col-reverse" },
  ],
  defaultVariants: {
    align: "end",
    stack: "none",
    fullWidthOnStack: false,
    reverseOnStack: false,
  },
})
