import type { StatusVariant } from "@/components/tags/F0TagStatus"

/**
 * Profile data for a job posting entity (ATS opening), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export type JobPostingProfile = {
  id: string | number
  title: string
  status?: string
  statusVariant?: StatusVariant
  location?: string
  /** Pre-formatted publication date (e.g. "Jun 1, 2026"). */
  publishedAt?: string
  /** Number of vacancies that have been filled. */
  vacanciesFilled?: number
  /** Total number of vacancies planned for this posting. */
  vacanciesTotal?: number
}
