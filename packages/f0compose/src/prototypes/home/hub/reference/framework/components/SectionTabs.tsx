import { F0Box } from "@factorialco/f0-react"
import { Tabs } from "@factorialco/f0-react/dist/experimental"

import { useLocation, useNavigate } from "../../router"
const sections: Record<string, [string, string][]> = {
  training: [
    ["", "Courses"],
    ["budgets", "Budgets"],
    ["requests", "Requests"],
    ["insights", "Insights"],
  ],
  documents: [
    ["", "Library"],
    ["templates", "Templates"],
    ["trash", "Trash"],
  ],
  projects: [
    ["", "Overview"],
    ["schedule", "Schedule"],
    ["tracking", "Tracking"],
    ["jobs-and-rates", "Jobs and rates"],
    ["people", "People"],
  ],
  spending: [
    ["", "Expenses"],
    ["cards", "Cards"],
  ],
}
/** Source SectionTabs adapted to the existing Hub panel: expose all imported child routes here. */
export function SectionTabs() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [, , slug, ...rest] = pathname.split("/")
  const rows = sections[slug]
  if (!rows) return null
  const active = rest.join("/") || "overview"
  return (
    <F0Box paddingTop="none" paddingBottom={slug === "spending" ? "none" : "md"}>
      <Tabs
        key={active}
        activeTabId={active}
        tabs={rows.map(([path, label]) => ({
          id: path || "overview",
          label,
          onClick: () => navigate(`/p/${slug}${path ? `/${path}` : ""}`),
        }))}
      />
    </F0Box>
  )
}
