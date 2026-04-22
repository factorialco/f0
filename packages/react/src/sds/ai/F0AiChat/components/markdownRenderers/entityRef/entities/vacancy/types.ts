import type { StatusVariant } from "@/components/tags/F0TagStatus"

import type { PersonRef } from "../person/types"

/**
 * Profile data for a vacancy entity (ATS vacancy/position), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export type VacancyProfile = {
  id: string | number
  name: string
  status?: string
  statusVariant?: StatusVariant
  vacancyType?: string
  /** Pre-formatted deadline string (e.g. "Jun 1, 2026"). */
  deadline?: string
  recruiters?: PersonRef[]
}
