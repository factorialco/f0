import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render } from "@/testing/test-utils"

// Re-export internal Render component for testing. We grab it by importing
// the module and reading its render via a small helper — but since the hook
// registers the render inside `useCopilotAction`, we invoke it directly by
// re-creating the minimum module surface.

vi.mock("@copilotkit/react-core", async () => {
  const actual = await vi.importActual<typeof import("@copilotkit/react-core")>(
    "@copilotkit/react-core"
  )
  return {
    ...actual,
    useCopilotAction: vi.fn(),
    useCopilotChatInternal: () => ({ threadId: "thread-1" }),
    useCopilotContext: () => ({
      copilotApiConfig: {
        chatApiEndpoint: "/copilotkit",
        headers: {},
      },
    }),
  }
})

vi.mock("../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    sendMessage: vi.fn(),
    setClarifyingQuestion: vi.fn(),
  }),
}))

vi.mock("../../../../components/messages/AssistantMessage", () => ({
  useToolCallId: () => "tc-xyz",
}))

// The render function is defined at module scope. We reach into it via a
// wrapper that replicates the production call shape.
import { useCopilotAction } from "@copilotkit/react-core"

import { useClarifyingQuestionAction } from "../useClarifyingQuestionAction"

function getRegisteredRender() {
  // Invoke the hook to capture the args passed to useCopilotAction
  const TestComponent = () => {
    useClarifyingQuestionAction()
    return null
  }
  render(<TestComponent />)
  const calls = (
    useCopilotAction as unknown as { mock: { calls: unknown[][] } }
  ).mock.calls
  const lastCall = calls[calls.length - 1]?.[0] as
    | {
        render: (props: {
          args: Record<string, unknown>
          status: string
        }) => unknown
      }
    | undefined
  return lastCall?.render
}

describe("useClarifyingQuestionAction.render", () => {
  it("renders nothing when args.isResolved === true", () => {
    const Render = getRegisteredRender()
    expect(Render).toBeDefined()
    const { container } = render(
      <>
        {Render!({ args: { isResolved: true, steps: [] }, status: "complete" })}
      </>
    )
    expect(container.innerHTML).toBe("")
  })

  it("renders nothing when there are no steps", () => {
    const Render = getRegisteredRender()
    const { container } = render(
      <>{Render!({ args: { steps: [] }, status: "complete" })}</>
    )
    expect(container.innerHTML).toBe("")
  })
})
