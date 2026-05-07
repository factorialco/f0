import { F0Alert, F0BigNumber, F0Button, F0Card, F0Heading, F0Text } from "@factorialco/f0-react"
import { Sparkles } from "@factorialco/f0-react/icons/app"

import { findEmployee } from "@/fixtures"
import {
  currentCycleStats,
  recommendations,
} from "../fixtures"

type Props = {
  onViewEmployee: (id: string) => void
  onViewManager: (id: string) => void
}

const statusLabel: Record<string, string> = {
  "pending-review": "Pending review",
  ready: "Ready to assign",
  assigned: "Assigned",
  completed: "Completed",
  overridden: "Overridden",
}

const decisionLabel: Record<string, string> = {
  existing: "Existing course",
  adapted: "Adapted course",
  new: "New course (draft)",
}

const decisionColor: Record<string, string> = {
  existing: "bg-f1-background-positive text-f1-foreground-positive",
  adapted: "bg-f1-background-info text-f1-foreground-info",
  new: "bg-f1-background-warning text-f1-foreground-warning",
}

const statusColor: Record<string, string> = {
  "pending-review": "bg-f1-background-warning text-f1-foreground-warning",
  ready: "bg-f1-background-info text-f1-foreground-info",
  assigned: "bg-f1-background-positive text-f1-foreground-positive",
  completed: "bg-f1-background-positive text-f1-foreground-positive",
  overridden: "bg-f1-background-secondary text-f1-foreground-secondary",
}

export function OverviewTab({ onViewEmployee, onViewManager }: Props) {
  const s = currentCycleStats

  const recentRecs = recommendations.slice(0, 5)

  return (
    <div className="flex flex-col gap-6">
      {/* Current cycle banner */}
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <F0Heading content="AI Mentor" variant="heading-large" as="h1" />
          <F0Text
            content={`Active cycle: ${s.cycleName}`}
            variant="body"
          />
        </div>
        <div className="flex items-center gap-2">
          <F0Button label="Manager FYI view" variant="outline" onClick={() => onViewManager("emp-004")} />
          <F0Button label="Employee view" variant="outline" onClick={() => onViewEmployee("emp-005")} />
        </div>
      </header>

      {/* Drafts alert */}
      {s.draftsAwaitingReview > 0 && (
        <F0Alert
          variant="warning"
          title={`${s.draftsAwaitingReview} draft courses awaiting review`}
          description="The AI Mentor generated new course content that needs your approval before it can be assigned to employees. Go to the Draft courses tab to review them."
        />
      )}

      {/* KPI row */}
      <section className="grid grid-cols-4 gap-4">
        <F0BigNumber
          label="Employees with review"
          value={s.totalEmployeesWithReview}
        />
        <F0BigNumber
          label="Recommendations generated"
          value={s.recommendationsGenerated}
        />
        <F0BigNumber
          label="Courses assigned"
          value={s.coursesAssigned}
        />
        <F0BigNumber
          label="Courses completed"
          value={s.coursesCompleted}
        />
      </section>

      {/* Secondary KPIs */}
      <section className="grid grid-cols-3 gap-4">
        <F0Card title="Adoption rate" description="Employees who started their assigned course">
          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-end gap-2">
              <span className="text-3xl font-semibold text-f1-foreground">
                {s.adoptionRate ?? "—"}%
              </span>
              <F0Text content="of assigned" variant="small" />
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary">
              <div
                className="h-full rounded-full bg-f1-background-positive"
                style={{ width: `${s.adoptionRate ?? 0}%` }}
              />
            </div>
            <F0Text content="Target: ≥ 70% by end of quarter" variant="description" />
          </div>
        </F0Card>

        <F0Card title="Avg. satisfaction" description="Employee rating after completing their course">
          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-end gap-2">
              <span className="text-3xl font-semibold text-f1-foreground">
                {s.avgSatisfaction ?? "—"}
              </span>
              <F0Text content="/ 5" variant="small" />
            </div>
            <F0Text content="Target: ≥ 4.0 average" variant="description" />
          </div>
        </F0Card>

        <F0Card title="Course decision breakdown" description="How the AI Mentor sourced this cycle's courses">
          <div className="flex flex-col gap-3 p-4">
            {[
              { label: "Existing course used as-is", count: 89, pct: 28 },
              { label: "Existing course adapted", count: 177, pct: 57 },
              { label: "New course created (draft)", count: 46, pct: 15 },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-2">
                <div className="h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary">
                  <div
                    className="h-full rounded-full bg-f1-background-info"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <F0Text content={`${row.pct}%`} variant="label" />
              </div>
            ))}
            <div className="flex flex-col gap-1 pt-1">
              {[
                { label: "Existing", pct: 28 },
                { label: "Adapted", pct: 57 },
                { label: "New (draft)", pct: 15 },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <F0Text content={row.label} variant="small" />
                  <F0Text content={`${row.pct}%`} variant="small" />
                </div>
              ))}
            </div>
          </div>
        </F0Card>
      </section>

      {/* Recent recommendations */}
      <F0Card title="Recent recommendations" description="Latest activity from the AI Mentor this cycle">
        <div className="flex flex-col divide-y divide-f1-border">
          {recentRecs.map((rec) => {
            const emp = findEmployee(rec.employeeId)
            return (
              <div
                key={rec.id}
                className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-f1-background-hover"
              >
                <div className="flex flex-col gap-0.5 min-w-0">
                  <F0Text content={emp?.fullName ?? rec.employeeId} variant="label" />
                  <F0Text
                    content={rec.courseTitle}
                    variant="small"
                  />
                </div>
                <div className="flex items-center gap-2 shrink-0">
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
                  <F0Button
                    label="View"
                    variant="outline"
                    onClick={() => onViewEmployee(rec.employeeId)}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </F0Card>

      {/* AI Mentor status card */}
      <F0Card title="AI Mentor status" description="How the analysis is triggered and what data it uses">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-f1-background-info">
              <Sparkles className="h-4 w-4 text-f1-foreground-info" />
            </div>
            <div className="flex flex-col gap-1">
              <F0Text content="Triggered automatically" variant="label" />
              <F0Text
                content="The AI Mentor runs per employee when their Performance Review cycle closes. It does not run for the whole company in bulk — each employee's analysis is an independent background job."
                variant="small"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Job catalog + competencies", status: "active" },
              { label: "Career path", status: "active" },
              { label: "Performance Review (quali + quanti)", status: "active" },
              { label: "Individual goals", status: "active" },
              { label: "Company context", status: "active" },
              { label: "Training catalog", status: "active" },
            ].map((input) => (
              <div key={input.label} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-f1-background-positive shrink-0" />
                <F0Text content={input.label} variant="small" />
              </div>
            ))}
          </div>
        </div>
      </F0Card>
    </div>
  )
}
