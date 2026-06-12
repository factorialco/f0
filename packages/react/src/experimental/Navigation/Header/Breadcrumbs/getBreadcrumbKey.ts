import { BreadcrumbItemType } from "./types"

/**
 * Render key for a breadcrumb item. Most items are identified by their `id`,
 * but a collection-select is identified by its COLLECTION: walking items of
 * the same collection (prev/next on a detail page changes the item `id` and
 * `value`) must NOT remount the select — a remount rebuilds its seeded source
 * and refetches the dropdown's first page on every navigation. The changing
 * parts (`label`, `value`, `defaultItem`, callbacks) flow through props.
 * Changing the `collectionId` still remounts: new collection, new seeded
 * source.
 */
export const getBreadcrumbKey = (item: BreadcrumbItemType | undefined) =>
  item && "type" in item && item.type === "collection-select"
    ? `collection-select-${item.collectionId}`
    : item?.id
