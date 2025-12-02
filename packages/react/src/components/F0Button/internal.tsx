import { F0Icon } from "@/components/F0Icon"
import { EmojiImage } from "@/lib/emojis"
import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"
import { forwardRef, useState } from "react"
import { OneEllipsis } from "../OneEllipsis"
import { ButtonInternalProps } from "./internal-types"

/**
 * A button component internal that includes the private slots and props
 */
const ButtonInternal = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonInternalProps
>(function Button(
  {
    label,
    hideLabel,
    onClick,
    disabled,
    loading: forceLoading,
    icon,
    emoji,
    variant = "default",
    size = "md",
    append,
    className,
    "aria-label": ariaLabel,
    tooltip,
    noAutoTooltip,
    noTitle,
    ...props
  },
  ref
) {
  useTextFormatEnforcer(
    label,
    { disallowEmpty: true, disallowEmojis: true },
    { warn: true, componentName: "F0Button" }
  )

  const [loading, setLoading] = useState(false)

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const result = onClick?.(event)

    if (result instanceof Promise) {
      setLoading(true)

      try {
        await result
      } finally {
        setLoading(false)
      }
    }
  }

  const isLoading = forceLoading || loading
  const shouldHideLabel = hideLabel || emoji

  const buttonLabel = (label ?? "").toString()

  return (
    <>
      {variant === "ai" && (
        <svg
          width="0"
          height="0"
          style={{ position: "absolute", pointerEvents: "none" }}
        >
          <defs>
            <linearGradient
              id="ai-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F1480C" />
              <stop offset="100%" stopColor="#6780F9" />
            </linearGradient>
          </defs>
        </svg>
      )}
      <Action
        variant={variant}
        size={size}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
        tooltip={tooltip ?? (!noAutoTooltip && hideLabel && label)}
        onClick={handleClick}
        loading={isLoading}
        className={cn("max-w-full", className)}
        mode={hideLabel ? "only" : "default"}
        aria-label={ariaLabel || props.title || buttonLabel}
        title={
          noTitle
            ? undefined
            : props.title || (hideLabel ? buttonLabel : undefined)
        }
        compact={!!shouldHideLabel}
      >
        <div
          className={cn(
            isLoading && "invisible",
            "flex min-w-0 flex-1 items-center gap-1",
            icon && !hideLabel && "-ml-[3px]"
          )}
        >
          {icon && <F0Icon size={size === "sm" ? "sm" : "md"} icon={icon} />}
          {emoji && (
            <EmojiImage
              emoji={emoji}
              size={size === "sm" ? "sm" : "md"}
              alt={""}
            />
          )}
          {!shouldHideLabel ? (
            <OneEllipsis
              className={cn(shouldHideLabel && "sr-only")}
              tag="span"
            >
              {buttonLabel}
            </OneEllipsis>
          ) : (
            <span className="sr-only">{buttonLabel}</span>
          )}
          {append}
        </div>
      </Action>
    </>
  )
})

export { ButtonInternal }
