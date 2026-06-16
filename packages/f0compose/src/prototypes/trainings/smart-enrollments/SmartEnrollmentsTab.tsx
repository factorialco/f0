import { useState } from "react"
import {
  F0Heading,
  F0Text,
  F0Alert,
  F0TagDot,
  F0Dialog,
  OneFilterPicker,
  StandardLayout,
} from "@factorialco/f0-react"
import type { FiltersDefinition, FiltersState } from "@factorialco/f0-react"
import {
  Chip,
  OneDataCollection,
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { BookOpen, CheckCircle, PauseCircle, Pencil, People, Person, Tag } from "@factorialco/f0-react/icons/app"
import { createPortal } from "react-dom"

import {
  CreateSmartEnrollmentDialog,
  type NewSmartEnrollment,
} from "./CreateSmartEnrollmentDialog"
import { CreateSmartEnrollmentFullscreen, type RuleType } from "./CreateSmartEnrollmentFullscreen"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type EnrollmentType = "dynamic" | "one-shot"
type EnrollmentStatus = "active" | "paused" | "executed"

export type EnrollmentItem = {
  [key: string]: unknown
  id: string
  name: string
  subtitle: string
  type: EnrollmentType
  status: EnrollmentStatus
  peopleCovered: number
  courseCount: number
  hasWarning?: boolean
}

// ---------------------------------------------------------------------------
// Tag config
// ---------------------------------------------------------------------------

const typeTagConfig: Record<EnrollmentType, { label: string; color: "viridian" | "malibu" | "purple" | "smoke" | "indigo" }> = {
  dynamic: { label: "Dynamic", color: "viridian" },
  "one-shot": { label: "One-shot", color: "malibu" },
}

const statusTagConfig: Record<EnrollmentStatus, { label: string; status: "positive" | "warning" | "neutral" | "info" | "critical" }> = {
  active: { label: "Active", status: "positive" },
  paused: { label: "Paused", status: "warning" },
  executed: { label: "Executed", status: "positive" },
}

// ---------------------------------------------------------------------------
// Seed data
// ---------------------------------------------------------------------------

const SEED_ENROLLMENTS: EnrollmentItem[] = [
  { id: "enr-1", name: "Onboarding CX Europa", subtitle: "Workplace: Portugal + France + 2 individuals · Created 15 mar", type: "dynamic", status: "active", peopleCovered: 34, courseCount: 3, hasWarning: true },
  { id: "enr-2", name: "Onboarding — new hires", subtitle: "All employees · Created 10 apr", type: "dynamic", status: "active", peopleCovered: 128, courseCount: 5 },
  { id: "enr-3", name: "PRL — annual renewal", subtitle: "All employees · Created 5 jan · Renews every 12 months", type: "dynamic", status: "active", peopleCovered: 400, courseCount: 1 },
  { id: "enr-4", name: "Managers — leadership track", subtitle: "Role: Manager · Created 22 feb · Paused 3 days ago", type: "dynamic", status: "paused", peopleCovered: 12, courseCount: 2 },
  { id: "enr-5", name: "Compliance audit Q2 — Sales", subtitle: "Executed 20 may · Sales team · 47 people", type: "one-shot", status: "executed", peopleCovered: 47, courseCount: 2 },
  { id: "enr-6", name: "GDPR update — all staff", subtitle: "Executed 2 jan · All employees · 400 people", type: "one-shot", status: "executed", peopleCovered: 400, courseCount: 1 },
]

// ---------------------------------------------------------------------------
// Main Tab Component
// ---------------------------------------------------------------------------

export function SmartEnrollmentsTab() {
  const [selectorOpen, setSelectorOpen] = useState(false)
  const [selectedRuleType, setSelectedRuleType] = useState<RuleType | null>(null)
  const [flowMode, setFlowMode] = useState<"wizard" | "fullscreen" | null>(null)
  const [selectedEnrollment, setSelectedEnrollment] = useState<EnrollmentItem | null>(null)

  const source = useDataCollectionSource<EnrollmentItem>(
    {
      search: { enabled: true, sync: true },
      filters: {
        type: {
          type: "in",
          label: "Type",
          options: {
            options: [
              { value: "dynamic", label: "Dynamic rule" },
              { value: "one-shot", label: "One-shot" },
            ],
          },
        },
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "paused", label: "Paused" },
              { value: "executed", label: "Executed" },
            ],
          },
        },
      },
      primaryActions: () => ({
        label: "+ New",
        icon: undefined,
        onClick: () => { setSelectedRuleType(null); setSelectorOpen(true) },
      }),
      itemActions: (item: EnrollmentItem) => [
        { label: "View details", onClick: () => setSelectedEnrollment(item) },
        { label: "Edit", icon: Pencil, onClick: () => {} },
      ],
      itemOnClick: (item: EnrollmentItem) => () => setSelectedEnrollment(item),
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search }) => {
          const typeFilter = Array.isArray(filters?.type) ? (filters.type as string[]) : []
          const statusFilter = Array.isArray(filters?.status) ? (filters.status as string[]) : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = SEED_ENROLLMENTS
            .filter((e) => typeFilter.length === 0 || typeFilter.includes(e.type))
            .filter((e) => statusFilter.length === 0 || statusFilter.includes(e.status))
            .filter((e) => term === "" || e.name.toLowerCase().includes(term) || e.subtitle.toLowerCase().includes(term))

          return {
            type: "pages" as const,
            records: filtered,
            total: filtered.length,
            perPage: 20,
            currentPage: 1,
            pagesCount: 1,
          }
        },
      },
    },
    []
  )

  const handleCreate = (_data: NewSmartEnrollment) => {
    setFlowMode(null)
    setSelectedRuleType(null)
  }

  const handleSelectorContinue = () => {
    if (!selectedRuleType) return
    setSelectorOpen(false)
    setFlowMode("wizard")
  }

  return (
    <>
      <div className="px-6">
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "card",
            options: {
              title: (item: EnrollmentItem) => item.name,
              description: (item: EnrollmentItem) => item.subtitle,
              cardProperties: [
                {
                  label: "Status",
                  icon: CheckCircle,
                  render: (item: EnrollmentItem) => ({
                    type: "status",
                    value: {
                      label: statusTagConfig[item.status].label,
                      status: statusTagConfig[item.status].status,
                    },
                  }),
                },
                {
                  label: "Type",
                  icon: Tag,
                  render: (item: EnrollmentItem) => ({
                    type: "dotTag",
                    value: {
                      label: typeTagConfig[item.type].label,
                      color: typeTagConfig[item.type].color,
                    },
                  }),
                },
                {
                  label: "People",
                  icon: People,
                  render: (item: EnrollmentItem) => `${item.peopleCovered} participants`,
                },
                {
                  label: "Courses",
                  icon: BookOpen,
                  render: (item: EnrollmentItem) => `${item.courseCount} ${item.courseCount === 1 ? "course" : "courses"}`,
                },
              ],
            },
          },
          {
            type: "list",
            options: {
              itemDefinition: (item: EnrollmentItem) => ({
                title: item.name,
                description: [item.subtitle],
              }),
              fields: [
                {
                  label: "Status",
                  render: (item: EnrollmentItem) => ({
                    type: "status",
                    value: {
                      label: statusTagConfig[item.status].label,
                      status: statusTagConfig[item.status].status,
                    },
                  }),
                },
                {
                  label: "Type",
                  render: (item: EnrollmentItem) => ({
                    type: "dotTag",
                    value: {
                      label: typeTagConfig[item.type].label,
                      color: typeTagConfig[item.type].color,
                    },
                  }),
                },
                {
                  label: "People",
                  render: (item: EnrollmentItem) => `${item.peopleCovered} participants`,
                },
                {
                  label: "Courses",
                  render: (item: EnrollmentItem) => `${item.courseCount} ${item.courseCount === 1 ? "course" : "courses"}`,
                },
              ],
            },
          },
        ]}
      />
      </div>

      {/* Type selector modal */}
      <F0Dialog
        isOpen={selectorOpen}
        onClose={() => setSelectorOpen(false)}
        title="New enrollment"
        width="md"
        primaryAction={{
          label: selectedRuleType === "one-time" ? "Create one-shot enrollment ↗" : "Create dynamic rule ↗",
          onClick: handleSelectorContinue,
          disabled: !selectedRuleType,
        }}
        secondaryAction={{ label: "Cancel", onClick: () => setSelectorOpen(false) }}
      >
        <div className="flex flex-col gap-5">
          <F0Text variant="body" content="What type of enrollment do you want to create?" />
          <div className="grid grid-cols-2 gap-4">
            {/* Dynamic rule card */}
            <button
              onClick={() => setSelectedRuleType("continuous")}
              className={`flex flex-col gap-4 rounded-xl border-2 border-solid p-5 text-left transition-all ${
                selectedRuleType === "continuous"
                  ? "border-f1-border-selected-bold bg-f1-background-secondary"
                  : "border-f1-border-secondary bg-f1-background hover:border-f1-border"
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-f1-background-info text-lg">
                🔄
              </div>
              <div className="flex flex-col gap-1.5">
                <F0Text variant="label" content="Dynamic rule" />
                <F0Text variant="small" content="Applies automatically every time someone matches the criteria. Permanent." />
              </div>
              <F0Text variant="small" content="5 steps" />
            </button>
            {/* One-shot card */}
            <button
              onClick={() => setSelectedRuleType("one-time")}
              className={`flex flex-col gap-4 rounded-xl border-2 border-solid p-5 text-left transition-all ${
                selectedRuleType === "one-time"
                  ? "border-f1-border-selected-bold bg-f1-background-secondary"
                  : "border-f1-border-secondary bg-f1-background hover:border-f1-border"
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-f1-background-positive text-lg">
                ⚡
              </div>
              <div className="flex flex-col gap-1.5">
                <F0Text variant="label" content="One-shot enrollment" />
                <F0Text variant="small" content="Immediate enrollment for people who match the criteria today. Does not repeat." />
              </div>
              <F0Text variant="small" content="4 steps" />
            </button>
          </div>
          {/* Contextual hint */}
          {selectedRuleType && (
            <F0Alert
              variant="info"
              title={
                selectedRuleType === "continuous"
                  ? "Ideal for onboarding, mandatory trainings by role or workplace, and periodic renewals."
                  : "Ideal for audits, one-off policy changes, or mass enrollments that won't repeat."
              }
              description=""
            />
          )}
        </div>
      </F0Dialog>

      {/* Creation flows */}
      {flowMode === "wizard" && selectedRuleType && (
        <CreateSmartEnrollmentDialog
          isOpen={true}
          onClose={() => { setFlowMode(null); setSelectedRuleType(null) }}
          onCreate={handleCreate}
          ruleType={selectedRuleType}
        />
      )}
      {flowMode === "fullscreen" && selectedRuleType && (
        <CreateSmartEnrollmentFullscreen
          isOpen={true}
          onClose={() => { setFlowMode(null); setSelectedRuleType(null) }}
          onCreate={handleCreate}
          ruleType={selectedRuleType}
        />
      )}

      {selectedEnrollment && (
        <EnrollmentDetailView
          enrollment={selectedEnrollment}
          onBack={() => setSelectedEnrollment(null)}
        />
      )}
    </>
  )
}

