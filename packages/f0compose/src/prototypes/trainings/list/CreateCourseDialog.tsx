import { useState } from "react"
import {
  F0Box,
  F0Dialog,
  F0DurationInput,
  F0Text,
  CardSelectableContainer,
} from "@factorialco/f0-react"
import {
  Input,
  Textarea,
  Switch,
} from "@factorialco/f0-react/dist/experimental"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Step1State {
  courseName: string
  description: string
  objectives: string
  competencies: string[]
  durationSeconds: number
  isMandatory: boolean
  hasValidity: boolean
}

interface Step2State {
  creationYear: string
  internalCode: string
  format: string
  categories: string[]
  axes: string[]
  subsidizedByFundae: boolean
  linkWithWorkflows: boolean
}

interface Step3State {
  completeLmsModules: boolean
  attendSessions: boolean
  minimumAttendance: string
  passKnowledgeTest: boolean
}

interface Step4State {
  courseType: "scheduled" | "self-paced"
  groupAssignment: "next-available" | "waitlist"
}

export interface NewCourse {
  step1: Step1State
  step2: Step2State
  step3: Step3State
  step4: Step4State
}

interface Props {
  isOpen: boolean
  onClose: () => void
  onCreate: (course: NewCourse) => void
}

// ---------------------------------------------------------------------------
// Step 1: Basic information
// ---------------------------------------------------------------------------

