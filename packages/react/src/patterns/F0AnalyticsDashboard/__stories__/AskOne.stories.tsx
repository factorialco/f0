import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { expect, userEvent, waitFor, within } from "storybook/test"

import { F0AiChat, F0AiChatProvider } from "@/kits/ai/F0AiChat"
import {
  MockAiChatRuntimeProvider,
  MockConnectedChatHeader,
  MockConnectedChatInput,
  MockConnectedMessagesContainer,
} from "@/kits/ai/F0AiChat/__stories__/_mock"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { DashboardItem } from "../types"

import { F0AnalyticsDashboard } from "../index"
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
const areaSelectionItems = [
  ...pointWidget,
  {
    id: "total-headcount",
    title: "Total Headcount",
    type: "metric",
    fetchData: async () => ({ value: 145 }),
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

const TargetObserverLayout = ({
  items = widget,
}: {
  items?: DashboardItem[]
}) => {
  const [observedTarget, setObservedTarget] = useState("No target observed")

  return (
    <div className="flex h-full w-full gap-2 overflow-hidden">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-2 overflow-auto">
        <output className="text-sm" data-ask-one-target>
          {observedTarget}
        </output>
        <F0AnalyticsDashboard
          items={items}
          onAskAiTarget={({ id, point, quote }) => {
            setObservedTarget(
              `${id}: ${point ? `point=${point.category}/${point.value}` : "widget"}; quote=${quote.text}`
            )
          }}
        />
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

const AreaSelectionTargetLayout = () => {
  const [observedTarget, setObservedTarget] = useState("No target observed")

  return (
    <div className="flex h-full w-full gap-2 overflow-hidden">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-2 overflow-auto">
        <output className="text-sm" data-ask-one-target>
          {observedTarget}
        </output>
        <F0AnalyticsDashboard
          items={areaSelectionItems}
          onAskAiTarget={(target) => {
            setObservedTarget(
              target.selection
                ? `${target.id}: ${target.selection.source}, ${target.selection.totalPointCount} selected`
                : `${target.id}: widget`
            )
          }}
        />
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
 * A host can observe the exact built-in Ask One target and quote without
 * replacing F0's chat behavior.
 */
export const TargetObserver: Story = {
  tags: ["ask-one-target-observer"],
  render: () => <TargetObserverLayout />,
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
    })

    await step("Verify the observer and built-in quote", async () => {
      await expect(
        canvas.getByText(/headcount: widget; quote=/)
      ).toHaveTextContent("headcount: widget; quote=Headcount by Department")
      const removeQuote = await canvas.findByRole("button", {
        name: "Remove quote",
      })
      await expect(removeQuote.parentElement).toHaveTextContent(
        "Headcount by Department"
      )
    })
  },
}

/** The point observer receives raw identity while the composer keeps its quote. */
export const PointTargetObserver: Story = {
  tags: ["ask-one-target-observer"],
  render: () => <TargetObserverLayout items={pointWidget} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Choose a chart point with the keyboard action", async () => {
      const trigger = await canvas.findByRole("button", {
        name: "Ask One: Headcount by Department",
      })
      trigger.focus()
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

    await step("Verify raw target and formatted built-in quote", async () => {
      await waitFor(() =>
        expect(
          canvas.getByText(/point-headcount: point=Engineering\/145/)
        ).toHaveTextContent("point-headcount: point=Engineering/145")
      )
      const removeQuote = await canvas.findByRole("button", {
        name: "Remove quote",
      })
      await expect(removeQuote.parentElement).toHaveTextContent(
        "Headcount by Department — Engineering Headcount: 145 people"
      )
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
 * The dashboard area-selection action enables polygon drawing on every
 * compatible chart without opening or sending chat. Draw around one or more
 * bars by hand to attach those exact values to the composer.
 */
export const ChartAreaSelectionMode: Story = {
  tags: ["chart-area-selection"],
  render: () => <AskOneLayout items={areaSelectionItems} />,
  parameters: {
    ...withSnapshot({}),
    docs: {
      description: {
        story:
          "Choose Draw to ask One, then draw around one or more bars. A completed non-empty selection appears as a quote in the focused composer, ready for the user's question.",
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    let compactChartWidth = 0
    let compactChartTop = 0

    const getChartFrame = () =>
      canvas
        .getByText("Headcount by Department", { exact: true })
        .closest<HTMLElement>("[data-dashboard-item-frame]")

    const getChartCanvas = () => getChartFrame()?.querySelector("canvas")

    await step("Activate chart-area selection", async () => {
      await canvas.findByText("Headcount by Department", { exact: true })
      const drawToAskOne = await canvas.findByRole("button", {
        name: "Draw to ask One",
      })
      compactChartTop = getChartFrame()!.getBoundingClientRect().top
      await userEvent.click(drawToAskOne)
      await expect(
        canvas.getByRole("button", { name: "Cancel selection" })
      ).toBeInTheDocument()
      await expect(canvas.getByRole("status")).toHaveTextContent(
        "Draw around data in one chart. Unavailable widgets are dimmed. Press Esc to cancel."
      )
      await expect(
        canvas.getByText("Drawing isn't available for this widget")
      ).toBeInTheDocument()
      await expect(
        canvas.queryByText("Choose data points")
      ).not.toBeInTheDocument()
      await expect(
        canvasElement.querySelector("[data-dashboard-area-selection-status]")
      ).toHaveClass(
        "absolute",
        "left-1/2",
        "rounded-full",
        "pointer-events-none"
      )
      await expect(getChartFrame()!.getBoundingClientRect().top).toBe(
        compactChartTop
      )
    })

    await step("Draw and retain the polygon with its exact value", async () => {
      const chartCanvas = getChartCanvas()
      await expect(chartCanvas).toBeInTheDocument()
      const { left, top, width, height } = chartCanvas!.getBoundingClientRect()
      compactChartWidth = width
      const dispatchMouse = (
        type: "mousedown" | "mousemove" | "mouseup",
        x: number,
        y: number,
        buttons: number
      ) => {
        const clientX = left + width * x
        const clientY = top + height * y
        chartCanvas!.dispatchEvent(
          new MouseEvent(type, {
            bubbles: true,
            cancelable: true,
            button: 0,
            buttons,
            clientX,
            clientY,
          })
        )
      }

      // ECharts listens to its canvas mouse stream. Dispatch that native DOM
      // sequence directly: Storybook's synthetic pointer helper does not
      // generate the compatibility mouse events a real pointer produces.
      dispatchMouse("mousedown", 0.15, 0.15, 1)
      dispatchMouse("mousemove", 0.95, 0.15, 1)
      dispatchMouse("mousemove", 0.95, 0.85, 1)
      dispatchMouse("mousemove", 0.15, 0.85, 1)
      dispatchMouse("mouseup", 0.15, 0.15, 0)

      await expect(
        await canvas.findByRole(
          "button",
          { name: "Remove quote" },
          { timeout: 5000 }
        )
      ).toBeInTheDocument()
      await expect(
        canvas.getByText(
          "Headcount by Department — Selected chart area Engineering — Headcount: 145 people"
        )
      ).toBeInTheDocument()
      await waitFor(() => expect(canvas.getByRole("textbox")).toHaveFocus())
      await expect(
        canvas.getByRole("button", { name: "Draw to ask One" })
      ).toBeInTheDocument()
      await expect(
        within(getChartFrame()!).getByRole("button", {
          name: "Clear selection",
        })
      ).toHaveAttribute("data-dashboard-area-selection-clear")
      await expect(
        canvasElement.querySelector(
          '[data-dashboard-area-selection-mode="selected"]'
        )
      ).toBeInTheDocument()

      await userEvent.click(
        within(getChartFrame()!).getByRole("button", { name: "Expand" })
      )
      await waitFor(() =>
        expect(getChartCanvas()!.getBoundingClientRect().width).toBeGreaterThan(
          compactChartWidth
        )
      )
      await expect(
        canvasElement.querySelector(
          '[data-dashboard-area-selection-mode="selected"]'
        )
      ).toBeInTheDocument()
      await userEvent.click(
        within(getChartFrame()!).getByRole("button", { name: "Collapse" })
      )
      await expect(
        canvas.queryByText("Drawing isn't available for this widget")
      ).not.toBeInTheDocument()
      await waitFor(() =>
        expect(getChartCanvas()!.getBoundingClientRect().width).toBe(
          compactChartWidth
        )
      )
      const compactCanvasRect = getChartCanvas()!.getBoundingClientRect()
      const clearButton = within(getChartFrame()!).getByRole("button", {
        name: "Clear selection",
      })
      await waitFor(() =>
        expect(
          clearButton.closest("[data-dashboard-area-selection-clear-anchor]")
        ).toHaveAttribute(
          "data-dashboard-area-selection-clear-anchor",
          "selection"
        )
      )
      const clearButtonRect = clearButton.getBoundingClientRect()
      await expect(clearButtonRect.left).toBeGreaterThanOrEqual(
        compactCanvasRect.left
      )
      await expect(clearButtonRect.top).toBeGreaterThanOrEqual(
        compactCanvasRect.top
      )
      await expect(clearButtonRect.right).toBeLessThanOrEqual(
        compactCanvasRect.right
      )
      await expect(clearButtonRect.bottom).toBeLessThanOrEqual(
        compactCanvasRect.bottom
      )
    })
  },
}

/**
 * The compact chart control is the non-drag equivalent of polygon selection.
 * It emits the same bounded selection target without replacing built-in chat.
 */
export const ChartAreaSelectionWithoutDrag: Story = {
  tags: ["chart-area-selection"],
  render: () => <AreaSelectionTargetLayout />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Activate dashboard selection", async () => {
      await userEvent.click(
        await canvas.findByRole("button", { name: "Draw to ask One" })
      )
    })

    await step("Select one chart value without dragging", async () => {
      const trigger = await canvas.findByRole("button", {
        name: "Select chart values without drawing: Headcount by Department",
      })
      await userEvent.click(trigger)
      const menuId = trigger.getAttribute("aria-controls")
      if (!menuId)
        throw new Error("The no-drag selection trigger has no aria-controls")
      const menu = await waitFor(() => {
        const element = canvasElement.ownerDocument.getElementById(menuId)
        expect(element).toBeInTheDocument()
        return within(element!)
      })
      await userEvent.click(
        await menu.findByRole("menuitemcheckbox", {
          name: "Headcount by Department — Engineering, Headcount: 145 people",
        })
      )
      await userEvent.click(
        menu.getByRole("menuitem", {
          name: "Ask One about selected values (1)",
        })
      )
    })

    await step(
      "Verify the exact observed target and built-in quote",
      async () => {
        await waitFor(
          () =>
            expect(
              canvas.getByText("point-headcount: control, 1 selected")
            ).toBeInTheDocument(),
          { timeout: 5000 }
        )
        await expect(
          await canvas.findByText(
            "Headcount by Department — Selected chart area Engineering — Headcount: 145 people"
          )
        ).toBeInTheDocument()
        await expect(
          canvas.getByRole("button", { name: "Clear selection" })
        ).toBeInTheDocument()
        await waitFor(() => expect(canvas.getByRole("textbox")).toHaveFocus())
      }
    )
  },
}
