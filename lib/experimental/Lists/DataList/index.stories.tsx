import { Meta, StoryObj } from "@storybook/react"

import { Check } from "@/icons/app"
import { DataList } from "."

const meta: Meta<typeof DataList> = {
  title: "DataList",
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
          avatarUrl="https://avatars.githubusercontent.com/u/22561733?v=4"
        />
        <DataList.PersonItem
          firstName="Dani"
          lastName="Moreno"
          avatarUrl="https://avatars.githubusercontent.com/u/96433370?s=60&v=4"
          action={{ type: "copy", text: "Dani" }}
        />
        <DataList.PersonItem
          firstName="Josep Jaume"
          lastName=" Rey Peroy"
          avatarUrl="https://avatars.githubusercontent.com/u/111746?s=60&v=4"
          action={{
            type: "navigate",
            href: "https://avatars.githubusercontent.com/u/111746?s=60&v=4",
          }}
        />
        <DataList.CompanyItem
          name="Factorial"
          avatarUrl="https://avatars.githubusercontent.com/u/21041797?s=200&v=4"
        />
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
