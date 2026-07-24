/**
 * Profile data for a vacancy entity (ATS vacancy/position), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export type VacancyProfile = {
  id: string | number
  name: string
  status?: string
  vacancyType?: string
}
