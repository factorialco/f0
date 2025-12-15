import { Meta, StoryObj } from "@storybook/react-vite"

import { Check } from "../../../icons/app"
import { DataList } from "./index"

const meta: Meta<typeof DataList> = {
  title: "List/DataList",
  component: DataList,
  tags: ["autodocs", "experimental"],
  args: {
    children: (
      <>
        <DataList.Item text="test" />
        <DataList.Item icon={Check} text="Make coffee" />
        <DataList.Item text="hellen@factorial.co" action={{ type: "copy" }} />
        <DataList.Item
          action={{ type: "navigate", href: "https://factorialhr.com/" }}
          text="Factorial"
        />
        <DataList.Item
          action={{ type: "navigate", href: "https://factorialhr.com/" }}
          text="Banco Bilbao Vizcaya Argentaria"
        />
        <DataList.PersonItem
          firstName="Saul"
          lastName="Dominguez"
          avatarUrl="/avatars/person05.jpg"
        />
        <DataList.PersonItem
          firstName="Dani"
          lastName="Moreno"
          avatarUrl="/avatars/person06.jpg"
          action={{ type: "copy", text: "Dani" }}
        />
        <DataList.PersonItem
          firstName="Josep Jaume"
          lastName=" Rey Peroy"
          avatarUrl="/avatars/person07.jpg"
          action={{
            type: "navigate",
            href: "/avatars/person07.jpg",
          }}
        />
        <DataList.CompanyItem name="Factorial" avatarUrl="/avatars/factorial.png" />
        <DataList.TeamItem name="Foundations" />
      </>
    ),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithLabel: Story = {
  args: {
    label: "Related Data",
    children: (
      <>
        <DataList.Item text="test" />
        <DataList.Item icon={Check} text="Make coffee" />
      </>
    ),
  },
}
