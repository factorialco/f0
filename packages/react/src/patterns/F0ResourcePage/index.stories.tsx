import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, userEvent, within } from "storybook/test"

import { F0Alert } from "@/components/F0Alert"
import { F0Card } from "@/components/F0Card"
import { F0Icon } from "@/components/F0Icon"
import { F0Text } from "@/components/F0Text"
import {
  Add,
  ArrowDown,
  ArrowRight,
  Briefcase,
  Building,
  Cross,
  Crown,
  Delete,
  Pencil,
  Pin,
  Swap,
} from "@/icons/app"
import { F0Box } from "@/lib/F0Box"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { F0ResourceSection } from "@/patterns/F0ResourceSection"
import { Page } from "@/patterns/Navigation/Page"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"
import { SectionHeader } from "@/patterns/SectionHeader"

import { F0ResourcePage } from "./index"

const meta = {
  title: "Resource page",
  component: F0ResourcePage,
  // Manual MDX lives next to this file, so autodocs is opted out of.
  tags: ["experimental", "!autodocs"],
  parameters: {
    // Padded, not fullscreen: fullscreen makes the Storybook provider paint
    // the gray app canvas behind the story, which reads as the component
    // having a gray background. InsidePage opts back in, where that canvas is
    // exactly what the story is about.
    layout: "padded",
    // Rendered inline in the docs page on purpose: an iframe (`inline: false`)
    // is narrower than the `md` breakpoint, so every Canvas would document the
    // mobile stack instead of the two-column layout.
    docs: { story: { inline: true } },
  },
  argTypes: {
    title: { description: "The resource's name" },
    description: {
      description:
        "One line under the name: the resource's own description, or its single most identifying fact",
    },
    tabs: {
      description:
        "The parts this page splits into. A section earns a tab when people work in it separately, not just because it is long",
    },
    aside: {
      description:
        "The page's own navigation: the sections of the main column. The page renders the table of contents, marks the one being read as you scroll, and scrolls to the one you pick. Omit for a single-column page",
    },
    alert: {
      description:
        "Page-wide notice. Rendered above the header so it is seen before anything else",
    },
    onHistoryClick: {
      description:
        "Opens the resource's activity. Renders the history button leftmost in the desktop action row",
    },
    showBottomBorder: {
      description:
        "Derived from the tabs when omitted: present without tabs, dropped with them",
    },
  },
} satisfies Meta<typeof F0ResourcePage>

export default meta
type Story = StoryObj<typeof meta>

const MainContent = () => (
  <F0Box id="members" display="flex" flexDirection="column" gap="lg">
    <SectionHeader title="Members" description="" />
    <F0Box display="flex" flexDirection="column" gap="sm">
      {["Ada Lovelace", "Grace Hopper", "Alan Turing"].map((name) => (
        <F0Card key={name} compact title={name} description="Engineering" />
      ))}
    </F0Box>
  </F0Box>
)

/**
 * The overview of a details-led resource: one `F0ResourceSection` per group of
 * fields, each with its own Edit action. Stacking sections is how an overview is
 * composed, and this is what "lead with what the resource is" looks like in
 * practice: the attributes come first, and the people the resource touches
 * follow further down or in their own tab.
 */
