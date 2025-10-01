import { Link } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { cva } from "cva"
import { AnimatePresence, motion } from "motion/react"
import React from "react"
import { ActionButtonProps, ActionLinkProps, ActionProps } from "./types"
import { isLinkStyled } from "./utils"
import {
  actionVariants,
  buttonSizeVariants,
  iconVariants,
  linkSizeVariants,
  loadingVariants,
} from "./variants"

const ActionImpl = React.forwardRef<HTMLElement, ActionProps>((props, ref) => {
  const isLink = (props: ActionProps): props is ActionLinkProps => {
    return "href" in props
  }

  const {
    children,
    prepend,
    append,
    prependOutside,
    appendOutside,
    disabled,
    loading,
    pressed,
    className,
    href,
    target,
    variant,
    size = "md",
    mode = "default",
    title,
    compact = false,
    "aria-label": ariaLabel,
    ...restProps
  } = props

  const defaultVariant = isLink(props) ? "link" : "default"
  const localVariant = variant ?? defaultVariant

  const variantClasses = actionVariants({
    variant: localVariant,
    pressed,
  })

  const sizeClasses = isLinkStyled(localVariant)
    ? linkSizeVariants({ size })
    : buttonSizeVariants({ size })

  const compactClasses = cva({
    variants: {
      size: {
        sm: "!px-[4px]",
        md: "!px-[6px]",
        lg: "!px-[10px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  })
  const innerContent = (
    <>
      <div
        className={cn(
          "main flex items-center justify-center gap-1",
          compact && compactClasses({ size }),
          loading && "opacity-0",
          iconVariants({ variant: localVariant, mode })
        )}
      >
        {prepend}
        <span className={cn("flex items-center justify-center")}>
          {children}
        </span>
        {append}
      </div>
      <AnimatePresence>
        {loading && (
          <>
            {isLinkStyled(localVariant) ? (
              <Skeleton className="absolute inset-0 my-auto h-full w-full" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className={cn(
                    loadingVariants({
                      size,
                      variant: localVariant,
                    })
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
    disabled,
    className: cn(variantClasses, sizeClasses, focusRing(), className),
    "aria-busy": loading,
    "aria-label": ariaLabel,
    title,
    ...restProps,
  }

  const mainElement = isLink(props) ? (
    <Link
      {...CommonProps}
      //We need to pass the onClick, onFocus, and onBlur props as here the type narrows to ActionLinkProps
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
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
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
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
})

ActionImpl.displayName = "Action"

// Overloaded Action component for better type inference
function ActionOverload(
  props: ActionLinkProps & { ref?: React.Ref<HTMLAnchorElement> }
): React.ReactElement
function ActionOverload(
  props: ActionButtonProps & { ref?: React.Ref<HTMLButtonElement> }
): React.ReactElement
function ActionOverload(
  props: ActionProps & { ref?: React.Ref<HTMLElement> }
): React.ReactElement {
  return React.createElement(ActionImpl, props)
}

export const Action = ActionOverload as {
  (
    props: ActionLinkProps & { ref?: React.Ref<HTMLAnchorElement> }
  ): React.ReactElement
  (
    props: ActionButtonProps & { ref?: React.Ref<HTMLButtonElement> }
  ): React.ReactElement
  displayName?: string
}

Action.displayName = "Action"
