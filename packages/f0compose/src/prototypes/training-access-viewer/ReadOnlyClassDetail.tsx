import { F0Alert, F0Box, F0Button, F0Card, F0Heading, F0Text } from "@factorialco/f0-react"
import {
  OneDataCollection,
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { DottedCircle, Laptop, Office } from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"

import {
  certificatesForTraining,
  filesForTraining,
  findEmployee,
  sessionsForClass,
  type ParticipantStatus,
  type Training,
  type TrainingClass,
  type TrainingFile,
  type TrainingSession,
} from "@/fixtures"
import { applySort } from "@/lib/applySort"

import { PageContent } from "../trainings/_shared/PageContent"

type Props = {
  training: Training
  classId: string
  baseHref: string
  trainingHref: string
}

type ClassTabId = "sessions" | "participants" | "materials" | "documents" | "costs"

type Modality = "onsite" | "virtual" | "hybrid"

const CLASS_TABS: Array<{ id: ClassTabId; label: string }> = [
  { id: "sessions", label: "Sessions" },
  { id: "participants", label: "Participants" },
  { id: "materials", label: "Materials" },
  { id: "documents", label: "Documents" },
  { id: "costs", label: "Costs" },
]

const VALID_CTABS = new Set<string>(CLASS_TABS.map((tab) => tab.id))

const currencyFmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
})

const MODE_TO_MODALITY: Record<TrainingSession["mode"], Modality> = {
  in_person: "onsite",
  online: "virtual",
  hybrid: "hybrid",
}

const MODALITY_LABEL: Record<Modality, string> = {
  onsite: "Onsite",
  virtual: "Virtual",
  hybrid: "Hybrid",
}

const MODALITY_ICON: Record<Modality, typeof Office> = {
  onsite: Office,
  virtual: Laptop,
  hybrid: DottedCircle,
}

const PARTICIPANT_STATUS_LABEL: Record<ParticipantStatus, string> = {
  completed: "Completed",
  in_progress: "In progress",
  not_started: "Enrolled",
  expired: "Expired",
}

const PARTICIPANT_STATUS_VARIANT: Record<
  ParticipantStatus,
  "neutral" | "positive" | "warning" | "critical"
> = {
  completed: "positive",
  in_progress: "warning",
  not_started: "neutral",
  expired: "critical",
}

const FILE_ICON_BY_TYPE: Record<TrainingFile["type"], string> = {
  pdf: "📄",
  video: "🎬",
  doc: "📝",
  link: "🔗",
  image: "🖼️",
  scorm: "📦",
}

