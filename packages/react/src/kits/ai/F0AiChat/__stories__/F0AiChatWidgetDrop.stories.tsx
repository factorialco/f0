import type { Meta, StoryObj } from "@storybook/react-vite"

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
  tags: ["!autodocs", "experimental"],
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
}
