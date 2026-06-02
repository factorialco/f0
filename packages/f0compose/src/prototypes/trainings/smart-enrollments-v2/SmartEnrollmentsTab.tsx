import { useRef, useState } from "react"
import {

  F0Text,
  F0Alert,
  F0TagAlert,
  F0TagRaw,
  F0TagPerson,
  F0Dialog,
  StandardLayout,
} from "@factorialco/f0-react"
import {
  ActivityItemList,
  DetailsItemsList,
  Input,
  OneDataCollection,
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { BookOpen, CheckCircle, PauseCircle, Pencil, People, Person } from "@factorialco/f0-react/icons/app"
import { createPortal } from "react-dom"

import { OneCreateView } from "./OneCreateView"

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

const statusTagConfig: Record<EnrollmentStatus, { label: string; status: "positive" | "warning" | "neutral" | "info" | "critical" }> = {
  active: { label: "Active", status: "positive" },
  paused: { label: "Paused", status: "warning" },
  executed: { label: "Executed", status: "positive" },
}

// ---------------------------------------------------------------------------
// Seed data
// ---------------------------------------------------------------------------

const DYNAMIC_ENROLLMENTS: EnrollmentItem[] = [
  { id: "enr-1", name: "Onboarding CX Europa", subtitle: "Workplace: Portugal + France + 2 individuals · Created 15 mar", type: "dynamic", status: "active", peopleCovered: 34, courseCount: 3, hasWarning: true },
  { id: "enr-2", name: "Onboarding — new hires", subtitle: "All employees · Created 10 apr", type: "dynamic", status: "active", peopleCovered: 128, courseCount: 5 },
  { id: "enr-3", name: "PRL — annual renewal", subtitle: "All employees · Created 5 jan · Renews every 12 months", type: "dynamic", status: "active", peopleCovered: 400, courseCount: 1 },
  { id: "enr-4", name: "Managers — leadership track", subtitle: "Role: Manager · Created 22 feb · Paused 3 days ago", type: "dynamic", status: "paused", peopleCovered: 12, courseCount: 2 },
  { id: "enr-5d", name: "GDPR — all EU offices", subtitle: "Workplace: EU offices · Created 8 feb", type: "dynamic", status: "active", peopleCovered: 220, courseCount: 2 },
  { id: "enr-6d", name: "Remote workers — security basics", subtitle: "Work model: Remote · Created 12 mar", type: "dynamic", status: "active", peopleCovered: 85, courseCount: 3 },
  { id: "enr-7d", name: "Sales enablement — Q2", subtitle: "Department: Sales · Created 1 apr", type: "dynamic", status: "active", peopleCovered: 52, courseCount: 4 },
  { id: "enr-8d", name: "Engineering — code of conduct", subtitle: "Department: Engineering · Created 20 jan", type: "dynamic", status: "active", peopleCovered: 145, courseCount: 1 },
  { id: "enr-9d", name: "Customer support — product updates", subtitle: "Department: Support · Created 5 mar", type: "dynamic", status: "paused", peopleCovered: 38, courseCount: 2 },
  { id: "enr-10d", name: "Finance — anti-fraud training", subtitle: "Department: Finance · Created 18 feb", type: "dynamic", status: "active", peopleCovered: 22, courseCount: 1 },
]

const ONESHOT_HISTORY: EnrollmentItem[] = [
  { id: "enr-5", name: "Compliance audit Q2 — Sales", subtitle: "Executed 20 may · Sales team · 47 people enrolled in 2 courses", type: "one-shot", status: "executed", peopleCovered: 47, courseCount: 2, section: "past" },
  { id: "enr-6", name: "GDPR update — all staff", subtitle: "Executed 2 jan · All employees · 400 people enrolled in 1 course", type: "one-shot", status: "executed", peopleCovered: 400, courseCount: 1, section: "past" },
  { id: "enr-7", name: "Fire safety refresher — Barcelona office", subtitle: "Executed 15 nov 2025 · Workplace: Barcelona · 62 people enrolled in 1 course", type: "one-shot", status: "executed", peopleCovered: 62, courseCount: 1, section: "past" },
]

// ---------------------------------------------------------------------------
// Main Tab Component
// ---------------------------------------------------------------------------

export function SmartEnrollmentsTab({ onStartCreate }: { onStartCreate?: () => void }) {
  const [showOneCreate, setShowOneCreate] = useState(false)
  const [selectedEnrollment, setSelectedEnrollment] = useState<EnrollmentItem | null>(null)
  const [dynamicRules, setDynamicRules] = useState<EnrollmentItem[]>(DYNAMIC_ENROLLMENTS)
  const [oneShotPanel, setOneShotPanel] = useState<EnrollmentItem | null>(null)

  const source = useDataCollectionSource<EnrollmentItem>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "paused", label: "Paused" },
            ],
          },
        },
      },
      primaryActions: () => ({
        label: "+ New",
        icon: undefined,
        onClick: () => { if (onStartCreate) onStartCreate(); else setShowOneCreate(true) },
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
          const statusFilter = Array.isArray(filters?.status) ? (filters.status as string[]) : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = dynamicRules
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
    [dynamicRules]
  )

  const oneShotSource = useDataCollectionSource<EnrollmentItem>(
    {
      itemOnClick: (item: EnrollmentItem) => () => setOneShotPanel(item),
      grouping: {
        mandatory: true,
        collapsible: true,
        hideSelector: true,
        groupBy: {
          section: {
            name: "Section",
            label: () => "Past one-time assignments",
            itemCount: () => ONESHOT_HISTORY.length,
          },
        },
      },
      currentGrouping: {
        field: "section",
        order: "asc",
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters: _f, search }) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = ONESHOT_HISTORY.filter(
            (e) => term === "" || e.name.toLowerCase().includes(term) || e.subtitle.toLowerCase().includes(term)
          )
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

  return (
    <>
      {showOneCreate && (
        <OneCreateView
          onClose={() => {
            setDynamicRules((prev) => [
              { id: `enr-new-${Date.now()}`, name: "Spain offices — PRL + RGPD", subtitle: "Workplace: Barcelona + Madrid · Created just now", type: "dynamic", status: "active", peopleCovered: 87, courseCount: 2 },
              ...prev,
            ])
            setShowOneCreate(false)
          }}
          onSubmit={() => { /* stays open, handled internally */ }}
        />
      )}
      {!showOneCreate && (<>
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

      {/* Past one-time assignments — grouped & collapsible */}
      <div className="px-6 pt-8">
          <OneDataCollection
            source={oneShotSource}
            visualizations={[
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

      {/* One-shot detail side panel */}
      <F0Dialog
        isOpen={oneShotPanel !== null}
        onClose={() => setOneShotPanel(null)}
        title={oneShotPanel?.name ?? ""}
        position="right"
        width="md"
      >
        {oneShotPanel && <OneShotPanelContent item={oneShotPanel} />}
      </F0Dialog>

      {selectedEnrollment && (
        <EnrollmentDetailView
          enrollment={selectedEnrollment}
          onBack={() => setSelectedEnrollment(null)}
        />
      )}
      </> /* end !showOneCreate */
      )}
    </>
  )
}

// ---------------------------------------------------------------------------
// Enrollment Detail View
// ---------------------------------------------------------------------------

type DetailTab = "participants" | "activity"

const detailTabs: { id: DetailTab; label: string }[] = [
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
  const [activeTab, setActiveTab] = useState<DetailTab>("participants")
  const [editing, setEditing] = useState(false)
  const [pauseDialogOpen, setPauseDialogOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const tabsWithNav = detailTabs.map((t) => ({
    ...t,
    onClick: () => setActiveTab(t.id),
  }))

  const statusVariant = enrollment.status === "active" ? "positive" : enrollment.status === "paused" ? "warning" : "positive"

  if (editing) {
    return <OneCreateView onClose={() => setEditing(false)} onSubmit={() => setEditing(false)} mode="edit" />
  }

  return (
    <>
      {createPortal(
        <div ref={containerRef} className="fixed inset-0 z-[9000] flex flex-col bg-f1-background">
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
              status={{
                label: "Status",
                text: statusTagConfig[enrollment.status].label,
                variant: statusVariant as "positive" | "warning",
              }}
              secondaryActions={[
                { label: "Pause", icon: PauseCircle, onClick: () => setPauseDialogOpen(true), variant: "outline" },
                { label: "Edit rule", icon: Pencil, onClick: () => setEditing(true), variant: "outline" },
              ]}
              metadata={[
                {
                  label: "Criteria",
                  value: { type: "tag-list", tags: ["Spain", "Engineering", "Full-time", "Senior", "Remote", "Product"] },
                },
                {
                  label: "Courses",
                  value: { type: "data-list", data: ["Onboarding General", "GDPR Europa", "Intercultural Communication"] },
                },
                {
                  label: "Employees",
                  value: {
                    type: "list",
                    variant: "person",
                    avatars: [
                      { type: "person", firstName: "Ana", lastName: "Garcia" },
                      { type: "person", firstName: "Carlos", lastName: "Lopez" },
                      { type: "person", firstName: "Maria", lastName: "Torres" },
                      { type: "person", firstName: "Pablo", lastName: "Ruiz" },
                      { type: "person", firstName: "Lucia", lastName: "Fernandez" },
                    ],
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
          {activeTab === "participants" && <ParticipantsTab enrollment={enrollment} />}
          {activeTab === "activity" && <ActivityTab />}
        </StandardLayout>
      </Page>
      {pauseDialogOpen && (
        <F0Dialog
          isOpen={true}
          onClose={() => setPauseDialogOpen(false)}
          title="Pause enrollment rule"
          width="sm"
          primaryAction={{ label: "Pause rule", onClick: () => setPauseDialogOpen(false) }}
          secondaryAction={{ label: "Cancel", onClick: () => setPauseDialogOpen(false) }}
          container={containerRef.current}
        >
          <F0Text variant="body" content="Employees that match this rule from now on will not be assigned to the configured courses until the rule is reactivated." />
        </F0Dialog>
      )}
        </div>,
        document.body
      )}
    </>
  )
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Participants Tab — grouped by course using OneDataCollection
// ---------------------------------------------------------------------------

interface MockParticipant {
  id: string
  name: string
  team: string
  course: string
  status: "completed" | "in_progress" | "not_started" | "overdue"
  progress: number
  enrolledAt: string
  [key: string]: unknown
}

const participantStatusConfig: Record<string, { label: string; status: "positive" | "warning" | "neutral" }> = {
  completed: { label: "Completed", status: "positive" },
  in_progress: { label: "In progress", status: "neutral" },
  not_started: { label: "Not started", status: "neutral" },
  overdue: { label: "Overdue", status: "warning" },
}

const allParticipants: MockParticipant[] = [
  { id: "p1", name: "Ana Garcia", team: "Engineering", course: "Onboarding General", status: "completed", progress: 100, enrolledAt: "2026-04-15" },
  { id: "p2", name: "Carlos Lopez", team: "Design", course: "Onboarding General", status: "completed", progress: 100, enrolledAt: "2026-04-15" },
  { id: "p3", name: "Maria Torres", team: "Product", course: "Onboarding General", status: "in_progress", progress: 72, enrolledAt: "2026-04-20" },
  { id: "p4", name: "Pablo Ruiz", team: "Engineering", course: "Onboarding General", status: "completed", progress: 100, enrolledAt: "2026-04-10" },
  { id: "p5", name: "Lucia Fernandez", team: "Support", course: "Onboarding General", status: "in_progress", progress: 45, enrolledAt: "2026-04-12" },
  { id: "p6", name: "Ana Garcia", team: "Engineering", course: "GDPR Europa", status: "not_started", progress: 0, enrolledAt: "2026-04-15" },
  { id: "p7", name: "Carlos Lopez", team: "Design", course: "GDPR Europa", status: "not_started", progress: 0, enrolledAt: "2026-04-15" },
  { id: "p8", name: "Javier Martin", team: "Engineering", course: "GDPR Europa", status: "not_started", progress: 0, enrolledAt: "2026-04-18" },
  { id: "p9", name: "Elena Sanchez", team: "Design", course: "GDPR Europa", status: "not_started", progress: 0, enrolledAt: "2026-04-11" },
  { id: "p10", name: "David Moreno", team: "Product", course: "GDPR Europa", status: "not_started", progress: 0, enrolledAt: "2026-04-16" },
  { id: "p11", name: "Pablo Ruiz", team: "Engineering", course: "Intercultural Communication", status: "not_started", progress: 0, enrolledAt: "2026-04-10" },
  { id: "p12", name: "Lucia Fernandez", team: "Support", course: "Intercultural Communication", status: "not_started", progress: 0, enrolledAt: "2026-04-12" },
  { id: "p13", name: "Joan Cornudella", team: "Product", course: "Intercultural Communication", status: "overdue", progress: 0, enrolledAt: "2026-05-22" },
]

function ParticipantsTab(_props: { enrollment: EnrollmentItem }) {
  const [showCreateGroup, setShowCreateGroup] = useState<string | null>(null)
  const [groupName, setGroupName] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [session, setSession] = useState("")
  const [resolvedCourses, setResolvedCourses] = useState<string[]>([])

  const completed = allParticipants.filter((p) => p.status === "completed").length
  const inProgress = allParticipants.filter((p) => p.status === "in_progress").length
  const notStarted = allParticipants.filter((p) => p.status === "not_started").length
  const overdue = allParticipants.filter((p) => p.status === "overdue").length

  // Waitlist data — courses with people waiting because no group available
  const waitlistCourses = [
    { course: "Intercultural Communication", waitlistCount: 3, reason: "No upcoming group scheduled" },
  ].filter((wl) => !resolvedCourses.includes(wl.course))

  const handleCreateGroup = () => {
    if (showCreateGroup) {
      setResolvedCourses((prev) => [...prev, showCreateGroup])
    }
    setShowCreateGroup(null)
    setGroupName("")
    setStartDate("")
    setEndDate("")
    setSession("")
  }

  const source = useDataCollectionSource<MockParticipant>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
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
      },
      grouping: {
        mandatory: true,
        collapsible: true,
        groupBy: {
          course: {
            name: "Course",
            label: (groupId) => groupId as string,
            itemCount: (groupId) => allParticipants.filter((p) => p.course === (groupId as string)).length,
          },
        },
      },
      currentGrouping: {
        field: "course",
        order: "asc",
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 50,
        fetchData: ({ filters, search }) => {
          const statusFilter = Array.isArray(filters?.status) ? (filters.status as string[]) : []
          const term = (search ?? "").toLowerCase().trim()

          let filtered = allParticipants
          if (statusFilter.length > 0) {
            filtered = filtered.filter((p) => statusFilter.includes(p.status))
          }
          if (term) {
            filtered = filtered.filter((p) => p.name.toLowerCase().includes(term) || p.team.toLowerCase().includes(term))
          }

          return {
            type: "pages" as const,
            records: filtered,
            total: filtered.length,
            perPage: 50,
            currentPage: 1,
            pagesCount: 1,
          }
        },
      },
    },
    []
  )

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Urgent: Waitlist alert */}
      {waitlistCourses.length > 0 && (
        <div className="flex flex-col gap-3">
          {waitlistCourses.map((wl) => (
            <F0Alert
              key={wl.course}
              title={`${wl.waitlistCount} people in waitlist for "${wl.course}"`}
              description={`${wl.reason}. These employees matched the rule but can't be enrolled until a group is available.`}
              variant="warning"
              action={{ label: "Create group", onClick: () => setShowCreateGroup(wl.course) }}
            />
          ))}
        </div>
      )}

      {/* Create group dialog — rendered in a high z-index portal to escape the detail view stacking context */}
      {showCreateGroup !== null && createPortal(
        <div className="relative z-[9999]">
          <F0Dialog
            isOpen={true}
            onClose={() => setShowCreateGroup(null)}
            title={`Create group for "${showCreateGroup}"`}
            width="md"
            primaryAction={{ label: "Create and assign", onClick: handleCreateGroup }}
            secondaryAction={{ label: "Cancel", onClick: () => setShowCreateGroup(null) }}
          >
            <div className="flex flex-col gap-4">
              <F0Text variant="body" content={`${waitlistCourses.find((w) => w.course === showCreateGroup)?.waitlistCount ?? 3} participants will be automatically assigned to this group.`} />
              <Input label="Group name" value={groupName} onChange={setGroupName} placeholder="e.g. June 2026 cohort" />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Start date" value={startDate} onChange={setStartDate} placeholder="DD/MM/YYYY" />
                <Input label="End date" value={endDate} onChange={setEndDate} placeholder="DD/MM/YYYY" />
              </div>
              <Input label="Session" value={session} onChange={setSession} placeholder="e.g. Online, Room 3B" />
            </div>
          </F0Dialog>
        </div>,
        document.body
      )}
      {/* 2. Rule summary — compact inline */}
      <div className="flex flex-col gap-3">
        <F0Text variant="label" content="Rule summary" />
        <div className="flex flex-col gap-3 rounded-lg border border-solid border-f1-border-secondary p-4">
        {/* Criteria row */}
        <div className="flex items-center gap-3">
          <span className="w-24 shrink-0 text-f1-foreground-secondary">Criteria</span>
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <F0TagRaw text="Workplace: Portugal" />
            <F0TagRaw text="Workplace: France" />
            <span className="text-xs text-f1-foreground-secondary">+</span>
            <F0TagPerson name="Ana Torres" />
            <F0TagPerson name="Joan Cornudella" />
          </div>
          <span className="shrink-0 rounded-md border border-solid border-f1-border-secondary px-2 py-1 text-sm font-semibold text-f1-foreground">34 people</span>
        </div>
        {/* Courses row */}
        <div className="flex items-center gap-3">
          <span className="w-24 shrink-0 text-f1-foreground-secondary">Courses</span>
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <F0TagRaw text="Onboarding General" />
            <F0TagRaw text="GDPR Europa" />
            <F0TagAlert text="Intercultural Comm." level="warning" />
          </div>
        </div>
        {/* Behavior row */}
        <div className="flex items-center gap-3">
          <span className="w-24 shrink-0 text-f1-foreground-secondary">Behavior</span>
          <div className="flex flex-1 items-center">
            <span className="font-medium text-f1-foreground">New hires only · 8 existing people won't be enrolled</span>
          </div>
        </div>
        </div>
      </div>

      {/* 3. KPIs */}
      {(() => {
        const total = completed + inProgress + notStarted + overdue + waitlistCourses.reduce((sum, w) => sum + w.waitlistCount, 0)
        const waitlisted = waitlistCourses.reduce((sum, w) => sum + w.waitlistCount, 0)
        const kpis = [
          { label: "Completed", value: completed, dotColor: "bg-f1-foreground-positive", isWarning: false },
          { label: "In progress", value: inProgress, dotColor: "bg-f1-foreground-info", isWarning: false },
          { label: "Not started", value: notStarted, dotColor: "bg-f1-foreground-secondary", isWarning: false },
          { label: "Waitlisted", value: waitlisted, dotColor: "", isWarning: true },
        ]
        return (
          <div className="grid grid-cols-4 gap-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="flex flex-col gap-2 rounded-lg border border-solid border-f1-border-secondary p-4 shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {kpi.isWarning ? (
                      <span className="text-f1-foreground-warning">⚠</span>
                    ) : (
                      <span className={`inline-block h-2 w-2 rounded-full ${kpi.dotColor}`} />
                    )}
                    <span className="text-sm text-f1-foreground">{kpi.label}</span>
                  </div>
                </div>
                <span className="text-3xl font-bold text-f1-foreground">{kpi.value}</span>
                <span className="text-xs text-f1-foreground-secondary">{total > 0 ? `${Math.round((kpi.value / total) * 100)}% of ${total}` : "—"}</span>
              </div>
            ))}
          </div>
        )
      })()}

      {/* 4. Data collection grouped by course */}
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Employee",
                  render: (item: MockParticipant) => ({
                    type: "person",
                    value: { firstName: item.name.split(" ")[0], lastName: item.name.split(" ")[1] ?? "" },
                  }),
                },
                {
                  label: "Team",
                  render: (item: MockParticipant) => item.team,
                },
                {
                  label: "Status",
                  render: (item: MockParticipant) => {
                    const config = participantStatusConfig[item.status]
                    return {
                      type: "status" as const,
                      value: {
                        label: config?.label ?? item.status,
                        status: config?.status ?? "neutral",
                      },
                    }
                  },
                },
                {
                  label: "Progress",
                  render: (item: MockParticipant) => `${item.progress}%`,
                },
                {
                  label: "Enrolled",
                  render: (item: MockParticipant) => item.enrolledAt,
                },
              ],
            },
          },
        ]}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Activity Tab
