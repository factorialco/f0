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
import { OverviewTab } from "../trainings/detail/OverviewTab"
import { PageContent } from "../trainings/_shared/PageContent"
import { type DetailTabId, detailTabs } from "../trainings/tabs"
import type { PrototypeMeta } from "../types"
import {
  ReadOnlyAttachmentsTab,
  ReadOnlyClassesTab,
  ReadOnlyContentTab,
  ReadOnlyDocumentsTab,
  ReadOnlyFormsTab,
  ReadOnlyFundaeTab,
  ReadOnlyParticipantsTab,
} from "./ReadOnlyTabs"
import { ReadOnlyClassDetail } from "./ReadOnlyClassDetail"

export const meta: PrototypeMeta = {
  slug: "training-access-viewer",
  title: "Training access viewer",
  description: "Viewer experience for a course shared with Can view access.",
  category: "Talent",
  module: "trainings",
  audience: ["employee", "manager"],
  tags: ["trainings", "permissions", "sharing", "viewer"],
  createdAt: "2026-05-25",
}

const BASE_HREF = "/p/training-access-viewer"
const VIEWER_TRAINING_IDS = new Set(["trn-002", "trn-004"])
const viewerTrainings = trainings.filter((item) => VIEWER_TRAINING_IDS.has(item.id))
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

export default function TrainingAccessViewer() {
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
    ? viewerTrainings.find((item) => item.id === requestedTraining.id)
    : classId
      ? viewerTrainings.find((item) =>
          item.classes.some((klass) => klass.id === classId)
        )
      : undefined
  const activeTab: DetailTabId =
    rawTab && VALID_TABS.has(rawTab) ? (rawTab as DetailTabId) : "overview"

  if (!selectedTraining) {
    return (
      <AccessCoursesPage
        baseHref={BASE_HREF}
        role="viewer"
        trainingIds={VIEWER_TRAINING_IDS}
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
      <ReadOnlyClassDetail
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
                  label: "Can view",
                  variant: "info",
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
          {activeTab === "content" && <ReadOnlyContentTab training={training} />}
          {activeTab === "groups" && (
            <ReadOnlyClassesTab training={training} baseHref={BASE_HREF} hideActions />
          )}
          {activeTab === "participants" && (
            <ReadOnlyParticipantsTab training={training} hideActions />
          )}
          {activeTab === "attachments" && (
            <ReadOnlyAttachmentsTab training={training} hideActions />
          )}
          {activeTab === "documents" && <ReadOnlyDocumentsTab training={training} />}
          {activeTab === "surveys" && <ReadOnlyFormsTab training={training} hideActions />}
          {activeTab === "fundae" && <ReadOnlyFundaeTab training={training} hideActions />}
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
