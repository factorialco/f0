import { useCallback, useEffect, useRef, useState } from "react"

import { type F0ChatUser } from "../types"

/** The mock-runtime surface the storm drives (see createMockChatRuntime). */
export type ChatStormTarget = {
  receiveFrom: (responder: F0ChatUser) => void
  receiveBatch: (
    authors: F0ChatUser[],
    count: number,
    opts?: { withImage?: boolean }
  ) => void
  receiveReaction: () => void
  readSweep: () => void
  sendMessage: (input: { body: string }) => void
}

export type ChatStormConfig = {
  /** Incoming events per second (2-5 ≈ a genuinely intense group chat). */
  ratePerSec?: number
  /** Share of ticks that land as a same-commit batch of 2-3 messages. */
  batchRatio?: number
  /** Share of ticks that add an incoming reaction instead of a message. */
  reactionRatio?: number
  /** Share of ticks that sweep read receipts over my messages. */
  readRatio?: number
  /** Share of message ticks that carry an image attachment. */
  imageRatio?: number
  /** Share of ticks that send an OWN message (echo + delivered pipeline). */
  ownRatio?: number
}

export type ChatStorm = {
  running: boolean
  start: () => void
  stop: () => void
  toggle: () => void
  /** Events fired in the last rolling second (for the HUD). */
  eventsPerSecond: number
}

const OWN_LINES = [
  "yes!!",
  "on it 👀",
  "give me a sec",
  "hahaha",
  "sending it now",
]

/**
 * Storm driver for the intensity QA story: fires incoming activity against the
 * mock runtime at a configurable rate — typing→message swaps, SAME-COMMIT
 * batches, incoming reactions, read sweeps, images (with and without reserved
 * dimensions) and own sends — everything a genuinely intense conversation
 * throws at the transcript at once.
 */
export const useChatStorm = (
  target: ChatStormTarget,
  authors: F0ChatUser[],
  {
    ratePerSec = 3,
    batchRatio = 0.15,
    reactionRatio = 0.15,
    readRatio = 0.1,
    imageRatio = 0.12,
    ownRatio = 0.12,
  }: ChatStormConfig = {}
): ChatStorm => {
  const [running, setRunning] = useState(false)
  const [eventsPerSecond, setEventsPerSecond] = useState(0)
  const targetRef = useRef(target)
  targetRef.current = target
  const authorsRef = useRef(authors)
  authorsRef.current = authors
  const stampsRef = useRef<number[]>([])

  useEffect(() => {
    if (!running) return
    let cancelled = false
    let timer: ReturnType<typeof setTimeout>

    const fire = () => {
      if (cancelled) return
      const t = targetRef.current
      const people = authorsRef.current
      const roll = Math.random()
      const someone = people[Math.floor(Math.random() * people.length)]

      if (roll < batchRatio) {
        t.receiveBatch(people, 2 + Math.floor(Math.random() * 2), {
          withImage: Math.random() < imageRatio,
        })
      } else if (roll < batchRatio + reactionRatio) {
        t.receiveReaction()
      } else if (roll < batchRatio + reactionRatio + readRatio) {
        t.readSweep()
      } else if (roll < batchRatio + reactionRatio + readRatio + ownRatio) {
        t.sendMessage({
          body: OWN_LINES[Math.floor(Math.random() * OWN_LINES.length)],
        })
      } else if (Math.random() < imageRatio) {
        t.receiveBatch([someone], 1, { withImage: true })
      } else {
        // The bread and butter: typing dots, then the message replaces them.
        t.receiveFrom(someone)
      }

      const now = Date.now()
      stampsRef.current.push(now)
      stampsRef.current = stampsRef.current.filter((s) => now - s <= 1000)
      setEventsPerSecond(stampsRef.current.length)

      // Jittered cadence (±40%) — a fixed metronome hides coalescing bugs.
      const base = 1000 / ratePerSec
      timer = setTimeout(fire, base * (0.6 + Math.random() * 0.8))
    }

    timer = setTimeout(fire, 300)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [
    running,
    ratePerSec,
    batchRatio,
    reactionRatio,
    readRatio,
    imageRatio,
    ownRatio,
  ])

  const start = useCallback(() => setRunning(true), [])
  const stop = useCallback(() => setRunning(false), [])
  const toggle = useCallback(() => setRunning((r) => !r), [])

  return { running, start, stop, toggle, eventsPerSecond }
}