function Step1BasicInformation({
  state,
  onChange,
}: {
  state: Step1State
  onChange: (s: Step1State) => void
}) {
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-f1-foreground">
          Basic information
        </h2>
        <span className="text-base text-f1-foreground-secondary">
          Provide details to easily identify this course.
        </span>
      </div>

      <Input
        label="Course name"
        value={state.courseName}
        onChange={(val) => onChange({ ...state, courseName: val })}
        placeholder="Data Protection & Privacy Compliance"
      />

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-f1-foreground">
          Thumbnail
        </span>
        <span className="text-xs text-f1-foreground-secondary">
          Add an image to show as the course thumbnail in the Catalog.
        </span>
        <div className="flex h-28 flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-f1-border-secondary bg-f1-background-secondary">
          <span className="text-2xl text-f1-foreground-secondary">📎</span>
          <span className="text-sm text-f1-foreground-secondary">
            Drag and drop or click here
          </span>
          <span className="text-xs text-f1-foreground-secondary">
            Accepts .gif, .jpg and .png
          </span>
        </div>
      </div>

      <Textarea
        label="Description"
        value={state.description}
        onChange={(val) => onChange({ ...state, description: val })}
        placeholder="1. Foundations of Data Protection and Privacy&#10;2. Global Privacy Regulations (GDPR, CCPA, LGPD, etc.)&#10;3. Roles & Responsibilities (Controller, Processor, DPO)..."
        rows={4}
      />

      <Textarea
        label="Objectives"
        value={state.objectives}
        onChange={(val) => onChange({ ...state, objectives: val })}
        placeholder="This is an intermediate-level course focused on understanding data privacy laws..."
        rows={4}
        hint="Define this course's goals and outcomes"
      />

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-f1-foreground">
          Competencies
        </span>
        <span className="text-xs text-f1-foreground-secondary">
          Select the competencies developed within this course
        </span>
        <div className="flex flex-wrap items-center gap-1.5 rounded-md border border-solid border-f1-border-secondary bg-f1-background px-3 py-2.5">
          {state.competencies.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1 rounded bg-f1-background-secondary px-2 py-0.5 text-xs text-f1-foreground"
            >
              {c}
              <button
                onClick={() =>
                  onChange({
                    ...state,
                    competencies: state.competencies.filter((x) => x !== c),
                  })
                }
                className="text-f1-foreground-secondary hover:text-f1-foreground"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <F0DurationInput
        label="Total course duration"
        value={state.durationSeconds}
        onChange={(val: number) => onChange({ ...state, durationSeconds: val })}
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
          checked={state.isMandatory}
          onCheckedChange={(val) => onChange({ ...state, isMandatory: val })}
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
            The course certificate expires and requires periodic renewal
          </span>
        </div>
        <Switch
          checked={state.hasValidity}
          onCheckedChange={(val) => onChange({ ...state, hasValidity: val })}
          title="Course validity"
          hideLabel
        />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 2: Admin information
// ---------------------------------------------------------------------------

function Step2AdminInformation({
  state,
  onChange,
}: {
  state: Step2State
  onChange: (s: Step2State) => void
}) {
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-f1-foreground">
          Admin information
        </h2>
        <span className="text-base text-f1-foreground-secondary">
          Details in this section are for administrative purposes, and this
          information won&apos;t display for participants.
        </span>
      </div>

      <Input
        label="Creation year"
        value={state.creationYear}
        onChange={(val) => onChange({ ...state, creationYear: val })}
        placeholder="2026"
      />

      <Input
        label="Internal code"
        value={state.internalCode}
        onChange={(val) => onChange({ ...state, internalCode: val })}
        hint="If you use an internal code in other applications or files, add it here as well."
      />

      <Input
        label="Format"
        value={state.format}
        onChange={(val) => onChange({ ...state, format: val })}
        placeholder="Internal"
      />

      <Input
        label="Categories"
        value={state.categories.join(", ")}
        onChange={() => {}}
        placeholder="Select categories"
        hint="Adding categories facilitates the process of identifying and filtering a course."
        disabled
      />

      <Input
        label="Axes"
        value={state.axes.join(", ")}
        onChange={() => {}}
        placeholder="Select axes"
        disabled
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
          checked={state.subsidizedByFundae}
          onCheckedChange={(val) =>
            onChange({ ...state, subsidizedByFundae: val })
          }
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
            Use our Workflows solution to automate actions such as generating
            course certificates or sending questionnaires.
          </span>
        </div>
        <Switch
          checked={state.linkWithWorkflows}
          onCheckedChange={(val) =>
            onChange({ ...state, linkWithWorkflows: val })
          }
          title="Link with Workflows"
          hideLabel
        />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 3: Course completion
// ---------------------------------------------------------------------------

function Step3CourseCompletion({
  state,
  onChange,
}: {
  state: Step3State
  onChange: (s: Step3State) => void
}) {
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-f1-foreground">
          Course completion
        </h2>
        <span className="text-base text-f1-foreground-secondary">
          Define the conditions participants must meet to complete the course.
        </span>
      </div>

      <div className="flex items-center justify-between rounded-lg border border-solid border-f1-border-secondary p-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold text-f1-foreground">
            Complete all LMS modules
          </span>
          <span className="text-xs text-f1-foreground-secondary">
            Participants must complete all course modules and pass every quiz.
          </span>
        </div>
        <Switch
          checked={state.completeLmsModules}
          onCheckedChange={(val) =>
            onChange({ ...state, completeLmsModules: val })
          }
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
              Set the minimum percentage of sessions in this course each
              participant needs to attend.
            </span>
          </div>
          <Switch
            checked={state.attendSessions}
            onCheckedChange={(val) =>
              onChange({ ...state, attendSessions: val })
            }
            title="Attend sessions"
            hideLabel
          />
        </div>
        {state.attendSessions && (
          <Input
            label="Minimum attendance"
            value={state.minimumAttendance}
            onChange={(val) =>
              onChange({ ...state, minimumAttendance: val })
            }
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
            Participants must pass a test that assesses their understanding of
            this course&apos;s content.
          </span>
        </div>
        <Switch
          checked={state.passKnowledgeTest}
          onCheckedChange={(val) =>
            onChange({ ...state, passKnowledgeTest: val })
          }
          title="Pass the knowledge test"
          hideLabel
        />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 4: Course format
// ---------------------------------------------------------------------------

function Step4CourseFormat({
  state,
  onChange,
}: {
  state: Step4State
  onChange: (s: Step4State) => void
}) {
  return (
    <div className="flex flex-col gap-8 py-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-f1-foreground">
          Course format
        </h2>
        <span className="text-base text-f1-foreground-secondary">
          Define how this course runs and how participants access it.
        </span>
      </div>

      {/* Course format */}
      <div className="flex flex-col gap-3">
        <CardSelectableContainer
          value={state.courseType}
          onChange={(val) =>
            onChange({ ...state, courseType: val ?? "scheduled" })
          }
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
                    value={state.groupAssignment}
                    onChange={(val) =>
                      onChange({
                        ...state,
                        groupAssignment: val ?? "next-available",
                      })
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
  )
}

// ---------------------------------------------------------------------------
// Main Dialog
// ---------------------------------------------------------------------------

export function CreateCourseDialog({ isOpen, onClose, onCreate }: Props) {
  const [currentStep, setCurrentStep] = useState(0)
  const [step1, setStep1] = useState<Step1State>({
    courseName: "",
    description: "",
    objectives: "",
    competencies: ["Risk Assessment", "Encryption Basics", "Compliance"],
    durationSeconds: 0,
    isMandatory: false,
    hasValidity: false,
  })
  const [step2, setStep2] = useState<Step2State>({
    creationYear: "2026",
    internalCode: "",
    format: "Internal",
    categories: [],
    axes: [],
    subsidizedByFundae: false,
    linkWithWorkflows: false,
  })
  const [step3, setStep3] = useState<Step3State>({
    completeLmsModules: false,
    attendSessions: true,
    minimumAttendance: "100%",
    passKnowledgeTest: false,
  })
  const [step4, setStep4] = useState<Step4State>({
    courseType: "scheduled",
    groupAssignment: "next-available",
  })

  const steps = [
    { title: "Basic information" },
    { title: "Admin information" },
    { title: "Course completion" },
    { title: "Course format" },
  ]

  const isLastStep = currentStep === steps.length - 1

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep(currentStep + 1)
    } else {
      onCreate({ step1, step2, step3, step4 })
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="New course"
      width="xl"
      disableContentPadding
    >
      <div className="flex h-[70vh] flex-col">
        <div className="flex flex-1 overflow-hidden">
          {/* Left sidebar stepper */}
          <nav className="flex w-64 shrink-0 flex-col gap-1 border-r border-solid border-f1-border-secondary p-4">
            {steps.map((step, i) => (
              <button
                key={step.title}
                onClick={() => setCurrentStep(i)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left ${
                  i === currentStep
                    ? "bg-f1-background-secondary"
                    : "hover:bg-f1-background-secondary/50"
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                    i === currentStep
                      ? "bg-f1-background-selected-bold text-f1-foreground-inverse"
                      : i < currentStep
                        ? "bg-f1-background-positive text-f1-foreground-inverse"
                        : "border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground-secondary"
                  }`}
                >
                  {i < currentStep ? "✓" : i + 1}
                </span>
                <span
                  className={`text-sm ${
                    i === currentStep
                      ? "font-medium text-f1-foreground"
                      : "text-f1-foreground-secondary"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </nav>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-8">
            {currentStep === 0 && (
              <Step1BasicInformation state={step1} onChange={setStep1} />
            )}
            {currentStep === 1 && (
              <Step2AdminInformation state={step2} onChange={setStep2} />
            )}
            {currentStep === 2 && (
              <Step3CourseCompletion state={step3} onChange={setStep3} />
            )}
            {currentStep === 3 && (
              <Step4CourseFormat state={step4} onChange={setStep4} />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-solid border-f1-border-secondary px-6 py-4">
          {currentStep > 0 && (
            <button
              onClick={handlePrevious}
              className="mr-auto rounded-md border border-solid border-f1-border-secondary px-4 py-2 text-sm font-medium text-f1-foreground hover:bg-f1-background-secondary"
            >
              Back
            </button>
          )}
          {isLastStep && (
            <button
              onClick={onClose}
              className="rounded-md border border-solid border-f1-border-secondary px-4 py-2 text-sm font-medium text-f1-foreground hover:bg-f1-background-secondary"
            >
              Skip for now
            </button>
          )}
          <button
            onClick={handleNext}
            className="rounded-md bg-f1-background-critical-bold px-4 py-2.5 text-sm font-medium text-f1-foreground-inverse hover:opacity-90"
          >
            {isLastStep ? "Publish course" : "→ Continue"}
          </button>
        </div>
      </div>
    </F0Dialog>
  )
}