const DetailsContent = () => (
  // No gap: each section brings the spacing around its own separator.
  <F0Box display="flex" flexDirection="column">
    <F0ResourceSection
      id="work-information"
      header={{
        title: "Work information",
        description: "Key details about the employee's role",
        action: { label: "Edit", icon: Pencil, onClick: fn() },
      }}
    >
      <F0ResourceSection.Item
        label="Email"
        content={{
          type: "item",
          text: "angel.moreno@factorial.co",
          action: { type: "copy" },
        }}
      />
      <F0ResourceSection.Item
        label="Manager"
        content={{
          type: "person",
          firstName: "Alberto",
          lastName: "Martínez",
        }}
      />
      <F0ResourceSection.Item
        label="Legal entity"
        content={{ type: "item", text: "Everyday Software SL" }}
      />
      <F0ResourceSection.Item
        label="Teams"
        content={[
          { type: "team", name: "Payroll" },
          { type: "team", name: "Platform" },
        ]}
      />
      <F0ResourceSection.Item label="Employee company identifier" />
      <F0ResourceSection.Item label="Seniority date" />
    </F0ResourceSection>
    <F0ResourceSection
      id="personal"
      header={{
        title: "Personal",
        action: { label: "Edit", icon: Pencil, onClick: fn() },
      }}
    >
      <F0ResourceSection.Item
        label="First name"
        content={{ type: "item", text: "Angel" }}
      />
      <F0ResourceSection.Item
        label="Last name"
        content={{ type: "item", text: "Moreno" }}
      />
      <F0ResourceSection.Item label="Personal email" />
      <F0ResourceSection.Item label="Pronouns" />
      <F0ResourceSection.Item
        label="Date of birth"
        content={{ type: "item", text: "4 Feb 1991" }}
      />
      <F0ResourceSection.Item
        label="Nationality"
        content={{ type: "item", text: "Mexican" }}
      />
      <F0ResourceSection.Item label="Identity number" />
      <F0ResourceSection.Item
        label="Address"
        content={{ type: "item", text: "Carrer de Pallars 108, Barcelona" }}
      />
    </F0ResourceSection>
    <F0ResourceSection
      id="compensation"
      header={{
        title: "Compensation",
        description: "What this employee is paid, and how",
        action: { label: "Edit", icon: Pencil, onClick: fn() },
      }}
    >
      <F0ResourceSection.Item
        label="Base salary"
        content={{ type: "item", text: "56.000 EUR / year" }}
      />
      <F0ResourceSection.Item
        label="Pay frequency"
        content={{ type: "item", text: "Monthly, 12 payments" }}
      />
      <F0ResourceSection.Item
        label="Salary band"
        content={{ type: "item", text: "Design IC4" }}
      />
      <F0ResourceSection.Item label="Variable pay" />
      <F0ResourceSection.Item
        label="Bank account"
        content={{ type: "item", text: "ES91 **** **** **** 1234" }}
      />
      <F0ResourceSection.Item label="Last review" />
    </F0ResourceSection>
    <F0ResourceSection
      id="teams"
      variant="cards"
      header={{
        title: "Teams",
        description: "The teams Angel belongs to",
        action: { label: "Edit", icon: Pencil, onClick: fn() },
      }}
    >
      <F0ResourceSection.Card
        title="Design"
        description="22 employees"
        avatar={{ type: "team", name: "Design" }}
        onClick={fn()}
      />
      <F0ResourceSection.Card
        title="Product"
        description="43 employees"
        avatar={{ type: "team", name: "Product" }}
        onClick={fn()}
      />
      <F0ResourceSection.Card
        title="Squad/Talent/Foundations"
        description="14 employees"
        avatar={{ type: "team", name: "Squad Talent Foundations" }}
        onClick={fn()}
      />
      <F0ResourceSection.Card
        title="Office/Remote"
        description="182 employees"
        avatar={{ type: "team", name: "Office Remote" }}
        onClick={fn()}
      />
    </F0ResourceSection>
    <F0ResourceSection
      id="time-off"
      header={{
        title: "Time off",
        description: "Allowance and what is left of it",
        action: { label: "Edit", icon: Pencil, onClick: fn() },
      }}
    >
      <F0ResourceSection.Item
        label="Policy"
        content={{ type: "item", text: "Spain, 23 days" }}
      />
      <F0ResourceSection.Item
        label="Taken this year"
        content={{ type: "item", text: "11 days" }}
      />
      <F0ResourceSection.Item
        label="Remaining"
        content={{ type: "item", text: "12 days" }}
      />
      <F0ResourceSection.Item label="Carried over" />
      <F0ResourceSection.Item
        label="Next absence"
        content={{ type: "item", text: "18 Aug 2026" }}
      />
      <F0ResourceSection.Item label="Sick leave this year" />
    </F0ResourceSection>
    <F0ResourceSection
      id="documents"
      header={{
        title: "Documents",
        description: "Signed contracts and anything attached to them",
        action: { label: "Edit", icon: Pencil, onClick: fn() },
      }}
    >
      <F0ResourceSection.Item
        label="Contract"
        content={{ type: "item", text: "Indefinite, full time" }}
      />
      <F0ResourceSection.Item
        label="Signed on"
        content={{ type: "item", text: "12 Mar 2022" }}
      />
      <F0ResourceSection.Item label="Amendments" />
      <F0ResourceSection.Item
        label="NDA"
        content={{ type: "item", text: "Signed" }}
      />
      <F0ResourceSection.Item label="Right to work" />
      <F0ResourceSection.Item label="Equipment agreement" />
    </F0ResourceSection>
  </F0Box>
)

/**
 * A resource whose details are almost all empty. Every field still renders, with
 * `--` where the value is missing, which is what makes the gap fillable.
 */
const SparseContent = () => (
  <F0ResourceSection
    id="place"
    header={{
      title: "Place",
      description: "Where this workplace is and when it works",
      action: { label: "Edit", icon: Pencil, onClick: fn() },
    }}
  >
    <F0ResourceSection.Item label="Address" />
    <F0ResourceSection.Item label="Timezone" />
    <F0ResourceSection.Item label="Holiday calendar" />
    <F0ResourceSection.Item label="Work areas" />
  </F0ResourceSection>
)

