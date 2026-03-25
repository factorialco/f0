import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { AssistantMessage } from "../AssistantMessage"

vi.mock("@/lib/providers/i18n", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/providers/i18n")>()

  return {
    ...actual,
    useI18n: () => ({
      ai: {
        thinking: "Thinking...",
      },
    }),
  }
})

vi.mock("../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    tracking: undefined,
  }),
}))

describe("AssistantMessage", () => {
  it("renders the coagent placeholder as the generic thinking state", () => {
    render(
      <AssistantMessage
        isGenerating={true}
        isLoading={true}
        markdownTagRenderers={{}}
        message={{
          id: "placeholder-1",
          role: "assistant",
          content: "",
          name: "coagent-state-render",
        }}
      />
    )

    expect(screen.getByText("Thinking...")).toBeInTheDocument()
  })

  it("shows the thinking action item while an orchestrator preamble is pending", () => {
    render(
      <AssistantMessage
        isGenerating={true}
        isLoading={false}
        markdownTagRenderers={{}}
        message={{
          id: "assistant-1",
          role: "assistant",
          content:
            "Let me check what Factorial can show about course enrollments...",
          toolCalls: [
            {
              id: "tool-1",
              type: "function",
              function: {
                name: "orchestratorThinking",
                arguments: JSON.stringify({
                  message:
                    "Let me check what Factorial can show about course enrollments...",
                }),
              },
            },
          ],
          generativeUI: () => (
            <div>
              Let me check what Factorial can show about course enrollments...
            </div>
          ),
        }}
      />
    )

    expect(
      screen.getByText(
        "Let me check what Factorial can show about course enrollments..."
      )
    ).toBeInTheDocument()
    expect(
      screen.getAllByText(
        "Let me check what Factorial can show about course enrollments..."
      )
    ).toHaveLength(1)
    expect(screen.queryByText("Thinking...")).not.toBeInTheDocument()
  })

  it("hides the thinking subcomponent once the final visible answer is rendered", () => {
    render(
      <AssistantMessage
        isGenerating={false}
        isLoading={false}
        markdownTagRenderers={{}}
        message={{
          id: "assistant-2",
          role: "assistant",
          content: "There are 4 active courses available",
          toolCalls: [
            {
              id: "tool-1",
              type: "function",
              function: {
                name: "orchestratorThinking",
                arguments: JSON.stringify({
                  message:
                    "Checking which training courses are available right now...",
                }),
              },
            },
          ],
          generativeUI: () => (
            <div>
              Checking which training courses are available right now...
            </div>
          ),
        }}
      />
    )

    expect(
      screen.getByText("There are 4 active courses available")
    ).toBeInTheDocument()
    expect(
      screen.queryByText(
        "Checking which training courses are available right now..."
      )
    ).not.toBeInTheDocument()
  })
})
