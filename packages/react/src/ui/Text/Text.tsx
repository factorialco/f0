import { OneEllipsis } from "@/components/OneEllipsis"
import { parseMarkdown } from "@/lib/markdown"
import { cn } from "@/lib/utils"
import type React from "react"
import { createElement, forwardRef } from "react"
import { type AsAllowedList } from "./types"
import {
  defaultTag,
  textVariants,
  type TextVariant,
  type TextVariants,
} from "./variants"

export interface TextProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, "className">,
    React.RefAttributes<HTMLElement> {
  /**
   * Content to be rendered
   */
  content: string

  /**
   * The text variant to render. Determines styling and default semantic element.
   */
  variant?: TextVariant

  /**
   * Text alignment
   * @default left
   */
  align?: NonNullable<TextVariants["align"]>

  /**
   * Additional classes to apply
   * @private
   */
  className?: string

  /**
   * HTML tag name to use for rendered element.
   * If not provided, uses semantic default based on variant.
   * @default varies by variant
   */
  as?: AsAllowedList

  /**
   * Enable text ellipsis with optional line configuration
   * - `true`: Single line ellipsis (lines = 1)
   * - `number`: Multi-line ellipsis with specified line count
   * - `undefined`: No ellipsis
   */
  ellipsis?: boolean | number

  /**
   * Disable tooltip when text is truncated
   * Only applies when ellipsis is enabled
   * @default false
   */
  noEllipsisTooltip?: boolean

  /**
   * Enable markdown parsing for content
   * @default false
   */
  markdown?: boolean
}

/**
 * Text component for consistent typography across the application.
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      content,
      variant,
      align,
      className,
      as,
      ellipsis,
      noEllipsisTooltip,
      markdown,
      ...htmlProps
    },
    forwardedRef
  ) => {
    const asTag = as ?? defaultTag[variant ?? "body"]

    // If ellipsis is enabled, wrap with the ellipsis component
    // Note: markdown is disabled when ellipsis is enabled since OneEllipsis only accepts string children
    if (ellipsis !== undefined) {
      const lines = typeof ellipsis === "number" ? ellipsis : 1

      return (
        <OneEllipsis
          ref={forwardedRef}
          lines={lines}
          noTooltip={noEllipsisTooltip}
          tag={asTag}
          className={cn(textVariants({ variant, align }), className)}
          markdown={markdown}
          {...htmlProps}
        >
          {content}
        </OneEllipsis>
      )
    }

    // If markdown is enabled, parse and render as HTML
    if (markdown) {
      const html = parseMarkdown(content)

      return createElement(asTag, {
        ...htmlProps,
        className: cn(textVariants({ variant, align }), className),
        ref: forwardedRef,
        dangerouslySetInnerHTML: { __html: html },
      })
    }

    // Default: render as plain text
    return createElement(
      asTag,
      {
        ...htmlProps,
        className: cn(textVariants({ variant, align }), className),
        ref: forwardedRef,
      },
      content
    )
  }
)

Text.displayName = "Text"
