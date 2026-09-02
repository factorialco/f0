"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { useMockChatApp } from "@/sds/chat/F0Chat/mocks/useMockChatApp"
import { ME as CHAT_ME, SEED_BY_ID } from "@/sds/chat/F0Chat/mocks/mockSeeds"
import { type F0ChatCall, type F0ChatUser } from "@/sds/chat/F0Chat/types"
import { seedFromAttendees } from "@/sds/meetings/F0Meeting/mocks/mockSeeds"
import {
  type MockScriptChatMessage,
  useMockMeetingRuntime,
} from "@/sds/meetings/F0Meeting/mocks/useMockMeetingRuntime"
import {
  type F0MeetingRuntime,
  type F0MeetingTranscriptSegment,
} from "@/sds/meetings/F0Meeting/types"

import { HUDDLE_CLIPS } from "./huddleClips"
import { HUDDLE_SCRIPT, resolveScript, resolveSummary } from "./huddleScript"

/** How long the other side takes to pick up. Long enough to see it ring. */
const ANSWER_DELAY_MS = 3000

/**
 * How long each extra person in a group takes to wander in.
 *
 * A group huddle does not ring — see the phase comment below — so this stagger
 * is the whole arrival experience: tiles that say "Waiting…" filling in one at a
 * time, which is what a huddle actually looks like and what makes `invited` →
 * `admit` worth having.
 */
const GROUP_ARRIVAL_MS = 6000

/**
 * How many people actually turn up.
 *
 * Opening a huddle in a channel is not convening the channel: a handful drop
 * in, the rest never see it. Capping this is also what keeps a 45-member
 * channel from taking four minutes to fill.
 */
const GROUP_ARRIVALS = 4

