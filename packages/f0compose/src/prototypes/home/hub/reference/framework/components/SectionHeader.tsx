import { type ModuleId } from "@factorialco/f0-react/dist/experimental"

import { PageHeader } from "@/prototypes/home/hub/reference/framework/components/EmbeddedPageHeader"

import { useLocation, homeHref } from "../../router"
const modules: Record<string, { name: string; id: ModuleId }> = {
  "time-tracking": { name: "Time tracking", id: "employee_attendance" },
  documents: { name: "Documents", id: "documents" },
  training: { name: "Training", id: "company_trainings" },
  projects: { name: "Projects", id: "project_management" },
  spending: { name: "Spending", id: "my_spending" },
}
/** Same F0 header as the source, with the destination resolved from Home's URL. */
export function SectionHeader() {
  const { pathname } = useLocation()
  const slug = pathname.split("/")[2]
  const module = modules[slug] ?? { name: "Section", id: "home" as const }
  return (
    <PageHeader
      module={{ ...module, href: homeHref(`/p/${slug}`) }}
      actions={[]}
    />
  )
}