// ---------------------------------------------------------------------------
// Enrollment Detail View
// ---------------------------------------------------------------------------

type DetailTab = "summary" | "participants" | "activity"

const detailTabs: { id: DetailTab; label: string }[] = [
  { id: "summary", label: "Summary" },
  { id: "participants", label: "Participants" },
  { id: "activity", label: "Activity" },
]

function EnrollmentDetailView({
  enrollment,
  onBack,
}: {
  enrollment: EnrollmentItem
  onBack: () => void
}) {
  const [activeTab, setActiveTab] = useState<DetailTab>("summary")

  const tabsWithNav = detailTabs.map((t) => ({
    ...t,
    onClick: () => setActiveTab(t.id),
  }))

  const statusVariant = enrollment.status === "active" ? "positive" : enrollment.status === "paused" ? "warning" : "positive"

  return createPortal(
    <div className="fixed inset-0 z-[9000] flex flex-col bg-f1-background">
      <Page
        header={
          <>
            <PageHeader
              module={{ id: "company_trainings", name: "Trainings", href: "/p/trainings" }}
              breadcrumbs={[
                { id: "enrollments", label: "Enrollments" },
                { id: "detail", label: enrollment.name },
              ]}
              actions={[
                { label: "Back", icon: Person, onClick: onBack },
              ]}
            />
            <ResourceHeader
              title={enrollment.name}
              description={enrollment.subtitle}
              status={{
                label: "Status",
                text: statusTagConfig[enrollment.status].label,
                variant: statusVariant as "positive" | "warning",
              }}
              secondaryActions={[
                { label: "Pause", icon: PauseCircle, onClick: () => {}, variant: "outline" },
                { label: "Edit rule", icon: Pencil, onClick: () => {}, variant: "outline" },
              ]}
              metadata={[
                {
                  label: "Type",
                  value: { type: "dot-tag", label: typeTagConfig[enrollment.type].label, color: typeTagConfig[enrollment.type].color },
                },
                {
                  label: "Created",
                  value: { type: "text", content: "10 apr 2026" },
                },
                {
                  label: "Created by",
                  value: {
                    type: "avatar",
                    variant: { type: "person", firstName: "Ana", lastName: "Torres" },
                    text: "Ana Torres",
                  },
                },
                {
                  label: "Last updated",
                  value: { type: "text", content: "Today, 09:14" },
                },
              ]}
            />
            <Tabs
              key={activeTab}
              tabs={tabsWithNav}
              activeTabId={activeTab}
            />
          </>
        }
      >
        <StandardLayout>
          {activeTab === "summary" && <SummaryTab enrollment={enrollment} />}
          {activeTab === "participants" && <ParticipantsTab enrollment={enrollment} />}
          {activeTab === "activity" && <ActivityTab />}
        </StandardLayout>
      </Page>
    </div>,
    document.body
  )
}

