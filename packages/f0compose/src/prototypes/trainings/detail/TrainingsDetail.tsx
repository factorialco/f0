import {
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Link, Reset, Settings } from "@factorialco/f0-react/icons/app"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import type { Training } from "@/fixtures"

import { AdminModals, type AdminAction } from "./AdminModals"
import { AttachmentsTab } from "./AttachmentsTab"
import { ClassesTab } from "./ClassesTab"
import { ContentTab } from "./ContentTab"
import { DocumentsTab } from "./DocumentsTab"
import { FormsTab } from "./FormsTab"
import { FundaeTab } from "./FundaeTab"
import { OverviewTab } from "./OverviewTab"
import { ParticipantsTab } from "./ParticipantsTab"
import { type DetailTabId, detailTabs } from "../tabs"
import { PageContent } from "../_shared/PageContent"

const VALID_TABS = new Set<string>(detailTabs.map((t) => t.id))

type Props = {
  training: Training
  onBack: () => void
}

export function TrainingsDetail({ training, onBack }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [adminAction, setAdminAction] = useState<AdminAction>(null)

  const rawTab = searchParams.get("dtab")
  const activeTab: DetailTabId =
    rawTab && VALID_TABS.has(rawTab) ? (rawTab as DetailTabId) : "overview"

  const setTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    next.set("dtab", id)
    setSearchParams(next)
  }

  const tabsWithNav = detailTabs.map((t) => ({
    ...t,
    onClick: () => setTab(t.id),
  }))

  const isDraft = training.status === "draft"

  const getTotalDuration = () => {
    const totalMinutes = training.totalDuration * 60
    const hours = Math.floor(totalMinutes / 60)
    const minutes = Math.round(totalMinutes % 60)
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`
  }

  const secondaryActions = [
    ...(!isDraft
      ? [
          {
            label: "Copy link",
            icon: Link,
            onClick: () => setAdminAction("copy-link"),
            tooltip: "Copy link",
            hideLabel: true as const,
          },
        ]
      : []),
    {
      label: "Settings",
      icon: Settings,
      onClick: () => setAdminAction("settings"),
      tooltip: "Settings",
      hideLabel: true as const,
    },
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

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{ id: "company_trainings", name: "Trainings", href: "/p/trainings" }}
            breadcrumbs={[
              { id: "list", label: "Trainings", onClick: onBack },
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
                      label: "Groups",
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
                        avatars: training.participantAvatars.map((a) => ({
                          ...a,
                          type: "person" as const,
                        })),
                      },
                    },
                  ]
                : []),
              ...(training.instructorAvatars.length > 0
                ? [
                    {
                      label: "Instructors",
                      value: {
                        type: "list" as const,
                        variant: "person" as const,
                        avatars: training.instructorAvatars.map((a) => ({
                          ...a,
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
            status={{
              label: "",
              text: isDraft ? "Draft" : "Published",
              variant: isDraft ? "neutral" : "positive",
            }}
            primaryAction={
              isDraft ? { label: "Publish", onClick: () => setAdminAction("publish") } : undefined
            }
            secondaryActions={secondaryActions}
          />
          <Tabs key={activeTab} tabs={tabsWithNav} activeTabId={activeTab} />
        </>
      }
    >
      <PageContent>
        {activeTab === "overview" && <OverviewTab training={training} />}
        {activeTab === "content" && <ContentTab training={training} />}
        {activeTab === "groups" && <ClassesTab training={training} />}
        {activeTab === "participants" && <ParticipantsTab training={training} />}
        {activeTab === "attachments" && <AttachmentsTab training={training} />}
        {activeTab === "documents" && <DocumentsTab training={training} />}
        {activeTab === "surveys" && <FormsTab training={training} />}
        {activeTab === "fundae" && <FundaeTab training={training} />}

        <AdminModals
          action={adminAction}
          training={training}
          onClose={() => setAdminAction(null)}
        />
      </PageContent>
    </Page>
  )
}
