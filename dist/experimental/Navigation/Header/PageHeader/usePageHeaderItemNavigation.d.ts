import { RecordType, UseDataSourceItemNavigationReturn } from '../../../../hooks/datasource';
import { NavigationProps } from '../PageNavigation';
export type PageHeaderItemNavigationInput<R extends RecordType> = Pick<UseDataSourceItemNavigationReturn<R>, "previousItem" | "nextItem" | "previousItemUrl" | "nextItemUrl" | "absoluteIndex" | "totalItems" | "activeIndex" | "hasPrevious" | "hasNext" | "goToPrevious" | "goToNext">;
export interface UsePageHeaderItemNavigationConfig<R extends RecordType> {
    /**
     * Returns a human-readable title for a navigation link. Used as the
     * accessible label on the prev/next buttons.
     */
    getItemTitle?: (item: R) => string;
    /**
     * How the prev/next arrows navigate:
     * - `"url"` (default): each arrow is a link to the item's `itemUrl` — for
     *   full-page detail views where navigation changes the route.
     * - `"callback"`: each arrow calls `goToPrevious`/`goToNext`, swapping the
     *   active item in place — for a mounted sidepanel/dialog that never
     *   changes the URL. Presence is gated by `hasPrevious`/`hasNext`.
     * @default "url"
     */
    mode?: "url" | "callback";
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
export declare function usePageHeaderItemNavigation<R extends RecordType>(nav: PageHeaderItemNavigationInput<R> | null, config?: UsePageHeaderItemNavigationConfig<R>): NavigationProps | null;
