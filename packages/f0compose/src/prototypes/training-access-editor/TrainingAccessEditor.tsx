import { F0Text } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Link } from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { type Training, findTraining, trainings } from "@/fixtures"

import { AccessCoursesPage } from "../training-access-shared/AccessCoursesPage"
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
const editorTrainings = trainings.filter((item) => EDITOR_TRAINING_IDS.has(item.id))
const VALID_TABS = new Set<string>(detailTabs.map((tab) => tab.id))

type TooltipPosition = {
  top: number
  left: number
}

function getTotalDuration(training: Training) {
  const totalMinutes = training.totalDuration * 60
  const hours = Math.floor(totalMinutes / 60)
  const minutes = Math.round(totalMinutes % 60)
  return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`
}

export default function TrainingAccessEditor() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [copyTooltipPosition, setCopyTooltipPosition] = useState<TooltipPosition | null>(null)
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
    return (
      <AccessCoursesPage
        baseHref={BASE_HREF}
        role="editor"
        trainingIds={EDITOR_TRAINING_IDS}
      />
    )
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
