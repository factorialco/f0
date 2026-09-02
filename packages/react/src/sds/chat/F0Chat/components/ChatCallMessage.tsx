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
 * The call row: an {@link F0MeetingCard} inside the transcript.
 *
 * Rendered natively rather than through a host render-prop. The transcript is
 * virtualized, and a node of unknown height injected by the host is exactly what
 * throws off Virtuoso's measurements.
 *
 * That is also why a live call is `compact` — it occupies one row's worth of
 * space, and it is rewritten on every room event, so its height would otherwise
 * move under the reader. An ENDED call is the one exception: it is written once
 * and never again, and its height is fixed at mount. Nothing in it is
 * collapsible or lazy, which is precisely why the transcript stays OUT of the
 * card and behind an action. Put anything expandable here and the measurement
 * problem `compact` protects against comes straight back.
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

  const isEnded = call.state === "ended"

  return (
    <div className="px-4 py-2">
      <F0MeetingCard
        compact={!isEnded}
        state={CARD_STATE[call.state]}
        title={title}
        startsAt={new Date(call.startedAt)}
        endsAt={call.endedAt ? new Date(call.endedAt) : undefined}
        attendees={participants.map(toAttendee)}
        presentCount={participants.length}
        // `auto` reads a finished meeting as a count and labels it "guests",
        // which is the invited wording — wrong for people who were actually in
        // the call. A huddle's roster is small, so show the faces.
        attendeesDisplay={isEnded ? "avatars" : undefined}
        join={join}
        // The card only reads these once it is `finished`, so passing them
        // unconditionally cannot leak a summary onto a ringing call.
        summary={call.summary}
        secondaryActions={call.actions}
      />
    </div>
  )
}
