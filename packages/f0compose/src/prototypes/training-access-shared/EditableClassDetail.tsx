import { F0Alert } from "@factorialco/f0-react"
import {
  OneDataCollection,
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  Delete,
  DottedCircle,
  Laptop,
  LayersFront,
  Office,
  Pencil,
} from "@factorialco/f0-react/icons/app"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import {
  findEmployee,
  sessionsForClass,
  type Training,
  type TrainingClass,
  type TrainingSession,
} from "@/fixtures"
import { applySort } from "@/lib/applySort"

import { ClassModals, type ClassAction } from "../trainings/detail/ClassModals"
import { CostsTab } from "../trainings/detail/CostsTab"
import { DocumentsTab as ClassDocumentsTab } from "../trainings/detail/class/DocumentsTab"
import { MaterialsTab as ClassMaterialsTab } from "../trainings/detail/class/MaterialsTab"
import { ParticipantsTab as ClassParticipantsTab } from "../trainings/detail/class/ParticipantsTab"
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

export function EditableClassDetail({
  training,
  classId,
  baseHref,
  trainingHref,
}: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [classAction, setClassAction] = useState<ClassAction>(null)
  const [actionSession, setActionSession] = useState<TrainingSession | null>(null)
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

  const openClassAction = (
    action: ClassAction,
    session: TrainingSession | null = null
  ) => {
    setActionSession(session)
    setClassAction(action)
  }

  const closeClassAction = () => {
    setClassAction(null)
    setActionSession(null)
  }

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

  const trainingBudget = training.totalCost > 0 ? currencyFmt.format(training.totalCost) : null

  return (
    <>
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
          {activeTab === "sessions" && (
            <EditableSessionsTab klass={klass} onAction={openClassAction} />
          )}
          {activeTab === "participants" && (
            <ClassParticipantsTab training={training} klass={klass} />
          )}
          {activeTab === "materials" && (
            <ClassMaterialsTab training={training} klass={klass} />
          )}
          {activeTab === "documents" && (
            <ClassDocumentsTab training={training} klass={klass} />
          )}
          {activeTab === "costs" && <CostsTab training={training} klass={klass} />}
        </PageContent>
      </Page>
      <ClassModals
        action={classAction}
        trainingId={training.id}
        klass={klass}
        session={actionSession}
        onClose={closeClassAction}
      />
    </>
  )
}

function EditableSessionsTab({
  klass,
  onAction,
}: {
  klass: TrainingClass
  onAction: (action: ClassAction, session?: TrainingSession | null) => void
}) {
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
      primaryActions: () => ({
        label: "New session",
        icon: Add,
        onClick: () => onAction("new-session"),
      }),
      itemActions: (item) => [
        { label: "Edit", icon: Pencil, onClick: () => onAction("edit-session", item) },
        {
          label: "Duplicate",
          icon: LayersFront,
          onClick: () => onAction("new-session", item),
        },
        {
          label: "Delete",
          icon: Delete,
          critical: true,
          onClick: () => onAction("cancel-session", item),
        },
      ],
    },
    [klass.id, onAction]
  )

  return (
    <OneDataCollection
      id={`training-access/sessions/${klass.id}/v1`}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            frozenColumns: 1,
            columns: [
              {
                label: "Session",
                sorting: "name",
                render: (item) => ({ type: "text", value: item.title }),
              },
              {
                label: "Date",
                sorting: "startsAt",
                render: (item) => ({ type: "text", value: formatSessionDate(item) }),
              },
              {
                label: "Type",
                render: () => ({
                  type: "dotTag",
                  value: { label: "Scheduled", color: "barbie" },
                }),
              },
              {
                label: "Modality",
                render: (item) => {
                  const modality = MODE_TO_MODALITY[item.mode]
                  return {
                    type: "tag",
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
