import type { AsAllowedList, TextProps } from "@/ui/Text"

/**
 * Sizes the gradient is allowed at. They map onto the existing F0 typography
 * variants — `heading-large` is the 2xl semibold size the One chat headline
 * uses — so the ramp never introduces a typography scale of its own.
 */
export const f0AiTextVariants = ["body", "heading", "heading-large"] as const

export type F0AiTextVariant = (typeof f0AiTextVariants)[number]

export type F0AiTextProps = Omit<
  TextProps,
  "className" | "variant" | "as" | "required"
> & {
  /**
   * Typography size and weight.
   * @default heading-large
   */
  variant?: F0AiTextVariant

  /**
   * HTML tag to render. Defaults to the semantic tag of the variant
   * (`h1` for `heading-large`, `h2` for `heading`, `p` for `body`).
   */
  as?: AsAllowedList
}
