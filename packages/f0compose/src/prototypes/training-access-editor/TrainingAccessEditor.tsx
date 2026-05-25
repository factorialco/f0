import { F0Text } from "@factorialco/f0-react"
import {
  OneDataCollection,
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { Link } from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { type Training, findTraining, trainings } from "@/fixtures"
import { applySort } from "@/lib/applySort"

import { AttachmentsTab } from "../trainings/detail/AttachmentsTab"
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
  slug: "training-access-editor",
  title: "Training access editor",
  description: "Editor experience for a course shared with Can edit access.",
  category: "Talent",
  module: "trainings",
  audience: ["employee", "manager"],
  tags: ["trainings", "permissions", "sharing", "editor"],
  createdAt: "2026-05-25",
}

const BASE_HREF = "/p/training-access-editor"
const EDITOR_TRAINING_IDS = new Set(["trn-001", "trn-003"])
const ROLE_TRAINING_IDS = {
  editor: EDITOR_TRAINING_IDS,
  viewer: new Set(["trn-002", "trn-004"]),
}
const editorTrainings = trainings.filter((item) => EDITOR_TRAINING_IDS.has(item.id))
const VALID_TABS = new Set<string>(detailTabs.map((tab) => tab.id))

function getTotalDuration(training: Training) {
  const totalMinutes = training.totalDuration * 60
  const hours = Math.floor(totalMinutes / 60)
  const minutes = Math.round(totalMinutes % 60)
  return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`
}

export default function TrainingAccessEditor() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isCopyLinkCopied, setIsCopyLinkCopied] = useState(false)
  const copyTooltipTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (copyTooltipTimeoutRef.current) window.clearTimeout(copyTooltipTimeoutRef.current)
    }
  }, [])
  const trainingId = searchParams.get("training")
  const rawTab = searchParams.get("dtab")
  const classId = searchParams.get("class")
  const requestedTraining = trainingId ? findTraining(trainingId) : undefined
  const selectedTraining = requestedTraining
    ? editorTrainings.find((item) => item.id === requestedTraining.id)
    : classId
      ? editorTrainings.find((item) =>
          item.classes.some((klass) => klass.id === classId)
        )
      : undefined
  const activeTab: DetailTabId =
    rawTab && VALID_TABS.has(rawTab) ? (rawTab as DetailTabId) : "overview"

  if (!selectedTraining) {
    return <RoleCoursesList accessRole="editor" baseHref={BASE_HREF} />
  }

  const training = selectedTraining
  const trainingHref = `${BASE_HREF}?training=${training.id}`

  const tabsWithNav = detailTabs.map((tab) => ({
    ...tab,
    onClick: () => {
      const next = new URLSearchParams(searchParams)
      next.set("dtab", tab.id)
      setSearchParams(next)
    },
  }))

  const handleCopyLink = () => {
    setIsCopyLinkCopied(true)
    void navigator.clipboard?.writeText(window.location.href)?.catch(() => {})
    if (copyTooltipTimeoutRef.current) window.clearTimeout(copyTooltipTimeoutRef.current)
    copyTooltipTimeoutRef.current = window.setTimeout(() => {
      setIsCopyLinkCopied(false)
      copyTooltipTimeoutRef.current = null
    }, 4000)
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
                  label: "Access",
                  value: {
                    type: "status",
                    label: "Can edit",
                    variant: "warning",
                  },
                },
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
                          content: getTotalDuration(training),
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
              secondaryActions={[
                {
                  label: "Copy link",
                  icon: Link,
                  onClick: handleCopyLink,
                  tooltip: "Copy link",
                  hideLabel: true,
                },
              ]}
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

type AccessRole = "editor" | "viewer"

function RoleCoursesList({
  accessRole,
  baseHref,
}: {
  accessRole: AccessRole
  baseHref: string
}) {
  const rows = trainings.filter((training) => ROLE_TRAINING_IDS[accessRole].has(training.id))
  const source = useDataCollectionSource<Training>(
    {
      search: { enabled: true, sync: true },
      presets: [
        {
          label:
            accessRole === "editor"
              ? "Trainings I can edit"
              : "Trainings I can view",
          filter: {},
        },
      ],
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Published" },
              { value: "draft", label: "Draft" },
            ],
          },
        },
      },
      sortings: {
        name: { label: "Name" },
        year: { label: "Year" },
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
            .filter((training) =>
              statusFilter.length === 0
                ? true
                : statusFilter.includes(training.status)
            )
            .filter((training) =>
              term === "" ? true : training.name.toLowerCase().includes(term)
            )
          const sorted = applySort(filtered, sortings, (training, field) => {
            if (field === "name") return training.name.toLowerCase()
            if (field === "year") return training.year
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
      itemUrl: (training) => `${baseHref}?training=${training.id}`,
    },
    [accessRole, baseHref]
  )

  const accessLabel = accessRole === "editor" ? "Can edit" : "Can view"
  const accessStatus = accessRole === "editor" ? "warning" : "info"

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{ id: "company_trainings", name: "Trainings", href: baseHref }}
            breadcrumbs={[{ id: "courses", label: "Courses" }]}
          />
          <ResourceHeader
            title="Courses"
            description={
              accessRole === "editor"
                ? "Courses shared with you as Can edit."
                : "Courses shared with you as Can view."
            }
            metadata={[
              {
                label: "Access",
                value: {
                  type: "status",
                  label: accessLabel,
                  variant: accessStatus,
                },
              },
            ]}
          />
        </>
      }
    >
      <PageContent>
        <OneDataCollection
          id={`training-access-${accessRole}/courses/v1`}
          source={source}
          visualizations={[
            {
              type: "table",
              options: {
                frozenColumns: 1,
                columns: [
                  {
                    label: "Name",
                    sorting: "name",
                    render: (training) => ({
                      type: "text" as const,
                      value: training.name,
                    }),
                  },
                  {
                    label: "Access",
                    render: () => ({
                      type: "status" as const,
                      value: {
                        status: accessStatus,
                        label: accessLabel,
                      },
                    }),
                  },
                  {
                    label: "Status",
                    render: (training) => ({
                      type: "status" as const,
                      value: {
                        status: training.status === "active" ? "positive" : "neutral",
                        label: training.status === "active" ? "Published" : "Draft",
                      },
                    }),
                  },
                  {
                    label: "Participants",
                    render: (training) => ({
                      type: "number" as const,
                      value: training.participantCount,
                    }),
                  },
                  {
                    label: "Groups",
                    render: (training) => ({
                      type: "text" as const,
                      value: String(training.classes.length),
                    }),
                  },
                ],
              },
            },
          ]}
        />
      </PageContent>
    </Page>
  )
}
