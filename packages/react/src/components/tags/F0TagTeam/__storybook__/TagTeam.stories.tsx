import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0TagTeam } from "../"

const meta: Meta = {
  component: F0TagTeam,
  title: "Tags/TagTeam",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A tag component that displays a team with a name and an optional image.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  args: {
    name: "Team Foundations",
    src: "/avatars/team01.jpg",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTeamTag: Story = {}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-[200px] flex-col gap-2 overflow-hidden border-[1px] border-dotted border-[#333]">
      <h3 className="text-lg font-semibold">All Team Tags</h3>
      <F0TagTeam name="Team Foundations" src="/avatars/team01.jpg" />
      <F0TagTeam name="Team Foundations" />
      <F0TagTeam name="Team Foundations with a very long name that should be truncated but should have an ellipsis and a tooltip" />
    </div>
  ),
}
