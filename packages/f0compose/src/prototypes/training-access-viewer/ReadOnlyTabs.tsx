import { F0Alert, F0Box, F0Button, F0Card, F0Heading, F0Select, F0Text } from "@factorialco/f0-react"
import {
  OneDataCollection,
  SectionHeader,
  useDataCollectionSource,
  type GroupingDefinition,
} from "@factorialco/f0-react/dist/experimental"
import { Add, Download, File as FileIcon, Link as LinkIcon } from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"

import {
  answersForTraining,
  contentModulesForTraining,
  filesForTraining,
  participantsForTraining,
  surveyTemplates,
  type ContentBlock,
  type ContentBlockType,
  type SurveyTemplate,
  type Training,
  type TrainingClass,
  type TrainingFile,
  type TrainingParticipant,
} from "@/fixtures"
import { applySort } from "@/lib/applySort"

import { FormsModals } from "../trainings/detail/FormsModals"

type TrainingTabProps = { training: Training }
type ReadOnlyClassesTabProps = TrainingTabProps & { baseHref?: string }

type SyllabusItem = {
  id: string
  moduleId: string
  moduleTitle: string
  blockTitle: string
  blockType: ContentBlockType
  estimatedMinutes: number
  block: ContentBlock
}

const CONTENT_TYPE_LABEL: Record<ContentBlockType, string> = {
  page: "Page",
  video: "Video",
  quiz: "Quiz",
  scorm: "SCORM",
}

const CONTENT_TYPE_ICON: Record<ContentBlockType, string> = {
  page: "📄",
  video: "🎬",
  quiz: "❓",
  scorm: "📦",
}

const PARTICIPANT_STATUS_LABEL: Record<string, string> = {
  completed: "Completed",
  in_progress: "In progress",
  not_started: "Not started",
  expired: "Expired",
}

const PARTICIPANT_STATUS_VARIANT: Record<
  string,
  "positive" | "warning" | "neutral" | "critical"
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

type FormItem = {
  id: string
  title: string
  status: "draft" | "active"
  formType: "satisfaction" | "knowledge" | "feedback"
  answeredCount: number
  sentCount: number
  template: SurveyTemplate
}

const FORM_TYPE_LABEL: Record<FormItem["formType"], string> = {
  satisfaction: "Satisfaction",
  knowledge: "Knowledge check",
  feedback: "Feedback",
}

function buildForms(training: Training): FormItem[] {
  const linkedTemplates = surveyTemplates.slice(0, 3)
  const answers = answersForTraining(training.id)

  return linkedTemplates.map((template, index) => {
    const templateAnswers = answers.filter(
      (answer) => answer.templateId === template.id
    )

    return {
      id: `form-${template.id}`,
      title: template.name,
      status: index === 0 ? "draft" : "active",
      formType: template.category,
      answeredCount: templateAnswers.filter(
        (answer) => answer.status === "submitted"
      ).length,
      sentCount: templateAnswers.length,
      template,
    }
  })
}

type FundaeRow = {
  id: string
  fullName: string
  avatar: string
  identifier: string
  email: string
  phone: string
  professionalCategory: string
  educationLevel: string
  certificate: boolean
  hasMissingData: boolean
}

const PROFESSIONAL_CATEGORIES: Record<string, string> = {
  "emp-001": "Engineering Manager",
  "emp-002": "Senior Engineer",
  "emp-003": "Lead Designer",
  "emp-004": "Engineer",
  "emp-005": "HR Specialist",
}

const EDUCATION_LEVELS: Record<string, string> = {
  "emp-001": "Master",
  "emp-002": "Bachelor",
  "emp-003": "Bachelor",
  "emp-004": "",
  "emp-005": "Bachelor",
}

