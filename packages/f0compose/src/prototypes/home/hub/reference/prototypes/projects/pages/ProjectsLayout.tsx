import { StandardLayout } from "@factorialco/f0-react"
import { Page } from "@factorialco/f0-react/dist/experimental"

import { SectionHeader } from "@/prototypes/home/hub/reference/framework/components/SectionHeader"
import { SectionTabs } from "@/prototypes/home/hub/reference/framework/components/SectionTabs"
import { Outlet } from "@/prototypes/home/hub/reference/router"

/**
 * Layout route for the Projects prototype. The module's top tabs (Overview,
 * Schedule, Tracking, Jobs and rates, People) now live in the left sidebar
 * menu, so the page shell is just the breadcrumb `SectionHeader` over `<Outlet/>`.
 */
export function ProjectsLayout() {
  return (
    <Page
      embedded
      header={
        <>
          <SectionHeader />
          <SectionTabs />
        </>
      }
    >
      <StandardLayout>
        <Outlet />
      </StandardLayout>
    </Page>
  )
}
