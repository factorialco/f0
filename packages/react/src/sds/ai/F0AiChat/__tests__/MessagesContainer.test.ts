import { Message } from "@copilotkit/shared"
import { describe, expect, it } from "vitest"

import {
  convertMessagesToTurns,
  extractThinkingGroup,
} from "../utils/turnUtils"

describe("convertMessagesToTurn", () => {
  it("returns empty array when all messages are non-user (e.g. coagent placeholder)", () => {
    const messages: Message[] = [
      {
        id: "placeholder",
        role: "assistant",
        content: "",
        name: "coagent-state-render",
      },
    ]
    expect(convertMessagesToTurns(messages)).toHaveLength(0)
  })

  it("drops leading non-user messages and groups the rest normally", () => {
    const messages: Message[] = [
      {
        id: "placeholder",
        role: "assistant",
        content: "",
        name: "coagent-state-render",
      },
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "2",
        role: "assistant",
        content: "Hi there!",
      },
    ]
    const turns = convertMessagesToTurns(messages)
    expect(turns).toHaveLength(1)
    expect(turns[0]).toHaveLength(2)
    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user", "assistant"])
  })

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
    // user message + group of thoughts + assistant message
    expect(turns[0]).toHaveLength(3)
    expect(turns[1]).toHaveLength(1)

    // Thinking group is hoisted above text messages
    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user", "array", "assistant"])
    expect(turns[0][1]).toHaveLength(3)

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

    // All thinking messages merged into one group, hoisted above text
    expect(turns[0]).toHaveLength(4)
    expect(turns[1]).toHaveLength(1)

    // Thinking group hoisted to position 1 (right after user message)
    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user", "array", "assistant", "assistant"])
    expect(turns[0][1]).toHaveLength(2)

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

  it("deduplicates consecutive thinking messages with identical content", () => {
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
    expect(thinkingGroup[0].content).toBe("same thought")
    expect(thinkingGroup[1].content).toBe("different thought")
  })

  it("groups thinking messages with empty content but different arguments (real CopilotKit shape)", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      createActionThinkingMessage("Pulling leave types…"),
      createActionThinkingMessage("Fetching approved absences…"),
      createActionThinkingMessage("Calculating absenteeism rate…"),
    ]
    const turns = convertMessagesToTurns(messages)
    expect(turns[0]).toHaveLength(2)

    const thinkingGroup = turns[0][1] as Message[]
    expect(thinkingGroup).toHaveLength(3)
  })

  it("deduplicates action thinking messages with identical arguments", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      createActionThinkingMessage("same step"),
      createActionThinkingMessage("same step"),
      createActionThinkingMessage("different step"),
    ]
    const turns = convertMessagesToTurns(messages)

    const thinkingGroup = turns[0][1] as Message[]
    expect(thinkingGroup).toHaveLength(2)
  })

  it("hoists thinking group above text when thinking arrives after text in multi-run turns", () => {
    // Simulates: Run1 produces text, Run2 produces thinking + text (same turn, no new user message)
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Take a day off tomorrow",
      },
      {
        id: "2",
        role: "assistant",
        content: "I've prepared a time-off request.",
      },
      createActionThinkingMessage("Processing cancellation…"),
      {
        id: "3",
        role: "assistant",
        content: "Your request was cancelled.",
      },
    ]
    const turns = convertMessagesToTurns(messages)
    expect(turns).toHaveLength(1)
    expect(turns[0]).toHaveLength(4)

    // Thinking group hoisted above text messages
    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user", "array", "assistant", "assistant"])
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
})

describe("extractThinkingGroup", () => {
  it("extracts the thinking group from a turn", () => {
    const thinkingMessages: Message[] = [
      createThinkingMessage(),
      createThinkingMessage(),
    ]
    const turn = [
      { id: "1", role: "user" as const, content: "Hello" },
      thinkingMessages,
      { id: "2", role: "assistant" as const, content: "Hi" },
    ]

    const { thinkingGroup, restMessages } = extractThinkingGroup(turn)

    expect(thinkingGroup).toBe(thinkingMessages)
    expect(restMessages).toHaveLength(2)
    expect(restMessages.every((m) => !Array.isArray(m))).toBe(true)
  })

  it("returns null when turn has no thinking group", () => {
    const turn = [
      { id: "1", role: "user" as const, content: "Hello" },
      { id: "2", role: "assistant" as const, content: "Hi" },
    ]

    const { thinkingGroup, restMessages } = extractThinkingGroup(turn)

    expect(thinkingGroup).toBeNull()
    expect(restMessages).toHaveLength(2)
  })

  it("restMessages preserves order of non-array messages", () => {
    const turn = [
      { id: "1", role: "user" as const, content: "Hello" },
      [createThinkingMessage()],
      { id: "2", role: "assistant" as const, content: "First" },
      { id: "3", role: "assistant" as const, content: "Second" },
    ]

    const { restMessages } = extractThinkingGroup(turn)

    expect(restMessages).toHaveLength(3)
    expect((restMessages[0] as Message).content).toBe("Hello")
    expect((restMessages[1] as Message).content).toBe("First")
    expect((restMessages[2] as Message).content).toBe("Second")
  })
})

const createToolCallMessage = (
  name: string | undefined = "toolName"
): Message => {
  return {
    id: crypto.randomUUID(),
    role: "assistant",
    content: "",
    toolCalls: [
      {
        id: crypto.randomUUID(),
        type: "function",
        function: {
          name,
          arguments: "",
        },
      },
    ],
  }
}

const createThinkingMessage = (
  content: string = crypto.randomUUID()
): Message => ({
  id: crypto.randomUUID(),
  role: "assistant",
  content,
  toolCalls: [
    {
      id: crypto.randomUUID(),
      type: "function",
      function: {
        name: "orchestratorThinking",
        arguments: "",
      },
    },
  ],
})

/**
 * Realistic CopilotKit action-execution message shape:
 * content is undefined, preamble text lives in toolCalls arguments.
 */
const createActionThinkingMessage = (preamble: string): Message => ({
  id: crypto.randomUUID(),
  role: "assistant",
  content: undefined as unknown as string,
  toolCalls: [
    {
      id: crypto.randomUUID(),
      type: "function",
      function: {
        name: "orchestratorThinking",
        arguments: JSON.stringify({ message: preamble }),
      },
    },
  ],
})