export function ReadOnlyContentTab({ training }: TrainingTabProps) {
  const modules = contentModulesForTraining(training.id)

  const moduleInfo = useMemo(
    () =>
      Object.fromEntries(
        modules.map((module) => [
          module.id,
          { title: module.title, blockCount: module.blocks.length },
        ])
      ),
    [modules]
  )

  const items: SyllabusItem[] = useMemo(
    () =>
      modules.flatMap((module) =>
        module.blocks.map((block) => ({
          id: block.id,
          moduleId: module.id,
          moduleTitle: module.title,
          blockTitle: block.title,
          blockType: block.type,
          estimatedMinutes: block.estimatedMinutes,
          block,
        }))
      ),
    [modules]
  )

  const grouping: GroupingDefinition<SyllabusItem> = {
    hideSelector: true,
    collapsible: true,
    mandatory: true,
    defaultOpenGroups: true,
    groupBy: {
      moduleId: {
        name: "Module",
        label: (groupId) => moduleInfo[String(groupId)]?.title ?? String(groupId),
        itemCount: (groupId) => moduleInfo[String(groupId)]?.blockCount ?? 0,
      },
    },
  }

  const source = useDataCollectionSource<SyllabusItem>(
    {
      currentGrouping: { field: "moduleId", order: "asc" },
      grouping,
      dataAdapter: {
        paginationType: "pages",
        perPage: 500,
        fetchData: () => ({
          type: "pages" as const,
          records: items,
          total: items.length,
          perPage: 500,
          currentPage: 1,
          pagesCount: 1,
        }),
      },
    },
    [training.id, items]
  )

  if (modules.length === 0) {
    return (
      <F0Alert
        variant="info"
        title="No content yet"
        description="This training has no published content to view."
      />
    )
  }

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Heading content="Course content" variant="heading" as="h2" />
      <OneDataCollection
        id={`training-access-viewer/content-${training.id}/v1`}
        source={source}
        visualizations={[
          {
            type: "list",
            options: {
              itemDefinition: (item: SyllabusItem) => ({
                title: item.blockTitle,
                description: [
                  `${CONTENT_TYPE_LABEL[item.blockType]} • ${item.estimatedMinutes} min`,
                ],
                avatar: {
                  type: "emoji" as const,
                  emoji: CONTENT_TYPE_ICON[item.blockType],
                  "aria-label": CONTENT_TYPE_LABEL[item.blockType],
                },
              }),
              fields: [],
            },
          },
        ]}
      />
    </F0Box>
  )
}

export function ReadOnlyClassesTab({
  training,
  baseHref = "/p/training-access-viewer",
}: ReadOnlyClassesTabProps) {
  const startDateOptions = Array.from(
    new Set(
      training.classes
        .map((group) => group.startDate)
        .filter((date): date is string => Boolean(date))
    )
  ).map((date) => ({ label: date, value: date }))
  const endDateOptions = Array.from(
    new Set(
      training.classes
        .map((group) => group.endDate)
        .filter((date): date is string => Boolean(date))
    )
  ).map((date) => ({ label: date, value: date }))

  const source = useDataCollectionSource<TrainingClass>(
    {
      search: { enabled: true, sync: true },
      sortings: {
        startDate: { label: "Start date" },
        endDate: { label: "End date" },
      },
      itemUrl: (group) => `${baseHref}?training=${training.id}&dtab=groups&class=${group.id}`,
      defaultSortings: { field: "startDate", order: "asc" },
      filters: {
        startDate: {
          type: "in",
          label: "Start date",
          options: { options: startDateOptions },
        },
        endDate: {
          type: "in",
          label: "End date",
          options: { options: endDateOptions },
        },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, sortings, filters, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const wantedStart = Array.isArray(filters?.startDate)
            ? (filters.startDate as string[])
            : []
          const wantedEnd = Array.isArray(filters?.endDate)
            ? (filters.endDate as string[])
            : []

          const filtered = training.classes.filter((group) => {
            if (term !== "" && !group.name.toLowerCase().includes(term)) return false
            if (
              wantedStart.length > 0 &&
              !wantedStart.includes(group.startDate ?? "")
            ) {
              return false
            }
            if (wantedEnd.length > 0 && !wantedEnd.includes(group.endDate ?? "")) {
              return false
            }
            return true
          })

          const sorted = applySort(filtered, sortings, (group, field) => {
            if (field === "startDate") return group.startDate ?? ""
            if (field === "endDate") return group.endDate ?? ""
            return null
          })

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage

          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "New group",
        icon: Add,
        disabled: true,
        description: "Only admins can create training groups.",
      }),
    },
    [training.id]
  )

  return (
    <OneDataCollection
      id={`training-access-viewer/groups-${training.id}/v1`}
      source={source}
      emptyStates={{
        "no-data": {
          emoji: "👥",
          title: "No groups yet",
          description:
            "Groups will appear here once this training has assigned employees, sessions or costs.",
        },
      }}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              {
                label: "Group",
                render: (group: TrainingClass) => ({
                  type: "text" as const,
                  value: group.name,
                }),
              },
              {
                label: "Start date",
                sorting: "startDate",
                render: (group: TrainingClass) => ({
                  type: "text" as const,
                  value: group.startDate ?? "-",
                }),
              },
              {
                label: "End date",
                sorting: "endDate",
                render: (group: TrainingClass) => ({
                  type: "text" as const,
                  value: group.endDate ?? "-",
                }),
              },
              {
                label: "Sessions",
                render: (group: TrainingClass) => ({
                  type: "text" as const,
                  value: String(group.sessionCount),
                }),
              },
              {
                label: "Participants",
                render: (group: TrainingClass) => ({
                  type: "avatarList" as const,
                  value: {
                    avatarList: group.participants.map((participant) => ({
                      firstName: participant.firstName,
                      lastName: participant.lastName,
                      type: "person" as const,
                      src: participant.src,
                    })),
                    max: 5,
                  },
                }),
              },
              {
                label: "Participation rate",
                render: (group: TrainingClass) => {
                  const completed = group.completedAttendancesCount
                  const total = group.totalAttendancesCount
                  const percentage =
                    total > 0 ? Number(((completed / total) * 100).toFixed(1)) : 0

                  return {
                    type: "percentage" as const,
                    value: { label: `${percentage}%`, percentage },
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

export function ReadOnlyParticipantsTab({ training }: TrainingTabProps) {
  const rows = participantsForTraining(training.id)
  const source = useParticipantsSource(training, rows)

  return (
    <OneDataCollection
      id={`training-access-viewer/participants-${training.id}/v1`}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            frozenColumns: 1,
            allowColumnHiding: true,
            columns: getParticipantColumns(training),
          },
        },
      ]}
    />
  )
}