/**
 * The rail is the page's own navigation: a table of contents over the sections
 * in the main column, with a search box and no title of its own. The sections
 * are the titles people scan for, so naming the list again adds nothing.
 *
 * Only the sections are passed. The page renders the list, marks whichever
 * section you are reading, and scrolls to the one you pick, because all three
 * need the scrollport and the header's height and only the page has those. The
 * ids are the `id`s of the `F0ResourceSection`s in the main column.
 */
const detailsRail = {
  items: [
    { id: "work-information", label: "Work information" },
    { id: "personal", label: "Personal" },
    { id: "compensation", label: "Compensation" },
    { id: "teams", label: "Teams" },
    { id: "time-off", label: "Time off" },
    { id: "documents", label: "Documents" },
  ],
}

/** The rail over `MainContent`, whose one section is the member list. */
const membersRail = {
  items: [{ id: "members", label: "Members" }],
}

type TeamMember = {
  id: string
  firstName: string
  lastName: string
  jobTitle: string
  email: string
  workplace: string
  joinedAt: string
  lead: boolean
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    firstName: "Alberto",
    lastName: "Martínez",
    jobTitle: "Engineering Manager",
    email: "alberto.martinez@factorial.co",
    workplace: "Barcelona",
    joinedAt: "2 years ago",
    lead: true,
  },
  {
    id: "2",
    firstName: "Grace",
    lastName: "Hopper",
    jobTitle: "Staff Engineer",
    email: "grace.hopper@factorial.co",
    workplace: "Barcelona",
    joinedAt: "3 years ago",
    lead: true,
  },
  {
    id: "3",
    firstName: "Ada",
    lastName: "Lovelace",
    jobTitle: "Backend Engineer",
    email: "ada.lovelace@factorial.co",
    workplace: "Barcelona",
    joinedAt: "1 year ago",
    lead: false,
  },
  {
    id: "4",
    firstName: "Alan",
    lastName: "Turing",
    jobTitle: "Backend Engineer",
    email: "alan.turing@factorial.co",
    workplace: "Remote",
    joinedAt: "8 months ago",
    lead: false,
  },
  {
    id: "5",
    firstName: "Katherine",
    lastName: "Johnson",
    jobTitle: "Data Engineer",
    email: "katherine.johnson@factorial.co",
    workplace: "Madrid",
    joinedAt: "4 months ago",
    lead: false,
  },
  {
    id: "6",
    firstName: "Barbara",
    lastName: "Liskov",
    jobTitle: "Frontend Engineer",
    email: "barbara.liskov@factorial.co",
    workplace: "Barcelona",
    joinedAt: "2 months ago",
    lead: false,
  },
]

const teamLeads = teamMembers.filter((member) => member.lead)

/**
 * The members table, exactly the collection the team page renders today: search,
 * a filter per column that has one, a menu per row and bulk actions on selection.
 * It lays out its own width, its own toolbar and its own rows, so on a resource
 * page it goes in a `collection` section, which only gives it the heading above
 * it and the space around it.
 */
const TeamMembersCollection = () => {
  const source = useDataCollectionSource<TeamMember>({
    dataAdapter: {
      fetchData: ({ search }) => {
        const records = teamMembers.filter((member) => !member.lead)
        if (!search) return { records }
        const query = search.toLowerCase()
        return {
          records: records.filter((member) =>
            `${member.firstName} ${member.lastName}`
              .toLowerCase()
              .includes(query)
          ),
        }
      },
    },
    search: { enabled: true },
    filters: {
      workplace: {
        type: "in",
        label: "Workplace",
        options: {
          options: [
            { label: "Barcelona", value: "Barcelona" },
            { label: "Madrid", value: "Madrid" },
            { label: "Remote", value: "Remote" },
          ],
        },
      },
    },
    sortings: { name: { label: "Employee" } },
    selectable: (member) => member.id,
    itemActions: () => [
      { label: "Promote to leader", icon: Crown, onClick: fn() },
      { label: "Change team", icon: Swap, onClick: fn() },
      { label: "Remove from team", icon: Cross, critical: true, onClick: fn() },
    ],
    bulkActions: () => ({
      primary: [{ id: "remove", label: "Remove from team", icon: Cross }],
      secondary: [{ id: "move", label: "Change team", icon: Swap }],
    }),
  })

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              {
                label: "Employee",
                sorting: "name",
                noHiding: true,
                render: (member) => ({
                  type: "person",
                  value: {
                    firstName: member.firstName,
                    lastName: member.lastName,
                  },
                }),
              },
              {
                label: "Job title",
                render: (member) => ({ type: "text", value: member.jobTitle }),
              },
              {
                label: "Email",
                render: (member) => ({ type: "text", value: member.email }),
              },
              {
                label: "Workplace",
                render: (member) => ({ type: "text", value: member.workplace }),
              },
              {
                label: "Joined team",
                render: (member) => ({ type: "text", value: member.joinedAt }),
              },
            ],
            allowColumnHiding: true,
            allowColumnReordering: true,
          },
        },
      ]}
    />
  )
}

