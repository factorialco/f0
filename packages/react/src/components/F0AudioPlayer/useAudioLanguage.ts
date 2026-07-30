import { useMemo, useState } from "react"

import {
  collectLanguages,
  defaultLocale,
  type LanguageOption,
  type Localized,
  resolveLocalized,
} from "@/lib/localized"

type AudioSrc = string | (() => Promise<string>)

export interface AudioLanguage {
  /** Languages offered by a localized `src` (empty / single = no selector). */
  languages: LanguageOption[]
  /** Active audio language. */
  activeLocale: string | undefined
  /** The resolved source for the active language (plain sources pass through). */
  resolvedSrc: AudioSrc
  /** Set the active language. Pair with {@link preserveAudioPosition} to keep the playhead. */
  setLocale: (locale: string) => void
}

/**
 * Resolves a (possibly localized) audio `src` to the source for the selected
 * language and manages that selection. Kept ref-free so it can run before the
 * player controller (which owns the `<audio>` element) is created.
 */
export function useAudioLanguage(
  src: Localized<AudioSrc>,
  defaultLanguage: string | undefined
): AudioLanguage {
  const languages = useMemo(() => collectLanguages(src), [src])
  const [locale, setLocale] = useState(() =>
    defaultLocale(languages, defaultLanguage)
  )
  const activeLocale = languages.some((l) => l.locale === locale)
    ? locale
    : defaultLocale(languages, defaultLanguage)

  const resolvedSrc = resolveLocalized(src, activeLocale) ?? ""

  return { languages, activeLocale, resolvedSrc, setLocale }
}

/**
 * Preserve the playhead across an audio-source swap: capture the current time
 * and play state, and restore them once the new source's metadata loads.
 * Call right before changing the language.
 */
export function preserveAudioPosition(
  audio: HTMLAudioElement | null | undefined
): void {
  if (!audio) return
  const time = audio.currentTime
  const wasPlaying = !audio.paused
  const restore = () => {
    audio.currentTime = time
    if (wasPlaying) void audio.play().catch(() => {})
    audio.removeEventListener("loadedmetadata", restore)
  }
  audio.addEventListener("loadedmetadata", restore)
}
