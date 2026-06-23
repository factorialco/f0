import { Meta, StoryObj } from "@storybook/react-vite"
import { useRef } from "react"

import { cn } from "@/lib/utils"

import { Cell, mockItem } from "../../../__stories__/shared"

/**
 * Replicates OneTable's TableCell mechanics: the content wrapper is
 * `pointer-events-none` and a stretched link (`pointer-events-auto`) captures
 * the row-navigation click, which the wrapper forwards via `onClick`. The chart
 * segments re-enable pointer events so the tooltip still opens on hover/focus
 * while a click still navigates the row.
 */
function ClickableTableCell({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  return (
    <div className={cn("relative", className)}>
      <div
        className="pointer-events-none relative z-[1]"
        onClick={() => linkRef.current?.click()}
      >
        {children}
      </div>
      <a
        ref={linkRef}
        href="#row-navigation"
        className="pointer-events-auto absolute inset-0 z-0 block"
        aria-label="Open row"
      />
    </div>
  )
}

const TEAM_ROWS = [
  {
    team: "Engineering",
    dataPoints: [
      { name: "Office", value: 15 },
      { name: "Remote", value: 10 },
      { name: "Hybrid", value: 5 },
    ],
  },
  {
    team: "Design",
    dataPoints: [
      { name: "Office", value: 6 },
      { name: "Remote", value: 12 },
      { name: "Hybrid", value: 2 },
    ],
  },
  {
    team: "Sales",
    dataPoints: [
      { name: "Office", value: 20 },
      { name: "Remote", value: 3 },
      { name: "Hybrid", value: 7 },
    ],
  },
  {
    team: "Customer Support",
    dataPoints: [
      { name: "Office", value: 4 },
      { name: "Remote", value: 9 },
      { name: "Hybrid", value: 9 },
    ],
  },
]

const meta = {
  title: "Value Display/CategoryBarChart",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Horizontal stacked proportional bar chart cell. Displays category distribution as colored segments with a tooltip on hover/focus. Mirrors the standalone CategoryBarChart kit but sized for table cells.\n\n- **Tooltip**: shown by default per segment (color dot + name + value/percentage). Set `hideTooltip: true` on the value to suppress it.\n- **Clickable cells**: inside OneDataCollection the cell sits in a `pointer-events-none` wrapper with a stretched navigation link. The bar segments re-enable pointer events so the tooltip still opens, while a click on the cell navigates the row.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const GenderDistribution: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Gender",
      render: () => ({
        type: "categoryBarChart",
        value: {
          dataPoints: [
            { name: "Female", value: 12 },
            { name: "Male", value: 8 },
            { name: "Non-binary", value: 2 },
          ],
        },
      }),
    },
  },
  parameters: {
    docs: {
      source: {
        code: `// No explicit colors → auto-assigned from the categorical palette by index
{
  type: "categoryBarChart",
  value: {
    dataPoints: [
      { name: "Female", value: 12 },
      { name: "Male", value: 8 },
      { name: "Non-binary", value: 2 },
    ],
  },
}`,
      },
    },
  },
}

export const WorkLocation: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Work location",
      render: () => ({
        type: "categoryBarChart",
        value: {
          dataPoints: [
            { name: "Office", value: 15 },
            { name: "Remote", value: 10 },
            { name: "Hybrid", value: 5 },
          ],
        },
      }),
    },
  },
  parameters: {
    docs: {
      source: {
        code: `{
  type: "categoryBarChart",
  value: {
    dataPoints: [
      { name: "Office", value: 15 },
      { name: "Remote", value: 10 },
      { name: "Hybrid", value: 5 },
    ],
  },
}`,
      },
    },
  },
}

export const InsideClickableTableCell: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Work location",
      render: () => ({
        type: "categoryBarChart",
        value: {
          dataPoints: [
            { name: "Office", value: 15 },
            { name: "Remote", value: 10 },
            { name: "Hybrid", value: 5 },
          ],
        },
      }),
    },
  },
  decorators: [
    (Story) => (
      <ClickableTableCell className="w-72 rounded border border-solid border-f1-border-secondary p-2">
        <Story />
      </ClickableTableCell>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "**Clickable cell**: the cell content sits in a `pointer-events-none` wrapper with a stretched navigation link on top (OneTable's pattern). Because the bar segments set `pointer-events-auto`, the tooltip still opens on hover/focus, while clicking anywhere in the cell navigates the row (here `#row-navigation`). This is what makes the tooltip work inside OneDataCollection rows.",
      },
      source: {
        code: `// OneTable cell wrapper: content is pointer-events-none, a stretched
// <Link> captures the row click. The bar segments use pointer-events-auto
// (see categoryBarChart.tsx), so the tooltip opens AND the click navigates.
<div className="relative">
  <div className="pointer-events-none" onClick={() => linkRef.current?.click()}>
    {/* categoryBarChart cell */}
  </div>
  <a ref={linkRef} href={rowHref} className="pointer-events-auto absolute inset-0" />
</div>`,
      },
    },
  },
}

