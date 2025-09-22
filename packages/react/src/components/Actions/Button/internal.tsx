import { Button as ShadcnButton } from "@/ui/button"

import { EmojiImage } from "@/lib/emojis.tsx"
import { cn } from "@/lib/utils"
import { cva } from "cva"
import { motion } from "motion/react"
import { ComponentProps, forwardRef, useState } from "react"
import { F0Icon, IconType } from "../../F0Icon"

export type ButtonInternalProps = Pick<
  ComponentProps<typeof ShadcnButton>,
  "variant" | "size" | "disabled" | "type" | "round" | "className" | "pressed"
> &
  DataAttributes & {
    /**
     * Callback fired when the button is clicked. Supports async functions for loading state.
     */
    onClick?: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void | Promise<unknown>
    /**
     * The visible label for the button. Required for accessibility.
     */
    label: string
    /**
     * Indicates that an action is in progress. Shows a loading spinner and blocks interaction.
     */
    loading?: boolean
    /**
     * Adds an icon to the button, combined with the label for better clarity and recognition.
     */
    icon?: IconType
    /**
     * Adds an emoji to the button, can be used as a special case of icon-only button.
     */
    emoji?: string
    /**
     * Hides the label visually (for icon-only or emoji-only buttons), but keeps it accessible for screen readers.
     */
    hideLabel?: boolean
    /**
     * Sets the button size. 'lg' for mobile, 'md' for desktop, 'sm' for compact/secondary actions.
     */
    size?: "sm" | "md" | "lg"
    /**
     * Appends a React node after the button content (for custom UI extensions).
     */
    append?: React.ReactNode
    /**
     * Appends a React node as a separate button, visually grouped with the main button.
     */
    appendButton?: React.ReactNode
    /**
     * If true, the button is inactive and does not respond to user interaction.
     */
    disabled?: boolean
    /**
     * If true, the button is visually active or selected (pressed state).
     */
    pressed?: boolean
  }

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
const ButtonInternal = forwardRef<HTMLButtonElement, ButtonInternalProps>(
  function Button(
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
      appendButton,
      className,
      ...props
    },
    ref
  ) {
    const [loading, setLoading] = useState(false)

    const handleClick = async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
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

    const loadingVariants = cva({
      base: "rounded-full border-solid border-t-transparent will-change-transform",
      variants: {
        size: {
          sm: "h-3 w-3 border-[1px]",
          md: "h-4 w-4 border-2",
          lg: "h-5 w-5 border-2",
        },
        variant: {
          default: "border-f1-foreground-inverse border-t-transparent",
          outline: "border-f1-foreground border-t-transparent",
          neutral: "border-f1-foreground border-t-transparent",
          critical: "border-f1-icon-critical border-t-transparent",
          ghost: "border-f1-foreground border-t-transparent",
          promote: "border-f1-icon-promote border-t-transparent",
          outlinePromote: "border-f1-icon-promote border-t-transparent",
        },
      },
    })

    const isLoading = forceLoading || loading

    return (
      <ShadcnButton
        title={hideLabel ? label : undefined}
        onClick={handleClick}
        disabled={disabled || isLoading}
        ref={ref}
        variant={variant}
        size={size}
        round={hideLabel}
        appendButton={appendButton}
        className={cn(className, "relative")}
        {...props}
        aria-busy={isLoading}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className={cn(loadingVariants({ size, variant }))}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              aria-label="Loading..."
            />
          </div>
        )}
        <div
          className={cn(isLoading && "invisible", "flex items-center gap-1")}
        >
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
            <EmojiImage emoji={emoji} size={size === "sm" ? "sm" : "md"} />
          )}
          <span className={cn(hideLabel && "sr-only")}>{label}</span>
          {append}
        </div>
      </ShadcnButton>
    )
  }
)

export { ButtonInternal }
