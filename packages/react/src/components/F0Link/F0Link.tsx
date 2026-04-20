import { forwardRef } from "react"

import ExternalLink from "@/icons/app/ExternalLink"
import { withDataTestId } from "@/lib/data-testid"
import {
  Action,
  ActionLinkProps,
  ActionLinkVariant,
  ActionProps,
} from "@/ui/Action"

import { F0Icon } from "../F0Icon"

export type F0LinkProps = Omit<ActionLinkProps, "variant" | "href"> & {
  variant?: ActionLinkVariant
  stopPropagation?: boolean
  href?: string
}

const _F0Link = forwardRef<HTMLAnchorElement, F0LinkProps>(function Link(
  {
    className,
    children,
    stopPropagation = false,
    "aria-label": ariaLabel,
    href,
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

  // Build Action props: include href only when provided so that Action can
  // fall back to a button/span when no href is given (WCAG / no scroll-to-top).
  const actionProps: ActionProps = (
    href !== undefined
      ? {
          ...props,
          href,
          onClick: handleClick,
          rel: external ? "noopener noreferrer" : undefined,
          "aria-label": ariaLabel,
          className,
        }
      : {
          ...props,
          onClick:
            handleClick as unknown as React.MouseEventHandler<HTMLButtonElement>,
          "aria-label": ariaLabel,
          className,
        }
  ) as ActionProps

  return (
    <Action ref={ref} {...actionProps}>
      <span>{children}</span>
      {external && (
        <>
          <F0Icon icon={ExternalLink} size="sm" aria-hidden={true} />
          <span className="sr-only">opens in new tab</span>
        </>
      )}
    </Action>
  )
})

export const F0Link = withDataTestId(_F0Link)