// ---------------------------------------------------------------------------
// Summary Tab
// ---------------------------------------------------------------------------

function SummaryTab({ enrollment }: { enrollment: EnrollmentItem }) {
  const courses = [
    { name: "Onboarding General", subtitle: "Self-paced · 34 enrolled · 28 completed", status: "No issues", statusColor: "viridian" as const, hasAction: false },
    { name: "GDPR Europa", subtitle: "Group: June 2026 · 34 enrolled · 0 completed", status: "Pending start", statusColor: "smoke" as const, hasAction: false },
    { name: "Intercultural Communication", subtitle: "No future group · 3 waitlisted", status: "Create group ↗", statusColor: "yellow" as const, hasAction: true },
  ]

  const courseWithoutGroup = courses.find((c) => c.hasAction)

  return (
    <div className="flex flex-col gap-8">
      {/* Warning alert if a course has no group, otherwise summary */}
      {courseWithoutGroup ? (
        <F0Alert
          variant="warning"
          title={`${courseWithoutGroup.name} has no future group. 3 people are waitlisted.`}
          description=""
          action={{ label: "Create group ↗", onClick: () => {} }}
        />
      ) : (
        <div className="rounded-xl bg-f1-background-secondary p-5">
          <F0Text
            variant="body"
            content={`Dynamic rule. All employees from Workplace: Portugal + France, plus Ana Torres and Joan Cornudella, are automatically enrolled in ${enrollment.courseCount} courses. Currently covering ${enrollment.peopleCovered} people.`}
          />
        </div>
      )}

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Total covered", value: enrollment.peopleCovered },
          { label: "All completed", value: 21 },
          { label: "In progress", value: 9 },
          { label: "Not started", value: 4 },
        ].map((kpi) => (
          <div key={kpi.label} className="flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-4">
            <span className="text-xs text-f1-foreground-secondary">{kpi.label}</span>
            <span className="text-2xl font-bold text-f1-foreground">{kpi.value}</span>
          </div>
        ))}
      </div>

      {/* Courses */}
      <div className="flex flex-col gap-4">
        <F0Heading variant="heading" content="Courses" />
        <div className="px-6">
          <CoursesList courses={courses} />
        </div>
      </div>

      {/* Audience */}
      <div className="flex flex-col gap-4">
        <F0Heading variant="heading" content="Audience" />
        <div className="flex flex-wrap gap-2">
          <Chip label="Workplace: Portugal — 18 people" />
          <Chip label="Workplace: France — 14 people" />
        </div>
        <div className="flex flex-col gap-2">
          <F0Text variant="description" content="Individuals (always included)" />
          <div className="flex flex-wrap gap-2">
            <Chip label="Ana Torres" avatar={{ type: "person", firstName: "Ana", lastName: "Torres" }} />
            <Chip label="Joan Cornudella" avatar={{ type: "person", firstName: "Joan", lastName: "Cornudella" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Participants Tab — grouped by course
// ---------------------------------------------------------------------------

interface MockParticipant {
  id: string
  name: string
  team: string
  status: "completed" | "in_progress" | "not_started" | "overdue"
  progress: number
  enrolledAt: string
}

// ---------------------------------------------------------------------------
// Courses List (used in Summary tab)
// ---------------------------------------------------------------------------

type CourseItem = {
  name: string
  subtitle: string
  status: string
  statusColor: "viridian" | "smoke" | "yellow"
  hasAction: boolean
  [key: string]: unknown
}

function CoursesList({ courses }: { courses: CourseItem[] }) {
  const source = useDataCollectionSource<CourseItem>(
    {
      itemActions: (item: CourseItem) =>
        item.hasAction
          ? [{ label: "Create group ↗", onClick: () => {} }]
          : [],
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: () => ({
          type: "pages" as const,
          records: courses,
          total: courses.length,
          perPage: 10,
          currentPage: 1,
          pagesCount: 1,
        }),
      },
    },
    [courses]
  )

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        {
          type: "list",
          options: {
            itemDefinition: (item: CourseItem) => ({
              title: item.name,
              description: [item.subtitle],
            }),
            fields: [
              {
                label: "Status",
                render: (item: CourseItem) => ({
                  type: "status",
                  value: {
                    label: item.hasAction ? "No future group" : item.status,
                    status: item.statusColor === "viridian" ? "positive" : item.statusColor === "yellow" ? "warning" : "neutral",
                  },
                }),
              },
            ],
          },
        },
      ]}
    />
  )
}

