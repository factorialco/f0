import type { Meta, StoryObj } from "@storybook/react-vite"

import { Dashboard, type Widget } from "../"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0GridStackRef } from "@/components/Utilities/F0GridStack"
import { PageLayout } from "@/layouts/page/PageLayout"
import { Optional } from "@/lib/typescript-utils/opional"
import { useRef, useState } from "react"

const availableSizes = [
  { w: 1, h: 1 },
  { w: 2, h: 1 },
  { w: 2, h: 2 },
]

const DemoWidget = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <div>Count: {count}</div>
    </div>
  )
}

const meta = {
  title: "Dashboard",
  component: Dashboard,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story, { args }) => {
      const ref = useRef<F0GridStackRef>(null)

      const [widgets, setWidgets] = useState<Optional<Widget, "x" | "y">[]>(
        args.widgets
      )

      const handleAddWidget = () => {
        setWidgets((prev) => [
          ...prev,
          {
            id: `widget-${Math.random()}`,
            w: 1,
            h: 1,
            content: <DemoWidget />,
            title: `Widget ${Math.random()}`,
            x: 0,
            y: 0,
            availableSizes,
          },
        ])
      }

      const [editMode, setEditMode] = useState(false)

      return (
        <>
          <PageLayout
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
                <F0Button label="Add widget" onClick={handleAddWidget} />
                <pre>{JSON.stringify(widgets, null, 2)}</pre>
              </>
            }
          >
            <Story
              args={{
                ...args,
                widgets,
                onChange: (updatedWidgets) => {
                  console.log("widgets onChange stories", updatedWidgets)
                  setWidgets(updatedWidgets)
                },
                ref: ref,
                editMode: editMode,
              }}
            />
          </PageLayout>
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
        content: <div>Widget 1</div>,
        title: "Widget 1",
        availableSizes,
      },
    ],
  },
}