function useParticipantsSource(
  training: Training,
  rows: TrainingParticipant[]
) {
  return useDataCollectionSource<TrainingParticipant>(
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
              { value: "expired", label: "Expired" },
            ],
          },
        },
      },
      sortings: {
        fullName: { label: "Employee" },
        status: { label: "Status" },
        trainingCompletedAt: { label: "Completion date" },
        trainingDueDate: { label: "Due date" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = rows
            .filter((row) =>
              statusFilter.length === 0 ? true : statusFilter.includes(row.status)
            )
            .filter((row) =>
              term === "" ? true : row.employeeName.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (row, field) => {
            if (field === "fullName") return row.employeeName.toLowerCase()
            if (field === "status") return PARTICIPANT_STATUS_LABEL[row.status]
            if (field === "trainingCompletedAt") return row.completionDate ?? ""
            if (field === "trainingDueDate") return row.dueDate ?? ""
            return null
          })

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage

          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "Add participants",
        icon: Add,
        disabled: true,
        description: "Only admins can manage participants.",
      }),
    },
    [training.id, rows]
  )
}

function getParticipantColumns(training: Training) {
  return [
    {
      label: "Employee",
      sorting: "fullName" as const,
      render: (row: TrainingParticipant) => ({
        type: "person" as const,
        value: {
          firstName: row.employeeName.split(" ")[0] ?? "",
          lastName: row.employeeName.split(" ").slice(1).join(" "),
          src: row.employeeAvatar,
        },
      }),
    },
    {
      label: "Status",
      sorting: "status" as const,
      render: (row: TrainingParticipant) => ({
        type: "status" as const,
        value: {
          status: PARTICIPANT_STATUS_VARIANT[row.status] ?? "neutral",
          label: PARTICIPANT_STATUS_LABEL[row.status] ?? row.status,
        },
      }),
    },
    {
      label: "Certificate",
      render: (row: TrainingParticipant) => ({
        type: "text" as const,
        value:
          row.certificateCount === 0
            ? "-"
            : row.certificateCount === 1
              ? "1 file"
              : `${row.certificateCount} files`,
      }),
    },
    {
      label: "Completion date",
      sorting: "trainingCompletedAt" as const,
      render: (row: TrainingParticipant) => ({
        type: "text" as const,
        value: row.completionDate ?? "-",
      }),
    },
    ...(training.courseValidityEnabled
      ? [
          {
            label: "Course validity date",
            sorting: "trainingDueDate" as const,
            render: (row: TrainingParticipant) => getDueDateCell(row),
          },
        ]
      : []),
    ...(training.isSessionsRequired
      ? [
          {
            label: "Session attendance",
            render: (row: TrainingParticipant) => ({
              type: "percentage" as const,
              value: {
                percentage: row.attendancePercentage,
                label: `${row.sessionsAttended}/${row.sessionsTotal}`,
              },
            }),
          },
        ]
      : []),
    ...(training.knowledgeTestRequired
      ? [
          {
            label: "Knowledge test",
            render: (row: TrainingParticipant) => getKnowledgeTestCell(row),
          },
        ]
      : []),
    ...(training.isModulesRequired
      ? [
          {
            label: "Module progress",
            render: (row: TrainingParticipant) => {
              const completed = row.completedModules ?? 0
              const total = row.totalModules ?? 0
              const percentage =
                total > 0 ? Number(((completed / total) * 100).toFixed(1)) : 0

              return {
                type: "percentage" as const,
                value: {
                  percentage,
                  label: `${completed}/${total}`,
                },
              }
            },
          },
        ]
      : []),
  ]
}

