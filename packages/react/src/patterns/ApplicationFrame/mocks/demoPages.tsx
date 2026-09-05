import { useMemo } from "react"

import { F0Card } from "@/components/F0Card"
import * as Icons from "@/icons/app"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { StandardLayout } from "@/layouts/StandardLayout"
import { TwoColumnLayout } from "@/layouts/TwoColumnLayout"
import {
  DEPARTMENTS_MOCK,
  FIRST_NAMES_MOCK,
  getMockValue,
  ROLES_MOCK,
  SURNAMES_MOCK,
} from "@/mocks"
import { Page } from "@/patterns/Navigation/Page"
import { Tabs } from "@/patterns/Navigation/Tabs"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"

/**
 * Fake product pages behind the sidebar, so the floating call has somewhere to
 * survive being navigated across.
 *
 * The point of these is not the data. It is that the window keeps its video,
 * its audio and its position while the whole main content is replaced —
 * `F0MeetingSurface` portals out of the frame precisely so that a route change
 * cannot reach it, and a demo where every link leads to the same page proves
 * nothing about that.
 *
 * Built on the app-shell layouts rather than hand-rolled padding, so the pages
 * are shaped the way the docs say a product page is shaped: `StandardLayout`
 * for a list, `TwoColumnLayout` where there really is a main column and a
 * summary beside it.
 *
 * `storage={false}` throughout: these are throwaway demo pages, and without it
 * their column order and filters would persist into `localStorage` and follow
 * you between story visits.
 */

const person = (index: number) => ({
  first: getMockValue(FIRST_NAMES_MOCK, index),
  last: getMockValue(SURNAMES_MOCK, index),
})

/** Case-insensitive match across whichever fields a page says are searchable. */
const matches = <T,>(
  item: T,
  fields: (item: T) => string[],
  query?: string
): boolean =>
  !query ||
  fields(item).some((field) =>
    field.toLowerCase().includes(query.toLowerCase())
  )

/* ------------------------------------------------------------------ *
 * Team directory
 * ------------------------------------------------------------------ */

type TeamMember = {
  id: string
  first: string
  last: string
  role: string
  department: string
  location: string
  status: "active" | "onboarding" | "on leave"
}

const LOCATIONS = ["Barcelona", "Madrid", "Remote", "Lisbon", "Berlin"]

const TEAM: TeamMember[] = Array.from({ length: 24 }, (_, index) => {
  const { first, last } = person(index)
  return {
    id: `member-${index}`,
    first,
    last,
    role: getMockValue(ROLES_MOCK, index),
    department: getMockValue(DEPARTMENTS_MOCK, index),
    location: LOCATIONS[index % LOCATIONS.length] as string,
    status:
      index % 9 === 0 ? "onboarding" : index % 7 === 0 ? "on leave" : "active",
  }
})

const TeamCollection = () => {
  const source = useDataCollectionSource<TeamMember, never, never>({
    dataAdapter: {
      // Reads `search`. Enabling the box without filtering renders a control
      // that does nothing, which is worse than offering no search at all.
      fetchData: ({ search }) => ({
        records: TEAM.filter((item) =>
          matches(
            item,
            (member) => [
              `${member.first} ${member.last}`,
              member.role,
              member.department,
              member.location,
            ],
            search
          )
        ),
      }),
    },
    search: { enabled: true, sync: false },
  })

  return (
    <OneDataCollection
      source={source}
      storage={false}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              {
                label: "Name",
                width: 220,
                render: (item) => ({
                  type: "person",
                  value: { firstName: item.first, lastName: item.last },
                }),
              },
              {
                label: "Role",
                render: (item) => ({ type: "text", value: item.role }),
              },
              {
                label: "Department",
                render: (item) => ({
                  type: "dotTag",
                  value: { label: item.department, color: "malibu" },
                }),
              },
              {
                label: "Location",
                render: (item) => ({ type: "text", value: item.location }),
              },
              {
                label: "Status",
                render: (item) => ({
                  type: "dotTag",
                  value: {
                    label: item.status,
                    color:
                      item.status === "active"
                        ? "viridian"
                        : item.status === "onboarding"
                          ? "indigo"
                          : "yellow",
                  },
                }),
              },
            ],
          },
        },
        {
          type: "card",
          options: {
            title: (item) => `${item.first} ${item.last}`,
            description: (item) => item.role,
            avatar: (item) => ({
              type: "person",
              firstName: item.first,
              lastName: item.last,
            }),
            // With no `icon`, each property draws a placeholder glyph that
            // reads as a broken image.
            cardProperties: [
              {
                label: "Department",
                icon: Icons.Suitcase,
                render: (item) => item.department,
              },
              {
                label: "Location",
                icon: Icons.Pin,
                render: (item) => item.location,
              },
            ],
          },
        },
      ]}
    />
  )
}