type DataCollectionArgs = {
  /** When true, wrap each cell in OneTable's clickable mechanics. */
  clickableCells: boolean
}

export const DataCollectionExample: StoryObj<DataCollectionArgs> = {
  args: {
    clickableCells: true,
  },
  argTypes: {
    clickableCells: {
      name: "Clickable cells",
      control: "boolean",
      description:
        "Wrap each cell in OneTable's clickable mechanics (pointer-events-none content + stretched navigation link). When off, the cells are plain (no row navigation), which is how the tooltip behaves outside OneDataCollection.",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "The categoryBarChart cell inside a OneDataCollection-like table. Use the **Clickable cells** control to toggle OneTable's clickable mechanics: when on, hovering/focusing a segment opens the tooltip while clicking the cell navigates the row; when off, the cells are plain. Toggle light/dark in the toolbar to check the tooltip in both themes.",
      },
      source: {
        code: `// Each row renders a categoryBarChart cell. The \`clickableCells\` flag
// toggles OneTable's clickable wrapper (pointer-events + stretched link).
const value = {
  type: "categoryBarChart",
  value: {
    dataPoints: [
      { name: "Office", value: 15 },
      { name: "Remote", value: 10 },
      { name: "Hybrid", value: 5 },
    ],
  },
}`,
      },
    },
  },
  render: ({ clickableCells }) => {
    const wrap = (node: React.ReactNode) =>
      clickableCells ? <ClickableTableCell>{node}</ClickableTableCell> : node
    return (
      <table className="w-full max-w-2xl border-collapse text-sm">
        <thead>
          <tr className="border-0 border-b border-solid border-f1-border-secondary text-left text-f1-foreground-secondary">
            <th className="py-2 pr-4 font-medium">Team</th>
            <th className="py-2 font-medium">Work location</th>
          </tr>
        </thead>
        <tbody>
          {TEAM_ROWS.map((row) => (
            <tr
              key={row.team}
              className="border-0 border-b border-solid border-f1-border-secondary hover:bg-f1-background-hover"
            >
              <td className="py-3 pr-4 align-middle text-f1-foreground">
                {wrap(row.team)}
              </td>
              <td className="w-1/2 py-3 align-middle">
                {wrap(
                  <Cell
                    item={mockItem}
                    property={{
                      label: "Work location",
                      render: () => ({
                        type: "categoryBarChart",
                        value: { dataPoints: row.dataPoints },
                      }),
                    }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  },
}

export const WithCustomColors: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Category",
      render: () => ({
        type: "categoryBarChart",
        value: {
          dataPoints: [
            { name: "A", value: 40, color: "categorical-1" },
            { name: "B", value: 30, color: "categorical-3" },
            { name: "C", value: 20, color: "categorical-5" },
          ],
        },
      }),
    },
  },
  parameters: {
    docs: {
      source: {
        code: `{
  type: "categoryBarChart",
  value: {
    dataPoints: [
      { name: "A", value: 40, color: "categorical-1" },
      { name: "B", value: 30, color: "categorical-3" },
      { name: "C", value: 20, color: "categorical-5" },
    ],
  },
}`,
      },
    },
  },
}

export const HiddenTooltip: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Work location",
      render: () => ({
        type: "categoryBarChart",
        value: {
          hideTooltip: true,
          dataPoints: [
            { name: "Office", value: 15 },
            { name: "Remote", value: 10 },
            { name: "Hybrid", value: 5 },
          ],
        },
      }),
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "**Tooltip flag**: tooltips are on by default. Set `hideTooltip: true` to suppress them — segments still render and stay focusable, but no tooltip opens on hover/focus. Useful when the surrounding UI already explains the values, or to avoid tooltip noise in dense tables.",
      },
      source: {
        code: `{
  type: "categoryBarChart",
  value: {
    hideTooltip: true, // segments render, but no tooltip on hover/focus
    dataPoints: [
      { name: "Office", value: 15 },
      { name: "Remote", value: 10 },
      { name: "Hybrid", value: 5 },
    ],
  },
}`,
      },
    },
  },
}

export const SingleCategory: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Single",
      render: () => ({
        type: "categoryBarChart",
        value: {
          dataPoints: [{ name: "Only one", value: 100 }],
        },
      }),
    },
  },
  parameters: {
    docs: {
      source: {
        code: `{
  type: "categoryBarChart",
  value: {
    dataPoints: [{ name: "Only one", value: 100 }],
  },
}`,
      },
    },
  },
}

export const Empty: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Category",
      render: () => ({
        type: "categoryBarChart",
        value: {
          dataPoints: [],
        },
      }),
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Empty `dataPoints` renders a fallback dash (`–`).",
      },
      source: {
        code: `{
  type: "categoryBarChart",
  value: { dataPoints: [] }, // renders a fallback dash
}`,
      },
    },
  },
}
