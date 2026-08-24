import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, userEvent, waitFor, within } from "storybook/test"

import { F0AiChat, F0AiChatProvider } from "@/kits/ai/F0AiChat"
import {
  MockAiChatRuntimeProvider,
  MockConnectedChatHeader,
  MockConnectedChatInput,
  MockConnectedMessagesContainer,
} from "@/kits/ai/F0AiChat/__stories__/_mock"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0AnalyticsDashboard } from "../index"
import type { DashboardItem } from "../types"
import { mixedItems } from "./mockDataMixed"

const widget = mixedItems.filter((item) => item.id === "headcount")
const pointWidget = [
  {
    id: "point-headcount",
    title: "Headcount by Department",
    description: "Click the bar to mention this value in chat",
    type: "chart",
    chart: {
      type: "bar",
      tooltipValueFormatter: (value: number) => `${value} people`,
    },
    fetchData: async () => ({
      categories: ["Engineering"],
      series: [{ name: "Headcount", data: [145] }],
    }),
  },
] satisfies DashboardItem[]

const AskOneLayout = ({ items = widget }: { items?: DashboardItem[] }) => {
  return (
    <div className="flex h-full w-full gap-2 overflow-hidden">
      <div className="min-h-0 min-w-0 flex-1 overflow-auto">
        <F0AnalyticsDashboard items={items} />
      </div>
      <div className="flex min-h-0 w-[420px] shrink-0">
        <F0AiChat
          header={<MockConnectedChatHeader />}
          messages={<MockConnectedMessagesContainer />}
          input={<MockConnectedChatInput />}
        />
      </div>
    </div>
  )
}

const openAskOneMenu = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement)
  const trigger = await canvas.findByRole("button", { name: "Other actions" })

  await userEvent.click(trigger)

  const menuId = trigger.getAttribute("aria-controls")
  if (!menuId) throw new Error("The widget menu trigger has no aria-controls")

  const menu = await waitFor(() => {
    const element = canvasElement.ownerDocument.getElementById(menuId)
    expect(element).toBeInTheDocument()
    return element!
  })

  return { canvas, menu: within(menu) }
}

