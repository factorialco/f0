import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"
import { forwardRef, useEffect, useMemo, useRef, useState } from "react"

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
}

/**
 * @description This is a component that is used to display a single line of text with an ellipsis.
 * @param {string} children - The text to display.
 * @param {string} className - The className to apply to the text.
 * @param {number} lines - The number of lines to display.
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - The props to apply to the text.
 * @returns {React.ReactElement} The rendered text.
 */
const EllipsisWrapper = forwardRef<HTMLSpanElement, EllipsisWrapperProps>(
  (
    { children, className, lines, onHasEllipsisChange, noTooltip, ...props },
    ref
  ) => {
    useEffect(() => {
      if (!ref || typeof ref !== "object") return

      const element = ref.current
      if (!element) return

      // Initial check
      onHasEllipsisChange(checkForEllipsis(element, lines))

      // Set up resize observer
      const resizeObserver = new ResizeObserver(() => {
        onHasEllipsisChange(checkForEllipsis(element, lines))
      })

      resizeObserver.observe(element)

      return () => {
        resizeObserver.disconnect()
      }
    }, [ref, onHasEllipsisChange, lines])

    return (
      <span
        ref={ref}
        className={cn(
          `${noTooltip ? "pointer-events-none" : "pointer-events-auto"} min-w-0 max-w-full overflow-hidden text-ellipsis`,
          lines > 1
            ? `not-supports-[(-webkit-line-clamp:${lines})]:whitespace-nowrap display-[-webkit-box] whitespace-normal line-clamp-${lines}`
            : "block whitespace-nowrap",
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
EllipsisWrapper.displayName = "EllipsisWrapper"

type OneEllipsisProps = {
  className?: string
  lines?: number
  children: string
  noTooltip?: boolean
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

const OneEllipsis = forwardRef<HTMLDivElement, OneEllipsisProps>(
  (
    { className, lines = 1, children, noTooltip = false, ...props },
    forwardedRef
  ) => {
    const [hasEllipsis, setHasEllipsis] = useState(false)

    const internalRef = useRef<HTMLDivElement>(null)
    const ref = forwardedRef || internalRef

    const Text = useMemo(() => {
      return (
        <EllipsisWrapper
          ref={ref}
          className={className}
          lines={lines}
          onHasEllipsisChange={setHasEllipsis}
          {...props}
          data-testid="one-ellipsis"
          noTooltip={noTooltip}
        >
          {children}
        </EllipsisWrapper>
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps -- We dont want to track props as dependencies
    }, [className, lines, children, ref])

    return hasEllipsis && !noTooltip ? (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="min-w-0 flex-1 overflow-hidden">{Text}</span>
          </TooltipTrigger>
          <TooltipContent className="max-w-xl">{children}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ) : (
      Text
    )
  }
)

OneEllipsis.displayName = "OneEllipsis"

export { OneEllipsis }
