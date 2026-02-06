import type { Meta, StoryObj } from "@storybook/react-vite"

import { CompanySelector } from "./index"

const meta: Meta<typeof CompanySelector> = {
  title: "Sidebar/CompanySelector",
  component: CompanySelector,
  tags: ["autodocs", "experimental", "no-sidebar"],
  decorators: [
    (Story) => (
      <div className="max-w-[300px] bg-f1-background-tertiary p-3">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CompanySelector>

const exampleCompanies = [
  { id: "1", name: "Factorial", logo: "/avatars/factorial.png" },
  { id: "2", name: "Dazlog", logo: "/avatars/company02.jpg" },
  { id: "3", name: "Acme Corp, Company of Extended Names" },
]

export const Default: Story = {
  args: {
    companies: exampleCompanies,
    selected: "1",
  },
}

export const SingleEntry: Story = {
  args: {
    companies: [exampleCompanies[0]],
    selected: "1",
  },
}

export const LoadingCompanies: Story = {
  args: {
    companies: exampleCompanies,
    isLoading: true,
  },
}