const meta = {
  title: "AnalyticsDashboard/Ask One",
  component: F0AnalyticsDashboard,
  parameters: {
    layout: "fullscreen",
    docs: { story: { autoplay: true, inline: false, height: "720px" } },
  },
  tags: ["experimental", "!autodocs", "no-sidebar"],
  args: { items: widget },
  beforeEach: () => {
    window.localStorage.removeItem("ONE-ai-chat-open")
    window.localStorage.removeItem("ONE-ai-chat-visualization-mode")
  },
  decorators: [
    (Story) => (
      <div className="h-screen w-full overflow-hidden p-2">
        <F0AiChatProvider enabled>
          <MockAiChatRuntimeProvider>
            <Story />
          </MockAiChatRuntimeProvider>
        </F0AiChatProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof F0AnalyticsDashboard>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The widget menu exposes Ask One only when a chat or a host handler can answer
 * it. This story leaves the menu open so the action can be reviewed in context.
 */
export const WidgetMenuAction: Story = {
  render: () => <AskOneLayout />,
  play: async ({ canvasElement, step }) => {
    await step("Open the widget actions menu", async () => {
      const { menu } = await openAskOneMenu(canvasElement)
      await expect(
        await menu.findByRole("menuitem", { name: "Ask One" })
      ).toBeInTheDocument()
    })
  },
}

/**
 * Choosing Ask One copies the widget title into the real chat composer and
 * opens the panel. The completed interaction stays visible for visual review.
 */
export const WidgetQuotedInChat: Story = {
  render: () => <AskOneLayout />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    let menu: ReturnType<typeof within> | undefined

    await step("Open the widget actions menu", async () => {
      menu = (await openAskOneMenu(canvasElement)).menu
    })

    if (!menu) throw new Error("The widget actions menu did not open")

    await step("Ask One about the widget", async () => {
      await userEvent.click(
        await menu.findByRole("menuitem", { name: "Ask One" })
      )
      await waitFor(() =>
        expect(
          menu.queryByRole("menuitem", { name: "Ask One" })
        ).not.toBeInTheDocument()
      )
    })

    await step("Verify the quoted widget in the focused composer", async () => {
      const removeQuote = await canvas.findByRole("button", {
        name: "Remove quote",
      })
      await expect(removeQuote.parentElement).toHaveTextContent(
        "Headcount by Department"
      )
      const textbox = await canvas.findByRole("textbox")
      await waitFor(() => expect(textbox).toHaveFocus())
    })
  },
}

/**
 * Click the Engineering bar, then choose Ask One from the anchored action. The
 * complete category, series, and formatted value appear in the real composer.
 */
export const ChartPointFlow: Story = {
  render: () => <AskOneLayout items={pointWidget} />,
  parameters: {
    docs: {
      description: {
        story:
          "Click the Engineering bar to reveal the anchored Ask One action, or Tab to the chart's Ask One trigger to open the keyboard point menu. Choose the point to review the complete quote in the focused chat composer.",
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Open the keyboard point menu", async () => {
      const trigger = await canvas.findByRole("button", {
        name: "Ask One: Headcount by Department",
      })
      trigger.focus()
      await expect(trigger).toHaveFocus()
      await userEvent.keyboard("{Enter}")
      const menuId = trigger.getAttribute("aria-controls")
      if (!menuId)
        throw new Error("The point menu trigger has no aria-controls")

      const menu = await waitFor(() => {
        const element = canvasElement.ownerDocument.getElementById(menuId)
        expect(element).toBeInTheDocument()
        return within(element!)
      })
      await userEvent.click(
        await menu.findByRole("menuitem", {
          name: "Headcount by Department — Engineering, Headcount: 145 people",
        })
      )
    })

    await step(
      "Verify the formatted point in the focused composer",
      async () => {
        const removeQuote = await canvas.findByRole("button", {
          name: "Remove quote",
        })
        await expect(removeQuote.parentElement).toHaveTextContent(
          "Headcount by Department — Engineering Headcount: 145 people"
        )
        await waitFor(() => expect(canvas.getByRole("textbox")).toHaveFocus())
      }
    )
  },
}

/**
 * The chart-area action switches the chart into polygon drawing mode without
 * opening or sending chat. Draw around one or more bars by hand to complete
 * the flow and attach those exact values to the composer.
 */
export const ChartAreaSelectionMode: Story = {
  tags: ["chart-area-selection"],
  render: () => <AskOneLayout items={pointWidget} />,
  parameters: {
    docs: {
      description: {
        story:
          "Choose Select chart area, then draw around one or more bars. A completed non-empty selection appears as a quote in the focused composer, ready for the user's question.",
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Activate chart-area selection", async () => {
      await userEvent.click(
        await canvas.findByRole("button", { name: "Select chart area" })
      )
      await expect(
        canvas.getByRole("button", { name: "Select chart area" })
      ).toHaveAttribute("aria-pressed", "true")
      await expect(canvas.getByRole("status")).toHaveTextContent(
        "Draw around data, or choose data points. Press Esc to cancel."
      )
    })

    await step("Draw around the bar and attach the exact value", async () => {
      const chartCanvas = canvasElement.querySelector("canvas")
      await expect(chartCanvas).toBeInTheDocument()
      const { left, top, width, height } = chartCanvas!.getBoundingClientRect()
      const point = (x: number, y: number) => {
        const clientX = left + width * x
        const clientY = top + height * y
        return {
          target: chartCanvas!,
          coords: {
            x: clientX,
            y: clientY,
            clientX,
            clientY,
            offsetX: width * x,
            offsetY: height * y,
          },
        }
      }

      await userEvent.pointer([
        { ...point(0.05, 0.05), keys: "[MouseLeft>]" },
        point(0.95, 0.05),
        point(0.95, 0.95),
        point(0.05, 0.95),
        { ...point(0.05, 0.05), keys: "[/MouseLeft]" },
      ])

      await expect(
        await canvas.findByRole("button", { name: "Remove quote" })
      ).toBeInTheDocument()
      await expect(
        canvas.getByText(
          "Headcount by Department — Selected chart area Engineering — Headcount: 145 people"
        )
      ).toBeInTheDocument()
      await waitFor(() => expect(canvas.getByRole("textbox")).toHaveFocus())
      await expect(
        canvas.getByRole("button", { name: "Select chart area" })
      ).toHaveAttribute("aria-pressed", "false")
    })
  },
}

/**
 * Checkbox selection is the keyboard, touch, and single-pointer equivalent of
 * drawing a polygon. It resolves through the same quote contract.
 */
export const ChartAreaSelectionControls: Story = {
  tags: ["chart-area-selection"],
  render: () => <AskOneLayout items={pointWidget} />,
  parameters: withSnapshot({}),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Open the non-drag data-point selector", async () => {
      await userEvent.click(
        await canvas.findByRole("button", { name: "Select chart area" })
      )
      await userEvent.click(
        await canvas.findByRole("button", { name: "Choose data points" })
      )
    })

    await step("Choose one point and attach it to chat", async () => {
      const page = within(canvasElement.ownerDocument.body)
      await userEvent.click(
        await page.findByRole("menuitemcheckbox", {
          name: "Headcount by Department — Engineering, Headcount: 145 people",
        })
      )
      await userEvent.click(
        page.getByRole("menuitem", {
          name: "Use selected data points (1)",
        })
      )

      await expect(
        await canvas.findByRole("button", { name: "Remove quote" })
      ).toBeInTheDocument()
      await expect(
        canvas.getByText(
          "Headcount by Department — Selected chart area Engineering — Headcount: 145 people"
        )
      ).toBeInTheDocument()
      await waitFor(() => expect(canvas.getByRole("textbox")).toHaveFocus())
    })
  },
}
