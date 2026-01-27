import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0TagCompany } from "../"

const meta: Meta = {
  component: F0TagCompany,
  title: "Tags/TagCompany",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A tag component that displays a company with a name and an optional logo image.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  args: {
    name: "Factorial",
    src: "/avatars/factorial.png",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCompanyTag: Story = {}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-[200px] flex-col gap-2 overflow-hidden border-[1px] border-dotted border-[#333]">
      <h3 className="text-lg font-semibold">All Company Tags</h3>
      <F0TagCompany name="Factorial" src="/avatars/factorial.png" />
      <F0TagCompany name="Factorial" />

      <F0TagCompany name="Factorial with a very long name that should be truncated but should have an ellipsis and a tooltip" />
    </div>
  ),
}