function getDueDateCell(row: TrainingParticipant) {
  if (!row.dueDate) return { type: "text" as const, value: "-" }

  const today = new Date("2026-05-05")
  const dueDate = new Date(row.dueDate)
  const isExpired = dueDate < today
  const isSoon =
    !isExpired &&
    (dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) <= 30

  if (isExpired) {
    return {
      type: "status" as const,
      value: { status: "critical" as const, label: row.dueDate },
    }
  }
  if (isSoon) {
    return {
      type: "status" as const,
      value: { status: "warning" as const, label: row.dueDate },
    }
  }

  return { type: "text" as const, value: row.dueDate }
}

function getKnowledgeTestCell(row: TrainingParticipant) {
  if (row.knowledgeTestPassed === null || row.knowledgeTestPassed === undefined) {
    return {
      type: "status" as const,
      value: { status: "warning" as const, label: "Pending" },
    }
  }

  if (row.knowledgeTestPassed) {
    return {
      type: "status" as const,
      value: { status: "positive" as const, label: "Passed" },
    }
  }

  return {
    type: "status" as const,
    value: { status: "critical" as const, label: "Failed" },
  }
}

export function ReadOnlyAttachmentsTab({ training }: TrainingTabProps) {
  const allFiles = filesForTraining(training.id)
    .slice()
    .sort((first, second) => (first.name > second.name ? 1 : -1))

  const source = useFilesSource(training, allFiles)

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <SectionHeader
        title="Materials"
        description="Files and links shared with participants — handbooks, slides, videos, external resources."
        separator="bottom"
      />
      <OneDataCollection
        id={`training-access-viewer/materials-${training.id}/v1`}
        source={source}
        emptyStates={{
          "no-data": {
            title: "No materials yet",
            description: "Materials shared with participants will appear here.",
          },
        }}
        visualizations={[
          {
            type: "card",
            options: {
              title: (item: TrainingFile) => item.name,
              description: (item: TrainingFile) =>
                item.type === "link" ? "" : item.size ?? "",
              cardProperties: [
                {
                  label: "",
                  icon: LinkIcon,
                  render: (item: TrainingFile) => {
                    if (item.type !== "link") return
                    return { type: "text" as const, value: item.url }
                  },
                },
                {
                  label: "",
                  icon: FileIcon,
                  render: (item: TrainingFile) => {
                    if (item.type === "link") return
                    return {
                      type: "file" as const,
                      value: { name: item.name, type: item.type },
                    }
                  },
                },
              ],
            },
          },
        ]}
      />
    </F0Box>
  )
}

