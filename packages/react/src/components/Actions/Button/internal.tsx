import { Button as ShadcnButton } from "@/ui/button"

import { EmojiImage } from "@/lib/emojis.tsx"
import { cva } from "cva"
import { ComponentProps, forwardRef, useState } from "react"
import { Icon, IconType } from "../../Utilities/Icon"

export type ButtonInternalProps = Pick<
  ComponentProps<typeof ShadcnButton>,
  "variant" | "size" | "disabled" | "type" | "round" | "className"
> &
  DataAttributes & {
    onClick?: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void | Promise<unknown>
    label: string
    loading?: boolean
    icon?: IconType
    emoji?: string
    hideLabel?: boolean
    size?: "sm" | "md" | "lg"
    append?: React.ReactNode
    appendButton?: React.ReactNode
  }

const iconVariants = cva({
  base: "-ml-0.5 transition-colors",
  variants: {
    variant: {
      default: "text-f1-icon-inverse dark:text-f1-icon-bold/80",
      outline: "text-f1-icon",
      neutral: "text-f1-icon",
      critical:
        "text-f1-icon-critical-bold group-hover:text-f1-icon-inverse dark:group-hover:text-f1-icon-bold/80",
      ghost: "text-f1-icon",
      promote: "text-f1-icon",
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
        "text-f1-icon-critical-bold group-hover:text-f1-icon-inverse dark:group-hover:text-f1-icon-bold",
      ghost: "text-f1-icon-bold",
      promote: "text-f1-icon-bold",
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

    return (
      <ShadcnButton
        title={hideLabel ? label : undefined}
        onClick={handleClick}
        disabled={disabled || loading || forceLoading}
        ref={ref}
        variant={variant}
        size={size}
        round={hideLabel}
        appendButton={appendButton}
        {...props}
      >
        {icon && (
          <Icon
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
        {!hideLabel && label}
        {append}
      </ShadcnButton>
    )
  }
)

export { ButtonInternal }
