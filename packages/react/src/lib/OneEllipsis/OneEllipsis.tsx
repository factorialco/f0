import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react"

import { parseMarkdown, stripMarkdown } from "@/lib/markdown"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

export const tags = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  "div",
  "label",
  "code",
] as const
export type Tag = (typeof tags)[number]

const checkForEllipsis = (element: HTMLElement | null, lines: number) => {
  if (!element) return false
  if (lines > 1) {
    // For multi-line, check if content height exceeds line-clamp height
    const lineHeight = parseInt(window.getComputedStyle(element).lineHeight)
    return element.scrollHeight > lineHeight * lines
  }
  // For single line, check if content width exceeds container width
  return element.scrollWidth > element.clientWidth
}

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
    const [hasEllipsis, setHasEllipsis] = useState(false)

    useEffect(() => {
      if (!ref || typeof ref !== "object" || disabled) return

      const element = ref.current
      if (!element) return

      /**
       * Finds the ellipsis state of the element and sets the state and emits the change
       * @returns The ellipsis state of the element
       */
      const findAndSetEllipsisState = () => {
        const ellipsis = checkForEllipsis(element, lines)
        setHasEllipsis(ellipsis)
        onHasEllipsisChange(ellipsis)
        return ellipsis
      }

      // Initial check
      findAndSetEllipsisState()

      // Re-check after the next layout. When this text lives in a flex row that
      // an ancestor width-constrains only on a later pass (e.g. an OverflowList
      // inside a table cell), the element can mount at its natural width and
      // shrink afterwards — a transition the ResizeObserver below sometimes
      // misses, leaving `hasEllipsis` (and thus the tooltip) stale-false while
      // the text is visibly clipped. A post-layout re-measure catches it.
      const raf = requestAnimationFrame(() => findAndSetEllipsisState())
      const timeout = setTimeout(() => findAndSetEllipsisState(), 100)

      // Set up resize observer
      const resizeObserver = new ResizeObserver(() => {
        findAndSetEllipsisState()
      })

      resizeObserver.observe(element)

      return () => {
        cancelAnimationFrame(raf)
        clearTimeout(timeout)
        resizeObserver.disconnect()
      }
    }, [ref, onHasEllipsisChange, lines, disabled])

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
