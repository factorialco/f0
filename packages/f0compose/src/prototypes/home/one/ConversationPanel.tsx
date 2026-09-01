import { F0Button } from "@factorialco/f0-react"
import { ArrowUp, Cross, Maximize } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { ClarifyPanel } from "./ClarifyPanel"
import {
  closeConversationPanel,
  expandConversationPanel,
  sendMessage,
  type Conversation,
} from "./conversationStore"
import { ConversationView } from "./ConversationView"

/**
 * The SPLIT conversation panel (Figma 2730:458631) — the second half of
 * the People flow: click One on a banner and the answer arrives HERE,
 * beside the screen, instead of taking the canvas over.
 *
 * It is deliberately NOT a widget from the window stack: the frame draws a
 * flush, full-height second pane (438px, no gutter, no card chrome, its
 * own navbar) rather than the docked cards the widgets use. Same reason
 * the chats stack could reuse the window system and this cannot — there is
 * no card here to stack, resize or maximize.
 *
 * Header actions, both off the frame: expand promotes this conversation to
 * the full-screen canvas view (the same conversation MOVES — the panel
 * empties as the canvas fills), and ✕ closes it, leaving the conversation
 * in Recents.
 */
export const CONVERSATION_PANEL_WIDTH = 438

/**
 * Hand-rolled composer, like the Comms one and for the same reason: f0's
 * `F0AiChatTextArea` owns its value with no `onChange`, so `OnePromptBar`
 * drives it through DOCUMENT-level input listeners — a second instance on
 * screen would fight the first for them.
 *
 * The frame has no composer at all, because it captures the moment a
 * clarifying question is pending, and a pending question REPLACES the
 * composer (the established rule — see ClarifyPanel). This is what stands
 * in its place once the question is answered.
 */
function PanelComposer({
  conversationId,
  thinking,
}: {
  conversationId: string
  thinking: boolean
}) {
  const [draft, setDraft] = useState("")
  const send = () => {
    const prompt = draft.trim()
    if (!prompt || thinking) return
    sendMessage(prompt, conversationId)
    setDraft("")
  }
  return (
    <form
      className="flex flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-3"
      onSubmit={(e) => {
        e.preventDefault()
        send()
      }}
    >
      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        // Enter sends, Shift+Enter breaks the line — the same contract the
        // main composer and the chat one both use.
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            send()
          }
        }}
        rows={2}
        aria-label="Ask One a follow-up"
        placeholder="Ask a follow-up…"
        className="max-h-40 w-full resize-none border-0 bg-transparent p-0 text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
      />
      <div className="flex items-center justify-end">
        <F0Button
          type="submit"
          variant="default"
          size="md"
          icon={ArrowUp}
          hideLabel
          label="Send"
          disabled={draft.trim().length === 0 || thinking}
        />
      </div>
    </form>
  )
}

export function ConversationPanel({
  conversation,
}: {
  conversation: Conversation
}) {
  // Same rule as the prompt bar: while One waits on a clarifying question
  // the composer DISAPPEARS and the panel takes its place — which is
  // exactly the state the frame captures.
  const pendingQuestionMessage = !conversation.thinking
    ? [...conversation.messages]
        .reverse()
        .find((m) => m.question && !m.question.answer && !m.question.skipped)
    : undefined

  return (
    <aside
      data-one-panel
      className="flex shrink-0 flex-col overflow-hidden"
      style={{ width: CONVERSATION_PANEL_WIDTH }}
      aria-label={`Conversation: ${conversation.title}`}
    >
      <div className="flex w-full shrink-0 items-center justify-between p-[14px]">
        {/* The CONVERSATION's title, which for a One button is the card you
            clicked (per Oskar) — `startWithContext` sets it from
            `context.title`. The frame writes a literal "Conversation",
            which says nothing about what you asked. */}
        <span className="truncate text-base font-medium text-f1-foreground">
          {conversation.title}
        </span>
        <div className="flex items-center">
          <F0Button
            variant="ghost"
            size="md"
            icon={Maximize}
            hideLabel
            label="Expand conversation"
            onClick={expandConversationPanel}
          />
          <F0Button
            variant="ghost"
            size="md"
            icon={Cross}
            hideLabel
            label="Close conversation"
            onClick={closeConversationPanel}
          />
        </div>
      </div>
      {/* justify-between, per the frame: the thread takes the room it needs
          and the follow-up sits on the floor of the panel. */}
      <div className="flex min-h-0 flex-1 flex-col justify-between px-3.5 pt-4">
        {/* The scroller carries `home-canvas-scroll` on purpose: besides
            the mask fade and the theme-aware scrollbar, ConversationView
            finds its nearest one to decide whether the user has scrolled
            away from the newest turn. */}
        <div className="home-canvas-scroll flex min-h-0 flex-1 flex-col overflow-y-auto">
          <ConversationView conversation={conversation} variant="panel" />
        </div>
        <div className="shrink-0 pb-3 pt-3">
          {pendingQuestionMessage ? (
            <ClarifyPanel
              conversationId={conversation.id}
              message={pendingQuestionMessage}
            />
          ) : (
            <PanelComposer
              conversationId={conversation.id}
              thinking={conversation.thinking}
            />
          )}
        </div>
      </div>
    </aside>
  )
}
