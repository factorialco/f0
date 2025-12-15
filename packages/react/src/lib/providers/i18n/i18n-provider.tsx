"use client"

import { createContext, ReactNode, useContext } from "react"
import { TranslationKey, TranslationsType } from "./i18n-provider-defaults"

export type I18nContextType = TranslationsType & {
  t: (key: TranslationKey, args?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export interface I18nProviderProps {
  children: ReactNode
  translations: TranslationsType
}

const getKey = (key: TranslationKey, object: Record<string, unknown>): string | undefined => {
  const keys = key.split(".")
  let current: unknown = object

  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = (current as Record<string, unknown>)[k]
    } else {
      return undefined
    }
  }

  return typeof current === "string" ? current : undefined
}

export function I18nProvider({ children, translations }: I18nProviderProps): JSX.Element {
  /*
   * Create a function that returns a translation for a given key and replaces the arguments.
   * If the key is not found, it will return undefined.
   * If the key is found, it will return the translation with the arguments replaced.
   */
  const t = (key: TranslationKey, args: Record<string, string | number> = {}) => {
    let translation = getKey(key, translations)
    if (translation === undefined) {
      console.warn(`Translation key ${key} not found`)
      return key
    }

    for (const [key, value] of Object.entries(args)) {
      translation = translation.replace(`{{${key}}}`, value.toString())
    }

    return translation
  }
  return <I18nContext.Provider value={{ ...translations, t }}>{children}</I18nContext.Provider>
}

export function useI18n(): TranslationsType & {
  t: (key: TranslationKey, args?: Record<string, string | number>) => string
} {
  const context = useContext(I18nContext)

  if (context === null) {
    throw new Error("useI18n must be used within an I18nProvider")
  }

  return context
}

export const buildTranslations = (translations: TranslationsType): TranslationsType => {
  return translations
}

// Type helper for creating translation objects that match the expected shape
export type I18nStrings = TranslationsType
export type { TranslationsType }
