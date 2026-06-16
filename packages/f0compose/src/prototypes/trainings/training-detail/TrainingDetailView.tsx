import { useState } from "react"
import { F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Settings } from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import { findTraining } from "@/fixtures"

import { detailTabs, type DetailTabId } from "../tabs"
import { trainingStatusLabel, trainingStatusVariant } from "../shared/status"
import { CourseSettingsDialog } from "./CourseSettingsDialog"
import { GroupsTab } from "./groups/GroupsTab"
import { OverviewTab } from "./overview/OverviewTab"
import { ParticipantsTab } from "./participants/ParticipantsTab"
import { SurveysTab } from "./surveys/SurveysTab"

interface Props {
  trainingId: string
  onBack: () => void
}

const VALID_DETAIL_TABS = new Set<string>(detailTabs.map((t) => t.id))

export function TrainingDetailView({ trainingId, onBack }: Props) {
  const training = findTraining(trainingId)
  const [searchParams, setSearchParams] = useSearchParams()
  const [showSettings, setShowSettings] = useState(false)

  const rawTab = searchParams.get("dtab")
  const activeTab: DetailTabId =
    rawTab && VALID_DETAIL_TABS.has(rawTab)
      ? (rawTab as DetailTabId)
      : "overview"

  const setActiveTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    if (id === "overview") next.delete("dtab")
    else next.set("dtab", id)
    setSearchParams(next)
  }

  const tabsWithNav = detailTabs.map((t) => ({
    ...t,
    onClick: () => setActiveTab(t.id),
  }))

  if (!training) {
    return (
      <Page
        header={
          <PageHeader
            module={{ id: "company_trainings", name: "Trainings", href: "/p/trainings" }}
            breadcrumbs={[{ id: "detail", label: "Not found" }]}
          />
        }
      >
        <StandardLayout>
          <F0Text content="Training not found." variant="body" />
        </StandardLayout>
      </Page>
    )
  }

  const nextGroup = training.classes.find(
    (c) => new Date(c.startDate) >= new Date("2026-05-05")
  )

  return (
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
              { id: "courses", label: "Courses", onClick: onBack },
              { id: "detail", label: training.name },
            ]}
          />
          <ResourceHeader
            title={training.name}
            status={{
              label: "Status",
              text: trainingStatusLabel[training.status],
              variant: trainingStatusVariant[training.status],
            }}
            metadata={[
              {
                label: "Type",
                value: {
                  type: "text",
                  content: training.format === "external" ? "External" : "Internal",
                },
              },
              {
                label: "Total duration",
                value: {
                  type: "text",
                  content: `${training.totalDurationHours}h 0m`,
                },
              },
              ...(nextGroup
                ? [
                    {
                      label: "Training groups",
                      value: {
                        type: "text" as const,
                        content: `${nextGroup.startDate} +${training.classes.length - 1}`,
                      },
                    },
                  ]
                : []),
            ]}
            primaryAction={
              training.status === "draft"
                ? { label: "Publish", onClick: () => {} }
                : { label: "Revert to draft", onClick: () => {} }
            }
            secondaryActions={[
              {
                label: "Course settings",
                icon: Settings,
                onClick: () => setShowSettings(true),
              },
            ]}
          />
          <Tabs
            key={activeTab}
            tabs={tabsWithNav}
            activeTabId={activeTab}
          />
        </>
      }
    >
      {activeTab === "overview" && (
        <OverviewTab
          training={training}
          onEditEnrollmentSettings={() => setShowSettings(true)}
        />
      )}
      <StandardLayout>
        {activeTab === "content" && (
          <F0Text
            content="Course content and LMS modules will appear here."
            variant="description"
          />
        )}
        {activeTab === "groups" && <GroupsTab training={training} />}
        {activeTab === "participants" && (
          <ParticipantsTab trainingId={training.id} />
        )}
        {activeTab === "materials" && (
          <F0Text
            content="Materials and documents for this training will appear here."
            variant="description"
          />
        )}
        {activeTab === "documents" && (
          <F0Text
            content="Uploaded documents will appear here."
            variant="description"
          />
        )}
        {activeTab === "surveys" && <SurveysTab trainingId={training.id} />}
        {activeTab === "fundae" && (
          <F0Text
            content="FUNDAE subsidization information will appear here."
            variant="description"
          />
        )}
      </StandardLayout>
      <CourseSettingsDialog
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        training={training}
      />
    </Page>
  )
}