function useFilesSource(training: Training, allFiles: TrainingFile[]) {
  return useDataCollectionSource<TrainingFile>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = allFiles.filter((file) =>
            term === "" ? true : file.name.toLowerCase().includes(term)
          )
          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = filtered.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage

          return {
            type: "pages" as const,
            records: filtered.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "Upload",
        icon: Add,
        disabled: true,
        description: "Only admins can manage materials and documents.",
      }),
      secondaryActions: {
        expanded: 1,
        actions: () => [
          {
            label: "New link",
            icon: LinkIcon,
            disabled: true,
            description: "Only admins can manage materials and documents.",
          },
        ],
      },
    },
    [training.id, allFiles]
  )
}

export function ReadOnlyDocumentsTab({ training }: TrainingTabProps) {
  const allFiles = filesForTraining(training.id)
  const source = useFilesSource(training, allFiles)

  if (allFiles.length === 0) {
    return (
      <F0Box display="flex" flexDirection="column" gap="lg">
        <SectionHeader
          title="Documents"
          description="Files visible to admins and HR — internal paperwork, attendance sheets, signed agreements."
          separator="bottom"
        />
        <F0Alert
          variant="info"
          title="No documents yet"
          description="Training-related paperwork will appear here."
        />
      </F0Box>
    )
  }

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <SectionHeader
        title="Documents"
        description="Files visible to admins and HR — internal paperwork, attendance sheets, signed agreements."
        separator="bottom"
      />
      <OneDataCollection
        id={`training-access-viewer/documents-${training.id}/v1`}
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              frozenColumns: 1,
              allowColumnHiding: true,
              columns: [
                {
                  label: "Name",
                  render: (file: TrainingFile) => ({
                    type: "text" as const,
                    value: `${FILE_ICON_BY_TYPE[file.type] ?? "📄"}  ${file.name}`,
                  }),
                },
                {
                  label: "Size",
                  render: (file: TrainingFile) => ({
                    type: "text" as const,
                    value: file.size ?? "-",
                  }),
                },
                {
                  label: "Uploaded",
                  render: (file: TrainingFile) => ({
                    type: "text" as const,
                    value: file.uploadedAt.slice(0, 10),
                  }),
                },
                {
                  label: "Uploaded by",
                  render: (file: TrainingFile) => ({
                    type: "text" as const,
                    value: file.uploadedBy,
                  }),
                },
              ],
            },
          },
        ]}
      />
    </F0Box>
  )
}

export function ReadOnlyFormsTab({ training }: TrainingTabProps) {
  const allForms = buildForms(training)
  const [selectedTemplate, setSelectedTemplate] = useState<SurveyTemplate | null>(null)
  const source = useFormsSource(training, allForms, setSelectedTemplate)

  return (
    <>
      <OneDataCollection
        id={`training-access-viewer/all_forms-${training.id}/v1`}
        source={source}
        emptyStates={{
          "no-data": {
            emoji: "📋",
            title: "No surveys yet",
            description: "Surveys linked to this training will appear here.",
          },
        }}
        visualizations={[
          {
            type: "table",
            options: {
              frozenColumns: 1,
              columns: [
                {
                  label: "Name",
                  render: (item: FormItem) => ({
                    type: "text" as const,
                    value: item.title,
                  }),
                },
                {
                  label: "Status",
                  render: (item: FormItem) => ({
                    type: "status" as const,
                    value: {
                      label: item.status === "draft" ? "Draft" : "Published",
                      status: item.status === "draft" ? "neutral" : "positive",
                    },
                  }),
                },
                {
                  label: "Type",
                  render: (item: FormItem) => ({
                    type: "text" as const,
                    value: FORM_TYPE_LABEL[item.formType],
                  }),
                },
                {
                  label: "Participation rate",
                  render: (item: FormItem) => {
                    const percentage =
                      item.sentCount > 0
                        ? Number(((item.answeredCount / item.sentCount) * 100).toFixed(1))
                        : 0

                    return {
                      type: "percentage" as const,
                      value: { label: `${percentage}%`, percentage },
                    }
                  },
                },
              ],
            },
          },
        ]}
      />
      <FormsModals
        action={selectedTemplate ? "preview-template" : null}
        training={training}
        template={selectedTemplate}
        answer={null}
        onClose={() => setSelectedTemplate(null)}
      />
    </>
  )
}

