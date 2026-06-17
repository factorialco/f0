import {
  F0Avatar,
  F0Box,
  F0Button,
  F0ButtonDropdown,
  F0Checkbox,
  F0Dialog,
  F0Select,
  F0TagStatus,
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
  Filter,
  Link,
  People,
  PersonPlus,
  Reset,
  Settings,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"

import {
  departments,
  employees,
  findTraining,
  legalEntities,
  legalEntityIdForEmployee,
  teams,
  trainings,
} from "@/fixtures"
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

type Notice = {
  tone: "positive" | "warning"
  message: string
}

type PeopleFilterKey = "workplace" | "team" | "department" | "legalEntity"

type PeopleFilters = Record<PeopleFilterKey, string[]>

type TooltipPosition = {
  top: number
  left: number
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

type CandidateOption = PersonOption & {
  employee: Employee
}

type PeopleFilterOption = {
  value: string
  label: string
}

type PeopleFilterConfig = {
  key: PeopleFilterKey
  label: string
  options: PeopleFilterOption[]
}

const BASE_HREF = "/p/training-access-admin"
const VALID_TABS = new Set<string>(detailTabs.map((tab) => tab.id))

const initialAccess: DirectAccess[] = [
  { employeeId: "emp-002", role: "author" },
  { employeeId: "emp-011", role: "editor" },
  { employeeId: "emp-009", role: "viewer" },
  { employeeId: "emp-003", role: "viewer" },
]

// Trainings admins have access to every training via their global permission,
// so adding them here is a no-op. They are not listed in "People with access"
// (admin is not a per-training role); in the search they appear as a labelled,
// non-addable row so it's clear *why* they can't be added.
const trainingsAdminIds = ["emp-001", "emp-004"]
const trainingsAdminIdSet = new Set(trainingsAdminIds)

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

const emptyPeopleFilters: PeopleFilters = {
  workplace: [],
  team: [],
  department: [],
  legalEntity: [],
}

const peopleFilterConfigs: PeopleFilterConfig[] = [
  {
    key: "workplace",
    label: "Workplace",
    options: Array.from(new Set(employees.map((employee) => employee.location))).map(
      (location) => ({ value: location, label: location })
    ),
  },
  {
    key: "team",
    label: "Team",
    options: teams.map((team) => ({ value: team.id, label: team.name })),
  },
  {
    key: "department",
    label: "Department",
    options: departments.map((department) => ({
      value: department.id,
      label: department.name,
    })),
  },
  {
    key: "legalEntity",
    label: "Legal entity",
    options: legalEntities.map((legalEntity) => ({
      value: legalEntity.id,
      label: legalEntity.legalName,
    })),
  },
]

function activeFiltersCount(filters: PeopleFilters) {
  return Object.values(filters).reduce((total, values) => total + values.length, 0)
}

function employeeMatchesFilters(employee: Employee, filters: PeopleFilters) {
  if (filters.workplace.length > 0 && !filters.workplace.includes(employee.location)) {
    return false
  }
  if (filters.team.length > 0 && !filters.team.includes(employee.teamId)) {
    return false
  }
  if (
    filters.department.length > 0 &&
    !filters.department.includes(employee.departmentId)
  ) {
    return false
  }
  if (
    filters.legalEntity.length > 0 &&
    !filters.legalEntity.includes(legalEntityIdForEmployee(employee.id))
  ) {
    return false
  }
  return true
}

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
  const [peopleFilters, setPeopleFilters] = useState<PeopleFilters>(emptyPeopleFilters)
  const [isPeopleFiltersOpen, setIsPeopleFiltersOpen] = useState(false)
  const [isPeopleListOpen, setIsPeopleListOpen] = useState(false)
  const [notice, setNotice] = useState<Notice | null>(null)
  const [copyTooltipPosition, setCopyTooltipPosition] = useState<TooltipPosition | null>(null)
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
    const button = Array.from(
      document.querySelectorAll<HTMLElement>(
        '[aria-label="Copy link"], [title="Copy link"]'
      )
    ).find((item) => {
      const buttonRect = item.getBoundingClientRect()
      return buttonRect.width > 0 && buttonRect.height > 0
    })
    const rect = button?.getBoundingClientRect()
    setCopyTooltipPosition({
      top: (rect?.bottom ?? 96) + 8,
      left: (rect?.left ?? window.innerWidth - 72) + (rect?.width ?? 40) / 2,
    })
    void navigator.clipboard?.writeText(window.location.href)?.catch(() => {})
    if (copyTooltipTimeoutRef.current) window.clearTimeout(copyTooltipTimeoutRef.current)
    copyTooltipTimeoutRef.current = window.setTimeout(() => {
      setCopyTooltipPosition(null)
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
    // Admins already have access to every training, so — exactly like people who
    // are already in the access list — they are not offered as add candidates.
    .filter(
      (option) => !option.disabled && !trainingsAdminIdSet.has(option.value)
    )
    .map((option) => ({
      ...option,
      employee: findEmployee(option.value),
    }))
    .filter((option) => {
      const term = personSearch.toLowerCase().trim()
      if (!employeeMatchesFilters(option.employee, peopleFilters)) return false
      if (term === "") return true
      return `${option.employee.fullName} ${option.employee.email} ${option.employee.role}`
        .toLowerCase()
        .includes(term)
    })

  const handlePersonSearchChange = (value: string | undefined) => {
    setPersonSearch(value ?? "")
    setIsPeopleListOpen(true)
  }

  // Multi-select via checkboxes: toggling a person keeps the list open so the
  // admin can tick several (or the whole filtered group) before pressing Add.
  const handleSelectedEmployeeChange = (employeeId: string) => {
    setSelectedEmployeeIds((current) =>
      current.includes(employeeId)
        ? current.filter((id) => id !== employeeId)
        : [...current, employeeId]
    )
  }

  const handleSelectedEmployeeRemove = (employeeId: string) => {
    setSelectedEmployeeIds((current) => current.filter((id) => id !== employeeId))
  }

  // Bulk add/remove every employee matching the current filter+search, so the
  // admin can grant a whole team/department at once instead of one by one.
  const handleSelectAllCandidates = (ids: string[]) => {
    setSelectedEmployeeIds((current) => {
      const allSelected = ids.length > 0 && ids.every((id) => current.includes(id))
      return allSelected
        ? current.filter((id) => !ids.includes(id))
        : Array.from(new Set([...current, ...ids]))
    })
  }

  const handlePeopleFilterToggle = (filterKey: PeopleFilterKey, value: string) => {
    setPeopleFilters((current) => {
      const values = current[filterKey]
      return {
        ...current,
        [filterKey]: values.includes(value)
          ? values.filter((item) => item !== value)
          : [...values, value],
      }
    })
  }

  const handlePeopleFiltersClear = () => setPeopleFilters(emptyPeopleFilters)

  // Instructor-derived access is intentionally hidden in this modal for now.
  const peopleWithAccess: AccessRowModel[] = directAccess.map((access) => ({
    ...access,
    source: "direct" as const,
  }))

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
    setPeopleFilters(emptyPeopleFilters)
    setIsPeopleFiltersOpen(false)
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
        isPeopleFiltersOpen={isPeopleFiltersOpen}
        personSearch={personSearch}
        peopleFilters={peopleFilters}
        selectedEmployeeIds={selectedEmployeeIds}
        selectedRole={selectedRole}
        onClose={() => setIsShareOpen(false)}
        onAddAccess={handleAddAccess}
        onChangeAccess={handleChangeAccess}
        onRemoveAccess={handleRemoveAccess}
        onPersonSearchChange={handlePersonSearchChange}
        onPeopleListOpenChange={setIsPeopleListOpen}
        onPeopleFiltersOpenChange={setIsPeopleFiltersOpen}
        onPeopleFilterToggle={handlePeopleFilterToggle}
        onPeopleFiltersClear={handlePeopleFiltersClear}
        onSelectedEmployeeRemove={handleSelectedEmployeeRemove}
        onSelectedEmployeeChange={handleSelectedEmployeeChange}
        onSelectAll={handleSelectAllCandidates}
        onSelectedRoleChange={setSelectedRole}
      />

      <AdminCourseModals
        action={adminAction}
        training={training}
        onClose={() => setAdminAction(null)}
      />

      {copyTooltipPosition && <LinkCopiedTooltip position={copyTooltipPosition} />}
    </>
  )
}

function LinkCopiedTooltip({ position }: { position: TooltipPosition }) {
  return (
    // F0Box cannot express the required fixed offsets/z-index for this copied-state tooltip.
    <div
      className="fixed z-[9999] -translate-x-1/2 rounded-md bg-f1-background-inverse px-3 py-2 shadow-lg"
      style={{ left: position.left, top: position.top }}
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
  isPeopleFiltersOpen,
  personSearch,
  peopleFilters,
  selectedEmployeeIds,
  selectedRole,
  onClose,
  onAddAccess,
  onChangeAccess,
  onRemoveAccess,
  onPersonSearchChange,
  onPeopleListOpenChange,
  onPeopleFiltersOpenChange,
  onPeopleFilterToggle,
  onPeopleFiltersClear,
  onSelectedEmployeeRemove,
  onSelectedEmployeeChange,
  onSelectAll,
  onSelectedRoleChange,
}: {
  isOpen: boolean
  training: Training
  peopleWithAccess: AccessRowModel[]
  notice: Notice | null
  candidateOptions: CandidateOption[]
  isPeopleListOpen: boolean
  isPeopleFiltersOpen: boolean
  personSearch: string
  peopleFilters: PeopleFilters
  selectedEmployeeIds: string[]
  selectedRole: EditableRole
  onClose: () => void
  onAddAccess: () => void
  onChangeAccess: (employeeId: string, role: EditableRole) => void
  onRemoveAccess: (employeeId: string) => void
  onPersonSearchChange: (value: string | undefined) => void
  onPeopleListOpenChange: (isOpen: boolean) => void
  onPeopleFiltersOpenChange: (isOpen: boolean) => void
  onPeopleFilterToggle: (filterKey: PeopleFilterKey, value: string) => void
  onPeopleFiltersClear: () => void
  onSelectedEmployeeRemove: (employeeId: string) => void
  onSelectedEmployeeChange: (employeeId: string) => void
  onSelectAll: (ids: string[]) => void
  onSelectedRoleChange: (role: EditableRole) => void
}) {
  const searchAreaRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isPeopleListOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target
      if (target instanceof Node && searchAreaRef.current?.contains(target)) return
      onPeopleListOpenChange(false)
      onPeopleFiltersOpenChange(false)
    }

    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [isPeopleListOpen, onPeopleFiltersOpenChange, onPeopleListOpenChange])

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
                  filtersCount={activeFiltersCount(peopleFilters)}
                  onSearchChange={onPersonSearchChange}
                  onRemove={onSelectedEmployeeRemove}
                  onToggleFilters={() => {
                    onPeopleListOpenChange(true)
                    onPeopleFiltersOpenChange(!isPeopleFiltersOpen)
                  }}
                />
              </F0Box>
              {isPeopleListOpen && (
                <PeopleSelectorPopover
                  candidates={candidateOptions}
                  filters={peopleFilters}
                  showFilters={isPeopleFiltersOpen}
                  selectedEmployeeIds={selectedEmployeeIds}
                  onSelect={(employeeId) => {
                    onSelectedEmployeeChange(employeeId)
                  }}
                  onSelectAll={onSelectAll}
                  onToggleFilter={(filterKey, value) => {
                    onPeopleFilterToggle(filterKey, value)
                    onPeopleFiltersOpenChange(false)
                  }}
                  onClearFilters={() => {
                    onPeopleFiltersClear()
                  }}
                  onCloseFilters={() => onPeopleFiltersOpenChange(false)}
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
          <F0Box display="flex" flexDirection="column">
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

        <GeneralAccessSection />
      </F0Box>
    </F0Dialog>
  )
}

function PeopleSearchInput({
  selectedEmployeeIds,
  searchValue,
  filtersCount,
  onSearchChange,
  onRemove,
  onToggleFilters,
}: {
  selectedEmployeeIds: string[]
  searchValue: string
  filtersCount: number
  onSearchChange: (value: string | undefined) => void
  onRemove: (employeeId: string) => void
  onToggleFilters: () => void
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text content="Add people" variant="label" />
      {/* The production EmployeeSelectorV2 trigger is not available in f0compose. */}
      <div className="flex min-h-8 w-full items-start gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background px-2 py-1 focus-within:border-f1-border-selected">
        <div className="flex flex-1 flex-wrap items-center gap-1">
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
        <button
          type="button"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-icon hover:bg-f1-background-hover"
          aria-label={filtersCount > 0 ? `${filtersCount} filters active` : "Open filters"}
          onClick={(event) => {
            event.stopPropagation()
            onToggleFilters()
          }}
        >
          <Filter />
        </button>
      </div>
    </F0Box>
  )
}

function PeopleSelectorPopover({
  candidates,
  filters,
  showFilters,
  selectedEmployeeIds,
  onSelect,
  onSelectAll,
  onToggleFilter,
  onClearFilters,
  onCloseFilters,
}: {
  candidates: CandidateOption[]
  filters: PeopleFilters
  showFilters: boolean
  selectedEmployeeIds: string[]
  onSelect: (employeeId: string) => void
  onSelectAll: (ids: string[]) => void
  onToggleFilter: (filterKey: PeopleFilterKey, value: string) => void
  onClearFilters: () => void
  onCloseFilters: () => void
}) {
  const selectedCount = activeFiltersCount(filters)
  const candidateIds = candidates.map((candidate) => candidate.value)
  const allCandidatesSelected =
    candidateIds.length > 0 &&
    candidateIds.every((id) => selectedEmployeeIds.includes(id))
  const someCandidatesSelected = candidateIds.some((id) =>
    selectedEmployeeIds.includes(id)
  )
  const [activeFilterKey, setActiveFilterKey] = useState<PeopleFilterKey>("workplace")
  const activeFilter = peopleFilterConfigs.find((config) => config.key === activeFilterKey)
  const activeFilterChips = peopleFilterConfigs.flatMap((config) =>
    filters[config.key].map((value) => ({
      key: config.key,
      value,
      label: `${config.label}: ${
        config.options.find((option) => option.value === value)?.label ?? value
      }`,
    }))
  )

  return (
    // F0Box cannot express the top-full placement needed by this selector popover.
    <div className="isolate absolute left-0 right-0 top-full z-50 mt-1 max-h-80 overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-lg">
      <div className="flex items-center justify-between border-0 border-b border-solid border-f1-border-secondary px-3 py-2">
        <F0Text
          content={showFilters ? "Filters" : `${selectedEmployeeIds.length} selected`}
          variant={showFilters ? "label" : "description"}
        />
        {showFilters ? (
          <div className="flex items-center gap-2">
            {selectedCount > 0 && (
              <F0Button label="Clear" variant="neutral" size="sm" onClick={onClearFilters} />
            )}
            <F0Button label="Done" variant="default" size="sm" onClick={onCloseFilters} />
          </div>
        ) : (
          candidateIds.length > 0 && (
            <F0Checkbox
              checked={allCandidatesSelected}
              indeterminate={someCandidatesSelected && !allCandidatesSelected}
              onCheckedChange={() => onSelectAll(candidateIds)}
              title="Select all"
              hideLabel
            />
          )
        )}
      </div>
      {showFilters ? (
        <div className="flex max-h-72 overflow-hidden">
          <div className="w-32 shrink-0 border-0 border-r border-solid border-f1-border-secondary p-1">
            {peopleFilterConfigs.map((config) => {
              const count = filters[config.key].length
              const selected = config.key === activeFilterKey
              return (
                <button
                  key={config.key}
                  type="button"
                  className={`flex w-full items-center justify-between rounded-md border-0 px-2 py-2 text-left text-sm ${
                    selected
                      ? "bg-f1-background-selected text-f1-foreground"
                      : "bg-transparent text-f1-foreground-secondary hover:bg-f1-background-hover"
                  }`}
                  onClick={() => setActiveFilterKey(config.key)}
                >
                  <span>{config.label}</span>
                  {count > 0 && <span>{count}</span>}
                </button>
              )
            })}
          </div>
          <div className="max-h-72 flex-1 overflow-y-auto p-1">
            {activeFilter?.options.map((option) => {
              const selected = filters[activeFilter.key].includes(option.value)
              return (
                <button
                  key={option.value}
                  type="button"
                  className={`flex w-full items-center justify-between rounded-md border-0 px-2 py-2 text-left text-sm ${
                    selected
                      ? "bg-f1-background-selected text-f1-foreground"
                      : "bg-transparent text-f1-foreground hover:bg-f1-background-hover"
                  }`}
                  onClick={() => onToggleFilter(activeFilter.key, option.value)}
                >
                  <span>{option.label}</span>
                  {selected && <F0Text content="Selected" variant="description" />}
                </button>
              )
            })}
          </div>
        </div>
      ) : (
        <>
          {activeFilterChips.length > 0 && (
            <div className="flex flex-wrap gap-1 border-0 border-b border-solid border-f1-border-secondary px-3 py-2">
              {activeFilterChips.map((chip) => (
                <span
                  key={`${chip.key}-${chip.value}`}
                  className="inline-flex items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-0.5 text-sm text-f1-foreground"
                >
                  {chip.label}
                  <button
                    type="button"
                    aria-label={`Remove ${chip.label}`}
                    className="cursor-pointer border-0 bg-transparent p-0 leading-none text-f1-foreground-secondary"
                    onClick={() => onToggleFilter(chip.key, chip.value)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
          <div className="max-h-72 overflow-y-auto p-1">
          {candidates.length > 0 ? (
            candidates.map((candidate) => {
              const selected = selectedEmployeeIds.includes(candidate.value)
              return (
                <button
                  key={candidate.value}
                  type="button"
                  onClick={() => onSelect(candidate.value)}
                  className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border-0 bg-transparent p-2 text-left hover:bg-f1-background-hover ${
                    selected ? "bg-f1-background-selected" : ""
                  }`}
                >
                  <PersonCell
                    employee={candidate.employee}
                    supportingText={candidate.employee.email}
                  />
                  <span className="pointer-events-none flex">
                    <F0Checkbox
                      checked={selected}
                      onCheckedChange={() => onSelect(candidate.value)}
                      title={`Select ${candidate.employee.fullName}`}
                      hideLabel
                    />
                  </span>
                </button>
              )
            })
          ) : (
            <F0Box padding="sm">
              <F0Text content="No people found" variant="description" />
            </F0Box>
          )}
          </div>
        </>
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
  const isOwner = access.role === "author"
  const isMutable = !isOwner
  const supportingText = isOwner ? "Created this course" : employee.email

  return (
    <F0Box
      display="flex"
      alignItems="center"
      justifyContent="between"
      gap="md"
      paddingY="sm"
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
          <F0TagStatus text={roleLabel(access.role)} variant="info" />
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

// Inherited access shown the way Notion/Google do it: a "General access" group
// row, not individual people and not a floating sentence. Admins get access via
// their global permission, so they appear here as a read-only group entry with
// the real admin faces stacked (no invented icon) and the same divider rhythm
// and muted access label as the people list above.
function GeneralAccessSection() {
  return (
    <F0Box display="flex" flexDirection="column" gap="sm">
      <F0Text content="General access" variant="label" />
      <F0Box
        display="flex"
        alignItems="center"
        justifyContent="between"
        gap="md"
        paddingY="sm"
      >
        <F0Box display="flex" alignItems="center" gap="sm" grow>
          <F0Avatar avatar={{ type: "icon", icon: People }} size="sm" />
          <F0Box display="flex" flexDirection="column" gap="none">
            <F0Text content="Trainings admins" variant="body" />
            <F0Text
              content="Anyone with the Trainings admin permission"
              variant="description"
            />
          </F0Box>
        </F0Box>
        <F0Text content="Full access" variant="description" />
      </F0Box>
    </F0Box>
  )
}
