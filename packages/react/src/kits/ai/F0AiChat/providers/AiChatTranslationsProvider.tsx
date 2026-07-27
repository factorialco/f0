import { createContext, useContext } from "react"

import { AiChatTranslations, AiChatTranslationsProviderProps } from "../types"

export type { AiChatTranslations, AiChatTranslationsProviderProps }

const AiChatTranslationsContext = createContext<AiChatTranslations | null>(null)

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
