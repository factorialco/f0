import { F0Alert, F0Button, F0Card, F0Heading, F0Text } from "@factorialco/f0-react"
import { Add, Pencil, Sparkles } from "@factorialco/f0-react/icons/app"

import { recommendations, trainingCourses } from "../fixtures"

const statusLabel = {
  published: "Published",
  draft: "Draft",
  "needs-review": "Needs review",
  archived: "Archived",
}

const statusColor = {
  published: "bg-f1-background-positive text-f1-foreground-positive",
  draft: "bg-f1-background-secondary text-f1-foreground-secondary",
  "needs-review": "bg-f1-background-warning text-f1-foreground-warning",
  archived: "bg-f1-background-secondary text-f1-foreground-secondary",
}

const sourceLabel = {
  manual: "Manual",
  catalog: "Catalog",
  "ai-mentor": "AI Mentor",
}

const decisionLabel = {
  existing: "Existing match",
  adapted: "Adapted",
  new: "New draft",
}

export function TrainingsTab() {
  const needsReview = trainingCourses.filter((c) => c.status === "needs-review")

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <F0Heading content="Trainings" variant="heading-large" as="h1" />
          <F0Text
            content="Courses managed by L&D. AI Mentor only appears here when a review gap requires an existing, adapted or new course."
            variant="body"
          />
        </div>
        <F0Button label="New training" variant="default" icon={Add} onClick={() => {}} />
      </header>

      {needsReview.length > 0 && (
        <F0Alert
          variant="warning"
          title={`${needsReview.length} AI Mentor course needs review`}
          description="This course was created because no existing training matched a detected review gap. Review it before it becomes available to employees."
        />
      )}

      <F0Card title="Courses" description="Existing Trainings list with AI Mentor context embedded in rows">
        <div className="flex flex-col divide-y divide-f1-border">
          {trainingCourses.map((course) => {
            const recommendation = recommendations.find(
              (r) => r.id === course.createdFromRecommendationId
            )
            const completionRate = course.assignedCount
              ? Math.round((course.completedCount / course.assignedCount) * 100)
              : 0

            return (
              <div key={course.id} className="flex items-center justify-between gap-4 px-4 py-4">
                <div className="flex min-w-0 flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <F0Text content={course.title} variant="label" />
                    <span className="inline-flex items-center rounded-full bg-f1-background-secondary px-2 py-0.5 text-xs text-f1-foreground-secondary">
                      {sourceLabel[course.source]}
                    </span>
                    {course.decision && (
                      <span className="inline-flex items-center rounded-full bg-f1-background-info px-2 py-0.5 text-xs text-f1-foreground-info">
                        {decisionLabel[course.decision]}
                      </span>
                    )}
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[course.status]}`}
                    >
                      {statusLabel[course.status]}
                    </span>
                  </div>
                  <F0Text
                    content={`${course.provider} · ${course.competency} · ${course.durationMin} min`}
                    variant="small"
                  />
                  {course.aiReason && (
                    <div className="flex items-start gap-2 pt-1">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-f1-foreground-info" />
                      <F0Text content={course.aiReason} variant="small" />
                    </div>
                  )}
                  {recommendation && (
                    <F0Text
                      content={`Created because ${recommendation.employeeName}'s ${recommendation.cycleName} identified: ${recommendation.gap}`}
                      variant="description"
                    />
                  )}
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <div className="flex w-28 flex-col gap-1">
                    <F0Text content={`${completionRate}% completed`} variant="small" />
                    <div className="h-1.5 overflow-hidden rounded-full bg-f1-background-secondary">
                      <div
                        className="h-full rounded-full bg-f1-background-positive"
                        style={{ width: `${completionRate}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {course.status === "needs-review" ? (
                      <F0Button label="Review draft" variant="default" icon={Pencil} onClick={() => {}} />
                    ) : (
                      <F0Button label="Open" variant="outline" onClick={() => {}} />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </F0Card>
    </div>
  )
}
