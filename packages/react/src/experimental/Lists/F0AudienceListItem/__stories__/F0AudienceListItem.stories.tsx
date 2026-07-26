import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0Button } from "@/components/F0Button"
import type { F0AudienceEntity } from "@/experimental/Forms/Fields/F0AudienceSelector"
import { ChevronDown } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0AudienceListItem } from "../index"
import type { F0AudienceMember } from "../types"

const ada: F0AudienceEntity = {
  kind: "individual",
  id: "emp-001",
  name: "Ada Lovelace",
  firstName: "Ada",
  lastName: "Lovelace",
  subtitle: "VP of Engineering",
}

const marie: F0AudienceEntity = {
  kind: "individual",
  id: "emp-002",
  name: "Marie Curie",
  firstName: "Marie",
  lastName: "Curie",
  subtitle: "Head of People",
}

const payroll: F0AudienceEntity = {
  kind: "team",
  id: "team-payroll",
  name: "Payroll",
  memberCount: 3,
}

const everyone: F0AudienceEntity = {
  kind: "everyone",
  id: "everyone",
  name: "Everyone at Factorial",
  memberCount: 20,
}

const members: F0AudienceMember[] = [
  {
    id: "m1",
    firstName: "Diego",
    lastName: "Hernández",
    subtitle: "Payroll Specialist",
  },
  {
    id: "m2",
    firstName: "Grace",
    lastName: "Hopper",
    subtitle: "Principal Engineer",
  },
  {
    id: "m3",
    firstName: "Lin",
    lastName: "Chen",
    subtitle: "Backend Engineer",
  },
]

const fetchMembers = (
  result: F0AudienceMember[] = members,
  delayMs = 600
): (() => Promise<F0AudienceMember[]>) => {
  return () =>
    new Promise((resolve) => setTimeout(() => resolve(result), delayMs))
}

const roleDropdown = (
  <F0Button
    variant="ghost"
    size="sm"
    label="Viewer"
    icon={ChevronDown}
    iconPosition="right"
  />
)

const meta = {
  title: "Components/F0AudienceListItem",
  component: F0AudienceListItem,
  tags: ["experimental"],
  args: {
    entity: ada,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Access-list row for a person or a group of people. Group rows can expand into a lazily-fetched member list. The right slot hosts the product's role dropdown, a static role label or a pending tag.",
      },
    },
  },
} satisfies Meta<typeof F0AudienceListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Individual: Story = {
  args: {
    entity: ada,
    right: roleDropdown,
  },
}

export const CurrentUser: Story = {
  args: {
    entity: marie,
    isYou: true,
    right: <span className="font-medium text-f1-foreground">Owner</span>,
  },
}

export const WithWarning: Story = {
  args: {
    entity: ada,
    warning: "Outside your reporting line",
    right: roleDropdown,
  },
}

export const Group: Story = {
  args: {
    entity: payroll,
    right: roleDropdown,
    members: {
      fetch: fetchMembers(),
      note: "New members in this group automatically gain access.",
    },
  },
}

export const EmptyGroup: Story = {
  args: {
    entity: payroll,
    right: roleDropdown,
    members: {
      fetch: fetchMembers([]),
      note: "New members in this group automatically gain access.",
    },
  },
}

export const Everyone: Story = {
  args: {
    entity: everyone,
    right: roleDropdown,
  },
}

export const AccessList: Story = {
  render: () => (
    <div className="flex max-w-[560px] flex-col">
      <F0AudienceListItem
        entity={marie}
        isYou
        right={<span className="font-medium text-f1-foreground">Owner</span>}
      />
      <F0AudienceListItem
        entity={payroll}
        right={roleDropdown}
        members={{
          fetch: fetchMembers(),
          note: "New members in this group automatically gain access.",
        }}
      />
      <F0AudienceListItem
        entity={ada}
        warning="Outside your reporting line"
        right={roleDropdown}
      />
    </div>
  ),
}

/** Static variants consolidated for Chromatic visual-regression coverage. */
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex max-w-[560px] flex-col">
      <F0AudienceListItem
        entity={marie}
        isYou
        right={<span className="font-medium text-f1-foreground">Owner</span>}
      />
      <F0AudienceListItem entity={ada} right={roleDropdown} />
      <F0AudienceListItem
        entity={ada}
        warning="Outside your reporting line"
        right={roleDropdown}
      />
      <F0AudienceListItem entity={payroll} right={roleDropdown} />
      <F0AudienceListItem entity={everyone} right={roleDropdown} />
    </div>
  ),
}
