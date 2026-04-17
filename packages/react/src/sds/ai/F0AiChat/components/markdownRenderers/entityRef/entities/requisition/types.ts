/**
 * Profile data for a requisition entity (ATS requisition), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export type RequisitionProfile = {
  id: string | number
  title: string
  status?: string
  reason?: string
}
