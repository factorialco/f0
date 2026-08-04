"use client"

import { createContext, ReactNode, useContext, useMemo } from "react"

import {
  defaultTranslations,
  TranslationKey,
  TranslationsType,
} from "./i18n-provider-defaults"

export type I18nContextType = TranslationsType & {
  t: (key: TranslationKey, args?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export interface I18nProviderProps {
  children: ReactNode
  translations: TranslationsType
}

const getKey = (
  key: TranslationKey,
  object: Record<string, unknown>
): string | undefined => {
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

const isSubtree = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value)

/**
 * Fill the gaps in a consumer's dictionary from the built-in (English)
 * defaults, recursively.
 *
 * f0 gains translation keys as it gains features, and components read many of
 * them by property access (`i18n.dataChart.tooltip.total`) rather than through
 * `t`, so a dictionary written against an older version would otherwise render
 * `undefined` — or throw on a whole missing subtree — instead of degrading to
 * English. Arrays and non-objects are treated as leaves: the consumer's value
 * wins outright.
 */
const withDefaults = <T extends Record<string, unknown>>(
  defaults: T,
  overrides: Record<string, unknown>
): T => {
  const merged: Record<string, unknown> = { ...defaults }

  for (const [key, value] of Object.entries(overrides)) {
    // An explicit `undefined` means "not translated", not "erase the default".
    if (value === undefined) continue

    const fallback = merged[key]
    merged[key] =
      isSubtree(value) && isSubtree(fallback)
        ? withDefaults(fallback, value)
        : value
  }

  return merged as T
}

export function I18nProvider({
  children,
  translations,
}: I18nProviderProps): JSX.Element {
  const resolved = useMemo(
    () => withDefaults(defaultTranslations, translations),
    [translations]
  )

  /*
   * Create a function that returns a translation for a given key and replaces the arguments.
   * If the key is not found, it will return undefined.
   * If the key is found, it will return the translation with the arguments replaced.
   */
  const t = (
    key: TranslationKey,
    args: Record<string, string | number> = {}
  ) => {
    let translation = getKey(key, resolved)
    if (translation === undefined) {
      console.warn(`Translation key ${key} not found`)
      return key
    }

    for (const [key, value] of Object.entries(args)) {
      translation = translation.replace(`{{${key}}}`, value.toString())
    }

    return translation
  }
  return (
    <I18nContext.Provider value={{ ...resolved, t }}>
      {children}
    </I18nContext.Provider>
  )
}

// Context backed by the built-in (English) defaults, used as a fallback when
// `useI18n` is called outside an `I18nProvider`.
const defaultI18nContext: I18nContextType = {
  ...defaultTranslations,
  t: (key: TranslationKey, args: Record<string, string | number> = {}) => {
    let translation = getKey(key, defaultTranslations)
    if (translation === undefined) {
      return key
    }
    for (const [argKey, value] of Object.entries(args)) {
      translation = translation.replace(`{{${argKey}}}`, value.toString())
    }
    return translation
  },
}

export function useI18n(): TranslationsType & {
  t: (key: TranslationKey, args?: Record<string, string | number>) => string
} {
  // Degrade gracefully to the default (English) translations instead of
  // throwing, so components that read i18n outside an `I18nProvider` (portaled
  // content, components rendered standalone or in unit tests without a wrapper)
  // render with defaults rather than crashing the whole subtree.
  return useContext(I18nContext) ?? defaultI18nContext
}

export const buildTranslations = (
  translations: TranslationsType
): TranslationsType => {
  return translations
}

// Type helper for creating translation objects that match the expected shape
export type I18nStrings = TranslationsType
export type { TranslationsType }