// ---------------------------------------------------------------------------
const participantStatusConfig: Record<string, { label: string; color: "viridian" | "malibu" | "smoke" | "yellow" }> = {
  completed: { label: "Completed", color: "viridian" },
  in_progress: { label: "In progress", color: "malibu" },
  not_started: { label: "Not started", color: "smoke" },
  overdue: { label: "Overdue", color: "yellow" },
}

const courseParticipants: { courseName: string; courseSubtitle: string; participants: MockParticipant[] }[] = [
  {
    courseName: "Onboarding General",
    courseSubtitle: "Self-paced · 34 enrolled",
    participants: [
      { id: "p1", name: "Ana Garcia", team: "Engineering", status: "completed", progress: 100, enrolledAt: "2026-04-15" },
      { id: "p2", name: "Carlos Lopez", team: "Design", status: "completed", progress: 100, enrolledAt: "2026-04-15" },
      { id: "p3", name: "Maria Torres", team: "Product", status: "in_progress", progress: 72, enrolledAt: "2026-04-20" },
      { id: "p4", name: "Pablo Ruiz", team: "Engineering", status: "completed", progress: 100, enrolledAt: "2026-04-10" },
      { id: "p5", name: "Lucia Fernandez", team: "Support", status: "in_progress", progress: 45, enrolledAt: "2026-04-12" },
    ],
  },
  {
    courseName: "GDPR Europa",
    courseSubtitle: "Group: June 2026 · 34 enrolled",
    participants: [
      { id: "p6", name: "Ana Garcia", team: "Engineering", status: "not_started", progress: 0, enrolledAt: "2026-04-15" },
      { id: "p7", name: "Carlos Lopez", team: "Design", status: "not_started", progress: 0, enrolledAt: "2026-04-15" },
      { id: "p8", name: "Javier Martin", team: "Engineering", status: "not_started", progress: 0, enrolledAt: "2026-04-18" },
      { id: "p9", name: "Elena Sanchez", team: "Design", status: "not_started", progress: 0, enrolledAt: "2026-04-11" },
      { id: "p10", name: "David Moreno", team: "Product", status: "not_started", progress: 0, enrolledAt: "2026-04-16" },
    ],
  },
  {
    courseName: "Intercultural Communication",
    courseSubtitle: "No future group · 3 waitlisted",
    participants: [
      { id: "p11", name: "Pablo Ruiz", team: "Engineering", status: "not_started", progress: 0, enrolledAt: "2026-04-10" },
      { id: "p12", name: "Lucia Fernandez", team: "Support", status: "not_started", progress: 0, enrolledAt: "2026-04-12" },
      { id: "p13", name: "Joan Cornudella", team: "Product", status: "not_started", progress: 0, enrolledAt: "2026-05-22" },
    ],
  },
]

