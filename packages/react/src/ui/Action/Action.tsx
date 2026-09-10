import { cva } from "cva"
import { AnimatePresence, motion } from "motion/react"
import React from "react"
import { TooltipInternal } from "@/experimental/Overlays/Tooltip"
import { Link } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { ActionLinkProps, ActionProps } from "./types"
import { isLinkStyled } from "./utils"
import {
  actionVariants,
  buttonSizeVariants,
  iconVariants,
  linkSizeVariants,
  loadingVariants,
} from "./variants"

const compactPaddingVariants = cva({
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

/**
 * What sits inside the button or the link: the label between its adornments,
 * with the loading state drawn over it (the label stays in the flow at
 * `opacity-0` so the control keeps its width).
 */
const ActionContent = ({
  children,
  prepend,
  append,
  compact,
  size,
  loading,
  variant,
  mode,
}: Pick<
  ActionProps,
  "children" | "prepend" | "append" | "compact" | "size" | "loading" | "mode"
> & {
  variant: NonNullable<ActionProps["variant"]>
}) => (
  <>
    <div
      className={cn(
        "main flex min-w-0 flex-1 items-center justify-center gap-1",
        compact && compactPaddingVariants({ size }),
        loading && "opacity-0",
        iconVariants({ variant: variant, mode })
      )}
    >
      {prepend}
      <span className="flex min-w-0 flex-1 items-center justify-center">
        {children}
      </span>
      {append}
    </div>
    <AnimatePresence>
      {loading ? (
        <>
          {isLinkStyled(variant) ? (
            <Skeleton className="absolute inset-0 my-auto h-full w-full" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className={cn(
                  loadingVariants({
                    size,
                    variant: variant,
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
      ) : null}
    </AnimatePresence>
  </>
)

export const Action = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ActionProps
>((props, ref) => {
  const isAnchor = (props: ActionProps): props is ActionLinkProps => {
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
    tooltip,
    onMouseEnter,
    onMouseLeave,
    ...restProps
  } = props

  const defaultVariant = isAnchor(props) ? "link" : "default"
  const localVariant = variant ?? defaultVariant

  const variantClasses = actionVariants({
    variant: localVariant,
    pressed,
  })

  const sizeClasses = isLinkStyled(localVariant)
    ? linkSizeVariants({ size })
    : buttonSizeVariants({ size })

  const CommonProps = {
    disabled,
    className: cn(variantClasses, sizeClasses, focusRing(), className),
    "aria-busy": loading,
    "aria-label": ariaLabel,
    title,
    ...restProps,
  }

  const content = (
    <ActionContent
      prepend={prepend}
      append={append}
      compact={compact}
      size={size}
      loading={loading}
      variant={localVariant}
      mode={mode}
    >
      {children}
    </ActionContent>
  )

  const mainElement = isAnchor(props) ? (
    <Link
      {...CommonProps}
      //We need to pass the onClick, onFocus, and onBlur props as here the type narrows to ActionLinkProps
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      aria-disabled={disabled}
      role="link"
    >
      {content}
    </Link>
  ) : (
    <button
      {...CommonProps}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref as React.Ref<HTMLButtonElement>}
      data-pressed={pressed}
      role="button"
    >
      {content}
    </button>
  )

  const tooltipProps =
    tooltip && typeof tooltip === "object"
      ? tooltip
      : tooltip
        ? { description: tooltip.toString() }
        : undefined

  const element = tooltipProps ? (
    <TooltipInternal {...tooltipProps} delay={1000}>
      {mainElement}
    </TooltipInternal>
  ) : (
    mainElement
  )

  if (prependOutside || appendOutside) {
    return (
      <div className="flex items-center">
        {prependOutside}
        {element}
        {appendOutside}
      </div>
    )
  }

  return element
})

Action.displayName = "Action"
