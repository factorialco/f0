import { Message } from "@copilotkit/shared"
import { randomUUID } from "node:crypto"
import { describe, expect, it } from "vitest"

import { convertMessagesToTurns } from "../components/MessagesContainer"

describe("convertMessagesToTurn", () => {
  it("every user message creates new turn", () => {
    const onlyUserMessages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "2",
        role: "user",
        content: "How are you?",
      },
    ]
    expect(convertMessagesToTurns(onlyUserMessages)).toHaveLength(
      onlyUserMessages.length
    )
  })

  it("includes all assistant messages between two user messages to the first turn", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "4",
        role: "assistant",
        content: "Hi there!",
      },
      {
        id: "2",
        role: "assistant",
        content: "I'm here to help",
      },
      {
        id: "3",
        role: "user",
        content: "How are you?",
      },
    ]
    const turns = convertMessagesToTurns(messages)
    expect(turns[0]).toHaveLength(3)
    expect(turns[1]).toHaveLength(1)

    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user", "assistant", "assistant"])
    expect(
      turns[1].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user"])
  })

  it("groups thinking tool calls into an array", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "4",
        role: "assistant",
        content: "Hi there!",
      },
      createThinkingMessage(),
      createThinkingMessage(),
      createThinkingMessage(),
      {
        id: "3",
        role: "user",
        content: "How are you?",
      },
    ]
    const turns = convertMessagesToTurns(messages)
    // user message + assistant message + group of thoughts
    expect(turns[0]).toHaveLength(3)
    expect(turns[1]).toHaveLength(1)

    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user", "assistant", "array"])
    expect(turns[0][2]).toHaveLength(3)

    expect(
      turns[1].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user"])
  })

  it("merges all thinking tool calls into a single group per turn", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "4",
        role: "assistant",
        content: "Hi there!",
      },
      createThinkingMessage(),
      { id: "5", role: "assistant", content: "What can I do for you?" },
      createThinkingMessage(),
      {
        id: "3",
        role: "user",
        content: "How are you?",
      },
    ]
    const turns = convertMessagesToTurns(messages)

    // All thinking messages merged into one group
    expect(turns[0]).toHaveLength(4)
    expect(turns[1]).toHaveLength(1)

    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user", "assistant", "array", "assistant"])
    expect(turns[0][2]).toHaveLength(2)

    expect(
      turns[1].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user"])
  })

  it("does not group other tool calls", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "4",
        role: "assistant",
        content: "Hi there!",
      },
      createToolCallMessage(),
      createToolCallMessage(),
      createToolCallMessage(),
      {
        id: "3",
        role: "user",
        content: "How are you?",
      },
    ]
    const turns = convertMessagesToTurns(messages)
    expect(turns[0]).toHaveLength(5)
    expect(turns[1]).toHaveLength(1)

    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual([
      "user",
      "assistant",
      "assistant",
      "assistant",
      "assistant",
    ])

    expect(
      turns[1].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user"])
  })

  it("deduplicates consecutive thinking messages with identical tool call args", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      createThinkingMessage("same thought"),
      createThinkingMessage("same thought"),
      createThinkingMessage("same thought"),
      createThinkingMessage("different thought"),
      createThinkingMessage("different thought"),
    ]
    const turns = convertMessagesToTurns(messages)
    expect(turns[0]).toHaveLength(2)

    const thinkingGroup = turns[0][1] as Message[]
    expect(thinkingGroup).toHaveLength(2)
  })

  it("hoists agentState message above thinking tool calls if agentState comes between thinking calls", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "4",
        role: "assistant",
        content: "Hi there!",
      },
      createThinkingMessage(),
      {
        id: "6",
        agentName: "One",
        role: "assistant",
      },
      createThinkingMessage(),
      createThinkingMessage(),
      {
        id: "3",
        role: "user",
        content: "How are you?",
      },
    ]
    const turns = convertMessagesToTurns(messages)
    expect(turns[0]).toHaveLength(4)
    expect(turns[1]).toHaveLength(1)

    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user", "assistant", "assistant", "array"])
    expect(turns[0][3]).toHaveLength(3)

    expect(
      turns[1].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user"])
  })

  it("does not crash when first message is not a user message", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "assistant",
        content: "Stale placeholder",
      },
    ]
    const turns = convertMessagesToTurns(messages)
    expect(turns).toHaveLength(1)
    expect(turns[0]).toHaveLength(1)
  })

  it("treats message with both text content and thinking tool calls as a regular message", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Tell me my salary",
      },
      createThinkingMessage("Looking up salary..."),
      {
        id: "3",
        role: "assistant",
        content: "Your salary is $100,000",
        toolCalls: [
          {
            id: randomUUID(),
            type: "function",
            function: {
              name: "orchestratorThinking",
              arguments: JSON.stringify({ message: "Looking up salary..." }),
            },
          },
        ],
      },
    ]
    const turns = convertMessagesToTurns(messages)
    expect(turns).toHaveLength(1)

    // The message with both content and thinking toolCalls should NOT be in the thinking group
    const turnItems = turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    expect(turnItems).toStrictEqual(["user", "array", "assistant"])
  })
})

const createToolCallMessage = (
  name: string | undefined = "toolName"
): Message => {
  return {
    id: randomUUID(),
    role: "assistant",
    content: "",
    toolCalls: [
      {
        id: randomUUID(),
        type: "function",
        function: {
          name,
          arguments: "",
        },
      },
    ],
  }
}

/**
 * Create a thinking message matching the v1.51+ AG-UI model:
 * content is empty (no text), tool call arguments carry the thinking text.
 */
const createThinkingMessage = (thinkingText?: string): Message => ({
  id: randomUUID(),
  role: "assistant",
  content: "",
  toolCalls: [
    {
      id: randomUUID(),
      type: "function",
      function: {
        name: "orchestratorThinking",
        arguments: JSON.stringify({
          message: thinkingText ?? randomUUID(),
        }),
      },
    },
  ],
})
