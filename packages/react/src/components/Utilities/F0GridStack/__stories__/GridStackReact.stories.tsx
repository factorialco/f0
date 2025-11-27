import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0Button } from "@/components/F0Button"
import { F0Widget } from "@/components/F0Widget"
import { DropdownItem } from "@/experimental/Navigation/Dropdown/internal"
import { OneCalendar } from "@/experimental/OneCalendar"
import { Delete, Pencil, Upload } from "@/icons/app"
import { getMockValue } from "@/mocks"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { cloneElement, useCallback, useMemo, useRef, useState } from "react"
import { fn } from "storybook/test"
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
            // The function to render the node
            renderFn?: () => React.ReactElement;
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

const sampleDropdownItems: DropdownItem[] = [
  { label: "Edit", icon: Pencil, onClick: fn() },
  { label: "Export", icon: Upload, onClick: fn() },
  { type: "separator" },
  { label: "Delete", icon: Delete, critical: true, onClick: fn() },
]

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
      handle: ".f0-widget-drag-handle",
    },
    widgets: Array.from({ length: 10 }, (_, index) => ({
      id: `widget-${index}`,
      w: 2,
      h: 2,
      renderFn: () => (
        <F0Widget
          title={`Widget ${index + 1}`}
          draggable
          resizable
          dropdown={sampleDropdownItems}
        >
          {getMockValue(mockComponents, index)}
        </F0Widget>
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
        renderFn: () => (
          <F0Widget
            title={`New Widget ${newId}`}
            draggable
            resizable
            dropdown={sampleDropdownItems}
          >
            <div className="flex h-full items-center justify-center">
              New Widget {newId}
            </div>
          </F0Widget>
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
          renderFn: () => (
            <F0Widget
              key={`node-${index + 1}`}
              title={`Widget ${index + 1}`}
              draggable
              resizable
              dropdown={sampleDropdownItems}
            >
              {cloneElement(getMockValue(mockComponents, index), {
                key: `node-${index + 1}`,
              })}
            </F0Widget>
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
            handle: ".f0-widget-drag-handle",
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
