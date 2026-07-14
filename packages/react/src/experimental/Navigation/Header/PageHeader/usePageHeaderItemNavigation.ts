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
  | "hasPrevious"
  | "hasNext"
  | "goToPrevious"
  | "goToNext"
>

export interface UsePageHeaderItemNavigationConfig<R extends RecordType> {
  /**
   * Returns a human-readable title for a navigation link. Used as the
   * accessible label on the prev/next buttons.
   */
  getItemTitle?: (item: R) => string
  /**
   * How the prev/next arrows navigate:
   * - `"url"` (default): each arrow is a link to the item's `itemUrl` — for
   *   full-page detail views where navigation changes the route.
   * - `"callback"`: each arrow calls `goToPrevious`/`goToNext`, swapping the
   *   active item in place — for a mounted sidepanel/dialog that never
   *   changes the URL. Presence is gated by `hasPrevious`/`hasNext`.
   * @default "url"
   */
  mode?: "url" | "callback"
}

/**
 * Converts an item-navigation result into the `NavigationProps` shape that
 * `PageHeader` and `F0Dialog` accept (directly or via
 * `PageHeaderNavigationProvider`).
 *
 * In `"url"` mode (default) the arrows are links to `previousItemUrl` /
 * `nextItemUrl` (computed from the hook's `itemUrl`); a null URL omits that
 * arrow. In `"callback"` mode the arrows call `goToPrevious`/`goToNext` and
 * presence is gated by `hasPrevious`/`hasNext` — for in-place navigation that
 * never touches the URL. The counter is included only when both the absolute
 * position and the total are known — never a misleading `0/n`.
 *
 * Returns null when there is nothing useful to render, so it can be passed
 * straight to `PageHeaderNavigationProvider`.
 */
export function usePageHeaderItemNavigation<R extends RecordType>(
  nav: PageHeaderItemNavigationInput<R> | null,
  config?: UsePageHeaderItemNavigationConfig<R>
): NavigationProps | null {
  const getItemTitle = config?.getItemTitle
  const mode = config?.mode ?? "url"

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
  const hasPrevious = nav?.hasPrevious ?? false
  const hasNext = nav?.hasNext ?? false
  const goToPrevious = nav?.goToPrevious
  const goToNext = nav?.goToNext

  return useMemo(() => {
    if (!hasInput) return null

    const counter =
      absoluteIndex !== null && totalItems !== undefined
        ? { current: absoluteIndex + 1, total: totalItems }
        : undefined

    const title = (item: R | null, fallback: string) =>
      (item !== null ? getItemTitle?.(item) : undefined) ?? fallback

    // In callback mode an arrow exists whenever the controller says it can
    // move that way; in url mode it exists only when a URL is resolvable.
    const previous =
      mode === "callback"
        ? hasPrevious
          ? { onClick: goToPrevious, title: title(previousItem, "Previous") }
          : undefined
        : previousItemUrl !== null
          ? { url: previousItemUrl, title: title(previousItem, "Previous") }
          : undefined

    const next =
      mode === "callback"
        ? hasNext
          ? { onClick: goToNext, title: title(nextItem, "Next") }
          : undefined
        : nextItemUrl !== null
          ? { url: nextItemUrl, title: title(nextItem, "Next") }
          : undefined

    if (!previous && !next && !counter) return null

    return { previous, next, counter }
  }, [
    hasInput,
    mode,
    previousItem,
    nextItem,
    previousItemUrl,
    nextItemUrl,
    absoluteIndex,
    totalItems,
    hasPrevious,
    hasNext,
    goToPrevious,
    goToNext,
    getItemTitle,
  ])
}
