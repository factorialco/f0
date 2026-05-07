import { F0Alert, F0Button, F0Card, F0Heading, F0Text } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
} from "@factorialco/f0-react/dist/experimental"
import { ArrowLeft, Download } from "@factorialco/f0-react/icons/app"

import { employees, findEmployee } from "@/fixtures"

import { recommendations } from "../fixtures"

type Props = {
  managerId: string
  onBack: () => void
}

const statusLabel: Record<string, string> = {
  "pending-review": "Pending review",
  ready: "Ready to assign",
  assigned: "Assigned",
  completed: "Completed",
  overridden: "Overridden",
}

const statusColor: Record<string, string> = {
  "pending-review": "bg-f1-background-warning text-f1-foreground-warning",
  ready: "bg-f1-background-info text-f1-foreground-info",
  assigned: "bg-f1-background-positive text-f1-foreground-positive",
  completed: "bg-f1-background-positive text-f1-foreground-positive",
  overridden: "bg-f1-background-secondary text-f1-foreground-secondary",
}

const decisionLabel: Record<string, string> = {
  existing: "Existing course",
  adapted: "Adapted course",
  new: "New course",
}

const decisionColor: Record<string, string> = {
  existing: "bg-f1-background-positive text-f1-foreground-positive",
  adapted: "bg-f1-background-info text-f1-foreground-info",
  new: "bg-f1-background-warning text-f1-foreground-warning",
}

export function ManagerView({ managerId, onBack }: Props) {
  const manager = findEmployee(managerId)
  const directReports = employees.filter((e) => e.managerId === managerId)
  const teamRecommendations = recommendations.filter((r) =>
    directReports.some((e) => e.id === r.employeeId)
  )
  const assigned = teamRecommendations.filter((r) => r.status === "assigned").length
  const completed = teamRecommendations.filter((r) => r.status === "completed").length
  const pendingReview = teamRecommendations.filter(
    (r) => r.status === "pending-review"
  ).length

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
              { id: "manager", label: "Manager FYI" },
            ]}
          />
          <ResourceHeader
            title="AI Mentor summary for your team"
            description={`${manager?.fullName ?? managerId} · ${directReports.length} direct reports`}
            secondaryActions={[
              { label: "Back to AI Mentor", icon: ArrowLeft, onClick: onBack },
            ]}
          />
        </>
      }
    >
      <div className="flex flex-col gap-6 p-8">
        <header className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <F0Heading content="Manager FYI" variant="heading-large" as="h1" />
            <F0Text
              content="A read-only summary of learning recommendations assigned to your team this quarter. No action is required."
              variant="body"
            />
          </div>
          <F0Button
            label="Download summary"
            variant="outline"
            icon={Download}
            onClick={() => {}}
          />
        </header>

        <F0Alert
          variant="info"
          title="This is FYI only"
          description="Managers receive this summary to understand development focus areas in their team. L&D owns course review and assignment decisions."
        />

        <section className="grid grid-cols-3 gap-4">
          <F0Card title="Assigned" description="Courses already sent to employees">
            <div className="p-4">
              <span className="text-3xl font-semibold text-f1-foreground">
                {assigned}
              </span>
            </div>
          </F0Card>
          <F0Card title="Completed" description="Employees who finished the course">
            <div className="p-4">
              <span className="text-3xl font-semibold text-f1-foreground">
                {completed}
              </span>
            </div>
          </F0Card>
          <F0Card title="Pending L&D review" description="Drafts not assigned yet">
            <div className="p-4">
              <span className="text-3xl font-semibold text-f1-foreground">
                {pendingReview}
              </span>
            </div>
          </F0Card>
        </section>

        <F0Card title="Team recommendations" description="One recommendation per employee per quarter">
          <div className="flex flex-col divide-y divide-f1-border">
            {teamRecommendations.map((rec) => {
              const employee = findEmployee(rec.employeeId)
              return (
                <div
                  key={rec.id}
                  className="flex items-center justify-between gap-4 px-4 py-3"
                >
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <F0Text content={employee?.fullName ?? rec.employeeId} variant="label" />
                    <F0Text content={rec.gapSummary} variant="small" />
                    <F0Text content={rec.courseTitle} variant="small" />
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${decisionColor[rec.courseDecision]}`}
                    >
                      {decisionLabel[rec.courseDecision]}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[rec.status]}`}
                    >
                      {statusLabel[rec.status]}
                    </span>
                  </div>
                </div>
              )
            })}
            {teamRecommendations.length === 0 && (
              <div className="p-4">
                <F0Text
                  content="No recommendations have been generated for this manager's direct reports yet."
                  variant="body"
                />
              </div>
            )}
          </div>
        </F0Card>

        <F0Card title="Suggested manager follow-up" description="How to support the team without turning the recommendation into evaluation">
          <div className="grid grid-cols-3 gap-3 p-4">
            {[
              {
                title: "Keep it developmental",
                desc: "Frame the course as support for growth, not as a performance warning.",
              },
              {
                title: "Connect it to goals",
                desc: "Reference the employee's current goals when discussing the recommendation.",
              },
              {
                title: "Follow up lightly",
                desc: "Ask what was useful after completion. Avoid asking for private review details.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded border border-f1-border bg-f1-background-secondary p-3"
              >
                <F0Text content={item.title} variant="label" />
                <F0Text content={item.desc} variant="small" />
              </div>
            ))}
          </div>
        </F0Card>
      </div>
    </Page>
  )
}
