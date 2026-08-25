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
  parameters: withSnapshot({}),
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