/**
 * The team page as it is built today, on the abstraction: leads as cards because
 * they are the people to go to, then every member in a table. The leads are cards
 * and the members a collection, which is the shape of the page rather than a
 * decision each team page makes for itself.
 */
const TeamContent = () => (
  // No gap: each section brings the spacing around its own separator.
  <F0Box display="flex" flexDirection="column">
    <F0ResourceSection
      id="leads"
      variant="cards"
      // Four across, because leads are few and a lead card is a name and a job
      // title rather than something to read.
      columns={4}
      header={{
        title: "Leads",
        action: { label: "Add leads", icon: Add, onClick: fn() },
      }}
    >
      {teamLeads.map((lead) => (
        <F0ResourceSection.Card
          key={lead.id}
          // Compact: the avatar sits beside the name rather than above it, which
          // is what keeps a row of four from being four tall cards.
          compact
          title={`${lead.firstName} ${lead.lastName}`}
          description={lead.jobTitle}
          avatar={{
            type: "person",
            firstName: lead.firstName,
            lastName: lead.lastName,
          }}
          otherActions={[
            { label: "Demote to member", icon: ArrowDown, onClick: fn() },
            { label: "Change team", icon: Swap, onClick: fn() },
            {
              label: "Remove from team",
              icon: Cross,
              critical: true,
              onClick: fn(),
            },
          ]}
          onClick={fn()}
        />
      ))}
    </F0ResourceSection>
    <F0ResourceSection
      id="members"
      variant="collection"
      header={{ title: "Members" }}
    >
      <TeamMembersCollection />
    </F0ResourceSection>
  </F0Box>
)

/**
 * Stands in for the map. A real workplace page renders Google Maps here, which a
 * story cannot, but the point survives: the block is the content, sized like
 * content, not a field in a list.
 */
const MapStandIn = () => (
  <F0Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="60"
    background="secondary"
    border="default"
    borderColor="secondary"
    borderRadius="md"
  >
    <F0Box display="flex" flexDirection="column" alignItems="center" gap="sm">
      <F0Icon icon={Pin} color="secondary" />
      <F0Text content="Carrer d'Aragó 287, 08009 Barcelona" />
    </F0Box>
  </F0Box>
)

/**
 * A workplace leads with where it is. This is the one case in the definition where
 * placement stops being a breadcrumb and becomes the content: putting "Spain" in
 * the header while the page leads with something else gets the page wrong.
 */
const WorkplaceContent = () => (
  <F0Box display="flex" flexDirection="column">
    <F0ResourceSection
      id="where"
      variant="collection"
      header={{
        title: "Where it is",
        action: { label: "Edit", icon: Pencil, onClick: fn() },
      }}
    >
      <MapStandIn />
    </F0ResourceSection>
    <F0ResourceSection
      id="address"
      header={{ title: "Address", description: "How post and people find it" }}
    >
      <F0ResourceSection.Item
        label="Street"
        content={{ type: "item", text: "Carrer d'Aragó 287" }}
      />
      <F0ResourceSection.Item
        label="City"
        content={{ type: "item", text: "Barcelona" }}
      />
      <F0ResourceSection.Item
        label="Postal code"
        content={{ type: "item", text: "08009" }}
      />
      <F0ResourceSection.Item
        label="Country"
        content={{ type: "item", text: "Spain" }}
      />
      <F0ResourceSection.Item
        label="Timezone"
        content={{ type: "item", text: "Europe/Madrid" }}
      />
      <F0ResourceSection.Item label="Phone number" />
    </F0ResourceSection>
    <F0ResourceSection
      id="working"
      header={{
        title: "How it works",
        description: "What this workplace implies for the people based here",
      }}
    >
      <F0ResourceSection.Item
        label="Legal entity"
        content={{
          type: "item",
          text: "Everyday Software SL",
          action: { type: "navigate", href: "#" },
        }}
      />
      <F0ResourceSection.Item label="Holiday calendar" />
      <F0ResourceSection.Item
        label="Geofencing"
        content={{ type: "status-tag", text: "Off", variant: "neutral" }}
      />
      <F0ResourceSection.Item
        label="Work areas"
        content={{ type: "item", text: "2" }}
      />
    </F0ResourceSection>
  </F0Box>
)

