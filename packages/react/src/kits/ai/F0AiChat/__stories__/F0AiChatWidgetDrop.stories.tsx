import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fireEvent, waitFor, within } from "storybook/test"

import { useEffect } from "react"

import { F0AnalyticsDashboard } from "@/patterns/F0AnalyticsDashboard"
import {
  dashboardFilters,
  dashboardPresets,
  mixedItems,
} from "@/patterns/F0AnalyticsDashboard/__stories__/mockDataMixed"

import { F0AiChat, F0AiChatProvider, useAiChat } from ".."

import {
  MockAiChatRuntimeProvider,
  MockConnectedChatHeader,
  MockConnectedChatInput,
  MockConnectedMessagesContainer,
} from "./_mock"

/**
 * Side-by-side harness: an editable dashboard on the left, the AI chat docked
 * right — the arrangement the canvas mode produces in the real app, reduced to
 * the two components the interaction spans.
 */
const WidgetDropLayout = () => {
  const { setOpen } = useAiChat()

  useEffect(() => {
    setOpen(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // `min-h-0` on both columns is load-bearing: flex items default to
    // `min-height: auto`, so the tall dashboard would otherwise stretch the row
    // (and with it the chat card) far past the viewport.
    <div className="flex h-full w-full gap-2 overflow-hidden">
      <div className="min-h-0 min-w-0 flex-1 overflow-auto">
        <F0AnalyticsDashboard
          filters={dashboardFilters}
          presets={dashboardPresets}
          items={mixedItems}
          editMode
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

const meta = {
  title: "AI/F0AiChat/Widget drop",
  component: F0AiChat,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs", "experimental", "no-sidebar"],
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
} satisfies Meta<typeof F0AiChat>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Drag a widget into the chat to quote it.
 *
 * Grab a widget by the drag handle that appears to the left of its header on
 * hover, then move the cursor over the chat panel: it swaps to a dashed drop
 * state reading **"Drop here to discuss with One"**. Release, and the widget's
 * title lands in the composer's quote chip, ready for a question.
 *
 * Two things worth watching while dragging over the chat: the dashboard's own
 * drop indicator disappears (releasing there must not also reorder the grid),
 * and leaving the panel without releasing cancels cleanly.
 */
export const DragWidgetToQuote: Story = {
  render: () => <WidgetDropLayout />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const ownerDocument = canvasElement.ownerDocument
    const firstCard = await waitFor(() => {
      const card = canvasElement.querySelector<HTMLElement>("[data-card-id]")
      expect(card).toBeInTheDocument()
      return card!
    })
    const originalFirstCardId = firstCard.dataset.cardId
    const grip = (await canvas.findAllByLabelText("Drag to reorder"))[0]
    const dropZone = await waitFor(() => {
      const element = ownerDocument.querySelector<HTMLElement>(
        "[data-ai-chat-dropzone]"
      )
      expect(element).toBeInTheDocument()
      return element!
    })
    const dropRect = dropZone.getBoundingClientRect()
    const clientX = dropRect.left + dropRect.width / 2
    const clientY = dropRect.top + dropRect.height / 2

    await step(
      "Show the chat invitation when widget dragging starts",
      async () => {
        fireEvent.pointerDown(grip, { button: 0 })
        await waitFor(() =>
          expect(
            canvas.getByText("Drop here to discuss with One")
          ).toBeInTheDocument()
        )
      }
    )

    await step("Drop into chat without reordering the dashboard", async () => {
      fireEvent.pointerMove(ownerDocument, { clientX, clientY })
      fireEvent.pointerUp(dropZone, { clientX, clientY })

      const removeQuote = await canvas.findByRole("button", {
        name: "Remove quote",
      })
      await expect(removeQuote.parentElement).toHaveTextContent(
        "Total Headcount"
      )
      await waitFor(() => expect(canvas.getByRole("textbox")).toHaveFocus())
      await expect(
        canvasElement.querySelector<HTMLElement>("[data-card-id]")?.dataset
          .cardId
      ).toBe(originalFirstCardId)
    })
  },
}
