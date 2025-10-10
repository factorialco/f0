import { F0Icon } from "@/components/F0Icon"
import { Spinner } from "@/icons/app"
import { Link } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import type { VariantProps } from "cva"
import { AnimatePresence, motion } from "motion/react"
import React, { ReactNode } from "react"
import {
  actionVariants,
  buttonSizeVariants,
  iconVariants,
  linkSizeVariants,
} from "./variants"

export interface ActionCommonProps {
  children: ReactNode

  prepend?: ReactNode
  append?: ReactNode
  prependOutside?: boolean
  appendOutside?: boolean

  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
  onFocus?: (event?: React.FocusEvent<HTMLElement>) => void
  onBlur?: (event?: React.FocusEvent<HTMLElement>) => void

  disabled?: boolean
  loading?: boolean
  pressed?: boolean

  className?: string
  size?: "sm" | "md" | "lg"
}

export interface LinkActionProps {
  href: string
  target?: "_blank" | "_self" | "_parent" | "_top"
}

type ActionVariantProps = VariantProps<typeof actionVariants>

export type ActionProps = ActionCommonProps &
  Partial<LinkActionProps> &
  ActionVariantProps

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
    },
    ref
  ) => {
    const isLink = !!href
    const defaultVariant = isLink ? variant || "link" : variant || "default"
    const variantClasses = actionVariants({
      variant: defaultVariant,
      pressed,
    })
    const isLinkStyled =
      defaultVariant === "link" || defaultVariant === "mention"
    const sizeClasses = isLinkStyled
      ? linkSizeVariants({ size })
      : buttonSizeVariants({ size })

    const innerContent = (
      <>
        <div
          className={cn(
            "main flex items-center justify-center gap-1",
            loading && "opacity-0",
            iconVariants({ variant: defaultVariant })
          )}
        >
          {prepend && !prependOutside && prepend}
          <span>{children}</span>
          {append && !appendOutside && append}
        </div>
        <AnimatePresence>
          {loading && !isLinkStyled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                iconVariants({ variant: defaultVariant, mode: "only" })
              )}
            >
              <F0Icon icon={Spinner} className="animate-spin" />
            </motion.div>
          )}
          {loading && isLinkStyled && (
            <Skeleton className="absolute inset-0 my-auto h-full w-full" />
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
          {prependOutside && prepend}
          {mainElement}
          {appendOutside && append}
        </div>
      )
    }

    return mainElement
  }
)

Action.displayName = "Action"
