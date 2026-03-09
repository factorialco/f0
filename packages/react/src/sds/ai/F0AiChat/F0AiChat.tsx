import {
  CopilotKit,
  CopilotKitProps,
  useCopilotChatInternal,
  useCopilotContext,
} from "@copilotkit/react-core"
import { CopilotSidebar, InputProps } from "@copilotkit/react-ui"
import { randomId } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef } from "react"

import { OneEllipsis } from "@/components/OneEllipsis"
import { experimentalComponent } from "@/lib/experimental"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"

import { AssistantMessage } from "./components/AssistantMessage"
import { ChatHeader } from "./components/ChatHeader"
import { ChatTextarea } from "./components/ChatTextarea"
import { SidebarWindow } from "./components/ChatWindow"
import { MessagesContainer } from "./components/MessagesContainer"
import { UserMessage } from "./components/UserMessage"
import { WelcomeScreenSuggestion } from "./components/WelcomeScreen"
import { useDefaultCopilotActions } from "./copilotActions"
import { F0AiFullscreenChatComponent } from "./F0AiFullscreenChat"
import { AiChatStateProvider, useAiChat } from "./providers/AiChatStateProvider"
import { AiChatProviderProps } from "./types"

const F0AiChatProviderComponent = ({
  enabled = false,
  greeting,
  initialMessage,
  welcomeScreenSuggestions,
  disclaimer,
  resizable = false,
  defaultVisualizationMode,
  lockVisualizationMode,
  footer,
  entityResolvers,
  toolHints,
  onThumbsUp,
  onThumbsDown,
  children,
  agent,
  tracking,
  ...copilotKitProps
}: AiChatProviderProps) => {
  return (
    <AiChatStateProvider
      enabled={enabled}
      greeting={greeting}
      initialMessage={initialMessage}
      onThumbsUp={onThumbsUp}
      onThumbsDown={onThumbsDown}
      agent={agent}
      welcomeScreenSuggestions={welcomeScreenSuggestions}
      disclaimer={disclaimer}
      resizable={resizable}
      defaultVisualizationMode={defaultVisualizationMode}
      lockVisualizationMode={lockVisualizationMode}
      footer={footer}
      tracking={tracking}
      entityResolvers={entityResolvers}
      toolHints={toolHints}
    >
      <AiChatKitWrapper {...copilotKitProps}>{children}</AiChatKitWrapper>
    </AiChatStateProvider>
  )
}

const AiChatKitWrapper = ({
  children,
  ...copilotKitProps
}: Omit<CopilotKitProps, "agent">) => {
  const { agent } = useAiChat()

  return (
    <CopilotKit runtimeUrl="/copilotkit" agent={agent} {...copilotKitProps}>
      <ResetFunctionInjector />
      <SendMessageFunctionInjector />
      <LoadThreadFunctionInjector />
      {children}
    </CopilotKit>
  )
}

const ResetFunctionInjector = () => {
  const { setClearFunction } = useAiChat()
  const { reset } = useCopilotChatInternal()
  const { setThreadId } = useCopilotContext()

  useEffect(() => {
    const resetWithNewThread = () => {
      reset()
      setThreadId(randomId())
    }
    setClearFunction(resetWithNewThread)
    return () => {
      setClearFunction(null)
    }
  }, [setClearFunction, reset, setThreadId])

  return null
}

const SendMessageFunctionInjector = () => {
  const { setSendMessageFunction } = useAiChat()
  const { sendMessage } = useCopilotChatInternal()

  useEffect(() => {
    if (sendMessage) {
      setSendMessageFunction(sendMessage)
    }
    return () => {
      setSendMessageFunction(null)
    }
  }, [setSendMessageFunction, sendMessage])

  return null
}

/**
 * Shape of a part inside MastraMessageContentV2.
 * Only the fields we need for conversion are typed here.
 */
type MastraPart =
  | { type: "text"; text: string }
  | {
      type: "tool-invocation"
      toolInvocation: {
        state: "partial-call" | "call" | "result"
        toolCallId: string
        toolName: string
        args: unknown
        result?: unknown
        step?: number
      }
    }
  | { type: string }

/** Raw message shape returned by the backend messages endpoint. */
type MastraRawMessage = {
  id: string
  role: "user" | "assistant" | "system"
  content: {
    format?: number
    parts?: MastraPart[]
    content?: string
    toolInvocations?: Array<{
      state: string
      toolCallId: string
      toolName: string
      args: unknown
      result?: unknown
    }>
  }
}

