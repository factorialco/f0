import type { Meta, StoryObj } from "@storybook/react"

import { CategoryBarSection } from "~/packages/react/experimental/Widgets/Content/CategoryBarSection"
import { Widget } from "~/packages/react/experimental/Widgets/Widget"
import { WidgetSection } from "~/packages/react/experimental/Widgets/WidgetSection"

const meta = {
  title: "Insights/Examples/Timesheet",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[380px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Timesheet: Story = {
  render: () => (
    <>
      <h2 className="mb-4">Timesheet example</h2>
      <Widget
        header={{
          title: "Timesheet",
          subtitle: "July",
          link: {
            title: "View timesheet",
            url: "#",
          },
        }}
      >
        <WidgetSection title="Worked / Planned hours">
          <CategoryBarSection
            title="75h"
            subtitle="100h"
            data={[
              {
                name: "Worked",
                value: 75,
              },
              {
                name: "Remaining",
                value: 25,
                color: "#25253D1A",
              },
            ]}
            legend
          />
        </WidgetSection>
        <WidgetSection title="Balance">
          <CategoryBarSection
            title="9h"
            subtitle="50h"
            data={[
              {
                name: "Worked",
                value: 9,
              },
              {
                name: "Remaining",
                value: 41,
                color: "#25253D1A",
              },
            ]}
            legend
          />
        </WidgetSection>
      </Widget>
    </>
  ),
}

export const TimesheetOvertime: Story = {
  render: () => (
    <>
      <h2 className="mb-4">Timesheet Overtime example</h2>
      <Widget
        header={{
          title: "Timesheet",
          subtitle: "July",
          link: {
            title: "View timesheet",
            url: "#",
          },
        }}
      >
        <WidgetSection title="Worked / Planned hours">
          <CategoryBarSection
            title="121h"
            subtitle="100h"
            data={[
              {
                name: "Regular",
                value: 100,
              },
              {
                name: "Overtime",
                value: 21,
                color: "#FF9153",
              },
            ]}
            legend
          />
        </WidgetSection>
        <WidgetSection title="Balance">
          <CategoryBarSection
            title="+9h"
            subtitle="50h"
            data={[
              {
                name: "Regular",
                value: 9,
                color: "#FF9153",
              },
              {
                name: "Overtime",
                value: 41,
                color: "#FF915333",
              },
            ]}
          />
        </WidgetSection>
      </Widget>
    </>
  ),
}
