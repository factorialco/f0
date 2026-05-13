import { F0Alert, F0Button, F0Card, F0Checkbox, F0Heading, F0Text } from "@factorialco/f0-react"
import { Settings, Sparkles } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { careerPathCoverage, companyContext } from "../fixtures"

export function AiMentorSettingsTab() {
  const [autoAssignExisting, setAutoAssignExisting] = useState(
    companyContext.autoAssignExisting
  )
  const [reviewAdaptedCourses, setReviewAdaptedCourses] = useState(
    companyContext.reviewAdaptedCourses
  )
  const [reviewNewCourses, setReviewNewCourses] = useState(companyContext.reviewNewCourses)
  const missingCoverage = careerPathCoverage.filter((c) => !c.configured)

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <F0Heading content="AI Mentor settings" variant="heading-large" as="h1" />
          <F0Text
            content="Configure the AI layer that turns Performance Review gaps into concrete Training actions."
            variant="body"
          />
        </div>
        <F0Button label="Save settings" variant="default" icon={Settings} onClick={() => {}} />
      </header>

      {missingCoverage.length > 0 && (
        <F0Alert
          variant="warning"
          title={`${missingCoverage.length} role path missing in Job Catalog`}
          description="AI Mentor can still work in reduced mode, but recommendations for those roles will only use current gaps and goals, not next-level progression."
        />
      )}

      <div className="grid grid-cols-2 gap-4">
        <F0Card title="Company context" description="Used to adapt examples and training tone">
          <div className="flex flex-col gap-3 p-4">
            <div className="flex flex-col gap-0.5">
              <F0Text content="Industry" variant="label" />
              <F0Text content={companyContext.industry} variant="body" />
            </div>
            <div className="flex flex-col gap-0.5">
              <F0Text content="Size" variant="label" />
              <F0Text content={companyContext.size} variant="body" />
            </div>
            <div className="flex flex-col gap-1">
              <F0Text content="Tools" variant="label" />
              <div className="flex flex-wrap gap-1">
                {companyContext.keyTools.map((tool) => (
                  <span key={tool} className="rounded bg-f1-background-secondary px-2 py-0.5 text-xs text-f1-foreground">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <F0Text content={companyContext.culture} variant="small" />
          </div>
        </F0Card>

        <F0Card title="Publishing rules" description="How much control L&D keeps before assignment">
          <div className="flex flex-col gap-4 p-4">
            {[
              {
                label: "Auto-assign exact catalog matches",
                desc: "If an existing course covers the detected gap exactly, assign it without review.",
                checked: autoAssignExisting,
                onChange: setAutoAssignExisting,
              },
              {
                label: "Review adapted courses",
                desc: "Courses adapted by AI Mentor need L&D approval before employees see them.",
                checked: reviewAdaptedCourses,
                onChange: setReviewAdaptedCourses,
              },
              {
                label: "Review new courses",
                desc: "Brand-new courses always remain drafts until L&D approves them.",
                checked: reviewNewCourses,
                onChange: setReviewNewCourses,
              },
            ].map((rule) => (
              <div key={rule.label} className="flex items-start gap-3">
                <F0Checkbox
                  checked={rule.checked}
                  onCheckedChange={(v) => rule.onChange(Boolean(v))}
                />
                <div className="flex flex-col gap-0.5">
                  <F0Text content={rule.label} variant="label" />
                  <F0Text content={rule.desc} variant="small" />
                </div>
              </div>
            ))}
          </div>
        </F0Card>
      </div>

      <F0Card title="Job Catalog and career path coverage" description="Inputs used for role and next-level gap detection">
        <div className="flex flex-col divide-y divide-f1-border">
          {careerPathCoverage.map((row) => (
            <div key={row.role} className="flex items-center justify-between gap-4 px-4 py-3">
              <div className="flex min-w-0 flex-col gap-0.5">
                <F0Text content={row.role} variant="label" />
                <F0Text content={`${row.department} · ${row.employees} employees`} variant="small" />
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    row.configured
                      ? "bg-f1-background-positive text-f1-foreground-positive"
                      : "bg-f1-background-warning text-f1-foreground-warning"
                  }`}
                >
                  {row.configured ? "Career path configured" : "Reduced mode"}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-f1-background-secondary px-2 py-0.5 text-xs text-f1-foreground-secondary">
                  <Sparkles className="h-3 w-3" />
                  {row.gapsDetected} gaps this cycle
                </span>
              </div>
            </div>
          ))}
        </div>
      </F0Card>

      <F0Card title="Trigger logic" description="When recommendations are generated">
        <div className="grid grid-cols-4 gap-3 p-4">
          {[
            "Performance Review closes for employee",
            "AI reads role competencies and goals",
            "AI matches/adapts/creates training",
            "Trainings handles review, budget and assignment",
          ].map((step, index) => (
            <div key={step} className="rounded border border-f1-border bg-f1-background-secondary p-3">
              <F0Text content={`Step ${index + 1}`} variant="label" />
              <F0Text content={step} variant="small" />
            </div>
          ))}
        </div>
      </F0Card>
    </div>
  )
}
