import { cva, type VariantProps } from "cva"
import { createElement, forwardRef } from "react"

import { OneEllipsis } from "@/components/OneEllipsis"
import { cn } from "@/lib/utils"

import type {
  ColorToken,
  DecorationToken,
  SizeToken,
  TransformToken,
  VariantToken,
} from "./types"

import {
  alignDefaults,
  alignVariants,
  colorVariants,
  decorationVariants,
  defaultTagMap,
  SECONDARY_COLOR_VARIANTS,
  sizeVariants,
  transformVariants,
  variantVariants,
} from "./utils"

// ---------------------------------------------------------------------------
// CVA
// ---------------------------------------------------------------------------
const f0TextV2Variants = cva({
  base: "text-f1-foreground",
  variants: {
    ...variantVariants,
    ...alignVariants,
  },
  defaultVariants: {
    variant: "body",
    ...alignDefaults,
  },
})

type CVAVariants = VariantProps<typeof f0TextV2Variants>

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------
export interface F0TextV2Props extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "style"
> {
  /** Text content to render */
  content: string

  /**
   * Semantic text variant — controls font-weight, default size, and default HTML tag.
   * @default "body"
   */
  variant?: VariantToken

  /**
   * Text size override — independent from variant.
   * `"default"` or `undefined` keeps the variant's built-in size.
   */
  size?: SizeToken

  /**
   * Semantic text color.
   * `description`, `subtitle`, `caption`, and `label` default to `"secondary"`.
   */
  color?: ColorToken

  /**
   * Text alignment.
   * @default "left"
   */
  align?: NonNullable<CVAVariants["align"]>

  /**
   * Enable text ellipsis.
   * - `true`: single-line ellipsis
   * - `number`: multi-line ellipsis with specified line count
   */
  ellipsis?: boolean | number

  /**
   * Disable tooltip when text is truncated.
   * @default false
   */
  noEllipsisTooltip?: boolean

  /** Text decoration. */
  decoration?: DecorationToken

  /** Text transform. */
  transform?: TransformToken

  /**
   * Show a required indicator (red asterisk) after the content.
   * Useful when the Text is used as a form label.
   * @default false
   */
  required?: boolean
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function resolveColor(
  color: ColorToken | undefined,
  variant: VariantToken
): string | undefined {
  if (color && color !== "default") return colorVariants[color]
  if (color === "default") return undefined
  if (SECONDARY_COLOR_VARIANTS.has(variant)) return colorVariants.secondary
  return undefined
}

function resolveSize(size: SizeToken | undefined): string | undefined {
  if (!size || size === "default") return undefined
  return sizeVariants[size]
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export const F0TextV2Inner = forwardRef<HTMLElement, F0TextV2Props>(
  (
    {
      content,
      variant = "body",
      size,
      color,
      align,
      ellipsis,
      noEllipsisTooltip,
      decoration,
      transform,
      required,
      ...htmlProps
    },
    ref
  ) => {
    const className = cn(
      f0TextV2Variants({ variant, align }),
      resolveSize(size),
      resolveColor(color, variant),
      decoration && decoration !== "none"
        ? decorationVariants[decoration]
        : undefined,
      transform && transform !== "none"
        ? transformVariants[transform]
        : undefined
    )

    const asTag = defaultTagMap[variant]

    const requiredIndicator = required ? (
      <span className="text-f1-foreground-critical" aria-hidden="true">
        {" *"}
      </span>
    ) : null

    if (ellipsis !== undefined) {
      const lines = typeof ellipsis === "number" ? ellipsis : 1

      if (requiredIndicator) {
        return createElement(
          asTag,
          {
            ...htmlProps,
            className: cn(className, "inline-flex gap-0.5"),
            ref,
          },
          <OneEllipsis
            lines={lines}
            noTooltip={noEllipsisTooltip}
            tag="span"
            className="min-w-0"
          >
            {content}
          </OneEllipsis>,
          requiredIndicator
        )
      }

      return (
        <OneEllipsis
          ref={ref}
          lines={lines}
          noTooltip={noEllipsisTooltip}
          tag={asTag}
          className={className}
          {...htmlProps}
        >
          {content}
        </OneEllipsis>
      )
    }

    return createElement(
      asTag,
      { ...htmlProps, className, ref },
      content,
      requiredIndicator
    )
  }
)

F0TextV2Inner.displayName = "F0TextV2"