function formatLongDate(iso: string | null): string {
  if (!iso) return "-"
  const [year, month, day] = iso.split("-").map(Number)
  const date = year && month && day ? new Date(year, month - 1, day) : new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function formatSessionDate(session: TrainingSession): string {
  const start = new Date(session.startsAt)
  const end = new Date(session.endsAt)
  const day = start.getDate()
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th"
  const month = start.toLocaleString("en-GB", { month: "short" })
  const startTime = start.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
  const endTime = end.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
  const hours = Math.floor(session.durationMinutes / 60)
  const minutes = session.durationMinutes % 60
  return `${day}${suffix} ${month}, ${startTime} - ${endTime} (${hours}h ${minutes}m)`
}

export function ReadOnlyClassDetail({
  training,
  classId,
  baseHref,
  trainingHref,
}: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const klass = training.classes.find((item) => item.id === classId)
  const rawTab = searchParams.get("ctab")
  const activeTab: ClassTabId =
    rawTab && VALID_CTABS.has(rawTab) ? (rawTab as ClassTabId) : "sessions"

  const setTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    next.set("ctab", id)
    setSearchParams(next)
  }

  const tabsWithNav = CLASS_TABS.map((tab) => ({
    ...tab,
    onClick: () => setTab(tab.id),
  }))

  if (!klass) {
    return (
      <Page
        header={
          <PageHeader
            module={{ id: "company_trainings", name: "Training", href: baseHref }}
            breadcrumbs={[
              { id: "courses", label: "Courses", href: baseHref },
              { id: training.id, label: training.name, href: trainingHref },
              { id: "missing", label: "Group not found" },
            ]}
          />
        }
      >
        <PageContent>
          <F0Alert
            variant="warning"
            title="Group not found"
            description="This shared training does not contain the selected group."
          />
        </PageContent>
      </Page>
    )
  }

  const participantAvatars = klass.participants.map((participant) => ({
    firstName: participant.firstName,
    lastName: participant.lastName,
    src: participant.src,
    type: "person" as const,
  }))

  const seenInstructorIds = new Set<string>()
  const instructorAvatars = sessionsForClass(klass.id)
    .flatMap((session) => session.instructorIds)
    .filter((id) => {
      if (seenInstructorIds.has(id)) return false
      seenInstructorIds.add(id)
      return true
    })
    .map((id) => findEmployee(id))
    .filter((employee): employee is NonNullable<typeof employee> => Boolean(employee))
    .map((employee) => {
      const [firstName, ...lastNameParts] = employee.fullName.split(" ")
      return {
        firstName: firstName ?? "",
        lastName: lastNameParts.join(" "),
        src: employee.avatarUrl,
        type: "person" as const,
      }
    })

  const trainingBudget =
    training.totalCost > 0 ? currencyFmt.format(training.totalCost) : null

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{ id: "company_trainings", name: "Training", href: baseHref }}
            breadcrumbs={[
              { id: "courses", label: "Courses", href: baseHref },
              { id: training.id, label: training.name, href: trainingHref },
              { id: klass.id, label: klass.name },
            ]}
          />
          <ResourceHeader
            title={klass.name}
            description={training.description}
            metadata={[
              {
                label: "Access",
                value: { type: "status", label: "Can view", variant: "info" },
              },
              {
                label: "Start date",
                value: { type: "text", content: formatLongDate(klass.startDate) },
              },
              {
                label: "End date",
                value: { type: "text", content: formatLongDate(klass.endDate) },
              },
              {
                label: "Participants",
                value: {
                  type: "list",
                  variant: "person",
                  avatars: participantAvatars,
                },
              },
              {
                label: "Instructors",
                value: {
                  type: "list",
                  variant: "person",
                  avatars: instructorAvatars,
                },
              },
              ...(trainingBudget
                ? [
                    {
                      label: "Training budget",
                      value: { type: "text" as const, content: trainingBudget },
                    },
                  ]
                : []),
            ]}
          />
          <Tabs key={activeTab} tabs={tabsWithNav} activeTabId={activeTab} />
        </>
      }
    >
      <PageContent>
        {activeTab === "sessions" && <ReadOnlySessionsTab klass={klass} />}
        {activeTab === "participants" && <ReadOnlyClassParticipantsTab klass={klass} />}
        {activeTab === "materials" && <ReadOnlyClassMaterialsTab training={training} />}
        {activeTab === "documents" && (
          <ReadOnlyClassDocumentsTab training={training} klass={klass} />
        )}
        {activeTab === "costs" && <ReadOnlyClassCostsTab training={training} klass={klass} />}
      </PageContent>
    </Page>
  )
}

