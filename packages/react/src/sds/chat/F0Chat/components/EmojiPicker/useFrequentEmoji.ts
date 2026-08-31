import { useCallback, useState } from "react"

import {
  DEFAULT_EMOJI_IDS,
  type EmojiEntry,
  findEmojiById,
} from "../../utils/emoji-index"
import { readFromLocalStorage, writeToLocalStorage } from "@/lib/local-storage"

const STORAGE_KEY = "f0.emoji-picker.frequent"

/** Two full rows at nine columns — emoji-mart showed two, so nobody loses one. */
const MAX_FREQUENT = 18

/** Ceiling on how lopsided the tally can get: without it, an emoji used a
 * hundred times in one afternoon outranks everything else forever. */
const MAX_COUNT = 64

type Counts = Record<string, number>

const readCounts = (): Counts => {
  const stored = readFromLocalStorage<unknown>(STORAGE_KEY, null)
  if (!stored || typeof stored !== "object" || Array.isArray(stored)) return {}
  return Object.fromEntries(
    Object.entries(stored as Record<string, unknown>).flatMap(([id, count]) =>
      typeof count === "number" && Number.isFinite(count) && count > 0
        ? [[id, count]]
        : []
    )
  )
}

const resolve = (counts: Counts): EmojiEntry[] => {
  const ranked = Object.entries(counts)
    .sort(([idA, a], [idB, b]) => b - a || idA.localeCompare(idB))
    .flatMap(([id]) => {
      const emoji = findEmojiById(id)
      return emoji ? [emoji] : []
    })

  if (ranked.length >= MAX_FREQUENT) return ranked.slice(0, MAX_FREQUENT)

  // Top up a thin history with the house defaults, skipping anything already
  // ranked so the row never shows the same emoji twice.
  const seen = new Set(ranked.map((emoji) => emoji.id))
  const seeds = DEFAULT_EMOJI_IDS.flatMap((id) => {
    if (seen.has(id)) return []
    const emoji = findEmojiById(id)
    return emoji ? [emoji] : []
  })
  return [...ranked, ...seeds].slice(0, MAX_FREQUENT)
}

/**
 * The "frequently used" row, ranked by how often this browser has picked each
 * emoji. Read once per mount — the picker mounts with its popover, so every
 * open already picks up the latest tally.
 */
export const useFrequentEmoji = (): {
  frequent: EmojiEntry[]
  recordUse: (emoji: EmojiEntry) => void
} => {
  const [counts, setCounts] = useState<Counts>(() =>
    typeof window === "undefined" ? {} : readCounts()
  )

  const recordUse = useCallback((emoji: EmojiEntry) => {
    setCounts((previous) => {
      const next = {
        ...previous,
        [emoji.id]: Math.min((previous[emoji.id] ?? 0) + 1, MAX_COUNT),
      }
      writeToLocalStorage(STORAGE_KEY, next)
      return next
    })
  }, [])

  return { frequent: resolve(counts), recordUse }
}
