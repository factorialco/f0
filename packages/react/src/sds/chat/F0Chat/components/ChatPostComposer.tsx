import { lazy, Suspense, useState, type ReactNode } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Pencil } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useF0Chat, useF0ChatEmit } from "../providers/F0ChatProvider"

/**
 * Split out so the editor is instantiated on the click that opens it, not on
 * the render that shows the feed — and never at all for the readers who can't
 * post. The dialog is its own chunk in the built package.
 *
 * NOTE: this does not keep Tiptap out of a consumer's bundle. `F0RichTextEditor`
 * is a public export, so the vendor chunk it lives in is already in the eager
 * graph of anything importing the `experimental` entry. What this buys is the
 * dialog's own code and its instantiation cost — real, but smaller than it
 * looks. Only a consumer tree-shaking the entry avoids Tiptap entirely.
 */
const ChatPostComposerDialog = lazy(() =>
  import("./ChatPostComposerDialog").then((m) => ({
    default: m.ChatPostComposerDialog,
  }))
)

/**
 * What replaces the message composer on a community channel: a one-line bar
 * that OPENS the post composer rather than being one.
 *
 * Deliberately not a textarea. A post has a title, a body with formatting and
 * media, and it reaches everyone in the community — none of which fits a line
 * you press Enter on. Keeping it a button also means no typing indicators, no
 * draft to lose, and a CONSTANT HEIGHT, so the transcript's bottom gap is
 * settled after the first layout instead of tracking a growing box.
 */
export const ChatPostComposer = (): ReactNode => {
  const i18n = useI18n()
  const { createPost, composePost, searchMembers } = useF0Chat()
  const emit = useF0ChatEmit()
  const [dialogOpen, setDialogOpen] = useState(false)

  // With neither a way to publish nor a flow to hand off to, the affordance
  // would promise something the panel cannot do — so it isn't rendered.
  if (!createPost && !composePost) return null

  const open = () => {
    emit.onPostCompositionStarted()
    // The host's own flow wins: it may already have the fields this dialog
    // doesn't (audience, scheduling, pinning).
    if (composePost) {
      composePost()
      return
    }
    setDialogOpen(true)
  }

  return (
    <div className="pointer-events-none shrink-0 p-4 pt-0">
      <div className="pointer-events-auto mx-auto w-full max-w-content">
        <button
          type="button"
          data-testid="chat-post-composer"
          onClick={open}
          className="flex w-full items-center gap-2 rounded-lg border border-solid border-f1-border-secondary hover:border-f1-border bg-f1-background/90 px-3 py-2.5 text-left shadow-md backdrop-blur-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-f1-border-selected"
        >
          {/* No avatar: the runtime carries the current user's ID but not their
              name or picture, and a generated avatar seeded on an opaque id
              draws initials of a string nobody recognises. */}
          <F0Icon icon={Pencil} size="md" color="secondary" />
          <span className="flex-1 text-f1-foreground-tertiary">
            {i18n.chat.community.writePost}
          </span>
        </button>
      </div>
      {dialogOpen && (
        // No fallback: the dialog is its own overlay, and a skeleton of one
        // flashing over the feed is worse than the click taking a beat.
        <Suspense fallback={null}>
          <ChatPostComposerDialog
            onClose={() => setDialogOpen(false)}
            searchMembers={searchMembers}
          />
        </Suspense>
      )}
    </div>
  )
}
