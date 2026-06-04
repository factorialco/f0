import { cva } from "cva"

/**
 * Layout variants for {@link ButtonGroup}. This primitive controls ONLY the
 * arrangement of a group of action buttons (alignment, orientation, gap,
 * responsive stacking, full-width-on-stack). It deliberately does NOT own:
 *
 * - footer/header chrome (borders, padding) — that stays on the surrounding container,
 * - button `size` — a React prop that can't be switched by a container query, so it
 *   stays a consumer concern,
 * - collapse decisions (array→dropdown, count thresholds, hide-label-after-first) —
 *   those are domain logic; compose `F0ButtonDropdown` / `ButtonGroupOverflow` instead.
 *
 * Every generated class is a static string so Tailwind's JIT can see it.
 */
export const buttonGroupVariants = cva({
  base: "flex",
  variants: {
    // Action groups are never left-aligned (a left-positioned primary is an
    // anti-pattern), so only `end` (default, right-aligned) and `between`
    // (secondary ‖ primary) are exposed.
    align: {
      end: "justify-end",
      between: "justify-between",
    },
    gap: {
      sm: "gap-1",
      md: "gap-2", // Dialog header/footer
      lg: "gap-md", // Card desktop footer
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
    wrap: {
      true: "flex-wrap",
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
  ],
  defaultVariants: {
    align: "end",
    gap: "md",
    stack: "none",
    fullWidthOnStack: false,
    wrap: false,
  },
})
