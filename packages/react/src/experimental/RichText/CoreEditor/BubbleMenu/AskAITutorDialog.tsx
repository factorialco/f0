import { useCallback, useEffect, useRef, useState } from "react"
import {
  useCopilotAction,
  useCopilotChatInternal,
} from "@copilotkit/react-core"
import { randomId } from "@copilotkit/shared"

import { F0AiChat, F0AiChatProvider, useAiChat } from "@/sds/ai/F0AiChat"
import { F0HILActionConfirmation } from "@/sds/ai/F0HILActionConfirmation"
import OneIcon from "@/experimental/AiPromotionChat/OneIcon"
import { cn } from "@/lib/utils"

import type { AiTutorMessage } from "./AskAITutorButton"

export interface AiTutorLabels {
  buttonLabel: string
  buttonTooltip: string
}

export interface AiTutorChatConfig {
  runtimeUrl?: string
  agent?: string
  credentials?: RequestCredentials
  greeting?: string
}

// ---------------------------------------------------------------------------
// Real mode: F0AiChatProvider + F0AiChat in floating mode
// ---------------------------------------------------------------------------

const AiTutorChatInner = ({
  selectedText,
  onClose,
  onGoDeeper,
}: {
  selectedText: string
  onClose: () => void
  onGoDeeper?: (messages: AiTutorMessage[]) => void
}) => {
  const { setOpen, open, sendMessage, inProgress } = useAiChat()
  const { messages } = useCopilotChatInternal()
  const hasSentRef = useRef(false)
  const onGoDeeperRef = useRef(onGoDeeper)
  onGoDeeperRef.current = onGoDeeper
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose
  const messagesRef = useRef(messages)
  messagesRef.current = messages

  const serializeMessages = useCallback((): AiTutorMessage[] => {
    return messagesRef.current
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: "content" in m ? String(m.content) : "",
      }))
      .filter((m) => m.content)
  }, [])

  // Register "go_deeper" CopilotKit action — Mastra emits this via
  // emitFrontendTool and CopilotKit renders the F0HILActionConfirmation
  // inline in the chat messages.
  useCopilotAction({
    name: "go_deeper",
    description:
      "Offer the user the option to explore the topic in more detail in a sidepanel.",
    parameters: [
      {
        name: "prompt",
        type: "string",
        description: "Short text asking if the user wants to go deeper",
        required: false,
      },
    ],
    available: onGoDeeper ? "frontend" : "disabled",
    render: (props) => {
      if (props.status === "inProgress") return <></>
      return (
        <F0HILActionConfirmation
          text={
            (props.args.prompt as string) ??
            "Would you like me to explain this in more detail?"
          }
          confirmationText="Go deeper"
          cancelText="No, thanks"
          onConfirm={() => {
            const serialized = serializeMessages()
            onGoDeeperRef.current?.(serialized)
            onCloseRef.current()
          }}
          onCancel={() => {}}
        />
      )
    },
  })

  useEffect(() => {
    setOpen(true)
  }, [setOpen])

  // When the user closes the One chat (X button), close the floating container too
  useEffect(() => {
    if (!open && hasSentRef.current) {
      onClose()
    }
  }, [open, onClose])

  // Send the selected text as a user message once CopilotKit is ready
  useEffect(() => {
    if (!selectedText || hasSentRef.current || inProgress) return

    const timer = setTimeout(() => {
      const prompt = `<tool-context tool="ai-tutor">Please give a brief, concise explanation (3-4 sentences max) of the following text in simpler terms:</tool-context>${selectedText}`
      sendMessage(prompt)
      hasSentRef.current = true
    }, 500)

    return () => clearTimeout(timer)
  }, [selectedText, sendMessage, inProgress])

  return (
    <div className="flex h-full w-full flex-col [&>div]:h-full [&>div]:w-full [&>div>div]:h-full [&>div>div]:w-full">
      <F0AiChat />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Mock mode: standalone chat UI with simulated responses
// ---------------------------------------------------------------------------

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

function getMockResponse(messages: ChatMessage[]): string {
  const count = messages.filter((m) => m.role === "user").length
  const last = messages.filter((m) => m.role === "user").pop()?.content ?? ""
  const snippet = last.slice(0, 60) + (last.length > 60 ? "..." : "")

  if (count === 1) {
    return `Great question! Let me explain "${snippet}" in simpler terms.\n\nThis refers to a concept that is fundamental to understanding this topic. Think of it as the building blocks that help you grasp the bigger picture.\n\nWould you like me to go deeper into any specific part?`
  }
  if (count === 2) {
    return `Let me dive deeper.\n\nThis concept originates from established methodologies in organizational development. At its core, it defines a structured process where multiple stakeholders participate in evaluation cycles, reducing individual bias by aggregating diverse perspectives.\n\nFeel free to ask more!`
  }
  return `Here's another perspective.\n\nResearch shows that understanding this concept requires connecting it to real-world applications. The most effective approach is to practice applying these concepts incrementally.\n\nAnything else you'd like to explore?`
}

const MockAiTutorChat = ({
  selectedText,
  greeting,
  onGoDeeper,
}: {
  selectedText: string
  greeting?: string
  onGoDeeper?: (messages: AiTutorMessage[]) => void
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })

  useEffect(scrollToBottom, [messages])

  useEffect(() => {
    if (selectedText) {
      const userMsg: ChatMessage = { role: "user", content: selectedText }
      setMessages([userMsg])
      setIsLoading(true)
      const t = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: getMockResponse([userMsg]) },
        ])
        setIsLoading(false)
      }, 800)
      return () => clearTimeout(t)
    }
  }, [selectedText])

  const handleSend = useCallback(() => {
    const text = input.trim()
    if (!text || isLoading) return
    const userMsg: ChatMessage = { role: "user", content: text }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput("")
    setIsLoading(true)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: getMockResponse(next) },
      ])
      setIsLoading(false)
    }, 800)
  }, [input, isLoading, messages])

  const handleGoDeeper = useCallback(() => {
    onGoDeeper?.(messages)
  }, [messages, onGoDeeper])

  // Show "Go deeper" after first assistant response
  const hasAssistantResponse =
    messages.filter((m) => m.role === "assistant").length > 0
  const showGoDeeper = onGoDeeper && hasAssistantResponse && !isLoading

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const greetingText =
    greeting ??
    "Hello! I'm your AI tutor. I'll help you understand the text you selected."

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-special-page shadow-xl">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex-shrink-0 pt-0.5">
            <OneIcon size="sm" />
          </div>
          <div className="max-w-[85%] whitespace-pre-wrap text-sm leading-relaxed text-f1-foreground">
            {greetingText}
          </div>
        </div>

        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              "mb-4 flex",
              msg.role === "user" ? "justify-end" : "items-start gap-3"
            )}
          >
            {msg.role === "assistant" && (
              <div className="flex-shrink-0 pt-0.5">
                <OneIcon size="sm" />
              </div>
            )}
            <div
              className={cn(
                "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed",
                msg.role === "user"
                  ? "bg-f1-background-tertiary text-f1-foreground"
                  : "text-f1-foreground"
              )}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="mb-4 flex items-start gap-3">
            <div className="flex-shrink-0 pt-0.5">
              <OneIcon size="sm" spin />
            </div>
            <div className="py-3 text-sm text-f1-foreground-secondary">
              Thinking...
            </div>
          </div>
        )}

        {/* Go deeper action — inline in the messages area */}
        {showGoDeeper && (
          <div className="mb-4">
            <F0HILActionConfirmation
              text="Would you like me to explain this in more detail?"
              confirmationText="Go deeper"
              cancelText="No, thanks"
              onConfirm={handleGoDeeper}
              onCancel={() => {
                // Do nothing — user stays in floating chat
              }}
            />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-solid border-f1-border px-4 py-3">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a follow-up question..."
            rows={1}
            className="flex-1 resize-none rounded-xl border border-solid border-f1-border bg-f1-background px-4 py-2.5 text-sm text-f1-foreground placeholder-f1-foreground-tertiary outline-none transition-colors focus:border-f1-border-bold"
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-f1-background-accent-bold text-white transition-opacity disabled:opacity-40"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 1.5L7 9M14.5 1.5L10 14.5L7 9M14.5 1.5L1.5 6L7 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Public component: picks real or mock, positioned as floating widget
// ---------------------------------------------------------------------------

interface AskAITutorChatProps {
  isOpen: boolean
  selectedText: string
  chatConfig?: AiTutorChatConfig
  onClose?: () => void
  onGoDeeper?: (messages: AiTutorMessage[]) => void
  position?: { top: number; left: number } | null
}

export const AskAITutorChat = ({
  isOpen,
  selectedText,
  chatConfig,
  onClose,
  onGoDeeper,
  position,
}: AskAITutorChatProps) => {
  if (!isOpen) return null

  const handleClose = onClose ?? (() => {})

  const positionStyle: React.CSSProperties = position
    ? { top: position.top, left: position.left }
    : { bottom: 16, right: 16 }

  // Real mode: use F0AiChat with native floating visualization mode
  if (chatConfig?.runtimeUrl) {
    return (
      <div
        className="absolute z-[9999] h-[460px] w-[360px]"
        style={positionStyle}
      >
        <F0AiChatProvider
          enabled
          runtimeUrl={chatConfig.runtimeUrl}
          agent={chatConfig.agent}
          credentials={chatConfig.credentials}
          greeting={
            chatConfig.greeting ??
            "Hello! I'm your AI tutor. I'll help you understand the text you selected."
          }
          defaultVisualizationMode="floating"
          lockVisualizationMode
        >
          <AiTutorChatInner
            selectedText={selectedText}
            onClose={handleClose}
            onGoDeeper={onGoDeeper}
          />
        </F0AiChatProvider>
      </div>
    )
  }

  // Mock mode: standalone chat UI
  return (
    <div
      className="absolute z-[9999] h-[460px] w-[360px]"
      style={positionStyle}
    >
      <MockAiTutorChat
        selectedText={selectedText}
        greeting={chatConfig?.greeting}
        onGoDeeper={onGoDeeper}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// MessageInjector: seeds a F0AiChatProvider with previous messages on mount
// Used by consumers (e.g. trainings) to restore conversation in sidepanel
// ---------------------------------------------------------------------------

export const AiTutorMessageInjector = ({
  messages,
}: {
  messages: AiTutorMessage[]
}) => {
  const { setMessages, sendMessage } = useCopilotChatInternal()
  const { setOpen } = useAiChat()
  const injectedRef = useRef(false)

  useEffect(() => {
    if (!injectedRef.current && messages.length > 0) {
      setMessages(
        messages.map((m) => ({
          id: randomId(),
          role: m.role,
          content: m.content,
        }))
      )
      setOpen(true)
      injectedRef.current = true

      // After injecting history, send a follow-up message to trigger a deeper explanation
      setTimeout(() => {
        sendMessage({
          id: randomId(),
          role: "user",
          content:
            "Please go deeper into this topic. Provide a detailed explanation with examples, and include helpful resources like articles, videos, or documentation links.",
        })
      }, 500)
    }
  }, [messages, setMessages, setOpen, sendMessage])

  return null
}