/**
 * A role leads with its specification. Nobody is inside a role: people reflect it,
 * so the people list here is a consequence and is read-only.
 */
const RoleContent = () => (
  <F0Box display="flex" flexDirection="column">
    <F0ResourceSection
      id="definition"
      header={{
        title: "Definition",
        description: "Where this role sits in the catalog",
        action: { label: "Edit", icon: Pencil, onClick: fn() },
      }}
    >
      <F0ResourceSection.Item
        label="Family"
        content={{ type: "item", text: "Design" }}
      />
      <F0ResourceSection.Item
        label="Function"
        content={{ type: "item", text: "Product Design" }}
      />
      <F0ResourceSection.Item
        label="Level"
        content={{ type: "item", text: "IC4" }}
      />
      <F0ResourceSection.Item
        label="Reports to"
        content={{ type: "item", text: "Design Manager" }}
      />
      <F0ResourceSection.Item label="Job description" />
      <F0ResourceSection.Item label="Mercer benchmark" />
    </F0ResourceSection>
    <F0ResourceSection
      id="conditions"
      header={{
        title: "Working conditions",
        description: "What holding this role entails",
      }}
    >
      <F0ResourceSection.Item
        label="Contract type"
        content={{ type: "item", text: "Indefinite" }}
      />
      <F0ResourceSection.Item
        label="Weekly hours"
        content={{ type: "item", text: "40" }}
      />
      <F0ResourceSection.Item label="Trial period" />
      <F0ResourceSection.Item
        label="Legal entities"
        content={[
          { type: "team", name: "Everyday Software SL" },
          { type: "team", name: "Everyday Software GmbH" },
        ]}
      />
    </F0ResourceSection>
    <F0ResourceSection
      id="people"
      variant="cards"
      columns={4}
      header={{
        title: "Who reflects it",
        description:
          "Nobody is inside a role. These people match it, so this list changes by changing their contracts, not by editing here",
      }}
    >
      {[
        { first: "Angel", last: "Moreno" },
        { first: "Desirée", last: "Navarro" },
        { first: "Lola", last: "Ruiz" },
      ].map((person) => (
        <F0ResourceSection.Card
          key={person.last}
          compact
          title={`${person.first} ${person.last}`}
          description="Product Designer"
          avatar={{
            type: "person",
            firstName: person.first,
            lastName: person.last,
          }}
          onClick={fn()}
        />
      ))}
    </F0ResourceSection>
  </F0Box>
)

const baseArgs = {
  title: "Payroll",
  description: "14 members",
  avatar: { type: "team" as const, name: "Payroll" },
  primaryAction: { label: "Add members", icon: Add, onClick: fn() },
  otherActions: [
    { label: "Rename", icon: Pencil, onClick: fn() },
    { label: "Delete", icon: Delete, critical: true, onClick: fn() },
  ],
}

const employeeArgs = {
  title: "Angel Moreno",
  description: "Senior Product Designer",
  avatar: {
    type: "person" as const,
    firstName: "Angel",
    lastName: "Moreno",
  },
  primaryAction: { label: "Edit profile", icon: Pencil, onClick: fn() },
  otherActions: [
    { label: "Offboard", icon: Delete, critical: true, onClick: fn() },
  ],
  metadata: [
    {
      label: "Pronouns",
      value: { type: "text" as const, content: "he/him" },
    },
    {
      label: "Email",
      value: { type: "text" as const, content: "angel.moreno@factorial.co" },
    },
    {
      label: "Joined",
      value: { type: "text" as const, content: "2 years ago" },
    },
  ],
}

/**
 * A details-led resource, which is the shape to reach for whenever the resource's
 * own attributes are the subject: an employee, a workplace, a role. The overview
 * is a stack of `F0ResourceSection`s, one per group of fields, and the rail is the
 * page's own navigation over them.
 *
 * Each tab carries its own content, so the header and the tab strip stay put and
 * only the body under them changes. Click through the tabs to see it.
 */