type AguiMessage =
  | { id: string; role: "user"; content: string }
  | { id: string; role: "system"; content: string }
  | {
      id: string
      role: "assistant"
      content: string
      toolCalls?: Array<{
        id: string
        type: "function"
        function: { name: string; arguments: string }
      }>
    }
  | {
      id: string
      role: "tool"
      toolCallId: string
      content: string
      toolName?: string
    }

/**
 * Convert raw Mastra messages (MastraDBMessage format with ContentV2)
 * into CopilotKit AG-UI messages that setMessages() understands.
 *
 * Parts are iterated in order so that the visual sequence from the
 * original streaming session is reproduced.  Tool-invocation parts that
 * appeared before the text part produce an assistant+tool message group
 * before the text message, and vice-versa.
 */
function convertMastraToAgui(raw: MastraRawMessage[]): AguiMessage[] {
  const result: AguiMessage[] = []
  let seqId = 0
  const nextId = (base: string) => `${base}-${seqId++}`

  for (const msg of raw) {
    const parts: MastraPart[] = msg.content?.parts ?? []

    // Extract text from parts, falling back to legacy content string
    const textContent =
      parts
        .filter(
          (p): p is Extract<MastraPart, { type: "text" }> => p.type === "text"
        )
        .map((p) => p.text)
        .join("") ||
      (typeof msg.content?.content === "string" ? msg.content.content : "")

    if (msg.role === "user") {
      result.push({ id: msg.id, role: "user", content: textContent })
      continue
    }

    if (msg.role === "system") {
      result.push({ id: msg.id, role: "system", content: textContent })
      continue
    }

    // --- Assistant message ---

    // Also check legacy toolInvocations field
    const legacyToolInvocations = msg.content?.toolInvocations ?? []

    // If there are no tool invocations at all (neither in parts nor legacy),
    // emit a simple text message.
    const hasToolParts = parts.some((p) => p.type === "tool-invocation")
    if (!hasToolParts && legacyToolInvocations.length === 0) {
      result.push({ id: msg.id, role: "assistant", content: textContent })
      continue
    }

    // Walk parts in order and produce separate messages for each segment
    // so the visual order from the original streaming session is preserved.
    // A "segment" is either a group of consecutive tool-invocation parts
    // or a text part.
    type ToolInv = Extract<
      MastraPart,
      { type: "tool-invocation" }
    >["toolInvocation"]
    let pendingTools: ToolInv[] = []
    let textEmitted = false

    const flushTools = () => {
      if (pendingTools.length === 0) return

      const toolCalls = pendingTools.map((inv) => ({
        id: inv.toolCallId,
        type: "function" as const,
        function: {
          name: inv.toolName,
          arguments:
            typeof inv.args === "string"
              ? inv.args
              : JSON.stringify(inv.args ?? {}),
        },
      }))

      result.push({
        id: nextId(msg.id),
        role: "assistant",
        content: "",
        toolCalls,
      })

      // Separate tool result messages for completed invocations
      for (const inv of pendingTools) {
        if (inv.state === "result" && inv.result !== undefined) {
          result.push({
            id: `result-${inv.toolCallId}`,
            role: "tool",
            toolCallId: inv.toolCallId,
            content:
              typeof inv.result === "string"
                ? inv.result
                : JSON.stringify(inv.result),
            toolName: inv.toolName,
          })
        }
      }

      pendingTools = []
    }

    const flushText = () => {
      if (textEmitted) return
      textEmitted = true
      if (!textContent) return
      result.push({
        id: nextId(msg.id),
        role: "assistant",
        content: textContent,
      })
    }

    for (const part of parts) {
      if (part.type === "tool-invocation" && "toolInvocation" in part) {
        pendingTools.push(
          (part as Extract<MastraPart, { type: "tool-invocation" }>)
            .toolInvocation
        )
      } else if (part.type === "text") {
        // Flush any tools accumulated before this text part
        flushTools()
        flushText()
      }
    }

    // Flush remaining tools that appeared after the text
    flushTools()

    // If text was never emitted (no text part in parts array), emit it now
    // so the content is not lost.
    if (!textEmitted && textContent) {
      result.push({
        id: nextId(msg.id),
        role: "assistant",
        content: textContent,
      })
    }

    // Handle legacy toolInvocations (old format without parts ordering)
    if (legacyToolInvocations.length > 0) {
      const legacyToolCalls = legacyToolInvocations.map((inv) => ({
        id: inv.toolCallId,
        type: "function" as const,
        function: {
          name: inv.toolName,
          arguments:
            typeof inv.args === "string"
              ? inv.args
              : JSON.stringify(inv.args ?? {}),
        },
      }))

      result.push({
        id: nextId(msg.id),
        role: "assistant",
        content: "",
        toolCalls: legacyToolCalls,
      })

      for (const inv of legacyToolInvocations) {
        if (inv.state === "result" && inv.result !== undefined) {
          result.push({
            id: `result-${inv.toolCallId}`,
            role: "tool",
            toolCallId: inv.toolCallId,
            content:
              typeof inv.result === "string"
                ? inv.result
                : JSON.stringify(inv.result),
            toolName: inv.toolName,
          })
        }
      }
    }
  }

  return result
}