/* ------------------------------------------------------------------ *
 * Time off
 * ------------------------------------------------------------------ */

type Leave = {
  id: string
  first: string
  last: string
  kind: string
  from: string
  days: number
  status: "approved" | "pending" | "declined"
}

const LEAVE_KINDS = ["Holiday", "Sick leave", "Parental", "Unpaid"]

const LEAVES: Leave[] = Array.from({ length: 14 }, (_, index) => {
  const { first, last } = person(index + 3)
  return {
    id: `leave-${index}`,
    first,
    last,
    kind: LEAVE_KINDS[index % LEAVE_KINDS.length] as string,
    from: `2026-0${(index % 9) + 1}-${String((index % 27) + 1).padStart(2, "0")}`,
    days: (index % 5) + 1,
    status:
      index % 5 === 0 ? "pending" : index % 11 === 0 ? "declined" : "approved",
  }
})

const TimeOffCollection = () => {
  const source = useDataCollectionSource<Leave, never, never>({
    dataAdapter: {
      fetchData: ({ search }) => ({
        records: LEAVES.filter((item) =>
          matches(
            item,
            (leave) => [`${leave.first} ${leave.last}`, leave.kind],
            search
          )
        ),
      }),
    },
    search: { enabled: true, sync: false },
  })

  return (
    <OneDataCollection
      source={source}
      storage={false}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              {
                label: "Who",
                width: 220,
                render: (item) => ({
                  type: "person",
                  value: { firstName: item.first, lastName: item.last },
                }),
              },
              {
                label: "Type",
                render: (item) => ({
                  type: "tag",
                  value: { label: item.kind },
                }),
              },
              {
                label: "From",
                render: (item) => ({ type: "text", value: item.from }),
              },
              {
                label: "Days",
                align: "right" as const,
                render: (item) => ({ type: "number", value: item.days }),
              },
              {
                label: "Status",
                render: (item) => ({
                  type: "dotTag",
                  value: {
                    label: item.status,
                    color:
                      item.status === "approved"
                        ? "viridian"
                        : item.status === "pending"
                          ? "yellow"
                          : "barbie",
                  },
                }),
              },
            ],
          },
        },
      ]}
    />
  )
}

const TimeOffSummary = () => {
  const pending = LEAVES.filter((leave) => leave.status === "pending").length
  const booked = LEAVES.filter((leave) => leave.status === "approved").reduce(
    (total, leave) => total + leave.days,
    0
  )

  return (
    <div className="flex flex-col gap-3">
      <F0Card
        title="Your balance"
        description={`22 days a year. ${booked} booked ahead across the team.`}
      />
      <F0Card
        title="Waiting on you"
        description={
          pending === 1
            ? "One request needs approving."
            : `${pending} requests need approving.`
        }
      />
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * Expenses
 * ------------------------------------------------------------------ */

type Expense = {
  id: string
  merchant: string
  category: string
  amount: number
  date: string
  status: "reimbursed" | "in review" | "rejected"
}

const MERCHANTS = [
  "Renfe",
  "Vueling",
  "Hotel Colón",
  "Slack",
  "Figma",
  "AWS",
  "Uber",
  "Cafè de l'Òpera",
]
const CATEGORIES = ["Travel", "Software", "Meals", "Hardware"]

const EXPENSES: Expense[] = Array.from({ length: 18 }, (_, index) => ({
  id: `expense-${index}`,
  merchant: MERCHANTS[index % MERCHANTS.length] as string,
  category: CATEGORIES[index % CATEGORIES.length] as string,
  amount: 18.4 + index * 37.15,
  date: `2026-08-${String((index % 28) + 1).padStart(2, "0")}`,
  status:
    index % 6 === 0
      ? "in review"
      : index % 13 === 0
        ? "rejected"
        : "reimbursed",
}))

const ExpensesCollection = () => {
  const source = useDataCollectionSource<Expense, never, never>({
    dataAdapter: {
      fetchData: ({ search }) => ({
        records: EXPENSES.filter((item) =>
          matches(
            item,
            (expense) => [expense.merchant, expense.category],
            search
          )
        ),
      }),
    },
    search: { enabled: true, sync: false },
  })

  return (
    <OneDataCollection
      source={source}
      storage={false}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              {
                label: "Merchant",
                width: 200,
                render: (item) => ({ type: "text", value: item.merchant }),
              },
              {
                label: "Category",
                render: (item) => ({
                  type: "tag",
                  value: { label: item.category },
                }),
              },
              {
                label: "Date",
                render: (item) => ({ type: "text", value: item.date }),
              },
              {
                label: "Amount",
                align: "right" as const,
                render: (item) => ({
                  type: "amount",
                  value: {
                    amount: item.amount,
                    currency: { symbol: "€", decimalPlaces: 2 },
                  },
                }),
              },
              {
                label: "Status",
                render: (item) => ({
                  type: "dotTag",
                  value: {
                    label: item.status,
                    color:
                      item.status === "reimbursed"
                        ? "viridian"
                        : item.status === "in review"
                          ? "yellow"
                          : "barbie",
                  },
                }),
              },
            ],
          },
        },
      ]}
    />
  )
}

