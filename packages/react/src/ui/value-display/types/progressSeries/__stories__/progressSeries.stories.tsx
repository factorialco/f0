import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/ProgressSeries",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders the `F0ProgressSeries` component inside a data collection: a row of **independent** progress bars, one per period/segment, each with its own target.\n\n- **Overachievement**: past 100% the bar fills fully and splits at `100 / pct` — base colour up to the target, then a lighter shade for the excess (158% → ~63% + ~37%).\n- **Labels**: at most `maxLabels` (default 4) are shown, spread evenly when there are more bars (12 → Jan, Apr, Jul, Oct).\n- **Tooltip**: built automatically as `label · value / max (percentage)`; pass `formatValue` for currencies or units.\n- **Colour** is a generic f0 token per bar (default `categorical-1`); the consumer maps its own domain (e.g. goal status) → token.\n- See the `F0ProgressSeries` docs for the full API and for standalone usage outside a data collection.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Quarterly: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Progress",
      render: () => ({
        type: "progressSeries",
        value: {
          bars: [
            { value: 100, max: 100, label: "Q1" },
            { value: 50, max: 100, label: "Q2" },
            { value: undefined, label: "Q3" },
            { value: undefined, label: "Q4" },
          ],
        },
      }),
    },
  },
}

export const WithStatusColors: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Progress",
      render: () => ({
        type: "progressSeries",
        value: {
          formatValue: (value: number) => `${value.toLocaleString("de-DE")} €`,
          bars: [
            { value: 6800, max: 3400, label: "Q1", color: "feedback-positive" },
            { value: 1700, max: 3400, label: "Q2", color: "feedback-neutral" },
            { value: 500, max: 3400, label: "Q3", color: "feedback-negative" },
            { value: undefined, label: "Q4" },
          ],
        },
      }),
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "The Goals consumer maps each period's status to an f0 colour token and passes `formatValue`, so the tooltip reads `Q2 · 1.700 / 3.400 € (50%)` — no manual tooltip strings needed.",
      },
    },
  },
}

export const Overflow: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Progress",
      render: () => ({
        type: "progressSeries",
        value: {
          bars: [
            { value: 158, max: 100, label: "Q1", color: "feedback-positive" },
            { value: 92, max: 100, label: "Q2", color: "feedback-neutral" },
          ],
        },
      }),
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "When a value exceeds its target the bar **fills completely and splits at `100 / pct`**: the base colour up to the target, then a lighter shade of the same colour for the excess. The caption and tooltip show the real percentage (158 %).",
      },
    },
  },
}

export const Single: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Progress",
      render: () => ({
        type: "progressSeries",
        value: { bars: [{ value: 50, max: 100, label: "2026" }] },
      }),
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "A single bar behaves like the `progressBar` (Progress) value display — one bar, one label.",
      },
    },
  },
}

export const Monthly: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Progress",
      render: () => ({
        type: "progressSeries",
        value: {
          bars: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ].map((label, i) => ({
            value: i < 7 ? 60 : undefined,
            max: 100,
            label,
          })),
        },
      }),
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "12 monthly bars: only 4 labels are shown, evenly spaced (Jan, Apr, Jul, Oct). Bars use a tighter gap and smaller radius to stay legible.",
      },
    },
  },
}

export const Canceled: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Progress",
      render: () => ({
        type: "progressSeries",
        value: {
          bars: [
            { value: 100, max: 100, label: "Q1", color: "feedback-positive" },
            { value: 40, max: 100, canceled: true, label: "Q2" },
            { value: undefined, label: "Q3" },
            { value: undefined, label: "Q4" },
          ],
        },
      }),
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "A `canceled` bar renders as a grey bar with a diagonal hatch, so it reads as void rather than merely empty (compare Q2 with the empty Q3/Q4).",
      },
    },
  },
}

export const HiddenTooltip: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Progress",
      render: () => ({
        type: "progressSeries",
        value: {
          hideTooltip: true,
          bars: [
            { value: 100, max: 100, label: "Q1" },
            { value: 50, max: 100, label: "Q2" },
          ],
        },
      }),
    },
  },
}

export const Loading: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Progress",
      render: () => ({
        type: "progressSeries",
        value: { bars: [], loading: true },
      }),
    },
  },
}
