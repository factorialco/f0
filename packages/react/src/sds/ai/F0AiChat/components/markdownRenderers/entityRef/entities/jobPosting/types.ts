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
  publishedAt?: string
}
