import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0Button } from "@/components/F0Button"
import { OneCalendar } from "@/experimental/OneCalendar"
import { getMockValue } from "@/mocks"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { cloneElement, useCallback, useMemo, useRef, useState } from "react"
import {
  F0GridStack,
  GridStackReactWidget,
  GridStackWidgetPosition,
  type F0GridStackRef,
} from "../F0GridStack"

const meta = {
  title: "Utilities/GridStack",
  component: F0GridStack,
  tags: ["autodocs", "experimental"],
  parameters: {
    docs: {
      description: {
        component: [
          "This is a react wrapper for the gridstack library",
          "It allows you to create a resizable and draggable grid layout",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    options: {
      table: {
        description:
          "The options for the grid (check the gridstack documentation for more details)",
        type: {
          summary: "GridStackReactOptions",
          detail: `type GridStackReactOptions = {
            // Number of columns in the grid
            column?: number;
            // Number of rows in the grid
            row?: number;
            columnOpts?: GridStackReactColumnOpts;
            rowOpts?: GridStackReactRowOpts;
            acceptWidgets?: boolean;
            margin?: number;
            draggable?: boolean;
          }`,
        },
      },
    },
    widgets: {
      table: {
        type: {
          summary: "GridStackReactNode[]",
          detail: `type GridStackReactNode = {
            // The id of the node
            id: string;
            // The width in columns of the node
            w?: number;
            // The height in rows of the node
            h?: number;
            // The x position in columns of the node
            x?: number;
            // The y position in rows of the node
            y?: number;
            // The allowed sizes of the node
            allowedSizes?: GridStackReactSize[];
            // Whether the node can be resized
            allowResize?: boolean;
            // Whether the node can be moved
            allowMove?: boolean;
            // The React element to render
            content?: React.ReactElement;
          }`,
        },
      },
    },
    onChange: {
      description: "the callback function to run when the layout changes.",
    },
  },
  decorators: [
    (Story, { args }) => {
      const [positions, setPositions] = useState<GridStackWidgetPosition[]>([])
      return (
        <div className="h-full w-full">
          <Story
            args={{
              ...args,
              onChange: (layout) => {
                setPositions(layout)
              },
            }}
          />
          <div id="positions">{JSON.stringify(positions, null, 2)}</div>
        </div>
      )
    },
  ],
} satisfies Meta<typeof F0GridStack>

export default meta
type Story = StoryObj<typeof meta>

const mockComponents = [
  <div key="1">
    This is a long text that will be truncated with an ellipsis if it
    doesn&apos;t fit in the container width. Hover over it to see the full text
    in a tooltip.
  </div>,
  <div key="2">
    <F0AvatarAlert type="info" size="sm" />
  </div>,
  <div key="3">
    <OneCalendar mode="single" view="day" />
  </div>,
]

export const Default: Story = {
  args: {
    options: {
      column: 12,
    },
    widgets: Array.from({ length: 10 }, (_, index) => ({
      id: `widget-${index}`,
      w: 2,
      h: 2,
      content: (
        <div className="h-full rounded-md bg-f1-background-secondary p-4">
          {getMockValue(mockComponents, index)}
        </div>
      ),
    })),
  },
}

export const WithRefMethods: Story = {
  args: {
    options: {
      column: 12,
    },
    widgets: [],
  },
  render: () => {
    const gridRef = useRef<F0GridStackRef>(null)
    const [widgetCounter, setWidgetCounter] = useState<number>(10)

    const handleAddWidget = useCallback(() => {
      const newId = `node-${widgetCounter + 1}`
      gridRef.current?.addWidget({
        id: newId,
        w: 2,
        h: 2,
        meta: {
          title: `New Widget ${newId}`,
        },
        content: (
          <div className="h-full rounded-md bg-f1-background-accent p-4">
            New Widget {newId}
          </div>
        ),
      })
      setWidgetCounter(widgetCounter + 1)
    }, [widgetCounter])

    const handleRemoveWidget = () => {
      if (widgetCounter > 0) {
        const idToRemove = `node-${widgetCounter}`
        gridRef.current?.removeWidget(idToRemove)
        setWidgetCounter((prev) => prev - 1)
      }
    }

    const handleRemoveAll = () => {
      gridRef.current?.removeAll()
      setWidgetCounter(0)
    }

    const widgets = useMemo<GridStackReactWidget[]>(
      () =>
        Array.from({ length: 10 }, (_, index) => ({
          id: `node-${index + 1}`,
          w: 2,
          h: 2,
          meta: {
            title: `Widget ${index + 1}`,
          },
          content: (
            <div
              key={`node-${index + 1}`}
              className="h-full rounded-md bg-f1-background-secondary p-4"
            >
              {cloneElement(getMockValue(mockComponents, index), {
                key: `node-${index + 1}`,
              })}
            </div>
          ),
        })),
      []
    )

    const [positions, setPositions] = useState<GridStackWidgetPosition[]>([])

    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <F0Button onClick={handleAddWidget} label="Add Widget" />
          <F0Button onClick={handleRemoveWidget} label="Remove Last Widget" />
          <F0Button onClick={handleRemoveAll} label="Remove All" />
        </div>
        <F0GridStack
          ref={gridRef}
          options={{
            column: 12,
          }}
          onChange={(positions) => {
            console.log("layout", positions)
            setPositions(positions)
          }}
          widgets={widgets}
        />

        <div id="positions">{JSON.stringify(positions, null, 2)}</div>
      </div>
    )
  },
}
