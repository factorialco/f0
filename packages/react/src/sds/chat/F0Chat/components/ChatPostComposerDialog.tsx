import { useCallback, useRef, useState, type ReactNode } from "react"
import { F0RichTextEditor } from "@/components/RichText/F0RichTextEditor/F0RichTextEditor"
import { type F0RichTextEditorHandle } from "@/components/RichText/F0RichTextEditor/F0RichTextEditor"
import { type MentionedUser } from "@/components/RichText/internal/Extensions/Mention/types"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"
import { useF0Chat, useF0ChatEmit } from "../providers/F0ChatProvider"
import { type F0ChatMention, type F0ChatUser } from "../types"
import { stripHtml } from "../utils/posts"

/** A headline long enough to say something, short enough to stay one line in
 * the feed's clamp. */
const TITLE_MAX_LENGTH = 140
const BODY_MAX_CHARACTERS = 10_000

/**
 * Where a post is written: a title, a rich text body, and an explicit Publish.
 *
 * The three rules that make it not-a-message-composer:
 * - **Enter never publishes.** A post reaches everyone in the community; a
 *   mistyped Enter must not be able to send one.
 * - **A failure keeps the dialog open, with the draft in it.** `createPost`
 *   is awaited for exactly this reason — losing a page of writing to a dropped
 *   request is a different order of loss from losing a line.
 * - **Dismissing a written draft asks first.** Escape on an empty dialog just
 *   closes; on a written one it would throw the writing away silently.
 *
 * The actions live on the EDITOR (`primaryAction` / `secondaryAction`), not on
 * the dialog: two footers for one form is one footer too many.
 */
export const ChatPostComposerDialog = ({
  onClose,
  searchMembers,
}: {
  onClose: () => void
  searchMembers?: (query: string) => Promise<F0ChatUser[]>
}): ReactNode => {
  const i18n = useI18n()
  const { createPost } = useF0Chat()
  const emit = useF0ChatEmit()
  const editorRef = useRef<F0RichTextEditorHandle>(null)

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [mentionIds, setMentionIds] = useState<string[]>([])
  const [mentionPool, setMentionPool] = useState<F0ChatUser[]>([])
  const [publishing, setPublishing] = useState(false)
  const [confirmingDiscard, setConfirmingDiscard] = useState(false)

  const hasDraft = title.trim().length > 0 || stripHtml(body).length > 0
  // The title alone gates Publish: a headline with a photo is a post, a body
  // with no headline is a message that wandered into the wrong surface.
  const canPublish = title.trim().length > 0 && !publishing

  const dismiss = useCallback(() => {
    emit.onPostCompositionCancelled({ hadDraft: hasDraft })
    onClose()
  }, [emit, hasDraft, onClose])

  const requestClose = useCallback(() => {
    if (hasDraft) {
      setConfirmingDiscard(true)
      return
    }
    dismiss()
  }, [hasDraft, dismiss])

  const publish = async () => {
    if (!createPost || !canPublish) {
      return
    }
    setPublishing(true)
    editorRef.current?.setError(null)
    try {
      const mentions: F0ChatMention[] = mentionIds
        .map((id) => mentionPool.find((user) => user.id === id))
        .filter((user): user is F0ChatUser => !!user)
        .map((user) => ({
          id: user.id,
          name: user.name,
          avatar: user.avatar,
          subtitle: user.subtitle,
          profileHref: user.profileHref,
        }))

      await createPost({
        title: title.trim(),
        description: stripHtml(body).length > 0 ? body : undefined,
        mentions: mentions.length > 0 ? mentions : undefined,
      })
      editorRef.current?.clear()
      onClose()
    } catch {
      // Deliberately NOT closing: the draft stays on screen so the writer can
      // retry rather than retype.
      editorRef.current?.setError(i18n.chat.community.publishError)
    } finally {
      setPublishing(false)
    }
  }

  if (confirmingDiscard) {
    return (
      <F0Dialog
        isOpen
        onClose={() => setConfirmingDiscard(false)}
        width="sm"
        title={i18n.chat.community.discardTitle}
        description={i18n.chat.community.discardDescription}
        primaryAction={{
          label: i18n.chat.community.discard,
          onClick: dismiss,
        }}
        secondaryAction={{
          label: i18n.chat.community.keepEditing,
          onClick: () => setConfirmingDiscard(false),
        }}
      >
        {null}
      </F0Dialog>
    )
  }

  return (
    <F0Dialog
      isOpen
      onClose={requestClose}
      width="lg"
      title={i18n.chat.community.newPost}
    >
      <div
        className="flex flex-col gap-3"
        data-testid="chat-post-composer-dialog"
      >
        <input
          type="text"
          aria-label={i18n.chat.community.postTitle}
          placeholder={i18n.chat.community.postTitlePlaceholder}
          value={title}
          maxLength={TITLE_MAX_LENGTH}
          autoFocus
          disabled={publishing}
          onChange={(event) => setTitle(event.target.value)}
          // A post is not sent with a key. Swallowing Enter here also stops the
          // dialog's implicit submit, which would publish a half-written post
          // from the title field.
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault()
            }
          }}
          className="w-full rounded-md border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-lg font-medium text-f1-foreground outline-none placeholder:font-normal placeholder:text-f1-foreground-tertiary focus-visible:border-f1-border-selected"
        />
        <F0RichTextEditor
          ref={editorRef}
          title={i18n.chat.community.newPost}
          placeholder={i18n.chat.community.postBodyPlaceholder}
          height="md"
          // The body travels as an HTML string in `F0ChatPost.description`, so
          // the editor hands back HTML rather than its own document JSON.
          plainHtmlMode
          maxCharacters={BODY_MAX_CHARACTERS}
          disabled={publishing}
          mentionsConfig={
            searchMembers
              ? {
                  users: [],
                  onMentionQueryStringChanged: async (query: string) => {
                    const users = await searchMembers(query)
                    setMentionPool(users)
                    return users.map(
                      (user): MentionedUser => ({
                        id: user.id,
                        label: user.name,
                        image_url:
                          user.avatar && "src" in user.avatar
                            ? (user.avatar.src ?? undefined)
                            : undefined,
                        href: user.profileHref,
                      })
                    )
                  },
                }
              : undefined
          }
          onChange={(result) => {
            setBody(result.value ?? "")
            setMentionIds(result.mentionIds ?? [])
          }}
          primaryAction={{
            action: {
              label: i18n.chat.community.publish,
              onClick: () => void publish(),
              disabled: !canPublish,
              variant: "default",
            },
          }}
          secondaryAction={{
            label: i18n.chat.community.cancel,
            onClick: requestClose,
            disabled: publishing,
            variant: "outline",
          }}
        />
      </div>
    </F0Dialog>
  )
}
