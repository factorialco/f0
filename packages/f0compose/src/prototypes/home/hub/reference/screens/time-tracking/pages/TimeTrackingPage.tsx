import { F0Box, StandardLayout } from "@factorialco/f0-react"
import { Page, Tabs } from "@factorialco/f0-react/dist/experimental"

import { SectionHeader } from "@/prototypes/home/hub/reference/framework/components/SectionHeader"
import {
  useLocale,
  useNavConfig,
} from "@/prototypes/home/hub/reference/lib/navConfig"
import { useSearchParams } from "@/prototypes/home/hub/reference/router"

import { AllTimesheetsView } from "./AllTimesheetsView"
import { MyTimesheetView } from "./MyTimesheetView"

const STR = {
  en: {
    moduleName: "Time tracking",
    allTimesheets: "All timesheets",
    myTimesheet: "My timesheet",
  },
  es: {
    moduleName: "Control horario",
    allTimesheets: "Todas las hojas de horas",
    myTimesheet: "Mi hoja de horas",
  },
} as const

export function TimeTrackingPage() {
  // `?tab=mine` deep-links straight to the personal timesheet — Home's Clock in
  // widget points here, and landing on the whole team's sheet wouldn't be the
  // view you asked for.
  const [searchParams, setSearchParams] = useSearchParams()
  const tab = searchParams.get("tab") === "mine" ? "mine" : "all"
  const setTab = (id: string) =>
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous)
      next.set("tab", id)
      return next
    })
  const locale = useLocale()
  const { config } = useNavConfig()
  const t = STR[locale]

  // Employees only ever see their own timesheet, so the All / My timesheet tabs
  // are dropped — the page goes straight to the personal view.
  const isEmployee = config.role === "employee"
  const activeTab = isEmployee ? "mine" : tab

  const tabs = [
    { id: "all", label: t.allTimesheets },
    { id: "mine", label: t.myTimesheet },
  ]

  return (
    <Page
      embedded
      header={
        <>
          <SectionHeader />
          {!isEmployee && (
            <F0Box paddingTop="none">
              <Tabs
                key={tab}
                tabs={tabs.map((tab) => ({
                  id: tab.id,
                  label: tab.label,
                  onClick: () => setTab(tab.id),
                }))}
                activeTabId={tab}
              />
            </F0Box>
          )}
        </>
      }
    >
      <StandardLayout>
        {activeTab === "mine" ? <MyTimesheetView /> : <AllTimesheetsView />}
      </StandardLayout>
    </Page>
  )
}
