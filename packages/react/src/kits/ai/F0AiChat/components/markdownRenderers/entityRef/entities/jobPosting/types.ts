/**
 * Profile data for a job posting entity (ATS opening), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export type JobPostingProfile = {
  id: string | number
  title: string
  status?: string
  location?: string
}