// ---------------------------------------------------------------------------

const mockActivity = [
  { id: "a1", title: "Rule activated", category: "Enrollment", icon: CheckCircle, createdAt: new Date("2026-04-10T14:30:00"), description: "Ana Torres activated this enrollment rule" },
  { id: "a2", title: "3 new employees matched and enrolled", category: "System", icon: People, createdAt: new Date("2026-04-15T09:00:00") },
  { id: "a3", title: "Course 'Intercultural Communication' flagged — no future group", category: "System", icon: BookOpen, createdAt: new Date("2026-04-18T11:20:00"), isUnread: true },
  { id: "a4", title: "2 new employees matched and enrolled", category: "System", icon: People, createdAt: new Date("2026-04-20T09:00:00") },
  { id: "a5", title: "Rule edited — added France to workplace criteria", category: "Enrollment", icon: Pencil, createdAt: new Date("2026-04-22T16:45:00"), description: "Ana Torres edited the rule criteria" },
  { id: "a6", title: "5 new employees matched and enrolled", category: "System", icon: People, createdAt: new Date("2026-04-25T09:00:00"), isUnread: true },
]

function ActivityTab() {
  return (
    <div className="flex flex-col gap-4">
      <ActivityItemList
        items={mockActivity}
        onClickItem={() => {}}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// One-shot detail side panel content
// ---------------------------------------------------------------------------

const oneShotDetails: Record<string, { executed: string; audience: string; people: number; courses: string[]; completed: number; inProgress: number; notStarted: number }> = {
  "enr-5": { executed: "20 may 2026", audience: "Sales team", people: 47, courses: ["Ethics & compliance", "Compliance Q2"], completed: 31, inProgress: 10, notStarted: 6 },
  "enr-6": { executed: "2 jan 2026", audience: "All employees", people: 400, courses: ["GDPR update 2026"], completed: 352, inProgress: 30, notStarted: 18 },
  "enr-7": { executed: "15 nov 2025", audience: "Workplace: Barcelona", people: 62, courses: ["Fire safety refresher"], completed: 58, inProgress: 3, notStarted: 1 },
}

function OneShotPanelContent({ item }: { item: EnrollmentItem }) {
  const details = oneShotDetails[item.id] ?? { executed: "Unknown", audience: "Unknown", people: 0, courses: [], completed: 0, inProgress: 0, notStarted: 0 }
  const total = details.completed + details.inProgress + details.notStarted
  const pctCompleted = total > 0 ? Math.round((details.completed / total) * 100) : 0
  const pctInProgress = total > 0 ? Math.round((details.inProgress / total) * 100) : 0

  return (
    <div className="flex flex-col gap-6">
      {/* Details section using DetailsItemsList */}
      <DetailsItemsList
        title="Details"
        tableView
        details={[
          {
            title: "Executed",
            content: { type: "item", text: details.executed },
          },
          {
            title: "Audience",
            content: { type: "item", text: `${details.audience} · ${details.people} people` },
          },
          {
            title: "Courses",
            content: {
              type: "tag-list",
              tagList: {
                type: "raw",
                tags: details.courses.map((c) => ({ text: c })),
              },
            },
          },
          {
            title: "Status",
            content: { type: "status-tag", text: "Executed", variant: "positive" },
          },
        ]}
      />

      {/* KPIs — same style as rule detail */}
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-2 rounded-lg border border-solid border-f1-border-secondary p-4 shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-f1-background-positive" />
            <span className="text-xs text-f1-foreground-secondary">Completed</span>
          </div>
          <span className="text-2xl font-semibold text-f1-foreground">{details.completed}</span>
          <span className="text-xs text-f1-foreground-secondary">{pctCompleted}% of {total}</span>
        </div>
        <div className="flex flex-col gap-2 rounded-lg border border-solid border-f1-border-secondary p-4 shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-f1-background-info" />
            <span className="text-xs text-f1-foreground-secondary">In progress</span>
          </div>
          <span className="text-2xl font-semibold text-f1-foreground">{details.inProgress}</span>
          <span className="text-xs text-f1-foreground-secondary">{pctInProgress}% of {total}</span>
        </div>
        <div className="flex flex-col gap-2 rounded-lg border border-solid border-f1-border-secondary p-4 shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-f1-border-secondary" />
            <span className="text-xs text-f1-foreground-secondary">Not started</span>
          </div>
          <span className="text-2xl font-semibold text-f1-foreground">{details.notStarted}</span>
          <span className="text-xs text-f1-foreground-secondary">{total > 0 ? Math.round((details.notStarted / total) * 100) : 0}% of {total}</span>
        </div>
      </div>

      {/* Info + action */}
      <F0Alert
        variant="info"
        title="View participant details"
        description="To see individual participant status and certificates, go to the course detail."
        action={{ label: "View in course", onClick: () => {} }}
      />
    </div>
  )
}