export const Default: Story = {
  args: {
    ...employeeArgs,
    onHistoryClick: fn(),
    tabs: [
      {
        // Details, not Overview. "Overview" names an aggregation of the tabs
        // beside it, which is how it ends up duplicating them and being visited
        // by nobody. The first tab is what most arrivals came for.
        id: "details",
        label: "Details",
        content: <DetailsContent />,
        aside: detailsRail,
      },
      {
        id: "documents",
        label: "Documents",
        content: (
          <F0ResourceSection id="contracts" header={{ title: "Contracts" }}>
            <F0ResourceSection.Item
              label="Contract"
              content={{ type: "item", text: "Indefinite, full time" }}
            />
            <F0ResourceSection.Item
              label="Signed on"
              content={{ type: "item", text: "12 Mar 2022" }}
            />
            <F0ResourceSection.Item label="Amendments" />
          </F0ResourceSection>
        ),
        aside: { items: [{ id: "contracts", label: "Contracts" }] },
      },
      {
        // Last, always: settings are what you change once and leave alone.
        id: "settings",
        label: "Settings",
        content: (
          <F0ResourceSection
            id="visibility"
            header={{
              title: "Visibility",
              description: "Who can see this profile and what they can see",
            }}
          >
            <F0ResourceSection.Item
              label="Profile visibility"
              content={{ type: "item", text: "Everyone in the company" }}
            />
            <F0ResourceSection.Item
              label="Personal details"
              content={{ type: "item", text: "Managers only" }}
            />
          </F0ResourceSection>
        ),
        aside: { items: [{ id: "visibility", label: "Visibility" }] },
      },
    ],
    activeTabId: "details",
  },
}

/**
 * The team page as it is built today, on the abstraction. The header carries the
 * member count and when the team last changed; the body is leads as cards then
 * every member in a table.
 *
 * No rail: two sections are not a list worth navigating, and the page fits a
 * scroll. Rendered inside `Page` because that is how it is actually mounted, so
 * the breadcrumbs above the name are real and the header condenses as you scroll.
 */
export const Team: Story = {
  parameters: { layout: "fullscreen" },
  args: {
    ...baseArgs,
    description: "6 members",
    metadata: [
      {
        label: "Last updated",
        value: { type: "text" as const, content: "3 days ago" },
      },
      {
        label: "Created",
        value: { type: "text" as const, content: "about 2 years ago" },
      },
    ],
    otherActions: [
      { label: "Rename team", icon: Pencil, onClick: fn() },
      { label: "Move team", icon: ArrowRight, onClick: fn() },
      { label: "Delete", icon: Delete, critical: true, onClick: fn() },
    ],
    children: <TeamContent />,
  },
  render: (args) => (
    <Page
      header={
        <PageHeader
          module={{ id: "employees", name: "Employees", href: "#" }}
          breadcrumbs={[
            { id: "teams", label: "Teams", href: "#" },
            { id: "payroll", label: "Payroll" },
          ]}
        />
      }
    >
      <F0ResourcePage {...args} />
    </Page>
  ),
}

/**
 * A workplace, and the one resource where placement stops being a breadcrumb and
 * becomes the content. Its answer to "where is it" is a map and an address, so
 * that is what Details leads with. Everything else about a workplace is a
 * consequence of where it is.
 *
 * Two empty fields are deliberate: no holiday calendar and no phone number are
 * exactly the gaps a workplace page exists to surface.
 */
export const Workplace: Story = {
  parameters: { layout: "fullscreen" },
  args: {
    title: "Barcelona · Aragó 287",
    description: "128 people based here",
    // Workplaces have no identity of their own, so they take the type's icon
    // rather than an avatar.
    avatar: { type: "icon" as const, icon: Building },
    onHistoryClick: fn(),
    metadata: [
      {
        label: "Country",
        value: { type: "text" as const, content: "Spain" },
      },
      {
        label: "Legal entity",
        value: { type: "text" as const, content: "Everyday Software SL" },
      },
    ],
    primaryAction: { label: "Edit workplace", icon: Pencil, onClick: fn() },
    otherActions: [
      { label: "Rename", icon: Pencil, onClick: fn() },
      { label: "Delete", icon: Delete, critical: true, onClick: fn() },
    ],
    tabs: [
      {
        id: "details",
        label: "Details",
        content: <WorkplaceContent />,
        aside: {
          items: [
            { id: "where", label: "Where it is" },
            { id: "address", label: "Address" },
            { id: "working", label: "How it works" },
          ],
        },
      },
      // Earns a tab on the first test: a table of people needs its own search,
      // filters and bulk actions to be usable.
      { id: "people", label: "People", content: <MainContent /> },
      { id: "holidays", label: "Holidays", content: <MainContent /> },
      { id: "areas", label: "Work areas", content: <MainContent /> },
      {
        id: "settings",
        label: "Settings",
        content: (
          <F0ResourceSection
            id="attendance"
            header={{
              title: "Attendance",
              description: "How time is tracked at this workplace",
            }}
          >
            <F0ResourceSection.Item
              label="Geofencing"
              content={{
                type: "status-tag",
                text: "Off",
                variant: "neutral",
              }}
            />
            <F0ResourceSection.Item label="Clock-in radius" />
          </F0ResourceSection>
        ),
        aside: { items: [{ id: "attendance", label: "Attendance" }] },
      },
    ],
    activeTabId: "details",
  },
  render: (args) => (
    <Page
      header={
        <PageHeader
          module={{ id: "settings", name: "Settings", href: "#" }}
          breadcrumbs={[
            { id: "workplaces", label: "Workplaces", href: "#" },
            { id: "barcelona", label: "Barcelona · Aragó 287" },
          ]}
        />
      }
    >
      <F0ResourcePage {...args} />
    </Page>
  ),
}

