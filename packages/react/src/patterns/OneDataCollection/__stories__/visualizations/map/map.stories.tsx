import { Meta, StoryObj } from "@storybook/react-vite"
import { useMemo, useState } from "react"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0AvatarTeam } from "@/components/avatars/F0AvatarTeam"
import { F0Button } from "@/components/F0Button"
import { F0Heading } from "@/components/F0Heading"
import { F0Text } from "@/components/F0Text"
import type { DetailsItemType } from "@/experimental/Lists/DetailsItem"
import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"
import { OneListItem } from "@/experimental/Lists/OneListItem"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import * as Icons from "@/icons/app"
import { F0Box } from "@/lib/F0Box"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import type { F0MapMarkerVariantProps } from "@/patterns/F0Map"
import { Page } from "@/patterns/Navigation/Page"
import { TabbedSidebar } from "@/patterns/Navigation/Sidebar/index.stories"
import { Tabs } from "@/patterns/Navigation/Tabs"

import {
  createDataAdapter,
  ExampleComponent,
  generateMockUsers,
  getMockVisualizations,
  mapCityFor,
  mapFilters,
  mapPlacementFor,
  type MockUser,
} from "../../mockData"

const meta = {
  title: "Data Collection/Visualizations/Map",
  parameters: {
    layout: "padded",
    // Markers sit on vector tiles fetched at runtime, so a snapshot of this
    // view is only as stable as the network that drew it.
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        component:
          "Map view specific visualization. Projects each record onto a coordinate and displays it as a marker, driven by the same toolbar as every other view.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/** `getMockVisualizations` types every entry as the full `Visualization` union. */
type MapVisualization = Extract<
  ReturnType<typeof getMockVisualizations>["map"],
  { type: "map" }
>

/**
 * A fixed height rather than `h-screen`: the map needs a height to draw in, and
 * these stories are embedded in the docs page, where a viewport-tall example
 * would swamp the section around it. The padding sits on the collection's own
 * surface, so the gap above the toolbar reads white instead of letting the
 * backdrop through.
 */
const storyFrame = "h-[600px] bg-f1-background pt-5"

/** One label per variant, so the demo map names what each pin is showing. */
const VARIANT_LABELS = [
  "Default",
  "Workplace",
  "Employee",
  "Company",
  "Stop",
] as const

export const BasicMapVisualization: Story = {
  render: () => {
    const [users] = useState<MockUser[]>(() => generateMockUsers(40))
    const mockVisualizations = getMockVisualizations({ frozenColumns: 0 })
    const dataAdapter = useMemo(
      () => createDataAdapter({ data: users, paginationType: "pages" }),
      [users]
    )

    return (
      <div className={storyFrame}>
        <ExampleComponent
          fullHeight
          searchBar
          filters={mapFilters}
          visualizations={[mockVisualizations.map, mockVisualizations.table]}
          dataAdapter={dataAdapter}
        />
      </div>
    )
  },
}

/**
 * The `marker` option picks a semantic variant per record. Here one record takes
 * each of the five variants so all of them are visible at once; a real
 * collection would key the variant off a field on the record.
 */
export const MarkerVariants: Story = {
  render: () => {
    const [users] = useState<MockUser[]>(() => generateMockUsers(5))
    const mockVisualizations = getMockVisualizations({ frozenColumns: 0 })
    const dataAdapter = useMemo(
      () => createDataAdapter({ data: users, paginationType: "pages" }),
      [users]
    )

    const mapVisualization = mockVisualizations.map as MapVisualization
    const visualizations = useMemo(
      () => [
        {
          ...mapVisualization,
          options: {
            ...mapVisualization.options,
            coordinates: (user: MockUser) => mapCityFor(user.index).at,
            label: (user: MockUser) => VARIANT_LABELS[user.index % 5],
            marker: (user: MockUser): F0MapMarkerVariantProps => {
              const [firstName = "", lastName = ""] = user.name.split(" ")
              switch (user.index % 5) {
                case 0:
                  return { variant: "default" }
                case 1:
                  return { variant: "workplace" }
                case 2:
                  return { variant: "employee", firstName, lastName }
                case 3:
                  return { variant: "company", name: user.department }
                default:
                  return { variant: "stop", letter: "A" }
              }
            },
          },
        },
        mockVisualizations.table,
      ],
      [mapVisualization, mockVisualizations.table]
    )

    return (
      <div className={storyFrame}>
        <ExampleComponent
          fullHeight
          searchBar
          filters={mapFilters}
          visualizations={visualizations}
          dataAdapter={dataAdapter}
        />
      </div>
    )
  },
}

/** The page-level tabs under the header, in the monolith's order. */
const ORGANIZATION_TABS = [
  { id: "people", label: "People" },
  { id: "teams", label: "Teams" },
  { id: "workplaces", label: "Workplaces" },
  { id: "roles", label: "Roles" },
]

/** One labelled row. An absent value shows a non-interactive "-", as in the app. */
const valueEntry = (
  title: string,
  value: string | undefined,
  { copyable = false }: { copyable?: boolean } = {}
): DetailsItemType =>
  value
    ? {
        title,
        content: copyable
          ? { type: "item", text: value, action: { type: "copy" } }
          : { type: "item", text: value },
      }
    : { title, content: { type: "item", text: "-" } }

/** Section frame: a label, then its inset list. Dashed rule between sections. */
const DetailSection = ({
  title,
  details,
}: {
  title: string
  details: DetailsItemType[]
}) => (
  <F0Box
    display="flex"
    flexDirection="column"
    paddingBottom="md"
    borderBottom="default"
    borderStyle="dashed"
  >
    <F0Box paddingTop="lg" paddingBottom="md" paddingX="lg">
      {/* Semibold, one step above the label variant's medium. F0Text has no
          weight prop, so this is the repo's inline weight-override pattern. */}
      <F0Text
        variant="label"
        content={title}
        markdown={false}
        style={{ fontWeight: 600 }}
      />
    </F0Box>
    <div className="pb-1 pl-2.5 pr-4">
      <DetailsItemsList
        details={details.map((entry) => ({
          ...entry,
          isHorizontal: true,
          verticalLayout: true,
        }))}
      />
    </div>
  </F0Box>
)

/**
 * The org chart's person panel, ported from the monolith's
 * `EmployeeOrgChartSidePanel`: a pinned identity block (avatar, name, job
 * title, View profile + more), then Contact, Work and Teams sections.
 *
 * In the app this is an `F0Drawer` over the graph; here the map supplies the
 * surface, so only the drawer chrome is dropped - the body is the same.
 */
const PersonDetail = ({
  user,
  workplace,
  onClose,
}: {
  user: MockUser
  /** Absent for a record the map cannot place: the row shows "-". */
  workplace?: string
  onClose: () => void
}) => {
  const [firstName = "", lastName = ""] = user.name.split(" ")
  const [managerFirst = "", managerLast = ""] = user.manager.split(" ")

  return (
    <F0Box
      display="flex"
      flexDirection="column"
      overflow="hidden"
      height="full"
    >
      {/*
        Identity block is fixed: it sits outside the scroll container below, so
        only the sections scroll. No background of its own - the panel's frosted
        surface shows through, unlike the app's drawer which sits on white.
        `relative` so the close button can sit in its top-right corner.
      */}
      <div className="relative">
        <F0Box
          display="flex"
          flexDirection="column"
          borderBottom="default"
          borderColor="secondary"
        >
          <F0Box
            display="flex"
            flexDirection="column"
            gap="lg"
            paddingTop="lg"
            paddingBottom="md"
            paddingX="lg"
          >
            <F0AvatarPerson
              firstName={firstName}
              lastName={lastName}
              size="xl"
            />
            <F0Box display="flex" flexDirection="column" gap="xs">
              <F0Heading content={user.name} markdown={false} />
              <F0Text
                variant="description"
                content={user.role}
                markdown={false}
              />
            </F0Box>
          </F0Box>
          <F0Box
            display="flex"
            alignItems="center"
            gap="md"
            paddingX="lg"
            paddingTop="sm"
            paddingBottom="xl"
          >
            {/* `block` is private on F0Button, so the button is stretched by
                making its wrapper a full-width stretch column. */}
            <F0Box
              grow
              display="flex"
              flexDirection="column"
              alignItems="stretch"
            >
              <F0Button variant="outline" size="md" label="View profile" />
            </F0Box>
            <F0Button
              variant="outline"
              icon={Icons.EllipsisHorizontal}
              hideLabel
              label="More actions"
            />
          </F0Box>
        </F0Box>
        {/* Dismissing the panel belongs to the panel, not among the record's
            actions - so it sits in the corner, away from View profile. */}
        <div className="absolute right-2 top-2">
          <F0Button
            variant="ghost"
            icon={Icons.Cross}
            hideLabel
            label="Close"
            onClick={onClose}
          />
        </div>
      </div>

      {/* Only this region scrolls. */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        <DetailSection
          title="Contact"
          details={[
            valueEntry("Email", user.email, { copyable: true }),
            valueEntry("Phone", "+34 600 000 000", { copyable: true }),
          ]}
        />

        <DetailSection
          title="Work"
          details={[
            valueEntry("Work email", user.email, { copyable: true }),
            valueEntry("Workplace", workplace),
            valueEntry("Department", user.department),
            {
              title: "Managed by",
              content: {
                type: "person",
                firstName: managerFirst,
                lastName: managerLast,
              },
            },
          ]}
        />

        <F0Box display="flex" flexDirection="column">
          <F0Box paddingTop="lg" paddingBottom="md" paddingX="lg">
            <F0Text
              variant="label"
              content="Teams"
              markdown={false}
              style={{ fontWeight: 600 }}
            />
          </F0Box>
          <F0Box
            display="grid"
            columns="2"
            gap="md"
            paddingX="md"
            paddingBottom="lg"
          >
            {[user.department, "Engineering"].map((team) => (
              <F0Box
                key={team}
                display="flex"
                alignItems="center"
                gap="md"
                padding="md"
                border="default"
                borderColor="secondary"
                borderRadius="lg"
              >
                <F0AvatarTeam name={team} size="md" />
                <F0Box
                  display="flex"
                  flexDirection="column"
                  gap="xs"
                  overflow="hidden"
                >
                  <F0Text
                    variant="label"
                    content={team}
                    markdown={false}
                    ellipsis
                  />
                  <F0Text
                    variant="description"
                    content="12 members"
                    markdown={false}
                  />
                </F0Box>
              </F0Box>
            ))}
          </F0Box>
        </F0Box>
      </div>
    </F0Box>
  )
}

/**
 * The map view carrying real page chrome: the app sidebar on the left, the page
 * header and the section's tabs above, and the collection's own toolbar over the
 * map. The only story that shows how the map's panel toggle reads next to the
 * app's own sidebar toggle - the map's controls stay inside the canvas, 8px off
 * its edges, so the two never compete.
 *
 * The panel lists the records the map is drawing, handed over by the
 * visualization from its own load, so the two always show the same people.
 */
export const InApp: Story = {
  parameters: { layout: "fullscreen" },
  render: () => {
    const [users] = useState<MockUser[]>(() => generateMockUsers(40))
    const [tab, setTab] = useState("workplaces")
    const mockVisualizations = getMockVisualizations({ frozenColumns: 0 })
    const dataAdapter = useMemo(
      () => createDataAdapter({ data: users, paginationType: "pages" }),
      [users]
    )

    const mapVisualization = mockVisualizations.map as MapVisualization
    const visualizations = useMemo(
      () => [
        {
          ...mapVisualization,
          options: {
            ...mapVisualization.options,
            ariaLabel: "People map",
            // The panel lists the same records the markers stand for, handed
            // over by the visualization from its own load - so the two can
            // never drift apart as filters and search narrow the set.
            // Called once per panel section ("Not on map", "On map") with
            // that section's records; the visualization owns the scrolling.
            sidebar: (records: MockUser[], { select, selectedRecordId }) => (
              <div className="flex flex-col gap-1">
                {records.map((user) => {
                  const [firstName = "", lastName = ""] = user.name.split(" ")
                  return (
                    <OneListItem
                      key={user.id}
                      avatar={{ type: "person", firstName, lastName }}
                      title={user.name}
                      // Role alone: the workplace is what the map itself is
                      // showing, so repeating it on every row says nothing the
                      // pin beside it doesn't. The detail panel carries it.
                      description={user.role}
                      withPointerCursor
                      // The row for whatever the detail panel is showing, so
                      // the list says which record you are looking at.
                      selected={selectedRecordId === user.id}
                      // Same selection a marker click makes, so a row and its
                      // pin open the same detail panel.
                      onClick={() => select(user)}
                    />
                  )
                })}
              </div>
            ),
            // Second panel, beside the list rather than over it. Follows the
            // selection, so it opens from a row click or a marker click alike.
            detail: (user: MockUser, { select }) => (
              <PersonDetail
                user={user}
                // A record the map cannot place has no workplace to name.
                workplace={
                  mapPlacementFor(user.index) === "placed"
                    ? mapCityFor(user.index).name
                    : undefined
                }
                onClose={() => select(null)}
              />
            ),
          },
        },
        mockVisualizations.table,
      ],
      [mapVisualization, mockVisualizations.table]
    )

    return (
      <ApplicationFrame
        // The ApplicationFrame story's own sidebar, not a lookalike: company
        // selector, Home / Chat tabs, menu and footer, chat provider included.
        sidebar={<TabbedSidebar />}
      >
        <Page
          header={
            <>
              <PageHeader
                module={{
                  id: "employees",
                  name: "Organization",
                  href: "/employees",
                }}
              />
              <Tabs
                tabs={ORGANIZATION_TABS}
                activeTabId={tab}
                setActiveTabId={setTab}
              />
            </>
          }
        >
          {/* 20px between the section tabs and the collection's filter bar. */}
          <div className="flex min-h-0 flex-1 flex-col pt-5">
            <ExampleComponent
              fullHeight
              searchBar
              filters={mapFilters}
              visualizations={visualizations}
              dataAdapter={dataAdapter}
            />
          </div>
        </Page>
      </ApplicationFrame>
    )
  },
}
