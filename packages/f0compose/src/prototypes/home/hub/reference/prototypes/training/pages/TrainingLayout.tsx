import { StandardLayout } from "@factorialco/f0-react"
import { Page } from "@factorialco/f0-react/dist/experimental"

import { SectionHeader } from "@/prototypes/home/hub/reference/framework/components/SectionHeader"
import { SectionTabs } from "@/prototypes/home/hub/reference/framework/components/SectionTabs"
import { Outlet } from "@/prototypes/home/hub/reference/router"

/**
 * Layout route for the Training prototype. Its four tabs (Courses, Budgets,
 * Requests, Insights) briefly moved to the sidebar menu; under the double-menu
 * rule a section this short gets no sidebar panel, so `SectionTabs` puts them
 * back on the page — driven by the threshold, not hardcoded here.
 */
export function TrainingLayout() {
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
