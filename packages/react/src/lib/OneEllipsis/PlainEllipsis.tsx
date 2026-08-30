import React, { forwardRef, useRef } from "react"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import type { Tag } from "./types"
import { useEllipsisOverflow } from "./use-ellipsis-overflow"

export interface PlainEllipsisProps {
  children: string
  className?: string
  disabled?: boolean
  lines?: number
  noTooltip?: boolean
  tag?: Tag
}

const PlainEllipsis = forwardRef<HTMLElement, PlainEllipsisProps>(
  (
    {
      children,
      className,
      disabled = false,
      lines = 1,
      noTooltip = false,
      tag = "span",
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLElement>(null)
    const ref = forwardedRef || internalRef
    const hasEllipsis = useEllipsisOverflow({
      disabled,
      lines,
      ref: typeof ref === "object" ? ref : null,
    })

    const text = React.createElement(
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
        "data-testid": "one-ellipsis",
      },
      children
    )

    const showTooltip = hasEllipsis && !noTooltip

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            asChild
            className={showTooltip ? "pointer-events-auto" : undefined}
          >
            {text}
          </TooltipTrigger>
          {showTooltip && (
            <TooltipContent className="max-w-xl">{children}</TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    )
  }
)

PlainEllipsis.displayName = "PlainEllipsis"

export { PlainEllipsis, PlainEllipsis as OneEllipsis }
