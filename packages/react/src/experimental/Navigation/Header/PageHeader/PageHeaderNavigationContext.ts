import { createContext, useContext } from "react"

import type { NavigationProps } from "./index"

export const PageHeaderNavigationContext =
  createContext<NavigationProps | null>(null)

/**
 * Provider that lets a page component inject navigation data into PageHeader
 * without needing to pass it down as a prop. PageHeader reads this context
 * only when its own `navigation` prop is undefined, so the prop always wins.
 *
 * @example
 * ```tsx
 * const navProps = useItemNavigationPageHeader(controls, { ... })
 * return (
 *   <PageHeaderNavigationProvider value={navProps}>
 *     <MyDetailPage />
 *   </PageHeaderNavigationProvider>
 * )
 * ```
 */
export const PageHeaderNavigationProvider = PageHeaderNavigationContext.Provider

/**
 * Returns the navigation value injected by the nearest
 * `PageHeaderNavigationProvider`, or null when no provider is present.
 */
export function usePageHeaderNavigation(): NavigationProps | null {
  return useContext(PageHeaderNavigationContext)
}
