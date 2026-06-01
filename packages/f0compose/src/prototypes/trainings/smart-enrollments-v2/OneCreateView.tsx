import { useState } from "react"
import { createPortal } from "react-dom"
import { CardSelectableContainer, Chip, F0Alert, F0AvatarList, F0Button, F0FilterPickerContent, F0Heading, F0OneIcon, F0TagRaw, F0TagStatus, F0Text } from "@factorialco/f0-react"
import {
  F0TableOfContent,
  Input,
  PageHeader,
  ResourceHeader,
  Textarea,
} from "@factorialco/f0-react/dist/experimental"
import { ArrowUp, Cross, LayersFront, Lightbulb, Maximize, People, Person } from "@factorialco/f0-react/icons/app"

// ---------------------------------------------------------------------------
// One Logo (used in loading state)
// ---------------------------------------------------------------------------

const getOverlayRoot = () => document.getElementById("overlay-root") || document.body

// ---------------------------------------------------------------------------
// Skeleton / Loading State (matches screenshot: full editor skeleton + sidebar)
// ---------------------------------------------------------------------------

function LoadingState() {
  return (
    <div className="fixed inset-0 z-[99999] flex bg-f1-background-secondary">
      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-solid border-f1-border-secondary bg-f1-background px-4 py-2">
          <div className="flex items-center gap-3">
            <span className="text-lg text-f1-foreground-secondary">☰</span>
            <div className="flex items-center gap-1.5 text-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-[#ff6347]">
                <span className="text-[10px] text-white">●</span>
              </span>
              <a href="/p/trainings" className="font-medium text-f1-foreground hover:underline">Training</a>
              <span className="text-f1-foreground-secondary">&gt;</span>
              <a href="/p/trainings?tab=enrollments-v2" className="text-f1-foreground hover:underline">Enrollment rules</a>
              <span className="text-f1-foreground-secondary">&gt;</span>
              <span className="text-f1-foreground">New enrollment rule</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-f1-foreground-secondary">⚙</span>
            <F0OneIcon size="sm" />
          </div>
        </div>

        {/* Editor skeleton content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left nav skeleton */}
          <div className="flex w-[260px] flex-col gap-4 border-r border-solid border-f1-border-secondary bg-f1-background p-6">
            <div className="text-lg font-semibold text-f1-foreground">New enrollment rule</div>
            <div className="mt-2 flex items-center justify-end gap-2">
              <div className="h-8 w-24 rounded bg-f1-background-tertiary" />
              <div className="h-8 w-20 rounded bg-[#E55619] opacity-80" />
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full border border-solid border-f1-border-secondary" />
                  <div className="h-3 rounded bg-f1-background-tertiary" style={{ width: `${100 + i * 20}px` }} />
                </div>
              ))}
            </div>
          </div>

          {/* Center skeleton */}
          <div className="flex flex-1 flex-col items-center justify-start overflow-y-auto p-10">
            <div className="flex w-full max-w-3xl flex-col gap-6">
              {/* Section header skeleton */}
              <div className="h-6 w-10 rounded bg-f1-background-tertiary" />
              {/* Content blocks */}
              <div className="flex flex-col gap-3">
                <div className="h-4 w-full rounded bg-f1-background-tertiary" />
                <div className="h-4 w-full rounded bg-f1-background-tertiary" />
                <div className="h-4 w-[90%] rounded bg-f1-background-tertiary" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="h-4 w-full rounded bg-f1-background-tertiary" />
                <div className="h-4 w-full rounded bg-f1-background-tertiary" />
                <div className="h-4 w-[85%] rounded bg-f1-background-tertiary" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="h-4 w-full rounded bg-f1-background-tertiary" />
                <div className="h-4 w-[70%] rounded bg-f1-background-tertiary" />
              </div>
              {/* Card skeletons */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-3 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-4">
                  <div className="h-8 w-8 rounded-full bg-f1-background-tertiary" />
                  <div className="h-4 w-3/4 rounded bg-f1-background-tertiary" />
                  <div className="h-3 w-1/2 rounded bg-f1-background-tertiary" />
                </div>
                <div className="flex flex-col gap-3 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-4">
                  <div className="h-8 w-8 rounded-full bg-f1-background-tertiary" />
                  <div className="h-4 w-3/4 rounded bg-f1-background-tertiary" />
                  <div className="h-3 w-1/2 rounded bg-f1-background-tertiary" />
                </div>
              </div>
            </div>

            {/* Chat bubble floating at bottom */}
            <div className="mt-auto w-full max-w-lg pt-10">
              <div className="flex items-start gap-2 rounded-xl bg-f1-background px-4 py-3 shadow-md">
                <F0OneIcon size="xs" className="mt-0.5 shrink-0" />
                <span className="text-sm text-f1-foreground">Got it. Generating your enrollment rule opening now..</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="flex w-[320px] flex-col border-l border-solid border-f1-border-secondary bg-f1-background">
        <div className="flex items-center justify-between border-b border-solid border-f1-border-secondary px-4 py-3">
          <span className="text-sm font-medium text-f1-foreground">Enrollment rule set up</span>
          <div className="flex items-center gap-2">
            <button className="text-f1-foreground-secondary">⚙</button>
            <button className="text-f1-foreground-secondary">⤢</button>
            <button className="text-f1-foreground-secondary">✕</button>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-5">
          <span className="text-base font-semibold text-f1-foreground">Here&apos;s your rule draft</span>
          <span className="text-sm text-f1-foreground-secondary">
            Let&apos;s go through it section by section — shouldn&apos;t take long.
          </span>
          <span className="text-sm text-f1-foreground-secondary">
            It looks like you still have some things to define
          </span>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Prompt-derived data for pre-filling sections
// ---------------------------------------------------------------------------

interface PromptData {
  ruleName: string
  description: string
  criteria: Record<string, string[]>
  courses: string[]
  peopleCount: number
  retroactivity: "new-hires" | "all" | "existing-only"
}

function extractPromptData(prompt: string): PromptData {
  const lower = prompt.toLowerCase()

  // Suggestion 1: new engineers, onboarding + RGPD
  if (lower.includes("new engineers") && lower.includes("onboarding")) {
    return {
      ruleName: "Engineering onboarding pack",
      description: "Auto-enrolls new engineers in the onboarding culture pack and RGPD course when they join.",
      criteria: { Department: ["Engineering"] },
      courses: ["onboarding", "rgpd"],
      peopleCount: 24,
      retroactivity: "new-hires",
    }
  }

  // Suggestion 2 (ambiguous): marketing team, compliance
  if (lower.includes("marketing") && lower.includes("compliance")) {
    return {
      ruleName: "Marketing — Compliance",
      description: "Enroll the marketing team in the compliance course.",
      criteria: { Team: ["Marketing"] },
      courses: ["compliance"],
      peopleCount: 15,
      retroactivity: "all",
    }
  }

  // Suggestion 3: Sales team, compliance, one-shot
  if (lower.includes("sales") && lower.includes("compliance")) {
    return {
      ruleName: "Sales team — Compliance 2024",
      description: "One-time enrollment of Sales team members in Compliance 2024 before the audit.",
      criteria: { Team: ["Sales"] },
      courses: ["compliance"],
      peopleCount: 12,
      retroactivity: "all",
    }
  }

  // Default: Barcelona/Madrid (fallback for free-text)
  if (lower.includes("barcelona") || lower.includes("madrid")) {
    return {
      ruleName: "Barcelona & Madrid — mandatory courses",
      description: "Auto-enrolls employees from Barcelona and Madrid workplaces in PRL básica and RGPD courses.",
      criteria: { Workplace: ["Barcelona", "Madrid"] },
      courses: ["prl", "rgpd"],
      peopleCount: 87,
      retroactivity: "new-hires",
    }
  }

  return {
    ruleName: "New enrollment rule",
    description: "",
    criteria: {},
    courses: [],
    peopleCount: 0,
    retroactivity: "new-hires",
  }
}

// ---------------------------------------------------------------------------
// Editor State (rule editor + One sidebar with clarification question)
// ---------------------------------------------------------------------------

const sectionIds = ["name", "who", "courses", "existing", "review"] as const
type SectionId = (typeof sectionIds)[number]

const sectionLabels: Record<SectionId, string> = {
  name: "Name",
  who: "Who",
  courses: "Courses",
  existing: "Apply to existing",
  review: "Review",
}

// ---------------------------------------------------------------------------
// Section: Name
// ---------------------------------------------------------------------------

function NameSection({ data }: { data: PromptData }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content="Name" />
        <F0Text variant="description" content="Give this enrollment rule a clear name so you can identify it later." />
      </div>

      <Input
        label="Rule name"
        required
        value={data.ruleName}
        placeholder="Enter a name for this rule"
      />

      <Textarea
        label="Description"
        value={data.description}
        rows={3}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Who
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Criteria Filter Data
// ---------------------------------------------------------------------------

const criteriaFilterDef = {
  Workplace: {
    type: "in" as const,
    label: "Workplaces",
    options: {
      options: [
        { value: "Barcelona", label: "Barcelona" },
        { value: "Madrid", label: "Madrid" },
        { value: "London", label: "London" },
        { value: "Berlin", label: "Berlin" },
        { value: "Paris", label: "Paris" },
        { value: "Remote", label: "Remote" },
      ],
    },
  },
  Role: {
    type: "in" as const,
    label: "Role",
    options: {
      options: [
        { value: "Engineering", label: "Engineering" },
        { value: "Design", label: "Design" },
        { value: "Product", label: "Product" },
        { value: "Sales", label: "Sales" },
        { value: "Marketing", label: "Marketing" },
        { value: "Support", label: "Support" },
      ],
    },
  },
  "Managed by": {
    type: "in" as const,
    label: "Direct reports of",
    options: {
      options: [
        { value: "Hellen Smith", label: "Hellen Smith" },
        { value: "Carlos Ruiz", label: "Carlos Ruiz" },
        { value: "Ana Torres", label: "Ana Torres" },
        { value: "Joan Martí", label: "Joan Martí" },
      ],
    },
  },
  Team: {
    type: "in" as const,
    label: "Team",
    options: {
      options: [
        { value: "Platform", label: "Platform" },
        { value: "Growth", label: "Growth" },
        { value: "Core Product", label: "Core Product" },
        { value: "Infrastructure", label: "Infrastructure" },
        { value: "People Ops", label: "People Ops" },
      ],
    },
  },
}

// ---------------------------------------------------------------------------
// Section: Who
// ---------------------------------------------------------------------------

function WhoSection({ data }: { data: PromptData }) {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selected, setSelected] = useState<Record<string, string[]>>(data.criteria)

  const handleFilterChange = (newValue: Record<string, unknown>) => {
    const next: Record<string, string[]> = {}
    for (const [key, val] of Object.entries(newValue)) {
      if (Array.isArray(val) && val.length > 0) next[key] = val as string[]
    }
    setSelected(next)
  }

  const handleRemoveTag = (cat: string, opt: string) => {
    setSelected((prev) => {
      const current = prev[cat] ?? []
      return { ...prev, [cat]: current.filter((o) => o !== opt) }
    })
  }

  const totalSelected = Object.values(selected).flat().length
  const tags = Object.entries(selected).flatMap(([cat, opts]) =>
    opts.map((opt) => `${cat}: ${opt}`)
  )

  // Simulated people count based on selections
  const peopleCount = totalSelected === 0 ? 0 : 40 + totalSelected * 23

  // Convert to filter value format
  const filterValue: Record<string, string[]> = {}
  for (const [cat, opts] of Object.entries(selected)) {
    if (opts.length > 0) filterValue[cat] = opts
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content="Who" />
        <F0Text variant="description" content="Add criteria to define your audience. Each criteria adds more people to the rule." />
      </div>

      {/* Criteria selector */}
      <div className="relative flex flex-col gap-3">
        <div>
          <F0Text variant="label" content="Who should belong to this team *" />
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="mt-1 flex w-full items-center rounded-lg border border-solid border-f1-border bg-f1-background px-3 py-2.5 text-left text-base text-f1-foreground transition-colors hover:border-f1-border-secondary-hover"
          >
            {totalSelected > 0 ? `${totalSelected} selected` : "Select criteria..."}
          </button>
        </div>

        {filterOpen && (
          <F0FilterPickerContent
            filters={criteriaFilterDef}
            value={filterValue}
            onChange={(val) => {
              handleFilterChange(val)
              setFilterOpen(false)
            }}
            showApplyButton
            applyButtonLabel="Apply criteria"
            height={260}
          />
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const [cat, opt] = tag.split(": ")
              return (
                <Chip
                  key={tag}
                  label={tag}
                  onClose={() => handleRemoveTag(cat, opt)}
                />
              )
            })}
          </div>
        )}
      </div>

      {/* Match feedback */}
      {totalSelected > 0 && (
        <div className="flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-4">
          <F0AvatarList
            size="sm"
            type="person"
            avatars={[
              { firstName: "Maria", lastName: "Garcia" },
              { firstName: "Pedro", lastName: "López" },
              { firstName: "Lucie", lastName: "Fontaine" },
            ]}
            remainingCount={peopleCount - 3}
          />
          <F0Text variant="body" content={`${peopleCount} people match this rule`} />
        </div>
      )}

      {/* Individual exceptions */}
      <div className="flex flex-col gap-4">
        <F0Text variant="label" content="Manual exceptions" />
        <WhoExceptionsSelector />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Courses
