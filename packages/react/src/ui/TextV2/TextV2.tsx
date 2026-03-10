import type React from "react"

import { createElement, forwardRef } from "react"

import { OneEllipsis } from "@/components/OneEllipsis"
import { cn } from "@/lib/utils"

import type {
  ColorToken,
  DecorationToken,
  TransformToken,
  VariantToken,
} from "./types"

import {
  decorationClassMap,
  defaultTagMap,
  resolveColor,
  textV2Variants,
  type TextV2Variants,
  transformClassMap,
} from "./variants"

export interface TextV2Props extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "className"
> {
  /** Text content to render */
  content: string

  /**
   * Semantic text variant — controls font-weight, default size, and default HTML tag.
   * @default "body"
   */
  variant?: VariantToken

  /**
   * Semantic text color.
   * `description`, `subtitle`, `caption`, and `label` default to `"secondary"`.
   */
  color?: ColorToken

  /**
   * Text alignment.
   * @default "left"
   */
  align?: NonNullable<TextV2Variants["align"]>

  /**
   * Enable text ellipsis with optional line configuration.
   * - `true`: Single line ellipsis (lines = 1)
   * - `number`: Multi-line ellipsis with specified line count
   * - `undefined`: No ellipsis
   */
  ellipsis?: boolean | number

  /**
   * Disable tooltip when text is truncated.
   * Only applies when ellipsis is enabled.
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

/**
 * TextV2 — internal text primitive with the new variant architecture.
 *
 * Public consumers should use `F0TextV2` which wraps this component.
 */
export const TextV2 = forwardRef<HTMLElement, TextV2Props>(
  (
    {
      content,
      variant = "body",
      color,
      align,
      ellipsis,
      noEllipsisTooltip,
      decoration,
      transform,
      required,
      ...htmlProps
    },
    forwardedRef
  ) => {
    const asTag = defaultTagMap[variant]

    const composedClassName = cn(
      textV2Variants({ variant, align }),
      resolveColor(color, variant),
      decoration && decoration !== "none"
        ? decorationClassMap[decoration]
        : undefined,
      transform && transform !== "none"
        ? transformClassMap[transform]
        : undefined
    )

    const requiredIndicator = required ? (
      <span className="text-f1-foreground-critical" aria-hidden="true">
        {" *"}
      </span>
    ) : null

    // Ellipsis path
    if (ellipsis === true || typeof ellipsis === "number") {
      const lines = typeof ellipsis === "number" ? ellipsis : 1

      if (requiredIndicator) {
        return createElement(
          asTag,
          {
            ...htmlProps,
            className: cn(composedClassName, "inline-flex gap-0.5"),
            ref: forwardedRef,
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
          ref={forwardedRef}
          lines={lines}
          noTooltip={noEllipsisTooltip}
          tag={asTag}
          className={composedClassName}
          {...htmlProps}
        >
          {content}
        </OneEllipsis>
      )
    }

    // Default: render as plain text
    return createElement(
      asTag,
      {
        ...htmlProps,
        className: composedClassName,
        ref: forwardedRef,
      },
      content,
      requiredIndicator
    )
  }
)

TextV2.displayName = "TextV2"
