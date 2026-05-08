/**
 * Border radius scale.
 *
 * ## Usage convention for interactive components
 *
 * Interactive elements (buttons, toggle items, segments) follow a size-based mapping
 * derived from `buttonSizeVariants` in `@/ui/Action/variants.ts`:
 *
 *   sm  → rounded-sm  (0.5rem)
 *   md  → rounded     (0.625rem, DEFAULT)
 *   lg  → rounded-md  (0.75rem)
 *
 * When a component has a container that wraps interactive elements (e.g. a segmented
 * control track, a button group background), the container uses one step up from the
 * inner element so the pill fits visually with the internal padding:
 *
 *   inner sm  → container rounded     (DEFAULT)
 *   inner md  → container rounded-md
 *   inner lg  → container rounded-lg
 */
export const borderRadius = {
  none: "0px",
  "2xs": "0.25rem",
  xs: "0.375rem",
  sm: "0.5rem",
  DEFAULT: "0.625rem",
  md: "0.75rem",
  lg: "0.875rem",
  xl: "1rem",
  "2xl": "1.25rem",
  "3xl": "1.5rem",
  full: "9999px",
}
