import { BreadcrumbCollectionSelectItemType } from '../../types';
/**
 * Internal renderer for `type: "collection-select"` breadcrumb items.
 *
 * Loop-safety by construction — the footgun this kills is: app re-renders →
 * new inline item/source/adapter identities → F0Select's fetch effects
 * re-fire → state update → render → infinite refetch loop. Every link in
 * that chain is cut:
 *
 * 1. The persisted collection state is read exactly once (state initializer).
 * 2. `item.source` is captured on mount; later identity changes are ignored.
 *    `Breadcrumbs` keys collection-select items by `collectionId`, so
 *    pointing the item at a different collection remounts and re-captures —
 *    the documented way to swap sources. Changing only the item `id`/`value`
 *    (walking items of the same collection, e.g. detail-page prev/next) does
 *    NOT remount: the trigger updates through props, the seeded source and
 *    its fetched dropdown page are kept.
 * 3. The seeded definition (and thus its dataAdapter) is built once, so the
 *    reference handed to F0Select never changes.
 * 4. `mapOptions`/`getItemHref`/`onSelect` are wrapped in stable callbacks
 *    reading the latest values from a ref.
 * 5. Picking the already-current value is a no-op, and F0Select itself never
 *    emits before user interaction — mount/data-load cannot navigate.
 */
export declare function BreadcrumbCollectionSelect({ item, }: {
    item: BreadcrumbCollectionSelectItemType;
}): import("react").JSX.Element;
