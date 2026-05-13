import { F0Alert, F0Button, F0Card, F0Heading, F0Text } from "@factorialco/f0-react"
import { Check, Cross, Sparkles } from "@factorialco/f0-react/icons/app"

import { recommendations, trainingRequests } from "../fixtures"

const statusLabel = {
  pending: "Pending",
  approved: "Approved",
  rejected: "Rejected",
  draft: "Draft",
}

const statusColor = {
  pending: "bg-f1-background-warning text-f1-foreground-warning",
  approved: "bg-f1-background-positive text-f1-foreground-positive",
  rejected: "bg-f1-background-critical text-f1-foreground-critical",
  draft: "bg-f1-background-secondary text-f1-foreground-secondary",
}

export function RequestsTab() {
  const pendingAiRequests = trainingRequests.filter(
    (r) => r.status === "pending" && r.linkedRecommendationId
  )

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <F0Heading content="Requests" variant="heading-large" as="h1" />
        <F0Text
          content="Employee training requests. AI Mentor does not replace this workflow; it can only explain why a request matches a detected development gap."
          variant="body"
        />
      </header>

      {pendingAiRequests.length > 0 && (
        <F0Alert
          variant="info"
          title={`${pendingAiRequests.length} pending request${pendingAiRequests.length > 1 ? "s" : ""} match AI Mentor gaps`}
          description="These requests are not auto-approved. The AI Mentor context helps the manager understand why the course is relevant now."
        />
      )}

      <F0Card title="Training requests" description="Requests retain the existing approval logic">
        <div className="flex flex-col divide-y divide-f1-border">
          {trainingRequests.map((request) => {
            const recommendation = recommendations.find(
              (r) => r.id === request.linkedRecommendationId
            )

            return (
              <div key={request.id} className="flex items-center justify-between gap-4 px-4 py-4">
                <div className="flex min-w-0 flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <F0Text content={request.trainingName} variant="label" />
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[request.status]}`}
                    >
                      {statusLabel[request.status]}
                    </span>
                    {recommendation && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-f1-background-info px-2 py-0.5 text-xs text-f1-foreground-info">
                        <Sparkles className="h-3 w-3" />
                        AI Mentor match
                      </span>
                    )}
                  </div>
                  <F0Text
                    content={`${request.employeeName} · ${request.provider} · ${request.competency} · €${request.amount}`}
                    variant="small"
                  />
                  {recommendation && (
                    <F0Text
                      content={`Detected gap: ${recommendation.gap}`}
                      variant="description"
                    />
                  )}
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {request.status === "pending" && (
                    <>
                      <F0Button label="Approve" variant="default" icon={Check} onClick={() => {}} />
                      <F0Button label="Reject" variant="outline" icon={Cross} onClick={() => {}} />
                    </>
                  )}
                  {request.status !== "pending" && (
                    <F0Button label="Open" variant="outline" onClick={() => {}} />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </F0Card>
    </div>
  )
}