function ParticipantsTab({ enrollment: _enrollment }: { enrollment: EnrollmentItem }) {
  const allParticipantNames = Array.from(
    new Set(courseParticipants.flatMap((g) => g.participants.map((p) => p.name)))
  ).sort()

  const participantsFilterDef = {
    status: {
      type: "in" as const,
      label: "Status",
      options: {
        options: [
          { value: "completed", label: "Completed" },
          { value: "in_progress", label: "In progress" },
          { value: "not_started", label: "Not started" },
          { value: "overdue", label: "Overdue" },
        ],
      },
    },
    participant: {
      type: "in" as const,
      label: "Participant",
      options: {
        options: allParticipantNames.map((name) => ({ value: name, label: name })),
      },
    },
  } satisfies FiltersDefinition

  const [filters, setFilters] = useState<FiltersState<typeof participantsFilterDef>>({})

  const filteredGroups = courseParticipants.map((group) => ({
    ...group,
    participants: group.participants.filter((p) => {
      const statusFilter = filters.status as string[] | undefined
      const participantFilter = filters.participant as string[] | undefined
      if (statusFilter && statusFilter.length > 0 && !statusFilter.includes(p.status)) return false
      if (participantFilter && participantFilter.length > 0 && !participantFilter.includes(p.name)) return false
      return true
    }),
  })).filter((g) => g.participants.length > 0)

  const totalParticipants = filteredGroups.reduce((acc, g) => acc + g.participants.length, 0)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <F0Heading variant="heading" content="Participants" />
        <F0Text variant="small" content={`${totalParticipants} assignments across ${filteredGroups.length} courses`} />
      </div>

      {/* Filters */}
      <OneFilterPicker
        filters={participantsFilterDef}
        value={filters}
        onChange={setFilters}
      />

      {filteredGroups.map((group) => (
        <div key={group.courseName} className="flex flex-col gap-3">
          {/* Group header */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-f1-background-tertiary text-sm">
              📚
            </div>
            <div className="flex flex-col">
              <F0Text variant="label" content={group.courseName} />
              <F0Text variant="small" content={group.courseSubtitle} />
            </div>
          </div>

          {/* Participants table */}
          <div className="overflow-hidden rounded-lg border border-solid border-f1-border-secondary">
            <table className="w-full">
              <thead>
                <tr className="border-b border-solid border-f1-border-secondary bg-f1-background-secondary">
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-f1-foreground-secondary">Employee</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-f1-foreground-secondary">Team</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-f1-foreground-secondary">Status</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-f1-foreground-secondary">Progress</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-f1-foreground-secondary">Enrolled</th>
                </tr>
              </thead>
              <tbody>
                {group.participants.map((p) => {
                  const config = participantStatusConfig[p.status]
                  return (
                    <tr key={p.id} className="border-b border-solid border-f1-border-secondary last:border-b-0">
                      <td className="px-4 py-2.5">
                        <span className="text-sm font-medium text-f1-foreground">{p.name}</span>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="text-sm text-f1-foreground-secondary">{p.team}</span>
                      </td>
                      <td className="px-4 py-2.5">
                        {config && <F0TagDot text={config.label} color={config.color} />}
                      </td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-f1-background-tertiary">
                            <div
                              className={`h-full rounded-full ${p.status === "overdue" ? "bg-f1-foreground-critical" : "bg-f1-foreground-positive"}`}
                              style={{ width: `${p.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-f1-foreground-secondary">{p.progress}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="text-xs text-f1-foreground-secondary">{p.enrolledAt}</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Activity Tab
// ---------------------------------------------------------------------------

const mockActivity = [
  { id: "a1", action: "Rule activated", user: "Ana Torres", date: "10 apr 2026, 14:30", icon: "🟢" },
  { id: "a2", action: "3 new employees matched and enrolled", user: "System", date: "15 apr 2026, 09:00", icon: "👤" },
  { id: "a3", action: "Course 'Intercultural Communication' flagged — no future group", user: "System", date: "18 apr 2026, 11:20", icon: "⚠️" },
  { id: "a4", action: "2 new employees matched and enrolled", user: "System", date: "20 apr 2026, 09:00", icon: "👤" },
  { id: "a5", action: "Rule edited — added France to workplace criteria", user: "Ana Torres", date: "22 apr 2026, 16:45", icon: "✏️" },
  { id: "a6", action: "5 new employees matched and enrolled", user: "System", date: "25 apr 2026, 09:00", icon: "👤" },
]

function ActivityTab() {
  return (
    <div className="flex flex-col gap-4">
      <F0Heading variant="heading" content="Activity" />
      <div className="flex flex-col">
        {mockActivity.map((item, idx) => (
          <div key={item.id} className="flex gap-4">
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-solid border-f1-border-secondary bg-f1-background text-sm">
                {item.icon}
              </span>
              {idx < mockActivity.length - 1 && (
                <div className="w-px flex-1 bg-f1-border-secondary" />
              )}
            </div>
            {/* Content */}
            <div className="flex flex-col gap-0.5 pb-6">
              <span className="text-sm font-medium text-f1-foreground">{item.action}</span>
              <span className="text-xs text-f1-foreground-secondary">{item.user} · {item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
