import { useState } from "react"
import { createPortal } from "react-dom"
import {
  CardSelectableContainer,
  F0Box,
  F0DurationInput,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  Switch,
  Textarea,
} from "@factorialco/f0-react/dist/experimental"
import { Cross } from "@factorialco/f0-react/icons/app"

import type { Training } from "@/fixtures"

function getOverlayRoot() {
  return document.getElementById("overlay-root") ?? document.body
}

// ---------------------------------------------------------------------------
// Section IDs
// ---------------------------------------------------------------------------

type SectionId =
  | "basic"
  | "admin"
  | "completion"
  | "enrollment"
  | "visibility"

const sections: { id: SectionId; label: string }[] = [
  { id: "basic", label: "Basic information" },
  { id: "admin", label: "Admin information" },
  { id: "completion", label: "Course completion" },
  { id: "enrollment", label: "Course format" },
  { id: "visibility", label: "Visibility & catalog" },
]

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface Props {
  isOpen: boolean
  onClose: () => void
  training: Training
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function CourseSettingsDialog({ isOpen, onClose, training }: Props) {
  const [activeSection, setActiveSection] = useState<SectionId>("basic")

  // Basic info state
  const [courseName, setCourseName] = useState(training.name)
  const [description, setDescription] = useState(training.description)
  const [objectives, setObjectives] = useState(training.objectives ?? "")
  const [durationSeconds, setDurationSeconds] = useState(
    training.totalDurationHours * 3600
  )
  const [isMandatory, setIsMandatory] = useState(training.isMandatory)
  const [hasValidity, setHasValidity] = useState(
    training.validity?.enabled ?? false
  )

  // Admin info state
  const [creationYear, setCreationYear] = useState(String(training.year))
  const [internalCode, setInternalCode] = useState(training.code)
  const [format, setFormat] = useState(training.format ?? "internal")
  const [subsidizedByFundae, setSubsidizedByFundae] = useState(false)
  const [linkWithWorkflows, setLinkWithWorkflows] = useState(false)

  // Completion state
  const [completeLmsModules, setCompleteLmsModules] = useState(
    training.completionCriteria?.completeLmsModules ?? false
  )
  const [attendSessions, setAttendSessions] = useState(
    training.completionCriteria?.attendSessions ?? true
  )
  const [minimumAttendance, setMinimumAttendance] = useState(
    training.completionCriteria?.minimumAttendance ?? "100%"
  )
  const [passKnowledgeTest, setPassKnowledgeTest] = useState(
    training.completionCriteria?.passKnowledgeTest ?? false
  )

  // Enrollment state
  const [courseType, setCourseType] = useState<"scheduled" | "self-paced">(
    training.courseType ?? "scheduled"
  )
  const [groupAssignment, setGroupAssignment] = useState<
    "next-available" | "waitlist"
  >(training.groupAssignment ?? "next-available")

  // Visibility state
  const [catalogVisible, setCatalogVisible] = useState(training.catalog)

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex flex-col bg-f1-background">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-solid border-f1-border-secondary px-6 py-3">
        <span className="text-base font-semibold text-f1-foreground">
          Course settings
        </span>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-secondary"
        >
          <Cross width={16} height={16} />
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
          {/* Left navigation */}
          <nav className="flex w-56 shrink-0 flex-col gap-0.5 border-r border-solid border-f1-border-secondary p-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`rounded-lg px-3 py-2 text-left text-sm ${
                  s.id === activeSection
                    ? "bg-f1-background-secondary font-medium text-f1-foreground"
                    : "text-f1-foreground-secondary hover:bg-f1-background-secondary/50"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            {activeSection === "basic" && (
              <div className="flex flex-col gap-6">
                <F0Box display="flex" flexDirection="column" gap="xs">
                  <F0Heading
                    content="Basic information"
                    variant="heading"
                    as="h3"
                  />
                  <F0Text
                    content="Provide details to easily identify this course."
                    variant="description"
                  />
                </F0Box>

                <Input
                  label="Course name"
                  value={courseName}
                  onChange={setCourseName}
                  placeholder="Course name"
                />

                <Textarea
                  label="Description"
                  value={description}
                  onChange={setDescription}
                  rows={4}
                />

                <Textarea
                  label="Objectives"
                  value={objectives}
                  onChange={setObjectives}
                  rows={4}
                  hint="Define this course's goals and outcomes"
                />

                <F0DurationInput
                  label="Total course duration"
                  value={durationSeconds}
                  onChange={(val: number) => setDurationSeconds(val)}
                  fields={["hours", "minutes"]}
                />

                <div className="flex items-center justify-between rounded-lg border border-solid border-f1-border-secondary p-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-f1-foreground">
                      Mandatory course
                    </span>
                    <span className="text-xs text-f1-foreground-secondary">
                      Mark this course as mandatory to track completion and meet
                      compliance requirements.
                    </span>
                  </div>
                  <Switch
                    checked={isMandatory}
                    onCheckedChange={setIsMandatory}
                    title="Mandatory course"
                    hideLabel
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-solid border-f1-border-secondary p-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-f1-foreground">
                      Course validity
                    </span>
                    <span className="text-xs text-f1-foreground-secondary">
                      The course certificate expires and requires periodic
                      renewal
                    </span>
                  </div>
                  <Switch
                    checked={hasValidity}
                    onCheckedChange={setHasValidity}
                    title="Course validity"
                    hideLabel
                  />
                </div>
              </div>
            )}

            {activeSection === "admin" && (
              <div className="flex flex-col gap-6">
                <F0Box display="flex" flexDirection="column" gap="xs">
                  <F0Heading
                    content="Admin information"
                    variant="heading"
                    as="h3"
                  />
                  <F0Text
                    content="Details in this section are for administrative purposes, and this information won't display for participants."
                    variant="description"
                  />
                </F0Box>

                <Input
                  label="Creation year"
                  value={creationYear}
                  onChange={setCreationYear}
                  placeholder="2026"
                />

                <Input
                  label="Internal code"
                  value={internalCode}
                  onChange={setInternalCode}
                  hint="If you use an internal code in other applications or files, add it here as well."
                />

                <Input
                  label="Format"
                  value={format}
                  onChange={setFormat}
                  placeholder="Internal"
                />

                <div className="flex items-center justify-between rounded-lg border border-solid border-f1-border-secondary p-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-f1-foreground">
                      Subsidized by FUNDAE
                    </span>
                    <span className="text-xs text-f1-foreground-secondary">
                      Activate this feature to enter information regarding the
                      subsidization process.
                    </span>
                  </div>
                  <Switch
                    checked={subsidizedByFundae}
                    onCheckedChange={setSubsidizedByFundae}
                    title="Subsidized by FUNDAE"
                    hideLabel
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-solid border-f1-border-secondary p-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-f1-foreground">
                      Link this course with Workflows
                    </span>
                    <span className="text-xs text-f1-foreground-secondary">
                      Use our Workflows solution to automate actions such as
                      generating course certificates or sending questionnaires.
                    </span>
                  </div>
                  <Switch
                    checked={linkWithWorkflows}
                    onCheckedChange={setLinkWithWorkflows}
                    title="Link with Workflows"
                    hideLabel
                  />
                </div>
              </div>
            )}

            {activeSection === "completion" && (
              <div className="flex flex-col gap-6">
                <F0Box display="flex" flexDirection="column" gap="xs">
                  <F0Heading
                    content="Course completion"
                    variant="heading"
                    as="h3"
                  />
                  <F0Text
                    content="Define the conditions participants must meet to complete the course."
                    variant="description"
                  />
                </F0Box>

                <div className="flex items-center justify-between rounded-lg border border-solid border-f1-border-secondary p-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-f1-foreground">
                      Complete all LMS modules
                    </span>
                    <span className="text-xs text-f1-foreground-secondary">
                      Participants must complete all course modules and pass
                      every quiz.
                    </span>
                  </div>
                  <Switch
                    checked={completeLmsModules}
                    onCheckedChange={setCompleteLmsModules}
                    title="Complete all LMS modules"
                    hideLabel
                  />
                </div>

                <div className="flex flex-col gap-4 rounded-lg border border-solid border-f1-border-secondary p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-f1-foreground">
                        Attend sessions
                      </span>
                      <span className="text-xs text-f1-foreground-secondary">
                        Set the minimum percentage of sessions in this course
                        each participant needs to attend.
                      </span>
                    </div>
                    <Switch
                      checked={attendSessions}
                      onCheckedChange={setAttendSessions}
                      title="Attend sessions"
                      hideLabel
                    />
                  </div>
                  {attendSessions && (
                    <Input
                      label="Minimum attendance"
                      value={minimumAttendance}
                      onChange={setMinimumAttendance}
                      placeholder="100%"
                      hint="Choose the required percentage"
                    />
                  )}
                </div>

                <div className="flex items-center justify-between rounded-lg border border-solid border-f1-border-secondary p-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-f1-foreground">
                      Pass the knowledge test
                    </span>
                    <span className="text-xs text-f1-foreground-secondary">
                      Participants must pass a test that assesses their
                      understanding of this course&apos;s content.
                    </span>
                  </div>
                  <Switch
                    checked={passKnowledgeTest}
                    onCheckedChange={setPassKnowledgeTest}
                    title="Pass the knowledge test"
                    hideLabel
                  />
                </div>
              </div>
            )}

            {activeSection === "enrollment" && (
              <div className="flex flex-col gap-8">
                <F0Box display="flex" flexDirection="column" gap="xs">
                  <F0Heading
                    content="Course format"
                    variant="heading"
                    as="h3"
                  />
                  <F0Text
                    content="Define how this course runs and how participants access it."
                    variant="description"
                  />
                </F0Box>

                {/* Course format cards */}
                <div className="flex flex-col gap-3">
                  <CardSelectableContainer
                    value={courseType}
                    onChange={(val) => setCourseType(val ?? "scheduled")}
                    items={[
                      {
                        value: "self-paced",
                        title: "Self-paced",
                        description:
                          "Participants access the course at their own pace, without a fixed schedule. No group assignment needed.",
                      },
                      {
                        value: "scheduled",
                        title: "Scheduled editions",
                        description:
                          "The course runs in groups with specific start and end dates.",
                        selectedContent: (
                          <F0Box display="flex" flexDirection="column" gap="sm">
                            <F0Box display="flex" flexDirection="column" gap="xs">
                              <F0Text content="Assignment" variant="label" />
                              <F0Text
                                content="When someone is enrolled in this course, how should they be assigned to a group?"
                                variant="description"
                              />
                            </F0Box>
                            <CardSelectableContainer
                              value={groupAssignment}
                              onChange={(val) =>
                                setGroupAssignment(val ?? "next-available")
                              }
                              items={[
                                {
                                  value: "next-available",
                                  title: "Next available group",
                                  description:
                                    "Automatically assigned to the upcoming edition with available spots. If no future group is available, the participant will be waitlisted and you'll receive a notification.",
                                },
                                {
                                  value: "waitlist",
                                  title: "Waitlist",
                                  description:
                                    "Participant is added to the waitlist. You'll be notified to assign them to a group manually.",
                                },
                              ]}
                            />
                          </F0Box>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
            )}

            {activeSection === "visibility" && (
              <div className="flex flex-col gap-6">
                <F0Box display="flex" flexDirection="column" gap="xs">
                  <F0Heading
                    content="Visibility & catalog"
                    variant="heading"
                    as="h3"
                  />
                  <F0Text
                    content="Control whether this course appears in the employee catalog."
                    variant="description"
                  />
                </F0Box>

                <div className="flex items-center justify-between rounded-lg border border-solid border-f1-border-secondary p-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-f1-foreground">
                      Display in catalog
                    </span>
                    <span className="text-xs text-f1-foreground-secondary">
                      When enabled, employees can discover and request
                      enrollment in this course from the catalog.
                    </span>
                  </div>
                  <Switch
                    checked={catalogVisible}
                    onCheckedChange={setCatalogVisible}
                    title="Display in catalog"
                    hideLabel
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
      <div className="flex items-center justify-end gap-3 border-t border-solid border-f1-border-secondary px-6 py-4">
        <button
          onClick={onClose}
          className="rounded-md border border-solid border-f1-border-secondary px-4 py-2 text-sm font-medium text-f1-foreground hover:bg-f1-background-secondary"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="rounded-md bg-f1-background-critical-bold px-4 py-2.5 text-sm font-medium text-f1-foreground-inverse hover:opacity-90"
        >
          Save changes
        </button>
      </div>
    </div>,
    getOverlayRoot()
  )
}
