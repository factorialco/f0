export type SortAndHideListItem = {
  id: string
  label: string
  sortable?: boolean
  canHide?: boolean
  visible?: boolean
  order?: number
  /**
   * Whether the user can remove (not just hide) this entry. When `true` and the
   * list has an `onRemove` handler, a trash affordance is revealed on hover or
   * keyboard focus.
   */
  removable?: boolean
  /** Whether this entry is the current user-managed required column. */
  locked?: boolean
  /** Whether this entry exposes the lock/unlock controls. */
  lockable?: boolean
  /**
   * When set, the entry is locked: its switch renders forced OFF and disabled,
   * wrapped in a tooltip showing this text (e.g. a missing-permission reason).
   * Distinct from a non-hideable (`canHide: false`) row — that draws a lock icon
   * and stays ON; a `disabledReason` row shows no lock icon and stays OFF.
   */
  disabledReason?: string
}
