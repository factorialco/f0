import { createContext, ReactNode, useContext } from "react"

export const aiTranslations = {
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    startNewChat: "Start new chat",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder: "Ask about time, people, or company info…",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    resourcesGroupTitle: "Resources",
    thinking: "Thinking...",
    exportTable: "Download table",
    generatedTableFilename: "OneGeneratedTable",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        label: "Your feedback helps us make Factorial AI better",
        placeholder: "Share what worked well",
      },
      negative: {
        title: "What could have been better?",
        label: "Your feedback helps us improve future answers",
        placeholder: "Share what didn’t work",
      },
    },
    ask: "Ask One",
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
  translations: AiChatTranslations
}

export function AiChatTranslationsProvider({
  children,
  translations,
}: AiChatTranslationsProviderProps): JSX.Element {
  return (
    <AiChatTranslationsContext.Provider value={translations}>
      {children}
    </AiChatTranslationsContext.Provider>
  )
}

export function useAiChatTranslations(): AiChatTranslations {
  const context = useContext(AiChatTranslationsContext)

  if (context === null) {
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    )
  }

  return context
}
