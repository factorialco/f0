import { useState } from "react"
import { Page, PageHeader, Tabs } from "@factorialco/f0-react/dist/experimental"
import { useNavigate, useSearchParams } from "react-router-dom"

import { type Training, findTraining } from "@/fixtures"

import { TrainingsDetail } from "./detail/TrainingsDetail"
import { ClassDetail } from "./detail/ClassDetail"
import { TrainingsList } from "./list/TrainingsList"
import { AxesTab } from "./list/AxesTab"
import { CategoriesTab } from "./list/CategoriesTab"
import { SurveyTemplatesTab } from "./list/SurveyTemplatesTab"
import { NewTrainingWizard } from "./NewTrainingWizard"
import { PageContent } from "./_shared/PageContent"
import { trainingsTopNav } from "./topNav"
import type { PrototypeMeta } from "../types"

export const meta: PrototypeMeta = {
  slug: "trainings",
  title: "Trainings",
  description:
    "Real Factorial Trainings module (Revamp): browse the full trainings list with status, participants, catalog and expiry indicators; open any training to see its Overview, Participants and Classes tabs with the same layout as production.",
  category: "Talent",
  module: "trainings",
  audience: ["admin", "manager"],
  tags: ["trainings", "learning", "lms", "compliance", "talent"],
  createdAt: "2026-05-12",
}

type ListTabId = "courses" | "categories" | "axes" | "survey_templates"

const listTabs: { id: ListTabId; label: string }[] = [
  { id: "courses", label: "All courses" },
  { id: "categories", label: "Tags" },
  { id: "axes", label: "Axes" },
  { id: "survey_templates", label: "Survey Templates" },
]

const VALID_LIST_TABS = new Set<string>(listTabs.map((t) => t.id))

export default function Trainings() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [showNewTraining, setShowNewTraining] = useState(false)

  const trainingId = searchParams.get("training")
  const training: Training | undefined = trainingId
    ? findTraining(trainingId)
    : undefined

  const rawListTab = searchParams.get("ltab")
  const activeListTab: ListTabId =
    rawListTab && VALID_LIST_TABS.has(rawListTab) ? (rawListTab as ListTabId) : "courses"

  const setListTab = (id: string) => {
    const next = new URLSearchParams()
    next.set("ltab", id)
    setSearchParams(next)
  }

  const goToDetail = (t: Training) => {
    const next = new URLSearchParams()
    next.set("training", t.id)
    setSearchParams(next)
  }

  const goToList = () => setSearchParams({})

  const goToTraining = (t: Training) => {
    const next = new URLSearchParams()
    next.set("training", t.id)
    setSearchParams(next)
  }

  const goToClassesTab = (t: Training) => {
    const next = new URLSearchParams()
    next.set("training", t.id)
    next.set("dtab", "groups")
    setSearchParams(next)
  }

  const handleTrainingCreated = (newTraining: Training) => {
    setShowNewTraining(false)
    goToDetail(newTraining)
  }

  const classId = searchParams.get("class")

  if (training && classId) {
    return (
      <ClassDetail
        training={training}
        classId={classId}
        onBackToList={goToList}
        onBackToTraining={() => goToTraining(training)}
        onBackToClasses={() => goToClassesTab(training)}
      />
    )
  }

  if (training) {
    return <TrainingsDetail training={training} onBack={goToList} />
  }

  return (
    <>
      <Page
        header={
          <>
            <PageHeader
              module={{ id: "company_trainings", name: "Courses", href: "/p/trainings" }}
              actions={[]}
            />
            <Tabs
              tabs={trainingsTopNav.map((t) => ({
                id: t.id,
                label: t.label,
                onClick: () => navigate(t.href),
              }))}
              activeTabId="trainings"
            />
            <Tabs
              tabs={listTabs.map((t) => ({
                id: t.id,
                label: t.label,
                onClick: () => setListTab(t.id),
              }))}
              activeTabId={activeListTab}
              secondary
            />
          </>
        }
      >
        <PageContent>
          {activeListTab === "courses" && (
            <TrainingsList onAdd={() => setShowNewTraining(true)} onSelect={goToDetail} />
          )}
          {activeListTab === "categories" && <CategoriesTab />}
          {activeListTab === "axes" && <AxesTab />}
          {activeListTab === "survey_templates" && <SurveyTemplatesTab />}
        </PageContent>
      </Page>

      <NewTrainingWizard
        isOpen={showNewTraining}
        onClose={() => setShowNewTraining(false)}
        onCreated={handleTrainingCreated}
      />
    </>
  )
}
