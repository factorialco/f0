import { F0Card, F0Heading, F0Text } from "@factorialco/f0-react"

import { recommendations, trainingCourses } from "../fixtures"

export function InsightsTab() {
  const assigned = recommendations.filter((r) => r.status === "assigned").length
  const completed = recommendations.filter((r) => r.status === "completed").length
  const needsReview = recommendations.filter((r) => r.status === "needs-course-review").length
  const coveredCompetencies = new Set(recommendations.map((r) => r.competency)).size
  const aiCourses = trainingCourses.filter((c) => c.source === "ai-mentor")
  const existingMatches = recommendations.filter((r) => r.decision === "existing").length
  const adapted = recommendations.filter((r) => r.decision === "adapted").length
  const created = recommendations.filter((r) => r.decision === "new").length

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <F0Heading content="Insights" variant="heading-large" as="h1" />
        <F0Text
          content="Training impact for this review cycle. AI Mentor metrics are shown only when they explain course assignment, completion or budget outcomes."
          variant="body"
        />
      </header>

      <section className="grid grid-cols-4 gap-4">
        <F0Card title="Assigned from review gaps" description="Courses sent after review closure">
          <div className="p-4">
            <span className="text-3xl font-semibold text-f1-foreground">{assigned}</span>
          </div>
        </F0Card>
        <F0Card title="Completed" description="AI Mentor courses finished">
          <div className="p-4">
            <span className="text-3xl font-semibold text-f1-foreground">{completed}</span>
          </div>
        </F0Card>
        <F0Card title="Needs L&D review" description="Drafts blocking assignment">
          <div className="p-4">
            <span className="text-3xl font-semibold text-f1-foreground">{needsReview}</span>
          </div>
        </F0Card>
        <F0Card title="Competencies covered" description="Unique gaps with a training path">
          <div className="p-4">
            <span className="text-3xl font-semibold text-f1-foreground">{coveredCompetencies}</span>
          </div>
        </F0Card>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <F0Card title="Course decision logic" description="Why each recommendation became a training action">
          <div className="flex flex-col gap-3 p-4">
            {[
              { label: "Existing course matched", value: existingMatches },
              { label: "Existing course adapted", value: adapted },
              { label: "New course drafted", value: created },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between">
                <F0Text content={row.label} variant="body" />
                <F0Text content={String(row.value)} variant="label" />
              </div>
            ))}
          </div>
        </F0Card>

        <F0Card title="AI-created course performance" description="Only courses generated or adapted by AI Mentor">
          <div className="flex flex-col divide-y divide-f1-border">
            {aiCourses.map((course) => {
              const completion = course.assignedCount
                ? Math.round((course.completedCount / course.assignedCount) * 100)
                : 0
              return (
                <div key={course.id} className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <F0Text content={course.title} variant="label" />
                    <F0Text content={`${course.competency} · ${course.assignedCount} assigned`} variant="small" />
                  </div>
                  <div className="flex w-28 flex-col gap-1">
                    <F0Text content={`${completion}% completed`} variant="small" />
                    <div className="h-1.5 overflow-hidden rounded-full bg-f1-background-secondary">
                      <div
                        className="h-full rounded-full bg-f1-background-positive"
                        style={{ width: `${completion}%` }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </F0Card>
      </div>
    </div>
  )
}
