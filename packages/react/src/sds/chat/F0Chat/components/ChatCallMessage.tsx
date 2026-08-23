import { type ReactNode } from "react"

import { F0MeetingCard } from "@/experimental/F0MeetingCard"
import { type MeetingState } from "@/experimental/F0MeetingCard/types"
import { useI18n } from "@/lib/providers/i18n"

import {
  type F0ChatCall,
  type F0ChatCallState,
  type F0ChatUser,
} from "../types"

/**
 * A call is a meeting, so the card is the one F0 already has. The mapping is a
 * rename, not a translation: the two vocabularies were built for the same thing
 * from different ends.
 */
const CARD_STATE: Record<F0ChatCallState, MeetingState> = {
  ringing: "ringing",
  live: "inProgress",
  ended: "finished",
  missed: "missed",
}

const toAttendee = (user: F0ChatUser) => {
  const [firstName = "", ...rest] = user.name.split(/\s+/)
  return {
    type: "internal" as const,
    firstName,
    lastName: rest.join(" "),
    // Only a person avatar carries a photo; every other variant falls back to
    // the initials the card derives from the name.
    src: user.avatar?.type === "person" ? user.avatar.src : undefined,
  }
}

/**
 * The call row: a compact {@link F0MeetingCard} inside the transcript.
 *
 * Rendered natively rather than through a host render-prop. The transcript is
 * virtualized, and a node of unknown height injected by the host is exactly what
 * throws off Virtuoso's measurements — which is also why the card is `compact`,
 * so a call occupies one row's worth of space and not a block.
 */
export const ChatCallMessage = ({ call }: { call: F0ChatCall }): ReactNode => {
  const i18n = useI18n()
  const participants = call.participants ?? []

  // Only a joinable call gets a join handler at all, so an ended one cannot
  // render a dead button.
  const join = call.join ? { onJoin: call.join } : undefined

  const title =
    call.state === "missed"
      ? i18n.chat.call.missed
      : call.state === "ended"
        ? i18n.chat.call.ended
        : i18n.t("chat.call.startedBy", { name: call.startedBy.name })

  return (
    <div className="px-4 py-2">
      <F0MeetingCard
        compact
        state={CARD_STATE[call.state]}
        title={title}
        startsAt={new Date(call.startedAt)}
        endsAt={call.endedAt ? new Date(call.endedAt) : undefined}
        attendees={participants.map(toAttendee)}
        presentCount={participants.length}
        join={join}
      />
    </div>
  )
}
