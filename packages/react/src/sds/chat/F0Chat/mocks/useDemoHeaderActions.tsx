import { useState, type ReactNode } from "react"

import { F0TextInput } from "@/components/F0TextInput"
import { F0TagPerson } from "@/components/tags/F0TagPerson"
import {
  Microphone,
  MicrophoneNegative,
  Pencil,
  PushPin,
  PushPinSolid,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"

import {
  type F0ChatHeaderAction,
  type F0ChatRuntime,
  type F0ChatUser,
} from "../types"

/** My role in the mocked channel — what a real host derives from its
 * permission system (e.g. the Stream member's role). */
export type DemoChannelRole = "admin" | "member" | "guest"

/**
 * Demo wiring of {@link F0ChatHeaderAction} the way a real host would do it,
 * driven by the user's PERMISSIONS in the channel:
 * - "guest" → no actions at all (only the built-in search remains),
 * - "member" → Pin/Unpin + Mute/Unmute, wired to the runtime's toggles,
 * - "admin" → the above plus "Edit group", which opens an F0Dialog owned by
 *   the host (rendered OUTSIDE F0Chat — the callback is the whole contract).
 *   The dialog mocks a real edit form: group name input + the member tags.
 *
 * The array is rebuilt per render so the pin/mute labels and icons follow the
 * channel state — the documented pattern for toggle actions.
 */
export function useDemoHeaderActions(
  runtime: Pick<F0ChatRuntime, "channel" | "togglePin" | "toggleMute">,
  role: DemoChannelRole = "member",
  opts: { members?: F0ChatUser[] } = {}
): { headerActions: F0ChatHeaderAction[]; editDialog: ReactNode } {
  const i18n = useI18n()
  const [editOpen, setEditOpen] = useState(false)
  const [draftName, setDraftName] = useState("")
  const { channel, togglePin, toggleMute } = runtime
  const members = opts.members ?? []

  const headerActions: F0ChatHeaderAction[] = []
  if (role !== "guest") {
    if (togglePin) {
      headerActions.push({
        id: "pin",
        label: channel.pinned ? i18n.chat.unpin : i18n.chat.pin,
        icon: channel.pinned ? PushPinSolid : PushPin,
        onClick: () => void togglePin(),
      })
    }
    if (toggleMute) {
      headerActions.push({
        id: "mute",
        label: channel.muted ? i18n.chat.unmute : i18n.chat.mute,
        icon: channel.muted ? Microphone : MicrophoneNegative,
        onClick: () => void toggleMute(),
      })
    }
  }
  if (role === "admin") {
    headerActions.push({
      id: "edit",
      label: i18n.chat.edit,
      icon: Pencil,
      channelTypes: ["group"],
      onClick: (ch) => {
        setDraftName(ch.title)
        setEditOpen(true)
      },
    })
  }

  const editDialog = (
    <F0Dialog
      isOpen={editOpen}
      onClose={() => setEditOpen(false)}
      title={`${i18n.chat.edit} — ${channel.title}`}
      primaryAction={{
        label: i18n.actions.save,
        onClick: () => setEditOpen(false),
      }}
    >
      <div className="flex flex-col gap-4">
        <F0TextInput
          label="Group name"
          value={draftName}
          onChange={setDraftName}
        />
        {members.length > 0 && (
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-f1-foreground-secondary">
              {channel.memberCount ?? members.length} members
            </span>
            <div className="flex flex-wrap gap-1">
              {members.map((member) => (
                <F0TagPerson
                  key={member.id}
                  name={member.name}
                  src={
                    member.avatar?.type === "person"
                      ? member.avatar.src
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        )}
        <p className="text-sm text-f1-foreground-secondary">
          The host owns this dialog: the header action only fires a callback
          with the channel, and the app decides what to open (here, an F0Dialog
          rendered outside F0Chat).
        </p>
      </div>
    </F0Dialog>
  )

  return { headerActions, editDialog }
}
