import { OneEmptyState } from "@factorialco/f0-react"
import { matchPath, useSearchParams, type RouteObject } from "react-router-dom"

import { routes as documents } from "./reference/prototypes/documents"
import { routes as profile } from "./reference/prototypes/profile"
import { routes as projects } from "./reference/prototypes/projects"
import { routes as spending } from "./reference/prototypes/spending"
import { routes as training } from "./reference/prototypes/training"
import { ImportedOutlet } from "./reference/router"
import { TimeOffPage } from "./reference/screens/time-off/pages/TimeOffPage"
import { TimeTrackingPage } from "./reference/screens/time-tracking/pages/TimeTrackingPage"

const routes: Record<string, RouteObject[]> = {
  documents,
  projects,
  spending,
  training,
  profile,
}
const aliases: Record<string, string> = {
  hours: "time-tracking",
  absences: "time-off",
  learning: "training",
  spend: "spending",
  files: "documents",
}
export function hasImportedScreen(view: string) {
  const key = aliases[view] ?? view
  return key in routes || key === "time-tracking" || key === "time-off"
}
export function ImportedHubScreen({ view }: { view: string }) {
  const [params] = useSearchParams()
  const key = aliases[view] ?? view
  if (key === "time-tracking") return <TimeTrackingPage />
  if (key === "time-off") return <TimeOffPage />
  const route = routes[key]?.[0]
  const page = params.get("page") ?? ""
  const child = route?.children?.find((item) =>
    item.index
      ? !page
      : item.path && matchPath({ path: item.path, end: true }, `/${page}`)
  )
  const content = child?.element ?? (
    <OneEmptyState
      title="No sample detail available"
      description="The reference prototype includes the list, but this detail screen has not been built yet."
    />
  )
  return (
    <ImportedOutlet.Provider value={content}>
      {route?.element}
    </ImportedOutlet.Provider>
  )
}