function ReadOnlySessionsTab({ klass }: { klass: TrainingClass }) {
  const source = useDataCollectionSource<TrainingSession>(
    {
      search: { enabled: true, sync: false },
      sortings: {
        name: { label: "Session" },
        startsAt: { label: "Date" },
      },
      filters: {
        modality: {
          type: "in",
          label: "Modality",
          options: {
            options: [
              { value: "onsite", label: "Onsite" },
              { value: "virtual", label: "Virtual" },
              { value: "hybrid", label: "Hybrid" },
            ],
          },
        },
      },
      dataAdapter: {
        fetchData: ({ filters, search, sortings }) => {
          const modalityFilter = Array.isArray(filters?.modality)
            ? (filters.modality as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()
          const filtered = sessionsForClass(klass.id)
            .filter((session) => {
              if (modalityFilter.length === 0) return true
              return modalityFilter.includes(MODE_TO_MODALITY[session.mode])
            })
            .filter((session) =>
              term === "" ? true : session.title.toLowerCase().includes(term)
            )
          const sorted = applySort(filtered, sortings, (session, field) => {
            if (field === "name") return session.title.toLowerCase()
            if (field === "startsAt") return session.startsAt
            return null
          })

          return { records: sorted, totalCount: sorted.length }
        },
      },
    },
    [klass.id]
  )

  return (
    <OneDataCollection
      id={`training-access-viewer/sessions/${klass.id}/v1`}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            frozenColumns: 1,
            columns: [
              {
                id: "session",
                label: "Session",
                sorting: "name",
                render: (item: TrainingSession) => ({
                  type: "text" as const,
                  value: item.title,
                }),
              },
              {
                id: "date",
                label: "Date",
                sorting: "startsAt",
                render: (item: TrainingSession) => ({
                  type: "text" as const,
                  value: formatSessionDate(item),
                }),
              },
              {
                id: "type",
                label: "Type",
                render: () => ({
                  type: "dotTag" as const,
                  value: { label: "Scheduled", color: "barbie" as const },
                }),
              },
              {
                id: "modality",
                label: "Modality",
                render: (item: TrainingSession) => {
                  const modality = MODE_TO_MODALITY[item.mode]
                  return {
                    type: "tag" as const,
                    value: {
                      label: MODALITY_LABEL[modality],
                      icon: MODALITY_ICON[modality],
                    },
                  }
                },
              },
            ],
          },
        },
      ]}
    />
  )
}

type ParticipantRow = {
  id: string
  firstName: string
  lastName: string
  fullName: string
  src?: string
  status: ParticipantStatus
  certificate: string
  completionDate: string
  courseValidity: string
  attendedSessions: number
  totalSessions: number
  knowledgeTestPassed: boolean | null
  completedModules: number
  totalModules: number
}

function ReadOnlyClassParticipantsTab({ klass }: { klass: TrainingClass }) {
  const rows = useClassParticipantRows(klass)
  const source = useDataCollectionSource<ParticipantRow>(
    {
      search: { enabled: true, sync: false },
      presets: [
        {
          label: "Pending group assignment",
          filter: { status: ["not_started", "in_progress"] },
        },
        { label: "Expired", filter: { status: ["expired"] } },
      ],
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { label: "Enrolled", value: "not_started" },
              { label: "In progress", value: "in_progress" },
              { label: "Completed", value: "completed" },
              { label: "Expired", value: "expired" },
            ],
          },
        },
      },
      dataAdapter: {
        fetchData: ({ filters, search }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()
          const filtered = rows
            .filter((row) =>
              statusFilter.length === 0 ? true : statusFilter.includes(row.status)
            )
            .filter((row) =>
              term === "" ? true : row.fullName.toLowerCase().includes(term)
            )

          return { records: filtered, totalCount: filtered.length }
        },
      },
    },
    [rows]
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading
          as="h3"
          variant="heading-large"
          content={`Participants (${rows.length})`}
        />
        <F0Text
          variant="description"
          content="People enrolled in this group. Can view access is read-only."
        />
      </F0Box>
      <OneDataCollection
        id={`training-access-viewer/group-participants/${klass.id}/v1`}
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: getParticipantColumns(),
            },
          },
        ]}
      />
    </F0Box>
  )
}

