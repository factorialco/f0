/**
 * Profile data for a candidate entity (ATS applicant), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export type CandidateProfile = {
  id: string | number
  firstName: string
  lastName: string
  avatarUrl?: string
  source?: string
}
