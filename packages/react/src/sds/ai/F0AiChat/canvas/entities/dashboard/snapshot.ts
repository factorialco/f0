/**
 * Synthetic key used to surface a snapshot dashboard's single-day date pill
 * inside the dashboard's `navigationFilters` map. The compute hook strips
 * this key from `navigationFilterValues` and promotes it to the top-level
 * `snapshotDate` request field.
 */
export const SNAPSHOT_DATE_FILTER_KEY = "__snapshotDate"
