import { useMemo } from "react"

import type {
  RecordType,
  UseDataSourceItemNavigationReturn,
} from "@/hooks/datasource"

import type { NavigationProps } from "../PageNavigation"

export type PageHeaderItemNavigationInput<R extends RecordType> = Pick<
  UseDataSourceItemNavigationReturn<R>,
  | "previousItem"
  | "nextItem"
  | "previousItemUrl"
  | "nextItemUrl"
  | "absoluteIndex"
  | "totalItems"
  | "activeIndex"
>

export interface UsePageHeaderItemNavigationConfig<R extends RecordType> {
  /**
   * Returns a human-readable title for a navigation link. Used as the
   * accessible label on the prev/next buttons.
   */
  getItemTitle?: (item: R) => string
}

/**
 * Converts an item-navigation result into the `NavigationProps` shape that
 * `PageHeader` accepts (directly or via `PageHeaderNavigationProvider`).
 *
 * URLs are read from `previousItemUrl` / `nextItemUrl`, which are computed by
 * the `itemUrl` option on the navigation hook. A null URL omits that link
 * (the button renders disabled). The counter is included only when both the
 * absolute position and the total are known — never a misleading `0/n`.
 *
 * Returns null when there is nothing useful to render (no input, or the
 * active item could not be located and no total is known), so it can be
 * passed straight to `PageHeaderNavigationProvider`.
 */
export function usePageHeaderItemNavigation<R extends RecordType>(
  nav: PageHeaderItemNavigationInput<R> | null,
  config?: UsePageHeaderItemNavigationConfig<R>
): NavigationProps | null {
  const getItemTitle = config?.getItemTitle

  // Field-level memo deps keep the returned object identity stable across
  // re-renders that don't change the navigation state, so it can be passed
  // to a context provider without churning consumers.
  const hasInput = nav !== null
  const previousItem = nav?.previousItem ?? null
  const nextItem = nav?.nextItem ?? null
  const previousItemUrl = nav?.previousItemUrl ?? null
  const nextItemUrl = nav?.nextItemUrl ?? null
  const absoluteIndex = nav?.absoluteIndex ?? null
  const totalItems = nav?.totalItems

  return useMemo(() => {
    if (!hasInput) return null

    const counter =
      absoluteIndex !== null && totalItems !== undefined
        ? { current: absoluteIndex + 1, total: totalItems }
        : undefined

    const previous =
      previousItemUrl !== null
        ? {
            url: previousItemUrl,
            title:
              (previousItem !== null
                ? getItemTitle?.(previousItem)
                : undefined) ?? "Previous",
          }
        : undefined

    const next =
      nextItemUrl !== null
        ? {
            url: nextItemUrl,
            title:
              (nextItem !== null ? getItemTitle?.(nextItem) : undefined) ??
              "Next",
          }
        : undefined

    if (!previous && !next && !counter) return null

    return { previous, next, counter }
  }, [
    hasInput,
    previousItem,
    nextItem,
    previousItemUrl,
    nextItemUrl,
    absoluteIndex,
    totalItems,
    getItemTitle,
  ])
}