const LoadThreadFunctionInjector = () => {
  const { setLoadThreadFunction } = useAiChat()
  const { reset, setMessages } = useCopilotChatInternal()
  const { setThreadId, copilotApiConfig } = useCopilotContext()

  useEffect(() => {
    const loadThread = async (threadId: string) => {
      const baseUrl = copilotApiConfig.chatApiEndpoint

      // Fetch full messages (including tool invocations) from the backend
      let rawMessages: MastraRawMessage[] = []
      try {
        const response = await fetch(
          `${baseUrl}/chat-history/threads/${encodeURIComponent(threadId)}/messages`,
          {
            credentials: "include",
            headers: { ...copilotApiConfig.headers },
          }
        )
        if (response.ok) {
          const data = (await response.json()) as {
            messages: MastraRawMessage[]
          }
          rawMessages = data.messages
        }
      } catch {
        // Silently fail — the chat will just start empty
      }

      // Convert Mastra format to CopilotKit AG-UI format
      const messages = convertMastraToAgui(rawMessages)

      // Switch to the thread
      reset()
      setThreadId(threadId)
      setMessages(messages)

      // Safety net: CopilotKit's loadAgentState effect fires on threadId
      // change and may overwrite messages with []. Re-apply after it settles.
      setTimeout(() => {
        setMessages(messages)
      }, 100)
    }
    setLoadThreadFunction(loadThread)
    return () => {
      setLoadThreadFunction(null)
    }
  }, [setLoadThreadFunction, reset, setThreadId, setMessages, copilotApiConfig])

  return null
}

const ChatInput = (props: InputProps) => {
  const { disclaimer, footer, visualizationMode } = useAiChat()
  const { messages } = useCopilotChatInternal()
  const containerRef = useRef<HTMLDivElement>(null)
  const isWelcomeScreen = messages.length === 0
  const fullscreen = visualizationMode === "fullscreen"
  const fullscreenWelcome = fullscreen && isWelcomeScreen

  useEffect(() => {
    const textarea = containerRef.current?.querySelector("textarea")
    textarea?.focus()
  }, [visualizationMode])

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col items-center gap-2 px-4 pb-4 pt-2",
        fullscreenWelcome && "flex-1"
      )}
    >
      <motion.div
        layout="position"
        className="w-full max-w-[712px]"
        transition={{
          layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
        }}
      >
        <ChatTextarea {...props} />
      </motion.div>
      {disclaimer?.text && (
        <motion.div
          layout="position"
          className="flex w-full max-w-[712px] flex-row items-center justify-center gap-1"
          transition={{
            layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          <OneEllipsis className="text-sm font-medium text-f1-foreground-tertiary">
            {disclaimer.text}
          </OneEllipsis>

          {disclaimer.link && disclaimer.linkText && (
            <Link
              href={disclaimer.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary"
            >
              {disclaimer.linkText}
            </Link>
          )}
        </motion.div>
      )}
      <AnimatePresence>
        {footer && isWelcomeScreen && (
          <motion.div
            key="chat-footer"
            className={cn(
              "w-full py-4 mx-auto max-w-[712px]",
              fullscreenWelcome && "mt-auto",
              fullscreen && "flex justify-center"
            )}
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {footer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const F0AiChatComponent = () => {
  const { enabled, open, setOpen } = useAiChat()

  // Register all default copilot actions
  useDefaultCopilotActions()

  if (!enabled) {
    return null
  }

  return (
    <CopilotSidebar
      className="h-full w-full"
      defaultOpen={open}
      onSetOpen={(isOpen) => {
        setOpen(isOpen)
      }}
      Window={SidebarWindow}
      Header={ChatHeader}
      Messages={MessagesContainer}
      Button={() => {
        return null // hide CopilotKit's default chat button
      }}
      Input={ChatInput}
      UserMessage={UserMessage}
      AssistantMessage={AssistantMessage}
    />
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0AiChat = experimentalComponent("F0AiChat", F0AiChatComponent)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0AiFullscreenChat = experimentalComponent(
  "F0AiFullscreenChat",
  F0AiFullscreenChatComponent
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0AiChatProvider = experimentalComponent(
  "F0AiChatProvider",
  F0AiChatProviderComponent
)

export type { WelcomeScreenSuggestion }
