import type { StatusVariant } from "@/components/tags/F0TagStatus"

import type { PersonRef } from "../person/types"

/**
 * Profile data for a requisition entity (ATS requisition), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export type RequisitionProfile = {
  id: string | number
  title: string
  status?: string
  statusVariant?: StatusVariant
  reason?: string
  /** Person who requested/owns the requisition. */
  owner?: PersonRef
}
