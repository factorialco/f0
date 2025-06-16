import type { Meta, StoryObj } from "@storybook/react-vite"
import { Image } from "../../../../icons/app"
import { SidebarHeader } from "./index"

const meta = {
  title: "Sidebar/Header",
  component: SidebarHeader,
  tags: ["autodocs", "experimental", "no-sidebar"],
} satisfies Meta<typeof SidebarHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    companies: [
      {
        id: "1",
        name: "Factorial with a long name",
        logo: "https://github.com/factorialco.png",
      },
      { id: "2", name: "Dazlog", logo: "https://github.com/dazlog.png" },
      { id: "3", name: "Acme Corp" },
    ],
    selected: "1",
    onChange: (company) => console.log("Selected company:", company),
    isExpanded: true,
  },
}

export const Notification: Story = {
  args: {
    ...Default.args,
    withNotification: true,
    additionalOptions: [
      {
        label: "Upload company avatar",
        value: "upload",
        description: "Personalise your experience",
        icon: Image,
      },
    ],
  },
}
