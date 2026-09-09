import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { useCallback, useMemo } from "react"

import { useNavConfig } from "@/prototypes/home/hub/reference/lib/navConfig"
import { useNavigate } from "@/prototypes/home/hub/reference/router"

import { useProjectsSource } from "../hooks/useProjectsSource"
import { projectColumns } from "../lib/projectColumns"
import { projects } from "../mocks/projects"

/**
 * Body of the Projects overview tab (the page shell + tabs live in
 * ProjectsLayout). The "All" / "Assigned to me" / "Created by me" views are the
 * source's presets; the table defaults to "All". Employees get no chips — the
 * table just shows the projects they belong to (see useProjectsSource).
 */
export function ProjectsOverviewBody() {
  const navigate = useNavigate()
  const isEmployee = useNavConfig().config.role === "employee"
  const onCreateProject = useCallback(() => {}, [])
  const onOpenProject = useCallback(
    (id: string) => navigate(`/p/projects/${id}`),
    [navigate]
  )
  const source = useProjectsSource(
    projects,
    onCreateProject,
    onOpenProject,
    isEmployee
  )
  const columns = useMemo(() => projectColumns(), [])

  return (
    <OneDataCollection
      source={source}
      visualizations={[{ type: "table", options: { columns } }]}
    />
  )
}
