import type { Meta, StoryObj } from "@storybook/react-vite"

import { Dashboard, DashboardWidget } from "../"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { Delete } from "@/icons/app"
import { Layout } from "@/layouts/Layout"
import { withSkipA11y } from "@/lib/storybook-utils/parameters"
import { Optional } from "@/lib/typescript-utils/optional"
import { useEffect, useState } from "react"
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
      const [widgets, setWidgets] = useState<Optional<DashboardWidget, "x" | "y">[]>(
        args.widgets as DashboardWidget[]
      )

      const [globalCounter, setGlobalCounter] = useState<number>(0)

      const deleteWidget = (widgetId: string) => {
        setWidgets((prev) => prev.filter((widget) => widget.id !== widgetId))
      }

      const getCommonActions = (id: string) => [
        {
          id: "action-1",
          label: "Delete",
          critical: true,
          icon: Delete,
          onClick: () => {
            deleteWidget(id)
          },
        },
      ]

      const createWidgetContent = (type: "text" | "chart" | "table" | "kpi", counter: number) => {
        return {
          text: <TextWidget globalCounter={counter} />,
          chart: <ChartWidget />,
          table: <TableWidget />,
          kpi: <KpiWidget />,
        }[type]
      }

      const handleAddWidget = (type: "text" | "chart" | "table" | "kpi") => {
        const id = `widget-${Math.random()}`

        const availableSizes = {
          text: [
            { w: 1, h: 1 },
            { w: 2, h: 1 },
            { w: 2, h: 2 },
          ],
          chart: [
            { w: 1, h: 1 },
            { w: 2, h: 1 },
            { w: 2, h: 2 },
          ],
          table: [
            { w: 4, h: 2 },
            { w: 3, h: 2 },
            { w: 2, h: 1 },
          ],
          kpi: [
            { w: 1, h: 1 },
            { w: 2, h: 1 },
            { w: 2, h: 2 },
          ],
        }[type]

        // For text widgets, use deps and content as function pattern
        // For other widgets, use static content
        const isTextWidget = type === "text"
        const widgetConfig = isTextWidget
          ? {
              deps: ["globalCounter"], // Key into deps object
              content: (deps: Record<string, unknown>) => {
                return createWidgetContent("text", deps["globalCounter"] as number)
              },
            }
          : {
              content: createWidgetContent(type, globalCounter),
            }

        setWidgets((prev) => [
          ...prev,
          {
            id,
            w: 1,
            h: 1,
            ...widgetConfig,
            availableSizes,
            meta: {
              actions: getCommonActions(id),
              title: `Title ${Math.random()}`,
              aiButton: () => {
                console.log("ai button clicked")
              },
              widgetType: type,
            },
          },
        ])
      }

      useEffect(() => {
        console.log("useEffect add widget")
        handleAddWidget("text")
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      const [editMode, setEditMode] = useState(false)

      return (
        <>
          <div className="h-full w-full">
            <Layout.Page
              header={
                <div className="flex items-center gap-2 p-4">
                  <div className="mr-5">
                    <F0Checkbox
                      title="Edit mode"
                      checked={editMode}
                      onCheckedChange={(checked) => {
                        setEditMode(checked)
                      }}
                    />
                  </div>
                  <F0Button
                    label="Increment Global Counter"
                    onClick={() => {
                      setGlobalCounter((prev) => prev + 1)
                    }}
                  />
                  <p>Global counter: {globalCounter}</p>
                </div>
              }
              aside={
                <>
                  <ul className="flex list-none flex-col gap-2 p-4">
                    <li>
                      <F0Button label="Add text widget" onClick={() => handleAddWidget("text")} />
                    </li>
                    <li>
                      <F0Button label="Add chart widget" onClick={() => handleAddWidget("chart")} />
                    </li>
                    <li>
                      <F0Button label="Add table widget" onClick={() => handleAddWidget("table")} />
                    </li>
                    <li>
                      <F0Button label="Add kpi widget" onClick={() => handleAddWidget("kpi")} />
                    </li>
                  </ul>
                </>
              }
            >
              <Story
                args={{
                  ...args,
                  widgets,
                  deps: { globalCounter },
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
  parameters: withSkipA11y({
    layout: "fullscreen",
    docs: {
      description: {
        component: [
          "A dashboard component that is used to display and edit a grid of widgets. It provides a flexible and responsive layout for displaying widgets in a grid.",
          "The dashboard component is a wrapper for the `GroupGrid` component.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
      story: {
        height: "650px",
      },
    },
  }),
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
            This report presents an overview and analysis of employee salaries within the
            organization. It summarizes key findings, including average and median earnings, salary
            distribution across departments, and trends observed over the reporting period. The
            report identifies disparities, highlights areas for improvement, and provides
            recommendations to ensure competitive and equitable compensation practices. The summary
            aims to inform leadership and support strategic decisions regarding salary management
            and workforce planning.
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
