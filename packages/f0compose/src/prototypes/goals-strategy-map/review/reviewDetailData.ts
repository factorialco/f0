import { employees } from "@/fixtures"
import type { ReviewCampaign } from "@/fixtures/performance"

// ---------------------------------------------------------------------------
// Participant rows (derived from the shared employees fixture)
// ---------------------------------------------------------------------------

export type Alignment = "low" | "mid" | "high" | null
export type ReviewState = "pending" | "done"
export type ParticipantStatus = "pending" | "published"
export type ActionPlanState = "not-started" | "in-progress" | "done"

export type ParticipantRow = {
  id: string
  reviewId: string
  firstName: string
  lastName: string
  avatarUrl: string
  managerName: string
  /** 1–5, or null when no review has been submitted yet. */
  score: number | null
  alignment: Alignment
  managerReview: ReviewState
  selfReview: ReviewState
  status: ParticipantStatus
  actionPlan: ActionPlanState
}

const employeeMap = new Map(employees.map((e) => [e.id, e]))

function managerNameFor(managerId: string | null): string {
  if (!managerId) return "Hellen Howard"
  return employeeMap.get(managerId)?.fullName ?? "Hellen Howard"
}

const SCORE_CYCLE: (number | null)[] = [null, 3, 3, 4, 3, 2, 4, 5, 3, null, 3, 4]
const ALIGNMENT_CYCLE: Alignment[] = [null, "mid", "high", null, "mid", "low"]

/**
 * Deterministically derives participant rows for a review from the employees
 * fixture. No randomness (keeps renders stable); fields cycle by index so the
 * table shows a realistic spread of scores, alignments and statuses.
 */
export function getReviewParticipants(reviewId: string): ParticipantRow[] {
  return employees.map((e, i) => {
    const [firstName, ...rest] = e.fullName.split(" ")
    const managerReview: ReviewState = i % 4 === 0 ? "pending" : "done"
    const selfReview: ReviewState = i % 5 === 0 ? "pending" : "done"
    const status: ParticipantStatus =
      managerReview === "done" && selfReview === "done" ? "published" : "pending"
    const actionPlan: ActionPlanState =
      status === "published"
        ? i % 2 === 0
          ? "in-progress"
          : "not-started"
        : "not-started"

    return {
      id: `${reviewId}-p-${e.id}`,
      reviewId,
      firstName,
      lastName: rest.join(" "),
      avatarUrl: e.avatarUrl,
      managerName: managerNameFor(e.managerId),
      score: managerReview === "done" ? SCORE_CYCLE[i % SCORE_CYCLE.length] : null,
      alignment: status === "published" ? ALIGNMENT_CYCLE[i % ALIGNMENT_CYCLE.length] : null,
      managerReview,
      selfReview,
      status,
      actionPlan,
    }
  })
}

// ---------------------------------------------------------------------------
// Review-level detail metadata (computed from the participant rows)
// ---------------------------------------------------------------------------

export type ScoreBucket = {
  label: string
  count: number
}

export type ReviewDetail = {
  description: string
  dueLabel: string
  reviewTypes: string
  participantsCount: number
  participationDone: number
  participationTotal: number
  participationPct: number
  reviewsPending: number
  actionPlansPending: number
  averageScore: number
  distribution: ScoreBucket[]
}

const SCORE_LABELS = [
  "Needs improvement",
  "Room for growth",
  "Meets expectations",
  "Exceeds expectations",
  "Outstanding",
]

export function getReviewDetail(review: ReviewCampaign): ReviewDetail {
  const participants = getReviewParticipants(review.id)

  const participationDone = participants.filter(
    (p) => p.status === "published"
  ).length
  const participationTotal = participants.length
  const participationPct =
    participationTotal === 0
      ? 0
      : Math.round((participationDone / participationTotal) * 100)

  const reviewsPending = participants.filter(
    (p) => p.managerReview === "pending"
  ).length
  const actionPlansPending = participants.filter(
    (p) => p.actionPlan === "not-started" && p.status === "published"
  ).length

  const scored = participants
    .map((p) => p.score)
    .filter((s): s is number => s != null)
  const averageScore =
    scored.length === 0
      ? 0
      : Math.round(scored.reduce((sum, s) => sum + s, 0) / scored.length)

  const distribution: ScoreBucket[] = SCORE_LABELS.map((label, idx) => ({
    label,
    count: scored.filter((s) => s === idx + 1).length,
  }))

  return {
    description:
      "Esta es la evaluación mensual 180º de toda la empresa. Es el momento de reflexionar sobre los últimos meses, celebrar tus logros y explorar nuevas formas de crecer.",
    dueLabel: review.status === "active" ? "in 18 days" : "—",
    reviewTypes: "Manager • Self-review",
    participantsCount: participationTotal,
    participationDone,
    participationTotal,
    participationPct,
    reviewsPending,
    actionPlansPending,
    averageScore,
    distribution,
  }
}