/* ------------------------------------------------------------------ *
 * The router the story plays
 * ------------------------------------------------------------------ */

type DemoModule = {
  /** The module root. Any deeper path still belongs to this module. */
  root: string
  module: { id: "employees" | "timeoff" | "my_spending"; name: string }
  /** Rendered under the header. Href-based, so they navigate like the menu. */
  tabs?: { label: string; href: string }[]
  /** The body for a given path within the module. */
  body: (path: string) => JSX.Element
}

/**
 * A "nothing here" body that keeps its page shell.
 *
 * A tab that blanks the header as well as the content reads as a broken
 * navigation rather than as an empty section.
 */
const EmptySection = ({ label }: { label: string }) => (
  <StandardLayout>
    <p className="text-base text-f1-foreground-secondary">
      {label} is not part of the demo. The call is still running, which is the
      part worth watching.
    </p>
  </StandardLayout>
)

const MODULES: DemoModule[] = [
  {
    root: "/team",
    module: { id: "employees", name: "Team directory" },
    tabs: [
      { label: "People", href: "/team" },
      { label: "Teams", href: "/team/teams" },
      { label: "Org chart", href: "/team/org-chart" },
    ],
    body: (path) =>
      path === "/team" ? (
        <TeamCollection />
      ) : (
        <EmptySection
          label={path === "/team/teams" ? "Teams" : "The org chart"}
        />
      ),
  },
  {
    root: "/time-off",
    module: { id: "timeoff", name: "Time off" },
    // The one page with a side column, because it is the one that genuinely has
    // a main thing and a secondary thing: the requests, and your own balance.
    body: () => (
      <TwoColumnLayout sideContent={<TimeOffSummary />}>
        <TimeOffCollection />
      </TwoColumnLayout>
    ),
  },
  {
    root: "/expenses",
    module: { id: "my_spending", name: "Expenses" },
    body: () => <ExpensesCollection />,
  },
]

/**
 * The page at a path.
 *
 * `Page` is the root of the main content and the collection is its direct
 * child, which is how factorial composes a list page (`FactorialOnePage`):
 * header slot holds the `PageHeader` and the `Tabs`, the body is full-bleed.
 *
 * Wrapping it in a plain `div` instead is what made this render as a narrow
 * column — the frame's main area is a ROW flex, so a child that asks for no
 * width shrinks to fit its content.
 *
 * Every link in the sidebar leads somewhere on purpose: a menu where most items
 * do nothing reads as broken, and you cannot tell a dead link from a call that
 * has frozen the app.
 */
export const DemoPage = ({ path }: { path: string }) => {
  const page = useMemo(
    () =>
      MODULES.find(
        (candidate) =>
          path === candidate.root || path.startsWith(`${candidate.root}/`)
      ),
    [path]
  )

  if (!page) {
    return (
      <Page>
        <StandardLayout>
          <p className="text-2xl font-semibold capitalize text-f1-foreground">
            {path.replace(/^\//, "").replace(/-/g, " ") || "Dashboard"}
          </p>
          <p className="text-base text-f1-foreground-secondary">
            Nothing here in the demo — but the call is still running, which is
            the part worth watching.
          </p>
        </StandardLayout>
      </Page>
    )
  }

  return (
    <Page
      header={
        <>
          {/* The page header keeps its own One switch: that is how the AI chat
              opens, and it is the same control on every page of the product. */}
          <PageHeader module={{ ...page.module, href: page.root }} />
          {page.tabs && <Tabs tabs={page.tabs} />}
        </>
      }
    >
      {page.body(path)}
    </Page>
  )
}
