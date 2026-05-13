import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0AiFullscreenChatComponent } from "../F0AiFullscreenChat"

vi.mock("@copilotkit/react-core", () => ({
  useCopilotChatInternal: () => ({ stopGeneration: vi.fn() }),
}))

vi.mock("../actions", () => ({
  useRegisteredActions: vi.fn(),
}))

vi.mock("../components/input/ChatTextarea", () => ({
  ChatTextarea: () => <textarea aria-label="chat input" />,
}))

vi.mock("../components/layout/CanvasPanel", () => ({
  CanvasPanel: () => <div>Canvas panel</div>,
}))

vi.mock("../components/messages/MessagesContainer", () => ({
  MessagesContainer: () => <div>Messages</div>,
}))

vi.mock("../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    enabled: true,
    canvasContent: { type: "dynamicCanvas", title: "Org chart" },
    visualizationMode: "canvas",
    sendMessage: vi.fn(),
    inProgress: false,
    creditWarning: undefined,
  }),
}))

describe("F0AiFullscreenChatComponent", () => {
  it("opens canvas content in a desktop side panel while keeping a tall mobile fallback", () => {
    render(<F0AiFullscreenChatComponent />)

    const canvasPanel = screen.getByText("Canvas panel")
    expect(canvasPanel.parentElement).toHaveClass("md:w-[min(72vw,1280px)]")
    expect(canvasPanel.parentElement).toHaveClass("md:h-full")
    expect(canvasPanel.parentElement).toHaveClass("h-[min(65vh,720px)]")
  })
})
