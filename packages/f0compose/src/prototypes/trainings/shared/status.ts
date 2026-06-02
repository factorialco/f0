import type {
  TrainingMembershipStatus,
  TrainingRequestStatus,
  TrainingStatus,
} from "@/fixtures"

export const trainingStatusVariant: Record<
  TrainingStatus,
  "neutral" | "info" | "positive" | "warning" | "critical"
> = {
  active: "positive",
  draft: "neutral",
}

export const trainingStatusLabel: Record<TrainingStatus, string> = {
  active: "Active",
  draft: "Draft",
}

export const membershipStatusVariant: Record<
  TrainingMembershipStatus,
  "neutral" | "info" | "positive" | "warning" | "critical"
> = {
  completed: "positive",
  started: "info",
  notstarted: "neutral",
  partiallycompleted: "warning",
  missing: "critical",
}

export const membershipStatusLabel: Record<TrainingMembershipStatus, string> = {
  completed: "Completed",
  started: "In progress",
  notstarted: "Not started",
  partiallycompleted: "Partially completed",
  missing: "Missing",
}

export const requestStatusVariant: Record<
  TrainingRequestStatus,
  "neutral" | "info" | "positive" | "warning" | "critical"
> = {
  review: "warning",
  approved: "positive",
  rejected: "critical",
}

export const requestStatusLabel: Record<TrainingRequestStatus, string> = {
  review: "Pending",
  approved: "Approved",
  rejected: "Rejected",
}

export const modalityLabel: Record<string, string> = {
  in_person: "In person",
  online: "Online",
  hybrid: "Hybrid",
}
