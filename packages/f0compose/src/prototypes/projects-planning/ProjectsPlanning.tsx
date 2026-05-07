import { F0Box, F0Button, F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  ChevronLeft,
  ChevronRight,
  Download,
  EyeVisible,
  Search,
} from "@factorialco/f0-react/icons/app"
import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import { PersonDetail } from "./details/PersonDetail"
import { ProjectDetail } from "./details/ProjectDetail"
import { PeopleTab } from "./people/PeopleTab"
import { PlanningTab } from "./planning/PlanningTab"
import { ProjectsTab } from "./projects/ProjectsTab"
import { RolesTab } from "./roles/RolesTab"
import { moduleTabs, type ModuleTabId } from "./tabs"

/**
 * Projects & planning prototype — recreates the production "Proyectos"
 * module: four primary tabs (Proyectos, Planificación, Puestos y tarifas,
 * Personas). The Planificación tab is the centerpiece — a Gantt-like
 * timeline where each row is a project and each column a day, with
 * allocation pills (8h, 4h/día ranges, absences in warning yellow,
 * overbooked allocations marked with a red dot).
 *
 * Navigation is URL-driven (Step 4.5):
 *   /p/projects-planning                   — default (Proyectos table)
 *   /p/projects-planning?tab=planning      — timeline
 *   /p/projects-planning?tab=roles         — puestos y tarifas
 *   /p/projects-planning?tab=people        — personas
 */
export const meta: PrototypeMeta = {
  slug: "projects-planning",
  title: "Proyectos & Planificación",
  description:
    "Módulo de Proyectos con cuatro tabs (Proyectos, Planificación, Puestos y tarifas, Personas). El timeline tipo Gantt muestra horas asignadas por persona / proyecto, ausencias y alertas de overbooking — recreado tal cual en la pantalla de producción.",
  category: "Other",
  module: "my-projects",
  audience: ["admin"],
  tags: ["projects", "planning", "gantt", "scheduling", "billing"],
  createdAt: "2026-05-07",
}

const VALID_TABS = new Set<string>(moduleTabs.map((t) => t.id))

/** Toolbar above the planning grid (only shown on the planning tab). */
function PlanningToolbar({ onAssignHours }: { onAssignHours: () => void }) {
  return (
    <F0Box
      display="flex"
      alignItems="center"
      justifyContent="between"
      gap="md"
      paddingY="xs"
    >
      <F0Box display="flex" alignItems="center" gap="sm">
        <F0Button label="Hoy" variant="outline" size="md" onClick={() => {}} />
        <F0Button
          label="Anterior"
          variant="outline"
          size="md"
          icon={ChevronLeft}
          hideLabel
          onClick={() => {}}
        />
        <F0Button
          label="may 2026"
          variant="outline"
          size="md"
          onClick={() => {}}
        />
        <F0Button
          label="Siguiente"
          variant="outline"
          size="md"
          icon={ChevronRight}
          hideLabel
          onClick={() => {}}
        />
        <F0Button
          label="Vista"
          variant="outline"
          size="md"
          icon={EyeVisible}
          hideLabel
          onClick={() => {}}
        />
      </F0Box>
      <F0Box display="flex" alignItems="center" gap="sm">
        <F0Button
          label="Buscar"
          variant="outline"
          size="md"
          icon={Search}
          hideLabel
          onClick={() => {}}
        />
        <F0Button
          label="Exportar datos"
          variant="outline"
          size="md"
          icon={Download}
          onClick={() => {}}
        />
        <F0Button
          label="Asignar horas"
          variant="default"
          size="md"
          icon={Add}
          onClick={onAssignHours}
        />
      </F0Box>
    </F0Box>
  )
}

export default function ProjectsPlanning() {
  const [searchParams, setSearchParams] = useSearchParams()

  const view = searchParams.get("view")
  const detailId = searchParams.get("id") ?? ""

  const rawTab = searchParams.get("tab")
  const activeTab: ModuleTabId =
    rawTab && VALID_TABS.has(rawTab)
      ? (rawTab as ModuleTabId)
      : "projects"

  const setActiveTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    if (id === "projects") next.delete("tab")
    else next.set("tab", id)
    next.delete("view")
    next.delete("id")
    setSearchParams(next)
  }

  const onAssignHours = useCallback(() => {
    // Placeholder — opens the assign-hours flow.
    // eslint-disable-next-line no-console
    console.info("[projects-planning] assign hours")
  }, [])

  const openProject = useCallback(
    (id: string) => {
      const next = new URLSearchParams(searchParams)
      next.set("view", "project")
      next.set("id", id)
      next.delete("tab")
      setSearchParams(next)
    },
    [searchParams, setSearchParams]
  )

  const openPerson = useCallback(
    (id: string) => {
      const next = new URLSearchParams(searchParams)
      next.set("view", "person")
      next.set("id", id)
      next.delete("tab")
      setSearchParams(next)
    },
    [searchParams, setSearchParams]
  )

  const goBackToProjects = useCallback(() => {
    setSearchParams({})
  }, [setSearchParams])

  const goBackToPeople = useCallback(() => {
    setSearchParams({ tab: "people" })
  }, [setSearchParams])

  // Sub-screen: project detail
  if (view === "project" && detailId) {
    return <ProjectDetail projectId={detailId} onBack={goBackToProjects} />
  }
  // Sub-screen: person detail
  if (view === "person" && detailId) {
    return (
      <PersonDetail
        employeeId={detailId}
        onBack={goBackToPeople}
        onOpenProject={openProject}
      />
    )
  }

  const tabsWithNav = moduleTabs.map((t) => ({
    ...t,
    onClick: () => setActiveTab(t.id),
  }))

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "employees",
              name: "Proyectos",
              href: "/p/projects-planning",
            }}
          />
          <Tabs
            key={activeTab}
            tabs={tabsWithNav}
            activeTabId={activeTab}
          />
        </>
      }
    >
      <StandardLayout>
        {activeTab === "projects" && (
          <ProjectsTab
            onAssignHours={onAssignHours}
            onOpenProject={openProject}
          />
        )}
        {activeTab === "planning" && (
          <F0Box display="flex" flexDirection="column" gap="md">
            <PlanningToolbar onAssignHours={onAssignHours} />
            <PlanningTab onOpenProject={openProject} />
          </F0Box>
        )}
        {activeTab === "roles" && <RolesTab />}
        {activeTab === "people" && <PeopleTab onOpenPerson={openPerson} />}
        {activeTab !== "projects" &&
          activeTab !== "planning" &&
          activeTab !== "roles" &&
          activeTab !== "people" && (
            <F0Text
              content="Tab no implementada todavía."
              variant="description"
            />
          )}
      </StandardLayout>
    </Page>
  )
}
