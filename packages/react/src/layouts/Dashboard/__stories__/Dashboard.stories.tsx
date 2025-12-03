import type { Meta, StoryObj } from "@storybook/react-vite"

import { Dashboard, DashboardWidget } from "../"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { Layout } from "@/layouts/Layout"
import { Optional } from "@/lib/typescript-utils/opional"
import { useState } from "react"
import { ChartWidget, KpiWidget, TableWidget, TextWidget } from "./mockWidgets"

const availableSizes = [
  { w: 1, h: 1 },
  { w: 2, h: 1 },
  { w: 2, h: 2 },
]

const meta = {
  title: "Dashboard",
  component: Dashboard,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story, { args }) => {
      const [widgets, setWidgets] = useState<
        Optional<DashboardWidget, "x" | "y">[]
      >(args.widgets as DashboardWidget[])

      const handleAddTextWidget = () => {
        setWidgets((prev) => [
          ...prev,
          {
            id: `widget-${Math.random()}`,
            w: 1,
            h: 1,
            content: <TextWidget />,
            meta: {
              title: `Title ${Math.random()}`,
            },
          },
        ])
      }

      const handleAddChartWidget = () => {
        setWidgets((prev) => [
          ...prev,
          {
            id: `widget-${Math.random()}`,
            w: 1,
            h: 1,
            availableSizes: [
              { w: 1, h: 1 },
              { w: 2, h: 1 },
              { w: 2, h: 2 },
            ],
            content: <ChartWidget />,
            meta: {
              title: `Title ${Math.random()}`,
            },
          },
        ])
      }
      const handleAddTableWidget = () => {
        setWidgets((prev) => [
          ...prev,
          {
            id: `widget-${Math.random()}`,
            w: 4,
            h: 2,
            availableSizes: [
              { w: 4, h: 2 },
              { w: 3, h: 2 },
              { w: 2, h: 1 },
            ],
            content: <TableWidget />,
            meta: {
              title: `Table ${Math.random()}`,
            },
          },
        ])
      }
      const handleAddKpiWidget = () => {
        setWidgets((prev) => [
          ...prev,
          {
            id: `widget-${Math.random()}`,
            w: 1,
            h: 1,
            availableSizes: [
              { w: 1, h: 1 },
              { w: 2, h: 1 },
              { w: 2, h: 2 },
            ],
            content: <KpiWidget />,
            meta: {
              title: `KPI ${Math.random()}`,
            },
          },
        ])
      }
      const [editMode, setEditMode] = useState(false)

      return (
        <>
          <div className="p-4">
            <Layout.Page
              header={
                <>
                  <F0Checkbox
                    title="Edit mode"
                    checked={editMode}
                    onCheckedChange={(checked) => {
                      setEditMode(checked)
                    }}
                  />
                </>
              }
              aside={
                <>
                  <ul className="flex list-none flex-col gap-2 p-4">
                    <li>
                      <F0Button
                        label="Add text widget"
                        onClick={handleAddTextWidget}
                      />
                    </li>
                    <li>
                      <F0Button
                        label="Add chart widget"
                        onClick={handleAddChartWidget}
                      />
                    </li>
                    <li>
                      <F0Button
                        label="Add table widget"
                        onClick={handleAddTableWidget}
                      />
                    </li>
                    <li>
                      <F0Button
                        label="Add kpi widget"
                        onClick={handleAddKpiWidget}
                      />
                    </li>
                  </ul>
                </>
              }
            >
              <Story
                args={{
                  ...args,
                  widgets,
                  onChange: (updatedWidgets) => {
                    console.log("widgets onChange stories", updatedWidgets)
                    setWidgets(updatedWidgets as DashboardWidget[])
                  },
                  editMode: editMode,
                }}
              />
            </Layout.Page>

            <pre className="mt-10 overflow-x-auto text-xs"></pre>
          </div>
        </>
      )
    },
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: [
          "A dashboard component that is used to display and edit a grid of widgets. It provides a flexible and responsive layout for displaying widgets in a grid.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
      story: {
        height: "650px",
      },
    },
  },
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    widgets: [
      {
        id: "widget-1",
        w: 1,
        h: 1,
        content: (
          <p>
            This report presents an overview and analysis of employee salaries
            within the organization. It summarizes key findings, including
            average and median earnings, salary distribution across departments,
            and trends observed over the reporting period. The report identifies
            disparities, highlights areas for improvement, and provides
            recommendations to ensure competitive and equitable compensation
            practices. The summary aims to inform leadership and support
            strategic decisions regarding salary management and workforce
            planning.
          </p>
        ),
        meta: {
          title: "Widget 1",
        },
        availableSizes,
      },
    ],
  },
}
