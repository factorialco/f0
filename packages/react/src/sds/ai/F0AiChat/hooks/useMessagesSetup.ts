import { useCopilotChatInternal as useCopilotChat } from "@copilotkit/react-core"
import { useMemo } from "react"

import { useI18n } from "@/lib/providers/i18n"

import { useAiChat } from "../providers/AiChatStateProvider"
import {
  convertMessagesToTurns,
  makeInitialMessages,
} from "../utils/turnConversions"

/**
 * Shared setup logic used by both the sidebar and fullscreen message
 * containers. Centralises CopilotKit state, i18n, AiChat provider values,
 * and derived data (turns, initial messages, etc.).
 */
export function useMessagesSetup() {
  const { messages, interrupt, isLoading } = useCopilotChat()

  const translations = useI18n()

  const { greeting, initialMessage, welcomeScreenSuggestions } = useAiChat()

  const initialMessages = useMemo(
    () =>
      makeInitialMessages(
        initialMessage || translations.ai.defaultInitialMessage
      ),
    [initialMessage, translations.ai.defaultInitialMessage]
  )

  const showWelcomeBlock =
    messages.length === 0 && (greeting || initialMessages.length > 0)

  const turns = useMemo(() => convertMessagesToTurns(messages), [messages])

  return {
    // CopilotKit state
    messages,
    interrupt,
    isLoading,

    // Translations
    translations,

    // AiChat provider values
    greeting,
    initialMessage,
    welcomeScreenSuggestions,

    // Derived
    initialMessages,
    showWelcomeBlock,
    turns,
  }
}
