import { forwardRef } from "react"

import type { TestableProps } from "@/global.types"
import ExternalLink from "@/icons/app/ExternalLink"
import { Action, ActionLinkProps, ActionLinkVariant } from "@/ui/Action"

import { F0Icon } from "../F0Icon"

export type F0LinkProps = Omit<ActionLinkProps, "variant" | "href"> &
  TestableProps & {
    variant?: ActionLinkVariant
    stopPropagation?: boolean
    href?: string
  }

export const F0Link = forwardRef<HTMLAnchorElement, F0LinkProps>(function Link(
  {
    className,
    children,
    stopPropagation = false,
    "aria-label": ariaLabel,
    href,
    testId,
    ...props
  },
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
    <Action
      ref={ref}
      {...props}
      href={href || "#"}
      onClick={handleClick}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel || props.title}
      className={className}
      data-testid={testId}
    >
      <span>{children}</span>
      {external && <F0Icon icon={ExternalLink} size="sm" />}
    </Action>
  )
})
