import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0TagTeam } from "./index"

const meta: Meta = {
  component: F0TagTeam,
  title: "Tag/TagTeam",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    teamName: "Team Foundations",
    teamImageUrl: "/avatars/team01.jpg",
    onClick: () => {},
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTeamTag: Story = {}
