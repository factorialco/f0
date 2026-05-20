import { F0Box, F0Text } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Pencil } from "@factorialco/f0-react/icons/app"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import {
  findEmployee,
  sessionsForClass,
  type Training,
  type TrainingBudgetMovement,
  type TrainingSession,
} from "@/fixtures"

import { ClassModals, type ClassAction } from "./ClassModals"
import { CostsTab } from "./CostsTab"
import { MaterialsTab as ClassMaterialsTab } from "./class/MaterialsTab"
import { ParticipantsTab as ClassParticipantsTab } from "./class/ParticipantsTab"
import { SessionsTab as ClassSessionsTab } from "./class/SessionsTab"
import { PageContent } from "../_shared/PageContent"

type Props = {
  training: Training
  classId: string
  movement?: TrainingBudgetMovement
  onBackToList: () => void
  onBackToTraining: () => void
  onBackToClasses: () => void
}

type ClassTabId = "sessions" | "participants" | "costs" | "materials"

const CLASS_TABS: Array<{ id: ClassTabId; label: string }> = [
  { id: "sessions", label: "Sessions" },
  { id: "participants", label: "Participants" },
  { id: "costs", label: "Costs" },
  { id: "materials", label: "Materials" },
]

const VALID_CTABS = new Set<string>(CLASS_TABS.map((t) => t.id))

const currencyFmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
})

function formatLongDate(iso: string | null): string {
  if (!iso) return "-"
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export function ClassDetail({
  training,
  classId,
  movement,
  onBackToList: _onBackToList,
  onBackToTraining,
  onBackToClasses: _onBackToClasses,
}: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [classAction, setClassAction] = useState<ClassAction>(null)
  const [actionSession, setActionSession] = useState<TrainingSession | null>(
    null
  )

  const klass = training.classes.find((c) => c.id === classId)

  const rawTab = searchParams.get("ctab")
  const activeTab: ClassTabId =
    rawTab && VALID_CTABS.has(rawTab) ? (rawTab as ClassTabId) : "sessions"

  const setTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    next.set("ctab", id)
    setSearchParams(next)
  }

  const tabsWithNav = CLASS_TABS.map((t) => ({
    ...t,
    onClick: () => setTab(t.id),
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
            module={{
              id: "company_trainings",
              name: "Training",
              href: "/p/trainings",
            }}
            breadcrumbs={[
              {
                id: training.id,
                label: training.name,
                onClick: onBackToTraining,
              },
              { id: "missing", label: "Class not found" },
            ]}
          />
        }
      >
        <F0Box padding="xl">
          <F0Text
            variant="description"
            content={`No class with id ${classId} in this training.`}
          />
        </F0Box>
      </Page>
    )
  }

  const participantAvatars = klass.participants.map((p) => ({
    firstName: p.firstName,
    lastName: p.lastName,
    src: p.src,
    type: "person" as const,
  }))

  const sessions = sessionsForClass(klass.id)
  const seenInstructorIds = new Set<string>()
  const instructorAvatars = sessions
    .flatMap((s) => s.instructorIds)
    .filter((id) => {
      if (seenInstructorIds.has(id)) return false
      seenInstructorIds.add(id)
      return true
    })
    .map((id) => findEmployee(id))
    .filter((e): e is NonNullable<typeof e> => Boolean(e))
    .map((e) => {
      const [firstName, ...rest] = e.fullName.split(" ")
      return {
        firstName: firstName ?? "",
        lastName: rest.join(" "),
        src: e.avatarUrl,
        type: "person" as const,
      }
    })

  const trainingBudget =
    training.totalCost > 0 ? currencyFmt.format(training.totalCost) : null

  return (
    <>
      <Page
        header={
          <>
            <PageHeader
              module={{
                id: "company_trainings",
                name: "Training",
                href: "/p/trainings",
              }}
              breadcrumbs={[
                {
                  id: "courses",
                  label: "Courses",
                  onClick: onBackToTraining,
                },
                {
                  id: training.id,
                  label: training.name,
                  onClick: onBackToTraining,
                },
                { id: klass.id, label: klass.name },
              ]}
            />
            <ResourceHeader
              title={klass.name}
              description={training.description}
              metadata={[
                ...(movement
                  ? [
                      {
                        label: "Payment status",
                        value: {
                          type: "status" as const,
                          label:
                            movement.paymentStatus === "spent"
                              ? "Paid"
                              : "Pending",
                          variant:
                            movement.paymentStatus === "spent"
                              ? ("positive" as const)
                              : ("warning" as const),
                        },
                      },
                    ]
                  : []),
                {
                  label: "Start date",
                  value: {
                    type: "text",
                    content: formatLongDate(klass.startDate),
                  },
                },
                {
                  label: "End date",
                  value: {
                    type: "text",
                    content: formatLongDate(klass.endDate),
                  },
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
                        value: {
                          type: "text" as const,
                          content: trainingBudget,
                        },
                      },
                    ]
                  : []),
              ]}
              secondaryActions={[
                {
                  label: "Delete",
                  onClick: () => openClassAction("delete-class"),
                },
                {
                  label: "Edit",
                  icon: Pencil,
                  onClick: () => openClassAction("edit-class"),
                },
              ]}
            />
            <Tabs key={activeTab} tabs={tabsWithNav} activeTabId={activeTab} />
          </>
        }
      >
        <PageContent>
          {activeTab === "sessions" && (
            <ClassSessionsTab
              training={training}
              klass={klass}
              onAction={openClassAction}
            />
          )}
          {activeTab === "participants" && (
            <ClassParticipantsTab training={training} klass={klass} />
          )}
          {activeTab === "costs" && (
            <CostsTab training={training} klass={klass} />
          )}
          {activeTab === "materials" && (
            <ClassMaterialsTab training={training} klass={klass} />
          )}
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