/**
 * A role, which leads with its specification. The people section is the point of
 * interest: nobody is inside a role, so the list is a consequence of other
 * people's contracts and cannot be edited from here. Same question as a team's
 * members, opposite direction.
 */
export const Role: Story = {
  parameters: { layout: "fullscreen" },
  args: {
    title: "Product Designer",
    description: "Design · IC4",
    avatar: { type: "icon" as const, icon: Briefcase },
    onHistoryClick: fn(),
    metadata: [
      {
        label: "Family",
        value: { type: "text" as const, content: "Design" },
      },
      {
        label: "People",
        value: { type: "text" as const, content: "3" },
      },
    ],
    primaryAction: { label: "Edit role", icon: Pencil, onClick: fn() },
    otherActions: [
      { label: "Move in catalog", icon: ArrowRight, onClick: fn() },
      { label: "Delete", icon: Delete, critical: true, onClick: fn() },
    ],
    tabs: [
      {
        id: "details",
        label: "Details",
        content: <RoleContent />,
        aside: {
          items: [
            { id: "definition", label: "Definition" },
            { id: "conditions", label: "Working conditions" },
            { id: "people", label: "Who reflects it" },
          ],
        },
      },
      { id: "salary", label: "Salary ranges", content: <MainContent /> },
      { id: "career", label: "Career path", content: <MainContent /> },
      {
        id: "settings",
        label: "Settings",
        content: (
          <F0ResourceSection id="visibility" header={{ title: "Visibility" }}>
            <F0ResourceSection.Item
              label="Shown in job catalog"
              content={{
                type: "status-tag",
                text: "Visible",
                variant: "positive",
              }}
            />
          </F0ResourceSection>
        ),
        aside: { items: [{ id: "visibility", label: "Visibility" }] },
      },
    ],
    activeTabId: "details",
  },
  render: (args) => (
    <Page
      header={
        <PageHeader
          module={{ id: "employees", name: "Employees", href: "#" }}
          breadcrumbs={[
            { id: "catalog", label: "Job catalog", href: "#" },
            { id: "design", label: "Design", href: "#" },
            { id: "role", label: "Product Designer" },
          ]}
        />
      }
    >
      <F0ResourcePage {...args} />
    </Page>
  ),
}

export const WithoutRail: Story = {
  tags: ["no-sidebar"],
  args: {
    ...baseArgs,
    children: <MainContent />,
  },
}

export const WithTabs: Story = {
  tags: ["no-sidebar"],
  args: {
    ...baseArgs,
    onHistoryClick: fn(),
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "people", label: "People" },
      { id: "settings", label: "Settings" },
    ],
    activeTabId: "overview",
    aside: membersRail,
    children: <MainContent />,
  },
}

/**
 * A long main column beside the rail. The rail pins itself under the header on
 * its own, so this is what that looks like with content to scroll past.
 */
export const LongContent: Story = {
  tags: ["no-sidebar"],
  args: {
    ...baseArgs,
    aside: membersRail,
    children: (
      <F0Box display="flex" flexDirection="column" gap="lg">
        <SectionHeader title="Members" description="" />
        <F0Box display="flex" flexDirection="column" gap="sm">
          {Array.from({ length: 24 }, (_, index) => (
            <F0Card
              key={index}
              compact
              title={`Teammate ${index + 1}`}
              description="Engineering"
            />
          ))}
        </F0Box>
      </F0Box>
    ),
  },
}

export const WithAlert: Story = {
  tags: ["no-sidebar"],
  args: {
    ...baseArgs,
    alert: (
      <F0Alert
        variant="warning"
        title="Sync paused"
        description="Reconnect your calendar to resume sync."
      />
    ),
    aside: membersRail,
    children: <MainContent />,
  },
}

/**
 * A resource with almost nothing filled in. Both columns keep showing what is
 * missing rather than hiding it, because hidden gaps never get filled: the rail
 * counts them, and the section leaves every empty field on the page as `--`.
 */
