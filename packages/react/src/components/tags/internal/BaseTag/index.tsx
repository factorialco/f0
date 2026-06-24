import { forwardRef, ReactNode } from "react"

import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { InfoCircleLine } from "@/icons/app"
import { cn } from "@/lib/utils"

type BaseTagProps = {
  /**
   * Sometimes you need to clarify the status for screen reader users
   * E.g., when showing a tooltip for sighted user, provide the tooltip text to this prop because tooltips aren't accessible
   */
  additionalAccessibleText?: string
  className?: string
  // Hint text
  hint?: string
  // Tooltip text
  info?: string
  // Hides the info icon
  shape?: "rounded" | "square"
  /**
   * The size of the tag
   * @default "md"
   */
  size?: "md" | "sm"
  /**
   * Whether to hide the label
   */
  hideLabel?: boolean
  deactivated?: boolean
} & (
  | {
      left: ReactNode
      text?: string
      right?: ReactNode
    }
  | {
      left?: ReactNode
      text: string
      right?: ReactNode
    }
)

export const BaseTag = forwardRef<HTMLDivElement, BaseTagProps>(
  (
    {
      left,
      text,
      right,
      additionalAccessibleText,
      className,
      hint,
      info,
      shape = "rounded",
      size = "md",
      hideLabel,
      deactivated,
    },
    ref
  ) => {
    additionalAccessibleText =
      additionalAccessibleText || (hideLabel ? text : undefined)
    return (
      <div className="flex w-fit max-w-full flex-row items-center justify-start gap-1">
        <div
          ref={ref}
          className={cn(
            "inline-flex w-fit max-w-full flex-row items-center justify-start gap-1 py-0.5 pr-2 font-medium text-f1-foreground",
            size === "md" && "text-base",
            size === "sm" && "text-sm",
            !text && "aspect-square w-6 items-center justify-center p-1",
            !left ? "pl-2" : "pl-1",
            shape === "rounded" && "rounded-full",
            shape === "square" && "rounded-sm",
            className
          )}
        >
          {left}
          {!!text && !hideLabel && (
            <OneEllipsis
              tag="span"
              lines={1}
              className={
                deactivated ? "text-f1-foreground-disabled" : undefined
              }
            >
              {text}
            </OneEllipsis>
          )}
          {additionalAccessibleText && (
            <span className="sr-only">{additionalAccessibleText}</span>
          )}
          {right}
        </div>
        {hint && (
          <span className="text-base font-medium text-f1-foreground-secondary">
            {hint}
          </span>
        )}
        {info && (
          <Tooltip description={info}>
            <F0Icon icon={InfoCircleLine} size="md" />
          </Tooltip>
        )}
      </div>
    )
  }
)

BaseTag.displayName = "BaseTag"
