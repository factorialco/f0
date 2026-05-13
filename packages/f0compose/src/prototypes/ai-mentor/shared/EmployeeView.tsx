import { F0Alert, F0Button, F0Card, F0Heading, F0Text } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { ArrowLeft, Sparkles } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { findEmployee } from "@/fixtures"

import { recommendations, trainingCourses, trainingRequests } from "../fixtures"

type Props = {
  employeeId: string
  onBack: () => void
}

const tabs = [
  { id: "my-courses", label: "My courses" },
  { id: "catalog", label: "Catalog" },
  { id: "requests", label: "Requests" },
] as const

const statusLabel = {
  "needs-course-review": "Waiting for L&D review",
  "ready-to-assign": "Ready to assign",
  assigned: "Assigned",
  completed: "Completed",
  dismissed: "Dismissed",
}

export function EmployeeView({ employeeId, onBack }: Props) {
  const [activeTab, setActiveTab] = useState<string>("my-courses")
  const employee = findEmployee(employeeId)
  const recommendation = recommendations.find((r) => r.employeeId === employeeId)
  const recommendedCourse = recommendation
    ? trainingCourses.find((c) => c.id === recommendation.courseId)
    : undefined
  const employeeRequests = trainingRequests.filter((r) => r.employeeId === employeeId)

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{ id: "my_trainings", name: "My trainings", href: "/p/ai-mentor" }}
            breadcrumbs={[
              { id: "trainings", label: "Trainings" },
              { id: "my-trainings", label: "My trainings" },
            ]}
          />
          <ResourceHeader
            title="My trainings"
            description={`${employee?.fullName ?? employeeId} · ${employee?.role ?? "Employee"}`}
            secondaryActions={[
              { label: "Back to Trainings", icon: ArrowLeft, onClick: onBack },
            ]}
          />
          <Tabs
            key={activeTab}
            tabs={tabs.map((t) => ({ ...t, onClick: () => setActiveTab(t.id) }))}
            activeTabId={activeTab}
          />
        </>
      }
    >
      <div className="flex flex-col gap-6 p-8">
        {activeTab === "my-courses" && (
          <>
            <header className="flex flex-col gap-1">
              <F0Heading content="My courses" variant="heading-large" as="h1" />
              <F0Text
                content="Courses assigned to you, including recommendations created from your latest review cycle."
                variant="body"
              />
            </header>

            {recommendation && recommendedCourse && (
              <F0Card title="Recommended for you" description="Generated from your latest Performance Review and goals">
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-f1-background-info px-2 py-0.5 text-xs text-f1-foreground-info">
                      <Sparkles className="h-3 w-3" />
                      AI Mentor
                    </span>
                    <span className="inline-flex items-center rounded-full bg-f1-background-secondary px-2 py-0.5 text-xs text-f1-foreground-secondary">
                      {statusLabel[recommendation.status]}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-f1-background-secondary px-2 py-0.5 text-xs text-f1-foreground-secondary">
                      {recommendedCourse.durationMin} min
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded border border-f1-border p-4">
                    <div className="flex min-w-0 flex-col gap-1">
                      <F0Text content={recommendedCourse.title} variant="label" />
                      <F0Text
                        content={`${recommendedCourse.competency} · ${recommendedCourse.provider}`}
                        variant="small"
                      />
                      <F0Text content={recommendation.justification} variant="body" />
                    </div>
                    <F0Button
                      label={recommendation.status === "assigned" ? "Start course" : "Not available yet"}
                      variant="default"
                      disabled={recommendation.status !== "assigned"}
                      onClick={() => {}}
                    />
                  </div>
                  <F0Alert
                    variant="info"
                    title="Your review details stay private"
                    description="The recommendation explains why the course is useful, but it does not expose raw review comments or private manager notes."
                  />
                </div>
              </F0Card>
            )}

            <F0Card title="Other assigned courses" description="Regular My trainings content">
              <div className="flex flex-col divide-y divide-f1-border">
                {trainingCourses
                  .filter((course) => course.status === "published" && course.id !== recommendedCourse?.id)
                  .slice(0, 3)
                  .map((course) => (
                    <div key={course.id} className="flex items-center justify-between gap-4 px-4 py-3">
                      <div className="flex flex-col gap-0.5">
                        <F0Text content={course.title} variant="label" />
                        <F0Text content={`${course.provider} · ${course.durationMin} min`} variant="small" />
                      </div>
                      <F0Button label="Open" variant="outline" onClick={() => {}} />
                    </div>
                  ))}
              </div>
            </F0Card>
          </>
        )}

        {activeTab === "catalog" && (
          <>
            <header className="flex flex-col gap-1">
              <F0Heading content="Catalog" variant="heading-large" as="h1" />
              <F0Text content="Courses available for self-enrolment or request." variant="body" />
            </header>
            <div className="grid grid-cols-2 gap-4">
              {trainingCourses
                .filter((course) => course.status === "published")
                .map((course) => (
                  <F0Card key={course.id} title={course.title} description={`${course.provider} · ${course.competency}`}>
                    <div className="flex items-center justify-between gap-3 p-4">
                      <F0Text content={`${course.durationMin} min`} variant="small" />
                      <F0Button label="Request" variant="outline" onClick={() => {}} />
                    </div>
                  </F0Card>
                ))}
            </div>
          </>
        )}

        {activeTab === "requests" && (
          <>
            <header className="flex flex-col gap-1">
              <F0Heading content="Requests" variant="heading-large" as="h1" />
              <F0Text content="Training requests you created or that are linked to recommended learning." variant="body" />
            </header>
            <F0Card title="My requests">
              <div className="flex flex-col divide-y divide-f1-border">
                {employeeRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between gap-4 px-4 py-3">
                    <div className="flex flex-col gap-0.5">
                      <F0Text content={request.trainingName} variant="label" />
                      <F0Text content={`${request.provider} · ${request.competency}`} variant="small" />
                    </div>
                    <span className="rounded-full bg-f1-background-secondary px-2 py-0.5 text-xs text-f1-foreground-secondary">
                      {request.status}
                    </span>
                  </div>
                ))}
                {employeeRequests.length === 0 && (
                  <div className="p-4">
                    <F0Text content="You do not have any training requests yet." variant="body" />
                  </div>
                )}
              </div>
            </F0Card>
          </>
        )}
      </div>
    </Page>
  )
}
