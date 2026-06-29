export type SortAndHideListItem = {
  id: string
  label: string
  sortable?: boolean
  canHide?: boolean
  visible?: boolean
  order?: number
  /**
   * Whether the user can remove (not just hide) this entry. When `true` and the
   * list has an `onRemove` handler, a trash affordance is revealed on hover.
   */
  removable?: boolean
}
