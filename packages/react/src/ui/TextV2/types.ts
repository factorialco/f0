/**
 * Token types for TextV2 props.
 * These map to the design tokens defined in @factorialco/f0-core.
 */

/**
 * Semantic text variant — controls font-weight, default size, and default HTML tag.
 *
 * | Variant     | Weight       | Default Tag | Default Size           |
 * |-------------|-------------|-------------|------------------------|
 * | title       | semibold    | h2          | 3xl (26px)             |
 * | heading     | semibold    | h3          | xl  (18px)             |
 * | subtitle    | normal      | p           | lg  (16px) + secondary |
 * | body        | normal      | p           | md  (14px)             |
 * | label       | medium      | label       | md  (14px) + secondary |
 * | description | normal      | p           | md  (14px) + secondary |
 * | caption     | normal      | span        | sm  (12px) + secondary |
 * | code        | normal+mono | code        | sm  (12px)             |
 */
export type VariantToken =
  | "title"
  | "heading"
  | "subtitle"
  | "body"
  | "label"
  | "description"
  | "caption"
  | "code"

/**
 * Text size override — independent from variant.
 *
 * | Token   | Tailwind  | Value |
 * |---------|-----------|-------|
 * | default | (no-op)   | —     |
 * | xs      | text-xs   | 10px  |
 * | sm      | text-sm   | 12px  |
 * | md      | text-base | 14px  |
 * | lg      | text-lg   | 16px  |
 * | xl      | text-xl   | 18px  |
 * | 2xl     | text-2xl  | 22px  |
 * | 3xl     | text-3xl  | 26px  |
 */
export type SizeToken =
  | "default"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"

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
