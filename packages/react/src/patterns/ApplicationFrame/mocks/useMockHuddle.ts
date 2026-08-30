"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { useMockChatApp } from "@/sds/chat/F0Chat/mocks/useMockChatApp"
import { ME as CHAT_ME, SEED_BY_ID } from "@/sds/chat/F0Chat/mocks/mockSeeds"
import { type F0ChatCall, type F0ChatUser } from "@/sds/chat/F0Chat/types"
import { seedFromAttendees } from "@/sds/meetings/F0Meeting/mocks/mockSeeds"
import { useMockMeetingRuntime } from "@/sds/meetings/F0Meeting/mocks/useMockMeetingRuntime"
import { type F0MeetingRuntime } from "@/sds/meetings/F0Meeting/types"

/** How long the other side takes to pick up. Long enough to see it ring. */
const ANSWER_DELAY_MS = 3000

export type MockHuddle = {
  /** Non-null only while a call is running — the frame's `meeting.runtime`. */
  runtime: F0MeetingRuntime | null
  /** The conversation the running call belongs to. */
  activeConvId: string | null
  /** Call the other person in this DM. */
  start: (convId: string) => void
  /** Demo only: make the other person call YOU, so the receiving side is testable. */
  receive: (convId: string) => void
}

type Phase = "idle" | "outgoing" | "incoming" | "live"

/**
 * Wires the chat's transcript to the meeting surface, in both directions.
 *
 * It lives in the frame rather than in either mock package because the frame is
 * what a real host is: the only place that sees both worlds. The chat mock knows
 * nothing about rooms, and the meeting mock knows nothing about conversations —
 * exactly the separation the production adapters will have, where the glue is a
 * backend mutation plus LiveKit webhooks.
 */
export const useMockHuddle = (): MockHuddle => {
  const { upsertCall } = useMockChatApp()

  const [convId, setConvId] = useState<string | null>(null)
  const [phase, setPhase] = useState<Phase>("idle")
  /**
   * Which way the call goes. Kept apart from `phase` because the room's roster
   * is seeded from it and must NOT be rebuilt when the phase advances — the
   * mock only re-reads `others` when the room id changes.
   */
  const [direction, setDirection] = useState<"outgoing" | "incoming" | null>(
    null
  )
  /** Bumped per call so the same conversation twice is two different rooms. */
  const [callCount, setCallCount] = useState(0)
  const callIdRef = useRef<string | null>(null)
  const startedAtRef = useRef<string | null>(null)
  /** Whether the other side ever made it in — decides ended vs missed. */
  const answeredRef = useRef(false)
  /** Guards the one-shot "they walked in" so a re-render cannot duplicate them. */
  const admittedRef = useRef(false)

  const conversation = convId ? SEED_BY_ID.get(convId) : undefined
  const other = conversation?.participants[0]

  // The chat's mock people already ARE `F0ChatUser`s.
  const me: F0ChatUser = CHAT_ME
  const otherUser: F0ChatUser | undefined = other

  /** Writes the call item. The mock's stand-in for the backend's upsert. */
  const write = useCallback(
    (patch: Omit<F0ChatCall, "id" | "startedAt" | "startedBy">) => {
      const id = callIdRef.current
      const startedAt = startedAtRef.current
      if (!convId || !id || !startedAt) return
      // Whoever started it keeps having started it. Reading the phase here made
      // an incoming call claim you started it the moment you answered.
      const startedBy = direction === "incoming" && otherUser ? otherUser : me
      upsertCall(convId, { id, startedAt, startedBy, ...patch })
    },
    [convId, direction, otherUser, me, upsertCall]
  )

  // The room is always built (hooks cannot be conditional) but only handed over
  // while a call runs — the same shape a real host ends up with.
  const seed = useMemo(
    () =>
      seedFromAttendees({
        roomId: `huddle:${convId ?? "idle"}:${callCount}`,
        title: conversation ? `Huddle · ${conversation.title}` : "Huddle",
        me: { id: CHAT_ME.id, name: CHAT_ME.name, avatar: CHAT_ME.avatar },
        attendees: (conversation?.participants ?? []).map((participant) => ({
          id: participant.id,
          name: participant.name,
          avatar: participant.avatar,
        })),
        // Ringing an outgoing call seeds them as INVITED: they hold a tile that
        // says "Waiting…" and publish nothing until they pick up, which is what
        // the design shows and what a room genuinely looks like while it rings.
        // Joining an incoming one puts you in a room they are already in.
        presence: direction === "incoming" ? "joined" : "invited",
        videoSource: "clip",
        clipUrls: ["/Big_Buck_Bunny_alt.webm"],
        audio: direction !== null,
      }),
    [convId, callCount, conversation, direction]
  )

  const hangUp = useCallback(() => {
    write({
      state: answeredRef.current ? "ended" : "missed",
      endedAt: new Date().toISOString(),
      participants: undefined,
      join: undefined,
    })
    setPhase("idle")
    setDirection(null)
    setConvId(null)
    callIdRef.current = null
  }, [write])

  const { runtime, drivers } = useMockMeetingRuntime(seed, { onLeave: hangUp })

  const begin = useCallback(
    (nextConvId: string, nextDirection: "outgoing" | "incoming") => {
      callIdRef.current = `call-${nextConvId}-${Date.now()}`
      startedAtRef.current = new Date().toISOString()
      answeredRef.current = false
      admittedRef.current = false
      setCallCount((count) => count + 1)
      setConvId(nextConvId)
      setDirection(nextDirection)
      setPhase(nextDirection)
    },
    []
  )

  const start = useCallback(
    (nextConvId: string) => begin(nextConvId, "outgoing"),
    [begin]
  )
  const receive = useCallback(
    (nextConvId: string) => begin(nextConvId, "incoming"),
    [begin]
  )

  // Ringing: the item appears as soon as the phase flips, so the card and the
  // room open together.
  useEffect(() => {
    if (phase !== "outgoing" && phase !== "incoming") return
    const isIncoming = phase === "incoming"
    write({
      state: "ringing",
      participants: isIncoming ? (otherUser ? [otherUser] : []) : [me],
      // An incoming call is joinable; your own outgoing one you are already in.
      join: isIncoming
        ? () => {
            answeredRef.current = true
            setPhase("live")
          }
        : undefined,
    })
  }, [phase, otherUser, me, write])

  // The other side picks up. Only for an outgoing call: an incoming one waits
  // for YOU, and joining it is what moves it along.
  useEffect(() => {
    if (phase !== "outgoing") return
    const timer = setTimeout(() => {
      answeredRef.current = true
      setPhase("live")
    }, ANSWER_DELAY_MS)
    return () => clearTimeout(timer)
  }, [phase])

  useEffect(() => {
    if (phase !== "live") return
    write({
      state: "live",
      participants: otherUser ? [me, otherUser] : [me],
      join: undefined,
    })
  }, [phase, otherUser, me, write])

  // They pick up. It has to go through the driver rather than through the seed:
  // the mock reads `others` only when the room id changes, so growing the seed
  // mid-call would update the card and leave the room empty. `admit` is also
  // exactly what a real `participant_joined` webhook drives, so the mock
  // exercises the same mechanism the adapter will.
  useEffect(() => {
    if (phase !== "live" || direction !== "outgoing") return
    if (admittedRef.current || !other) return
    admittedRef.current = true
    drivers.admit(other.id)
  }, [phase, direction, other, drivers])

  return {
    runtime: phase === "idle" || phase === "incoming" ? null : runtime,
    activeConvId: convId,
    start,
    receive,
  }
}
