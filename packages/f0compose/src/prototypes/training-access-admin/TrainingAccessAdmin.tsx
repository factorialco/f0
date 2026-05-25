import {
  F0Avatar,
  F0Box,
  F0Button,
  F0ButtonDropdown,
  F0Dialog,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import {
  Check,
  Delete,
  Link,
  PersonPlus,
  Reset,
  Settings,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { employees, findTraining, trainings } from "@/fixtures"
import type { Employee } from "@/fixtures/types"
import type { Training } from "@/fixtures"

import { AccessCoursesPage } from "../training-access-shared/AccessCoursesPage"
import { AttachmentsTab } from "../trainings/detail/AttachmentsTab"
import { AdminCourseModals, type AdminAction } from "../training-access-shared/AdminCourseModals"
import { EditableClassDetail } from "../training-access-shared/EditableClassDetail"
import { EditableClassesTab } from "../training-access-shared/EditableClassesTab"
import { ContentTab } from "../trainings/detail/ContentTab"
import { DocumentsTab } from "../trainings/detail/DocumentsTab"
import { FormsTab } from "../trainings/detail/FormsTab"
import { FundaeTab } from "../trainings/detail/FundaeTab"
import { OverviewTab } from "../trainings/detail/OverviewTab"
import { ParticipantsTab } from "../trainings/detail/ParticipantsTab"
import { PageContent } from "../trainings/_shared/PageContent"
import { type DetailTabId, detailTabs } from "../trainings/tabs"
import type { PrototypeMeta } from "../types"

export const meta: PrototypeMeta = {
  slug: "training-access-admin",
  title: "Training access admin",
  description:
    "Admin prototype for sharing one training with editors, viewers and derived instructors.",
  category: "Talent",
  module: "trainings",
  audience: ["admin"],
  tags: ["trainings", "permissions", "sharing", "admin"],
  createdAt: "2026-05-22",
}

type DirectAccessRole = "author" | "editor" | "viewer"
type EditableRole = Exclude<DirectAccessRole, "author">

type DirectAccess = {
  employeeId: string
  role: DirectAccessRole
}

type AccessSource = "direct" | "instructor" | "direct-and-instructor"

type AccessRowModel = DirectAccess & {
  source: AccessSource
}

type PersonOption = {
  value: string
  label: string
  description: string
  avatar: {
    type: "person"
    firstName: string
    lastName: string
    src: string
  }
  disabled?: boolean
}

type Notice = {
  tone: "positive" | "warning"
  message: string
}

type CandidateOption = PersonOption & {
  employee: Employee
}

const BASE_HREF = "/p/training-access-admin"
const VALID_TABS = new Set<string>(detailTabs.map((tab) => tab.id))

const initialAccess: DirectAccess[] = [
  { employeeId: "emp-002", role: "author" },
  { employeeId: "emp-011", role: "editor" },
  { employeeId: "emp-009", role: "viewer" },
  { employeeId: "emp-003", role: "viewer" },
]

const derivedInstructorIds = ["emp-003", "emp-012"]

const roleOptions: { value: EditableRole; label: string }[] = [
  { value: "editor", label: "Can edit" },
  { value: "viewer", label: "Can view" },
]

const personOptions: PersonOption[] = employees
  .filter((employee) => employee.status === "active")
  .map((employee) => ({
    value: employee.id,
    label: employee.fullName,
    description: employee.role,
    avatar: employeeAvatar(employee),
  }))

function employeeAvatar(employee: Employee) {
  const [firstName = employee.fullName, ...lastNameParts] = employee.fullName.split(" ")
  return {
    type: "person" as const,
    firstName,
    lastName: lastNameParts.join(" "),
    src: employee.avatarUrl,
  }
}

function findEmployee(employeeId: string) {
  const employee = employees.find((item) => item.id === employeeId)
  if (!employee) {
    throw new Error(`Missing employee fixture for ${employeeId}`)
  }
  return employee
}

function roleLabel(role: DirectAccessRole) {
  if (role === "author") return "Owner"
  if (role === "editor") return "Can edit"
  return "Can view"
}

export default function TrainingAccessAdmin() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [adminAction, setAdminAction] = useState<AdminAction>(null)
  const [directAccess, setDirectAccess] = useState<DirectAccess[]>(initialAccess)
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState<string[]>([])
  const [selectedRole, setSelectedRole] = useState<EditableRole>("editor")
  const [personSearch, setPersonSearch] = useState("")
  const [isPeopleListOpen, setIsPeopleListOpen] = useState(false)
  const [notice, setNotice] = useState<Notice | null>(null)
  const [isCopyLinkCopied, setIsCopyLinkCopied] = useState(false)
  const copyTooltipTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (copyTooltipTimeoutRef.current) window.clearTimeout(copyTooltipTimeoutRef.current)
    }
  }, [])

  const trainingId = searchParams.get("training")
  const requestedTraining = trainingId ? findTraining(trainingId) : undefined
  const rawTab = searchParams.get("dtab")
  const classId = searchParams.get("class")
  const selectedTraining = requestedTraining
    ? trainings.find((item) => item.id === requestedTraining.id)
    : classId
      ? trainings.find((item) => item.classes.some((klass) => klass.id === classId))
      : undefined
  const activeTab: DetailTabId =
    rawTab && VALID_TABS.has(rawTab) ? (rawTab as DetailTabId) : "overview"

  const training = selectedTraining ?? trainings[0]
  const trainingHref = `${BASE_HREF}?training=${training.id}`
  const isDraft = training.status === "draft"

  const getTotalDuration = () => {
    const totalMinutes = training.totalDuration * 60
    const hours = Math.floor(totalMinutes / 60)
    const minutes = Math.round(totalMinutes % 60)
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`
  }

  const handleCopyLink = () => {
    setIsCopyLinkCopied(true)
    void navigator.clipboard?.writeText(window.location.href)?.catch(() => {})
    if (copyTooltipTimeoutRef.current) window.clearTimeout(copyTooltipTimeoutRef.current)
    copyTooltipTimeoutRef.current = window.setTimeout(() => {
      setIsCopyLinkCopied(false)
      copyTooltipTimeoutRef.current = null
    }, 4000)
  }

  const secondaryActions = [
    {
      label: "Course settings",
      icon: Settings,
      onClick: () => setAdminAction("settings"),
      tooltip: "Course settings",
      hideLabel: true as const,
    },
    ...(!isDraft
      ? [
          {
            label: "Copy link",
            icon: Link,
            onClick: handleCopyLink,
            tooltip: "Copy link",
            hideLabel: true as const,
          },
        ]
      : []),
  ]

  const otherActions = [
    ...(!isDraft
      ? [
          {
            label: "Revert to draft",
            onClick: () => setAdminAction("revert-draft"),
            variant: "critical" as const,
            icon: Reset,
          },
        ]
      : []),
  ]

  const tabsWithNav = detailTabs.map((tab) => ({
    ...tab,
    onClick: () => {
      const next = new URLSearchParams(searchParams)
      next.set("dtab", tab.id)
      setSearchParams(next)
    },
  }))

  const directEmployeeIds = useMemo(
    () => new Set(directAccess.map((access) => access.employeeId)),
    [directAccess]
  )

  const availablePersonOptions = personOptions.map((option) => ({
    ...option,
    disabled: directEmployeeIds.has(option.value),
  }))

  const candidateOptions: CandidateOption[] = availablePersonOptions
    .filter((option) => !option.disabled && !selectedEmployeeIds.includes(option.value))
    .map((option) => ({
      ...option,
      employee: findEmployee(option.value),
    }))
    .filter((option) => {
      const term = personSearch.toLowerCase().trim()
      if (term === "") return true
      return `${option.employee.fullName} ${option.employee.email}`
        .toLowerCase()
        .includes(term)
    })
    .slice(0, 12)

  const handlePersonSearchChange = (value: string | undefined) => {
    const nextSearch = value ?? ""
    setPersonSearch(nextSearch)
    setIsPeopleListOpen(true)

  }

  const handleSelectedEmployeeChange = (employeeId: string) => {
    setSelectedEmployeeIds((current) =>
      current.includes(employeeId)
        ? current.filter((id) => id !== employeeId)
        : [...current, employeeId]
    )
    setPersonSearch("")
    setIsPeopleListOpen(false)
  }

  const handleSelectedEmployeeRemove = (employeeId: string) => {
    setSelectedEmployeeIds((current) => current.filter((id) => id !== employeeId))
  }

  const instructorIdSet = useMemo(() => new Set(derivedInstructorIds), [])
  const peopleWithAccess: AccessRowModel[] = [
    ...directAccess.map((access) => ({
      ...access,
      source: instructorIdSet.has(access.employeeId)
        ? ("direct-and-instructor" as const)
        : ("direct" as const),
    })),
    ...derivedInstructorIds
      .filter((employeeId) => !directEmployeeIds.has(employeeId))
      .map((employeeId) => ({
        employeeId,
        role: "viewer" as const,
        source: "instructor" as const,
      })),
  ]

  if (!selectedTraining) {
    return <AccessCoursesPage baseHref={BASE_HREF} role="admin" />
  }

  if (classId) {
    return (
      <EditableClassDetail
        training={training}
        classId={classId}
        baseHref={BASE_HREF}
        trainingHref={trainingHref}
      />
    )
  }

  const handleAddAccess = () => {
    const newAccess = selectedEmployeeIds.filter(
      (employeeId) => !directAccess.some((access) => access.employeeId === employeeId)
    )

    if (newAccess.length === 0) {
      setNotice({
        tone: "warning",
        message: "Select at least one person to add.",
      })
      return
    }

    setDirectAccess((current) => [
      ...current,
      ...newAccess.map((employeeId) => ({ employeeId, role: selectedRole })),
    ])
    setSelectedEmployeeIds([])
    setPersonSearch("")
    setIsPeopleListOpen(false)
    setNotice({
      tone: "positive",
      message:
        newAccess.length === 1
          ? `${findEmployee(newAccess[0]).fullName} was added with ${roleLabel(selectedRole)} access.`
          : `${newAccess.length} people were added with ${roleLabel(selectedRole)} access.`,
    })
  }

  const handleChangeAccess = (employeeId: string, role: EditableRole) => {
    const employee = findEmployee(employeeId)
    setDirectAccess((current) =>
      current.map((access) =>
        access.employeeId === employeeId ? { ...access, role } : access
      )
    )
    setNotice({
      tone: "positive",
      message: `${employee.fullName} now has ${roleLabel(role)} access.`,
    })
  }

  const handleRemoveAccess = (employeeId: string) => {
    const employee = findEmployee(employeeId)
    const access = directAccess.find((item) => item.employeeId === employeeId)

    if (access?.role === "author") return

    setDirectAccess((current) => current.filter((item) => item.employeeId !== employeeId))
    setNotice({
      tone: "positive",
      message: `${employee.fullName} was removed from this access list.`,
    })
  }

  return (
    <>
      <Page
        header={
          <>
            <PageHeader
              module={{ id: "company_trainings", name: "Trainings", href: BASE_HREF }}
              breadcrumbs={[
                { id: "courses", label: "Courses", href: BASE_HREF },
                { id: training.id, label: training.name },
              ]}
            />
            <ResourceHeader
              title={training.name}
              metadata={[
                {
                  label: "Type",
                  value: {
                    type: "text",
                    content: training.type === "internal" ? "Internal" : "External",
                  },
                },
                ...(training.totalDuration
                  ? [
                      {
                        label: "Total duration",
                        value: {
                          type: "text" as const,
                          content: getTotalDuration(),
                        },
                      },
                    ]
                  : []),
                ...(training.groupNames.length > 0
                  ? [
                      {
                        label: "Training groups",
                        value: {
                          type: "data-list" as const,
                          data: training.groupNames,
                        },
                      },
                    ]
                  : []),
                ...(training.participantAvatars.length > 0
                  ? [
                      {
                        label: "",
                        value: {
                          type: "list" as const,
                          variant: "person" as const,
                          avatars: training.participantAvatars.map((avatar) => ({
                            ...avatar,
                            type: "person" as const,
                          })),
                        },
                      },
                    ]
                  : []),
                ...(training.instructorAvatars.length > 0
                  ? [
                      {
                        label: "Instructor(s)",
                        value: {
                          type: "list" as const,
                          variant: "person" as const,
                          avatars: training.instructorAvatars.map((avatar) => ({
                            ...avatar,
                            type: "person" as const,
                          })),
                        },
                      },
                    ]
                  : []),
                ...(training.publishedAsFreeCourse
                  ? [
                      {
                        label: "",
                        value: {
                          type: "status" as const,
                          label: "Published as free course",
                          variant: "positive" as const,
                        },
                      },
                    ]
                  : []),
              ]}
              status={{ label: "", text: "Published", variant: "positive" }}
              primaryAction={
                isDraft
                  ? { label: "Publish", onClick: () => setAdminAction("publish") }
                  : {
                      label: "Share",
                      icon: PersonPlus,
                      onClick: () => setIsShareOpen(true),
                    }
              }
              secondaryActions={secondaryActions}
              otherActions={otherActions}
            />
            <Tabs key={activeTab} tabs={tabsWithNav} activeTabId={activeTab} />
          </>
        }
      >
        <PageContent>
          {activeTab === "overview" && <OverviewTab training={training} />}
          {activeTab === "content" && <ContentTab training={training} />}
          {activeTab === "groups" && <EditableClassesTab training={training} />}
          {activeTab === "participants" && <ParticipantsTab training={training} />}
          {activeTab === "attachments" && <AttachmentsTab training={training} />}
          {activeTab === "documents" && <DocumentsTab training={training} />}
          {activeTab === "surveys" && <FormsTab training={training} />}
          {activeTab === "fundae" && <FundaeTab training={training} />}
        </PageContent>
      </Page>

      <ShareTrainingDialog
        isOpen={isShareOpen}
        training={training}
        peopleWithAccess={peopleWithAccess}
        notice={notice}
        candidateOptions={candidateOptions}
        isPeopleListOpen={isPeopleListOpen}
        personSearch={personSearch}
        selectedEmployeeIds={selectedEmployeeIds}
        selectedRole={selectedRole}
        onClose={() => setIsShareOpen(false)}
        onAddAccess={handleAddAccess}
        onChangeAccess={handleChangeAccess}
        onRemoveAccess={handleRemoveAccess}
        onPersonSearchChange={handlePersonSearchChange}
        onPeopleListOpenChange={setIsPeopleListOpen}
        onSelectedEmployeeRemove={handleSelectedEmployeeRemove}
        onSelectedEmployeeChange={handleSelectedEmployeeChange}
        onSelectedRoleChange={setSelectedRole}
      />

      <AdminCourseModals
        action={adminAction}
        training={training}
        onClose={() => setAdminAction(null)}
      />

      {isCopyLinkCopied && <LinkCopiedTooltip />}
    </>
  )
}

function LinkCopiedTooltip() {
  return (
    <div
      role="status"
      className="fixed right-6 top-28 z-[9999] rounded-md bg-f1-background-inverse px-3 py-2 shadow-lg"
    >
      <F0Text content="Link copied" variant="inverse" />
    </div>
  )
}

function ShareTrainingDialog({
  isOpen,
  training,
  peopleWithAccess,
  notice,
  candidateOptions,
  isPeopleListOpen,
  personSearch,
  selectedEmployeeIds,
  selectedRole,
  onClose,
  onAddAccess,
  onChangeAccess,
  onRemoveAccess,
  onPersonSearchChange,
  onPeopleListOpenChange,
  onSelectedEmployeeRemove,
  onSelectedEmployeeChange,
  onSelectedRoleChange,
}: {
  isOpen: boolean
  training: Training
  peopleWithAccess: AccessRowModel[]
  notice: Notice | null
  candidateOptions: CandidateOption[]
  isPeopleListOpen: boolean
  personSearch: string
  selectedEmployeeIds: string[]
  selectedRole: EditableRole
  onClose: () => void
  onAddAccess: () => void
  onChangeAccess: (employeeId: string, role: EditableRole) => void
  onRemoveAccess: (employeeId: string) => void
  onPersonSearchChange: (value: string | undefined) => void
  onPeopleListOpenChange: (isOpen: boolean) => void
  onSelectedEmployeeRemove: (employeeId: string) => void
  onSelectedEmployeeChange: (employeeId: string) => void
  onSelectedRoleChange: (role: EditableRole) => void
}) {
  const searchAreaRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isPeopleListOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target
      if (target instanceof Node && searchAreaRef.current?.contains(target)) return
      onPeopleListOpenChange(false)
    }

    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [isPeopleListOpen, onPeopleListOpenChange])

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      width="md"
      title="Share training"
      description={training.name}
      primaryAction={{ label: "Done", icon: Check, onClick: onClose }}
    >
      <F0Box display="flex" flexDirection="column" gap="lg">
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Box display="flex" alignItems="start" gap="sm">
            <F0Box grow position="relative" ref={searchAreaRef}>
              <F0Box onClick={() => onPeopleListOpenChange(true)}>
                <PeopleSearchInput
                  selectedEmployeeIds={selectedEmployeeIds}
                  searchValue={personSearch}
                  onSearchChange={onPersonSearchChange}
                  onRemove={onSelectedEmployeeRemove}
                />
              </F0Box>
              {isPeopleListOpen && (
                <PeopleSearchResults
                  candidates={candidateOptions}
                  selectedEmployeeIds={selectedEmployeeIds}
                  onSelect={(employeeId) => {
                    onSelectedEmployeeChange(employeeId)
                  }}
                />
              )}
            </F0Box>
            <F0Box width="1/4" paddingTop="xl">
              <F0Select
                label="Access"
                hideLabel
                value={selectedRole}
                onChange={onSelectedRoleChange}
                options={roleOptions}
              />
            </F0Box>
            <F0Box paddingTop="xl">
              <F0Button
                label="Add"
                icon={PersonPlus}
                variant={selectedEmployeeIds.length > 0 ? "default" : "neutral"}
                disabled={selectedEmployeeIds.length === 0}
                onClick={onAddAccess}
              />
            </F0Box>
          </F0Box>
        </F0Box>

        {notice && <NoticeText notice={notice} />}

        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Text content="People with access" variant="label" />
          <F0Box display="flex" flexDirection="column" borderTop="default" borderColor="secondary">
            {peopleWithAccess.map((access) => (
              <AccessRow
                key={access.employeeId}
                access={access}
                onChangeAccess={onChangeAccess}
                onRemoveAccess={onRemoveAccess}
              />
            ))}
          </F0Box>
        </F0Box>
      </F0Box>
    </F0Dialog>
  )
}

function PeopleSearchInput({
  selectedEmployeeIds,
  searchValue,
  onSearchChange,
  onRemove,
}: {
  selectedEmployeeIds: string[]
  searchValue: string
  onSearchChange: (value: string | undefined) => void
  onRemove: (employeeId: string) => void
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text content="Add people" variant="label" />
      <div className="flex min-h-8 w-full flex-wrap items-center gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background px-2 py-1 focus-within:border-f1-border-selected">
        {selectedEmployeeIds.length > 0 && (
          <div className="flex max-h-24 flex-wrap gap-1 overflow-y-auto">
            {selectedEmployeeIds.map((employeeId) => {
              const employee = findEmployee(employeeId)
              return (
                <div
                  key={employeeId}
                  className="flex w-fit items-center gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1 text-sm text-f1-foreground"
                >
                  <span>{employee.email}</span>
                  <button
                    type="button"
                    className="border-0 bg-transparent p-0 text-f1-foreground-secondary"
                    aria-label={`Remove ${employee.fullName}`}
                    onClick={(event) => {
                      event.stopPropagation()
                      onRemove(employeeId)
                    }}
                  >
                    x
                  </button>
                </div>
              )
            })}
          </div>
        )}
        <input
          aria-label="Add people"
          className="min-w-28 flex-1 border-0 bg-transparent p-1 text-sm text-f1-foreground outline-none placeholder:text-f1-foreground-secondary"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={selectedEmployeeIds.length === 0 ? "Search by name or email" : ""}
        />
      </div>
    </F0Box>
  )
}

function PeopleSearchResults({
  candidates,
  selectedEmployeeIds,
  onSelect,
}: {
  candidates: CandidateOption[]
  selectedEmployeeIds: string[]
  onSelect: (employeeId: string) => void
}) {
  return (
    <div
      className="absolute left-0 right-0 top-full z-10 mt-1 flex max-h-72 flex-col gap-0 overflow-y-auto rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-lg"
    >
      {candidates.length > 0 ? (
        candidates.map((candidate) => {
          const selected = selectedEmployeeIds.includes(candidate.value)
          return (
            <button
              key={candidate.value}
              type="button"
              className={`flex w-full items-center justify-between rounded-md border-0 bg-transparent p-2 text-left hover:bg-f1-background-hover ${
                selected ? "bg-f1-background-selected" : ""
              }`}
              onClick={() => onSelect(candidate.value)}
            >
              <PersonCell employee={candidate.employee} supportingText={candidate.employee.email} />
              {selected && <F0Text content="Selected" variant="description" />}
            </button>
          )
        })
      ) : (
        <F0Box padding="sm">
          <F0Text content="No people found" variant="description" />
        </F0Box>
      )}
    </div>
  )
}

function NoticeText({ notice }: { notice: Notice }) {
  return (
    <F0Box padding="sm" borderRadius="md" background={notice.tone}>
      <F0Text content={notice.message} variant="small" />
    </F0Box>
  )
}

function AccessRow({
  access,
  onChangeAccess,
  onRemoveAccess,
}: {
  access: AccessRowModel
  onChangeAccess: (employeeId: string, role: EditableRole) => void
  onRemoveAccess: (employeeId: string) => void
}) {
  const employee = findEmployee(access.employeeId)
  const isMutable = access.role !== "author" && access.source !== "instructor"
  const supportingText =
    access.role === "author"
      ? "Created this course"
      : access.source === "direct-and-instructor" || access.source === "instructor"
        ? `${employee.email} · Instructor in class`
        : employee.email

  return (
    <F0Box
      display="flex"
      alignItems="center"
      justifyContent="between"
      gap="md"
      paddingY="sm"
      borderBottom="default"
      borderColor="secondary"
    >
      <PersonCell employee={employee} supportingText={supportingText} />
      <F0Box display="flex" alignItems="center" gap="sm" shrink={false}>
        {isMutable ? (
          <F0ButtonDropdown
            mode="dropdown"
            trigger={roleLabel(access.role)}
            variant="neutral"
            size="sm"
            items={[
              { value: "editor", label: "Can edit" },
              { value: "viewer", label: "Can view" },
              { value: "remove", label: "Remove access", icon: Delete, critical: true },
            ]}
            onClick={(value) => {
              if (value === "remove") {
                onRemoveAccess(access.employeeId)
                return
              }
              onChangeAccess(access.employeeId, value as EditableRole)
            }}
          />
        ) : (
          <F0Text
            content={access.source === "instructor" ? "Instructor" : roleLabel(access.role)}
            variant="small"
          />
        )}
      </F0Box>
    </F0Box>
  )
}

function PersonCell({
  employee,
  supportingText,
}: {
  employee: Employee
  supportingText: string
}) {
  return (
    <F0Box display="flex" alignItems="center" gap="sm" grow>
      <F0Avatar avatar={employeeAvatar(employee)} size="sm" />
      <F0Box display="flex" flexDirection="column" gap="none">
        <F0Text content={employee.fullName} variant="body" />
        <F0Text content={supportingText} variant="description" />
      </F0Box>
    </F0Box>
  )
}
