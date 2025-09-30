import ExternalLink from "@/icons/app/ExternalLink"
import { Link as BaseLink, LinkProps as BaseLinkProps } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"
import { cva, type VariantProps } from "cva"
import { forwardRef } from "react"
import { F0Icon } from "../F0Icon"

const linkVariants = cva({
  base: "inline-flex flex-row items-center gap-1 text-base",
  variants: {
    variant: {
      unstyled: "text-inherit no-underline",
      link: "font-medium text-f1-foreground underline decoration-f1-border-hover decoration-1 underline-offset-[5px] transition-all visited:text-f1-foreground hover:text-f1-foreground hover:decoration-f1-border-bold active:text-f1-foreground",
    },
    disabled: {
      true: "cursor-not-allowed opacity-30 hover:decoration-f1-border-hover",
      false: "",
    },
  },
  defaultVariants: {
    variant: "link",
  },
})

export interface F0LinkProps
  extends BaseLinkProps,
    VariantProps<typeof linkVariants>,
    DataAttributes {
  stopPropagation?: boolean
}

export const F0Link = forwardRef<HTMLAnchorElement, F0LinkProps>(function Link(
  { className, children, variant, stopPropagation = false, ...props },
  ref
) {
  const { target } = props
  const external = target === "_blank"

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (stopPropagation) {
      event.stopPropagation()
    }
    props.onClick?.(event)
  }

  return (
    <BaseLink
      ref={ref}
      {...props}
      onClick={handleClick}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        linkVariants({
          variant,
          disabled: props.disabled,
        }),
        !props.disabled &&
          focusRing("focus-visible:rounded-xs focus-visible:ring-offset-2"),
        className
      )}
      role="link"
      aria-label={props["aria-label"] ?? props.title}
    >
      <span>{children}</span>
      {external && <F0Icon icon={ExternalLink} size="sm" />}
    </BaseLink>
  )
})
