/**
 * Token types for TextV2 props.
 * These map to the design tokens defined in @factorialco/f0-core.
 */

/**
 * Semantic text variant — controls font-weight, default size, and default HTML tag.
 *
 * Public API does not expose a free-form `size` prop.
 * Size is encoded in each variant token to keep typography consistent.
 *
 * Naming model:
 * - Base variants: `title`, `heading`, `subtitle`, `body`, `label`, `description`, `caption`, `code`
 * - Scaled variants: `<base>-<scale>` (for example `heading-2xl`, `body-xl`, `code-lg`)
 *
 * Base variants represent the default scale for each semantic role.
 */
export type VariantToken =
  | "title-lg"
  | "title-sm"
  | "title-xs"
  | "heading-lg"
  | "heading-sm"
  | "heading-xs"
  | "subtitle-xl"
  | "subtitle-lg"
  | "subtitle-sm"
  | "body-xl"
  | "body-lg"
  | "body-sm"
  | "body-xs"
  | "label-lg"
  | "label-sm"
  | "label-xs"
  | "description-sm"
  | "description-xs"
  | "caption-sm"
  | "code-lg"
  | "code-sm"
  // Base variants (default scale per semantic role)
  | "title"
  | "heading"
  | "subtitle"
  | "body"
  | "label"
  | "description"
  | "caption"
  | "code"

/**
 * Semantic text color from F0 design token system.
 * Maps to `text-f1-foreground-*` utilities.
 */
export type ColorToken =
  | "default"
  | "secondary"
  | "tertiary"
  | "inverse"
  | "inverse-secondary"
  | "disabled"
  | "accent"
  | "critical"
  | "warning"
  | "positive"
  | "info"
  | "selected"

/** Text alignment */
export type AlignToken = "left" | "center" | "right"

/** Text decoration */
export type DecorationToken = "none" | "underline" | "overline" | "line-through"

/** Text transform */
export type TransformToken = "none" | "uppercase" | "lowercase" | "capitalize"

/** Allowed HTML tags for text rendering */
export type AllowedTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div"
  | "label"
  | "code"
