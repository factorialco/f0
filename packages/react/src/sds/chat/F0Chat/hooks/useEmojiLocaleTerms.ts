import { useEffect, useMemo, useState } from "react"

import {
  browserEmojiLocale,
  type EmojiLocaleTerms,
  loadEmojiLocaleTerms,
  resolveEmojiLocale,
} from "../utils/emoji-locale"

/**
 * Emoji search terms in the reader's language, layered over the English index.
 *
 * Shared by the picker and by the composer's `:` autocomplete so the two agree
 * in every language, not only in English.
 *
 * Returns `undefined` until (and unless) a dataset arrives — English is already
 * in the bundle, so that is a complete search, not a loading state. Nothing here
 * blocks a render.
 */
export const useEmojiLocaleTerms = (
  locale?: string
): EmojiLocaleTerms | undefined => {
  const [terms, setTerms] = useState<EmojiLocaleTerms>()

  const resolved = useMemo(
    () => resolveEmojiLocale(locale ?? browserEmojiLocale()),
    [locale]
  )

  useEffect(() => {
    if (!resolved) return
    let live = true
    void loadEmojiLocaleTerms(resolved).then((loaded) => {
      if (live) setTerms(loaded)
    })
    return () => {
      live = false
    }
  }, [resolved])

  return terms
}
