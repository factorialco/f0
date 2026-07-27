import { useMemo } from "react"
import { OneApprovalHistory } from "@factorialco/f0-react/dist/experimental"

import { findEmployee } from "@/fixtures"
import type { Participant } from "./types"

/**
 * ParticipantApproval — read-only "Have all participants confirmed?"
 * indicator surfaced in the ReadView of the expense detail.
 *
 * Uses `OneApprovalHistory` (the same component finance reviewers
 * already recognise from manager approval flows). Per PSPEC Q-001
 * routing is PARALLEL: every internal participant is asked at the
 * same time, no ordering. We render that as a single
 * `ApprovalStep` with `approvalsRequired` equal to the internal
 * participant count.
 *
 * Externals don't get an approver row — they have no identity and
 * never receive an invite. The footer below the OneApprovalHistory
 * surfaces them as an annotation ("+N external guests, no
 * confirmation required").
 *
 * Returns `null` (renders nothing) when there are no internal
 * participants — externals-only or owner-only expenses don't need
 * an approval surface.
 */
export function ParticipantApproval(props: {
  participants: Participant[]
}) {
  const { participants } = props
  const internal = participants.filter(
    (p): p is Extract<Participant, { kind: "internal" }> => p.kind === "internal"
  )
  const externalCount = participants.filter((p) => p.kind === "external").length

  const approvers = useMemo(
    () =>
      internal.map((p) => {
        const emp = findEmployee(p.employeeId)
        const [first, ...rest] = (emp?.fullName ?? p.employeeId).split(" ")
        return {
          firstName: first ?? "",
          lastName: rest.join(" "),
          avatar: emp?.avatarUrl,
          // Map our `pending|confirmed|declined` → OneApprovalHistory
          // `Status` ("waiting"|"pending"|"approved"|"rejected").
          // We treat "pending" as "pending" (in-progress decision),
          // "confirmed" as "approved", "declined" as "rejected".
          status:
            p.confirmation === "confirmed"
              ? ("approved" as const)
              : p.confirmation === "declined"
                ? ("rejected" as const)
                : ("pending" as const),
        }
      }),
    [internal]
  )

  // Roll up the step status. Step is "approved" only when EVERY
  // internal participant has confirmed; "rejected" if any declined;
  // otherwise "pending".
  const stepStatus = (() => {
    if (approvers.length === 0) return "approved" as const
    if (approvers.some((a) => a.status === "rejected"))
      return "rejected" as const
    if (approvers.every((a) => a.status === "approved"))
      return "approved" as const
    return "pending" as const
  })()

  if (internal.length === 0) return null

  return (
    <div className="flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-4">
      <OneApprovalHistory
        steps={[
          {
            title: "Participant confirmation",
            approvalsRequired: approvers.length,
            status: stepStatus,
            approvers,
          },
        ]}
      />
      {externalCount > 0 ? (
        <span className="text-sm text-f1-foreground-secondary">
          +{externalCount} external {externalCount === 1 ? "guest" : "guests"}{" "}
          · no confirmation required
        </span>
      ) : null}
    </div>
  )
}
