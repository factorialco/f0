import { createContext, ReactNode, useContext } from "react"

export const aiTranslations = {
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder: "Ask about time, people, or company info…",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    resourcesGroupTitle: "Resources",
    thumbsUp: "Like",
    thumbsDown: "Dislike",
    thinking: "Thinking...",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        label: "Your feedback helps us make Factorial AI better",
        placeholder: "Share what worked well",
      },
      negative: {
        title: "What could have been better?",
        label: "Your feedback helps us improve future answers",
        placeholder: "Share what didn't work",
      },
    },
  },
}

type TranslationShape<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends Record<string, string | Record<string, unknown>>
      ? TranslationShape<T[K]>
      : never
}

export type AiChatTranslations = TranslationShape<typeof aiTranslations>

const AiChatTranslationsContext = createContext<AiChatTranslations | null>(null)

export interface AiChatTranslationsProviderProps {
  children: ReactNode
  translations?: Partial<AiChatTranslations>
}

export function AiChatTranslationsProvider({
  children,
  translations,
}: AiChatTranslationsProviderProps) {
  const mergedTranslations = translations
    ? { ...aiTranslations, ...translations }
    : aiTranslations

  return (
    <AiChatTranslationsContext.Provider value={mergedTranslations}>
      {children}
    </AiChatTranslationsContext.Provider>
  )
}

export function useAiChatTranslations(): AiChatTranslations {
  const context = useContext(AiChatTranslationsContext)

  // If context exists, use it; otherwise return defaults
  // Note: We don't use i18n.t() here because the ai.* keys don't exist in the default translations
  // The consumer can provide custom translations via AiChatTranslationsProvider if needed
  if (context) {
    return context
  }

  // Return default translations
  return aiTranslations
}