function useClassParticipantRows(klass: TrainingClass): ParticipantRow[] {
  const total = klass.totalAttendancesCount || klass.participants.length || 0
  const completed = klass.completedAttendancesCount
  const inProgress = Math.min(
    Math.max(total - completed, 0),
    Math.round((total - completed) * 0.6)
  )
  const notStarted = Math.max(total - completed - inProgress, 0)
  const statuses: ParticipantStatus[] = [
    ...Array(completed).fill("completed" as ParticipantStatus),
    ...Array(inProgress).fill("in_progress" as ParticipantStatus),
    ...Array(notStarted).fill("not_started" as ParticipantStatus),
  ]

  return useMemo(
    () =>
      klass.participants.map((participant, index) => ({
        id: `${participant.firstName}-${participant.lastName}-${index}`,
        firstName: participant.firstName,
        lastName: participant.lastName,
        fullName: `${participant.firstName} ${participant.lastName}`.trim(),
        src: participant.src,
        status: statuses[index] ?? "not_started",
        certificate: index === 0 && completed > 0 ? "1 file" : "-",
        completionDate: statuses[index] === "completed" ? "Not set" : "Not set",
        courseValidity: "No date",
        attendedSessions: 0,
        totalSessions: 0,
        knowledgeTestPassed: null,
        completedModules: 0,
        totalModules: 0,
      })),
    [completed, klass.participants, statuses]
  )
}

function getParticipantColumns() {
  return [
    {
      id: "participant",
      label: "Participant",
      sorting: "fullName" as const,
      render: (row: ParticipantRow) => ({
        type: "person" as const,
        value: {
          firstName: row.firstName,
          lastName: row.lastName,
          src: row.src,
        },
      }),
    },
    {
      id: "status",
      label: "Status",
      sorting: "status" as const,
      render: (row: ParticipantRow) => ({
        type: "status" as const,
        value: {
          status: PARTICIPANT_STATUS_VARIANT[row.status],
          label: PARTICIPANT_STATUS_LABEL[row.status],
        },
      }),
    },
    {
      id: "certificate",
      label: "Certificate",
      render: (row: ParticipantRow) => ({ type: "text" as const, value: row.certificate }),
    },
    {
      id: "completion-date",
      label: "Completion date",
      render: (row: ParticipantRow) => ({
        type: "text" as const,
        value: row.completionDate,
      }),
    },
    {
      id: "course-validity",
      label: "Course validity",
      render: (row: ParticipantRow) => ({
        type: "text" as const,
        value: row.courseValidity,
      }),
    },
    {
      id: "session-attendance",
      label: "Session attendance",
      render: (row: ParticipantRow) => ({
        type: "percentage" as const,
        value: {
          percentage:
            row.totalSessions > 0
              ? (row.attendedSessions / row.totalSessions) * 100
              : 0,
          label: `${row.attendedSessions}/${row.totalSessions}`,
        },
      }),
    },
    {
      id: "knowledge-test-results",
      label: "Knowledge test results",
      render: (row: ParticipantRow) => ({
        type: "status" as const,
        value:
          row.knowledgeTestPassed === null
            ? { status: "warning" as const, label: "Pending" }
            : row.knowledgeTestPassed
              ? { status: "positive" as const, label: "Passed" }
              : { status: "critical" as const, label: "Failed" },
      }),
    },
    {
      id: "module-progress",
      label: "Module progress",
      render: (row: ParticipantRow) => ({
        type: "percentage" as const,
        value: {
          percentage:
            row.totalModules > 0
              ? (row.completedModules / row.totalModules) * 100
              : 0,
          label: `${row.completedModules}/${row.totalModules}`,
        },
      }),
    },
  ]
}

function ReadOnlyClassMaterialsTab({ training }: { training: Training }) {
  const [filter, setFilter] = useState<"all" | "file" | "link">("all")
  const materials = filesForTraining(training.id).map((file) => ({
    ...file,
    kind: file.type === "link" ? "link" : "file",
  }))
  const filtered =
    filter === "all" ? materials : materials.filter((material) => material.kind === filter)

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading
          as="h3"
          variant="heading-large"
          content={`Materials (${materials.length})`}
        />
        <F0Text
          variant="description"
          content="Files and links shared with this group's participants."
        />
      </F0Box>
      <F0Box display="flex" gap="sm">
        <FilterButton active={filter === "all"} label="All" onClick={() => setFilter("all")} />
        <FilterButton active={filter === "file"} label="Files" onClick={() => setFilter("file")} />
        <FilterButton active={filter === "link"} label="Links" onClick={() => setFilter("link")} />
      </F0Box>
      {filtered.length === 0 ? (
        <F0Alert
          variant="info"
          title="No materials yet"
          description="Materials accessible to this group will appear here."
        />
      ) : (
        <F0Box display="grid" columns="3" gap="md">
          {filtered.map((material) => (
            <F0Card
              key={material.id}
              title={material.name}
              description={`${material.type.toUpperCase()} · ${material.size ?? "Link"} · ${material.uploadedAt}`}
              avatar={{
                type: "emoji",
                emoji: FILE_ICON_BY_TYPE[material.type] ?? "📎",
                "aria-label": material.type,
              }}
            />
          ))}
        </F0Box>
      )}
    </F0Box>
  )
}

