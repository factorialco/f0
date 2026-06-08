import type { StatusVariant } from "@/components/tags/F0TagStatus"

export type RequisitionProfile = {
  id: string | number
  title: string
  status?: string
  statusVariant?: StatusVariant
  reason?: string
  location?: string
  lineManager?: {
    firstName: string
    lastName: string
    avatarUrl?: string
  }
}
