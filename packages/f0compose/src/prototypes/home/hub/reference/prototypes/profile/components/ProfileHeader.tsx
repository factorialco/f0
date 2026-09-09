import { Tabs } from "@factorialco/f0-react/dist/experimental"

import { PageHeader } from "@/prototypes/home/hub/reference/framework/components/EmbeddedPageHeader"

/**
 * Profile header — the module title plus the profile tab strip from the
 * reference screen (Overview · Work details · Personal details · Agreements ·
 * Performance · Competencies · Time planning · Others). Only "Overview" is
 * built out; the rest are presentational so the strip matches the real screen.
 */
export function ProfileHeader() {
  const module = {
    id: "profile" as const,
    name: "Profile",
    href: "/p/home?view=profile",
  }

  const tabs = [
    { id: "overview", label: "Overview", onClick: () => {} },
    { id: "work", label: "Work details", onClick: () => {} },
    { id: "personal", label: "Personal details", onClick: () => {} },
    { id: "agreements", label: "Agreements", onClick: () => {} },
    { id: "performance", label: "Performance", onClick: () => {} },
    { id: "competencies", label: "Competencies", onClick: () => {} },
    { id: "time-planning", label: "Time planning", onClick: () => {} },
    { id: "others", label: "Others", onClick: () => {} },
  ]

  return (
    <>
      <PageHeader module={module} actions={[]} />
      <Tabs tabs={tabs} activeTabId="overview" />
    </>
  )
}
