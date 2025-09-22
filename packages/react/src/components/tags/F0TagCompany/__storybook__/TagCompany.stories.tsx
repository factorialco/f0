import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0TagCompany } from "../"

const meta: Meta = {
  component: F0TagCompany,
  title: "Tag/TagCompany",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    companyName: "Factorial",
    companyImageUrl: "/avatars/factorial.png",
    onClick: () => {},
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCompanyTag: Story = {}