export type MockHuddle = {
  /** Non-null only while a call is running — the frame's `meeting.runtime`. */
  runtime: F0MeetingRuntime | null
  /** The conversation the running call belongs to. */
  activeConvId: string | null
  /** Open a huddle in this conversation — a DM or a group channel. */
  start: (convId: string) => void
  /** Demo only: make the other side call YOU, so the receiving half is testable. */
  receive: (convId: string) => void
  /** Chat lines the script types during the call, for the room's chat tab. */
  scriptChat: MockScriptChatMessage[]
  /**
   * The transcript of the call that just ended, kept after the room is gone.
   *
   * It has to be snapshotted rather than read off the runtime: changing
   * `room.id` resets the mock, so by the time anything could open a viewer the
   * segments no longer exist.
   */
  lastTranscript: F0MeetingTranscriptSegment[]
  /** The summary written for the call that just ended. */
  lastSummary: string | null
  /** Title of the conversation the last call belonged to. */
  lastTitle: string | null
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
export const useMockHuddle = ({
  onOpenTranscript,
}: {
  /**
   * Opens the transcript of a finished call. The card only carries the button;
   * where it leads is the host's decision, which is exactly what
   * `F0MeetingCard`'s docs say about transcripts.
   */
  onOpenTranscript?: () => void
} = {}): MockHuddle => {
  const { upsertCall } = useMockChatApp()
  const onOpenTranscriptRef = useRef(onOpenTranscript)
  onOpenTranscriptRef.current = onOpenTranscript

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
  /** Who has actually walked in, so the card can count them. */
  const [insideIds, setInsideIds] = useState<string[]>([])
  const callIdRef = useRef<string | null>(null)
  const startedAtRef = useRef<string | null>(null)
  /** Whether anybody else ever made it in — decides ended vs missed. */
  const answeredRef = useRef(false)

  const [lastTranscript, setLastTranscript] = useState<
    F0MeetingTranscriptSegment[]
  >([])
  const [lastSummary, setLastSummary] = useState<string | null>(null)
  const [lastTitle, setLastTitle] = useState<string | null>(null)

  const conversation = convId ? SEED_BY_ID.get(convId) : undefined
  /**
   * Everyone but you. A DM has one; a group channel has as many as it has, and
   * `grp-reporting` has 45 — which is the case that exercises the overflow chip
   * and the camera cap rather than the happy path.
   */
  const others = useMemo(
    () =>
      (conversation?.participants ?? []).filter(
        (participant) => participant.id !== CHAT_ME.id
      ),
    [conversation]
  )
  const isGroup = conversation?.type === "group"

  const me: F0ChatUser = CHAT_ME

  /** Writes the call item. The mock's stand-in for the backend's upsert. */
  const write = useCallback(
    (patch: Omit<F0ChatCall, "id" | "startedAt" | "startedBy">) => {
      const id = callIdRef.current
      const startedAt = startedAtRef.current
      if (!convId || !id || !startedAt) return
      // Whoever started it keeps having started it. Reading the phase here made
      // an incoming call claim you started it the moment you answered.
      const startedBy =
        direction === "incoming" && others[0] ? (others[0] as F0ChatUser) : me
      upsertCall(convId, { id, startedAt, startedBy, ...patch })
    },
    [convId, direction, others, me, upsertCall]
  )

  const script = useMemo(
    () => ({
      lines: resolveScript(
        HUDDLE_SCRIPT,
        CHAT_ME.id,
        others.map((participant) => participant.id)
      ),
    }),
    [others]
  )

  // The room is always built (hooks cannot be conditional) but only handed over
  // while a call runs — the same shape a real host ends up with.
  const seed = useMemo(
    () =>
      seedFromAttendees({
        roomId: `huddle:${convId ?? "idle"}:${callCount}`,
        title: conversation ? `Huddle · ${conversation.title}` : "Huddle",
        me: { id: CHAT_ME.id, name: CHAT_ME.name, avatar: CHAT_ME.avatar },
        // A GROUP huddle seeds nobody but you. Opening a room in a channel is
        // not calling 45 people, so none of them is "waiting" — a grid full of
        // dark "Waiting…" tiles for people who do not know the room exists is a
        // lie. They are added with `drivers.join` as they arrive.
        //
        // A DM is the opposite: there IS one person being called, and seeding
        // them `invited` is what makes the ringing state truthful.
        attendees: isGroup
          ? []
          : others.map((participant) => ({
              id: participant.id,
              name: participant.name,
              avatar: participant.avatar,
            })),
        presence: direction === "incoming" ? "joined" : "invited",
        videoSource: "clip",
        clips: HUDDLE_CLIPS,
        script,
        audio: direction !== null || phase === "live",
      }),
    [convId, callCount, conversation, others, direction, phase, script, isGroup]
  )

  const { runtime, drivers, scriptChat } = useMockMeetingRuntime(seed, {
    onLeave: () => hangUpRef.current(),
  })

  /** Read at hang-up, so the transcript survives the room being torn down. */
  const transcriptRef = useRef<F0MeetingTranscriptSegment[]>([])
  transcriptRef.current = runtime.transcript ?? []
  const titleRef = useRef<string | null>(null)
  titleRef.current = conversation?.title ?? null

  const summary = useMemo(
    () =>
      resolveSummary(
        HUDDLE_SCRIPT.summary,
        CHAT_ME.name,
        others.map((participant) => participant.name)
      ),
    [others]
  )
  const summaryRef = useRef(summary)
  summaryRef.current = summary

  const insideRef = useRef<string[]>([])
  insideRef.current = insideIds

  const hangUp = useCallback(() => {
    // Snapshot BEFORE the room id changes: the mock resets on that, and the
    // segments are gone the moment it does.
    setLastTranscript(transcriptRef.current)
    setLastSummary(summaryRef.current)
    setLastTitle(titleRef.current)

    const answered = answeredRef.current
    write({
      state: answered ? "ended" : "missed",
      endedAt: new Date().toISOString(),
      // Kept, not cleared: an ended call that lists nobody is a call that never
      // happened. This is what puts faces on the finished card.
      participants: answered
        ? [me, ...others.filter((p) => insideRef.current.includes(p.id))]
        : undefined,
      join: undefined,
      ...(answered
        ? {
            summary: summaryRef.current,
            ...(onOpenTranscriptRef.current && transcriptRef.current.length > 0
              ? {
                  actions: [
                    {
                      label: "Transcript",
                      onClick: () => onOpenTranscriptRef.current?.(),
                    },
                  ],
                }
              : {}),
          }
        : {}),
    })
    setPhase("idle")
    setDirection(null)
    setConvId(null)
    setInsideIds([])
    callIdRef.current = null
  }, [write, me, others])

  const hangUpRef = useRef(hangUp)
  hangUpRef.current = hangUp

  const begin = useCallback(
    (nextConvId: string, nextDirection: "outgoing" | "incoming") => {
      callIdRef.current = `call-${nextConvId}-${Date.now()}`
      startedAtRef.current = new Date().toISOString()
      answeredRef.current = false
      setCallCount((count) => count + 1)
      setConvId(nextConvId)
      setInsideIds([])
      const seedConversation = SEED_BY_ID.get(nextConvId)
      // A group huddle does not ring. Ringing five people is wrong, and the card
      // in the conversation IS the notification — Slack's model, and the one
      // SPEC.md commits to. So a group opens straight into `live` with you in it
      // and everyone else invited.
      if (seedConversation?.type === "group" && nextDirection === "outgoing") {
        setDirection(null)
        setPhase("live")
        return
      }
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
  // room open together. DMs only — a group never passes through here.
  useEffect(() => {
    if (phase !== "outgoing" && phase !== "incoming") return
    const isIncoming = phase === "incoming"
    const caller = others[0]
    write({
      state: "ringing",
      participants: isIncoming ? (caller ? [caller] : []) : [me],
      // An incoming call is joinable; your own outgoing one you are already in.
      join: isIncoming
        ? () => {
            answeredRef.current = true
            setPhase("live")
          }
        : undefined,
    })
  }, [phase, others, me, write])

  // The other side picks up. Only for an outgoing DM: an incoming one waits for
  // YOU, and joining it is what moves it along.
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
      participants: [
        me,
        ...others.filter((participant) => insideIds.includes(participant.id)),
      ],
      join: undefined,
    })
  }, [phase, others, me, insideIds, write])

  /**
   * People walk in.
   *
   * Both paths go through a driver rather than through the seed: the mock reads
   * `others` only when the room id changes, so growing the seed mid-call would
   * update the card and leave the room empty.
   *
   * The two are genuinely different events, and use different drivers:
   *
   * - A DM's person was seeded `invited` and is **admitted** — the mock's
   *   `participant_joined`, the same mechanism the real adapter will drive.
   * - A group's people were never in the room at all, so they **join**: they
   *   appear when they appear, and until then nothing represents them.
   *
   * An incoming call is the exception to both — they were already in the room
   * before you answered, so the seed put them there.
   */
  useEffect(() => {
    if (phase !== "live" || direction === "incoming") return
    if (others.length === 0) return

    const arrived = (id: string): void => {
      answeredRef.current = true
      setInsideIds((current) =>
        current.includes(id) ? current : [...current, id]
      )
    }

    // A DM's one person picked up before we got here, so they are already in —
    // admitting synchronously rather than on a zero timer keeps that a single
    // observable step.
    if (!isGroup) {
      others.forEach((participant) => {
        drivers.admit(participant.id)
        arrived(participant.id)
      })
      return
    }

    // Slow on purpose. At 1.6s it read as a list loading; several seconds apart
    // reads as people deciding to join. Only the first few are spaced out —
    // staggering all 45 members of a channel would be a minute of watching
    // nothing happen — and only a handful come at all, because a channel huddle
    // is not a meeting the whole channel attends.
    const arriving = others.slice(0, GROUP_ARRIVALS)
    const timers = arriving.map((participant, index) =>
      setTimeout(
        () => {
          drivers.join({
            id: participant.id,
            firstName: participant.name.split(" ")[0] ?? participant.name,
            lastName: participant.name.split(" ").slice(1).join(" "),
            avatar: participant.avatar,
            camera: participant.id in HUDDLE_CLIPS,
            muted: index % 3 === 2,
          })
          arrived(participant.id)
        },
        GROUP_ARRIVAL_MS * (index + 1)
      )
    )
    return () => timers.forEach(clearTimeout)
  }, [phase, direction, others, drivers, isGroup])

  return {
    runtime: phase === "idle" || phase === "incoming" ? null : runtime,
    activeConvId: convId,
    start,
    receive,
    scriptChat,
    lastTranscript,
    lastSummary,
    lastTitle,
  }
}
