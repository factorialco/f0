import { F0AvatarList, F0AvatarPerson, F0Button } from "@factorialco/f0-react"
import {
  ArrowUp,
  Headset,
  Microphone,
  Paperclip,
} from "@factorialco/f0-react/icons/app"

import type { Chat, ChatCall, ChatMessage } from "./chats"

import { sendMessage, setDraft, useDraft, useSentMessages } from "./chatDraft"
import { authorAvatar, authorNames, CHAT_AUTHORS } from "./chats"

/**
 * A Comms conversation, rendered inside the left-hand window stack
 * (Figma 2707:406513 → the "One chat" frame, 2707:407984).
 *
 * Off the frame: content column `px-3`, 20px between turns, incoming
 * bubbles `px-4 py-3` with a 12px author line over 14px body, your own
 * turns right-aligned with a quoted original nested inside, and the
 * composer pinned below the scroll.
 *
 * The thread is TOP-aligned, not bottom-anchored like a real chat client
 * — that is what the frame shows (messages, the call card, then empty
 * space above the composer), so the prototype matches it.
 */

/** Per-author tint, applied through a custom property so one value drives
 *  both the name colour and the 6% bubble wash — and so the stylesheet
 *  can lighten the name for dark mode. See `.f0c-chat-author` in Home. */
function authorStyle(rgb: string): React.CSSProperties {
  return { "--f0c-author": rgb } as React.CSSProperties
}

function MessageBody({
  mention,
  body,
  quoted,
}: {
  mention?: string
  body: string
  /** Inside a quote the mention loses its tint — measured off the frame,
   *  where the quoted "@Aviso" is plain foreground. It is a record of
   *  what was said, not a live mention of you. */
  quoted?: boolean
}) {
  return (
    <p className="text-base text-f1-foreground">
      {mention && (
        <span
          className={
            quoted ? "font-medium" : "font-medium text-f1-foreground-warning"
          }
        >
          {mention}{" "}
        </span>
      )}
      {body}
    </p>
  )
}

// Bubble caps as RATIOS of the turn's width, matching the frame at any
// panel width: incoming 276/388, your own 300/388.
function IncomingMessage({ message }: { message: ChatMessage }) {
  const key = message.author
  if (!key) return null
  const author = CHAT_AUTHORS[key]
  const { firstName, lastName } = authorNames(key)
  return (
    // items-end: the avatar sits at the BOTTOM of its bubble in the frame,
    // so a multi-line message grows upward away from it.
    <div className="flex items-end gap-2">
      <div className="shrink-0">
        <F0AvatarPerson
          firstName={firstName}
          lastName={lastName}
          src={authorAvatar(key)}
          size="sm"
        />
      </div>
      <div
        style={authorStyle(author.rgb)}
        className="f0c-chat-bubble w-[71%] min-w-0 rounded-xl px-4 py-3"
      >
        <span className="f0c-chat-author block truncate text-sm font-medium">
          {author.name}
        </span>
        <MessageBody mention={message.mention} body={message.body} />
      </div>
    </div>
  )
}

function OutgoingMessage({ message }: { message: ChatMessage }) {
  const quote = message.quote
  const quoted = quote ? CHAT_AUTHORS[quote.author] : null
  return (
    <div className="flex flex-col items-end gap-2">
      <div
        className={`w-[77%] min-w-0 rounded-xl bg-f1-background-tertiary ${
          // With a quote the bubble is a 4px frame around it; without one
          // it is an ordinary bubble.
          quote ? "p-1" : "px-4 py-3"
        }`}
      >
        {quote && quoted && (
          <div
            style={authorStyle(quoted.rgb)}
            className="rounded-md bg-f1-background-secondary px-4 py-3"
          >
            <span className="f0c-chat-author block truncate text-sm font-medium">
              {quoted.name}
            </span>
            <MessageBody mention={quote.mention} body={quote.body} quoted />
          </div>
        )}
        <div className={quote ? "px-3 pb-3 pt-1.5" : ""}>
          <MessageBody body={message.body} />
        </div>
      </div>
      {message.readAt && (
        <span className="text-sm text-f1-foreground-secondary">
          {message.readAt}
        </span>
      )}
    </div>
  )
}

