import { parseMarkdown, stripMarkdown } from "@/lib/markdown"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"
import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react"

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

      // Set up resize observer
      const resizeObserver = new ResizeObserver(() => {
        findAndSetEllipsisState()
      })

      resizeObserver.observe(element)

      return () => {
        resizeObserver.disconnect()
      }
    }, [ref, onHasEllipsisChange, lines, disabled])

    const html = markdown ? parseMarkdown(children) : undefined

    return React.createElement(
      props.tag,
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
          {...props}
          tag={props.tag ?? "span"}
          data-testid="one-ellipsis"
          noTooltip={noTooltip}
        >
          {children}
        </EllipsisWrapper>
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps -- We dont want to track props as dependencies
    }, [className, lines, ref, children, disabled, markdown])

    const plainText = useMemo(() => {
      return markdown ? stripMarkdown(children) : children
    }, [children, markdown])

    return hasEllipsis && !noTooltip ? (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{Text}</TooltipTrigger>
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
