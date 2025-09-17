import { Link } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { AnimatePresence, motion } from "motion/react"
import React from "react"
import { ActionProps } from "./types"
import { isLinkStyled } from "./utils"
import {
  actionVariants,
  buttonSizeVariants,
  iconVariants,
  linkSizeVariants,
  loadingVariants,
} from "./variants"

export const Action = React.forwardRef<HTMLElement, ActionProps>(
  (
    {
      children,
      prepend,
      append,
      prependOutside,
      appendOutside,
      onClick,
      onFocus,
      onBlur,
      disabled,
      loading,
      pressed,
      className,
      href,
      target,
      variant,
      size = "md",
      mode = "default",
      ...props
    },
    ref
  ) => {
    const isLink = !!href
    const localVariant = isLink ? variant || "link" : variant || "default"
    const variantClasses = actionVariants({
      variant: localVariant,
      pressed,
    })

    const sizeClasses = isLinkStyled(localVariant)
      ? linkSizeVariants({ size })
      : buttonSizeVariants({ size })

    const innerContent = (
      <>
        <div
          className={cn(
            "main flex items-center justify-center gap-1",
            loading && "opacity-0",
            iconVariants({ variant: localVariant, mode })
          )}
        >
          {prepend}
          <span>{children}</span>
          {append}
        </div>
        <AnimatePresence>
          {loading && (
            <>
              {!isLinkStyled(localVariant) ? (
                <Skeleton className="absolute inset-0 my-auto h-full w-full" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className={cn(
                      loadingVariants({ size, variant: localVariant })
                    )}
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
            </>
          )}
        </AnimatePresence>
      </>
    )

    const CommonProps = {
      onClick,
      onFocus,
      onBlur,
      disabled,
      className: cn(variantClasses, sizeClasses, focusRing(), className),
      "aria-busy": loading,
      ...props,
    }

    const mainElement = isLink ? (
      <Link
        {...CommonProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        aria-disabled={disabled}
      >
        {innerContent}
      </Link>
    ) : (
      <button
        {...CommonProps}
        ref={ref as React.Ref<HTMLButtonElement>}
        data-pressed={pressed}
      >
        {innerContent}
      </button>
    )

    if (prependOutside || appendOutside) {
      return (
        <div className="flex items-center">
          {prependOutside}
          {mainElement}
          {appendOutside}
        </div>
      )
    }

    return mainElement
  }
)

Action.displayName = "Action"
