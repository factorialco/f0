import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Image } from "../../../../icons/app"
import { SidebarHeader } from "./index"

const meta = {
  title: "Sidebar/Header",
  component: SidebarHeader,
  tags: ["autodocs", "experimental", "no-sidebar"],
  decorators: [
    (Story) => {
      const [selected, setSelected] = useState("1")
      return <Story selected={selected} onChange={setSelected} />
    },
  ],
} satisfies Meta<typeof SidebarHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    companies: [
      {
        id: "1",
        name: "Factorial with a long name",
        logo: "/avatars/factorial.png",
      },
      { id: "2", name: "Dazlog", logo: "/avatars/company02.jpg" },
      { id: "3", name: "Acme Corp" },
      { id: "4", name: "HSP Projektmanagement und Beratung GmbH" },
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
