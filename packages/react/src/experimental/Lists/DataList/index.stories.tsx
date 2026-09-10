import { Meta, StoryObj } from "@storybook/react-vite"
import { Check } from "../../../icons/app"
import { DataList } from "."

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
          firstName="Jordan"
          lastName="Avery"
          avatarUrl="/avatars/person06.jpg"
          action={{ type: "copy", text: "Jordan" }}
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

export const WithRecordItems: Story = {
  args: {
    label: "Reviews and goals",
    children: (
      <>
        <DataList.RecordItem
          title="Q4 2025 review"
          description="Feb 28, 2026"
          detail={{ type: "status-tag", text: "4.2 / 5", variant: "positive" }}
          action={{ type: "navigate", href: "#reviews/q4-2025" }}
        />
        <DataList.RecordItem
          title="Mid-year 2025"
          description="Aug 14, 2025"
          detail={{ type: "status-tag", text: "3.8 / 5", variant: "neutral" }}
          action={{ type: "navigate", href: "#reviews/mid-year-2025" }}
        />
        <DataList.RecordItem
          title="Hire two engineers"
          description="Q3 2026 · Target 2 hires"
          detail={{ type: "alert-tag", text: "Overdue", level: "warning" }}
          action={{ type: "navigate", href: "#goals/hire-engineers" }}
        />
        <DataList.RecordItem
          title="Career check-in"
          description="Jul 10, 2026"
          action={{ type: "open-link", href: "https://example.com/notes" }}
        />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "`DataList.RecordItem` is for entries that are things rather than facts: a title, an optional secondary line, an optional `detail` tag on the right, and any item action.",
      },
    },
  },
}