function FilterButton({
  active,
  label,
  onClick,
}: {
  active: boolean
  label: string
  onClick: () => void
}) {
  return (
    <F0Button
      label={label}
      onClick={onClick}
      variant={active ? "default" : "outline"}
      size="sm"
    />
  )
}

function ReadOnlyClassDocumentsTab({
  training,
  klass,
}: {
  training: Training
  klass: TrainingClass
}) {
  const participantNames = new Set(
    klass.participants.map((participant) =>
      `${participant.firstName} ${participant.lastName}`.trim()
    )
  )
  const certificates = certificatesForTraining(training.id).filter((certificate) =>
    participantNames.has(certificate.employeeName)
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading
          content={`Documents (${certificates.length})`}
          variant="heading-large"
          as="h2"
        />
        <F0Text
          content="Certificates issued for this group only."
          variant="description"
        />
      </F0Box>
      {certificates.length === 0 ? (
        <F0Alert
          variant="info"
          title="No documents yet"
          description="Certificates and supporting paperwork will appear here."
        />
      ) : (
        <F0Card title={`Certificates (${certificates.length})`}>
          <F0Box display="flex" flexDirection="column" gap="sm" padding="lg">
            {certificates.map((certificate) => (
              <F0Box
                key={certificate.id}
                display="grid"
                columns="4"
                gap="md"
                paddingY="sm"
                borderTop="default"
                borderColor="secondary"
              >
                <F0Text content={certificate.employeeName} variant="label" />
                <F0Text content={certificate.fileName} variant="small" />
                <F0Text content={certificate.uploadedAt.slice(0, 10)} variant="small" />
                <F0Text content={certificate.status.replace("_", " ")} variant="small" />
              </F0Box>
            ))}
          </F0Box>
        </F0Card>
      )}
    </F0Box>
  )
}

function ReadOnlyClassCostsTab({
  training,
  klass,
}: {
  training: Training
  klass: TrainingClass
}) {
  const splitCount = Math.max(training.classes.length, 1)
  const directCost = klass.cost ?? currencyFmt.format(Math.round(training.totalCost / splitCount))
  const salaryCost =
    klass.salaryCost ?? currencyFmt.format(Math.round(training.totalSalaryCost / splitCount))
  const indirectCost = klass.indirectCost ?? currencyFmt.format(Math.round(training.totalCost * 0.15))

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading as="h3" variant="heading-large" content="Costs" />
        <F0Text
          variant="description"
          content="Can view access can inspect costs but cannot edit budget values."
        />
      </F0Box>
      <F0Box display="grid" columns="3" gap="md">
        <ReadOnlyCostCard
          title="Direct costs"
          description="Provider, venue and material costs assigned to this group."
          value={directCost}
        />
        <ReadOnlyCostCard
          title="Indirect costs"
          description="Administrative costs allocated to this group."
          value={indirectCost}
        />
        <ReadOnlyCostCard
          title="Salary costs"
          description="Estimated salary cost of participants attending the group."
          value={salaryCost}
        />
      </F0Box>
    </F0Box>
  )
}

function ReadOnlyCostCard({
  title,
  description,
  value,
}: {
  title: string
  description: string
  value: string
}) {
  return (
    <F0Card title={title} description={description}>
      <F0Box padding="lg">
        <F0Text content={value} variant="body" />
      </F0Box>
    </F0Card>
  )
}
