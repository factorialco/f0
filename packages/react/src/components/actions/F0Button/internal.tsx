import { F0Icon } from "@/components/F0Icon"
import { EmojiImage } from "@/lib/emojis"
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
      href,
      target,
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
      event?: React.MouseEvent<HTMLElement, MouseEvent>
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
        href={href}
        target={target}
        variant={variant}
        size={size}
        disabled={disabled || isLoading}
        ref={ref}
        onClick={handleClick}
        {...props}
        loading={isLoading}
      >
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
          <span className={cn(shouldHideLabel && "sr-only")}>{label}</span>
          {append}
        </div>
      </Action>
    )
  }
  //   return (
  //     <ShadcnButton
  //       title={hideLabel ? label : undefined}
  //       onClick={handleClick}
  //       disabled={disabled || isLoading}
  //       ref={ref}
  //       variant={variant}
  //       size={size}
  //       round={hideLabel}
  //       appendButton={appendButton}
  //       className={cn(className, "relative")}
  //       {...props}
  //       aria-busy={isLoading}
  //     >
  //       {isLoading && (
  //         <div className="absolute inset-0 flex items-center justify-center">
  //           <motion.div
  //             className={cn(loadingVariants({ size, variant }))}
  //             animate={{ rotate: 360 }}
  //             transition={{
  //               duration: 1,
  //               repeat: Infinity,
  //               ease: "linear",
  //             }}
  //             aria-label="Loading..."
  //           />
  //         </div>
  //       )}
  //       <div
  //         className={cn(isLoading && "invisible", "flex items-center gap-1")}
  //       >
  //         {icon && (
  //           <F0Icon
  //             size={size === "sm" ? "sm" : "md"}
  //             icon={icon}
  //             className={
  //               hideLabel
  //                 ? iconOnlyVariants({ variant })
  //                 : iconVariants({ variant })
  //             }
  //           />
  //         )}
  //         {emoji && (
  //           <EmojiImage emoji={emoji} size={size === "sm" ? "sm" : "md"} />
  //         )}
  //         <span className={cn(hideLabel && "sr-only")}>{label}</span>
  //         {append}
  //       </div>
  //     </ShadcnButton>
  //   )
  // }
)

export { ButtonInternal }
