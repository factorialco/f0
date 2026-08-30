import React, { forwardRef, useMemo, useRef, useState } from "react"

import { parseMarkdown, stripMarkdown } from "@/lib/markdown"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import type { Tag } from "./types"
import { useEllipsisOverflow } from "./use-ellipsis-overflow"

export { type Tag, tags } from "./types"

type EllipsisWrapperProps = {
  children: string
  className?: string
  lines: number
  noTooltip?: boolean
  onHasEllipsisChange: (hasEllipsis: boolean) => void
  disabled?: boolean
  tag: Tag
  markdown?: boolean
}

/**
 * @description This is a component that is used to display a single line of text with an ellipsis.
 * @param {string} children - The text to display.
 * @param {string} className - The className to apply to the text.
 * @param {number} lines - The number of lines to display.
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - The props to apply to the text.
 * @returns {React.ReactElement} The rendered text.
 */
const EllipsisWrapper = forwardRef<HTMLElement, EllipsisWrapperProps>(
  (
    {
      children,
      className,
      lines,
      onHasEllipsisChange,
      noTooltip,
      tag = "span",
      disabled,
      markdown,
      ...props
    },
    ref
  ) => {
    const hasEllipsis = useEllipsisOverflow({
      disabled: disabled ?? false,
      lines,
      onChange: onHasEllipsisChange,
      ref: ref && typeof ref === "object" ? ref : null,
    })

    const html = markdown ? parseMarkdown(children) : undefined

    return React.createElement(
      tag,
      {
        ref,
        className: cn(
          !noTooltip && hasEllipsis && "pointer-events-auto",
          "min-w-0 max-w-full overflow-hidden",
          !disabled && [
            lines === 1 ? "text-ellipsis" : "",
            lines > 1
              ? `not-supports-[(-webkit-line-clamp:${lines})]:whitespace-nowrap line-clamp-1 whitespace-normal`
              : "block whitespace-nowrap",
          ],
          className
        ),
        style: {
          WebkitLineClamp: lines > 1 ? lines : undefined,
          lineClamp: lines > 1 ? lines : undefined,
        },
        ...props,
        ...(markdown && html
          ? { dangerouslySetInnerHTML: { __html: html } }
          : {}),
      },
      markdown ? undefined : children
    )
  }
)
EllipsisWrapper.displayName = "EllipsisWrapper"

type OneEllipsisProps = {
  /**
   * The className to apply to the text.
   */
  className?: string
  /**
   * The number of lines to display.
   */
  lines?: number
  /**
   * Whether the ellipsis is disabled.
   */
  disabled?: boolean
  /**
   * The children to display. (only string is supported)
   */
  children: string
  /**
   * Whether the tooltip is disabled.
   */
  noTooltip?: boolean
  /**
   * The tag to use for the text.
   */
  tag?: Tag
  /**
   * Enable markdown parsing for content
   * @default false
   */
  markdown?: boolean
}

const OneEllipsis = forwardRef<HTMLElement, OneEllipsisProps>(
  (
    {
      className,
      lines = 1,
      children,
      noTooltip = false,
      disabled = false,
      markdown = false,
      tag = "span",
      ...props
    },
    forwardedRef
  ) => {
    const [hasEllipsis, setHasEllipsis] = useState(false)

    const internalRef = useRef<HTMLElement>(null)
    const ref = forwardedRef || internalRef

    const Text = useMemo(() => {
      return (
        <EllipsisWrapper
          ref={ref}
          className={className}
          lines={lines}
          onHasEllipsisChange={setHasEllipsis}
          disabled={disabled}
          markdown={markdown}
          tag={tag}
          {...props}
          data-testid="one-ellipsis"
          noTooltip={noTooltip}
        >
          {children}
        </EllipsisWrapper>
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps -- We dont want to track props as dependencies
    }, [className, lines, ref, children, disabled, markdown, tag])

    const plainText = useMemo(() => {
      return markdown ? stripMarkdown(children) : children
    }, [children, markdown])

    return hasEllipsis && !noTooltip ? (
      <TooltipProvider>
        <Tooltip>
          {/*
           * `pointer-events-auto` on the trigger, not just via the wrapper's own
           * ellipsis state: wrapping in the tooltip remounts the text, resetting
           * that internal state, so inside a `pointer-events-none` container (e.g.
           * a table cell) the trigger could end up unhoverable and the tooltip
           * unreachable. Driving it from the rendered-tooltip branch keeps it
           * reliably interactive whenever a tooltip exists.
           */}
          <TooltipTrigger asChild className="pointer-events-auto">
            {Text}
          </TooltipTrigger>
          <TooltipContent className="max-w-xl">{plainText}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ) : (
      Text
    )
  }
)

OneEllipsis.displayName = "OneEllipsis"

export { OneEllipsis }
