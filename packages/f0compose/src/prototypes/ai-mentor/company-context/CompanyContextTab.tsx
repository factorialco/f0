import { F0Alert, F0Button, F0Card, F0Checkbox, F0Heading, F0Text } from "@factorialco/f0-react"
import { Pencil } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { companyContext } from "../fixtures"

export function CompanyContextTab() {
  const [autoAdapted, setAutoAdapted] = useState(companyContext.autoPublishAdapted)
  const [autoExisting, setAutoExisting] = useState(companyContext.autoPublishExisting)
  const [requireReviewNew, setRequireReviewNew] = useState(companyContext.requireReviewForNew)

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <F0Heading content="Company context" variant="heading-large" as="h1" />
          <F0Text
            content="Tell the AI Mentor about your company so it can personalise course content and examples to your real environment."
            variant="body"
          />
        </div>
        <F0Button label="Edit context" variant="default" icon={Pencil} onClick={() => {}} />
      </header>

      <div className="grid grid-cols-2 gap-4">
        {/* Company profile */}
        <F0Card title="Company profile" description="Industry, size and key tools">
          <div className="flex flex-col gap-3 p-4">
            <div className="flex flex-col gap-0.5">
              <F0Text content="Industry" variant="label" />
              <F0Text content={companyContext.industry} variant="body" />
            </div>
            <div className="flex flex-col gap-0.5">
              <F0Text content="Company size" variant="label" />
              <F0Text content={companyContext.size} variant="body" />
            </div>
            <div className="flex flex-col gap-1">
              <F0Text content="Key tools" variant="label" />
              <div className="flex flex-wrap gap-1">
                {companyContext.keyTools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded bg-f1-background-secondary px-2 py-0.5 text-xs text-f1-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </F0Card>

        {/* Culture */}
        <F0Card title="Culture & values" description="Used by the AI Mentor to personalise tone and examples">
          <div className="flex flex-col gap-3 p-4">
            <F0Text content={companyContext.culture} variant="body" />
          </div>
        </F0Card>
      </div>

      {/* Publishing rules */}
      <F0Card
        title="AI Mentor publishing rules"
        description="Control how the AI Mentor handles course creation and assignment. Changes apply from the next cycle."
      >
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-start gap-3">
            <F0Checkbox
              checked={autoExisting}
              onCheckedChange={(v) => setAutoExisting(Boolean(v))}
            />
            <div className="flex flex-col gap-0.5">
              <F0Text content="Auto-assign existing courses" variant="label" />
              <F0Text
                content="When the AI Mentor finds a course in the catalog that matches the gap exactly, assign it directly without manual review."
                variant="small"
              />
            </div>
          </div>
          <div className="flex items-start gap-3">
            <F0Checkbox
              checked={autoAdapted}
              onCheckedChange={(v) => setAutoAdapted(Boolean(v))}
            />
            <div className="flex flex-col gap-0.5">
              <F0Text content="Auto-publish adapted courses" variant="label" />
              <F0Text
                content="When the AI Mentor adapts an existing course for a specific employee, publish and assign it without manual review."
                variant="small"
              />
            </div>
          </div>
          <div className="flex items-start gap-3">
            <F0Checkbox
              checked={requireReviewNew}
              onCheckedChange={(v) => setRequireReviewNew(Boolean(v))}
            />
            <div className="flex flex-col gap-0.5">
              <F0Text content="Require review for new courses" variant="label" />
              <F0Text
                content="When the AI Mentor creates a brand-new course from scratch, require L&D approval before it can be assigned."
                variant="small"
              />
            </div>
          </div>

          {!requireReviewNew && (
            <F0Alert
              variant="warning"
              title="New courses will be published automatically"
              description="Without review, AI-generated courses will be assigned to employees as soon as they're created. We recommend keeping this enabled during the first cycles."
            />
          )}

          <div className="flex justify-end pt-2">
            <F0Button label="Save settings" variant="default" onClick={() => {}} />
          </div>
        </div>
      </F0Card>

      {/* Impact on AI Mentor */}
      <F0Card title="How the AI Mentor uses this context" description="">
        <div className="flex flex-col gap-3 p-4">
          {[
            {
              title: "Personalised examples",
              desc: "Course content uses your industry, tools and culture — not generic examples.",
            },
            {
              title: "Relevant scenarios",
              desc: "Exercises and case studies are adapted to your company size and team structure.",
            },
            {
              title: "Tone matching",
              desc: "The AI Mentor writes justifications that match your culture and values — direct, supportive or formal.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-0.5">
              <F0Text content={item.title} variant="label" />
              <F0Text content={item.desc} variant="small" />
            </div>
          ))}
        </div>
      </F0Card>
    </div>
  )
}