function CallCard({ call }: { call: ChatCall }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-solid border-f1-border px-3 py-2.5">
      <div className="flex min-w-0 flex-col gap-1">
        <div className="flex min-w-0 items-baseline gap-1">
          <span className="shrink-0 text-base font-medium text-f1-foreground">
            Call in progress
          </span>
          <span className="truncate text-base text-f1-foreground-secondary">
            {call.startedAgo}
          </span>
        </div>
        <F0AvatarList
          type="person"
          size="xs"
          // `max` has NO default in F0AvatarList — left undefined it
          // measures the container and shows everyone.
          max={3}
          remainingCount={call.extraParticipants}
          avatars={call.participants.map((key) => ({
            ...authorNames(key),
            src: authorAvatar(key),
          }))}
        />
      </div>
      <div className="shrink-0">
        <F0Button variant="outline" size="md" icon={Headset} label="Join" />
      </div>
    </div>
  )
}

/**
 * Hand-rolled rather than f0's `F0AiChatTextArea`: that component owns
 * its own value with no `onChange`, so OnePromptBar drives it through
 * document-level `input` listeners — a second instance on screen would
 * fight the first for those. A chat composer is a textarea and three
 * buttons; this is the cheaper, safer half.
 */
function Composer({ chat }: { chat: Chat }) {
  const draft = useDraft(chat.id)
  return (
    <form
      className="flex flex-col gap-1 rounded-md border border-solid border-f1-border bg-f1-background p-3"
      onSubmit={(e) => {
        e.preventDefault()
        sendMessage(chat.id, draft)
      }}
    >
      <textarea
        value={draft}
        onChange={(e) => setDraft(chat.id, e.target.value)}
        // Enter sends, Shift+Enter breaks the line — the convention every
        // chat client shares, and what the frame's single-line input implies.
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            sendMessage(chat.id, draft)
          }
        }}
        rows={2}
        aria-label={`Message ${chat.title}`}
        placeholder="Write something here.."
        className="max-h-40 w-full resize-none border-0 bg-transparent p-0 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
      />
      <div className="flex items-center justify-between">
        <F0Button
          variant="outline"
          size="md"
          icon={Paperclip}
          hideLabel
          label="Attach a file"
        />
        <div className="flex items-center gap-2">
          <F0Button
            variant="ghost"
            size="md"
            icon={Microphone}
            hideLabel
            label="Record a voice message"
          />
          {/* Pale until there is something to send — which is exactly the
              state the frame captures. */}
          <F0Button
            type="submit"
            variant="default"
            size="md"
            icon={ArrowUp}
            hideLabel
            label="Send"
            disabled={draft.trim().length === 0}
          />
        </div>
      </div>
    </form>
  )
}

export function ChatWindow({ chat }: { chat: Chat }) {
  const sent = useSentMessages(chat.id)
  const messages = sent.length ? [...chat.messages, ...sent] : chat.messages
  return (
    // Keyed by chat so switching conversations replays the fade — and so
    // the scroll position and the composer's focus do not carry over from
    // the conversation you just left.
    <div key={chat.id} className="f0c-swap-in flex min-h-0 flex-1 flex-col">
      <div className="home-window-scroll min-h-0 flex-1 overflow-auto px-3 pt-3">
        {/* Capped and centred so a MAXIMIZED chat reads as a column rather
            than a full-screen-wide message list — same 712 as the canvas.
            Docked, the panel is far narrower and the cap never bites. */}
        <div className="mx-auto flex w-full max-w-[712px] flex-col gap-5 px-1">
          {messages.map((message) =>
            message.author ? (
              <IncomingMessage key={message.id} message={message} />
            ) : (
              <OutgoingMessage key={message.id} message={message} />
            )
          )}
          {chat.call && <CallCard call={chat.call} />}
        </div>
      </div>
      <div className="shrink-0 px-3 pb-3 pt-5">
        <div className="mx-auto w-full max-w-[712px]">
          <Composer chat={chat} />
        </div>
      </div>
    </div>
  )
}
