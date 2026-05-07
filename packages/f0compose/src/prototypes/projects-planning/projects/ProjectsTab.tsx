import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { projectsColumns } from "./projectsColumns"
import { useProjectsSource } from "./useProjectsSource"

export function ProjectsTab({
  onAssignHours,
  onOpenProject,
}: {
  onAssignHours: () => void
  onOpenProject: (id: string) => void
}) {
  const source = useProjectsSource(onAssignHours, onOpenProject)
  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns: projectsColumns } },
      ]}
    />
  )
}