function useFormsSource(
  training: Training,
  allForms: FormItem[],
  setSelectedTemplate: (template: SurveyTemplate) => void
) {
  return useDataCollectionSource<FormItem>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { label: "Draft", value: "draft" },
              { label: "Active", value: "active" },
            ],
          },
        },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, filters, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const wantedStatus = Array.isArray(filters?.status)
            ? (filters.status as FormItem["status"][])
            : []

          const filtered = allForms.filter((form) => {
            if (term !== "" && !form.title.toLowerCase().includes(term)) return false
            if (wantedStatus.length > 0 && !wantedStatus.includes(form.status)) {
              return false
            }
            return true
          })

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = filtered.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage

          return {
            type: "pages" as const,
            records: filtered.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "New survey",
        icon: Add,
        disabled: true,
        description: "Only admins can create surveys.",
      }),
      itemOnClick: (item) => () => setSelectedTemplate(item.template),
    },
    [training.id, allForms, setSelectedTemplate]
  )
}

export function ReadOnlyFundaeTab({ training }: TrainingTabProps) {
  if (!training.fundaeSubsidized) {
    return (
      <F0Box display="flex" flexDirection="column" gap="lg" padding="xl">
        <F0Alert
          variant="warning"
          title="This training is not marked as Fundae-bonifiable"
          description="Fundae information will appear here when it is enabled for this training."
        />
      </F0Box>
    )
  }

  if (training.classes.length === 0) {
    return (
      <F0Alert
        variant="info"
        title="No groups yet for this training"
        description="Fundae details will appear once a group exists for this training."
      />
    )
  }

  return <ReadOnlyFundaeDashboard training={training} />
}

function ReadOnlyFundaeDashboard({ training }: TrainingTabProps) {
  const classes = training.classes
  const [selectedClassId, setSelectedClassId] = useState(classes[0]?.id ?? "")
  const selectedClass = classes.find((group) => group.id === selectedClassId)

  if (!selectedClass) return null

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <SectionHeader
        separator="bottom"
        title="Finalise training group (Fundae)"
        description="Review the Fundae data prepared for the selected training group."
      />
      <F0Box display="flex" flexDirection="column" gap="2xl">
        <F0Box display="flex" gap="sm">
          <F0Button
            label="Open Fundae portal"
            icon={LinkIcon}
            disabled
            variant="outline"
            size="sm"
          />
          <F0Button
            label="Export XML"
            icon={Download}
            disabled
            variant="outline"
            size="sm"
          />
        </F0Box>
        <F0Box maxWidth="md">
          <F0Select
            label="Training group"
            placeholder="Select a group"
            value={selectedClassId}
            onChange={(value: string) => setSelectedClassId(value)}
            options={classes.map((group) => ({ value: group.id, label: group.name }))}
          />
        </F0Box>
        <F0Alert
          variant="info"
          title="Shared access is read-only here"
          description="You can inspect Fundae setup and participant data, but exporting XML or editing costs requires admin access."
        />
        <F0Card title="Group details">
          <F0Box display="grid" columns="2" gap="lg" padding="lg">
            <ReadOnlyField
              label="Group code"
              value={selectedClass.fundaeConfig?.codigoGrupo ?? "-"}
            />
            <ReadOnlyField label="Course code" value={training.codigoCurso ?? "-"} />
            <ReadOnlyField label="Direct costs (€)" value={selectedClass.cost ?? "-"} />
            <ReadOnlyField
              label="Indirect costs (€)"
              value={selectedClass.indirectCost ?? "-"}
            />
            <ReadOnlyField
              label="Salary costs (€)"
              value={selectedClass.salaryCost ?? "-"}
            />
          </F0Box>
        </F0Card>
        <ReadOnlyFundaeParticipantsTable
          trainingClass={selectedClass}
          trainingId={training.id}
        />
      </F0Box>
    </F0Box>
  )
}

function ReadOnlyField({ label, value }: { label: string; value: string }) {
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="xs"
      padding="md"
      border="default"
      borderColor="secondary"
      borderRadius="md"
    >
      <F0Text content={label} variant="label" />
      <F0Text content={value} variant="body" />
    </F0Box>
  )
}