export const Sparse: Story = {
  tags: ["no-sidebar"],
  args: {
    title: "Untitled workplace",
    avatar: { type: "team" as const, name: "Untitled workplace" },
    primaryAction: { label: "Complete setup", icon: Add, onClick: fn() },
    aside: { items: [{ id: "place", label: "Place" }] },
    children: <SparseContent />,
  },
}

/**
 * How the component is actually mounted: `Default` inside the `children` of
 * `Navigation/Page`, which owns the app page header and its breadcrumbs. Same
 * layout, real shell. `Page` stretches each direct child, so this story is what
 * proves the composition holds rather than splitting the height between header,
 * tabs and content, and it is the one to scroll: `Page` owns the scrollport the
 * header condenses against and the rail follows.
 */
export const InsidePage: Story = {
  tags: ["no-sidebar"],
  // The gray app canvas around the rounded page is the point of this story.
  parameters: { layout: "fullscreen" },
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Page
      header={
        <PageHeader
          module={{ id: "employees", name: "Employees", href: "#" }}
          breadcrumbs={[
            { id: "teams", label: "Teams", href: "#" },
            { id: "payroll", label: "Payroll" },
          ]}
        />
      }
    >
      <F0ResourcePage {...args} />
    </Page>
  ),
}

/**
 * Scroll this one. The header and its tabs stay at the top, and once the content
 * has moved the header condenses: the metadata collapses away, the avatar drops
 * two sizes and the name steps down to the heading type. Scroll back to the top
 * and it all comes back. Needs `Page` around it, because `Page` owns the
 * scrolling body the header listens to.
 */
export const CollapsingHeader: Story = {
  tags: ["no-sidebar"],
  parameters: { layout: "fullscreen" },
  args: {
    ...employeeArgs,
    onHistoryClick: fn(),
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "documents", label: "Documents" },
      { id: "settings", label: "Settings" },
    ],
    activeTabId: "overview",
    aside: membersRail,
    children: (
      <F0Box display="flex" flexDirection="column" gap="xl">
        <DetailsContent />
        <F0Box display="flex" flexDirection="column" gap="sm">
          {Array.from({ length: 20 }, (_, index) => (
            <F0Card
              key={index}
              compact
              title={`Document ${index + 1}`}
              description="Signed"
            />
          ))}
        </F0Box>
      </F0Box>
    ),
  },
  render: (args) => (
    <Page
      header={
        <PageHeader
          module={{ id: "employees", name: "Employees", href: "#" }}
          breadcrumbs={[
            { id: "people", label: "People", href: "#" },
            { id: "angel", label: "Angel Moreno" },
          ]}
        />
      }
    >
      <F0ResourcePage {...args} />
    </Page>
  ),
}

export const HistoryOpensActivity: Story = {
  tags: ["no-sidebar"],
  args: {
    ...baseArgs,
    onHistoryClick: fn(),
    aside: membersRail,
    children: <MainContent />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    // BaseHeader renders a mobile and a desktop action cluster, so the button
    // exists twice in the DOM. The desktop one is last and is the visible one
    // at Storybook's default viewport.
    const historyButtons = canvas.getAllByRole("button", { name: "History" })
    await userEvent.click(historyButtons[historyButtons.length - 1])
    await expect(args.onHistoryClick).toHaveBeenCalled()
  },
}

/**
 * One consolidated visual capture. Stacks the configurations that differ
 * structurally so each is covered by a single Chromatic snapshot rather than
 * scattering `withSnapshot` across stories.
 */
export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({}),
  args: { ...baseArgs, children: <MainContent /> },
  render: (args) => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <F0ResourcePage
        {...args}
        onHistoryClick={fn()}
        tabs={[
          { id: "overview", label: "Overview" },
          { id: "people", label: "People" },
        ]}
        activeTabId="overview"
        aside={membersRail}
      />
      <F0ResourcePage {...args} />
      <F0ResourcePage
        {...args}
        alert={
          <F0Alert
            variant="warning"
            title="Sync paused"
            description="Reconnect your calendar to resume sync."
          />
        }
        aside={membersRail}
      />
      <F0ResourcePage
        {...employeeArgs}
        onHistoryClick={fn()}
        aside={detailsRail}
      >
        <DetailsContent />
      </F0ResourcePage>
      <F0ResourcePage
        title="Untitled workplace"
        avatar={{ type: "team", name: "Untitled workplace" }}
        primaryAction={{ label: "Complete setup", icon: Add, onClick: fn() }}
        aside={{ items: [{ id: "place", label: "Place" }] }}
      >
        <SparseContent />
      </F0ResourcePage>
    </F0Box>
  ),
}
