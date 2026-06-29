import { Meta, StoryObj } from "@storybook/react-vite"

import { fakePeople } from "@/mocks/people"

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
        <DataList.Item text={fakePeople.eva.email} action={{ type: "copy" }} />
        <DataList.Item
          action={{ type: "navigate", href: "https://factorialhr.com/" }}
          text="Factorial"
        />
        <DataList.Item
          action={{ type: "navigate", href: "https://factorialhr.com/" }}
          text="Banco Bilbao Vizcaya Argentaria"
        />
        <DataList.PersonItem
          firstName={fakePeople.priya.firstName}
          lastName={fakePeople.priya.lastName}
          avatarUrl={fakePeople.priya.image}
        />
        <DataList.PersonItem
          firstName={fakePeople.aria.firstName}
          lastName={fakePeople.aria.lastName}
          avatarUrl={fakePeople.aria.image}
          action={{ type: "copy", text: fakePeople.aria.firstName }}
        />
        <DataList.PersonItem
          firstName={fakePeople.felix.firstName}
          lastName={fakePeople.felix.lastName}
          avatarUrl={fakePeople.felix.image}
          action={{
            type: "navigate",
            href: fakePeople.felix.image,
          }}
        />
        <DataList.CompanyItem
          name="Factorial"
          avatarUrl="/avatars/factorial.png"
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