// ---------------------------------------------------------------------------

const allEmployees = [
  { id: "1", firstName: "Ana", lastName: "Torres" },
  { id: "2", firstName: "Alba", lastName: "Martín" },
  { id: "3", firstName: "Carlos", lastName: "Ruiz" },
  { id: "4", firstName: "Elena", lastName: "Fernández" },
  { id: "5", firstName: "Miguel", lastName: "Santos" },
  { id: "6", firstName: "Laura", lastName: "García" },
]

function WhoExceptionsSelector() {
  const [search, setSearch] = useState("")
  const [selectedIds, setSelectedIds] = useState<string[]>(["1", "2"])
  const [open, setOpen] = useState(false)

  const [excludeSearch, setExcludeSearch] = useState("")
  const [excludeOpen, setExcludeOpen] = useState(false)
  const [excludeIds, setExcludeIds] = useState<string[]>([])

  const selectedEmployees = allEmployees.filter((e) => selectedIds.includes(e.id))
  const filteredEmployees = allEmployees.filter(
    (e) =>
      !selectedIds.includes(e.id) &&
      !excludeIds.includes(e.id) &&
      `${e.firstName} ${e.lastName}`.toLowerCase().includes(search.toLowerCase())
  )

  const excludedEmployees = allEmployees.filter((e) => excludeIds.includes(e.id))
  const filteredExclude = allEmployees.filter(
    (e) =>
      !excludeIds.includes(e.id) &&
      !selectedIds.includes(e.id) &&
      `${e.firstName} ${e.lastName}`.toLowerCase().includes(excludeSearch.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-4">
      {/* Include manually */}
      <div className="flex flex-col gap-3">
        <div className="relative">
          <div onClick={() => setOpen(true)}>
            <Input
              label="Include manually"
              placeholder="Search employees to include…"
              value={search}
              onChange={(value: string) => {
                setSearch(value)
                setOpen(true)
              }}
            />
          </div>
          {open && filteredEmployees.length > 0 && (
            <div
              className="absolute left-0 top-full z-50 mt-1 w-full rounded-lg border border-solid border-f1-border bg-f1-background shadow-lg"
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className="max-h-48 overflow-y-auto p-1">
                {filteredEmployees.map((emp) => (
                  <button
                    key={emp.id}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-f1-foreground hover:bg-f1-background-secondary"
                    onClick={() => {
                      setSelectedIds([...selectedIds, emp.id])
                      setSearch("")
                      setOpen(false)
                    }}
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-tertiary text-xs font-medium">
                      {emp.firstName[0]}{emp.lastName[0]}
                    </div>
                    {emp.firstName} {emp.lastName}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        {selectedEmployees.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedEmployees.map((emp) => (
              <Chip
                key={emp.id}
                label={`${emp.firstName} ${emp.lastName}`}
                avatar={{ type: "person", firstName: emp.firstName, lastName: emp.lastName }}
                onClose={() => setSelectedIds(selectedIds.filter((id) => id !== emp.id))}
              />
            ))}
          </div>
        )}
      </div>

      {/* Exclude from rule */}
      <div className="flex flex-col gap-3">
        <div className="relative">
          <div onClick={() => setExcludeOpen(true)}>
            <Input
              label="Exclude from rule"
              placeholder="Search employees to exclude…"
              value={excludeSearch}
              onChange={(value: string) => {
                setExcludeSearch(value)
                setExcludeOpen(true)
              }}
            />
          </div>
          {excludeOpen && filteredExclude.length > 0 && (
            <div
              className="absolute left-0 top-full z-50 mt-1 w-full rounded-lg border border-solid border-f1-border bg-f1-background shadow-lg"
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className="max-h-48 overflow-y-auto p-1">
                {filteredExclude.map((emp) => (
                  <button
                    key={emp.id}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-f1-foreground hover:bg-f1-background-secondary"
                    onClick={() => {
                      setExcludeIds([...excludeIds, emp.id])
                      setExcludeSearch("")
                      setExcludeOpen(false)
                    }}
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-tertiary text-xs font-medium">
                      {emp.firstName[0]}{emp.lastName[0]}
                    </div>
                    {emp.firstName} {emp.lastName}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        {excludedEmployees.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {excludedEmployees.map((emp) => (
              <Chip
                key={emp.id}
                label={`${emp.firstName} ${emp.lastName}`}
                avatar={{ type: "person", firstName: emp.firstName, lastName: emp.lastName }}
                onClose={() => setExcludeIds(excludeIds.filter((id) => id !== emp.id))}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const availableCourses = [
  { id: "prl", name: "PRL básica", subtitle: "Self-paced · Enrolled directly, no group needed", status: "Ready" },
  { id: "rgpd", name: "RGPD", subtitle: "Next group available: July 2026 · Auto-assigned", status: "Ready" },
  { id: "onboarding", name: "Onboarding culture", subtitle: "Self-paced · 3 modules", status: "Ready" },
  { id: "compliance", name: "Compliance 2024", subtitle: "Self-paced · 2 modules", status: "Ready" },
  { id: "security", name: "Cybersecurity basics", subtitle: "Scheduled · Next edition: Sept 2026", status: "Draft" },
  { id: "leadership", name: "Leadership 101", subtitle: "Scheduled · Waitlist open", status: "Ready" },
]

function CoursesSection({ data }: { data: PromptData }) {
  const [selectedIds, setSelectedIds] = useState<string[]>(data.courses)
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)

  const selectedItems = availableCourses.filter((c) => selectedIds.includes(c.id))
  const filteredCourses = availableCourses.filter(
    (c) =>
      !selectedIds.includes(c.id) &&
      c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-6">
      <F0Heading variant="heading" content="Courses" />

      {/* Course selector */}
      <div className="flex flex-col gap-3">
        <div className="relative">
          <div onClick={() => setOpen(true)}>
            <Input
              label="Select courses"
              placeholder={selectedIds.length > 0 ? `${selectedIds.length} selected` : "Search courses…"}
              value={search}
              onChange={(value: string) => {
                setSearch(value)
                setOpen(true)
              }}
            />
          </div>
          {open && filteredCourses.length > 0 && (
            <div
              className="absolute left-0 top-full z-50 mt-1 w-full rounded-lg border border-solid border-f1-border bg-f1-background shadow-lg"
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className="max-h-48 overflow-y-auto p-1">
                {filteredCourses.map((course) => (
                  <button
                    key={course.id}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-f1-foreground hover:bg-f1-background-secondary"
                    onClick={() => {
                      setSelectedIds([...selectedIds, course.id])
                      setSearch("")
                      setOpen(false)
                    }}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{course.name}</span>
                      <span className="text-xs text-f1-foreground-secondary">{course.subtitle}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        {selectedItems.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedItems.map((course) => (
              <Chip
                key={course.id}
                label={course.name}
                onClose={() => setSelectedIds(selectedIds.filter((id) => id !== course.id))}
              />
            ))}
          </div>
        )}
      </div>

      {/* Selected courses list */}
      <div className="flex flex-col gap-2">
        <F0Text variant="label" content={`Selected — ${selectedItems.length} courses`} />
        <div className="flex flex-col gap-2">
          {selectedItems.map((course) => (
            <div
              key={course.id}
              className="flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-4"
            >
              <div className="flex flex-1 flex-col gap-0.5">
                <F0Text variant="body" content={course.name} />
                <F0Text variant="description" content={course.subtitle} />
              </div>
              <F0TagStatus text={course.status} variant="positive" />
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <F0Alert
        variant="info"
        title="Assignment logic is per course"
        description="To change how people are assigned to groups, go to the course settings."
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Apply to existing
// ---------------------------------------------------------------------------

function ExistingSection({ data }: { data: PromptData }) {
  const [retroactivity, setRetroactivity] = useState<string>(data.retroactivity)

  return (
    <div className="flex flex-col gap-6">
      <F0Heading variant="heading" content="Apply to existing people?" />

      {/* People summary */}
      <div className="flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary p-4">
        <F0AvatarList
          size="sm"
          type="person"
          avatars={[
            { firstName: "María", lastName: "Torres" },
            { firstName: "Pedro", lastName: "Gomes" },
            { firstName: "Lucie", lastName: "Fontaine" },
            { firstName: "Marc", lastName: "Dubois" },
          ]}
          remainingCount={4}
        />
        <F0Text variant="body" content="8 people already match and haven't completed all courses" />
      </div>

      {/* Options */}
      <CardSelectableContainer
        label="Retroactivity"
        value={retroactivity}
        onChange={(value: string | undefined) => setRetroactivity(value ?? "new-hires")}
        items={[
          {
            value: "new-hires",
            title: "New hires only",
            description: "The 8 existing people won't be enrolled now. The rule only applies to people who join or change roles from this moment on.",
          },
          {
            value: "enroll-all",
            title: "Enroll the 8 too",
            description: "They'll be enrolled in the selected courses right away. People who already completed a course won't be re-enrolled.",
          },
        ]}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Review
// ---------------------------------------------------------------------------

function ReviewSection({ mode, data }: { mode: "create" | "edit"; data: PromptData }) {
  const criteriaEntries = Object.entries(data.criteria).flatMap(([cat, opts]) =>
    opts.map((opt) => `${cat}: ${opt}`)
  )
  const selectedCourses = availableCourses.filter((c) => data.courses.includes(c.id))

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content={mode === "edit" ? "Review and save" : "Review and activate"} />
        <F0Text variant="description" content="Check everything before activating the rule." />
      </div>

      {/* Audience */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <People className="h-5 w-5 text-f1-foreground-secondary" />
          <F0Heading variant="heading" content="Audience" />
          <F0TagRaw text={`${data.peopleCount} employees`} />
        </div>

        <div className="flex flex-col gap-6 pl-8">
          <div className="flex flex-col gap-2">
            <F0Text variant="label" content="Criteria" />
            <div className="flex flex-col gap-2">
              {criteriaEntries.map((entry) => (
                <div key={entry} className="flex items-center justify-between rounded-lg border border-solid border-f1-border-secondary px-4 py-3">
                  <F0Text variant="body" content={entry} />
                </div>
              ))}
            </div>
          </div>

          <F0Alert
            variant="info"
            title={data.retroactivity === "new-hires" ? "New hires only" : "All matching employees"}
            description={data.retroactivity === "new-hires"
              ? "Existing employees matching the criteria won't be enrolled. Only future hires will be affected."
              : "Both existing employees and future hires matching the criteria will be enrolled."
            }
          />
        </div>
      </div>

      {/* Courses */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <LayersFront className="h-5 w-5 text-f1-foreground-secondary" />
          <F0Heading variant="heading" content="Courses" />
          <F0TagRaw text={`${selectedCourses.length} course${selectedCourses.length !== 1 ? "s" : ""}`} />
        </div>

        <div className="flex flex-col gap-2 pl-8">
          <div className="overflow-hidden rounded-lg border border-solid border-f1-border-secondary">
            {selectedCourses.map((course, i) => (
              <div key={course.id} className={`flex items-center justify-between px-4 py-3${i < selectedCourses.length - 1 ? " border-b border-solid border-f1-border-secondary" : ""}`}>
                <div className="flex flex-col gap-0.5">
                  <F0Text variant="body" content={course.name} />
                  <F0Text variant="description" content={course.subtitle} />
                </div>
                <F0TagStatus text={course.status} variant="positive" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// ONE Chat Sidebar (static replica matching F0AiChat design)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// One-shot wizard sections
// ---------------------------------------------------------------------------

const oneShotSectionIds = ["who", "courses", "confirm"] as const
type OneShotSectionId = (typeof oneShotSectionIds)[number]

const oneShotSectionLabels: Record<OneShotSectionId, string> = {
  who: "Who",
  courses: "Courses",
  confirm: "Confirm & enroll",
}

function OneShotWhoSection({ data }: { data: PromptData }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content="Who" />
        <F0Text variant="description" content="Select the people to enroll right now. This won't repeat for future hires." />
      </div>

      <div className="relative flex flex-col gap-3">
        <F0Text variant="label" content="Audience criteria" />
        <div className="flex flex-wrap gap-2">
          {Object.entries(data.criteria).flatMap(([cat, opts]) =>
            opts.map((opt) => (
              <Chip key={`${cat}:${opt}`} label={`${cat}: ${opt}`} onClose={() => {}} />
            ))
          )}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <F0AvatarList
            avatars={Array.from({ length: Math.min(data.peopleCount, 12) }, (_, i) => ({
              type: "person" as const,
              firstName: ["Maria", "Carlos", "Joan", "Ana", "Marc", "Laura", "Pol", "Marta", "David", "Sara", "Alex", "Nuria"][i % 12],
              lastName: ["Garcia", "Ruiz", "Martí", "Torres", "Vidal", "López", "Serra", "Font", "Costa", "Gil", "Roca", "Puig"][i % 12],
            }))}
            maxVisible={5}
            size="sm"
          />
          <F0Text variant="body" content={`${data.peopleCount} people will be enrolled now`} />
        </div>
      </div>

      <F0Alert
        variant="warning"
        title="One-time enrollment"
        description="These people will be enrolled immediately when you confirm. This won't repeat for future hires."
      />
    </div>
  )
}

function OneShotCoursesSection({ data }: { data: PromptData }) {
  const selectedCourses = availableCourses.filter((c) => data.courses.includes(c.id))

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content="Courses" />
        <F0Text variant="description" content="Select which courses to enroll these people in." />
      </div>

      <div className="flex flex-col gap-3">
        <F0Text variant="label" content={`Selected — ${selectedCourses.length} course${selectedCourses.length !== 1 ? "s" : ""}`} />
        <div className="flex flex-col rounded-lg border border-solid border-f1-border-secondary">
          {selectedCourses.map((course, i) => (
            <div key={course.id} className={`flex items-center justify-between px-4 py-3${i < selectedCourses.length - 1 ? " border-b border-solid border-f1-border-secondary" : ""}`}>
              <div className="flex flex-col gap-0.5">
                <F0Text variant="body" content={course.name} />
                <F0Text variant="description" content={course.subtitle} />
              </div>
              <F0TagStatus text={course.status} variant="positive" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OneShotConfirmSection({ onClose, data }: { onClose: () => void; data: PromptData }) {
  const selectedCourses = availableCourses.filter((c) => data.courses.includes(c.id))
  const criteriaTag = Object.entries(data.criteria).flatMap(([cat, opts]) =>
    opts.map((opt) => `${cat}: ${opt}`)
  ).join(", ")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <F0Heading variant="heading" content="Confirm & enroll" />
        <F0Text variant="description" content="Review and confirm this one-time enrollment." />
      </div>

      {/* Summary */}
      <div className="flex flex-col gap-4 rounded-lg border border-solid border-f1-border-secondary p-4">
        <div className="flex items-center gap-3">
          <F0TagRaw text={`${data.peopleCount} people`} />
          <span className="text-sm text-f1-foreground-secondary">→</span>
          <F0TagRaw text={`${selectedCourses.length} course${selectedCourses.length !== 1 ? "s" : ""}`} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <F0Text variant="label" content="Audience" />
            <F0Text variant="body" content={criteriaTag} />
          </div>
          <div className="flex items-center justify-between">
            <F0Text variant="label" content={selectedCourses.length === 1 ? "Course" : "Courses"} />
            <F0Text variant="body" content={selectedCourses.map((c) => c.name).join(", ")} />
          </div>
        </div>
      </div>

      <F0Alert
        variant="warning"
        title="This action can't be undone"
        description={`${data.peopleCount} people will be enrolled in ${selectedCourses.map((c) => c.name).join(" and ")} immediately.`}
      />

      <div className="flex items-center justify-end gap-3">
        <F0Button variant="outline" label="Back" onClick={() => {}} />
        <F0Button variant="default" label="Enroll now" onClick={onClose} />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// ONE Chat Sidebar with context-aware summary
// ---------------------------------------------------------------------------

function OneChatSidebar({ mode, ruleType, prompt }: { mode: "create" | "edit"; ruleType: "dynamic" | "one-shot"; prompt: string }) {
  const [inputValue, setInputValue] = useState("")
  const data = extractPromptData(prompt)
  const criteriaStr = Object.entries(data.criteria).flatMap(([cat, opts]) => opts.map((o) => `${cat}: ${o}`)).join(", ")
  const coursesStr = availableCourses.filter((c) => data.courses.includes(c.id)).map((c) => c.name).join(", ")

  const dynamicSummary = (
    <>
      {/* User message — right-aligned bubble (matches real UserMessage) */}
      <div className="my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0">
        <div className="w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3">
          <p className="text-base font-normal text-f1-foreground">{prompt}</p>
        </div>
      </div>

      {/* Assistant message — no bubble (matches real AssistantMessage) */}
      <div className="relative flex w-full flex-col items-start justify-center">
        <div className="w-fit max-w-full">
          <p className="text-base font-normal text-f1-foreground">
            Done! I&apos;ve created a dynamic rule called <strong className="font-semibold">{data.ruleName}</strong>:
          </p>
          <ul className="mt-2 list-disc pl-5 text-base text-f1-foreground">
            <li className="mb-1"><strong className="font-semibold">Who:</strong> {criteriaStr}</li>
            <li className="mb-1"><strong className="font-semibold">Courses:</strong> {coursesStr}</li>
            <li className="mb-1"><strong className="font-semibold">Applies to:</strong> {data.retroactivity === "new-hires" ? "New hires only" : "New hires + existing employees"}</li>
          </ul>
          <p className="mt-2 text-base font-normal text-f1-foreground">
            Review each section on the left, then hit <strong className="font-semibold">Activate</strong> when ready. Ask me if you want to change anything.
          </p>
        </div>
      </div>
    </>
  )

  const oneShotSummary = (
    <>
      <div className="my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0">
        <div className="w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3">
          <p className="text-base font-normal text-f1-foreground">{prompt}</p>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-start justify-center">
        <div className="w-fit max-w-full">
          <p className="text-base font-normal text-f1-foreground">
            Got it — I&apos;ve set up a <strong className="font-semibold">one-time enrollment</strong>:
          </p>
          <ul className="mt-2 list-disc pl-5 text-base text-f1-foreground">
            <li className="mb-1"><strong className="font-semibold">Who:</strong> {criteriaStr} ({data.peopleCount} people)</li>
            <li className="mb-1"><strong className="font-semibold">{data.courses.length === 1 ? "Course" : "Courses"}:</strong> {coursesStr}</li>
          </ul>
          <p className="mt-2 text-base font-normal text-f1-foreground">
            Check the details and hit <strong className="font-semibold">Enroll now</strong> to confirm. This won&apos;t repeat.
          </p>
        </div>
      </div>
    </>
  )

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <span className="text-f1-foreground">{ruleType === "one-shot" ? "One-time enrollment" : "Enrollment rule set up"}</span>
        <div className="flex items-center">
          <button className="flex h-7 w-7 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-secondary-hover">
            <Maximize className="h-3.5 w-3.5" />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-secondary-hover">
            <Cross className="h-3.5 w-3.5" />
          </button>
        </div>
      </header>

      {/* Messages */}
      <div className="flex flex-1 flex-col overflow-y-auto px-4 pb-4">
        {mode === "edit" ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
            <F0OneIcon size="lg" className="my-4" />
            <p className="text-2xl font-semibold leading-[28px] text-f1-foreground-tertiary">Ask One to help you edit this rule</p>
          </div>
        ) : (
          ruleType === "one-shot" ? oneShotSummary : dynamicSummary
        )}
      </div>

      {/* Input area — conic gradient glow */}
      <div className="flex flex-col items-center gap-2 px-3 pb-3 pt-2">
        <div
          className="relative isolate w-full flex flex-col items-stretch gap-2 rounded-lg border border-solid border-f1-border p-0 transition-all before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:bg-f1-background before:content-[''] after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:scale-90 after:rounded-md after:bg-[conic-gradient(from_0deg,#E55619,#A1ADE5,#E51943,#E55619)] after:opacity-0 after:blur-[6px] after:transition-all after:delay-200 after:duration-300 after:content-[''] focus-within:border-f1-background-tertiary focus-within:after:scale-100 focus-within:after:opacity-100"
        >
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask One to change something..."
            rows={2}
            className="w-full resize-none bg-transparent px-3 pb-1 pt-3 text-base text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                setInputValue("")
              }
            }}
          />
          <div className="flex shrink-0 items-center justify-between p-3">
            <div />
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-f1-background-tertiary text-f1-foreground-disabled">
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
        <span className="text-sm font-medium text-f1-foreground-tertiary">
          One works within your permissions.{" "}
          <button className="flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary underline">See more</button>
        </span>
      </div>
    </div>
  )
}

function EditorState({ onClose, mode, ruleType, prompt }: { onClose: () => void; mode: "create" | "edit"; ruleType: "dynamic" | "one-shot"; prompt: string }) {
  const [activeSection, setActiveSection] = useState<SectionId>("name")
  const [activeOneShotSection, setActiveOneShotSection] = useState<OneShotSectionId>("who")

  const isOneShot = ruleType === "one-shot" && mode === "create"

  const promptData = extractPromptData(prompt)
  const title = promptData.ruleName

  return (
    <div className="fixed inset-0 z-[99999] isolate flex flex-row bg-f1-background">
      {/* Hide the f0compose FAB that bleeds through */}
      <style dangerouslySetInnerHTML={{ __html: `[style*="zIndex: 1000"], [style*="z-index: 1000"] { display: none !important; }` }} />
      {/* Left: main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top navigation */}
        <PageHeader
          module={{ id: "company_trainings", name: "Training", href: "/p/trainings" }}
          breadcrumbs={mode === "edit"
            ? [{ id: "enrollment-rules", label: "Enrollment rules", href: "/p/trainings?tab=enrollments-v2" }, { id: "enrollment-rule", label: "Enrollment rule" }, { id: "edit-rule", label: "Edit rule" }]
            : [{ id: "enrollment-rules", label: "Enrollment rules", href: "/p/trainings?tab=enrollments-v2" }, { id: "new-rule", label: isOneShot ? "One-time enrollment" : "New enrollment rule" }]
          }
          actions={[]}
        />

        {/* Content area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Title + action */}
          <div className="[&>div]:border-b-0">
            <ResourceHeader
              title={title}
              status={{
                label: "Status",
                text: mode === "edit" ? "Active" : "Draft",
                variant: mode === "edit" ? "positive" : "neutral",
              }}
              metadata={[
                {
                  label: "Created by",
                  value: {
                    type: "avatar",
                    variant: {
                      type: "person",
                      firstName: "Hellen",
                      lastName: "Smith",
                    },
                    text: "Hellen Smith",
                  },
                },
                {
                  label: "Last update",
                  value: { type: "text", content: "Just now" },
                },
              ]}
              primaryAction={{ label: isOneShot ? "Enroll now" : (mode === "edit" ? "Save changes" : "Activate"), onClick: onClose }}
              otherActions={[
                {
                  label: "Duplicate",
                  icon: LayersFront,
                  onClick: () => {},
                },
              ]}
            />
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Main content */}
          <div className="flex flex-1 overflow-hidden border-t border-solid border-f1-border-secondary">
            {/* Left section nav */}
            <div className="w-60 shrink-0 border-r border-solid border-f1-border-secondary">
              {isOneShot ? (
                <F0TableOfContent
                  title="One-time enrollment"
                  items={oneShotSectionIds.map((id) => ({
                    id,
                    label: oneShotSectionLabels[id],
                    onClick: () => setActiveOneShotSection(id),
                  }))}
                  activeItem={activeOneShotSection}
                />
              ) : (
                <F0TableOfContent
                  title="Enrollment setup"
                  items={sectionIds.map((id) => ({
                    id,
                    label: sectionLabels[id],
                    onClick: () => setActiveSection(id),
                  }))}
                  activeItem={activeSection}
                />
              )}
            </div>

            {/* Form content */}
            <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 overflow-y-auto px-10 py-6">
              {isOneShot ? (
                <>
                  {activeOneShotSection === "who" && <OneShotWhoSection data={promptData} />}
                  {activeOneShotSection === "courses" && <OneShotCoursesSection data={promptData} />}
                  {activeOneShotSection === "confirm" && <OneShotConfirmSection onClose={onClose} data={promptData} />}
                </>
              ) : (
                <>
                  {activeSection === "name" && <NameSection data={promptData} />}
                  {activeSection === "who" && <WhoSection data={promptData} />}
                  {activeSection === "courses" && <CoursesSection data={promptData} />}
                  {activeSection === "existing" && <ExistingSection data={promptData} />}
                  {activeSection === "review" && <ReviewSection mode={mode} data={promptData} />}
                </>
              )}
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Right: ONE chat sidebar — full height */}
      <div className="flex w-96 shrink-0 p-1 pl-0">
        <OneChatSidebar mode={mode} ruleType={ruleType} prompt={prompt} />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Suggestions
// ---------------------------------------------------------------------------

const suggestions = [
  { icon: Lightbulb, text: "I want all new engineers to get the onboarding pack and RGPD automatically when they join" },
  { icon: People, text: "The marketing team needs the compliance course" },
  { icon: Person, text: "I need to enroll the Sales team in the compliance course before Friday's audit, just this once" },
]

// ---------------------------------------------------------------------------
// Signal detection — determines if prompt is clearly dynamic, one-shot, or ambiguous
// ---------------------------------------------------------------------------

type RuleIntent = "dynamic" | "one-shot" | "ambiguous"

function detectIntent(text: string): RuleIntent {
  const lower = text.toLowerCase()
  const oneShotSignals = ["just this once", "before friday", "right now", "this week", "just once", "one-time", "one time", "immediately", "urgent"]
  const dynamicSignals = ["automatically", "when they join", "every time", "always", "from day one", "new hires", "new engineers", "anyone joining"]

  const hasOneShot = oneShotSignals.some((s) => lower.includes(s))
  const hasDynamic = dynamicSignals.some((s) => lower.includes(s))

  if (hasOneShot && !hasDynamic) return "one-shot"
  if (hasDynamic && !hasOneShot) return "dynamic"
  return "ambiguous"
}

// ---------------------------------------------------------------------------
// Chat Textarea (matches F0AiChat conic gradient glow)
// ---------------------------------------------------------------------------

function OneChatTextarea({
  value,
  onChange,
  onSubmit,
  placeholder,
  hasData,
}: {
  value: string
  onChange: (v: string) => void
  onSubmit: () => void
  placeholder: string
  hasData: boolean
}) {
  return (
    <div
      className="relative isolate flex flex-col items-stretch gap-2 rounded-lg border border-solid border-f1-border p-0 transition-all hover:cursor-text before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:bg-f1-background before:content-[''] after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:scale-90 after:rounded-md after:bg-[conic-gradient(from_0deg,#E55619,#A1ADE5,#E51943,#E55619)] after:opacity-0 after:blur-[6px] after:transition-all after:delay-200 after:duration-300 after:content-[''] focus-within:border-f1-background-tertiary focus-within:after:scale-100 focus-within:after:opacity-100"
    >
      <div className="overflow-hidden">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              onSubmit()
            }
          }}
          placeholder={placeholder}
          rows={3}
          className="w-full resize-none bg-transparent px-4 pb-1 pt-3 text-base text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none"
        />
      </div>
      <div className="flex shrink-0 items-center justify-between p-3">
        <div />
        <button
          onClick={onSubmit}
          disabled={!hasData}
          className={`flex h-8 w-8 items-center justify-center rounded-full ${
            hasData
              ? "bg-f1-foreground text-f1-foreground-inverse"
              : "bg-f1-background-tertiary text-f1-foreground-disabled"
          }`}
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

interface Props {
  onClose: () => void
  onSubmit: () => void
  mode?: "create" | "edit"
}

export function OneCreateView({ onClose, mode = "create" }: Props) {
  const [prompt, setPrompt] = useState("")
  const [phase, setPhase] = useState<"input" | "clarifying" | "loading" | "editor">(mode === "edit" ? "editor" : "input")
  const [ruleType, setRuleType] = useState<"dynamic" | "one-shot">("dynamic")

  const handleSubmit = () => {
    if (prompt.trim()) {
      const intent = detectIntent(prompt)
      if (intent === "ambiguous") {
        setPhase("clarifying")
      } else {
        setRuleType(intent)
        setPhase("loading")
        setTimeout(() => setPhase("editor"), 3000)
      }
    }
  }

  const handleClarify = (type: "dynamic" | "one-shot") => {
    setRuleType(type)
    setPhase("loading")
    setTimeout(() => {
      setPhase("editor")
    }, 3000)
  }

  const handleSuggestionClick = (text: string) => {
    setPrompt(text)
    const intent = detectIntent(text)
    if (intent === "ambiguous") {
      setPhase("clarifying")
    } else {
      setRuleType(intent)
      setPhase("loading")
      setTimeout(() => setPhase("editor"), 3000)
    }
  }

  if (phase === "loading") {
    return createPortal(<LoadingState />, getOverlayRoot())
  }

  if (phase === "editor") {
    return createPortal(<EditorState onClose={onClose} mode={mode} ruleType={ruleType} prompt={prompt} />, getOverlayRoot())
  }

  if (phase === "clarifying") {
    return (
      <div className="flex flex-1 flex-col items-center justify-end px-4 pb-3 pt-2">
        <div className="flex w-full max-w-[712px] flex-1 flex-col justify-end gap-4">
          {/* User message — right-aligned bubble (matches real UserMessage) */}
          <div className="my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0">
            <div className="w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3">
              <p className="text-base font-normal text-f1-foreground">{prompt}</p>
            </div>
          </div>
        </div>

        {/* Textarea form with ClarifyingQuestionPanel inside — glow always active */}
        <div className="w-full max-w-[712px] pt-4">
          <div
            className="relative isolate flex flex-col items-stretch rounded-lg border border-solid border-f1-background-tertiary p-0 transition-all before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:bg-f1-background before:content-[''] after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:scale-100 after:rounded-md after:bg-[conic-gradient(from_0deg,#E55619,#A1ADE5,#E51943,#E55619)] after:opacity-100 after:blur-[6px] after:content-['']"
          >
            {/* ClarifyingQuestionPanel content */}
            <div className="flex flex-col gap-3 pt-3">
              {/* StepHeader */}
              <div className="flex items-start gap-2 pl-4 pr-3">
                <p className="min-w-0 flex-1 text-lg font-semibold text-f1-foreground">
                  Should this be a dynamic rule or a one-time assignment?
                </p>
              </div>

              {/* OptionsList — single select with RadioIndicator */}
              <div className="flex flex-col gap-0 overflow-y-auto px-1.5 py-0.5">
                <button
                  onClick={() => handleClarify("dynamic")}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-left transition-colors hover:bg-f1-background-secondary"
                >
                  {/* RadioIndicator — unselected */}
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-solid border-f1-border bg-f1-background transition-colors" />
                  <span className="text-base font-medium text-f1-foreground">Dynamic rule — enrolls anyone who matches, now and in the future</span>
                </button>
                <button
                  onClick={() => handleClarify("one-shot")}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-left transition-colors hover:bg-f1-background-secondary"
                >
                  {/* RadioIndicator — unselected */}
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-solid border-f1-border bg-f1-background transition-colors" />
                  <span className="text-base font-medium text-f1-foreground">One-time assignment — enroll today&apos;s matches only</span>
                </button>
              </div>

              {/* ConfirmFooter */}
              <div className="flex items-center justify-end gap-3 p-3">
                <F0Button
                  disabled
                  variant="default"
                  label="Confirm"
                  onClick={() => handleClarify("dynamic")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Nav hints */}
        <div className="flex w-full max-w-[712px] flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-2 text-sm font-medium text-f1-foreground-tertiary">
          <span><kbd className="font-sans">↑↓</kbd> Navigate</span>
          <span><kbd className="font-sans">Enter</kbd> Select</span>
          <span><kbd className="font-sans">Esc</kbd> Cancel</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-end px-4 pb-3 pt-2">
      <div className="flex w-full max-w-[712px] flex-1 flex-col justify-end gap-6">
        <div className="px-1">
          <F0OneIcon size="lg" className="my-4" />
          <p className="text-2xl font-semibold leading-[28px] text-f1-foreground-tertiary">Hello Hellen,</p>
          <p className="text-2xl font-semibold leading-[28px] text-f1-foreground">
            Let&apos;s set up a new enrollment rule.
          </p>
        </div>

        {/* Suggestions — matches ButtonInternal ghost + border shadow from WelcomeScreen */}
        <div className="flex flex-col items-start gap-[6px]">
          {suggestions.map((suggestion) => (
            <div key={suggestion.text} className="w-full">
              <button
                onClick={() => handleSuggestionClick(suggestion.text)}
                className="flex w-full items-center gap-2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left text-sm font-medium text-f1-foreground shadow transition-colors hover:bg-f1-background-secondary-hover"
              >
                <suggestion.icon className="h-4 w-4 shrink-0 text-f1-foreground-secondary" />
                <span>{suggestion.text}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Textarea */}
      <div className="w-full max-w-[712px] pt-4">
        <OneChatTextarea
          value={prompt}
          onChange={setPrompt}
          onSubmit={handleSubmit}
          placeholder="e.g. 'All new engineers should complete the onboarding pack automatically'"
          hasData={!!prompt.trim()}
        />
      </div>

      {/* Disclaimer */}
      <div className="flex w-full max-w-[712px] flex-row items-center justify-center gap-1 pt-2">
        <span className="text-sm font-medium text-f1-foreground-tertiary">
          One works within your permissions.
        </span>
        <button className="flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary underline">
          See more
        </button>
      </div>
    </div>
  )
}
