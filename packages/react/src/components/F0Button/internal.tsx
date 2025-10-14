import { F0Icon } from "@/components/F0Icon"
import { EmojiImage } from "@/lib/emojis"
import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"
import { cva } from "cva"
import { forwardRef, useState } from "react"
import { ButtonInternalProps } from "./internal-types"

const iconVariants = cva({
  base: "-ml-0.5 transition-colors",
  variants: {
    variant: {
      default: "text-f1-icon-inverse dark:text-f1-icon-bold/80",
      outline: "text-f1-icon",
      neutral: "text-f1-icon",
      critical:
        "text-f1-icon-critical-bold group-hover:text-f1-icon-inverse group-active:text-f1-icon-inverse group-data-[pressed=true]:text-f1-icon-inverse dark:group-hover:text-f1-icon-bold/80 dark:group-active:text-f1-icon-bold/80 dark:group-data-[pressed=true]:text-f1-icon-bold/80",
      ghost: "text-f1-icon",
      promote: "text-f1-icon-promote",
      outlinePromote: "text-f1-icon-promote",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export const iconOnlyVariants = cva({
  base: "transition-colors",
  variants: {
    variant: {
      default: "text-f1-icon-inverse dark:text-f1-icon-bold",
      outline: "text-f1-icon-bold",
      neutral: "text-f1-icon-bold",
      critical:
        "text-f1-icon-critical-bold group-hover:text-f1-icon-inverse group-active:text-f1-icon-inverse group-data-[pressed=true]:text-f1-icon-inverse dark:group-hover:text-f1-icon-bold dark:group-active:text-f1-icon-bold dark:group-data-[pressed=true]:text-f1-icon-bold",
      ghost: "text-f1-icon-bold",
      promote: "text-f1-icon-promote",
      outlinePromote: "text-f1-icon-promote",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

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
    ...props
  },
  ref
) {
  useTextFormatEnforcer(label, { disallowEmpty: true, disallowEmojis: true })

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

  return (
    <Action
      variant={variant}
      size={size}
      disabled={disabled || isLoading}
      ref={ref}
      {...props}
      onClick={handleClick}
      loading={isLoading}
      className={className}
      mode={hideLabel ? "only" : "default"}
      aria-label={ariaLabel || props.title || label}
      title={props.title || (hideLabel ? label : undefined)}
      compact={!!shouldHideLabel}
    >
      <div className={cn(isLoading && "invisible", "flex items-center gap-1")}>
        {icon && (
          <F0Icon
            size={size === "sm" ? "sm" : "md"}
            icon={icon}
            className={
              hideLabel
                ? iconOnlyVariants({ variant })
                : iconVariants({ variant })
            }
          />
        )}
        {emoji && (
          <EmojiImage
            emoji={emoji}
            size={size === "sm" ? "sm" : "md"}
            alt={""}
          />
        )}
        <span className={cn(shouldHideLabel && "sr-only")}>{label}</span>
        {append}
      </div>
    </Action>
  )
})

export { ButtonInternal }
