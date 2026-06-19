import type { StatusVariant } from "@/components/tags/F0TagStatus"

export type JobPostingProfile = {
  id: string | number
  title: string
  status?: string
  statusVariant?: StatusVariant
  location?: string
  publishedAt?: string
  vacanciesFilled?: number
  vacanciesTotal?: number
}
