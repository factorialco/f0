import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { OneCalendar } from "@/experimental/OneCalendar"
import { getMockValue } from "@/mocks"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0GridStack } from "../F0GridStack"

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
    nodes: {
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
            // The React element to render in the node
            render?: React.ReactNode;
          }`,
        },
      },
    },
    onChange: {
      description: "the callback function to when the layout changes",
    },
  },
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
    nodes: Array.from({ length: 10 }, (_, index) => ({
      id: `node-${index}`,
      w: 2,
      h: 2,
      render: (
        <div className="h-full rounded-md bg-f1-background-secondary p-4">
          {getMockValue(mockComponents, index)}
        </div>
      ),
    })),
  },
}
