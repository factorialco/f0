"use client"

import { AiChatTranslationsProvider } from "@/ai/AiChat/providers/AiChatTranslationsProvider"
import { createContext, ReactNode, useContext } from "react"
import { TranslationsType } from "./i18n-provider-defaults"
const I18nContext = createContext<TranslationsType | null>(null)

export interface I18nProviderProps {
  children: ReactNode
  translations: TranslationsType
}

export function I18nProvider({
  children,
  translations,
}: I18nProviderProps): JSX.Element {
  return (
    <I18nContext.Provider value={translations}>
      <AiChatTranslationsProvider translations={translations}>
        {children}
      </AiChatTranslationsProvider>
    </I18nContext.Provider>
  )
}

export function useI18n(): TranslationsType {
  const context = useContext(I18nContext)

  if (context === null) {
    throw new Error("useI18n must be used within an I18nProvider")
  }

  return context
}

export const buildTranslations = (
  translations: TranslationsType
): TranslationsType => {
  return translations
}

// Type helper for creating translation objects that match the expected shape
export type I18nStrings = TranslationsType
export type { TranslationsType }
