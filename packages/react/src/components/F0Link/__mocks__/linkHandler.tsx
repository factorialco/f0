import { PropsWithChildren, forwardRef } from "react"
import { vi } from "vitest"
import { LinkProps } from "../../../lib/linkHandler"

const isActive = vi.fn((_path?: string) => false)
const useNavigation = vi.fn(() => ({
  isActive,
  currentPath: undefined,
}))

const MockBaseLink = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(
  ({ children, href, ...props }, ref) => {
    const active = isActive(href)
    return (
      <a ref={ref} href={href} {...props} aria-current={active ? "page" : undefined}>
        {children}
      </a>
    )
  }
)
MockBaseLink.displayName = "MockBaseLink"

export { MockBaseLink as Link, useNavigation }