function ReadOnlyFundaeParticipantsTable({
  trainingClass,
  trainingId,
}: {
  trainingClass: TrainingClass
  trainingId: string
}) {
  const rows = useMemo(
    () => buildRowsForClass(trainingId, trainingClass),
    [trainingClass.id, trainingId]
  )

  const source = useDataCollectionSource<FundaeRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        missingData: {
          type: "in",
          label: "Missing data",
          options: {
            options: [
              { value: "missing", label: "Missing data" },
              { value: "complete", label: "Complete" },
            ],
          },
        },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, filters, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const missingFilter = (filters?.missingData ?? []) as string[]
          const filtered = rows.filter((row) => {
            const matchesSearch =
              term === "" ||
              row.fullName.toLowerCase().includes(term) ||
              row.identifier.toLowerCase().includes(term)
            const matchesMissing =
              missingFilter.length === 0 ||
              (missingFilter.includes("missing") && row.hasMissingData) ||
              (missingFilter.includes("complete") && !row.hasMissingData)
            return matchesSearch && matchesMissing
          })
          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = filtered.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage

          return {
            type: "pages" as const,
            records: filtered.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
    },
    [trainingClass.id, trainingId, rows]
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Heading as="h3" variant="heading" content="Participants" />
      <OneDataCollection
        id={`training-access-viewer/fundae-${trainingId}-${trainingClass.id}/v1`}
        source={source}
        emptyStates={{
          "no-data": {
            title: "No participants in this group",
            description: "Participants assigned to this group will appear here.",
          },
        }}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Participant",
                  render: (row: FundaeRow) => ({
                    type: "person" as const,
                    value: {
                      firstName: row.fullName.split(" ")[0] ?? row.fullName,
                      lastName: row.fullName.split(" ").slice(1).join(" "),
                      src: row.avatar,
                    },
                  }),
                },
                {
                  label: "NIF / NIE",
                  render: (row: FundaeRow) => row.identifier || "-",
                },
                {
                  label: "Phone",
                  render: (row: FundaeRow) => row.phone || "Missing",
                },
                {
                  label: "Professional category",
                  render: (row: FundaeRow) => row.professionalCategory || "Missing",
                },
                {
                  label: "Education level",
                  render: (row: FundaeRow) => row.educationLevel || "Missing",
                },
                {
                  label: "Diploma",
                  render: (row: FundaeRow) => (row.certificate ? "Yes" : "No"),
                },
              ],
            },
          },
        ]}
      />
    </F0Box>
  )
}

function buildRowsForClass(
  trainingId: string,
  trainingClass: TrainingClass
): FundaeRow[] {
  const allParticipants = participantsForTraining(trainingId)
  const participantsInClass = allParticipants.filter(
    (participant) =>
      participant.classId === trainingClass.id || participant.classId === null
  )

  return participantsInClass.map((participant, index) =>
    mapParticipantToFundaeRow(participant, index)
  )
}

function mapParticipantToFundaeRow(
  participant: TrainingParticipant,
  index: number
): FundaeRow {
  const nifNumber = String(10000000 + index * 1234567).slice(0, 8)
  const nifLetter = "TRWAGMYFPDXBNJZSQVHLCKE"[
    Number(nifNumber) % 23
  ] as string
  const missingPhone = index % 3 === 0
  const missingCategory = index % 4 === 1
  const missingEducation = (EDUCATION_LEVELS[participant.employeeId] ?? "") === ""

  return {
    id: participant.id,
    fullName: participant.employeeName,
    avatar: participant.employeeAvatar,
    identifier: `${nifNumber}${nifLetter}`,
    email: `${participant.employeeName.toLowerCase().replace(/\s+/g, ".")}@example.com`,
    phone: missingPhone ? "" : `+34 6${String(10000000 + index * 31).slice(-8)}`,
    professionalCategory: missingCategory
      ? ""
      : PROFESSIONAL_CATEGORIES[participant.employeeId] ?? "Specialist",
    educationLevel: EDUCATION_LEVELS[participant.employeeId] ?? "",
    certificate: participant.certificateCount > 0,
    hasMissingData: missingPhone || missingCategory || missingEducation,
  }
}
