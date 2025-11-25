import type { Meta, StoryObj } from "@storybook/react-vite"

import { Dashboard } from "../"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0GridStackRef } from "@/components/Utilities/F0GridStack"
import { PageLayout } from "@/layouts/page/PageLayout"
import { useRef, useState } from "react"

const meta = {
  title: "Dashboard",
  component: Dashboard,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story, { args }) => {
      const ref = useRef<F0GridStackRef>(null)

      const handleAddWidget = () => {
        ref.current?.addWidget({
          id: `widget-${Math.random()}`,
          w: 1,
          h: 1,
          renderFn: () => <div>Widget</div>,
        })
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
              </>
            }
          >
            <Story
              args={{
                ...args,
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
        size: { w: 1, h: 1 },
        content: () => <div>Widget 1</div>,
        title: "Widget 1",
        availableSizes: [
          { w: 1, h: 1 },
          { w: 2, h: 1 },
          { w: 1, h: 2 },
          { w: 2, h: 2 },
        ],
      },
    ],
  },
}
