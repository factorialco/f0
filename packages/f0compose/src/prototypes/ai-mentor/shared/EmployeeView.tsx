import { F0Alert, F0Button, F0Card, F0Text } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
} from "@factorialco/f0-react/dist/experimental"
import { ArrowLeft, Sparkles } from "@factorialco/f0-react/icons/app"

import { findEmployee, goals, performanceReviews } from "@/fixtures"
import {
  competencies,
  recommendations,
} from "../fixtures"

type Props = {
  employeeId: string
  onBack: () => void
}

const statusColor: Record<string, string> = {
  "pending-review": "bg-f1-background-warning text-f1-foreground-warning",
  ready: "bg-f1-background-info text-f1-foreground-info",
  assigned: "bg-f1-background-positive text-f1-foreground-positive",
  completed: "bg-f1-background-positive text-f1-foreground-positive",
  overridden: "bg-f1-background-secondary text-f1-foreground-secondary",
}

const statusLabel: Record<string, string> = {
  "pending-review": "Pending review",
  ready: "Ready to assign",
  assigned: "Assigned",
  completed: "Completed",
  overridden: "Overridden",
}

const ratingColor: Record<string, string> = {
  exceeds: "bg-f1-background-positive text-f1-foreground-positive",
  meets: "bg-f1-background-info text-f1-foreground-info",
  below: "bg-f1-background-warning text-f1-foreground-warning",
}

const ratingLabel: Record<string, string> = {
  exceeds: "Exceeds expectations",
  meets: "Meets expectations",
  below: "Below expectations",
}

export function EmployeeView({ employeeId, onBack }: Props) {
  const emp = findEmployee(employeeId)
  const rec = recommendations.find((r) => r.employeeId === employeeId)
  const empGoals = goals.filter((g) => g.employeeId === employeeId)
  const review = performanceReviews.find((r) => r.employeeId === employeeId)
  const gapComp = rec
    ? competencies.find((c) => c.id === rec.gapCompetencyId)
    : null

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "my_trainings",
              name: "Training",
              href: "/p/ai-mentor",
            }}
            breadcrumbs={[
              { id: "ai-mentor", label: "AI Mentor" },
              { id: "employee", label: emp?.fullName ?? "Employee" },
            ]}
          />
          <ResourceHeader
            title={`${emp?.fullName ?? employeeId}'s learning recommendation`}
            description={`${emp?.role ?? ""} · ${emp?.location ?? ""}`}
            secondaryActions={[
              { label: "Back to AI Mentor", icon: ArrowLeft, onClick: onBack },
            ]}
          />
        </>
      }
    >
      <div className="flex flex-col gap-6 p-8">
        {rec ? (
          <>
            {/* Personalised message — what the employee sees */}
            <F0Card title="Your learning recommendation">
              <div className="flex flex-col gap-4 p-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-f1-foreground-info" />
                  <F0Text content="Recommended by AI Mentor" variant="label" />
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[rec.status]}`}
                  >
                    {statusLabel[rec.status]}
                  </span>
                </div>

                {/* Justification — personalised paragraph */}
                <div className="rounded border border-f1-border bg-f1-background-secondary p-4">
                  <F0Text content={rec.justification} variant="body" />
                </div>

                {/* Course card */}
                <div className="flex items-center justify-between rounded border border-f1-border p-4">
                  <div className="flex flex-col gap-0.5">
                    <F0Text content={rec.courseTitle} variant="label" />
                    <F0Text
                      content={`${rec.courseDurationMin} min · Competency: ${gapComp?.name ?? rec.gapCompetencyId}`}
                      variant="small"
                    />
                  </div>
                  <F0Button
                    label="Start course"
                    variant="default"
                    onClick={() => {}}
                    disabled={rec.status !== "assigned"}
                  />
                </div>

                {rec.status === "completed" && rec.employeeSatisfaction && (
                  <F0Alert
                    variant="positive"
                    title="Course completed!"
                    description={`You rated this course ${rec.employeeSatisfaction}/5. Thank you for your feedback — it helps the AI Mentor improve future recommendations.`}
                  />
                )}
              </div>
            </F0Card>

            {/* Why this recommendation — audit transparency */}
            <F0Card
              title="Why this recommendation?"
              description="How the AI Mentor analysed your profile to reach this decision"
            >
              <div className="flex flex-col gap-3 p-4">
                <div className="flex flex-col gap-0.5">
                  <F0Text content="Gap identified" variant="label" />
                  <F0Text content={rec.gapSummary} variant="body" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <F0Text content="Competency to develop" variant="label" />
                  <F0Text
                    content={`${gapComp?.name ?? rec.gapCompetencyId} — ${gapComp?.description ?? ""}`}
                    variant="body"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <F0Text content="Inputs analysed" variant="label" />
                  <div className="flex flex-wrap gap-1 pt-1">
                    {[
                      "Performance Review",
                      "Individual goals",
                      "Role competencies",
                      "Career path",
                      "Company context",
                    ].map((input) => (
                      <span
                        key={input}
                        className="inline-flex items-center rounded bg-f1-background-secondary px-2 py-0.5 text-xs text-f1-foreground"
                      >
                        {input}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </F0Card>
          </>
        ) : (
          <F0Alert
            variant="info"
            title="No recommendation yet for this employee"
            description="The AI Mentor will generate a recommendation when their Performance Review cycle closes."
          />
        )}

        {/* Goals */}
        {empGoals.length > 0 && (
          <F0Card title="Current goals" description="Goals the AI Mentor took into account">
            <div className="flex flex-col divide-y divide-f1-border">
              {empGoals.map((g) => (
                <div key={g.id} className="flex items-center justify-between gap-4 px-4 py-3">
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <F0Text content={g.title} variant="label" />
                    <F0Text content={g.description} variant="small" />
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-f1-background-secondary">
                      <div
                        className="h-full rounded-full bg-f1-background-info"
                        style={{ width: `${g.progress}%` }}
                      />
                    </div>
                    <F0Text content={`${g.progress}%`} variant="small" />
                  </div>
                </div>
              ))}
            </div>
          </F0Card>
        )}

        {/* Performance review summary */}
        {review && (
          <F0Card title="Last Performance Review" description="Summary visible only to the L&D Admin — not to the employee">
            <div className="flex flex-col gap-3 p-4">
              <div className="flex items-center gap-2">
                {review.rating && (
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${ratingColor[review.rating]}`}>
                    {ratingLabel[review.rating]}
                  </span>
                )}
                <F0Text
                  content={`Goals: ${review.goalsCompleted}/${review.goalsTotal} completed`}
                  variant="small"
                />
              </div>
              <F0Alert
                variant="info"
                title="Review details are confidential"
                description="The AI Mentor uses the qualitative and quantitative review data to reason, but only shows the employee the elaborated justification — never raw extracts from the review."
              />
            </div>
          </F0Card>
        )}
      </div>
    </Page>
  )
}
