import { useMemo } from "react"

import type { RecordType } from "@/hooks/datasource"
import type { NavigationProps } from "@/experimental/Navigation/Header/PageHeader"
import type { DataCollectionItemNavigationControls } from "./types"

interface UseItemNavigationPageHeaderConfig<R extends RecordType> {
  /**
   * Returns a human-readable title for a navigation link. Used as the
   * accessible label on the prev/next buttons.
   */
  getItemTitle?: (item: R) => string
}

/**
 * Converts `DataCollectionItemNavigationControls` into the `NavigationProps`
 * shape that `PageHeader` accepts.
 *
 * URLs are read directly from `controls.previousItemUrl` / `controls.nextItemUrl`,
 * which are already computed by the `itemUrl` prop on the data source. If those
 * URLs are null (i.e. `itemUrl` was not configured), the corresponding link is
 * omitted — the buttons will not render.
 *
 * @example
 * ```tsx
 * const { controls } = useDataCollectionItemNavigationRouteSync(itemNavigation, { routeId })
 * const navProps = useItemNavigationPageHeader(controls, {
 *   getItemTitle: (item) => item.name,
 * })
 * return (
 *   <PageHeaderNavigationProvider value={navProps}>
 *     <MyDetailPage />
 *   </PageHeaderNavigationProvider>
 * )
 * ```
 */
export function useItemNavigationPageHeader<R extends RecordType>(
  controls: DataCollectionItemNavigationControls<R> | null,
  config?: UseItemNavigationPageHeaderConfig<R>
): NavigationProps | null {
  return useMemo(() => {
    if (!controls) return null

    const { previousItem, nextItem, previousItemUrl, nextItemUrl } = controls

    return {
      previous:
        previousItemUrl !== null
          ? {
              url: previousItemUrl,
              title:
                (previousItem !== null
                  ? config?.getItemTitle?.(previousItem)
                  : undefined) ?? "Previous",
            }
          : undefined,
      next:
        nextItemUrl !== null
          ? {
              url: nextItemUrl,
              title:
                (nextItem !== null
                  ? config?.getItemTitle?.(nextItem)
                  : undefined) ?? "Next",
            }
          : undefined,
      counter: {
        current: controls.currentIndex + 1,
        total: controls.totalCount,
      },
    }
  }, [controls, config])
}
